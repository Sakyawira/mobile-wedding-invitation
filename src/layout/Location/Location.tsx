import styled from '@emotion/styled';
import data from 'data.json';
import Map from './Map.tsx';
import RoundButton from '@/components/RoundButton.tsx';
import { Caption, PointTitle } from '@/components/Text.tsx';

const Location = () => {
  const { mapInfo, locationInfo } = data;
  return (
    <LocationWrapper>


      {/* <PointTitle>{mapInfo.address1}</PointTitle>
      <Caption textAlign={'center'}>{mapInfo.address2}</Caption> */}
      <Way>
    <PointTitle>{locationInfo[1].title}</PointTitle>
                    <Caption>{locationInfo[1].desc}</Caption>
      <Map src={mapInfo.googleMap } />

      </Way>
                      <Way>
              <PointTitle>{locationInfo[0].title}</PointTitle>
                    <Caption>{locationInfo[0].desc}</Caption>
                          <RoundButton
        id="google-calendar-link"
        target="_blank"
        href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Sakyawira%20%26%20Debbie%20Wedding&dates=20250816T033000Z/20250816T060000Z&details=Join%20us%20for%20the%20wedding%20celebration%20of%20Sakyawira%20and%20Debbie!%20%0A%0ALocation%3A%20Cox%27s%20Bay%20Pavillion%20Hall%2C%20Auckland%2C%20New%20Zealand%0A%0ATime%3A%203%3A30%20PM%20New%20Zealand%20Time%20(will%20convert%20to%20your%20local%20time)&location=Cox%27s%20Bay%20Pavillion%20Hall%2C%2040%20Kingsley%20Street%2C%20Westmere%2C%20Auckland%201022%2C%20New%20Zealand&ctz=Pacific/Auckland"
        rel="noreferrer">
        Add to Calendar
      </RoundButton>
      </Way>

    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const Way = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-top: 24px;
`;
