import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, BookOpen, Feather, ShieldCheck, Compass } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import { RELEASES_DATA } from '../data/releases';
import gsap from 'gsap';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.reveal-item',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const featuredBook = RELEASES_DATA[0];

  return (
    <div className="page-container" ref={containerRef} style={{ paddingTop: 'calc(var(--header-height) + 4.5rem)' }}>
      <div className="container">
        
        {/* Minimal Hero Header */}
        <div style={{ maxWidth: '900px', marginBottom: '5rem' }}>
          
          <div className="reveal-item" style={{ marginBottom: '1.5rem' }}>
            <span className="badge-tag">
              <span className="dot"></span>
              Penciled Scripture Limited • Publishing Company
            </span>
          </div>

          <h1 
            className="reveal-item"
            style={{
              fontSize: 'clamp(2.8rem, 5.5vw, 4.4rem)',
              lineHeight: 1.1,
              color: 'var(--ink-900)',
              marginBottom: '2rem',
              letterSpacing: '-0.03em'
            }}
          >
            Where thoughtful words become <span style={{ color: 'var(--brand-blue)', fontStyle: 'italic', fontWeight: 400 }}>enduring books.</span>
          </h1>

          <p 
            className="reveal-item"
            style={{
              fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
              color: 'var(--ink-500)',
              lineHeight: 1.8,
              marginBottom: '3rem',
              maxWidth: '740px'
            }}
          >
            We are an independent literary publishing house dedicated to developmental editing, exquisite book design, and worldwide print and digital distribution.
          </p>

          <div className="reveal-item" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
            <Link to="/services" className="btn btn-primary" style={{ padding: '1rem 2.2rem' }}>
              <span>Our Services</span>
              <ArrowRight size={16} />
            </Link>

            <Link to="/about" className="btn btn-secondary" style={{ padding: '1rem 2.2rem' }}>
              <span>About The Imprint</span>
            </Link>
          </div>

        </div>

        {/* Minimalist Divider */}
        <hr className="hairline" style={{ marginBottom: '5rem' }} />

        {/* 3 Core Editorial Principles */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            marginBottom: '6rem'
          }}
        >
          <div className="reveal-item">
            <div style={{ color: 'var(--brand-blue)', marginBottom: '1rem' }}>
              <Feather size={26} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: 'var(--ink-900)' }}>
              Editorial Rigor
            </h3>
            <p style={{ fontSize: '0.96rem', color: 'var(--ink-500)', lineHeight: '1.7' }}>
              Every manuscript undergoes in-depth developmental, structural, and line editing to ensure clarity and narrative authority.
            </p>
          </div>

          <div className="reveal-item">
            <div style={{ color: 'var(--brand-blue)', marginBottom: '1rem' }}>
              <ShieldCheck size={26} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: 'var(--ink-900)' }}>
              Author Sovereignty
            </h3>
            <p style={{ fontSize: '0.96rem', color: 'var(--ink-500)', lineHeight: '1.7' }}>
              You retain 100% of your copyright, creative ownership, and royalty earnings without restrictive lock-ins.
            </p>
          </div>

          <div className="reveal-item">
            <div style={{ color: 'var(--brand-blue)', marginBottom: '1rem' }}>
              <Compass size={26} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: 'var(--ink-900)' }}>
              Global Reach
            </h3>
            <p style={{ fontSize: '0.96rem', color: 'var(--ink-500)', lineHeight: '1.7' }}>
              Comprehensive worldwide catalog listing across Amazon Kindle, Apple Books, IngramSpark, Barnes & Noble, and international libraries.
            </p>
          </div>
        </div>

        {/* Highlighted Services Preview (Uncluttered) */}
        <div 
          style={{
            backgroundColor: 'var(--paper-cream)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-md)',
            padding: '3.5rem 3rem',
            marginBottom: '6rem'
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div>
              <span className="badge-tag" style={{ marginBottom: '0.75rem' }}>Our Capabilities</span>
              <h2 style={{ fontSize: '2rem', color: 'var(--ink-900)' }}>
                Full-Spectrum Publishing Services
              </h2>
            </div>
            <Link to="/services" className="btn btn-secondary" style={{ fontSize: '0.88rem' }}>
              <span>View All 8 Services</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {SERVICES_DATA.slice(0, 4).map((srv) => (
              <div 
                key={srv.id}
                style={{
                  backgroundColor: 'var(--paper-white)',
                  border: '1px solid var(--border-light)',
                  padding: '1.75rem',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--brand-blue)', display: 'block', marginBottom: '0.5rem' }}>
                    {srv.number}
                  </span>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--ink-900)', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                    {srv.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--ink-500)', lineHeight: '1.6' }}>
                    {srv.shortDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Release Teaser */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
            marginBottom: '6rem'
          }}
        >
          <div>
            <span className="badge-tag" style={{ marginBottom: '1rem' }}>From Our Catalog</span>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--ink-900)', marginBottom: '1rem' }}>
              Latest Imprint Release
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--ink-500)', lineHeight: '1.75', marginBottom: '1.75rem' }}>
              Discover our newest published works across literary fiction, faith, and philosophy, meticulously bound and formatted for discerning readers.
            </p>
            <Link to="/releases" className="btn btn-secondary">
              <span>Explore The Catalog</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Minimalist Book Preview Card */}
          <div 
            style={{
              backgroundColor: 'var(--paper-cream)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--brand-blue)', fontWeight: 700 }}>
              {featuredBook.genre} • {featuredBook.year}
            </span>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--ink-900)', fontFamily: 'var(--font-serif)' }}>
              {featuredBook.title}
            </h3>
            <div style={{ fontSize: '0.95rem', color: 'var(--ink-500)', fontWeight: 500 }}>
              By {featuredBook.author}
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--ink-700)', lineHeight: '1.65' }}>
              "{featuredBook.synopsis}"
            </p>
            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', marginTop: '0.5rem' }}>
              <Link to="/releases" style={{ fontSize: '0.88rem', color: 'var(--brand-blue)', fontWeight: 600 }}>
                Read full synopsis in catalog →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Uncluttered Callout */}
        <div 
          style={{
            textAlign: 'center',
            maxWidth: '680px',
            margin: '0 auto',
            padding: '4rem 1.5rem',
            borderTop: '1px solid var(--border-light)'
          }}
        >
          <h2 style={{ fontSize: '2rem', color: 'var(--ink-900)', marginBottom: '1rem' }}>
            Ready to bring your manuscript to life?
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--ink-500)', marginBottom: '2rem' }}>
            Our editorial committee is currently open to inquiries and new manuscript submissions.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.95rem 2.2rem' }}>
            <span>Submit Your Manuscript</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
}
