import { useCallback, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import PhotoGallery from './PhotoGallery.tsx';

const GalleryWrap = () => {
  const [isMoreView, setIsMoreView] = useState(false);

  const onClickImageMoreViewButton = useCallback(() => {
    setIsMoreView(!isMoreView);
  }, [isMoreView]);

  // Memoize button text
  const buttonText = useMemo(() => (isMoreView ? 'Collapse' : 'Expand'), [isMoreView]);

  return (
    <ContentsWrap>
      <ImageMoreWrap isMoreView={isMoreView}>
        {!isMoreView && <WhiteGradientOverlay />}
        <PhotoGallery />
      </ImageMoreWrap>
      {!isMoreView && (
        <PlusButton onClick={onClickImageMoreViewButton}>{buttonText}</PlusButton>
      )}
    </ContentsWrap>
  );
};

export default GalleryWrap;

const ContentsWrap = styled.div`
  margin: 30px 0;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageMoreWrap = styled.div<{ isMoreView: boolean }>`
  position: relative;
  max-height: ${(props) =>
    props.isMoreView
      ? ''
      : '60vh'}; /* When isMoreView is true, no height limit; when false, limit to 60vh */
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`;

const WhiteGradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgb(255, 255, 255) 90%
  );
  pointer-events: none; /* Allow clicking through overlay */
  z-index: 1;
`;

const PlusButton = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  font-size: 1rem;
  text-align: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #dfdfdf;
  cursor: pointer;
  transition: transform 0.3s ease;
  background: #fff;
  
  &:hover {
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;
