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
    <div className="works-page site-container" style={{ paddingTop: '1rem', paddingBottom: '2.5rem' }}>
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
        {filteredArtworks.map((work, idx) => (
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
