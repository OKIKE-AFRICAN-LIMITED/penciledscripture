import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AnimatedText({ 
  children, 
  as = 'h1', 
  className = '', 
  style = {}, 
  delay = 0.1,
  duration = 1.0,
  stagger = 0.08
}) {
  const containerRef = useRef(null);
  const Component = as;

  useEffect(() => {
    if (!containerRef.current) return;

    const lines = containerRef.current.querySelectorAll('.masked-line-inner');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lines,
        {
          yPercent: 120,
          rotate: 2,
          opacity: 0,
        },
        {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          duration: duration,
          stagger: stagger,
          delay: delay,
          ease: 'power4.out',
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [delay, duration, stagger]);

  // If children is a string, split by newline or keep intact
  const text = typeof children === 'string' ? children : '';

  return (
    <Component 
      ref={containerRef} 
      className={className} 
      style={{ ...style }}
    >
      {text ? (
        text.split('\n').map((line, idx) => (
          <span 
            key={idx} 
            className="masked-line-wrapper"
            style={{ 
              display: 'block', 
              overflow: 'hidden', 
              paddingBottom: '0.15em',
              marginBottom: '-0.15em' 
            }}
          >
            <span 
              className="masked-line-inner"
              style={{ 
                display: 'inline-block', 
                transformOrigin: 'left bottom',
                willChange: 'transform, opacity' 
              }}
            >
              {line}
            </span>
          </span>
        ))
      ) : (
        <span 
          className="masked-line-wrapper" 
          style={{ display: 'block', overflow: 'hidden' }}
        >
          <span 
            className="masked-line-inner" 
            style={{ display: 'inline-block', willChange: 'transform, opacity' }}
          >
            {children}
          </span>
        </span>
      )}
    </Component>
  );
}
