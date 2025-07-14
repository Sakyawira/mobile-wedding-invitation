import { useEffect } from 'react';
import styled from '@emotion/styled';
import data from 'data.json';
import Host from '../Contact/Host.tsx';
import { Paragraph } from '@/components/Text.tsx';

const Invitation = () => {
  const { greeting } = data;

  useEffect(() => {
    const calendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      greeting.title
    )}&dates=20250217T050000Z/20250217T070000Z&details=${encodeURIComponent(
      greeting.message
    )}&location=${encodeURIComponent(greeting.eventDetail)}`;
    const calendarLinkElement = document.getElementById('google-calendar-link');
    if (calendarLinkElement) {
      calendarLinkElement.setAttribute('href', calendarLink);
    }
  }, []);

  return (
    <InvitationWrapper>
      <StyledParagraph>{greeting.message}</StyledParagraph>
      <Host />
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0 16px;
  max-width: 100%;
`;

const StyledParagraph = styled(Paragraph)`
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  max-width: 100%;
  text-align: center;
  line-height: 1.5;
  
  /* Galaxy S20 specific breakpoint (360px width) */
  @media (max-width: 360px) {
    font-size: 0.9rem;
    line-height: 1.4;
    padding: 0 8px;
  }
  
  /* Extra small devices */
  @media (max-width: 320px) {
    font-size: 0.85rem;
    line-height: 1.3;
    padding: 0 4px;
  }
`;