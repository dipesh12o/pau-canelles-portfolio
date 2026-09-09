import React from 'react';
import { ARTIST_DATA } from '../data/artistData';

export default function About({ setCurrentPage }) {
  return (
    <div className="about-page site-container" style={{ paddingTop: '7.5rem', paddingBottom: '8rem' }}>
      <div className="text-container">
        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <span className="meta-label">Biography</span>
          <h1 className="heading-serif" style={{ fontSize: '3.2rem', margin: '0.5rem 0 1.5rem 0' }}>
            Pau Canelles
          </h1>
          <p className="serif-quote" style={{ fontSize: '1.75rem', color: 'var(--color-sepia)', lineHeight: '1.4' }}>
            "{ARTIST_DATA.quote.englishText}"
          </p>
        </div>

        <hr className="hairline" style={{ marginBottom: '4rem' }} />

        {/* Narrative Paragraphs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '5rem' }}>
          {ARTIST_DATA.bio.full.map((paragraph, idx) => (
            <p key={idx} style={{ fontSize: '1.15rem', color: '#222222', lineHeight: '1.8' }}>
              {paragraph}
            </p>
          ))}
        </div>

        <hr className="hairline" style={{ marginBottom: '4rem' }} />

        {/* Approach */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginBottom: '5rem' }}>
          <div>
            <span className="meta-label" style={{ marginBottom: '0.5rem' }}>01. Tactile Abstraction</span>
            <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.6rem', marginBottom: '0.75rem' }}>Raw Materials & Texture</h3>
            <p style={{ color: '#555', lineHeight: '1.7' }}>
              Working with earth pigments, sawdust, plaster, and natural fibers to turn flat canvas into tactile maps of depth and quiet visual meditation.
            </p>
          </div>

          <div>
            <span className="meta-label" style={{ marginBottom: '0.5rem' }}>02. Historical Dialogue</span>
            <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.6rem', marginBottom: '0.75rem' }}>Universal Masters</h3>
            <p style={{ color: '#555', lineHeight: '1.7' }}>
              Deconstructing key breakthroughs by Picasso, Miró, Basquiat, Matisse, Pollock, and Tàpies, translating art history into direct, hands-on discovery.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', paddingTop: '2rem' }}>
          <button className="btn-minimal" onClick={() => setCurrentPage('contact')}>
            Get in Touch &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
