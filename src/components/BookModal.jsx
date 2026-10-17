import React, { useEffect } from 'react';
import { X, BookOpen, Check, ExternalLink } from 'lucide-react';

export default function BookModal({ book, onClose, onInquirePublishing }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!book) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        backgroundColor: 'rgba(11, 14, 19, 0.7)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: 'var(--paper-white)',
          width: '100%',
          maxWidth: '780px',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: 'var(--radius-md)',
          padding: '2.5rem',
          position: 'relative',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
          border: '1px solid var(--border-light)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'var(--paper-cream)',
            border: '1px solid var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--ink-700)',
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span className="badge-tag">{book.genre}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--ink-500)' }}>Released {book.year}</span>
          </div>
          <h2 style={{ fontSize: '2rem', color: 'var(--ink-900)', lineHeight: '1.2', marginBottom: '0.5rem' }}>
            {book.title}
          </h2>
          <div style={{ fontSize: '1.1rem', color: 'var(--brand-blue)', fontWeight: 600 }}>
            By {book.author}
          </div>
        </div>

        <hr className="hairline" style={{ marginBottom: '1.75rem' }} />

        {/* Book Synopsis */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-400)', marginBottom: '0.75rem' }}>
            Editorial Synopsis
          </h4>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--ink-800)' }}>
            {book.synopsis}
          </p>
        </div>

        {/* Selected Excerpt */}
        <div 
          style={{
            backgroundColor: 'var(--paper-cream)',
            borderLeft: '3px solid var(--brand-blue)',
            padding: '1.5rem',
            borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
            marginBottom: '2rem'
          }}
        >
          <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--brand-blue)', fontWeight: 700, marginBottom: '0.5rem' }}>
            Selected Manuscript Excerpt
          </div>
          <blockquote style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--ink-900)', lineHeight: '1.6' }}>
            "{book.excerpt}"
          </blockquote>
        </div>

        {/* Metadata Details Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.25rem',
            padding: '1.25rem',
            backgroundColor: 'var(--paper-cream)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-light)',
            marginBottom: '2rem'
          }}
        >
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--ink-400)', textTransform: 'uppercase' }}>ISBN Registration</span>
            <div style={{ fontWeight: 600, color: 'var(--ink-900)', fontSize: '0.9rem' }}>{book.isbn}</div>
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--ink-400)', textTransform: 'uppercase' }}>Length</span>
            <div style={{ fontWeight: 600, color: 'var(--ink-900)', fontSize: '0.9rem' }}>{book.pages} Pages</div>
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--ink-400)', textTransform: 'uppercase' }}>Available Formats</span>
            <div style={{ fontWeight: 600, color: 'var(--ink-900)', fontSize: '0.9rem' }}>{book.formats.join(', ')}</div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'flex-end', borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}>
          <button 
            onClick={onClose}
            className="btn btn-secondary"
          >
            Close
          </button>
          <button 
            onClick={() => {
              onClose();
              onInquirePublishing();
            }}
            className="btn btn-primary"
          >
            <span>Publish With Us</span>
            <ExternalLink size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}
