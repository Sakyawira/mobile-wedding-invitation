import { memo, useCallback, useMemo } from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import data from 'data.json';
import JSConfetti from 'js-confetti';
import Heart from '@/assets/icons/heart_plus.svg?react';
import Share from '@/assets/icons/share.svg?react';
import Upward from '@/assets/icons/upward.svg?react';
import Button from '@/components/Button.tsx';

const FloatingBar = memo(({ isVisible }: { isVisible: boolean }) => {
  const { emojis } = data;

  // Memoize JSConfetti instance to avoid recreation
  const jsConfetti = useMemo(() => new JSConfetti(), []);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(window.location.href).then(
      () => {
        alert('Address copied successfully. 😉😉');
      },
      () => {
        alert('Failed to copy the address. 🥲🥲');
      },
    );
  }, []);

  const handleCount = useCallback(() => {
    void jsConfetti.addConfetti({ emojis });
  }, [jsConfetti, emojis]);

  const handleScroll = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Nav isVisible={isVisible}>
      <Button onClick={handleCount}>
        <Heart fill="#e88ca6" />
        {/*{count || ''}*/}
      </Button>
      <Button onClick={handleCopy}>
        <Share fill="#e88ca6" />
        Share
      </Button>
      <Button onClick={handleScroll}>
        <Upward fill="#e88ca6" />
        Scroll Up
      </Button>
    </Nav>
  );
});

FloatingBar.displayName = 'FloatingBar';

export default FloatingBar;

const slideUp = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`;

const Nav = styled.nav<{ isVisible: boolean }>`
  min-width: 280px;
  position: fixed;
  bottom: 30px;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  gap: 5px;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  animation: ${(props) => (props.isVisible ? slideUp : 'none')} 0.5s ease-out;
  z-index: 1000;
  
  @media (max-width: 768px) {
    min-width: 250px;
    bottom: 20px;
    gap: 3px;
  }
  
  @media (max-width: 480px) {
    min-width: 200px;
    bottom: 15px;
    gap: 2px;
  }
`;
