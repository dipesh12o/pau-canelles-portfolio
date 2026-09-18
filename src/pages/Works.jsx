import React from 'react';
import { ARTIST_DATA } from '../data/artistData';
import ArtworkFrame from '../components/ArtworkFrame';

export default function Works({ lang = 'es', onSelectArtwork }) {
  const artworks = ARTIST_DATA.artworks;

  const handleArtworkClick = (artwork) => {
    if (onSelectArtwork) {
      onSelectArtwork(artwork);
    }
  };

  return (
    <div className="works-page site-container" style={{ paddingTop: '1.5rem', paddingBottom: '2.5rem' }}>
      {/* Symmetrical 3-Column Editorial Gallery Layout */}
      <div className="portfolio-gallery-grid">
        {artworks.map((work, idx) => (
          <div
            key={work.id}
            className="portfolio-item"
            onClick={() => handleArtworkClick(work)}
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
              <ArtworkFrame artwork={work} isPriority={idx < 6} />
            </div>
            
            {/* Title-only block directly underneath the artwork image */}
            <div className="portfolio-meta-clean">
              <h3 className="portfolio-artwork-title">{work.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
