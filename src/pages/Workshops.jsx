import React from 'react';
import { ARTIST_DATA } from '../data/artistData';
import { Download } from 'lucide-react';

export default function Workshops({ lang = 'es', setCurrentPage }) {
  const isEs = lang === 'es';
  const images = ARTIST_DATA.aboutImages;

  // Workshop photo gallery items
  const galleryPhotos = [
    { id: 'ws1', src: images.photo1, alt: isEs ? 'Taller creativo Pau Canelles' : 'Pau Canelles creative workshop' },
    { id: 'ws2', src: images.photo2, alt: isEs ? 'Materiales y técnicas pictóricas' : 'Materials and painting techniques' },
    { id: 'ws3', src: images.photo3, alt: isEs ? 'Procesos creativos' : 'Creative processes' },
    { id: 'ws4', src: images.photo4, alt: isEs ? 'Proyectos de taller' : 'Workshop projects' }
  ];

  return (
    <div className="workshops-page site-container" style={{ paddingTop: '4.5rem', paddingBottom: '6rem' }}>
      {/* 1. Page Header */}
      <div style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div>
          <span className="meta-label">{isEs ? 'Curso 2026 / 2027 • Onda' : '2026 / 2027 Season • Onda'}</span>
          <h1 className="heading-serif" style={{ fontSize: '2.5rem', marginTop: '0.4rem' }}>
            {isEs ? 'Talleres Creativos' : 'Creative Workshops'}
          </h1>
        </div>
        <span className="meta-label">Pau Canelles &bull; {isEs ? 'Educación Artística' : 'Art Education'}</span>
      </div>

      {/* 2. Photo Gallery (3-4 Horizontal Photos) */}
      <section className="workshops-gallery-section" style={{ marginBottom: '3.5rem' }}>
        <div className="gallery-strip-grid">
          {galleryPhotos.map((photo) => (
            <div key={photo.id} className="gallery-strip-item">
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="gallery-strip-img" 
              />
            </div>
          ))}
        </div>
      </section>

      {/* 3. Short Editorial Introduction */}
      <section className="workshops-intro-section" style={{ maxWidth: '820px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
        <h2 className="heading-serif" style={{ fontSize: '1.6rem', fontWeight: '400', lineHeight: '1.4', color: '#24231E' }}>
          {isEs ? 'Talleres creativos de arte y experimentación para niños y jóvenes en Onda.' : 'Creative art and experimentation workshops for children and youth in Onda.'}
        </h2>
      </section>

      {/* 4. Location & Practical Information Blocks */}
      <section className="workshops-info-grid" style={{ marginBottom: '4rem' }}>
        <div className="workshop-info-card">
          <div>
            <h4 className="info-card-title">{isEs ? 'Ubicación' : 'Location'}</h4>
            <p className="info-card-desc">C/Escultor Folià 25, Onda (Castellón)</p>
          </div>
        </div>

        <div className="workshop-info-card">
          <div>
            <h4 className="info-card-title">{isEs ? 'Edades & Materiales' : 'Ages & Materials'}</h4>
            <p className="info-card-desc">{isEs ? 'A partir de 6 años • Todo el material incluido' : 'Ages 6+ • All materials included'}</p>
          </div>
        </div>

        <div className="workshop-info-card">
          <div>
            <h4 className="info-card-title">{isEs ? 'Inscripción & Plazas' : 'Registration & Spots'}</h4>
            <p className="info-card-desc">{isEs ? 'Grupos reducidos • Reserva previa requerida' : 'Small groups • Advance reservation required'}</p>
          </div>
        </div>
      </section>

      {/* 5. Prices & Workshop Packages (Bonos Creativos) */}
      <section className="workshops-pricing-section" style={{ marginBottom: '4.5rem' }}>
        <div style={{ textTransform: 'center', marginBottom: '2.5rem', textAlign: 'center' }}>
          <span className="meta-label">{isEs ? 'Tarifas & Descuentos' : 'Rates & Discounts'}</span>
          <h2 className="heading-serif" style={{ fontSize: '2rem', marginTop: '0.4rem' }}>
            {isEs ? 'Bonos Creativos' : 'Creative Packages'}
          </h2>
          <p style={{ fontFamily: 'var(--font-serif-body)', fontSize: '0.95rem', color: '#666', marginTop: '0.5rem' }}>
            {isEs ? 'Talleres individuales desde 25 € • Reserva por adelantado con descuento' : 'Individual workshops from €25 • Advance reservation with discount'}
          </p>
        </div>

        {/* Package Grid (Exact Client PDF Numbers) */}
        <div className="packages-editorial-grid">
          <div className="package-card">
            <span className="package-discount">10% DTO.</span>
            <h3 className="package-name">{isEs ? 'Bono 3 Talleres' : '3-Workshop Package'}</h3>
            <div className="package-price-row">
              <span className="package-original-price">75 €</span>
              <span className="package-final-price">67,50 €</span>
            </div>
          </div>

          <div className="package-card featured">
            <span className="package-badge">{isEs ? 'RECOMENDADO' : 'RECOMMENDED'}</span>
            <span className="package-discount">15% DTO.</span>
            <h3 className="package-name">{isEs ? 'Bono 5 Talleres' : '5-Workshop Package'}</h3>
            <div className="package-price-row">
              <span className="package-original-price">125 €</span>
              <span className="package-final-price">106 €</span>
            </div>
          </div>

          <div className="package-card">
            <span className="package-discount">20% DTO.</span>
            <h3 className="package-name">{isEs ? 'Bono 7 Talleres' : '7-Workshop Package'}</h3>
            <div className="package-price-row">
              <span className="package-original-price">175 €</span>
              <span className="package-final-price">140 €</span>
            </div>
          </div>
        </div>

        {/* Pricing Exceptions Note */}
        <div className="pricing-exceptions-note" style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: '#7A756C', letterSpacing: '0.04em' }}>
            {isEs
              ? '* Sesiones especiales: Pintura Mural (30 €) • Kawaii Best Friends (30 €) • Diseña tus Zapatillas (25 € / 45 € con zapatillas)'
              : '* Special sessions: Mural Painting (€30) • Kawaii Best Friends (€30) • Custom Sneakers (€25 / €45 with sneakers included)'}
          </p>
        </div>
      </section>

      {/* 6. View Workshop Calendar CTA Button (Opens Official PDF) */}
      <section className="workshops-cta-section" style={{ textAlign: 'center', paddingTop: '1.5rem' }}>
        <a 
          href="/Calendario-talleres-creativos-2026-27.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-reference-outline btn-pdf-cta"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '1.1rem 2.5rem', fontSize: '0.9rem' }}
        >
          <Download size={18} />
          {isEs ? 'VER CALENDARIO DE TALLERES (PDF)' : 'VIEW WORKSHOP CALENDAR (PDF)'}
        </a>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: '#8C8275', marginTop: '1rem', letterSpacing: '0.05em' }}>
          {isEs ? 'Abre la programación completa del curso 2026/27 en PDF' : 'Opens full 2026/27 workshop calendar in PDF'}
        </p>
      </section>
    </div>
  );
}

