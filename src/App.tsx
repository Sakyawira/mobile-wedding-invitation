import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { startFallingPetals } from '@/assets/animations/fallingPetals';

import { Heading1 } from '@/components/Text.tsx';
import Wrapper from '@/components/Wrapper.tsx';
import Container from '@/layout/Container.tsx';
import FloatingBar from '@/layout/FloatingBar/FloatingBar.tsx';
import images from '@/layout/Gallery/Images';
import Invitation from '@/layout/Invitation/Invitation.tsx';
import Location from '@/layout/Location/Location.tsx';
import Main from '@/layout/Main/Main.tsx';
import { preloadCriticalImages } from '@/utils/imagePreloader';

// Lazy load heavy components
const YouTubeLiveStream = lazy(() => import('@/components/YouTubeLiveStream.tsx'));
const Account = lazy(() => import('@/layout/Account/Account.tsx'));
const GalleryWrap = lazy(() => import('@/layout/Gallery/GalleryWrap.tsx'));
const Guestbook = lazy(() => import('@/layout/Guestbook/Guestbook.tsx'));
const Timeline = lazy(() => import('@/layout/Timeline/Timeline.tsx'));

// Loading component
const LoadingSpinner = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '200px',
    color: '#666'
  }}>
    Loading...
  </div>
);

function App() {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);
  
  // Create refs normally, not in useMemo
  const mainRef = useRef<HTMLElement | null>(null);
  const invitationRef = useRef<HTMLElement | null>(null);
  const galleryRef = useRef<HTMLElement | null>(null);
  const liveStreamRef = useRef<HTMLElement | null>(null);
  const giftInfoRef = useRef<HTMLElement | null>(null);
  const directionsRef = useRef<HTMLElement | null>(null);
  const messagesRef = useRef<HTMLElement | null>(null);

  // Memoize section refs object to prevent recreation on every render
  const sectionRefs = useMemo(() => ({
    main: mainRef,
    invitation: invitationRef,
    gallery: galleryRef,
    liveStream: liveStreamRef,
    giftInfo: giftInfoRef,
    directions: directionsRef,
    messages: messagesRef,
  }), []);

  // Memoize intersection observer callback
  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
      }
    });
  }, []);

  // Memoize observer options
  const observerOptions = useMemo(() => ({
    threshold: 0.1,
    rootMargin: '50px 0px', // Start loading sections slightly before they come into view
  }), []);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, observerOptions);

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
  }, [observerCallback, observerOptions, sectionRefs]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120, // Trigger animations 120px before element is in viewport
      delay: 100, // Slight delay to prevent jank
    });
  }, []);

  useEffect(() => {
    // Start falling petals with device-optimized settings
    const cleanup = startFallingPetals({
      density: 25, // Reduced from 30 for better performance
      sizeRange: [2, 6],
      speedRange: [0.5, 1.5],
      color: 'rgba(255, 182, 193, 0.9)',
    });
    return cleanup;
  }, []);

  // Preload critical images
  useEffect(() => {
    const imagePaths = images.slice(0, 6).map((image) => image.source);
    preloadCriticalImages(imagePaths);
  }, []);

  // Memoize timeline toggle handler
  const handleTimelineToggle = useCallback(() => {
    setIsTimelineOpen(true);
  }, []);

  // Memoize visibility check
  const hasVisibleSections = useMemo(() => 
    Object.values(visibleSections).some(Boolean), 
    [visibleSections]
  );

  return (
    <Container>
      <Wrapper id="main" ref={mainRef} data-aos="fade-up">
        <Main />
      </Wrapper>
      <hr className="separator" />
      <Wrapper id="invitation" ref={invitationRef} data-aos="fade-up">
        <Heading1>Invitation</Heading1>
        <Invitation />
      </Wrapper>
      <hr className="separator" />
      <Wrapper id="directions" ref={directionsRef} data-aos="fade-up">
        <Heading1>Place & Time</Heading1>
        <Location />
      </Wrapper>
      <hr className="separator" />
      <Wrapper id="timeline" data-aos="fade-up">
        <Heading1>Our Story Timeline</Heading1>
        <Suspense fallback={<LoadingSpinner />}>
          <Timeline isCollapsed={!isTimelineOpen} onExpand={handleTimelineToggle} />
        </Suspense>
      </Wrapper>
      <hr className="separator" />
      <Wrapper id="liveStream" ref={liveStreamRef} data-aos="fade-up">
        <Heading1>Live Stream</Heading1>
        <Suspense fallback={<LoadingSpinner />}>
          <YouTubeLiveStream />
        </Suspense>
      </Wrapper>
      <hr className="separator" />
      <Wrapper id="giftInfo" ref={giftInfoRef} data-aos="fade-up">
        <Heading1>Gift Information</Heading1>
        <Suspense fallback={<LoadingSpinner />}>
          <Account />
        </Suspense>
      </Wrapper>
      <hr className="separator" />
      <Wrapper id="messages" ref={messagesRef} data-aos="fade-up">
        <Heading1>Messages to the Couple</Heading1>
        <Suspense fallback={<LoadingSpinner />}>
          <Guestbook />
        </Suspense>
      </Wrapper>
      <hr className="separator" />
      <Wrapper id="gallery" ref={galleryRef} data-aos="fade-up">
        <Heading1>Gallery</Heading1>
        <Suspense fallback={<LoadingSpinner />}>
          <GalleryWrap />
        </Suspense>
      </Wrapper>
      <FloatingBar isVisible={hasVisibleSections} />
    </Container>
  );
}

export default App;
