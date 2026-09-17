import React, { useState } from 'react';
import ArtworkModal from '../components/ArtworkModal';

export default function Murals({ lang = 'es' }) {
  const isEs = lang === 'es';

  const [selectedMural, setSelectedMural] = useState(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({ name: '', email: '', message: '' });

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    let msg = `*Consulta sobre proyecto mural*\n`;
    msg += `*Nombre:* ${enquiryForm.name}\n`;
    msg += `*Email:* ${enquiryForm.email}\n`;
    msg += `*Detalles del proyecto:*\n${enquiryForm.message}`;

    const waUrl = `https://wa.me/34619755639?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
    setEnquirySubmitted(true);
  };

  // Mural projects with multiple photographs belonging to each mural record
  const muralProjects = [
    {
      id: 'mural-joseph-pilates',
      title: 'Mural Joseph Pilates',
      context: 'realizado para el centro Stories Pilates en Castellón, 2026.',
      location: 'Castellón',
      city: 'Castellón',
      size: '2 x 4 m',
      dimensions: '2 x 4 m',
      year: '2026',
      technique: 'Acrílico, óleo y spray sobre tablilla entelada.',
      videoUrl: 'https://drive.google.com/file/d/1WHVCVnnTTeErwuBUtf32SSi_ALEj6cqg/view',
      images: [
        '/murals/joseph-pilates-complete.jpg',
        '/murals/joseph-pilates-artwork.jpg',
        '/murals/joseph-pilates-detail.jpg',
        '/murals/joseph-pilates-event.jpg',
        '/murals/joseph-pilates-face.jpg',
        '/murals/joseph-pilates-process.jpg'
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
        '/murals/mestre-caballero-process.png',
        '/murals/mestre-caballero-photo.png',
        '/murals/mestre-caballero-detail.png'
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
        '/murals/entrepistes-complete.jpg',
        '/murals/entrepistes-detail.jpg',
        '/murals/entrepistes-photo.jpg',
        '/murals/entrepistes-process.jpg'
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
        '/murals/mico-gaming-complete.jpg',
        '/murals/mico-gaming-detail.jpg',
        '/murals/mico-gaming-process.jpg',
        '/murals/mico-gaming-photo.jpg'
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
        '/murals/som-joves-complete.jpg',
        '/murals/som-joves-detail.jpg',
        '/murals/som-joves-photo.jpg',
        '/murals/som-joves-process.jpg'
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
        '/murals/bandera-onda-complete.jpg',
        '/murals/bandera-onda-detail.jpg',
        '/murals/bandera-onda-process.jpg',
        '/murals/bandera-onda-signature.jpg'
      ]
    },
    {
      id: 'mural-ludiente',
      title: 'Mural de Ludiente',
      context: 'Realizado para el MALFEST 2024',
      size: '3 x 5,70 m',
      dimensions: '3 x 5,70 m',
      year: '2024',
      technique: 'Pintura de fachada sobre pared',
      images: [
        '/murals/ludiente-complete.jpg',
        '/murals/ludiente-photo.jpg',
        '/murals/ludiente-process.jpg',
        '/murals/ludiente-detail.jpg'
      ]
    }
  ];

  const handleImageClick = (mural, index = 0) => {
    setSelectedMural(mural);
    setActiveImgIndex(index);
  };

  return (
    <div className="murals-page site-container" style={{ paddingTop: '1rem', paddingBottom: '2.5rem' }}>
      {/* Discreet Expandable Mural Commission / Enquiry Banner at the Top */}
      <div 
        className="mural-enquiry-banner"
        style={{
          marginBottom: '1.5rem',
          padding: '1.25rem 1.5rem',
          backgroundColor: '#FAFAFA',
          border: '1px solid #EAEAEA',
          borderRadius: '2px',
          maxWidth: '1200px',
          margin: '0 auto 1.5rem auto'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.725rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888888', fontWeight: 600, display: 'block', marginBottom: '0.25rem' }}>
              {isEs ? 'ENCARGOS & INTERVENCIONES MURALES' : 'COMMISSIONS & MURAL PROJECTS'}
            </span>
            <div style={{ fontFamily: 'Inter, -apple-system, sans-serif', fontSize: '0.95rem', color: '#333333' }}>
              {isEs ? '¿Tienes un proyecto mural en mente o deseas solicitar información?' : 'Interested in commissioning a mural or inquiring about project details?'}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsEnquiryOpen(!isEnquiryOpen)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1.25rem',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              border: '1px solid #111111',
              color: isEnquiryOpen ? '#FFFFFF' : '#111111',
              backgroundColor: isEnquiryOpen ? '#111111' : 'transparent',
              cursor: 'pointer',
              fontWeight: 600,
              borderRadius: '1px',
              transition: 'all 0.25s ease'
            }}
          >
            {isEs ? 'SOLICITAR INFORMACIÓN / ENCARGO MURAL' : 'ENQUIRE ABOUT A MURAL'} {isEnquiryOpen ? '↑' : '↓'}
          </button>
        </div>

        {/* Smooth Expandable Form */}
        {isEnquiryOpen && (
          <div 
            className="mural-enquiry-expanded-form"
            style={{ 
              marginTop: '1.5rem', 
              paddingTop: '1.5rem', 
              borderTop: '1px solid #EAEAEA'
            }}
          >
            {enquirySubmitted ? (
              <div style={{ padding: '0.5rem 0' }}>
                <p style={{ fontFamily: 'Inter, -apple-system, sans-serif', fontSize: '0.95rem', color: '#1A1916', margin: 0, fontStyle: 'italic' }}>
                  {isEs 
                    ? 'Gracias por tu consulta. Pau Canelles te responderá a la brevedad.'
                    : 'Thank you for your inquiry. Pau Canelles will respond shortly.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '720px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.725rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#777777', marginBottom: '0.4rem', fontWeight: 600 }}>
                      {isEs ? 'NOMBRE' : 'NAME'}
                    </label>
                    <input 
                      type="text" 
                      required 
                      value={enquiryForm.name}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.6rem 0.75rem',
                        fontSize: '0.9rem',
                        border: '1px solid #CCCCCC',
                        borderRadius: '1px',
                        backgroundColor: '#FFFFFF',
                        color: '#111111',
                        boxSizing: 'border-box'
                      }}
                      placeholder={isEs ? 'Tu nombre' : 'Your name'}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.725rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#777777', marginBottom: '0.4rem', fontWeight: 600 }}>
                      EMAIL
                    </label>
                    <input 
                      type="email" 
                      required 
                      value={enquiryForm.email}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.6rem 0.75rem',
                        fontSize: '0.9rem',
                        border: '1px solid #CCCCCC',
                        borderRadius: '1px',
                        backgroundColor: '#FFFFFF',
                        color: '#111111',
                        boxSizing: 'border-box'
                      }}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.725rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#777777', marginBottom: '0.4rem', fontWeight: 600 }}>
                    {isEs ? 'DETALLES DEL PROYECTO MURAL' : 'MURAL PROJECT DETAILS'}
                  </label>
                  <textarea 
                    rows="3" 
                    required 
                    value={enquiryForm.message}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.75rem',
                      fontSize: '0.9rem',
                      border: '1px solid #CCCCCC',
                      borderRadius: '1px',
                      backgroundColor: '#FFFFFF',
                      color: '#111111',
                      boxSizing: 'border-box',
                      resize: 'vertical'
                    }}
                    placeholder={isEs ? 'Dimensiones aproximadas, ubicación, concepto o cualquier detalle...' : 'Approximate dimensions, location, concept, or project inquiry...'}
                  />
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <button 
                    type="submit" 
                    style={{
                      padding: '0.65rem 1.5rem',
                      fontSize: '0.75rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      border: '1px solid #111111',
                      color: '#FFFFFF',
                      backgroundColor: '#111111',
                      cursor: 'pointer',
                      fontWeight: 600,
                      borderRadius: '1px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {isEs ? 'ENVIAR CONSULTA →' : 'SEND ENQUIRY →'}
                  </button>

                  <button 
                    type="button" 
                    onClick={() => setIsEnquiryOpen(false)}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '0.75rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#777777',
                      cursor: 'pointer',
                      padding: '0.5rem'
                    }}
                  >
                    {isEs ? 'CANCELAR' : 'CANCEL'}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
      <div className="murals-showcase-list">
        {muralProjects.map((mural) => (
          <article key={mural.id} className="mural-project-block" style={{ marginBottom: '2.5rem' }}>
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

              {mural.videoUrl && (
                <div style={{ marginTop: '1rem' }}>
                  <a 
                    href={mural.videoUrl} 
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
                      borderRadius: '1px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    VIEW VIDEO &rarr;
                  </a>
                </div>
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
