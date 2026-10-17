import React, { useState, useEffect, useRef } from 'react';
import { RELEASES_DATA } from '../data/releases';
import { BookOpen, Sparkles, ArrowRight, Eye } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ReleasesSection({ onSelectBook }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef(null);

  const genres = ['All', 'Faith & Inspiration', 'Literary Fiction', 'Philosophy & Essays', 'Academic & History'];

  const filteredBooks = activeFilter === 'All' 
    ? RELEASES_DATA 
    : RELEASES_DATA.filter(b => b.genre.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(b.genre.toLowerCase()));

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.book-card',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
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
  }, [activeFilter]);

  return (
    <section 
      id="releases" 
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
            <BookOpen size={14} />
            <span>Catalog & Publications</span>
          </div>
          <h2 className="section-title">
            Latest Releases from Our Imprint
          </h2>
          <p className="section-subtitle">
            A curated selection of books edited, typeset, and distributed through Penciled Scripture Limited across contemporary thought, fiction, and spiritual discovery.
          </p>
        </div>

        {/* Filter Navigation */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginBottom: '3rem'
          }}
        >
          {genres.map((genre) => {
            const isSelected = activeFilter === genre;
            return (
              <button
                key={genre}
                onClick={() => setActiveFilter(genre)}
                style={{
                  padding: '0.6rem 1.25rem',
                  fontSize: '0.85rem',
                  fontWeight: isSelected ? 600 : 500,
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid',
                  borderColor: isSelected ? 'var(--brand-blue)' : 'var(--border-light)',
                  backgroundColor: isSelected ? 'var(--brand-blue)' : 'var(--paper-white)',
                  color: isSelected ? '#FFFFFF' : 'var(--ink-700)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
              >
                {genre}
              </button>
            );
          })}
        </div>

        {/* Book Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {filteredBooks.map((book) => (
            <article 
              key={book.id}
              className="book-card"
              style={{
                backgroundColor: 'var(--paper-white)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'var(--brand-blue-border)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-light)';
              }}
            >
              {/* Minimal Editorial Book Jacket Simulation */}
              <div 
                style={{
                  padding: '2.5rem 2rem',
                  backgroundColor: book.accentColor === '#1D9BF0' ? 'var(--brand-blue-subtle)' : '#161C24',
                  color: book.accentColor === '#1D9BF0' ? 'var(--ink-900)' : '#FFFFFF',
                  position: 'relative',
                  minHeight: '220px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid var(--border-light)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span 
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: book.accentColor === '#1D9BF0' ? 'var(--brand-blue)' : '#94A3B8'
                    }}
                  >
                    {book.genre}
                  </span>
                  <span 
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-pill)',
                      backgroundColor: book.accentColor === '#1D9BF0' ? 'rgba(29, 155, 240, 0.15)' : 'rgba(255, 255, 255, 0.1)',
                      color: book.accentColor === '#1D9BF0' ? 'var(--brand-blue)' : '#FFFFFF',
                      fontWeight: 600
                    }}
                  >
                    {book.tag}
                  </span>
                </div>

                <div>
                  <h3 
                    style={{
                      fontSize: '1.45rem',
                      color: book.accentColor === '#1D9BF0' ? 'var(--ink-900)' : '#FFFFFF',
                      lineHeight: '1.25',
                      marginBottom: '0.4rem',
                      fontFamily: 'var(--font-serif)'
                    }}
                  >
                    {book.title}
                  </h3>
                  <div 
                    style={{ 
                      fontSize: '0.9rem', 
                      color: book.accentColor === '#1D9BF0' ? 'var(--ink-500)' : '#CBD5E1',
                      fontWeight: 500
                    }}
                  >
                    {book.author}
                  </div>
                </div>

                <div 
                  style={{ 
                    fontSize: '0.72rem', 
                    letterSpacing: '0.08em', 
                    textTransform: 'uppercase',
                    color: book.accentColor === '#1D9BF0' ? 'var(--ink-400)' : '#64748B' 
                  }}
                >
                  Penciled Scripture Imprint • {book.year}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <p 
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--ink-700)',
                    lineHeight: '1.65',
                    marginBottom: '1.5rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {book.synopsis}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
                  <span style={{ fontSize: '0.82rem', color: 'var(--ink-400)' }}>
                    {book.pages} pages • {book.formats[0]}
                  </span>

                  <button
                    onClick={() => onSelectBook(book)}
                    className="btn btn-text"
                    style={{ fontSize: '0.88rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    <span>Read Details</span>
                    <Eye size={15} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
