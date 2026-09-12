import React, { useState } from 'react';
import { ARTIST_DATA } from '../data/artistData';
import ArtworkFrame from '../components/ArtworkFrame';

// Helper to filter out missing or "N/A" subtitles cleanly
const hasSubtitle = (sub) => {
  if (!sub) return false;
  const trimmed = sub.trim();
  return trimmed !== '' && trimmed.toUpperCase() !== 'N/A' && trimmed.toUpperCase() !== '[BLANK]';
};

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

      {/* Symmetrical 3-Column Editorial Gallery Layout */}
      <div className="portfolio-gallery-grid">
        {filteredArtworks.map((work) => (
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
              <ArtworkFrame artwork={work} />
            </div>
            <div className="portfolio-meta-clean">
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 className="portfolio-artwork-title">{work.title}</h3>
                {hasSubtitle(work.subtitle) && (
                  <span className="portfolio-artwork-sub font-italic" style={{ color: '#7A756C', fontSize: '0.82rem', marginBottom: '0.15rem', display: 'block' }}>
                    {work.subtitle}
                  </span>
                )}
                <span className="portfolio-artwork-sub" style={{ fontSize: '0.8rem', color: '#666', lineHeight: 1.3 }}>
                  {work.technique || work.medium}
                </span>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0, paddingLeft: '0.5rem' }}>
                {work.dimensions && (
                  <span className="portfolio-artwork-sub" style={{ fontSize: '0.78rem', color: '#8C8275', display: 'block' }}>
                    {work.dimensions}
                  </span>
                )}
                <span className="portfolio-artwork-sub" style={{ fontWeight: 500, fontSize: '0.8rem', marginTop: '0.15rem', display: 'block' }}>
                  {work.year}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
