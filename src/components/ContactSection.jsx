import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';

export default function ContactSection({ preSelectedService }) {
  const [formData, setFormData] = useState({
    authorName: '',
    email: '',
    phone: '',
    bookTitle: '',
    genre: 'Inspirational / Faith',
    wordCount: '50,000 – 80,000 words',
    selectedServices: [],
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  // Handle pre-selected service from Services section
  useEffect(() => {
    if (preSelectedService) {
      const match = SERVICES_DATA.find(s => s.id === preSelectedService);
      if (match && !formData.selectedServices.includes(match.title)) {
        setFormData(prev => ({
          ...prev,
          selectedServices: [...prev.selectedServices, match.title]
        }));
      }
    }
  }, [preSelectedService]);

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

    // Simulate reliable editorial dispatch
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setSubmissionId(`PSL-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 800);
  };

  return (
    <section 
      id="contact" 
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
            <Mail size={14} />
            <span>Manuscript Inquiries & Publishing Bureau</span>
          </div>
          <h2 className="section-title">
            Begin Your Publishing Journey
          </h2>
          <p className="section-subtitle">
            Submit your manuscript details or inquire about our comprehensive publishing and editorial capabilities. Our board responds within 48 business hours.
          </p>
        </div>

        {/* Dual Column Layout */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Direct Imprint Details & Reassurance */}
          <div>
            <h3 style={{ fontSize: '1.75rem', color: 'var(--ink-900)', marginBottom: '1.25rem' }}>
              Penciled Scripture Limited
            </h3>
            <p style={{ fontSize: '1.02rem', color: 'var(--ink-700)', lineHeight: '1.75', marginBottom: '2.5rem' }}>
              We welcome submissions from established authors, first-time writers, independent scholars, and corporate organizations looking to publish authoritative texts.
            </p>

            {/* Contact Information Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
              
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.25rem',
                  backgroundColor: 'var(--paper-cream)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                <div style={{ color: 'var(--brand-blue)', marginTop: '0.2rem' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--ink-400)', fontWeight: 600 }}>
                    Editorial Submissions Email
                  </div>
                  <a 
                    href="mailto:submissions@penciledscripture.com" 
                    style={{ fontWeight: 600, color: 'var(--ink-900)', fontSize: '1.02rem' }}
                  >
                    submissions@penciledscripture.com
                  </a>
                </div>
              </div>

              <div 
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.25rem',
                  backgroundColor: 'var(--paper-cream)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                <div style={{ color: 'var(--brand-blue)', marginTop: '0.2rem' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--ink-400)', fontWeight: 600 }}>
                    Direct Publishing Inquiries
                  </div>
                  <a 
                    href="tel:+1234567890" 
                    style={{ fontWeight: 600, color: 'var(--ink-900)', fontSize: '1.02rem' }}
                  >
                    +234 (0) 800 PENCILED
                  </a>
                </div>
              </div>

              <div 
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.25rem',
                  backgroundColor: 'var(--paper-cream)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                <div style={{ color: 'var(--brand-blue)', marginTop: '0.2rem' }}>
                  <Clock size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--ink-400)', fontWeight: 600 }}>
                    Reading Board Hours
                  </div>
                  <div style={{ fontWeight: 600, color: 'var(--ink-900)', fontSize: '0.95rem' }}>
                    Monday – Friday: 9:00 AM – 6:00 PM (GMT+1)
                  </div>
                </div>
              </div>

            </div>

            {/* Author Guarantee Note */}
            <div 
              style={{
                padding: '1.5rem',
                backgroundColor: 'var(--brand-blue-subtle)',
                border: '1px solid var(--brand-blue-border)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                gap: '1rem'
              }}
            >
              <ShieldCheck size={24} style={{ color: 'var(--brand-blue)', flexShrink: 0 }} />
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--ink-900)', marginBottom: '0.2rem' }}>
                  Confidentiality & Copyright Assurance
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--ink-700)', lineHeight: '1.5' }}>
                  All synopses, outlines, and manuscripts transmitted to Penciled Scripture Limited remain your strictly confidential intellectual property under non-disclosure governance.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Submission Form */}
          <div 
            style={{
              backgroundColor: 'var(--paper-cream)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              padding: '2.5rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
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
                  Submission Received
                </h3>
                <p style={{ color: 'var(--ink-500)', fontSize: '1rem', maxWidth: '440px', margin: '0 auto 1.5rem auto', lineHeight: '1.6' }}>
                  Thank you, <strong>{formData.authorName}</strong>. Your project dossier has been logged under reference code <strong>{submissionId}</strong>. A senior editor will review your submission and reach out within 48 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      authorName: '',
                      email: '',
                      phone: '',
                      bookTitle: '',
                      genre: 'Inspirational / Faith',
                      wordCount: '50,000 – 80,000 words',
                      selectedServices: [],
                      message: ''
                    });
                  }}
                  className="btn btn-secondary"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                <h3 style={{ fontSize: '1.4rem', color: 'var(--ink-900)', marginBottom: '0.5rem' }}>
                  Manuscript & Consultation Form
                </h3>

                {/* Name & Email Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink-900)', marginBottom: '0.4rem' }}>
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
                        padding: '0.75rem 1rem',
                        border: '1px solid var(--border-light)',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--paper-white)',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink-900)', marginBottom: '0.4rem' }}>
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
                        padding: '0.75rem 1rem',
                        border: '1px solid var(--border-light)',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--paper-white)',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>
                </div>

                {/* Phone & Book Title */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink-900)', marginBottom: '0.4rem' }}>
                      Phone / WhatsApp Number
                    </label>
                    <input 
                      type="tel" 
                      placeholder="+234..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid var(--border-light)',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--paper-white)',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink-900)', marginBottom: '0.4rem' }}>
                      Working Book Title
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. Chronicles of Grace"
                      value={formData.bookTitle}
                      onChange={(e) => setFormData({ ...formData, bookTitle: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid var(--border-light)',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--paper-white)',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>
                </div>

                {/* Genre & Word Count Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink-900)', marginBottom: '0.4rem' }}>
                      Primary Genre
                    </label>
                    <select
                      value={formData.genre}
                      onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
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
                      <option>Business & Thought Leadership</option>
                      <option>Poetry & Creative Essays</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink-900)', marginBottom: '0.4rem' }}>
                      Estimated Word Count
                    </label>
                    <select
                      value={formData.wordCount}
                      onChange={(e) => setFormData({ ...formData, wordCount: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid var(--border-light)',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--paper-white)',
                        fontSize: '0.95rem'
                      }}
                    >
                      <option>Idea Stage (Under 10k words)</option>
                      <option>Partial Draft (20k – 50k words)</option>
                      <option>Full Manuscript (50k – 80k words)</option>
                      <option>Major Work (80k+ words)</option>
                    </select>
                  </div>
                </div>

                {/* Services Needed Checkboxes (The 8 Services) */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink-900)', marginBottom: '0.6rem' }}>
                    Select Services Required (Check all that apply)
                  </label>
                  <div 
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                      gap: '0.5rem',
                      padding: '1rem',
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
                            gap: '0.6rem',
                            fontSize: '0.85rem',
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

                {/* Project Synopsis / Message */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink-900)', marginBottom: '0.4rem' }}>
                    Manuscript Synopsis & Project Vision
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Briefly describe your manuscript, target readers, and your desired publication timeframe..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
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
    </section>
  );
}
