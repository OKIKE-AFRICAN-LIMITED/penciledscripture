import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorDot = useRef(null);
  const cursorRing = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    setIsVisible(true);

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;

      // Direct snappy follow for the dot
      gsap.to(cursorDot.current, {
        x: x,
        y: y,
        duration: 0.1,
        ease: 'power2.out',
      });

      // Smooth delayed inertia for the ring
      gsap.to(cursorRing.current, {
        x: x,
        y: y,
        duration: 0.35,
        ease: 'power3.out',
      });
    };

    const onMouseEnterInteractive = () => {
      gsap.to(cursorRing.current, {
        scale: 1.8,
        borderColor: 'var(--brand-blue)',
        backgroundColor: 'rgba(29, 155, 240, 0.08)',
        duration: 0.25,
      });
      gsap.to(cursorDot.current, {
        scale: 0.5,
        backgroundColor: 'var(--brand-blue)',
        duration: 0.25,
      });
    };

    const onMouseLeaveInteractive = () => {
      gsap.to(cursorRing.current, {
        scale: 1,
        borderColor: 'rgba(13, 17, 23, 0.35)',
        backgroundColor: 'transparent',
        duration: 0.25,
      });
      gsap.to(cursorDot.current, {
        scale: 1,
        backgroundColor: 'var(--brand-blue)',
        duration: 0.25,
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    // Attach listeners to all clickable / interactive elements
    const setupListeners = () => {
      const interactives = document.querySelectorAll('a, button, input, select, textarea, .interactive-card');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnterInteractive);
        el.addEventListener('mouseleave', onMouseLeaveInteractive);
      });
    };

    setupListeners();
    const interval = setInterval(setupListeners, 1500);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Center Dot */}
      <div
        ref={cursorDot}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: 'var(--brand-blue)',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />
      {/* Inertial Outer Ring */}
      <div
        ref={cursorRing}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '1.5px solid rgba(13, 17, 23, 0.35)',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
          transition: 'background-color 0.2s, border-color 0.2s',
        }}
      />
    </>
  );
}
