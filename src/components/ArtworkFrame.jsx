import React from 'react';

/**
 * Gallery-grade architectural artwork frame component.
 * Renders high-res image when available, or an elegant gallery canvas frame
 * displaying authentic artwork specs when direct client image files are pending upload.
 */
export default function ArtworkFrame({ artwork, className = '', onClick }) {
  if (artwork.image && artwork.image !== 'null') {
    return (
      <div 
        className={`artwork-image-box ${className}`} 
        onClick={onClick}
        style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'transparent' }}
      >
        <img 
          src={artwork.image} 
          alt={artwork.title} 
          loading="eager"
          style={{ 
            maxWidth: '100%', 
            maxHeight: '100%', 
            width: 'auto',
            height: 'auto',
            objectFit: 'contain', 
            objectPosition: 'center center',
            display: 'block',
            margin: '0 auto',
            border: 'none',
            borderRadius: '0px'
          }}
        />
      </div>
    );
  }

  // Architectural Canvas Frame when image is pending direct upload
  return (
    <div 
      className={`artwork-image-box ${artwork.aspectRatio} gallery-canvas-frame ${className}`} 
      onClick={onClick}
      style={{
        backgroundColor: '#F2EFE9',
        border: '1px solid #E5E0D8',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '2rem',
        position: 'relative',
        cursor: 'pointer',
        width: '100%',
        height: '100%',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8C8275' }}>
          {artwork.category}
        </span>
        <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-sans)', color: '#8C8275' }}>
          {artwork.year}
        </span>
      </div>

      <div style={{ margin: 'auto 0', padding: '1rem 0' }}>
        <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.4rem', color: '#0D0D0D', marginBottom: '0.5rem', lineHeight: '1.25' }}>
          {artwork.title}
        </h3>
        <p style={{ fontSize: '0.82rem', color: '#666666', fontStyle: 'italic', marginBottom: 0, lineHeight: '1.4' }}>
          {artwork.medium}
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #E5E0D8', paddingTop: '0.75rem' }}>
        <span style={{ fontSize: '0.72rem', color: '#8C8275', letterSpacing: '0.05em' }}>
          {artwork.dimensions}
        </span>
        <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 500, color: '#0D0D0D' }}>
          View Details &rarr;
        </span>
      </div>
    </div>
  );
}
