import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/05.jpg';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Main = () => {
  const { greeting } = data;
  return (
    <div>
      <MainImg src={mainImg} />
      <MainTitle>{greeting.title}</MainTitle>
      {/* <SubTitle>{greeting.eventDetail}</SubTitle> */}
    </div>
  );
};

export default Main;

const MainImg = styled.img`
  border-radius: 200px 200px 0 0;
  width: 90%;
  max-width: 450px;
  padding: 20px;
  animation: ${fadeIn} 1s ease-out;
`;

const MainTitle = styled.p`
  font-family: HSSanTokki20-Regular, serif;
  font-size: 2rem;
  color: #2F2120;
  line-height: 120%;
  white-space: pre-line;
  margin: 10px 0;
  animation: ${fadeIn} 1.2s ease-out;
`;

const SubTitle = styled.p`
  font-size: 1.1rem;
  color: #2F2120;
  line-height: 140%;
  white-space: pre-line;
  margin: 10px 0;
  animation: ${fadeIn} 1.4s ease-out;
`;
