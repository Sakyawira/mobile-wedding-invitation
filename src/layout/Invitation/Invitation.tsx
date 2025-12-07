import { useEffect } from 'react';
import styled from '@emotion/styled';
import data from 'data.json';
import Host from '../Contact/Host.tsx';
import { Paragraph } from '@/components/Text.tsx';

const Invitation = () => {
  const { greeting, mapInfo, locationInfo } = data;

  useEffect(() => {
    // Parse the date from greeting.eventDetail: "August 16, 2025 (Saturday) 15:300"
    // Note: There's a typo in your data - "15:300" should be "15:30"
    const eventDate = new Date('2025-08-16T15:30:00'); // August 16, 2025 at 3:30 PM
    const endDate = new Date(eventDate.getTime() + 2 * 60 * 60 * 1000); // Add 2 hours
    
    // Format dates for Google Calendar (YYYYMMDDTHHMMSSZ)
    const startDateStr = eventDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const endDateStr = endDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    
    // Use the actual location from data.json
    const location = mapInfo.address1 || locationInfo[1].desc || '';
    
    const calendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      'Sakyawira & Debbie Wedding'
    )}&dates=${startDateStr}/${endDateStr}&details=${encodeURIComponent(
      greeting.message
    )}&location=${encodeURIComponent(location)}`;
    
    const calendarLinkElement = document.getElementById('google-calendar-link');
    if (calendarLinkElement) {
      calendarLinkElement.setAttribute('href', calendarLink);
    }
  }, []);

  return (
    <InvitationWrapper>
      <StyledParagraph>{greeting.message}</StyledParagraph>
      {/* <Host /> */}
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