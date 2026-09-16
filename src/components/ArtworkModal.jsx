import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ARTIST_DATA } from '../data/artistData';

// Helper to filter out missing or "N/A" subtitles cleanly
const hasSubtitle = (sub) => {
  if (!sub) return false;
  const trimmed = sub.trim();
  return trimmed !== '' && trimmed.toUpperCase() !== 'N/A' && trimmed.toUpperCase() !== '[BLANK]';
};

export default function ArtworkModal({ artwork, item, itemList, activeImgIndex = 0, onClose, onSelectArtwork, lang = 'es' }) {
  const currentItem = artwork || item;
  const items = itemList || ARTIST_DATA.artworks;
  const currentIndex = items.findIndex(a => a.id === currentItem?.id);
  const isEs = lang === 'es';
  const isExhibition = Boolean(currentItem?.isExhibition || currentItem?.id?.startsWith('exh-') || currentItem?.venue);

  // Extract all available images (main image first, followed by detail photos)
  const imageList = currentItem?.images || (currentItem?.mainImage ? [currentItem.mainImage, ...(currentItem.detailImages || [])] : (currentItem?.image ? [currentItem.image] : []));
  
  const [currentImgIndex, setCurrentImgIndex] = useState(activeImgIndex);
  const touchStartX = useRef(null);

  useEffect(() => {
    setCurrentImgIndex(activeImgIndex || 0);
  }, [currentItem, activeImgIndex]);

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    if (imageList.length > 1) {
      setCurrentImgIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
    } else if (currentIndex > -1 && items.length > 1) {
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      if (onSelectArtwork) onSelectArtwork(items[prevIndex]);
    }
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    if (imageList.length > 1) {
      setCurrentImgIndex((prev) => (prev + 1) % imageList.length);
    } else if (currentIndex > -1 && items.length > 1) {
      const nextIndex = (currentIndex + 1) % items.length;
      if (onSelectArtwork) onSelectArtwork(items[nextIndex]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [currentIndex, currentImgIndex, imageList.length, onClose, onSelectArtwork]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  if (!currentItem) return null;

  const currentDisplayImage = imageList[currentImgIndex] || imageList[0];

  const whatsappMessage = isEs 
    ? `Hola Pau, me gustaría consultar información sobre la obra "${currentItem.title}".`
    : `Hello Pau, I would like to inquire about the artwork "${currentItem.title}".`;
  
  const whatsappUrl = `https://wa.me/34619755639?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div 
      className="artwork-lightbox-overlay" 
      onClick={onClose}
      role="dialog" 
      aria-modal="true" 
      aria-label={currentItem.title}
    >
      <div className="artwork-lightbox-container" onClick={(e) => e.stopPropagation()}>
        {/* Top Control Bar */}
        <div className="lightbox-top-bar">
          <div className="lightbox-counter">
            {imageList.length > 1 
              ? `${currentImgIndex + 1} / ${imageList.length}` 
              : (currentIndex >= 0 ? `${currentIndex + 1} / ${items.length}` : '')}
          </div>

          <div className="lightbox-nav-center">
            {(imageList.length > 1 || items.length > 1) && (
              <>
                <button 
                  className="lightbox-nav-btn" 
                  onClick={handlePrev}
                  aria-label={isEs ? 'Anterior' : 'Previous'}
                  type="button"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  className="lightbox-nav-btn" 
                  onClick={handleNext}
                  aria-label={isEs ? 'Siguiente' : 'Next'}
                  type="button"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          <button 
            className="lightbox-close-btn" 
            onClick={onClose}
            aria-label={isEs ? 'Cerrar vista' : 'Close view'}
            type="button"
          >
            <X size={22} />
          </button>
        </div>

        {/* 2-Column Split Stage: Left Large Image + Thumbnails, Right Metadata + CTA */}
        <div className="lightbox-detail-split-grid">
          {/* Side Nav Prev Arrow (Desktop) */}
          {(imageList.length > 1 || items.length > 1) && (
            <button 
              className="lightbox-side-nav prev" 
              onClick={handlePrev}
              aria-label={isEs ? 'Anterior' : 'Previous'}
              type="button"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* LEFT COLUMN: Main Image Stage & Thumbnail Bar */}
          <div className="lightbox-left-stage" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div className="lightbox-main-img-box">
              {currentDisplayImage && currentDisplayImage !== 'null' ? (
                <img 
                  src={currentDisplayImage} 
                  alt={`${currentItem.title} — Pau Canelles`} 
                  className="lightbox-img-contain" 
                  decoding="async"
                />
              ) : (
                <div className="lightbox-fallback-frame">
                  <span className="lightbox-fallback-cat">{currentItem.category || (isEs ? 'Obra' : 'Artwork')}</span>
                  <h3 className="lightbox-fallback-title">{currentItem.title}</h3>
                  <p className="lightbox-fallback-medium">{currentItem.technique || currentItem.medium}</p>
                </div>
              )}
            </div>

            {/* Thumbnail Row: Only shown if multiple images exist */}
            {imageList.length > 1 && (
              <div className="lightbox-thumbnails-row">
                {imageList.map((imgSrc, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`lightbox-thumb-btn ${currentImgIndex === idx ? 'active' : ''}`}
                    onClick={() => setCurrentImgIndex(idx)}
                    aria-label={`Ver foto ${idx + 1}`}
                  >
                    <img 
                      src={imgSrc} 
                      alt={`${currentItem.title} detalle ${idx + 1}`} 
                      loading="lazy" 
                      decoding="async"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Artwork Metadata & Enquiry CTA */}
          <div className="lightbox-right-info">
            <div className="lightbox-info-content">
              <span className="lightbox-category-tag">
                {currentItem.category || (currentItem.venue ? (isEs ? 'Exposición' : 'Exhibition') : (currentItem.context ? (isEs ? 'Intervención Mural' : 'Mural Project') : (isEs ? 'Colección' : 'Collection')))}
              </span>
              
              <h2 className="lightbox-artwork-title">{currentItem.title}</h2>
              
              {hasSubtitle(currentItem.subtitle) && (
                <p className="lightbox-artwork-subtitle">
                  {currentItem.subtitle}
                </p>
              )}

              {(currentItem.technique || currentItem.medium) && (
                <p className="lightbox-artwork-medium">
                  {currentItem.technique || currentItem.medium}
                </p>
              )}

              {/* Stacked Specs Block */}
              <div className="lightbox-specs-block">
                {(currentItem.event || currentItem.venue) && (
                  <div className="lightbox-spec-item">
                    <span className="spec-label">{isEs ? 'Evento / Galería' : 'Event / Gallery'}:</span>
                    <span className="spec-value">{currentItem.event || currentItem.venue}</span>
                  </div>
                )}
                {currentItem.type && (
                  <div className="lightbox-spec-item">
                    <span className="spec-label">{isEs ? 'Tipo' : 'Type'}:</span>
                    <span className="spec-value">{currentItem.type}</span>
                  </div>
                )}
                {(currentItem.location || currentItem.city) && (
                  <div className="lightbox-spec-item">
                    <span className="spec-label">{isEs ? 'Ubicación' : 'Location'}:</span>
                    <span className="spec-value">{currentItem.location || currentItem.city}</span>
                  </div>
                )}
                {(currentItem.project || currentItem.workPresented) && (
                  <div className="lightbox-spec-item">
                    <span className="spec-label">{isEs ? 'Proyecto / Obra' : 'Project / Work'}:</span>
                    <span className="spec-value">{currentItem.project || currentItem.workPresented}</span>
                  </div>
                )}
                {currentItem.works && (
                  <div className="lightbox-spec-item">
                    <span className="spec-label">{isEs ? 'Nº de obras' : 'Number of works'}:</span>
                    <span className="spec-value">{typeof currentItem.works === 'number' ? `${currentItem.works} ${isEs ? 'obras' : 'works'}` : currentItem.works}</span>
                  </div>
                )}
                {(currentItem.dimensions || currentItem.size) && (
                  <div className="lightbox-spec-item">
                    <span className="spec-label">{isEs ? 'Medidas' : 'Dimensions'}:</span>
                    <span className="spec-value">{currentItem.dimensions || currentItem.size}</span>
                  </div>
                )}
                {currentItem.year && (
                  <div className="lightbox-spec-item">
                    <span className="spec-label">{isEs ? 'Año' : 'Year'}:</span>
                    <span className="spec-value">{currentItem.year}</span>
                  </div>
                )}
                {currentItem.finish && (
                  <div className="lightbox-spec-item">
                    <span className="spec-label">{isEs ? 'Acabado' : 'Finish'}:</span>
                    <span className="spec-value">{currentItem.finish}</span>
                  </div>
                )}
                {currentItem.edition && (
                  <div className="lightbox-spec-item">
                    <span className="spec-label">{isEs ? 'Edición' : 'Edition'}:</span>
                    <span className="spec-value">{currentItem.edition}</span>
                  </div>
                )}
              </div>

              {!isExhibition && (currentItem.description || currentItem.context) && (
                <div className="lightbox-description-block">
                  {(() => {
                    const rawDesc = typeof currentItem.description === 'object'
                      ? (currentItem.description[lang] || currentItem.description.es)
                      : (currentItem.description || currentItem.context);
                    if (!rawDesc) return null;
                    return rawDesc.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} style={{ marginBottom: '0.75rem' }}>{paragraph}</p>
                    ));
                  })()}
                </div>
              )}

              {/* Video Button */}
              {currentItem.videoUrl && (
                <div style={{ marginBottom: '1.25rem' }}>
                  <a 
                    href={currentItem.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.65rem 1.25rem',
                      fontSize: '0.75rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      border: '1px solid #111111',
                      color: '#111111',
                      backgroundColor: 'transparent',
                      textDecoration: 'none',
                      fontWeight: 600,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    WATCH VIDEO &rarr;
                  </a>
                </div>
              )}

              {/* Interview Button */}
              {currentItem.interviewUrl && (
                <div style={{ marginBottom: '1.25rem' }}>
                  <a 
                    href={currentItem.interviewUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.65rem 1.25rem',
                      fontSize: '0.75rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      border: '1px solid #111111',
                      color: '#111111',
                      backgroundColor: 'transparent',
                      textDecoration: 'none',
                      fontWeight: 600,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    WATCH INTERVIEW &rarr;
                  </a>
                </div>
              )}

              {/* Action / Enquiry Button */}
              <div className="lightbox-cta-wrapper">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="lightbox-enquiry-btn"
                >
                  {isEs ? 'CONSULTAR SOBRE ESTA OBRA' : 'ENQUIRE ABOUT THIS ARTWORK'}
                </a>
              </div>
            </div>
          </div>

          {/* Side Nav Next Arrow (Desktop) */}
          {(imageList.length > 1 || items.length > 1) && (
            <button 
              className="lightbox-side-nav next" 
              onClick={handleNext}
              aria-label={isEs ? 'Siguiente' : 'Next'}
              type="button"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
