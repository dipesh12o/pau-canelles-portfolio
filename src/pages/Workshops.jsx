import React, { useState, useRef } from 'react';
import { Download, ChevronLeft, ChevronRight } from 'lucide-react';
import ArtworkModal from '../components/ArtworkModal';

export default function Workshops({ lang = 'es', setCurrentPage }) {
  const isEs = lang === 'es';
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const carouselRef = useRef(null);

  // Section 3: Main Workshop Gallery (4 real photos supplied by client)
  const mainGalleryPhotos = [
    { id: 'main-ws1', src: '/workshops/ws-01.webp', image: '/workshops/ws-01.webp', title: isEs ? 'Taller Creativo — Pau Canelles' : 'Creative Workshop — Pau Canelles', alt: isEs ? 'Pau Canelles enseñando en el taller' : 'Pau Canelles teaching in the workshop' },
    { id: 'main-ws2', src: '/workshops/ws-02.webp', image: '/workshops/ws-02.webp', title: isEs ? 'Proceso Creativo' : 'Creative Process', alt: isEs ? 'Niño dibujando en la mesa de trabajo' : 'Child drawing at workshop table' },
    { id: 'main-ws3', src: '/workshops/ws-03.webp', image: '/workshops/ws-03.webp', title: isEs ? 'Visita a Exposición' : 'Exhibition Visit', alt: isEs ? 'Alumnos visitando la exposición de arte' : 'Students visiting art exhibition' },
    { id: 'main-ws4', src: '/workshops/ws-04.webp', image: '/workshops/ws-04.webp', title: isEs ? 'Actividad en Sala' : 'Gallery Activity', alt: isEs ? 'Alumnos creando sobre el suelo de la sala' : 'Students working in the exhibition room' }
  ];

  // Section 5: Workshop Projects Carousel (11 real photos supplied by client)
  const projectPhotos = [
    { id: 'proj-ws5', src: '/workshops/ws-05.webp', image: '/workshops/ws-05.webp', title: isEs ? 'Pintura Acrílica Fluida' : 'Fluid Acrylic Painting', alt: isEs ? 'Obra acrílica realizada en el taller' : 'Fluid acrylic artwork created in workshop' },
    { id: 'proj-ws6', src: '/workshops/ws-06.webp', image: '/workshops/ws-06.webp', title: isEs ? 'Composición Geométrica' : 'Geometric Composition', alt: isEs ? 'Ejercicio de abstracción e inspiración Kandinsky' : 'Abstract Kandinsky-inspired study' },
    { id: 'proj-ws7', src: '/workshops/ws-07.webp', image: '/workshops/ws-07.webp', title: isEs ? 'Explicación de Técnicas' : 'Technique Demonstration', alt: isEs ? 'Pau Canelles mostrando diferentes lienzos' : 'Pau Canelles demonstrating canvas techniques' },
    { id: 'proj-ws8', src: '/workshops/ws-08.webp', image: '/workshops/ws-08.webp', title: isEs ? 'Trabajo en Grupo' : 'Group Session', alt: isEs ? 'Alumnos concentrados durante el taller' : 'Students during group art session' },
    { id: 'proj-ws9', src: '/workshops/ws-09.webp', image: '/workshops/ws-09.webp', title: isEs ? 'Diseño de Bolsas de Tela' : 'Tote Bag Painting', alt: isEs ? 'Actividad de pintura en bolsas de tela' : 'Tote bag custom painting activity' },
    { id: 'proj-ws10', src: '/workshops/ws-10.webp', image: '/workshops/ws-10.webp', title: isEs ? 'Taller de Ilustración' : 'Illustration Workshop', alt: isEs ? 'Fichas de creación de personajes' : 'Character design activity sheets' },
    { id: 'proj-ws11', src: '/workshops/ws-11.webp', image: '/workshops/ws-11.webp', title: isEs ? 'Collage y Técnica Mixta' : 'Collage & Mixed Media', alt: isEs ? 'Mesa con materiales de collage' : 'Table arranged with collage materials' },
    { id: 'proj-ws12', src: '/workshops/ws-12.webp', image: '/workshops/ws-12.webp', title: isEs ? 'Pixel Art y Recorte' : 'Pixel Art & Paper Cutting', alt: isEs ? 'Ejercicio de recortes y plantilla pixel' : 'Pixel art cutting activity' },
    { id: 'proj-ws13', src: '/workshops/ws-13.webp', image: '/workshops/ws-13.webp', title: isEs ? 'Moldeado y Modelado' : 'Sculpting & Modeling', alt: isEs ? 'Creación tridimensional sobre la mesa' : '3D modeling session' },
    { id: 'proj-ws14', src: '/workshops/ws-14.webp', image: '/workshops/ws-14.webp', title: isEs ? 'Diseño y Color' : 'Design & Color', alt: isEs ? 'Alumna coloreando personaje estilo Minecraft' : 'Student coloring pixel character' },
    { id: 'proj-ws15', src: '/workshops/ws-15.webp', image: '/workshops/ws-15.webp', title: isEs ? 'Composición de Recortes' : 'Collage Composition', alt: isEs ? 'Mesa de taller con composiciones finales' : 'Workshop table with final collage works' }
  ];

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.75;
      carouselRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const allPhotos = [...mainGalleryPhotos, ...projectPhotos];

  return (
    <div className="workshops-page site-container" style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', paddingTop: '0.5rem', paddingBottom: '2.5rem' }}>
      {/* ==================================================================
          1. WORKSHOP CALENDAR / PDF (FIRST MAIN CONTENT SECTION)
          ================================================================== */}
      <section 
        className="workshops-calendar-hero-section" 
        style={{ 
          marginBottom: '1.5rem', 
          textAlign: 'center', 
          backgroundColor: '#F8F8F7', 
          padding: '1.5rem 1.25rem', 
          borderRadius: '4px', 
          border: '1px solid #EAEAEA' 
        }}
      >
        <div style={{ marginBottom: '0.35rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span className="meta-label">{isEs ? 'Curso 2026 / 2027 • Onda' : '2026 / 2027 Season • Onda'}</span>
          <span style={{ color: '#CCCCCC' }}>•</span>
          <span className="meta-label">Pau Canelles &bull; {isEs ? 'Educación Artística' : 'Art Education'}</span>
        </div>

        <h1 className="heading-serif" style={{ fontSize: '1.85rem', marginBottom: '0.4rem', color: '#111111' }}>
          {isEs ? 'Calendario de Talleres Creativos' : 'Creative Workshops Calendar'}
        </h1>

        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: '#666666', marginBottom: '1.25rem', maxWidth: '620px', margin: '0 auto 1.25rem auto', lineHeight: '1.5' }}>
          {isEs 
            ? 'Consulta la programación completa del curso con fechas, sesiones, grupos y horarios en PDF.' 
            : 'Explore the full course schedule with dates, sessions, groups, and timetable in PDF.'}
        </p>

        <a 
          href="/Calendario-talleres-creativos-2026-27.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-reference-outline btn-pdf-cta"
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.65rem', 
            padding: '0.85rem 2rem', 
            fontSize: '0.85rem', 
            fontWeight: 600, 
            letterSpacing: '0.12em',
            backgroundColor: '#111111',
            color: '#FFFFFF',
            border: '1px solid #111111',
            textDecoration: 'none'
          }}
        >
          <Download size={18} />
          {isEs ? 'VER CALENDARIO DE TALLERES (PDF)' : 'VIEW WORKSHOP CALENDAR (PDF)'}
        </a>
      </section>

      {/* ==================================================================
          2. WORKSHOP INFORMATION
          ================================================================== */}
      <section className="workshops-intro-section" style={{ maxWidth: '840px', margin: '0 auto 1.5rem auto', textAlign: 'center' }}>
        <h2 className="heading-serif" style={{ fontSize: '1.5rem', fontWeight: '400', lineHeight: '1.4', color: '#24231E', marginBottom: '1rem' }}>
          {isEs ? 'Talleres creativos de arte y experimentación para niños y jóvenes en Onda.' : 'Creative art and experimentation workshops for children and youth in Onda.'}
        </h2>

        {/* Practical Information Cards */}
        <div className="workshops-info-grid" style={{ marginBottom: '0' }}>
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
        </div>
      </section>

      {/* ==================================================================
          3. MAIN WORKSHOP PHOTO GALLERY (4 PHOTOS IN 1 SINGLE HORIZONTAL ROW)
          ================================================================== */}
      <section className="workshops-gallery-section" style={{ marginBottom: '2rem' }}>
        <div className="gallery-strip-grid">
          {mainGalleryPhotos.map((photo) => (
            <div 
              key={photo.id} 
              className="gallery-strip-item"
              onClick={() => setSelectedPhoto(photo)}
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
              aria-label={photo.title}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedPhoto(photo);
                }
              }}
            >
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="gallery-strip-img" 
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================================
          4. PACKAGES / BONUSES (APPROVED WHITE APPEARANCE)
          ================================================================== */}
      <section className="workshops-pricing-section" style={{ marginBottom: '2.5rem', backgroundColor: '#FFFFFF', padding: '1.5rem 1rem', borderRadius: '4px', border: '1px solid #EAEAEA' }}>
        <div style={{ textTransform: 'center', marginBottom: '1.25rem', textAlign: 'center' }}>
          <span className="meta-label">{isEs ? 'Tarifas & Descuentos' : 'Rates & Discounts'}</span>
          <h2 className="heading-serif" style={{ fontSize: '1.85rem', marginTop: '0.3rem' }}>
            {isEs ? 'Bonos Creativos' : 'Creative Packages'}
          </h2>
          <p style={{ fontFamily: 'var(--font-serif-body)', fontSize: '0.95rem', color: '#666666', marginTop: '0.35rem' }}>
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
        <div className="pricing-exceptions-note" style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: '#7A756C', letterSpacing: '0.04em' }}>
            {isEs
              ? '* Sesiones especiales: Pintura Mural (30 €) • Kawaii Best Friends (30 €) • Diseña tus Zapatillas (25 € / 45 € con zapatillas)'
              : '* Special sessions: Mural Painting (€30) • Kawaii Best Friends (€30) • Custom Sneakers (€25 / €45 with sneakers included)'}
          </p>
        </div>
      </section>

      {/* ==================================================================
          5. WORKSHOP PROJECTS CAROUSEL (BOTTOM GALLERY)
          ================================================================== */}
      <section className="workshops-projects-carousel-section" style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div>
            <span className="meta-label">{isEs ? 'Registro de Actividades & Proyectos' : 'Activity & Project Archive'}</span>
            <h2 className="heading-serif" style={{ fontSize: '1.5rem', marginTop: '0.2rem', marginBottom: 0 }}>
              {isEs ? 'Proyectos & Trabajos de Alumnos' : 'Student Projects & Workshop Moments'}
            </h2>
          </div>

          {/* Carousel Navigation Arrows */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button 
              type="button" 
              onClick={() => scrollCarousel('prev')}
              className="carousel-nav-arrow"
              aria-label={isEs ? 'Anterior' : 'Previous'}
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              type="button" 
              onClick={() => scrollCarousel('next')}
              className="carousel-nav-arrow"
              aria-label={isEs ? 'Siguiente' : 'Next'}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Single Horizontal Row Carousel Track (4 visible on desktop, swipeable) */}
        <div 
          ref={carouselRef}
          className="workshop-carousel-track"
        >
          {projectPhotos.map((photo) => (
            <div 
              key={photo.id}
              className="workshop-carousel-item"
              onClick={() => setSelectedPhoto(photo)}
              role="button"
              tabIndex={0}
              aria-label={photo.title}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedPhoto(photo);
                }
              }}
            >
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="workshop-carousel-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Image Modal */}
      {selectedPhoto && (
        <ArtworkModal
          artwork={selectedPhoto}
          itemList={allPhotos}
          onClose={() => setSelectedPhoto(null)}
          onSelectArtwork={(photo) => setSelectedPhoto(photo)}
          lang={lang}
          hideEnquireButton={true}
        />
      )}
    </div>
  );
}
