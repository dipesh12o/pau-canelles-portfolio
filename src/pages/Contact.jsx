import React, { useState } from 'react';
import { ARTIST_DATA } from '../data/artistData';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const lang = (() => {
    try {
      return localStorage.getItem('pau_about_lang') || 'en';
    } catch {
      return 'en';
    }
  })();

  const isEs = lang === 'es';

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="about-editorial-page" style={{ paddingTop: '1.5rem', minHeight: '100vh' }}>
      <div className="about-container" style={{ maxWidth: '1100px', paddingTop: '1.5rem' }}>
        {/* Hero Section Title & Intro */}
        <div style={{ marginBottom: '3rem' }}>
          <h1 className="about-intro-statement" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.8rem)', marginBottom: '1.25rem' }}>
            {isEs ? 'Contacto' : 'Contact'}
          </h1>
          <p className="about-body-paragraph" style={{ maxWidth: '780px', fontSize: 'clamp(1.1rem, 1.4vw, 1.3rem)', color: '#4A463F' }}>
            {isEs
              ? 'Para consultas sobre adquisición de obra, proyectos murales, talleres creativos, colaboraciones o información general, no dudes en ponerte en contacto.'
              : 'For inquiries regarding artwork acquisitions, custom mural projects, creative workshops, collaborations, or general professional inquiries, feel free to get in touch.'}
          </p>
        </div>

        <hr className="about-hairline-separator" style={{ marginBottom: '3.5rem' }} />

        {/* 2-Column Responsive Layout: Left Info, Right Form */}
        <div className="contact-grid-container">
          {/* Left Column: Direct Contact Information */}
          <div className="contact-info-col">
            <h2 className="about-section-heading" style={{ fontSize: '1.5rem', marginBottom: '2.5rem' }}>
              {isEs ? 'Información de Contacto' : 'Direct Channels'}
            </h2>

            <div className="contact-item">
              <span className="about-section-tag" style={{ display: 'block', marginBottom: '0.4rem' }}>EMAIL</span>
              <a 
                href={`mailto:${ARTIST_DATA.contact.email}`} 
                className="contact-link-serif"
              >
                {ARTIST_DATA.contact.email}
              </a>
            </div>

            <div className="contact-item" style={{ marginTop: '2.5rem' }}>
              <span className="about-section-tag" style={{ display: 'block', marginBottom: '0.4rem' }}>INSTAGRAM</span>
              <a 
                href={ARTIST_DATA.contact.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link-serif"
              >
                {ARTIST_DATA.contact.instagram}
              </a>
            </div>

            <div className="contact-item" style={{ marginTop: '2.5rem' }}>
              <span className="about-section-tag" style={{ display: 'block', marginBottom: '0.4rem' }}>LOCATION</span>
              <span className="contact-location-text">
                Onda, Castellón
              </span>
            </div>
          </div>

          {/* Right Column: Minimal Form */}
          <div className="contact-form-col">
            <h2 className="about-section-heading" style={{ fontSize: '1.5rem', marginBottom: '2.5rem' }}>
              {isEs ? 'Enviar Mensaje' : 'Send Message'}
            </h2>

            {submitted ? (
              <div className="contact-success-box">
                <p className="about-body-paragraph" style={{ fontStyle: 'italic', color: '#1A1916', margin: 0 }}>
                  {isEs 
                    ? 'Gracias por tu mensaje. Pau Canelles te responderá a la brevedad.'
                    : 'Thank you for reaching out. Pau Canelles will respond to your message shortly.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-field-group">
                  <label className="about-section-tag" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    {isEs ? 'NOMBRE' : 'NAME'}
                  </label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="contact-input"
                    placeholder={isEs ? 'Tu nombre' : 'Your name'}
                  />
                </div>

                <div className="contact-field-group" style={{ marginTop: '2rem' }}>
                  <label className="about-section-tag" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    EMAIL
                  </label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="contact-input"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="contact-field-group" style={{ marginTop: '2rem' }}>
                  <label className="about-section-tag" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    {isEs ? 'MENSAJE' : 'MESSAGE'}
                  </label>
                  <textarea 
                    rows="5" 
                    required 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="contact-textarea"
                    placeholder={isEs ? 'Detalles de la consulta...' : 'Inquiry details...'}
                  />
                </div>

                <button type="submit" className="btn-reference-outline" style={{ marginTop: '2.5rem' }}>
                  {isEs ? 'ENVIAR MENSAJE →' : 'SEND MESSAGE →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
