import { useEffect } from 'react';
import styled from '@emotion/styled';
import data from 'data.json';
import Host from '../Contact/Host.tsx';
import RoundButton from '@/components/RoundButton.tsx';
import { Caption, Paragraph } from '@/components/Text.tsx';

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
      <Paragraph>{greeting.message}</Paragraph>
      <Host />
      <Caption textAlign={'center'}>{greeting.eventDetail}</Caption>
      <RoundButton
        id="google-calendar-link"
        target="_blank"
        href=""
        rel="noreferrer">
        Add to Google Calendar
      </RoundButton>
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
