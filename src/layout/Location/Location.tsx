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
        href=""
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
