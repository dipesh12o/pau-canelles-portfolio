import React from 'react';
import { ARTIST_DATA } from '../data/artistData';
import ArtworkFrame from '../components/ArtworkFrame';

export default function Works({ lang = 'es', onSelectArtwork }) {
  const isEs = lang === 'es';
  const artworks = ARTIST_DATA.artworks;

  const handleArtworkClick = (artwork) => {
    if (onSelectArtwork) {
      onSelectArtwork(artwork);
    }
  };

  return (
    <div className="works-page site-container" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      {/* Portfolio Header */}
      <div style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <h1 className="heading-serif" style={{ fontSize: '2.5rem' }}>
          {isEs ? 'Portafolio' : 'Portfolio'}
        </h1>
        <span className="meta-label">Pau Canelles &bull; {isEs ? 'Colección' : 'Collection'}</span>
      </div>

      {/* Balanced Editorial Portfolio Gallery Grid */}
      <div className="portfolio-gallery-grid">
        {artworks.map((work, idx) => {
          let spanClass = 'span-6';
          if (idx % 5 === 0 || idx % 5 === 1) {
            spanClass = 'span-6';
          } else {
            spanClass = 'span-4';
          }

          return (
            <div
              key={work.id}
              className={`portfolio-item ${spanClass}`}
              onClick={() => handleArtworkClick(work)}
              style={{ cursor: 'pointer' }}
              tabIndex={0}
              role="button"
              aria-label={`${work.title} (${work.year})`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleArtworkClick(work);
                }
              }}
            >
              <div className="portfolio-image-wrapper">
                <ArtworkFrame artwork={work} />
              </div>
              <div className="portfolio-meta-clean">
                <div>
                  <h3 className="portfolio-artwork-title">{work.title}</h3>
                  <span className="portfolio-artwork-sub">{work.medium}</span>
                </div>
                <span className="portfolio-artwork-sub">{work.year}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
