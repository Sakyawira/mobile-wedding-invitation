import styled from '@emotion/styled';

interface MapProps {
  src: string;
}

const Map = ({ src }: MapProps) => {
  return (
    <StyledIframe
      src={src}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></StyledIframe>
  );
};

const StyledIframe = styled.iframe`
  width: 100%;
  max-width: 400px;
  height: 250px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export default Map;
