import React, { useState } from 'react';
import { ARTIST_DATA } from '../data/artistData';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page site-container" style={{ paddingTop: '7.5rem', paddingBottom: '8rem' }}>
      <div className="text-container">
        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <span className="meta-label">Contact</span>
          <h1 className="heading-serif" style={{ fontSize: '3.2rem', margin: '0.5rem 0 1.5rem 0' }}>
            Inquiries & Masterclasses
          </h1>
          <p style={{ color: '#555555', lineHeight: '1.7' }}>
            For direct inquiries regarding artwork commissions, workshop registrations, institutional projects, or custom group masterclasses, contact Pau Canelles directly.
          </p>
        </div>

        {/* Direct Channels List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginBottom: '4rem', paddingBottom: '3rem', borderBottom: '1px solid var(--color-hairline)' }}>
          <div>
            <span className="meta-label">Email</span>
            <a href={`mailto:${ARTIST_DATA.contact.email}`} style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.6rem', color: 'var(--color-charcoal)' }}>
              {ARTIST_DATA.contact.email}
            </a>
          </div>

          <div>
            <span className="meta-label">Phone & WhatsApp</span>
            <a href={ARTIST_DATA.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.6rem', color: 'var(--color-charcoal)' }}>
              {ARTIST_DATA.contact.phone}
            </a>
          </div>

          <div>
            <span className="meta-label">Instagram</span>
            <a href={ARTIST_DATA.contact.instagramUrl} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.6rem', color: 'var(--color-charcoal)' }}>
              {ARTIST_DATA.contact.instagram}
            </a>
          </div>

          <div>
            <span className="meta-label">Website</span>
            <a href={`https://${ARTIST_DATA.contact.website}`} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.6rem', color: 'var(--color-charcoal)' }}>
              {ARTIST_DATA.contact.website}
            </a>
          </div>
        </div>

        {/* Minimal Message Form */}
        <div>
          <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.8rem', marginBottom: '2rem' }}>Send Direct Message</h3>
          
          {submitted ? (
            <div style={{ padding: '2rem 0', color: 'var(--color-charcoal)' }}>
              <p style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
                Thank you for reaching out. Pau Canelles will respond to your message shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <label className="meta-label" style={{ marginBottom: '0.5rem' }}>Full Name</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{ width: '100%', padding: '0.8rem 0', border: 'none', borderBottom: '1px solid var(--color-hairline)', backgroundColor: 'transparent', fontFamily: 'var(--font-sans)', fontSize: '1rem' }}
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="meta-label" style={{ marginBottom: '0.5rem' }}>Email Address</label>
                <input 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{ width: '100%', padding: '0.8rem 0', border: 'none', borderBottom: '1px solid var(--color-hairline)', backgroundColor: 'transparent', fontFamily: 'var(--font-sans)', fontSize: '1rem' }}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="meta-label" style={{ marginBottom: '0.5rem' }}>Message</label>
                <textarea 
                  rows="4" 
                  required 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  style={{ width: '100%', padding: '0.8rem 0', border: 'none', borderBottom: '1px solid var(--color-hairline)', backgroundColor: 'transparent', fontFamily: 'var(--font-sans)', fontSize: '1rem', resize: 'vertical' }}
                  placeholder="Inquiry or message details..."
                />
              </div>

              <button type="submit" className="btn-minimal" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>
                Send Message &rarr;
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
