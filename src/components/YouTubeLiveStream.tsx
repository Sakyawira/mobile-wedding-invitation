import styled from '@emotion/styled';

const YouTubeLiveStream = () => {
  return (
    <Wrapper>
      <StyledIframe
        src="https://www.youtube.com/embed/live_stream?channel=UC6eh_JZFR8O9w-de4sIjR5g"
        title="YouTube Live Stream"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></StyledIframe>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto; /* Updated margin to align with the rest of the site */
  width: 100%;
  max-width: 800px;
  height: auto;
  border: 2px solid #e88ca6;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 315px;
  border: none;
  border-radius: 8px;
`;

export default YouTubeLiveStream;