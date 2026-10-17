import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import gsap from 'gsap';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const pageRef = useRef(null);

  const [formData, setFormData] = useState({
    authorName: '',
    email: '',
    phone: '',
    bookTitle: '',
    genre: 'Faith & Inspiration',
    wordCount: '50,000 – 80,000 words',
    selectedServices: [],
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  // Pre-populate service if passed in search params
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam && !formData.selectedServices.includes(serviceParam)) {
      setFormData(prev => ({
        ...prev,
        selectedServices: [...prev.selectedServices, serviceParam]
      }));
    }
  }, [searchParams]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-reveal',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleCheckboxToggle = (serviceTitle) => {
    setFormData(prev => {
      const exists = prev.selectedServices.includes(serviceTitle);
      return {
        ...prev,
        selectedServices: exists 
          ? prev.selectedServices.filter(s => s !== serviceTitle)
          : [...prev.selectedServices, serviceTitle]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setSubmissionId(`PSL-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 700);
  };

  return (
    <div className="page-container" ref={pageRef}>
      <div className="container">
        
        {/* Page Intro Header */}
        <div className="page-intro contact-reveal">
          <div className="page-eyebrow">
            <Mail size={14} />
            <span>Manuscript Inquiries & Submissions</span>
          </div>
          <h1 className="page-title">
            Contact Our Editorial Bureau
          </h1>
          <p className="page-description">
            Submit your manuscript details or inquire about our comprehensive publishing services. Our reading board reviews submissions on a rolling basis.
          </p>
        </div>

        {/* Dual Column Layout (Uncluttered & Spacious) */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4.5rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Direct Imprint Details */}
          <div className="contact-reveal">
            <h2 style={{ fontSize: '1.8rem', color: 'var(--ink-900)', marginBottom: '1.25rem' }}>
              Publishing House Office
            </h2>
            <p style={{ fontSize: '1.02rem', color: 'var(--ink-700)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
              We welcome submissions from established authors, debut writers, scholars, and institutions. Every transmission is held under strict editorial confidentiality.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
              
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                  padding: '1.5rem',
                  backgroundColor: 'var(--paper-cream)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                <div style={{ color: 'var(--brand-blue)', marginTop: '0.2rem' }}>
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-400)', fontWeight: 600 }}>
                    Manuscript Submissions
                  </div>
                  <a 
                    href="mailto:submissions@penciledscripture.com" 
                    style={{ fontWeight: 600, color: 'var(--ink-900)', fontSize: '1.05rem' }}
                  >
                    submissions@penciledscripture.com
                  </a>
                </div>
              </div>

              <div 
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                  padding: '1.5rem',
                  backgroundColor: 'var(--paper-cream)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                <div style={{ color: 'var(--brand-blue)', marginTop: '0.2rem' }}>
                  <Phone size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-400)', fontWeight: 600 }}>
                    Direct Telephone
                  </div>
                  <a 
                    href="tel:+1234567890" 
                    style={{ fontWeight: 600, color: 'var(--ink-900)', fontSize: '1.05rem' }}
                  >
                    +234 (0) 800 PENCILED
                  </a>
                </div>
              </div>

              <div 
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                  padding: '1.5rem',
                  backgroundColor: 'var(--paper-cream)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                <div style={{ color: 'var(--brand-blue)', marginTop: '0.2rem' }}>
                  <Clock size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-400)', fontWeight: 600 }}>
                    Editorial Board Hours
                  </div>
                  <div style={{ fontWeight: 600, color: 'var(--ink-900)', fontSize: '0.98rem' }}>
                    Monday – Friday: 9:00 AM – 6:00 PM (GMT+1)
                  </div>
                </div>
              </div>

            </div>

            {/* Author Guarantee Note */}
            <div 
              style={{
                padding: '1.75rem',
                backgroundColor: 'var(--brand-blue-subtle)',
                border: '1px solid var(--brand-blue-border)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                gap: '1rem'
              }}
            >
              <ShieldCheck size={26} style={{ color: 'var(--brand-blue)', flexShrink: 0 }} />
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--ink-900)', marginBottom: '0.3rem' }}>
                  Copyright Protection Guarantee
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--ink-700)', lineHeight: '1.6' }}>
                  All synopses, outlines, and manuscripts submitted remain your sole intellectual property. We sign mutual NDAs for all comprehensive evaluations upon request.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Submission Form */}
          <div 
            className="contact-reveal"
            style={{
              backgroundColor: 'var(--paper-cream)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              padding: '3rem 2.5rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3.5rem 1rem' }}>
                <div 
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--brand-blue)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto'
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--ink-900)', marginBottom: '0.75rem' }}>
                  Manuscript Dossier Transmitted
                </h3>
                <p style={{ color: 'var(--ink-500)', fontSize: '1rem', maxWidth: '440px', margin: '0 auto 1.5rem auto', lineHeight: '1.7' }}>
                  Thank you, <strong>{formData.authorName}</strong>. Your inquiry has been registered under reference code <strong>{submissionId}</strong>. A member of our reading board will contact you within 48 business hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      authorName: '',
                      email: '',
                      phone: '',
                      bookTitle: '',
                      genre: 'Faith & Inspiration',
                      wordCount: '50,000 – 80,000 words',
                      selectedServices: [],
                      message: ''
                    });
                  }}
                  className="btn btn-secondary"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                <h3 style={{ fontSize: '1.5rem', color: 'var(--ink-900)', marginBottom: '0.5rem' }}>
                  Manuscript & Consultation Form
                </h3>

                {/* Name & Email Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink-900)', marginBottom: '0.5rem' }}>
                      Author / Contact Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Samuel Adewale"
                      value={formData.authorName}
                      onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        border: '1px solid var(--border-light)',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--paper-white)',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink-900)', marginBottom: '0.5rem' }}>
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      required
                      placeholder="author@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        border: '1px solid var(--border-light)',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--paper-white)',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>
                </div>

                {/* Phone & Book Title */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink-900)', marginBottom: '0.5rem' }}>
                      Phone / WhatsApp Number
                    </label>
                    <input 
                      type="tel" 
                      placeholder="+234..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        border: '1px solid var(--border-light)',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--paper-white)',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink-900)', marginBottom: '0.5rem' }}>
                      Working Book Title
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. Chronicles of Grace"
                      value={formData.bookTitle}
                      onChange={(e) => setFormData({ ...formData, bookTitle: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        border: '1px solid var(--border-light)',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--paper-white)',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>
                </div>

                {/* Genre & Word Count Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink-900)', marginBottom: '0.5rem' }}>
                      Genre / Category
                    </label>
                    <select
                      value={formData.genre}
                      onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        border: '1px solid var(--border-light)',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--paper-white)',
                        fontSize: '0.95rem'
                      }}
                    >
                      <option>Faith & Inspiration</option>
                      <option>Literary Fiction</option>
                      <option>Academic & Scholarly</option>
                      <option>Memoir & Autobiography</option>
                      <option>Philosophy & Essays</option>
                      <option>Poetry & Creative Non-Fiction</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink-900)', marginBottom: '0.5rem' }}>
                      Estimated Length
                    </label>
                    <select
                      value={formData.wordCount}
                      onChange={(e) => setFormData({ ...formData, wordCount: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        border: '1px solid var(--border-light)',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--paper-white)',
                        fontSize: '0.95rem'
                      }}
                    >
                      <option>Idea Stage (Under 15,000 words)</option>
                      <option>Early Draft (20,000 – 45,000 words)</option>
                      <option>Standard Book (50,000 – 80,000 words)</option>
                      <option>Extensive Treatise (80,000+ words)</option>
                    </select>
                  </div>
                </div>

                {/* Services Checkboxes (The 8 Services) */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink-900)', marginBottom: '0.75rem' }}>
                    Publishing Services Required (Select all that apply)
                  </label>
                  <div 
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                      gap: '0.65rem',
                      padding: '1.25rem',
                      backgroundColor: 'var(--paper-white)',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-sm)'
                    }}
                  >
                    {SERVICES_DATA.map((srv) => {
                      const isChecked = formData.selectedServices.includes(srv.title);
                      return (
                        <label 
                          key={srv.id}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.65rem',
                            fontSize: '0.88rem',
                            color: isChecked ? 'var(--brand-blue)' : 'var(--ink-700)',
                            fontWeight: isChecked ? 600 : 400,
                            cursor: 'pointer'
                          }}
                        >
                          <input 
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleCheckboxToggle(srv.title)}
                            style={{
                              accentColor: 'var(--brand-blue)',
                              width: '16px',
                              height: '16px'
                            }}
                          />
                          <span>{srv.title}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Synopsis / Message */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink-900)', marginBottom: '0.5rem' }}>
                    Synopsis & Vision
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Provide a concise description of your manuscript, audience, and publication targets..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--paper-white)',
                      fontSize: '0.95rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '1rem', marginTop: '0.5rem' }}
                >
                  {submitting ? (
                    <span>Registering Submission...</span>
                  ) : (
                    <>
                      <span>Transmit Manuscript Dossier</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
