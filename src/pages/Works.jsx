import React, { useState } from 'react';
import { ARTIST_DATA } from '../data/artistData';
import ArtworkFrame from '../components/ArtworkFrame';

export default function Works({ lang = 'es', onSelectArtwork }) {
  const isEs = lang === 'es';
  const artworks = ARTIST_DATA.artworks;

  // Helper to compute 2-year interval label (e.g. 2026-2025, 2024-2023)
  const getYearInterval = (yearStr) => {
    const y = parseInt(yearStr, 10);
    if (isNaN(y)) return yearStr;
    const upper = y % 2 === 0 ? y : y + 1;
    const lower = upper - 1;
    return `${upper}–${lower}`;
  };

  // Derive unique 2-year intervals present in real artwork data
  const availableIntervals = Array.from(
    new Set(artworks.map((a) => getYearInterval(a.year)))
  ).sort((a, b) => b.localeCompare(a));

  // Default selection is the latest available year interval
  const [selectedInterval, setSelectedInterval] = useState(availableIntervals[0] || 'all');

  const handleArtworkClick = (artwork) => {
    if (onSelectArtwork) {
      onSelectArtwork(artwork);
    }
  };

  // Filter artworks by selected interval
  const filteredArtworks = selectedInterval === 'all'
    ? artworks
    : artworks.filter((a) => getYearInterval(a.year) === selectedInterval);

  return (
    <div className="works-page site-container" style={{ paddingTop: '0.5rem', paddingBottom: '5rem' }}>
      {/* Portfolio Header */}
      <div style={{ marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '1200px', margin: '0 auto 1.25rem auto' }}>
        <h1 className="heading-serif" style={{ fontSize: '1.75rem', margin: 0 }}>
          {isEs ? 'Portafolio' : 'Portfolio'}
        </h1>
        <span className="meta-label">Pau Canelles &bull; {isEs ? 'Colección' : 'Collection'}</span>
      </div>

      {/* Year-Wise Portfolio Navigation Row */}
      {availableIntervals.length > 0 && (
        <div className="portfolio-year-nav">
          {availableIntervals.map((interval) => (
            <button
              key={interval}
              onClick={() => setSelectedInterval(interval)}
              className={`portfolio-year-btn ${selectedInterval === interval ? 'active' : ''}`}
            >
              {interval}
            </button>
          ))}
          <button
            onClick={() => setSelectedInterval('all')}
            className={`portfolio-year-btn ${selectedInterval === 'all' ? 'active' : ''}`}
          >
            {isEs ? 'TODOS' : 'ALL'}
          </button>
        </div>
      )}

      {/* Visual Editorial Gallery Layout */}
      <div className="portfolio-gallery-grid">
        {filteredArtworks.map((work, idx) => {
          // Dynamic editorial span: first item in interval gets featured width
          let spanClass = 'span-6';
          if (filteredArtworks.length === 1) {
            spanClass = 'span-8';
          } else if (idx === 0) {
            spanClass = 'span-8';
          } else if (idx % 3 === 1) {
            spanClass = 'span-4';
          } else {
            spanClass = 'span-6';
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
                <div style={{ textAlign: 'right' }}>
                  {work.dimensions && (
                    <span className="portfolio-artwork-sub" style={{ fontSize: '0.78rem', color: '#8C8275' }}>
                      {work.dimensions}
                    </span>
                  )}
                  <span className="portfolio-artwork-sub" style={{ fontWeight: 500, marginTop: '0.15rem' }}>
                    {work.year}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

