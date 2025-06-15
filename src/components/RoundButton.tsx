import styled from '@emotion/styled';

const RoundButton = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  outline: none;
  box-shadow: none;
  font-size: 0.9rem;
  cursor: pointer;
  color: #44484d;
  text-decoration: none;
  background-color: #e6ece1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`.withComponent('a');

export default RoundButton;
