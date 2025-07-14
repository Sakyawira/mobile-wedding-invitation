// Performance monitoring utility
interface PerformanceMetrics {
  renderTime: number;
  componentCount: number;
  memoryUsage?: number;
  fps?: number;
}

class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Record<string, PerformanceMetrics> = {};
  private frameCount = 0;
  private lastTime = performance.now();
  private fps = 0;

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Monitor component render times
  startRender(componentName: string): () => void {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      
      this.metrics[componentName] = {
        ...this.metrics[componentName],
        renderTime,
        componentCount: (this.metrics[componentName]?.componentCount || 0) + 1,
      };
      
      // Log slow renders in development
      if (process.env.NODE_ENV === 'development' && renderTime > 16) {
        console.warn(`Slow render detected: ${componentName} took ${renderTime.toFixed(2)}ms`);
      }
    };
  }

  // Monitor FPS
  startFPSMonitoring(): void {
    const updateFPS = () => {
      this.frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - this.lastTime >= 1000) {
        this.fps = this.frameCount;
        this.frameCount = 0;
        this.lastTime = currentTime;
        
        // Log low FPS in development
        if (process.env.NODE_ENV === 'development' && this.fps < 30) {
          console.warn(`Low FPS detected: ${this.fps} fps`);
        }
      }
      
      requestAnimationFrame(updateFPS);
    };
    
    requestAnimationFrame(updateFPS);
  }

  // Get memory usage if available
  getMemoryUsage(): number | undefined {
    if ('memory' in performance) {
      const performanceWithMemory = performance as Performance & {
        memory: {
          usedJSHeapSize: number;
        };
      };
      return performanceWithMemory.memory.usedJSHeapSize / 1024 / 1024; // MB
    }
    return undefined;
  }

  // Get performance report
  getReport(): Record<string, PerformanceMetrics> {
    const memoryUsage = this.getMemoryUsage();
    
    // Add memory usage and FPS to all metrics
    Object.keys(this.metrics).forEach(key => {
      this.metrics[key].memoryUsage = memoryUsage;
      this.metrics[key].fps = this.fps;
    });
    
    return this.metrics;
  }

  // Clear metrics
  clear(): void {
    this.metrics = {};
  }

  // Log performance summary
  logSummary(): void {
    if (process.env.NODE_ENV === 'development') {
      console.group('Performance Summary');
      console.table(this.getReport());
      console.groupEnd();
    }
  }
}

// React hook for performance monitoring
import { useEffect, useRef } from 'react';

export const usePerformanceMonitor = (componentName: string) => {
  const monitor = PerformanceMonitor.getInstance();
  const renderStartRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    renderStartRef.current = monitor.startRender(componentName);
    
    return () => {
      if (renderStartRef.current) {
        renderStartRef.current();
      }
    };
  });

  return monitor;
};

export default PerformanceMonitor;
