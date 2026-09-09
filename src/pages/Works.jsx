import React, { useState } from 'react';
import { ARTIST_DATA } from '../data/artistData';
import ArtworkModal from '../components/ArtworkModal';
import ArtworkFrame from '../components/ArtworkFrame';

export default function Works({ setCurrentPage }) {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  return (
    <div className="works-page site-container" style={{ paddingTop: '7.5rem', paddingBottom: '8rem' }}>
      {/* Portfolio Header — Ultra Minimal (Guillermo Lorca Style) */}
      <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <h1 className="heading-serif" style={{ fontSize: '2.5rem' }}>Portfolio</h1>
        <span className="meta-label">Pau Canelles &bull; Collection</span>
      </div>

      {/* Immediate Image-First Gallery Grid */}
      <div className="portfolio-gallery-grid">
        {ARTIST_DATA.artworks.map((work, idx) => {
          let spanClass = 'span-6';
          if (idx % 5 === 0) spanClass = 'span-8';
          if (idx % 5 === 1) spanClass = 'span-4';
          if (idx % 5 === 2) spanClass = 'span-4';
          if (idx % 5 === 3) spanClass = 'span-4';
          if (idx % 5 === 4) spanClass = 'span-4';

          return (
            <div
              key={work.id}
              className={`portfolio-item ${spanClass}`}
              onClick={() => setSelectedArtwork(work)}
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

      {/* Gallery Lightbox Modal */}
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
