import { useEffect, useMemo, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { startFallingPetals } from '@/assets/animations/fallingPetals';
import WhaleSeaImage from '@/assets/images/whaleseal.png';

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
  
  const mainRef = useRef<HTMLElement | null>(null);
  const invitationRef = useRef<HTMLElement | null>(null);
  const galleryRef = useRef<HTMLElement | null>(null);
  const liveStreamRef = useRef<HTMLElement | null>(null);
  const giftInfoRef = useRef<HTMLElement | null>(null);
  const directionsRef = useRef<HTMLElement | null>(null);
  const messagesRef = useRef<HTMLElement | null>(null);
  
  const sectionRefs = useMemo(() => ({
    main: mainRef,
    invitation: invitationRef,
    gallery: galleryRef,
    liveStream: liveStreamRef,
    giftInfo: giftInfoRef,
    directions: directionsRef,
    messages: messagesRef,
  }), []);

  useEffect(() => {
    // Detect device type for optimized observer settings
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { 
        threshold: isIOS ? 0.05 : isMobile ? 0.08 : 0.1, // Lower threshold for iOS
        rootMargin: isIOS ? '50px' : '20px' // Larger margin for iOS to trigger earlier
      },
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
    // Detect device type for optimized AOS settings
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    AOS.init({
      duration: isIOS ? 600 : isMobile ? 800 : 1000, // Shorter animations for iOS
      once: true, // Whether animation should happen only once
      disable: isIOS && window.innerWidth < 768, // Disable AOS on small iOS devices
      throttleDelay: isIOS ? 100 : 50, // Throttle scroll events more on iOS
    });
  }, []);

  useEffect(() => {
    // Detect iOS devices
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    // Skip animation entirely on iOS devices to prevent crashes
    if (isIOS) {
      return;
    }
    
    // Add a small delay to prevent immediate execution issues
    const timer = setTimeout(() => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      // Very conservative settings for other mobile devices
      const petalConfig = {
        density: isMobile ? 8 : 15, // Much lower density for mobile
        sizeRange: [1, 3] as [number, number], // Smaller petals
        speedRange: [0.3, 0.8] as [number, number], // Slower movement
        color: 'rgba(255, 182, 193, 0.6)', // Lower opacity
      };
      
      try {
        const cleanup = startFallingPetals(petalConfig);
        return cleanup;
      } catch (error) {
        console.warn('Failed to start falling petals:', error);
        return undefined;
      }
    }, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Container>
      <Wrapper id="main" ref={mainRef} data-aos="fade-up">
          <Main />
        </Wrapper>
      <hr className="separator" />
      <Wrapper id="invitation" ref={invitationRef} data-aos="fade-up">
        <Heading1>Undangan</Heading1>
        <Invitation />
      </Wrapper>
      <hr className="separator" />
      <Wrapper id="directions" ref={directionsRef} data-aos="fade-up">
        <Heading1>Tempat & Waktu</Heading1>
        <Location />
      </Wrapper>
      {/* <hr className="separator" /> */}
      {/* <Wrapper id="timeline" data-aos="fade-up">
        <Heading1>Our Story Timeline</Heading1>
        <Timeline isCollapsed={!isTimelineOpen} onExpand={() => setIsTimelineOpen(true)} />
      </Wrapper> */}
      {/* <hr className="separator" /> */}
      {/* <Wrapper id="liveStream" ref={liveStreamRef} data-aos="fade-up">
        <Heading1>Live Stream</Heading1>
        <YouTubeLiveStream />
      </Wrapper>
      <hr className="separator" /> */}
      {/* <Wrapper id="giftInfo" ref={giftInfoRef} data-aos="fade-up">
        <Heading1>Gift Information</Heading1>
        <div style={{ 
          textAlign: 'center', 
          padding: '1rem', 
          color: '#8B4513',
          fontFamily: 'serif',
          maxWidth: '100%',
          overflow: 'hidden'
        }}>
          <p style={{ 
            fontSize: 'clamp(0.8rem, 2.5vw, 1rem)', 
            lineHeight: '1.4', 
            maxWidth: '95%', 
            margin: '0 auto',
            wordBreak: 'break-word',
            hyphens: 'auto',
            color: '#8B4513',
            fontStyle: 'italic'
          }}>
            For our Indonesian friends who wish to send gifts
          </p>
        </div>
        <Account />
      </Wrapper> */}

      <hr className="separator" />
      <Wrapper id="messages" ref={messagesRef} data-aos="fade-up">
        <Heading1>Kofirmasi Kedatangan</Heading1>
        <Guestbook />
      </Wrapper>
      {/* <hr className="separator" />
      <Wrapper id="gallery" ref={galleryRef} data-aos="fade-up">
        <Heading1>Gallery</Heading1>
        <GalleryWrap />
      </Wrapper> */}
      <hr className="separator" style={{ marginBottom: '10px' }} />
      <Wrapper id="thankyou" data-aos="fade-up">
        <div style={{ 
          textAlign: 'center', 
          padding: '0.25rem 1rem 1.5rem 1rem', 
          color: '#8B4513',
          fontFamily: 'serif',
          maxWidth: '100%',
          overflow: 'hidden'
        }}>
          <Heading1 style={{ 
            marginBottom: '1.5rem',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            wordBreak: 'break-word'
          }}>Terima Kasih!</Heading1>
          <p style={{ 
            fontSize: 'clamp(0.9rem, 3vw, 1.1rem)', 
            lineHeight: '1.6', 
            maxWidth: '90%', 
            margin: '0 auto',
            marginBottom: '1rem',
            wordBreak: 'break-word',
            hyphens: 'auto'
          }}>
            Dengan segala hormat, kami sangat mengharapkan kehadiran keluarga dalam acara ini sebagai bentuk dukungan dan restu bagi kedua mempelai.
          </p>
          <p style={{ 
            fontSize: 'clamp(1rem, 3.5vw, 1.2rem)', 
            fontWeight: 'bold',
            color: '#D2691E',
            wordBreak: 'break-word',
            maxWidth: '90%',
            margin: '0 auto'
          }}>
            Hormat kami,
          </p>
          <p style={{ 
            fontSize: 'clamp(1rem, 3.5vw, 1.2rem)', 
            fontWeight: 'bold',
            color: '#D2691E',
            wordBreak: 'break-word',
            maxWidth: '90%',
            margin: '0 auto'
          }}>
            Djajadi dan Silvi
              <br></br>
              ...
          </p>
        </div>
    </Wrapper>
      <FloatingBar isVisible={Object.values(visibleSections).some(Boolean)} />
    </Container>
  );
}

export default App;
