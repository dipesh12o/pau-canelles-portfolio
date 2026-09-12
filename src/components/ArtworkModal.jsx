import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ARTIST_DATA } from '../data/artistData';

export default function ArtworkModal({ artwork, item, itemList, activeImgIndex = 0, onClose, onSelectArtwork, lang = 'es' }) {
  const currentItem = artwork || item;
  const items = itemList || ARTIST_DATA.artworks;
  const currentIndex = items.findIndex(a => a.id === currentItem?.id);

  // Extract all available images for multi-image projects (murals, exhibitions)
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
    } else if (currentIndex > -1) {
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      if (onSelectArtwork) onSelectArtwork(items[prevIndex]);
    }
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    if (imageList.length > 1) {
      setCurrentImgIndex((prev) => (prev + 1) % imageList.length);
    } else if (currentIndex > -1) {
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

  return (
    <div 
      className="artwork-lightbox-overlay" 
      onClick={onClose}
      role="dialog" 
      aria-modal="true" 
      aria-label={currentItem.title}
    >
      <div className="artwork-lightbox-container" onClick={(e) => e.stopPropagation()}>
        {/* Top Minimal Control Bar */}
        <div className="lightbox-top-bar">
          <div className="lightbox-counter">
            {imageList.length > 1 
              ? `${currentImgIndex + 1} / ${imageList.length}`
              : (currentIndex >= 0 ? `${currentIndex + 1} / ${items.length}` : '')}
          </div>

          <div className="lightbox-nav-center">
            <button 
              className="lightbox-nav-btn" 
              onClick={handlePrev}
              aria-label={lang === 'es' ? 'Anterior' : 'Previous'}
              type="button"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              className="lightbox-nav-btn" 
              onClick={handleNext}
              aria-label={lang === 'es' ? 'Siguiente' : 'Next'}
              type="button"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <button 
            className="lightbox-close-btn" 
            onClick={onClose}
            aria-label={lang === 'es' ? 'Cerrar vista' : 'Close view'}
            type="button"
          >
            <X size={22} />
          </button>
        </div>

        {/* Center Artwork / Project Image View Area */}
        <div 
          className="lightbox-image-stage"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Side Nav Arrows (Desktop) */}
          <button 
            className="lightbox-side-nav prev" 
            onClick={handlePrev}
            aria-label={lang === 'es' ? 'Anterior' : 'Previous'}
            type="button"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="lightbox-image-wrapper">
            {currentDisplayImage && currentDisplayImage !== 'null' ? (
              <img 
                src={currentDisplayImage} 
                alt={`${currentItem.title} — Pau Canelles`} 
                className="lightbox-img" 
              />
            ) : (
              <div className="lightbox-fallback-frame">
                <span className="lightbox-fallback-cat">{currentItem.category || currentItem.venue || 'Artwork'}</span>
                <h3 className="lightbox-fallback-title">{currentItem.title}</h3>
                <p className="lightbox-fallback-medium">{currentItem.medium || currentItem.technique}</p>
                <span className="lightbox-fallback-dim">
                  {[currentItem.dimensions, currentItem.year].filter(Boolean).join(' • ')}
                </span>
              </div>
            )}
          </div>

          <button 
            className="lightbox-side-nav next" 
            onClick={handleNext}
            aria-label={lang === 'es' ? 'Siguiente' : 'Next'}
            type="button"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Discreet Metadata Footer */}
        <div className="lightbox-discreet-meta">
          <h2 className="lightbox-artwork-title">{currentItem.title}</h2>

          {(currentItem.medium || currentItem.technique) && (
            <p className="lightbox-artwork-medium">{currentItem.medium || currentItem.technique}</p>
          )}

          <div className="lightbox-artwork-specs">
            {currentItem.location && <span>{currentItem.location}</span>}
            {currentItem.venue && <span>{currentItem.venue}{currentItem.city ? `, ${currentItem.city}` : ''}</span>}
            {(currentItem.location || currentItem.venue) && currentItem.dimensions && <span className="meta-sep">&bull;</span>}
            {currentItem.dimensions && <span>{currentItem.dimensions}</span>}
            {(currentItem.location || currentItem.venue || currentItem.dimensions) && currentItem.year && <span className="meta-sep">&bull;</span>}
            {currentItem.year && <span>{currentItem.year}</span>}
          </div>

          {currentItem.description && (
            <p style={{ fontFamily: 'var(--font-serif-body)', fontSize: '0.88rem', color: '#B5B0A4', marginTop: '0.4rem', lineHeight: '1.4' }}>
              {currentItem.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
