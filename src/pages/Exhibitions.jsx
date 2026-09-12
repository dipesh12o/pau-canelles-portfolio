import React, { useState } from 'react';
import { ARTIST_DATA } from '../data/artistData';
import ArtworkModal from '../components/ArtworkModal';

export default function Exhibitions({ lang = 'es' }) {
  const isEs = lang === 'es';
  const images = ARTIST_DATA.aboutImages;

  const [selectedExhibition, setSelectedExhibition] = useState(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  // Authentic exhibition history explicitly provided by client (Most recent first)
  const exhibitionEntries = [
    {
      id: 'exh-2026-onda',
      year: 2026,
      title: isEs ? 'Exposición 2026' : 'Exhibition 2026',
      venue: isEs ? 'Espacio de Exposición' : 'Exhibition Venue',
      city: 'Onda, Castellón',
      images: [images.photo3, images.photo1]
    },
    {
      id: 'exh-2025-tales',
      year: 2025,
      title: isEs ? 'Exposición Tales' : 'Tales Exhibition',
      venue: isEs ? 'Espacio Cultural' : 'Cultural Space',
      city: 'Tales, Castellón',
      images: [images.photo2]
    },
    {
      id: 'exh-2025-casacultura',
      year: 2025,
      title: isEs ? 'Exposición Casa de la Cultura' : 'Casa de la Cultura Exhibition',
      venue: 'Casa de la Cultura',
      city: 'Onda, Castellón',
      images: [images.photo1, images.photo4]
    },
    {
      id: 'exh-2024-alcobendas',
      year: 2024,
      title: 'Best Art',
      venue: 'Best Art Space',
      city: 'Alcobendas, Madrid',
      images: [images.photo2, images.photo3]
    }
  ];

  // Ensure chronological sorting (most recent year first)
  const sortedExhibitions = [...exhibitionEntries].sort((a, b) => b.year - a.year);

  const handleImageClick = (exhibition, imgIndex = 0) => {
    setSelectedExhibition(exhibition);
    setActiveImgIndex(imgIndex);
  };

  return (
    <div className="exhibitions-page site-container" style={{ paddingTop: '4.5rem', paddingBottom: '6rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '3.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div>
          <span className="meta-label">{isEs ? 'Trayectoria & Registro Visual' : 'Trajectory & Visual Archive'}</span>
          <h1 className="heading-serif" style={{ fontSize: '2.5rem', marginTop: '0.4rem' }}>
            {isEs ? 'Exposiciones' : 'Exhibitions'}
          </h1>
        </div>
        <span className="meta-label">Pau Canelles &bull; {isEs ? 'Histórico' : 'History'}</span>
      </div>

      {/* Chronological Exhibition Archive */}
      <div className="exhibitions-timeline-archive">
        {sortedExhibitions.map((item) => (
          <article key={item.id} className="exhibition-archive-item" style={{ marginBottom: '4.5rem' }}>
            {/* Year Tag */}
            <div className="exhibition-year-badge">
              <span className="exhibition-year-text">{item.year}</span>
            </div>

            {/* Image Gallery (Clickable) */}
            {item.images && item.images.length > 0 && (
              <div className="exhibition-image-strip" style={{ marginBottom: '1.5rem' }}>
                <div className="gallery-strip-grid" style={{ gridTemplateColumns: `repeat(${Math.min(item.images.length, 3)}, 1fr)` }}>
                  {item.images.map((imgSrc, idx) => (
                    <div 
                      key={idx} 
                      className="gallery-strip-item img-container-hover"
                      onClick={() => handleImageClick(item, idx)}
                      style={{ cursor: 'pointer' }}
                      role="button"
                      tabIndex={0}
                      aria-label={`${item.title} (${item.year}) image ${idx + 1}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleImageClick(item, idx);
                        }
                      }}
                    >
                      <img 
                        src={imgSrc} 
                        alt={`${item.title} ${item.year} photo ${idx + 1}`} 
                        className="gallery-strip-img" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Discreet Exhibition Metadata */}
            <div className="exhibition-discreet-meta">
              <h2 className="exhibition-title">{item.title}</h2>
              <div className="exhibition-specs">
                <span className="exhibition-venue">{item.venue}</span>
                {item.city && <span className="meta-sep">&bull;</span>}
                {item.city && <span className="exhibition-city">{item.city}</span>}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Expanded Lightbox Viewer */}
      {selectedExhibition && (
        <ArtworkModal
          item={selectedExhibition}
          itemList={sortedExhibitions}
          activeImgIndex={activeImgIndex}
          onClose={() => setSelectedExhibition(null)}
          onSelectArtwork={(item) => setSelectedExhibition(item)}
          lang={lang}
        />
      )}
    </div>
  );
}
