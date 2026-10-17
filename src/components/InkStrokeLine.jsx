import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function InkStrokeLine({ 
  width = '100%', 
  height = '14px', 
  color = 'var(--brand-blue)', 
  delay = 0.3,
  triggerOnScroll = false 
}) {
  const pathRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    if (!pathRef.current) return;

    const path = pathRef.current;
    const length = path.getTotalLength();

    // Set initial dasharray and offset
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
      opacity: 1
    });

    if (triggerOnScroll) {
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: svgRef.current,
          start: 'top 85%',
        }
      });
    } else {
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 1.4,
        delay: delay,
        ease: 'power3.inOut',
      });
    }
  }, [delay, triggerOnScroll]);

  return (
    <svg 
      ref={svgRef}
      style={{ 
        width: width, 
        height: height, 
        display: 'block', 
        overflow: 'visible' 
      }} 
      viewBox="0 0 400 12" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        ref={pathRef}
        d="M2 7C48 3.5 120 2 210 5.5C280 8 350 4 398 7" 
        stroke={color} 
        strokeWidth="3.5" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
