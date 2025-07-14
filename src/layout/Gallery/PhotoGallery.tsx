import { memo, useCallback, useMemo, useState } from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import images from '@/layout/Gallery/Images.ts';

// Lazy image component with error handling
const LazyImage = memo(({ 
  src, 
  alt, 
  style, 
  imgRef, 
  onClick 
}: { 
  src: string;
  alt: string;
  style: React.CSSProperties;
  imgRef: React.MutableRefObject<HTMLImageElement>;
  onClick: (e: React.MouseEvent<Element, MouseEvent>) => void;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  if (hasError) {
    return (
      <div style={{ 
        ...style, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: '#f0f0f0',
        color: '#666',
        fontSize: '12px'
      }}>
        Failed to load
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', ...style }}>
      {!isLoaded && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f0f0f0',
          color: '#666',
          fontSize: '12px',
        }}>
          Loading...
        </div>
      )}
      <img
        style={{
          ...style,
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
        alt={alt}
        src={src}
        ref={imgRef}
        onClick={onClick}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
    </div>
  );
});

LazyImage.displayName = 'LazyImage';

const PhotoGallery = memo(() => {
  const smallItemStyles: React.CSSProperties = useMemo(() => ({
    cursor: 'pointer',
    objectFit: 'contain',
    width: '100px',
    height: '150px',
    borderRadius: '4px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  }), []);

  const gridStyles: React.CSSProperties = useMemo(() => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '8px',
    padding: '8px',
  }), []);

  return (
    <Gallery>
      <div style={gridStyles}>
        {images.map((image, index) => {
          return (
            <Item
              key={index}
              cropped
              original={image.source}
              thumbnail={image.source}
              width={image.width}
              height={image.height}>
              {({ ref, open }) => (
                <LazyImage
                  src={image.source}
                  alt={image.alt}
                  style={smallItemStyles}
                  imgRef={ref as React.MutableRefObject<HTMLImageElement>}
                  onClick={open}
                />
              )}
            </Item>
          );
        })}
      </div>
    </Gallery>
  );
});

PhotoGallery.displayName = 'PhotoGallery';

export default PhotoGallery;
