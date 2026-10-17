import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Latest Releases', path: '/releases' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'var(--paper-white)',
        borderBottom: '1px solid var(--border-light)',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
        transition: 'background-color 0.25s ease',
        height: 'var(--header-height)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo & Name */}
        <Link 
          to="/"
          style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}
          aria-label="Penciled Scripture Limited Home"
        >
          <img 
            src="/logo.jpeg" 
            alt="Penciled Scripture Logo" 
            style={{
              width: '44px',
              height: '44px',
              objectFit: 'contain',
              borderRadius: '50%',
              border: '1px solid var(--border-light)',
              backgroundColor: '#FFFFFF'
            }}
          />
          <div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--ink-900)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}>
              Penciled Scripture
            </div>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--brand-blue)'
            }}>
              Limited • Publishing Company
            </div>
          </div>
        </Link>

        {/* Desktop Multi-Page Links */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ display: 'flex', alignItems: 'center', gap: '2.25rem', listStyle: 'none' }}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink 
                  to={link.path}
                  style={({ isActive }) => ({
                    fontSize: '0.92rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--brand-blue)' : 'var(--ink-700)',
                    padding: '0.4rem 0',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    position: 'relative'
                  })}
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      {isActive && (
                        <span 
                          style={{
                            width: '4px',
                            height: '4px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--brand-blue)',
                            display: 'inline-block'
                          }} 
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Right Action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link
            to="/contact"
            className="btn btn-primary"
            style={{ display: 'none', padding: '0.75rem 1.4rem', fontSize: '0.88rem' }}
            id="desktop-submit-btn"
          >
            <span>Submit Manuscript</span>
            <ArrowUpRight size={15} />
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--ink-900)',
              backgroundColor: 'var(--paper-white)'
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          style={{
            position: 'absolute',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            backgroundColor: 'var(--paper-white)',
            borderBottom: '2px solid var(--border-light)',
            padding: '2rem 1.5rem',
            boxShadow: '0 12px 28px rgba(0,0,0,0.06)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              style={({ isActive }) => ({
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                color: isActive ? 'var(--brand-blue)' : 'var(--ink-900)',
                paddingBottom: '0.6rem',
                borderBottom: '1px solid var(--border-light)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              })}
            >
              {({ isActive }) => (
                <>
                  <span>{link.name}</span>
                  {isActive && <span style={{ fontSize: '0.8rem', color: 'var(--brand-blue)' }}>Current</span>}
                </>
              )}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="btn btn-primary"
            style={{ marginTop: '0.5rem', width: '100%' }}
          >
            <span>Submit Manuscript</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      )}

      <style>{`
        @media (min-width: 960px) {
          .desktop-nav {
            display: block !important;
          }
          #desktop-submit-btn {
            display: inline-flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
