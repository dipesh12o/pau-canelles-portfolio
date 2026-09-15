import React, { useState } from 'react';
import ArtworkModal from '../components/ArtworkModal';

export default function Murals({ lang = 'es' }) {
  const isEs = lang === 'es';

  const [selectedMural, setSelectedMural] = useState(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  // Mural projects with multiple photographs belonging to each mural record
  const muralProjects = [
    {
      id: 'mural-ludiente',
      title: 'Mural de Ludiente',
      context: 'Realizado para el MALFEST 2024',
      size: '3 x 5,70 m',
      dimensions: '3 x 5,70 m',
      year: '2024',
      technique: 'Pintura de fachada sobre pared',
      images: [
        '/murals/ludiente-detail.jpg',   // Photo 1 — mural/detail
        '/murals/ludiente-complete.jpg', // Photo 2 — complete mural
        '/murals/ludiente-photo.jpg',    // Photo 3 — mural/context view
        '/murals/ludiente-process.jpg'   // Photo 4 — Pau painting/process
      ]
    },
    {
      id: 'mural-som-joves',
      title: 'Mural “Som joves, som Onda”',
      context: "Casal Jove D'Onda",
      description: isEs 
        ? 'Mural colaborativo realizado con las niñas y niños del Casal Jove, un lugar donde todas las personas jóvenes son bienvenidas.'
        : 'This was a collaborative mural with the kids of Casal Jove, a place where all young people are welcome.',
      size: '16 x 6,20 m',
      dimensions: '16 x 6,20 m',
      year: '2025',
      technique: 'Pintura de fachada sobre pared',
      images: [
        '/murals/som-joves-complete.jpg', // Photo 1 — complete wall view
        '/murals/som-joves-detail.jpg',   // Photo 2 — detail view & signature
        '/murals/som-joves-photo.jpg',    // Photo 3 — Pau in front of mural
        '/murals/som-joves-process.jpg'   // Photo 4 — process view on crane lift
      ]
    },
    {
      id: 'mural-bandera-onda',
      title: "Mural Bandera d'Onda reimaginada",
      context: 'Ayuntamiento de Onda',
      size: '1 x 30 m',
      dimensions: '1 x 30 m',
      year: '2025',
      technique: 'Pintura de fachada sobre pared',
      images: [
        '/murals/bandera-onda-complete.jpg',  // Photo 1 — complete panoramic view
        '/murals/bandera-onda-detail.jpg',    // Photo 2 — I LOVE ONDA & utility box detail
        '/murals/bandera-onda-process.jpg',   // Photo 3 — process photo of Pau painting
        '/murals/bandera-onda-signature.jpg' // Photo 4 — signature & tulip detail
      ]
    },
    {
      id: 'mural-entrepistes',
      title: 'Mural de Entrepistes',
      context: 'Restaurante Entrepistes',
      size: '2,5 x 5,50 m',
      dimensions: '2,5 x 5,50 m',
      year: '2026',
      technique: 'Pintura de fachada sobre pared',
      images: [
        '/murals/entrepistes-complete.jpg', // Photo 1 — complete mural view
        '/murals/entrepistes-detail.jpg',   // Photo 2 — detail view with castle & signature
        '/murals/entrepistes-photo.jpg',    // Photo 3 — Pau photo in front of mural
        '/murals/entrepistes-process.jpg'   // Photo 4 — process view with brushes & paints
      ]
    },
    {
      id: 'mural-mico-gaming',
      title: 'Mural de MICO Gaming Zone',
      context: 'Ayuntamiento de Onda',
      size: '11 x 1,40 m',
      dimensions: '11 x 1,40 m',
      year: '2026',
      technique: 'Pintura de fachada sobre pared',
      images: [
        '/murals/mico-gaming-complete.jpg', // Photo 1 — complete wide wall view
        '/murals/mico-gaming-detail.jpg',   // Photo 2 — robot character head detail
        '/murals/mico-gaming-photo.jpg',    // Photo 3 — Pau standing in front of mural
        '/murals/mico-gaming-process.jpg'   // Photo 4 — robot on rope detail with brushes jar
      ]
    },
    {
      id: 'mural-mestre-caballero',
      title: 'Murales 40 aniversari del CEIP Mestre Caballero',
      context: 'Colegio Mestre Caballero',
      size: '1,5 x 2 m / 3 x 4 m',
      dimensions: '1,5 x 2 m / 3 x 4 m',
      year: '2026',
      technique: 'Pintura de fachada sobre pared',
      images: [
        '/murals/mestre-caballero-process.png', // Photo 1 — painting process with rainbow detail
        '/murals/mestre-caballero-photo.png',   // Photo 2 — Pau & student in front of mural                                      
        '/murals/mestre-caballero-detail.png'   // Photo 3 — detail view of student signing wall
      ]
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
            {/* Title & Metadata Block — Appears ONCE per mural project */}
            <div className="mural-discreet-meta" style={{ marginBottom: '1.75rem' }}>
              <div className="mural-meta-header">
                <h2 className="mural-title">{mural.title}</h2>
                <span className="mural-year">{mural.year}</span>
              </div>

              <div className="mural-specs-row">
                {mural.context && (
                  <span><strong>{isEs ? 'Realizado para:' : 'Created for:'}</strong> {mural.context}</span>
                )}
                {(mural.size || mural.dimensions) && (
                  <span> &bull; <strong>{isEs ? 'Dimensiones:' : 'Dimensions:'}</strong> {mural.size || mural.dimensions}</span>
                )}
                {mural.technique && (
                  <span> &bull; <strong>{isEs ? 'Técnica:' : 'Technique:'}</strong> {mural.technique}</span>
                )}
              </div>

              {mural.description && (
                <p className="mural-description" style={{ marginTop: '0.75rem' }}>
                  {mural.description}
                </p>
              )}
            </div>

            {/* Hero Photograph (Clickable) */}
            <div 
              className="mural-main-hero-wrapper img-container-hover" 
              onClick={() => handleImageClick(mural, 0)}
              style={{ marginBottom: '1.75rem', cursor: 'pointer' }}
              role="button"
              tabIndex={0}
              aria-label={`${mural.title} (Foto 1)`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleImageClick(mural, 0);
                }
              }}
            >
              <img 
                src={mural.images[0]} 
                alt={`${mural.title} — Detail view`} 
                className="mural-hero-img"
              />
            </div>

            {/* Supporting Photos Grid (Clickable) — Photos 2, 3, 4 */}
            {mural.images && mural.images.length > 1 && (
              <div className={`mural-details-grid ${mural.images.slice(1).length === 2 ? 'grid-2-cols' : ''}`} style={{ marginBottom: '1.75rem' }}>
                {mural.images.slice(1).map((imgSrc, idx) => (
                  <div 
                    key={idx} 
                    className="mural-detail-item img-container-hover"
                    onClick={() => handleImageClick(mural, idx + 1)}
                    style={{ cursor: 'pointer' }}
                    role="button"
                    tabIndex={0}
                    aria-label={`${mural.title} (Foto ${idx + 2})`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleImageClick(mural, idx + 1);
                      }
                    }}
                  >
                    <img 
                      src={imgSrc} 
                      alt={`${mural.title} — Photo ${idx + 2}`} 
                      className="mural-detail-img" 
                    />
                  </div>
                ))}
              </div>
            )}
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
