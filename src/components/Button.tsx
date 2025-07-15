import styled from '@emotion/styled';

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid #dfdfdf;
  outline: none;
  box-shadow: none;
  font-size: 0.9rem;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  color: #1a1a1a;
  text-decoration: none;
  gap: 2px;
`.withComponent('a');

export default Button;
