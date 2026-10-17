import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';

export default function Footer({ onScrollTop }) {
  return (
    <footer 
      style={{
        backgroundColor: '#0D1117',
        color: '#F0F3F6',
        paddingTop: '5rem',
        paddingBottom: '3.5rem',
        borderTop: '1px solid #1C232D'
      }}
    >
      <div className="container">
        
        {/* Main Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3.5rem',
            marginBottom: '4.5rem'
          }}
        >
          {/* Brand Info */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <img 
                src="/logo.jpeg" 
                alt="Penciled Scripture Logo" 
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  padding: '2px'
                }}
              />
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: '#FFFFFF', fontWeight: 700 }}>
                  Penciled Scripture
                </div>
                <div style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--brand-blue)', fontWeight: 600 }}>
                  Limited • Publishing Company
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#8A95A5', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              An independent literary publishing company devoted to editorial rigor, bespoke typography, and global distribution for authors and thinkers.
            </p>

            <span className="badge-tag" style={{ backgroundColor: '#161C24', borderColor: '#2A3441', color: 'var(--brand-blue)' }}>
              Certified Imprint
            </span>
          </div>

          {/* Page Directory */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#FFFFFF', fontWeight: 700, marginBottom: '1.25rem' }}>
              Pages
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services (08)', path: '/services' },
                { name: 'Latest Releases', path: '/releases' },
                { name: 'Contact & Submissions', path: '/contact' }
              ].map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    style={{ fontSize: '0.9rem', color: '#8A95A5', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--brand-blue)')}
                    onMouseLeave={(e) => (e.target.style.color = '#8A95A5')}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Publishing Services Quick List */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#FFFFFF', fontWeight: 700, marginBottom: '1.25rem' }}>
              Key Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {SERVICES_DATA.slice(0, 5).map((srv) => (
                <li key={srv.id}>
                  <Link 
                    to="/services"
                    style={{ fontSize: '0.88rem', color: '#8A95A5' }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--brand-blue)')}
                    onMouseLeave={(e) => (e.target.style.color = '#8A95A5')}
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" style={{ fontSize: '0.85rem', color: 'var(--brand-blue)', fontWeight: 600 }}>
                  View all 8 services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#FFFFFF', fontWeight: 700, marginBottom: '1.25rem' }}>
              Editorial Bureau
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem', color: '#8A95A5' }}>
              <div>
                <span style={{ color: '#68778A', display: 'block', fontSize: '0.78rem', textTransform: 'uppercase' }}>Submissions</span>
                <span style={{ color: '#FFFFFF', fontWeight: 500 }}>submissions@penciledscripture.com</span>
              </div>
              <div>
                <span style={{ color: '#68778A', display: 'block', fontSize: '0.78rem', textTransform: 'uppercase' }}>Reading Office</span>
                <span style={{ color: '#FFFFFF', fontWeight: 500 }}>Mon – Fri, 9:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Hairline Divider */}
        <div style={{ width: '100%', height: '1px', backgroundColor: '#1C232D', marginBottom: '2.5rem' }} />

        {/* Bottom Bar */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            fontSize: '0.84rem',
            color: '#68778A'
          }}
        >
          <div>
            © {new Date().getFullYear()} Penciled Scripture Limited. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>Author Copyright Sovereignty</span>
            <span>•</span>
            <button
              onClick={onScrollTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#FFFFFF',
                backgroundColor: '#161C24',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid #2A3441',
                fontSize: '0.8rem'
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
