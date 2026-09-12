import React, { useState } from 'react';
import { ARTIST_DATA } from '../data/artistData';
import ArtworkModal from '../components/ArtworkModal';

export default function Murals({ lang = 'es' }) {
  const isEs = lang === 'es';
  const images = ARTIST_DATA.aboutImages;

  const [selectedMural, setSelectedMural] = useState(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  // Authentic mural project data structure ready for client photos & details
  const muralProjects = [
    {
      id: 'mural-01',
      title: isEs ? 'Mural Colectivo & Espacio Público' : 'Collective Mural & Public Space',
      location: 'Onda, Castellón',
      dimensions: 'Large-scale urban intervention',
      technique: isEs ? 'Acrílico, spray y pigmentos sobre muro' : 'Acrylic, spray paint, and pigments on wall',
      year: '2025 / 2026',
      description: isEs 
        ? 'Intervención mural a gran escala que conecta el lenguaje plástico con la arquitectura urbana y la comunidad.'
        : 'Large-scale mural intervention connecting visual language with urban architecture and the community.',
      mainImage: images.photo4,
      detailImages: [images.photo1, images.photo2]
    }
  ];

  const handleImageClick = (mural, index = 0) => {
    setSelectedMural(mural);
    setActiveImgIndex(index);
  };

  return (
    <div className="murals-page site-container" style={{ paddingTop: '1.5rem', paddingBottom: '6rem' }}>
      {/* Murals Showcase List */}
      <div className="murals-showcase-list">
        {muralProjects.map((mural) => (
          <article key={mural.id} className="mural-project-block" style={{ marginBottom: '5rem' }}>
            {/* Main Full Mural Photograph (Clickable) */}
            <div 
              className="mural-main-hero-wrapper img-container-hover" 
              onClick={() => handleImageClick(mural, 0)}
              style={{ marginBottom: '1.75rem', cursor: 'pointer' }}
              role="button"
              tabIndex={0}
              aria-label={`${mural.title} (Main image)`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleImageClick(mural, 0);
                }
              }}
            >
              <img 
                src={mural.mainImage} 
                alt={`${mural.title} — Pau Canelles`} 
                className="mural-hero-img"
              />
            </div>

            {/* Detail / Context Photos Grid (Clickable) */}
            {mural.detailImages && mural.detailImages.length > 0 && (
              <div className="mural-details-grid" style={{ marginBottom: '1.75rem' }}>
                {mural.detailImages.map((imgSrc, idx) => (
                  <div 
                    key={idx} 
                    className="mural-detail-item img-container-hover"
                    onClick={() => handleImageClick(mural, idx + 1)}
                    style={{ cursor: 'pointer' }}
                    role="button"
                    tabIndex={0}
                    aria-label={`${mural.title} (Detail ${idx + 1})`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleImageClick(mural, idx + 1);
                      }
                    }}
                  >
                    <img 
                      src={imgSrc} 
                      alt={`${mural.title} detail ${idx + 1}`} 
                      className="mural-detail-img" 
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Discreet Metadata Footer */}
            <div className="mural-discreet-meta">
              <div className="mural-meta-header">
                <h2 className="mural-title">{mural.title}</h2>
                <span className="mural-year">{mural.year}</span>
              </div>

              <div className="mural-specs-row">
                {mural.location && <span><strong>{isEs ? 'Ubicación:' : 'Location:'}</strong> {mural.location}</span>}
                {mural.dimensions && <span> &bull; <strong>{isEs ? 'Dimensiones:' : 'Dimensions:'}</strong> {mural.dimensions}</span>}
                {mural.technique && <span> &bull; <strong>{isEs ? 'Técnica:' : 'Technique:'}</strong> {mural.technique}</span>}
              </div>

              {mural.description && (
                <p className="mural-description">{mural.description}</p>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Expanded Lightbox Viewer */}
      {selectedMural && (
        <ArtworkModal
          item={selectedMural}
          itemList={muralProjects}
          activeImgIndex={activeImgIndex}
          onClose={() => setSelectedMural(null)}
          onSelectArtwork={(item) => setSelectedMural(item)}
          lang={lang}
        />
      )}
    </div>
  );
}
