import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../data/services';
import { Layers, Check, Clock, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';

export default function Services() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card-item',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out' }
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
          <h1 className="page-title">
            Our 8 Professional Services
          </h1>
          <p className="page-description">
            From developmental ghostwriting to global distribution and marketing campaigns. Every phase is managed with meticulous editorial care.
          </p>
        </div>

        {/* 8 Services Clean Uncluttered List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginBottom: '6rem' }}>
          {SERVICES_DATA.map((service) => (
            <article 
              key={service.id}
              className="service-card-item"
              style={{
                backgroundColor: 'var(--paper-cream)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                padding: '3rem 2.5rem',
                transition: 'border-color 0.25s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--brand-blue-border)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-light)')}
            >
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '3rem',
                  alignItems: 'start'
                }}
              >
                {/* Left: Number, Title & Narrative */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <span 
                      style={{ 
                        fontFamily: 'var(--font-serif)', 
                        fontSize: '1.4rem', 
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
                      fontSize: '1.85rem', 
                      color: 'var(--ink-900)', 
                      marginBottom: '1rem',
                      fontFamily: 'var(--font-serif)'
                    }}
                  >
                    {service.title}
                  </h2>

                  <p style={{ fontSize: '1.02rem', color: 'var(--ink-700)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                    {service.fullDesc}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--ink-500)', fontSize: '0.88rem' }}>
                    <Clock size={16} style={{ color: 'var(--brand-blue)' }} />
                    <span>Estimated Turnaround: <strong>{service.timeline}</strong></span>
                  </div>
                </div>

                {/* Right: Deliverables List & CTA */}
                <div 
                  style={{
                    backgroundColor: 'var(--paper-white)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ marginBottom: '1.75rem' }}>
                    <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-400)', fontWeight: 700, marginBottom: '1rem' }}>
                      Scope & Included Deliverables
                    </h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.92rem', color: 'var(--ink-800)' }}>
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
                    style={{ width: '100%' }}
                  >
                    <span>Inquire for This Service</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>

              </div>
            </article>
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
          <h3 style={{ fontSize: '1.9rem', color: 'var(--ink-900)', marginBottom: '1rem' }}>
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
