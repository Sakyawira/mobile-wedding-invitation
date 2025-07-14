// Image preloading utility for better performance
interface PreloadOptions {
  priority?: 'high' | 'low';
  crossOrigin?: 'anonymous' | 'use-credentials';
}

class ImagePreloader {
  private static instance: ImagePreloader;
  private loadedImages = new Set<string>();
  private loadingImages = new Map<string, Promise<void>>();

  static getInstance(): ImagePreloader {
    if (!ImagePreloader.instance) {
      ImagePreloader.instance = new ImagePreloader();
    }
    return ImagePreloader.instance;
  }

  // Preload a single image
  preloadImage(src: string, options: PreloadOptions = {}): Promise<void> {
    // Return immediately if already loaded
    if (this.loadedImages.has(src)) {
      return Promise.resolve();
    }

    // Return existing promise if already loading
    if (this.loadingImages.has(src)) {
      return this.loadingImages.get(src)!;
    }

    // Create new loading promise
    const loadingPromise = new Promise<void>((resolve, reject) => {
      const img = new Image();
      
      img.onload = () => {
        this.loadedImages.add(src);
        this.loadingImages.delete(src);
        resolve();
      };
      
      img.onerror = () => {
        this.loadingImages.delete(src);
        reject(new Error(`Failed to load image: ${src}`));
      };
      
      if (options.crossOrigin) {
        img.crossOrigin = options.crossOrigin;
      }
      
      img.src = src;
    });

    this.loadingImages.set(src, loadingPromise);
    return loadingPromise;
  }

  // Preload multiple images
  preloadImages(sources: string[], options: PreloadOptions = {}): Promise<void[]> {
    return Promise.all(sources.map(src => this.preloadImage(src, options)));
  }

  // Preload images with priority (high priority first)
  preloadImagesWithPriority(
    highPriority: string[],
    lowPriority: string[]
  ): Promise<void> {
    return new Promise((resolve) => {
      // Load high priority images first
      this.preloadImages(highPriority, { priority: 'high' })
        .then(() => {
          // Then load low priority images
          void this.preloadImages(lowPriority, { priority: 'low' })
            .finally(() => resolve());
        })
        .catch(() => {
          // Still try to load low priority images even if high priority fails
          void this.preloadImages(lowPriority, { priority: 'low' })
            .finally(() => resolve());
        });
    });
  }

  // Check if image is loaded
  isImageLoaded(src: string): boolean {
    return this.loadedImages.has(src);
  }

  // Clear cache
  clearCache(): void {
    this.loadedImages.clear();
    this.loadingImages.clear();
  }

  // Get cache stats
  getCacheStats(): { loaded: number; loading: number } {
    return {
      loaded: this.loadedImages.size,
      loading: this.loadingImages.size,
    };
  }
}

// React hook for image preloading
import { useEffect, useState } from 'react';

export const useImagePreloader = (
  images: string[],
  options: PreloadOptions = {}
) => {
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (images.length === 0) return;

    const preloader = ImagePreloader.getInstance();
    setIsLoading(true);
    setError(null);

    let loadedImages = 0;

    const loadImage = async (src: string) => {
      try {
        await preloader.preloadImage(src, options);
        loadedImages++;
        setLoadedCount(loadedImages);
      } catch (err) {
        setError(err as Error);
      }
    };

    // Load all images
    void Promise.all(images.map(loadImage))
      .finally(() => {
        setIsLoading(false);
      });
  }, [images, options]);

  return {
    loadedCount,
    totalCount: images.length,
    isLoading,
    error,
    progress: images.length > 0 ? loadedCount / images.length : 0,
  };
};

// Preload critical images on app start
export const preloadCriticalImages = (images: string[]): void => {
  const preloader = ImagePreloader.getInstance();
  
  // Use requestIdleCallback if available, otherwise setTimeout
  const schedulePreload = (callback: () => void) => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(callback);
    } else {
      setTimeout(callback, 0);
    }
  };

  schedulePreload(() => {
    preloader.preloadImages(images, { priority: 'high' })
      .catch(err => {
        console.warn('Failed to preload critical images:', err);
      });
  });
};

export default ImagePreloader;
