import React, { useState, useEffect, useRef } from 'react';
import { SERVICES_DATA } from '../data/services';
import { 
  ArrowUpRight, 
  Check, 
  BookText, 
  Clock, 
  Layers, 
  ChevronRight, 
  Sparkles 
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection({ onSelectService }) {
  const [activeTab, setActiveTab] = useState(SERVICES_DATA[0].id);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const currentService = SERVICES_DATA.find(s => s.id === activeTab) || SERVICES_DATA[0];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-row-item',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef}
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
            <Layers size={14} />
            <span>Our 8 Professional Services</span>
          </div>
          <h2 className="section-title">
            The Complete Editorial & Publishing Spectrum
          </h2>
          <p className="section-subtitle">
            From developmental composition to global bookstore circulation. Every service is delivered with obsessive attention to typographic, narrative, and commercial excellence.
          </p>
        </div>

        {/* Master-Detail Minimalist Layout */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Numbered Service Index */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {SERVICES_DATA.map((service) => {
              const isActive = service.id === activeTab;
              return (
                <div
                  key={service.id}
                  className="service-row-item"
                  onClick={() => setActiveTab(service.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.25rem 1.5rem',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--brand-blue)' : 'var(--border-light)',
                    backgroundColor: isActive ? 'var(--brand-blue-subtle)' : 'var(--paper-white)',
                    borderRadius: 'var(--radius-sm)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.borderColor = 'var(--border-strong)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.borderColor = 'var(--border-light)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <span 
                      style={{ 
                        fontFamily: 'var(--font-serif)', 
                        fontSize: '1.15rem', 
                        fontWeight: 700, 
                        color: isActive ? 'var(--brand-blue)' : 'var(--ink-400)' 
                      }}
                    >
                      {service.number}
                    </span>
                    <div>
                      <h3 
                        style={{ 
                          fontFamily: 'var(--font-sans)', 
                          fontSize: '1rem', 
                          fontWeight: isActive ? 700 : 600, 
                          color: isActive ? 'var(--brand-blue)' : 'var(--ink-900)',
                          letterSpacing: '-0.01em'
                        }}
                      >
                        {service.title}
                      </h3>
                      <span style={{ fontSize: '0.8rem', color: 'var(--ink-500)' }}>
                        {service.category}
                      </span>
                    </div>
                  </div>

                  <ChevronRight 
                    size={18} 
                    style={{ 
                      color: isActive ? 'var(--brand-blue)' : 'var(--ink-400)',
                      transform: isActive ? 'translateX(3px)' : 'none',
                      transition: 'transform 0.2s ease'
                    }} 
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Service Detailed Dossier */}
          <div 
            style={{
              backgroundColor: 'var(--paper-cream)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              padding: '2.5rem',
              position: 'sticky',
              top: 'calc(var(--header-height) + 1.5rem)',
              boxShadow: '0 4px 18px rgba(0, 0, 0, 0.03)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <span className="badge-tag">
                Service {currentService.number} of 08
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--ink-500)', fontWeight: 500 }}>
                <Clock size={15} style={{ color: 'var(--brand-blue)' }} />
                <span>Typical Scope: {currentService.timeline}</span>
              </div>
            </div>

            <h3 style={{ fontSize: '1.9rem', color: 'var(--ink-900)', marginBottom: '1rem' }}>
              {currentService.title}
            </h3>

            <p style={{ fontSize: '1.05rem', color: 'var(--ink-700)', lineHeight: '1.75', marginBottom: '1.75rem' }}>
              {currentService.fullDesc}
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-500)', fontWeight: 700, marginBottom: '1rem' }}>
                Key Scope & Deliverables
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {currentService.deliverables.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--ink-800)' }}>
                    <div 
                      style={{ 
                        marginTop: '0.2rem', 
                        width: '18px', 
                        height: '18px', 
                        borderRadius: '50%', 
                        backgroundColor: 'var(--brand-blue)', 
                        color: '#FFFFFF', 
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

            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.75rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--ink-400)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Category
                </span>
                <div style={{ fontWeight: 600, color: 'var(--ink-900)', fontSize: '0.95rem' }}>
                  {currentService.category}
                </div>
              </div>

              <button
                onClick={() => onSelectService(currentService.id)}
                className="btn btn-primary"
              >
                <span>Inquire for This Service</span>
                <ArrowUpRight size={16} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
