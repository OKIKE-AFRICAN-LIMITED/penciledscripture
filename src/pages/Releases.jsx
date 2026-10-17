import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { RELEASES_DATA } from '../data/releases';
import BookModal from '../components/BookModal';
import AnimatedText from '../components/AnimatedText';
import InkStrokeLine from '../components/InkStrokeLine';
import InteractiveCard from '../components/InteractiveCard';
import { BookOpen, Eye, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Releases() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedBook, setSelectedBook] = useState(null);
  const pageRef = useRef(null);

  const genres = ['All', 'Faith & Inspiration', 'Literary Fiction', 'Philosophy & Essays', 'Academic & History'];

  const filteredBooks = activeFilter === 'All'
    ? RELEASES_DATA
    : RELEASES_DATA.filter(b => b.genre.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(b.genre.toLowerCase()));

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.catalog-book-card',
        { opacity: 0, y: 30, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out' }
      );
    }, pageRef);

    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <div className="page-container" ref={pageRef}>
      <div className="container">
        
        {/* Page Intro Header */}
        <div className="page-intro">
          <div className="page-eyebrow">
            <BookOpen size={14} />
            <span>Publications & Imprint Catalog</span>
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
            {"Latest Imprint\nReleases & Works"}
          </AnimatedText>

          <div style={{ width: '220px', marginBottom: '1.75rem' }}>
            <InkStrokeLine delay={0.5} />
          </div>

          <p className="page-description">
            Explore our curated catalog of published works spanning theological contemplation, literary prose, cultural philosophy, and academic monographs.
          </p>
        </div>

        {/* Filter Navigation */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginBottom: '3.5rem'
          }}
        >
          {genres.map((genre) => {
            const isSelected = activeFilter === genre;
            return (
              <button
                key={genre}
                onClick={() => setActiveFilter(genre)}
                style={{
                  padding: '0.65rem 1.45rem',
                  fontSize: '0.86rem',
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

        {/* Book Grid with 3D Tilt Cards */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '3rem',
            marginBottom: '6rem'
          }}
        >
          {filteredBooks.map((book) => (
            <InteractiveCard 
              key={book.id}
              className="catalog-book-card"
              style={{
                backgroundColor: 'var(--paper-white)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 18px rgba(0,0,0,0.02)'
              }}
            >
              {/* Minimal Cover Simulation */}
              <div 
                style={{
                  padding: '2.5rem 2rem',
                  backgroundColor: book.accentColor === '#1D9BF0' ? 'var(--brand-blue-subtle)' : '#161C24',
                  color: book.accentColor === '#1D9BF0' ? 'var(--ink-900)' : '#FFFFFF',
                  minHeight: '230px',
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
                      fontSize: '0.72rem',
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
                      fontSize: '0.92rem', 
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
                  Penciled Scripture • {book.year}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '2rem 1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <p 
                  style={{
                    fontSize: '0.94rem',
                    color: 'var(--ink-700)',
                    lineHeight: '1.7',
                    marginBottom: '1.75rem',
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
                    onClick={() => setSelectedBook(book)}
                    className="btn btn-text"
                    style={{ fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    <span>Read Details</span>
                    <Eye size={15} />
                  </button>
                </div>
              </div>
            </InteractiveCard>
          ))}
        </div>

        {/* Detail Modal */}
        <BookModal 
          book={selectedBook} 
          onClose={() => setSelectedBook(null)}
          onInquirePublishing={() => {
            window.location.href = '/contact';
          }}
        />

        {/* Bottom Banner */}
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
            Are you writing your next manuscript?
          </h3>
          <p style={{ color: 'var(--ink-500)', fontSize: '1.05rem', marginBottom: '2rem' }}>
            Join our publishing catalog. We offer full editorial, design, and global distribution partnership.
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
