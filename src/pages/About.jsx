import React, { useState } from 'react';
import { ARTIST_DATA } from '../data/artistData';

export default function About({ setCurrentPage }) {
  const [lang, setLang] = useState('en');
  const content = ARTIST_DATA.aboutStory[lang];
  const images = ARTIST_DATA.aboutImages;

  return (
    <div className="about-editorial-page">
      {/* Top Header & Language Switch */}
      <div className="about-header-bar">
        <div className="about-header-inner">
          <span className="about-page-tag">{content.pageTitle}</span>
          
          <div className="about-lang-switch">
            <button 
              className={`about-lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
              aria-label="Switch to English"
            >
              EN
            </button>
            <span className="about-lang-divider">/</span>
            <button 
              className={`about-lang-btn ${lang === 'es' ? 'active' : ''}`}
              onClick={() => setLang('es')}
              aria-label="Cambiar a Español"
            >
              ES
            </button>
          </div>
        </div>
      </div>

      <div className="about-container">
        {/* ==================================================================
            01 — INTRODUCTION / HERO (ASYMMETRIC SPLIT)
            ================================================================== */}
        <section className="about-hero-section">
          <div className="about-hero-grid">
            <div className="about-hero-text-col">
              <h1 className="about-intro-statement">
                "{content.intro}"
              </h1>
            </div>

            {/* PHOTO 1 — Portrait / photo of me with one of my artworks */}
            <div className="about-photo-wrapper photo-1-wrapper">
              <img 
                src={images.photo1} 
                alt="Pau Canelles visual artist" 
                className="about-editorial-img"
              />
              <div className="photo-caption-tag">PHOTO 01 — ARTIST PORTRAIT</div>
            </div>
          </div>
        </section>

        <hr className="about-hairline-separator" />

        {/* ==================================================================
            02 — RETURN TO PAINTING / CHILDHOOD STORY
            ================================================================== */}
        <section className="about-story-section">
          <div className="about-section-header">
            <span className="about-section-num">{content.sections.returnToPainting.number}</span>
            <span className="about-section-tag">{content.sections.returnToPainting.tag}</span>
          </div>

          <h2 className="about-section-heading">
            {content.sections.returnToPainting.heading}
          </h2>

          <div className="about-narrative-block">
            {content.sections.returnToPainting.paragraphs.map((p, idx) => (
              <p key={idx} className="about-body-paragraph">
                {p}
              </p>
            ))}
          </div>

          {/* PHOTO 2 — Me working on a painting in the studio */}
          <div className="about-photo-wrapper photo-2-wide">
            <img 
              src={images.photo2} 
              alt="Pau Canelles working in studio" 
              className="about-editorial-img"
            />
            <div className="photo-caption-tag">PHOTO 02 — STUDIO PROCESS</div>
          </div>
        </section>

        <hr className="about-hairline-separator" />

        {/* ==================================================================
            03 — IDENTITY / NEOEXPRESIVOS & MATERIALITY (OFFSET GRID)
            ================================================================== */}
        <section className="about-story-section">
          <div className="about-asymmetric-grid reverse">
            {/* PHOTO 3 — Me working on one of my current paintings */}
            <div className="about-photo-wrapper photo-3-wrapper">
              <img 
                src={images.photo3} 
                alt="Pau Canelles current artworks" 
                className="about-editorial-img"
              />
              <div className="photo-caption-tag">PHOTO 03 — CURRENT PRACTICE</div>
            </div>

            <div className="about-text-col">
              <div className="about-section-header">
                <span className="about-section-num">{content.sections.identityNeoexpresivos.number}</span>
                <span className="about-section-tag">{content.sections.identityNeoexpresivos.tag}</span>
              </div>

              <h2 className="about-section-heading">
                {content.sections.identityNeoexpresivos.heading}
              </h2>

              <div className="about-narrative-block">
                {content.sections.identityNeoexpresivos.paragraphs.map((p, idx) => (
                  <p key={idx} className="about-body-paragraph">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <hr className="about-hairline-separator" />

        {/* ==================================================================
            04 — MURALS & PUBLIC SPACE (EXPANSIVE SCALE)
            ================================================================== */}
        <section className="about-story-section">
          <div className="about-section-header">
            <span className="about-section-num">{content.sections.murals.number}</span>
            <span className="about-section-tag">{content.sections.murals.tag}</span>
          </div>

          <h2 className="about-section-heading">
            {content.sections.murals.heading}
          </h2>

          <div className="about-narrative-block" style={{ maxWidth: '820px' }}>
            {content.sections.murals.paragraphs.map((p, idx) => (
              <p key={idx} className="about-body-paragraph">
                {p}
              </p>
            ))}
          </div>

          {/* PHOTO 4 — Me painting a large-scale mural */}
          <div className="about-photo-wrapper photo-4-mural-expansive">
            <img 
              src={images.photo4} 
              alt="Pau Canelles painting large-scale mural" 
              className="about-editorial-img"
            />
            <div className="photo-caption-tag">PHOTO 04 — LARGE-SCALE MURAL WORK</div>
          </div>
        </section>

        <hr className="about-hairline-separator" />

        {/* ==================================================================
            05 — ART EDUCATION & CREATIVE WORKSHOPS
            ================================================================== */}
        <section className="about-story-section">
          <div className="about-asymmetric-grid">
            <div className="about-text-col">
              <div className="about-section-header">
                <span className="about-section-num">{content.sections.artEducation.number}</span>
                <span className="about-section-tag">{content.sections.artEducation.tag}</span>
              </div>

              <h2 className="about-section-heading">
                {content.sections.artEducation.heading}
              </h2>

              <div className="about-narrative-block">
                {content.sections.artEducation.paragraphs.map((p, idx) => (
                  <p key={idx} className="about-body-paragraph">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* PHOTO 5 — Me teaching / working during creative workshops */}
            <div className="about-photo-wrapper photo-5-wrapper">
              <img 
                src={images.photo5} 
                alt="Pau Canelles teaching creative workshops" 
                className="about-editorial-img"
              />
              <div className="photo-caption-tag">PHOTO 05 — CREATIVE WORKSHOPS</div>
            </div>
          </div>
        </section>

        <hr className="about-hairline-separator" />

        {/* ==================================================================
            06 — CLOSING STATEMENT & CONCLUSION
            ================================================================== */}
        <section className="about-closing-section">
          <blockquote className="about-closing-quote">
            "{content.closing}"
          </blockquote>
          <p className="about-closing-author">
            — Pau Canelles
          </p>

          <div style={{ marginTop: '4rem' }}>
            <button 
              className="btn-reference-outline" 
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              {lang === 'en' ? 'Get in Touch' : 'Contactar'}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
