import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from '@emotion/styled';
import images from '@/layout/Gallery/Images';
import { PointTitle, Caption } from '@/components/Text';

const timelineEvents = [
  {
    date: 'Engagement',
    title: 'We got engaged!',
    description: 'A beautiful moment together.',
    image: images[0].source,
  },
  {
    date: 'Pre-wedding',
    title: 'Pre-wedding Photoshoot',
    description: 'Captured our love in photos.',
    image: images[4].source,
  },
  {
    date: 'Wedding Day',
    title: 'Wedding Ceremony',
    description: 'Our big day!',
    image: images[7].source,
  },
  {
    date: 'Reception',
    title: 'Reception Party',
    description: 'Celebrating with friends and family.',
    image: images[10].source,
  },
];

const Timeline = () => (
  <TimelineWrapper>
    <VerticalTimeline lineColor="#e88ca6">
      {timelineEvents.map((event, idx) => (
        <VerticalTimelineElement
          key={idx}
          date={event.date}
          iconStyle={{ background: '#e88ca6', color: '#fff', boxShadow: '0 0 0 4px #e6ece1' }}
          contentStyle={{ background: '#fff', color: '#2F2120', border: '1px solid #e6ece1' }}
          contentArrowStyle={{ borderRight: '7px solid #e6ece1' }}
        >
          <PointTitle>{event.title}</PointTitle>
          <Caption>{event.description}</Caption>
          <Image src={event.image} alt={event.title} />
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </TimelineWrapper>
);

const TimelineWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(232, 140, 166, 0.08);
  padding: 20px 0;
`;

const Image = styled.img`
  width: 100%;
  max-width: 320px;
  border-radius: 12px;
  margin-top: 12px;
  box-shadow: 0 2px 8px rgba(232, 140, 166, 0.10);
`;

export default Timeline;
