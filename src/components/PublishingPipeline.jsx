import React, { useEffect, useRef } from 'react';
import { Compass, FileCheck, BookOpen, Rocket, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PublishingPipeline({ onOpenSubmission }) {
  const pipelineRef = useRef(null);

  const steps = [
    {
      step: '01',
      title: 'Manuscript Intake & Evaluation',
      desc: 'Submit your synopsis or full draft. Our editorial board performs a comprehensive diagnostic review evaluating narrative structure, genre fit, and target audience.',
      icon: FileCheck
    },
    {
      step: '02',
      title: 'Developmental & Line Editing',
      desc: 'Collaborate with your designated senior editor to refine dialogue, pacing, and grammatical integrity, followed by bespoke interior typesetting.',
      icon: BookOpen
    },
    {
      step: '03',
      title: 'Jacket Design & Registration',
      desc: 'Our cover art department develops iconic dust jackets and covers, assigns international ISBNs, bar codes, and metadata across catalog databases.',
      icon: Compass
    },
    {
      step: '04',
      title: 'Global Launch & Distribution',
      desc: 'Your book goes live across 40+ global storefronts with print-on-demand fulfillment. You receive 100% net author royalties directly.',
      icon: Rocket
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pipeline-step',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: pipelineRef.current,
            start: 'top 80%',
          }
        }
      );
    }, pipelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="process" 
      ref={pipelineRef}
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundColor: 'var(--paper-white)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-meta">
          <div className="section-label">
            <Compass size={14} />
            <span>The Publishing Journey</span>
          </div>
          <h2 className="section-title">
            From Draft to Global Circulation
          </h2>
          <p className="section-subtitle">
            A transparent four-phase roadmap built to protect your creative vision and deliver institutional publishing precision.
          </p>
        </div>

        {/* Steps Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
            position: 'relative'
          }}
        >
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.step}
                className="pipeline-step"
                style={{
                  backgroundColor: 'var(--paper-cream)',
                  border: '1px solid var(--border-light)',
                  padding: '2.25rem 1.75rem',
                  borderRadius: 'var(--radius-md)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
                    <span 
                      style={{ 
                        fontFamily: 'var(--font-serif)', 
                        fontSize: '1.5rem', 
                        fontWeight: 700, 
                        color: 'var(--brand-blue)' 
                      }}
                    >
                      {item.step}
                    </span>
                    <div 
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--brand-blue-subtle)',
                        color: 'var(--brand-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 
                    style={{ 
                      fontSize: '1.25rem', 
                      color: 'var(--ink-900)', 
                      marginBottom: '0.85rem',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 700
                    }}
                  >
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: 'var(--ink-700)', lineHeight: '1.65' }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                  <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-400)', fontWeight: 600 }}>
                    Phase {index + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div 
          style={{
            marginTop: '4rem',
            padding: '2.5rem',
            backgroundColor: 'var(--brand-blue-subtle)',
            border: '1px solid var(--brand-blue-border)',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem'
          }}
        >
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--ink-900)', marginBottom: '0.25rem' }}>
              Have an unfinished manuscript or concept outline?
            </h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--ink-700)' }}>
              Our developmental editors offer confidential initial assessments and manuscript diagnostics.
            </p>
          </div>

          <button 
            onClick={onOpenSubmission}
            className="btn btn-primary"
          >
            <span>Request Initial Review</span>
            <ArrowUpRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
