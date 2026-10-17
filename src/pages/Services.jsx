import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../data/services';
import AnimatedText from '../components/AnimatedText';
import InkStrokeLine from '../components/InkStrokeLine';
import InteractiveCard from '../components/InteractiveCard';
import { Layers, Check, Clock, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-entry-card',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-stack',
            start: 'top 80%',
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
            <Layers size={14} />
            <span>Publishing Capabilities</span>
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
            {"Our 8 Professional\nPublishing Services"}
          </AnimatedText>

          <div style={{ width: '240px', marginBottom: '1.75rem' }}>
            <InkStrokeLine delay={0.5} />
          </div>

          <p className="page-description">
            From developmental ghostwriting to global distribution and marketing campaigns. Every phase is managed with meticulous editorial care.
          </p>
        </div>

        {/* 8 Services Clean Uncluttered List with Interactive Cards */}
        <div className="services-stack" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginBottom: '6rem' }}>
          {SERVICES_DATA.map((service) => (
            <InteractiveCard 
              key={service.id}
              className="service-entry-card"
              style={{
                backgroundColor: 'var(--paper-cream)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                padding: '3.5rem 3rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
              }}
            >
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '3.5rem',
                  alignItems: 'start'
                }}
              >
                {/* Left: Number, Title & Narrative */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <span 
                      style={{ 
                        fontFamily: 'var(--font-serif)', 
                        fontSize: '1.5rem', 
                        fontWeight: 700, 
                        color: 'var(--brand-blue)' 
                      }}
                    >
                      {service.number}
                    </span>
                    <span className="badge-tag">
                      {service.category}
                    </span>
                  </div>

                  <h2 
                    style={{ 
                      fontSize: '2rem', 
                      color: 'var(--ink-900)', 
                      marginBottom: '1.25rem',
                      fontFamily: 'var(--font-serif)',
                      lineHeight: '1.2'
                    }}
                  >
                    {service.title}
                  </h2>

                  <p style={{ fontSize: '1.05rem', color: 'var(--ink-700)', lineHeight: '1.8', marginBottom: '1.75rem' }}>
                    {service.fullDesc}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--ink-500)', fontSize: '0.9rem' }}>
                    <Clock size={17} style={{ color: 'var(--brand-blue)' }} />
                    <span>Estimated Turnaround: <strong style={{ color: 'var(--ink-900)' }}>{service.timeline}</strong></span>
                  </div>
                </div>

                {/* Right: Deliverables List & CTA */}
                <div 
                  style={{
                    backgroundColor: 'var(--paper-white)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '2.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
                  }}
                >
                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-400)', fontWeight: 700, marginBottom: '1.25rem' }}>
                      Scope & Included Deliverables
                    </h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', fontSize: '0.94rem', color: 'var(--ink-800)' }}>
                          <div 
                            style={{ 
                              marginTop: '0.2rem', 
                              width: '18px', 
                              height: '18px', 
                              borderRadius: '50%', 
                              backgroundColor: 'var(--brand-blue-subtle)', 
                              color: 'var(--brand-blue)', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center',
                              flexShrink: 0
                            }}
                          >
                            <Check size={12} strokeWidth={3} />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '0.95rem' }}
                  >
                    <span>Inquire for This Service</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>

              </div>
            </InteractiveCard>
          ))}
        </div>

        {/* Bottom Contact Callout */}
        <div 
          style={{
            borderTop: '1px solid var(--border-light)',
            paddingTop: '4.5rem',
            textAlign: 'center',
            maxWidth: '680px',
            margin: '0 auto'
          }}
        >
          <h3 style={{ fontSize: '2rem', color: 'var(--ink-900)', marginBottom: '1rem' }}>
            Uncertain which service best matches your project?
          </h3>
          <p style={{ color: 'var(--ink-500)', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: '1.7' }}>
            Send us a note describing your manuscript and goals. We will provide a custom publishing recommendation and quote.
          </p>
          <Link to="/contact" className="btn btn-secondary" style={{ padding: '0.95rem 2.2rem' }}>
            <span>Request a Custom Consultation</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
}
