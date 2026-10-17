import React, { useEffect, useRef } from 'react';
import { Feather, ShieldCheck, Compass, Check, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection({ onExploreServices }) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageFrameRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 85%',
          }
        }
      );

      gsap.fromTo(
        imageFrameRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageFrameRef.current,
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundColor: 'var(--paper-cream)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-meta">
          <div className="section-label">
            <Feather size={14} />
            <span>About The Publishing House</span>
          </div>
          <h2 className="section-title">
            Devoted to the Architecture of Words & Enduring Literature
          </h2>
          <p className="section-subtitle">
            Penciled Scripture Limited is an independent publishing company founded to bridge traditional literary discipline with contemporary global reach.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Narrative & Values */}
          <div ref={contentRef}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.25rem', color: 'var(--ink-900)' }}>
              Where every manuscript is treated with boutique reverence.
            </h3>
            
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: '1.8' }}>
              At <strong>Penciled Scripture Limited</strong>, we believe every transformational book begins with a single, deliberate stroke of the pencil. Whether your work is an inspiring spiritual treatise, an academic monograph, a gripping novel, or a personal memoir, our mission is to preserve your voice while elevating your prose to world-class publishing standards.
            </p>

            <p style={{ marginBottom: '2.5rem', fontSize: '1.05rem', lineHeight: '1.8' }}>
              Unlike automated self-publishing platforms that offer automated templates, we provide human editorial guidance, bespoke typographical typesetting, custom cover design, and a multi-channel release pipeline designed for longevity.
            </p>

            {/* Core Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div 
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--brand-blue-subtle)',
                    color: 'var(--brand-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--ink-900)', marginBottom: '0.25rem' }}>
                    100% Intellectual Sovereignty
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--ink-500)', lineHeight: '1.6' }}>
                    You retain complete copyright, publishing rights, and royalty distribution rights for your life’s work.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <div 
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--brand-blue-subtle)',
                    color: 'var(--brand-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Compass size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--ink-900)', marginBottom: '0.25rem' }}>
                    Global Distribution Footprint
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--ink-500)', lineHeight: '1.6' }}>
                    Direct integration with Amazon KDP, Apple Books, IngramSpark, Barnes & Noble, and international libraries.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <div 
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--brand-blue-subtle)',
                    color: 'var(--brand-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Feather size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--ink-900)', marginBottom: '0.25rem' }}>
                    Hands-On Editorial Partnership
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--ink-500)', lineHeight: '1.6' }}>
                    Direct communication with dedicated developmental editors, proofreaders, and art directors at every stage.
                  </p>
                </div>
              </div>

            </div>

            <button 
              onClick={onExploreServices}
              className="btn btn-secondary"
            >
              <span>Explore Our Publishing Capabilities</span>
              <ArrowRight size={16} />
            </button>

          </div>

          {/* Right Column: Visual Frame & Service Summary */}
          <div ref={imageFrameRef}>
            <div 
              style={{
                backgroundColor: 'var(--paper-white)',
                border: '1px solid var(--border-light)',
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
              }}
            >
              <div 
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: '#1E252E',
                  marginBottom: '1.5rem',
                  maxHeight: '480px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src="/about.jpeg" 
                  alt="Penciled Scripture Professional Services Overview" 
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    maxHeight: '480px'
                  }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-400)', fontWeight: 600 }}>
                    Official Publication Portfolio
                  </span>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--ink-900)', fontWeight: 600 }}>
                    Penciled Scripture Limited
                  </div>
                </div>
                <span className="badge-tag" style={{ backgroundColor: 'var(--brand-blue)', color: '#FFFFFF', borderColor: 'var(--brand-blue)' }}>
                  Certified Imprint
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
