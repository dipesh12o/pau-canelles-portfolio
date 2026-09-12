import React, { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import ArtworkFrame from '../components/ArtworkFrame';

export default function ArtworkDetail({ artwork, lang = 'es', setCurrentPage }) {
  const isEs = lang === 'es';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [artwork]);

  if (!artwork) return null;

  return (
    <div className="about-editorial-page" style={{ paddingTop: '3rem', paddingBottom: '6rem', minHeight: '100vh' }}>
      <div className="about-container" style={{ maxWidth: '1100px' }}>
        {/* Back Navigation Button */}
        <div style={{ marginBottom: '2.5rem' }}>
          <button 
            onClick={() => {
              setCurrentPage('works');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-reference-outline"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.6rem 1.4rem', fontSize: '0.8rem' }}
          >
            <ArrowLeft size={16} />
            {isEs ? 'Volver a Portafolio' : 'Back to Portfolio'}
          </button>
        </div>

        {/* 2-Column Desktop Grid for Artwork Detail */}
        <div className="artwork-detail-grid">
          {/* Left Column: Prominent Artwork Display */}
          <div className="artwork-detail-image-box">
            <ArtworkFrame artwork={artwork} />
          </div>

          {/* Right Column: Artwork Metadata & Specifications */}
          <div className="artwork-detail-info-col">
            <div style={{ marginBottom: '2rem' }}>
              <span className="about-section-tag" style={{ display: 'block', marginBottom: '0.5rem' }}>
                {artwork.category}
              </span>
              <h1 className="about-intro-statement" style={{ fontSize: 'clamp(2rem, 3.2vw, 3rem)', marginBottom: '0.6rem', lineHeight: '1.2' }}>
                {artwork.title}
              </h1>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: '#7A756C', letterSpacing: '0.05em' }}>
                Pau Canelles &bull; {artwork.year}
              </p>
            </div>

            <hr className="about-hairline-separator" style={{ margin: '2rem 0' }} />

            {/* Artwork Specifications Table */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div>
                <span className="about-section-tag" style={{ display: 'block', fontSize: '0.7rem', color: '#8C8275', marginBottom: '0.3rem' }}>
                  {isEs ? 'TÉCNICA / MATERIALES' : 'MEDIUM / TECHNIQUE'}
                </span>
                <span style={{ fontFamily: 'var(--font-serif-body)', fontSize: '1.1rem', color: 'var(--color-text-dark)', lineHeight: '1.5', display: 'block' }}>
                  {artwork.medium}
                </span>
              </div>

              <div>
                <span className="about-section-tag" style={{ display: 'block', fontSize: '0.7rem', color: '#8C8275', marginBottom: '0.3rem' }}>
                  {isEs ? 'DIMENSIONES' : 'DIMENSIONS'}
                </span>
                <span style={{ fontFamily: 'var(--font-serif-body)', fontSize: '1.1rem', color: 'var(--color-text-dark)', display: 'block' }}>
                  {artwork.dimensions}
                </span>
              </div>

              <div>
                <span className="about-section-tag" style={{ display: 'block', fontSize: '0.7rem', color: '#8C8275', marginBottom: '0.3rem' }}>
                  {isEs ? 'AÑO' : 'YEAR'}
                </span>
                <span style={{ fontFamily: 'var(--font-serif-body)', fontSize: '1.1rem', color: 'var(--color-text-dark)', display: 'block' }}>
                  {artwork.year}
                </span>
              </div>
            </div>

            {/* Concept & Description */}
            {artwork.description && (
              <div style={{ marginBottom: '3rem' }}>
                <span className="about-section-tag" style={{ display: 'block', fontSize: '0.7rem', color: '#8C8275', marginBottom: '0.6rem' }}>
                  {isEs ? 'CONCEPTO & DESCRIPCIÓN' : 'CONCEPT & DESCRIPTION'}
                </span>
                <p className="about-body-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  {artwork.description}
                </p>
              </div>
            )}

            {/* Contact Inquiry CTA */}
            <div>
              <button 
                className="btn-reference-outline" 
                style={{ width: '100%', justifyContent: 'center', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem' }}
                onClick={() => {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {isEs ? 'Consultar sobre esta obra' : 'Inquire About This Work'} <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
