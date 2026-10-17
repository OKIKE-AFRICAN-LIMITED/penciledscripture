import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Feather, ShieldCheck, Compass, Check, ArrowRight, ArrowUpRight } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import InkStrokeLine from '../components/InkStrokeLine';
import InteractiveCard from '../components/InteractiveCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-text-block',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.pillar-card',
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.pillars-list',
            start: 'top 85%',
          }
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="page-container" ref={pageRef}>
      <div className="container">
        
        {/* Page Intro Header */}
        <div className="page-intro">
          <div className="page-eyebrow">
            <Feather size={14} />
            <span>About Penciled Scripture Limited</span>
          </div>

          <AnimatedText 
            as="h1"
            duration={1.0}
            style={{
              fontSize: 'clamp(2.6rem, 4.5vw, 3.8rem)',
              color: 'var(--ink-900)',
              marginBottom: '1rem',
              lineHeight: 1.12
            }}
          >
            {"The Craft of Words &\nContemporary Publishing"}
          </AnimatedText>

          <div style={{ width: '220px', marginBottom: '1.75rem' }}>
            <InkStrokeLine delay={0.5} />
          </div>

          <p className="page-description">
            Founded with a commitment to literary excellence, Penciled Scripture Limited bridges classical editorial discipline with worldwide publishing reach.
          </p>
        </div>

        {/* Narrative & Visual Section */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4.5rem',
            alignItems: 'start',
            marginBottom: '6rem'
          }}
        >
          {/* Left Column: Narrative Story */}
          <div>
            <h2 className="about-text-block" style={{ fontSize: '1.9rem', color: 'var(--ink-900)', marginBottom: '1.5rem', lineHeight: '1.3' }}>
              Every transformative book begins with a single, deliberate stroke.
            </h2>
            
            <p className="about-text-block" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--ink-700)', marginBottom: '1.5rem' }}>
              Penciled Scripture Limited was established to provide authors with an institutional home that honors both their intellectual sovereignty and their narrative vision. We do not believe in one-size-fits-all publishing templates. Every manuscript brought to our desks receives dedicated developmental evaluation, painstaking typesetting, and personalized creative direction.
            </p>

            <p className="about-text-block" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--ink-700)', marginBottom: '2.5rem' }}>
              Whether your work is an inspiring spiritual text, an academic inquiry, a timeless novel, or a personal legacy memoir, our publishing framework is designed to elevate your voice for a global audience.
            </p>

            {/* Core Values List */}
            <div className="pillars-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
              <div className="pillar-card" style={{ borderLeft: '3px solid var(--brand-blue)', paddingLeft: '1.5rem' }}>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--ink-900)', marginBottom: '0.35rem' }}>
                  100% Intellectual Property Sovereignty
                </h4>
                <p style={{ fontSize: '0.94rem', color: 'var(--ink-500)', lineHeight: '1.65' }}>
                  You retain complete copyright and publishing ownership. We never demand restrictive options or rights transfers.
                </p>
              </div>

              <div className="pillar-card" style={{ borderLeft: '3px solid var(--border-strong)', paddingLeft: '1.5rem' }}>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--ink-900)', marginBottom: '0.35rem' }}>
                  Boutique Editorial Rigor
                </h4>
                <p style={{ fontSize: '0.94rem', color: 'var(--ink-500)', lineHeight: '1.65' }}>
                  Direct collaboration with seasoned editors and typographic craftsmen who invest genuine time into your prose.
                </p>
              </div>

              <div className="pillar-card" style={{ borderLeft: '3px solid var(--border-strong)', paddingLeft: '1.5rem' }}>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--ink-900)', marginBottom: '0.35rem' }}>
                  Global Distribution Architecture
                </h4>
                <p style={{ fontSize: '0.94rem', color: 'var(--ink-500)', lineHeight: '1.65' }}>
                  Direct placement on Amazon, Apple Books, IngramSpark, Barnes & Noble, and international distribution systems.
                </p>
              </div>
            </div>

            <Link to="/services" className="btn btn-secondary">
              <span>Explore Our 8 Services</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Right Column: Framed Official Assets with 3D Physics */}
          <div>
            <InteractiveCard 
              style={{
                backgroundColor: 'var(--paper-cream)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                padding: '2.25rem',
                boxShadow: '0 8px 30px rgba(0,0,0,0.03)'
              }}
            >
              <div 
                style={{
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  backgroundColor: '#1E252E',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src="/about.jpeg" 
                  alt="Penciled Scripture Professional Services" 
                  style={{ width: '100%', height: 'auto', maxHeight: '520px', objectFit: 'contain' }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-400)', fontWeight: 600 }}>
                    Official Publication Portfolio
                  </span>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--ink-900)', fontWeight: 600 }}>
                    Penciled Scripture Limited
                  </div>
                </div>
                <span className="badge-tag" style={{ backgroundColor: 'var(--brand-blue)', color: '#FFFFFF', borderColor: 'var(--brand-blue)' }}>
                  Certified
                </span>
              </div>
            </InteractiveCard>
          </div>

        </div>

        {/* Bottom Callout */}
        <div 
          style={{
            borderTop: '1px solid var(--border-light)',
            paddingTop: '4.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem'
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.85rem', color: 'var(--ink-900)', marginBottom: '0.5rem' }}>
              Looking to consult on your manuscript?
            </h3>
            <p style={{ color: 'var(--ink-500)', fontSize: '1.05rem' }}>
              We offer confidential manuscript reviews and developmental publishing roadmaps.
            </p>
          </div>

          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.95rem 2rem' }}>
            <span>Contact Our Reading Board</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
}
