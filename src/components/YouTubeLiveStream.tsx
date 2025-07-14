import { memo, useCallback, useState } from 'react';
import styled from '@emotion/styled';

const YouTubeLiveStream = memo(() => {
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
      <Wrapper>
        <ErrorMessage>
          Live stream is currently unavailable. Please check back later.
        </ErrorMessage>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {!isLoaded && (
        <LoadingMessage>
          Loading live stream...
        </LoadingMessage>
      )}
      <StyledIframe
        src="https://www.youtube.com/embed/live_stream?channel=UC6eh_JZFR8O9w-de4sIjR5g"
        title="YouTube Live Stream"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
        style={{ opacity: isLoaded ? 1 : 0 }}
      />
    </Wrapper>
  );
});

YouTubeLiveStream.displayName = 'YouTubeLiveStream';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  width: 100%;
  max-width: 800px;
  height: auto;
  border: 2px solid #e88ca6;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  position: relative;
  min-height: 315px;

  @media (max-width: 768px) {
    margin: 20px auto;
    max-width: 95%;
  }
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 315px;
  border: none;
  border-radius: 8px;
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    height: 240px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const LoadingMessage = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  color: #666;
  font-size: 16px;
  border-radius: 8px;
`;

const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 315px;
  background-color: #fff3f3;
  color: #d32f2f;
  font-size: 16px;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    height: 240px;
    font-size: 14px;
  }
`;

export default YouTubeLiveStream;