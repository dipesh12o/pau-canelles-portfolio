import React, { useState } from 'react';
import { ARTIST_DATA } from '../data/artistData';

export default function About({ setCurrentPage }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('pau_about_lang') || 'en';
    } catch {
      return 'en';
    }
  });

  const handleLangChange = (newLang, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setLang(newLang);
    try {
      localStorage.setItem('pau_about_lang', newLang);
    } catch {
      // Fallback if localStorage is disabled
    }
  };

  const content = ARTIST_DATA.aboutStory[lang] || ARTIST_DATA.aboutStory.en;
  const headings = content.sectionHeadings;
  const captions = ARTIST_DATA.aboutStory.photoCaptions;
  const images = ARTIST_DATA.aboutImages;
  const p = content.paragraphs;

  return (
    <div className="about-editorial-page">
      {/* Top Header & Language Switch */}
      <div className="about-header-bar">
        <div className="about-header-inner">
          <span className="about-page-tag">{content.pageTitle}</span>
          
          <div className="about-lang-switch">
            <button 
              className={`about-lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={(e) => handleLangChange('en', e)}
              aria-label="Switch to English"
              type="button"
            >
              EN
            </button>
            <span className="about-lang-divider">/</span>
            <button 
              className={`about-lang-btn ${lang === 'es' ? 'active' : ''}`}
              onClick={(e) => handleLangChange('es', e)}
              aria-label="Cambiar a Español"
              type="button"
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
              <div className="about-section-header">
                <span className="about-section-num">{headings[0].number}</span>
                <span className="about-section-tag">{headings[0].tag}</span>
              </div>
              <h2 className="about-section-heading">{headings[0].heading}</h2>

              <h1 className="about-intro-statement" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
                "{content.intro}"
              </h1>
              
              <div className="about-story-text-block">
                <p className="about-body-paragraph">{p[0]}</p>
              </div>
            </div>

            {/* PHOTO 1 — Portrait / photo of me with one of my artworks */}
            <div className="about-photo-wrapper photo-1-wrapper">
              <img 
                src={images.photo1} 
                alt={captions.photo1} 
                className="about-editorial-img"
              />
              <div className="photo-caption-tag">{captions.photo1}</div>
            </div>
          </div>
        </section>

        <hr className="about-hairline-separator" />

        {/* ==================================================================
            02 — A DIFFERENT PATH / EDUCATION & DESIGN
            ================================================================== */}
        <section className="about-story-section">
          <div className="about-section-header">
            <span className="about-section-num">{headings[1].number}</span>
            <span className="about-section-tag">{headings[1].tag}</span>
          </div>
          <h2 className="about-section-heading">{headings[1].heading}</h2>

          <div className="about-story-text-block wide">
            <p className="about-body-paragraph">{p[1]}</p>
            <p className="about-body-paragraph">{p[2]}</p>
          </div>
        </section>

        <hr className="about-hairline-separator" />

        {/* ==================================================================
            03 — REDISCOVERING PAINTING / RETURN AT 21
            ================================================================== */}
        <section className="about-story-section">
          <div className="about-section-header">
            <span className="about-section-num">{headings[2].number}</span>
            <span className="about-section-tag">{headings[2].tag}</span>
          </div>
          <h2 className="about-section-heading">{headings[2].heading}</h2>

          <div className="about-story-text-block wide">
            <p className="about-body-paragraph">{p[3]}</p>
            <p className="about-body-paragraph">{p[4]}</p>
          </div>

          {/* PHOTO 2 — Me working on a painting in the studio */}
          <div className="about-photo-wrapper photo-2-wide">
            <img 
              src={images.photo2} 
              alt={captions.photo2} 
              className="about-editorial-img"
            />
            <div className="photo-caption-tag">{captions.photo2}</div>
          </div>
        </section>

        <hr className="about-hairline-separator" />

        {/* ==================================================================
            04 — MATERIALITY & IDENTITY / CURRENT PRACTICE
            ================================================================== */}
        <section className="about-story-section">
          <div className="about-asymmetric-grid reverse">
            {/* PHOTO 3 — Me working on one of my current paintings / surrounded by my work */}
            <div className="about-photo-wrapper photo-3-wrapper">
              <img 
                src={images.photo3} 
                alt={captions.photo3} 
                className="about-editorial-img"
              />
              <div className="photo-caption-tag">{captions.photo3}</div>
            </div>

            <div className="about-text-col">
              <div className="about-section-header">
                <span className="about-section-num">{headings[3].number}</span>
                <span className="about-section-tag">{headings[3].tag}</span>
              </div>
              <h2 className="about-section-heading">{headings[3].heading}</h2>

              <div className="about-story-text-block">
                <p className="about-body-paragraph">{p[5]}</p>
                <p className="about-body-paragraph">{p[6]}</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="about-hairline-separator" />

        {/* ==================================================================
            05 — BEYOND THE STUDIO / MURALS & PUBLIC SPACE
            ================================================================== */}
        <section className="about-story-section">
          <div className="about-section-header">
            <span className="about-section-num">{headings[4].number}</span>
            <span className="about-section-tag">{headings[4].tag}</span>
          </div>
          <h2 className="about-section-heading">{headings[4].heading}</h2>

          <div className="about-story-text-block wide">
            <p className="about-body-paragraph">{p[7]}</p>
          </div>

          {/* PHOTO 4 — Me painting a large-scale mural */}
          <div className="about-photo-wrapper photo-4-mural-expansive">
            <img 
              src={images.photo4} 
              alt={captions.photo4} 
              className="about-editorial-img"
            />
            <div className="photo-caption-tag">{captions.photo4}</div>
          </div>
        </section>

        <hr className="about-hairline-separator" />

        {/* ==================================================================
            06 — SHARING THE PROCESS / ART EDUCATION
            ================================================================== */}
        <section className="about-story-section">
          <div className="about-asymmetric-grid">
            <div className="about-text-col">
              <div className="about-section-header">
                <span className="about-section-num">{headings[5].number}</span>
                <span className="about-section-tag">{headings[5].tag}</span>
              </div>
              <h2 className="about-section-heading">{headings[5].heading}</h2>

              <div className="about-story-text-block">
                <p className="about-body-paragraph">{p[8]}</p>
              </div>
            </div>

            {/* PHOTO 5 — Me teaching / working during one of my creative workshops */}
            <div className="about-photo-wrapper photo-5-wrapper">
              <img 
                src={images.photo5} 
                alt={captions.photo5} 
                className="about-editorial-img"
              />
              <div className="photo-caption-tag">{captions.photo5}</div>
            </div>
          </div>
        </section>

        <hr className="about-hairline-separator" />

        {/* ==================================================================
            07 — ONE CONTINUOUS JOURNEY / CONCLUSION
            ================================================================== */}
        <section className="about-story-section">
          <div className="about-section-header">
            <span className="about-section-num">{headings[6].number}</span>
            <span className="about-section-tag">{headings[6].tag}</span>
          </div>
          <h2 className="about-section-heading">{headings[6].heading}</h2>

          <div className="about-story-text-block wide">
            <p className="about-body-paragraph" style={{ fontSize: 'clamp(1.15rem, 1.4vw, 1.35rem)', fontWeight: '500' }}>
              {p[9]}
            </p>
          </div>

          {/* OPTIONAL FINAL PHOTO — Me in the studio surrounded by my work */}
          <div className="about-photo-wrapper photo-2-wide" style={{ marginTop: '2.5rem' }}>
            <img 
              src={images.photo6 || images.photo2} 
              alt={captions.photo6} 
              className="about-editorial-img"
            />
            <div className="photo-caption-tag">{captions.photo6}</div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="about-closing-section" style={{ marginTop: '4rem', textAlign: 'center' }}>
          <button 
            className="btn-reference-outline" 
            onClick={() => {
              setCurrentPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {lang === 'en' ? 'Get in Touch' : 'Contactar'}
          </button>
        </section>
      </div>
    </div>
  );
}
