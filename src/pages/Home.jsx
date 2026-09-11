import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ARTIST_DATA } from '../data/artistData';
import ArtworkModal from '../components/ArtworkModal';
import ArtworkFrame from '../components/ArtworkFrame';

export default function Home({ setCurrentPage }) {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [subscribeSubmitted, setSubscribeSubmitted] = useState(false);

  const quotes = [
    {
      text: ARTIST_DATA.quote.englishText,
      originalText: ARTIST_DATA.quote.text,
      author: ARTIST_DATA.name
    },
    {
      text: "Art is a creative experience where every child expresses themselves freely without rigid tradition.",
      originalText: "El arte es una experiencia creativa donde expresarse libremente.",
      author: `${ARTIST_DATA.name} — Teaching Manifesto`
    }
  ];

  const handleNextQuote = () => {
    setActiveQuoteIndex((prev) => (prev + 1) % quotes.length);
  };

  const handlePrevQuote = () => {
    setActiveQuoteIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <div className="home-page">
      {/* ==================================================================
          SECTION 1: HERO (50/50 SPLIT ON DESKTOP, FULL-SCREEN ARTWORK ON MOBILE)
          ================================================================== */}
      <section className="split-hero-section">
        <div className="hero-left-content">
          <h1 className="hero-artist-name-title">
            Pau<br />CANELLES
          </h1>
          <p className="hero-bio-narrative">
            Pau Canelles (Onda, Castellón, 1999) es un artista visual y muralista cuya práctica se desarrolla principalmente a través de la pintura acrílica, el óleo y el spray. La materialidad ocupa un lugar central en su obra, construyendo superficies marcadas por la textura, el volumen y la irregularidad. Su trabajo explora la construcción de la identidad y cómo esta se transforma bajo la influencia del entorno, las relaciones y los estímulos que atraviesan la vida contemporánea.  
          </p>
        </div>

        <div className="hero-right-image-container img-container-hover" onClick={() => setSelectedArtwork(ARTIST_DATA.artworks[0])}>
          <ArtworkFrame artwork={ARTIST_DATA.artworks[0]} />

          {/* Mobile Overlay (Only visible on mobile <= 768px): Top Artist Title & Bottom About Button */}
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
              About
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================================
          SECTION 2: ABOUT STRIP (DESKTOP ONLY — Hidden on Mobile)
          ================================================================== */}
      <section className="split-about-strip">
        <div className="about-strip-left">
          <button 
            className="btn-reference-outline" 
            onClick={() => {
              setCurrentPage('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            About
          </button>
        </div>
        <div style={{ backgroundColor: 'var(--color-cream-bg)' }} />
      </section>

      {/* ==================================================================
          SECTION 3: QUOTE / STATEMENT SECTION — Exact Screenshot 2 Match
          ================================================================== */}
      <section className="quote-section-white">
        <button className="quote-nav-arrow left" onClick={handlePrevQuote} aria-label="Previous quote">
          <ChevronLeft size={36} strokeWidth={1} />
        </button>

        <div className="text-container" style={{ maxWidth: '780px' }}>
          <blockquote className="serif-quote" style={{ marginBottom: '1.5rem' }}>
            "{quotes[activeQuoteIndex].text}"
          </blockquote>
          <p style={{ fontFamily: 'var(--font-serif-body)', fontSize: '1rem', color: 'var(--color-text-dark)' }}>
            {quotes[activeQuoteIndex].author}
          </p>
        </div>

        <button className="quote-nav-arrow right" onClick={handleNextQuote} aria-label="Next quote">
          <ChevronRight size={36} strokeWidth={1} />
        </button>

        <div className="quote-dot-indicators">
          {quotes.map((_, idx) => (
            <span 
              key={idx} 
              className={`quote-dot ${activeQuoteIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveQuoteIndex(idx)}
            />
          ))}
        </div>
      </section>

      {/* ==================================================================
          SECTION 4: FEATURED EXHIBITION / WORKSHOPS (50/50 SPLIT) — Screenshot 3
          ================================================================== */}
      <section className="split-featured-section">
        <div className="featured-left-content">
          <h2 className="heading-serif" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            PAU CANELLES
          </h2>
          <h3 className="heading-serif" style={{ fontSize: '1.8rem', fontStyle: 'italic', marginBottom: '2rem', color: '#444' }}>
            Talleres Creativos 2025 / 2026
          </h3>
          <p style={{ fontFamily: 'var(--font-serif-body)', fontSize: '1.15rem', color: '#333', marginBottom: '0.5rem' }}>
            Course Schedule & Tactile Abstraction
          </p>
          <p style={{ fontFamily: 'var(--font-serif-body)', fontSize: '1.15rem', color: '#666', marginBottom: '2.5rem' }}>
            Spain
          </p>

          <button 
            className="btn-reference-outline"
            onClick={() => {
              setCurrentPage('workshops');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Explore Workshops
          </button>
        </div>

        <div className="hero-right-image-container img-container-hover" onClick={() => setSelectedArtwork(ARTIST_DATA.artworks[1] || ARTIST_DATA.artworks[0])}>
          <ArtworkFrame artwork={ARTIST_DATA.artworks[1] || ARTIST_DATA.artworks[0]} />
        </div>
      </section>

      {/* ==================================================================
          SECTION 5: PORTFOLIO SHOWCASE (DARK) — Exact Screenshot 4 Match
          ================================================================== */}
      <section className="portfolio-section-dark">
        <div className="portfolio-header-center">
          <h2 className="portfolio-title-text">PORTFOLIO</h2>
          <div className="portfolio-underline-accent" />
        </div>

        <div className="portfolio-grid-4col">
          {ARTIST_DATA.artworks.slice(0, 4).map((work) => (
            <div 
              key={work.id} 
              className="portfolio-grid-item"
              onClick={() => setSelectedArtwork(work)}
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
            View Complete Portfolio
          </button>
        </div>
      </section>

      {/* ==================================================================
          SECTION 6: CONTACT SECTION (CREAM) — Exact Screenshot 5 Match
          ================================================================== */}
      <section className="contact-section-cream">
        <div className="portfolio-header-center" style={{ marginBottom: '3rem' }}>
          <h2 className="portfolio-title-text" style={{ color: 'var(--color-text-dark)' }}>CONTACT</h2>
          <div className="portfolio-underline-accent" style={{ backgroundColor: 'var(--color-text-dark)' }} />
        </div>

        <div className="contact-container-center">
          {contactSubmitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <p style={{ fontFamily: 'var(--font-serif-body)', fontSize: '1.25rem', color: 'var(--color-text-dark)' }}>
                Thank you for your message. Pau Canelles will respond shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setContactSubmitted(true); }}>
              <div>
                <input 
                  type="text" 
                  required 
                  className="contact-input-underline" 
                  placeholder="Name" 
                />
              </div>

              <div>
                <input 
                  type="email" 
                  required 
                  className="contact-input-underline" 
                  placeholder="Email" 
                />
              </div>

              <div>
                <textarea 
                  rows="3" 
                  required 
                  className="contact-input-underline" 
                  placeholder="Message" 
                  style={{ resize: 'vertical' }}
                />
              </div>

              <div style={{ textAlign: 'left', marginTop: '1rem' }}>
                <button type="submit" className="btn-reference-outline">
                  Send
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ==================================================================
          SECTION 7: SUBSCRIBE SECTION (DARK) — Exact Screenshot 6 Match
          ================================================================== */}
      <section className="subscribe-section-dark">
        <div className="subscribe-flex-container">
          <h2 className="subscribe-title">SUBSCRIBE</h2>

          {subscribeSubmitted ? (
            <span style={{ fontFamily: 'var(--font-serif-body)', color: 'var(--color-text-light)', fontSize: '1.1rem' }}>
              Thank you for subscribing to Pau Canelles updates.
            </span>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubscribeSubmitted(true); }} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div>
                <input 
                  type="email" 
                  required 
                  className="subscribe-input-box" 
                  placeholder="Email*" 
                />
              </div>
              <button 
                type="submit" 
                className="btn-reference-outline" 
                style={{ backgroundColor: 'var(--color-cream-bg)', color: 'var(--color-text-dark)', borderColor: 'var(--color-cream-bg)', padding: '0.75rem 2rem' }}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedArtwork && (
        <ArtworkModal 
          artwork={selectedArtwork} 
          onClose={() => setSelectedArtwork(null)} 
          onNavigateContact={setCurrentPage}
        />
      )}
    </div>
  );
}
