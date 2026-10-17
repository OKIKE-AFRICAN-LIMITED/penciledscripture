import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, BookOpen, Feather, Sparkles, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';

export default function Hero({ onOpenSubmission, onExploreServices }) {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const badgeRef = useRef(null);
  const lineRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(badgeRef.current, 
        { opacity: 0, y: 15 }, 
        { opacity: 1, y: 0, duration: 0.6 }
      )
      .fromTo(titleRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.3"
      )
      .fromTo(lineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 0.8, ease: 'power2.inOut' },
        "-=0.4"
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.4"
      )
      .fromTo(ctaRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(statsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.2"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      style={{
        paddingTop: 'calc(var(--header-height) + 4rem)',
        paddingBottom: '5rem',
        backgroundColor: 'var(--paper-white)',
        borderBottom: '1px solid var(--border-light)',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Top Minimal Badge */}
        <div ref={badgeRef} style={{ marginBottom: '1.75rem' }}>
          <span className="badge-tag">
            <span className="dot"></span>
            Penciled Scripture Limited • Literary & Academic Publishing
          </span>
        </div>

        {/* Hero Title */}
        <h1 
          ref={titleRef}
          style={{
            fontSize: 'clamp(2.75rem, 6vw, 4.8rem)',
            fontWeight: 600,
            color: 'var(--ink-900)',
            maxWidth: '1020px',
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            marginBottom: '1.75rem'
          }}
        >
          From the first penciled draft to an <span style={{ color: 'var(--brand-blue)', fontStyle: 'italic', fontWeight: 400 }}>enduring global legacy.</span>
        </h1>

        {/* Minimalist Ink Line Accent (Animated) */}
        <div 
          ref={lineRef}
          style={{
            height: '2px',
            backgroundColor: 'var(--brand-blue)',
            width: '120px',
            marginBottom: '2rem'
          }}
        />

        {/* Hero Subtitle */}
        <p 
          ref={subtitleRef}
          style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            color: 'var(--ink-500)',
            maxWidth: '780px',
            lineHeight: 1.7,
            marginBottom: '3rem',
            fontFamily: 'var(--font-sans)',
            fontWeight: 400
          }}
        >
          We partner with visionary authors, scholars, and storytellers to deliver complete publishing craftsmanship — from intensive developmental editing and bespoke cover design to global print distribution and high-impact book marketing.
        </p>

        {/* Action Buttons */}
        <div 
          ref={ctaRef}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '1.25rem',
            marginBottom: '4.5rem'
          }}
        >
          <button 
            onClick={onOpenSubmission}
            className="btn btn-primary"
            style={{ padding: '1rem 2rem', fontSize: '1rem' }}
          >
            <span>Submit Your Manuscript</span>
            <ArrowUpRight size={18} />
          </button>

          <button 
            onClick={onExploreServices}
            className="btn btn-secondary"
            style={{ padding: '1rem 2rem', fontSize: '1rem' }}
          >
            <span>View Our 8 Services</span>
            <BookOpen size={18} />
          </button>
        </div>

        {/* Hairline Divider */}
        <hr className="hairline" style={{ marginBottom: '3.5rem' }} />

        {/* Editorial Trust & Metric Pillars */}
        <div 
          ref={statsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
          }}
        >
          <div style={{ borderLeft: '2px solid var(--brand-blue)', paddingLeft: '1.25rem' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', fontWeight: 700, color: 'var(--ink-900)', lineHeight: 1 }}>
              8
            </div>
            <div style={{ fontWeight: 600, color: 'var(--ink-900)', fontSize: '0.95rem', marginTop: '0.4rem' }}>
              Full-Suite Services
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--ink-500)', marginTop: '0.2rem' }}>
              End-to-end publishing pipeline from draft writing to retail promotion.
            </p>
          </div>

          <div style={{ borderLeft: '2px solid var(--border-strong)', paddingLeft: '1.25rem' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', fontWeight: 700, color: 'var(--ink-900)', lineHeight: 1 }}>
              100%
            </div>
            <div style={{ fontWeight: 600, color: 'var(--ink-900)', fontSize: '0.95rem', marginTop: '0.4rem' }}>
              Author Rights & Royalties
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--ink-500)', marginTop: '0.2rem' }}>
              You retain full copyright sovereignty and direct royalty payouts.
            </p>
          </div>

          <div style={{ borderLeft: '2px solid var(--border-strong)', paddingLeft: '1.25rem' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', fontWeight: 700, color: 'var(--ink-900)', lineHeight: 1 }}>
              40+
            </div>
            <div style={{ fontWeight: 600, color: 'var(--ink-900)', fontSize: '0.95rem', marginTop: '0.4rem' }}>
              Global Retail Outlets
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--ink-500)', marginTop: '0.2rem' }}>
              Worldwide print and digital distribution across key commercial libraries.
            </p>
          </div>

          <div style={{ borderLeft: '2px solid var(--border-strong)', paddingLeft: '1.25rem' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', fontWeight: 700, color: 'var(--ink-900)', lineHeight: 1 }}>
              Editorial
            </div>
            <div style={{ fontWeight: 600, color: 'var(--ink-900)', fontSize: '0.95rem', marginTop: '0.4rem' }}>
              Boutique Rigor
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--ink-500)', marginTop: '0.2rem' }}>
              Dedicated developmental editors and typographers assigned to every project.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
