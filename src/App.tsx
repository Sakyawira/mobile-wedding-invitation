import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { startFallingPetals } from '@/assets/animations/fallingPetals';

import { Heading1 } from '@/components/Text.tsx';
import Wrapper from '@/components/Wrapper.tsx';
import YouTubeLiveStream from '@/components/YouTubeLiveStream.tsx';
import Account from '@/layout/Account/Account.tsx';
import Container from '@/layout/Container.tsx';
import FloatingBar from '@/layout/FloatingBar/FloatingBar.tsx';
import GalleryWrap from '@/layout/Gallery/GalleryWrap.tsx';
import Guestbook from '@/layout/Guestbook/Guestbook.tsx';
import Invitation from '@/layout/Invitation/Invitation.tsx';
import Location from '@/layout/Location/Location.tsx';
import Main from '@/layout/Main/Main.tsx';
import Timeline from '@/layout/Timeline/Timeline.tsx';

function App() {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);
  const sectionRefs = {
    main: useRef<HTMLElement | null>(null),
    invitation: useRef<HTMLElement | null>(null),
    gallery: useRef<HTMLElement | null>(null),
    liveStream: useRef<HTMLElement | null>(null),
    giftInfo: useRef<HTMLElement | null>(null),
    directions: useRef<HTMLElement | null>(null),
    messages: useRef<HTMLElement | null>(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 },
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  useEffect(() => {
    // Start falling petals with device-optimized settings
    const cleanup = startFallingPetals({
      density: 30, // Reasonable default - will be automatically adjusted based on device
      sizeRange: [2, 6], // Smaller base sizes for more delicate effect
      speedRange: [0.5, 1.5], // Slower for better visibility
      color: 'rgba(255, 182, 193, 0.9)', // Higher opacity for mobile
    });
    return cleanup; // Ensure proper cleanup when the component unmounts
  }, []);

  return (
    <Container>
      <Wrapper id="main" ref={sectionRefs.main} data-aos="fade-up">
        <Main />
      </Wrapper>
      <hr className="separator" />
      <Wrapper id="invitation" ref={sectionRefs.invitation} data-aos="fade-up">
        <Heading1>Invitation</Heading1>
        <Invitation />
      </Wrapper>
      <hr className="separator" />
      <Wrapper id="directions" ref={sectionRefs.directions} data-aos="fade-up">
        <Heading1>Place & Time</Heading1>
        <Location />
      </Wrapper>
      <hr className="separator" />
      <Wrapper id="timeline" data-aos="fade-up">
        <Heading1>Our Story Timeline</Heading1>
        <Timeline isCollapsed={!isTimelineOpen} onExpand={() => setIsTimelineOpen(true)} />
      </Wrapper>
      <hr className="separator" />
      <Wrapper id="liveStream" ref={sectionRefs.liveStream} data-aos="fade-up">
        <Heading1>Live Stream</Heading1>
        <YouTubeLiveStream />
      </Wrapper>
      <hr className="separator" />
      <Wrapper id="giftInfo" ref={sectionRefs.giftInfo} data-aos="fade-up">
        <Heading1>Gift Information</Heading1>
        <Account />
      </Wrapper>
      <hr className="separator" />
      <Wrapper id="messages" ref={sectionRefs.messages} data-aos="fade-up">
        <Heading1>Messages to the Couple</Heading1>
        <Guestbook />
      </Wrapper>
      <hr className="separator" />
      <Wrapper id="gallery" ref={sectionRefs.gallery} data-aos="fade-up">
        <Heading1>Gallery</Heading1>
        <GalleryWrap />
      </Wrapper>
      <FloatingBar isVisible={Object.values(visibleSections).some(Boolean)} />
    </Container>
  );
}

export default App;
