import React, { useState } from 'react';
import { ARTIST_DATA } from '../data/artistData';
import ArtworkFrame from '../components/ArtworkFrame';

export default function Home({ setCurrentPage, lang = 'es', onSelectArtwork }) {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [enquiryType, setEnquiryType] = useState('individual'); // 'individual' or 'gallery'
  const [formData, setFormData] = useState({ name: '', galleryName: '', email: '', message: '' });

  const isEs = lang === 'es';

  const handleContactSubmit = (e) => {
    e.preventDefault();
    let msg = `*Nueva consulta desde la web*\n`;
    msg += `*Nombre:* ${formData.name}\n`;
    if (enquiryType === 'gallery' && formData.galleryName) {
      msg += `*Galería / Entidad:* ${formData.galleryName}\n`;
    }
    msg += `*Email:* ${formData.email}\n`;
    msg += `*Mensaje:*\n${formData.message}`;

    const waUrl = `https://wa.me/34619755639?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
    setContactSubmitted(true);
  };

  return (
    <div className="home-page">
      {/* ==================================================================
          SECTION 1: INTRODUCTION & HERO + ABOUT CTA
          ================================================================== */}
      <section className="split-hero-section">
        <div className="hero-left-content">
          <h1 className="hero-artist-name-title">
            Pau<br />CANELLES
          </h1>
          <p className="hero-bio-narrative">
            {isEs
              ? "Pau Canelles (Onda, Castellón, 1999) es un artista visual y muralista cuya práctica se desarrolla principalmente a través de la pintura acrílica, el óleo y el spray. La materialidad ocupa un lugar central en su obra, construyendo superficies marcadas por la textura, el volumen y la irregularidad. Su trabajo explora la construcción de la identidad y cómo esta se transforma bajo la influencia del entorno, las relaciones y los estímulos que atraviesan la vida contemporánea."
              : "Pau Canelles (Onda, Castellón, 1999) is a visual artist and muralist working primarily with acrylic, oil, and spray paint. Materiality plays a central role in his work, building surfaces defined by texture, volume, and irregularity. His practice explores the construction of identity and how it transforms under the influence of environment, relationships, and contemporary stimuli."}
          </p>

          <div style={{ marginTop: '2.5rem' }}>
            <button 
              className="btn-reference-outline" 
              onClick={() => {
                setCurrentPage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              {isEs ? 'Sobre mí' : 'About'}
            </button>
          </div>
        </div>

        <div className="hero-right-image-container">
          <ArtworkFrame artwork={ARTIST_DATA.heroArtwork || ARTIST_DATA.artworks[0]} />

          {/* Mobile Overlay */}
          <div className="mobile-hero-overlay">
            <h1 className="mobile-hero-artist-title">
              Pau<br />CANELLES
            </h1>
            <button 
              className="btn-mobile-about-overlay" 
              onClick={(e) => {
                e.stopPropagation();
                setCurrentPage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              {isEs ? 'Sobre mí' : 'About'}
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================================
          SECTION 2: COMPACT SPANISH QUOTE SECTION
          ================================================================== */}
      <section className="quote-section-compact">
        <div className="text-container" style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <blockquote className="serif-quote" style={{ marginBottom: '1rem', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
            "{ARTIST_DATA.quote.text}"
          </blockquote>
          <p style={{ fontFamily: 'var(--font-serif-body)', fontSize: '0.95rem', color: '#8C8275', letterSpacing: '0.05em' }}>
            — {ARTIST_DATA.name}
          </p>
        </div>
      </section>

      {/* ==================================================================
          SECTION 3: PORTFOLIO SHOWCASE (DARK) — CLICKABLE ARTWORKS
          ================================================================== */}
      <section className="portfolio-section-dark">
        <div className="portfolio-header-center">
          <h2 className="portfolio-title-text">{isEs ? 'PORTAFOLIO' : 'PORTFOLIO'}</h2>
          <div className="portfolio-underline-accent" />
        </div>

        <div className="portfolio-grid-4col">
          {ARTIST_DATA.artworks.slice(0, 4).map((work) => (
            <div 
              key={work.id} 
              className="portfolio-grid-item"
              onClick={() => onSelectArtwork && onSelectArtwork(work)}
              style={{ cursor: 'pointer' }}
            >
              <ArtworkFrame artwork={work} />
              <div className="portfolio-hover-overlay">
                <span className="portfolio-overlay-title">{work.title}</span>
                <span className="portfolio-overlay-year">{work.year}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <button 
            className="btn-reference-outline btn-reference-outline-dark"
            onClick={() => {
              setCurrentPage('works');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {isEs ? 'Ver Portafolio Completo' : 'View Complete Portfolio'}
          </button>
        </div>
      </section>

      {/* ==================================================================
          SECTION 4: CREATIVE WORKSHOPS (50/50 SPLIT)
          ================================================================== */}
      <section className="split-featured-section">
        <div className="featured-left-content">
          <h2 className="heading-serif" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            PAU CANELLES
          </h2>
          <h3 className="heading-serif" style={{ fontSize: '1.8rem', fontStyle: 'italic', marginBottom: '1.5rem', color: '#444' }}>
            {isEs ? 'Talleres Creativos 2026 / 2027' : 'Creative Workshops 2026 / 2027'}
          </h3>
          <p style={{ fontFamily: 'var(--font-serif-body)', fontSize: '1.1rem', color: '#333', marginBottom: '0.4rem' }}>
            {isEs ? 'Calendario de Cursos y Experimentación Artística' : 'Course Schedule & Experiential Exploration'}
          </p>
          <p style={{ fontFamily: 'var(--font-serif-body)', fontSize: '1rem', color: '#666', marginBottom: '2.5rem' }}>
            Onda, Castellón &bull; Spain
          </p>

          <a 
            href="/Calendario-talleres-creativos-2026-27.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-reference-outline"
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            {isEs ? 'Explorar Talleres' : 'Explore Workshops'}
          </a>
        </div>

        <div className="hero-right-image-container">
          <img 
            src="/workshops/mientras-todo-pasaba-workshop.jpg" 
            alt="Mientras todo pasaba — Pau Canelles" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </div>
      </section>

      {/* ==================================================================
          SECTION 5: CONTACT SECTION (CREAM WITH 2 ENQUIRY OPTIONS)
          ================================================================== */}
      <section className="contact-section-cream">
        <div className="portfolio-header-center" style={{ marginBottom: '3rem' }}>
          <h2 className="portfolio-title-text" style={{ color: 'var(--color-text-dark)' }}>
            {isEs ? 'CONTACTO' : 'CONTACT'}
          </h2>
          <div className="portfolio-underline-accent" style={{ backgroundColor: 'var(--color-text-dark)' }} />
        </div>

        <div className="contact-container-center" style={{ maxWidth: '680px', margin: '0 auto' }}>
          {/* Segmented Control Selector for Enquiry Type */}
          <div className="enquiry-segmented-control" style={{ marginBottom: '2.5rem' }}>
            <button 
              type="button" 
              className={`segmented-btn ${enquiryType === 'individual' ? 'active' : ''}`}
              onClick={() => setEnquiryType('individual')}
            >
              {isEs ? 'Coleccionista privado / Particular' : "I’m a private collector / individual"}
            </button>
            <button 
              type="button" 
              className={`segmented-btn ${enquiryType === 'gallery' ? 'active' : ''}`}
              onClick={() => setEnquiryType('gallery')}
            >
              {isEs ? 'Represento a una galería / Profesional del arte' : "I represent a gallery / art professional"}
            </button>
          </div>

          {contactSubmitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <p style={{ fontFamily: 'var(--font-serif-body)', fontSize: '1.25rem', color: 'var(--color-text-dark)' }}>
                {isEs 
                  ? 'Gracias por tu mensaje. Pau Canelles te responderá a la brevedad.' 
                  : 'Thank you for your message. Pau Canelles will respond shortly.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <input 
                  type="text" 
                  required 
                  className="contact-input-underline" 
                  placeholder={isEs ? 'Nombre' : 'Name'}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              {/* Conditional Gallery Name Field for Option 2 */}
              {enquiryType === 'gallery' && (
                <div>
                  <input 
                    type="text" 
                    required 
                    className="contact-input-underline" 
                    placeholder={isEs ? 'Nombre de la galería' : 'Name of the gallery'}
                    value={formData.galleryName}
                    onChange={(e) => setFormData({ ...formData, galleryName: e.target.value })}
                  />
                </div>
              )}

              <div>
                <input 
                  type="email" 
                  required 
                  className="contact-input-underline" 
                  placeholder="Email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <textarea 
                  rows="3" 
                  required 
                  className="contact-input-underline" 
                  placeholder={isEs ? 'Mensaje' : 'Message'} 
                  style={{ resize: 'vertical' }}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div style={{ textAlign: 'left', marginTop: '1rem' }}>
                <button type="submit" className="btn-reference-outline">
                  {isEs ? 'Enviar Mensaje →' : 'Send Message →'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
