import React, { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';

export default function ArtworkModal({ artwork, onClose, onNavigateContact }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!artwork) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content-container" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close artwork view"
        >
          <X size={24} />
        </button>

        {/* Artwork Image or Architectural Display */}
        <div className="modal-image-display">
          {artwork.image && artwork.image !== 'null' ? (
            <img 
              src={artwork.image} 
              alt={`${artwork.title} by Pau Canelles`} 
              loading="eager"
            />
          ) : (
            <div style={{
              width: '100%',
              height: '100%',
              minHeight: '380px',
              backgroundColor: '#F2EFE9',
              border: '1px solid #E5E0D8',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2.5rem',
              textAlign: 'center'
            }}>
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8C8275', marginBottom: '0.75rem' }}>
                {artwork.category} &bull; {artwork.year}
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '2.2rem', color: '#0D0D0D', marginBottom: '0.5rem' }}>
                {artwork.title}
              </h2>
              <p style={{ fontStyle: 'italic', color: '#666', fontSize: '0.95rem', maxWidth: '400px' }}>
                {artwork.medium}
              </p>
              <span style={{ fontSize: '0.75rem', color: '#8C8275', marginTop: '1rem', border: '1px solid #D0C9BE', padding: '0.25rem 0.75rem' }}>
                {artwork.dimensions}
              </span>
            </div>
          )}
        </div>

        {/* Artwork Details Column */}
        <div className="modal-details-side">
          <div>
            <span className="meta-label">{artwork.category}</span>
            <h2 id="modal-title" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{artwork.title}</h2>
            <p style={{ color: 'var(--color-sepia)', fontSize: '0.92rem' }}>Pau Canelles, {artwork.year}</p>
          </div>

          <div className="modal-specs-list">
            <div className="modal-spec-item">
              <span className="spec-key">Medium / Technique</span>
              <span className="spec-val">{artwork.medium}</span>
            </div>
            <div className="modal-spec-item">
              <span className="spec-key">Dimensions</span>
              <span className="spec-val">{artwork.dimensions}</span>
            </div>
            <div className="modal-spec-item">
              <span className="spec-key">Year</span>
              <span className="spec-val">{artwork.year}</span>
            </div>
          </div>

          <div>
            <span className="meta-label">Concept & Description</span>
            <p style={{ fontSize: '0.95rem', color: '#444444', lineHeight: '1.6' }}>
              {artwork.description}
            </p>
          </div>

          <div style={{ paddingTop: '1rem' }}>
            <button 
              className="btn-editorial" 
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => {
                onClose();
                if (onNavigateContact) onNavigateContact('contact');
              }}
            >
              Inquire About This Work <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
