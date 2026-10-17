import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, BookOpen, Feather, ShieldCheck, Compass, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import { RELEASES_DATA } from '../data/releases';
import AnimatedText from '../components/AnimatedText';
import InkStrokeLine from '../components/InkStrokeLine';
import InteractiveCard from '../components/InteractiveCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);
  const dividerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Header Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.hero-badge', 
        { opacity: 0, y: 15 }, 
        { opacity: 1, y: 0, duration: 0.6 }
      )
      .fromTo('.hero-desc', 
        { opacity: 0, y: 25 }, 
        { opacity: 1, y: 0, duration: 0.8 }, 
        "-=0.2"
      )
      .fromTo('.hero-actions', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.6 }, 
        "-=0.4"
      );

      // ScrollTrigger line expansion with reversible toggle
      if (dividerRef.current) {
        gsap.fromTo(dividerRef.current,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            duration: 1.0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: dividerRef.current,
              start: 'top 90%',
              end: 'bottom 10%',
              toggleActions: 'play reverse play reverse',
            }
          }
        );
      }

      // Reversible ScrollTrigger for principles cards
      gsap.fromTo('.principle-item',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.principles-container',
            start: 'top 82%',
            end: 'bottom 15%',
            toggleActions: 'play reverse play reverse',
          }
        }
      );

      // Reversible ScrollTrigger for service teaser cards
      gsap.fromTo('.teaser-card',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.teasers-grid',
            start: 'top 82%',
            end: 'bottom 15%',
            toggleActions: 'play reverse play reverse',
          }
        }
      );

      // Reversible ScrollTrigger for featured title
      gsap.fromTo('.featured-block',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.featured-block',
            start: 'top 82%',
            end: 'bottom 15%',
            toggleActions: 'play reverse play reverse',
          }
        }
      );

      // Reversible ScrollTrigger for bottom callout
      gsap.fromTo('.home-callout',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.home-callout',
            start: 'top 85%',
            end: 'bottom 10%',
            toggleActions: 'play reverse play reverse',
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const featuredBook = RELEASES_DATA[0];

  return (
    <div className="page-container" ref={containerRef} style={{ paddingTop: 'calc(var(--header-height) + 4.5rem)' }}>
      <div className="container">
        
        {/* Minimal Hero Header */}
        <div style={{ maxWidth: '920px', marginBottom: '5rem' }}>
          
          <div className="hero-badge" style={{ marginBottom: '1.75rem' }}>
            <span className="badge-tag">
              <span className="dot"></span>
              Penciled Scripture Limited • Literary & Academic Imprint
            </span>
          </div>

          {/* Masked Editorial Headline */}
          <div style={{ marginBottom: '1.5rem' }}>
            <AnimatedText 
              as="h1"
              duration={1.1}
              stagger={0.12}
              style={{
                fontSize: 'clamp(2.8rem, 5.8vw, 4.6rem)',
                lineHeight: 1.08,
                color: 'var(--ink-900)',
                letterSpacing: '-0.035em'
              }}
            >
              {"Where thoughtful words\nbecome enduring books."}
            </AnimatedText>
          </div>

          {/* Animated Calligraphic Pen Line */}
          <div style={{ width: '260px', marginBottom: '2.5rem' }}>
            <InkStrokeLine delay={0.6} triggerOnScroll={false} />
          </div>

          <p 
            className="hero-desc"
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

          <div className="hero-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
            <Link to="/services" className="btn btn-primary" style={{ padding: '1rem 2.2rem' }}>
              <span>Explore Our 8 Services</span>
              <ArrowRight size={16} />
            </Link>

            <Link to="/about" className="btn btn-secondary" style={{ padding: '1rem 2.2rem' }}>
              <span>About The Imprint</span>
            </Link>
          </div>

        </div>

        {/* Animated Hairline Divider with Reversible ScrollTrigger */}
        <div 
          ref={dividerRef}
          style={{ 
            height: '1px', 
            backgroundColor: 'var(--border-light)', 
            width: '100%', 
            marginBottom: '5rem' 
          }} 
        />

        {/* 3 Core Editorial Principles with 3D Tilt Cards */}
        <div 
          className="principles-container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            marginBottom: '6rem'
          }}
        >
          <InteractiveCard 
            className="principle-item"
            style={{
              padding: '2.25rem',
              backgroundColor: 'var(--paper-cream)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.02)'
            }}
          >
            <div style={{ color: 'var(--brand-blue)', marginBottom: '1.25rem' }}>
              <Feather size={28} />
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.65rem', color: 'var(--ink-900)' }}>
              Editorial Rigor
            </h3>
            <p style={{ fontSize: '0.96rem', color: 'var(--ink-500)', lineHeight: '1.7' }}>
              Every manuscript undergoes in-depth developmental, structural, and line editing to ensure clarity and narrative authority.
            </p>
          </InteractiveCard>

          <InteractiveCard 
            className="principle-item"
            style={{
              padding: '2.25rem',
              backgroundColor: 'var(--paper-cream)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.02)'
            }}
          >
            <div style={{ color: 'var(--brand-blue)', marginBottom: '1.25rem' }}>
              <ShieldCheck size={28} />
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.65rem', color: 'var(--ink-900)' }}>
              Author Sovereignty
            </h3>
            <p style={{ fontSize: '0.96rem', color: 'var(--ink-500)', lineHeight: '1.7' }}>
              You retain 100% of your copyright, creative ownership, and royalty earnings without restrictive lock-ins.
            </p>
          </InteractiveCard>

          <InteractiveCard 
            className="principle-item"
            style={{
              padding: '2.25rem',
              backgroundColor: 'var(--paper-cream)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.02)'
            }}
          >
            <div style={{ color: 'var(--brand-blue)', marginBottom: '1.25rem' }}>
              <Compass size={28} />
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.65rem', color: 'var(--ink-900)' }}>
              Global Reach
            </h3>
            <p style={{ fontSize: '0.96rem', color: 'var(--ink-500)', lineHeight: '1.7' }}>
              Comprehensive worldwide catalog listing across Amazon Kindle, Apple Books, IngramSpark, Barnes & Noble, and international libraries.
            </p>
          </InteractiveCard>
        </div>

        {/* Highlighted Services Preview (Uncluttered & Interactive) */}
        <div 
          style={{
            backgroundColor: 'var(--paper-cream)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-md)',
            padding: '4rem 3rem',
            marginBottom: '6rem'
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <span className="badge-tag" style={{ marginBottom: '0.75rem' }}>Publishing Capabilities</span>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--ink-900)' }}>
                Full-Spectrum Publishing Services
              </h2>
            </div>
            <Link to="/services" className="btn btn-secondary" style={{ fontSize: '0.88rem' }}>
              <span>View All 8 Services</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="teasers-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.75rem' }}>
            {SERVICES_DATA.slice(0, 4).map((srv) => (
              <InteractiveCard 
                key={srv.id}
                className="teaser-card"
                style={{
                  backgroundColor: 'var(--paper-white)',
                  border: '1px solid var(--border-light)',
                  padding: '2rem 1.75rem',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--brand-blue)', display: 'block', marginBottom: '0.75rem' }}>
                    {srv.number}
                  </span>
                  <h4 style={{ fontSize: '1.08rem', color: 'var(--ink-900)', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                    {srv.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--ink-500)', lineHeight: '1.65' }}>
                    {srv.shortDesc}
                  </p>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>

        {/* Featured Release Teaser with Reversible ScrollTrigger */}
        <div 
          className="featured-block"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
            marginBottom: '6rem'
          }}
        >
          <div>
            <span className="badge-tag" style={{ marginBottom: '1rem' }}>From Our Imprint</span>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--ink-900)', marginBottom: '1rem', lineHeight: '1.15' }}>
              Featured Imprint Title
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--ink-500)', lineHeight: '1.8', marginBottom: '2rem' }}>
              Discover our newest published works across literary fiction, faith, and philosophy, meticulously bound and formatted for discerning readers.
            </p>
            <Link to="/releases" className="btn btn-secondary">
              <span>Explore The Catalog</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Interactive Minimalist Book Card */}
          <InteractiveCard 
            style={{
              backgroundColor: 'var(--paper-cream)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              padding: '2.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              boxShadow: '0 8px 30px rgba(0,0,0,0.03)'
            }}
          >
            <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--brand-blue)', fontWeight: 700 }}>
              {featuredBook.genre} • {featuredBook.year}
            </span>
            <h3 style={{ fontSize: '1.75rem', color: 'var(--ink-900)', fontFamily: 'var(--font-serif)', lineHeight: '1.2' }}>
              {featuredBook.title}
            </h3>
            <div style={{ fontSize: '0.98rem', color: 'var(--ink-500)', fontWeight: 500 }}>
              By {featuredBook.author}
            </div>
            <p style={{ fontSize: '0.94rem', color: 'var(--ink-700)', lineHeight: '1.7' }}>
              "{featuredBook.synopsis}"
            </p>
            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem', marginTop: '0.5rem' }}>
              <Link to="/releases" style={{ fontSize: '0.9rem', color: 'var(--brand-blue)', fontWeight: 600 }}>
                Read full synopsis in catalog →
              </Link>
            </div>
          </InteractiveCard>
        </div>

        {/* Bottom Uncluttered Callout with Reversible ScrollTrigger */}
        <div 
          className="home-callout"
          style={{
            textAlign: 'center',
            maxWidth: '680px',
            margin: '0 auto',
            padding: '4.5rem 1.5rem',
            borderTop: '1px solid var(--border-light)'
          }}
        >
          <h2 style={{ fontSize: '2.2rem', color: 'var(--ink-900)', marginBottom: '1rem' }}>
            Ready to bring your manuscript to life?
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'var(--ink-500)', marginBottom: '2.25rem', lineHeight: '1.7' }}>
            Our editorial committee is currently open to inquiries and new manuscript submissions.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.4rem' }}>
            <span>Submit Your Manuscript</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
}
