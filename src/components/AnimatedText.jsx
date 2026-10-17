import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedText({ 
  children, 
  as = 'h1', 
  className = '', 
  style = {}, 
  delay = 0.1,
  duration = 0.9,
  stagger = 0.08,
  triggerOnScroll = false
}) {
  const containerRef = useRef(null);
  const Component = as;

  useEffect(() => {
    if (!containerRef.current) return;

    const lines = containerRef.current.querySelectorAll('.masked-line-inner');

    const ctx = gsap.context(() => {
      const animConfig = {
        yPercent: 0,
        rotate: 0,
        opacity: 1,
        duration: duration,
        stagger: stagger,
        ease: 'power3.out',
      };

      if (triggerOnScroll) {
        gsap.fromTo(
          lines,
          {
            yPercent: 120,
            rotate: 2,
            opacity: 0,
          },
          {
            ...animConfig,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 88%',
              end: 'bottom 10%',
              toggleActions: 'play reverse play reverse',
            }
          }
        );
      } else {
        gsap.fromTo(
          lines,
          {
            yPercent: 120,
            rotate: 2,
            opacity: 0,
          },
          {
            ...animConfig,
            delay: delay,
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [delay, duration, stagger, triggerOnScroll]);

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
