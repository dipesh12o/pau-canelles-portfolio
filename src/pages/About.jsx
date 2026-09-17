import React, { useState } from 'react';
import { ARTIST_DATA } from '../data/artistData';
import ArtworkModal from '../components/ArtworkModal';

export default function About({ setCurrentPage, lang = 'es' }) {
  const isEs = lang === 'es';
  const content = ARTIST_DATA.aboutStory[lang] || ARTIST_DATA.aboutStory.es;
  const captions = ARTIST_DATA.aboutStory.photoCaptions;
  const images = ARTIST_DATA.aboutImages;

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const galleryItems = [
    {
      id: 'photo1',
      title: isEs ? 'Taller Pau Canelles' : 'Pau Canelles Studio',
      src: images.photo1,
      image: images.photo1,
      alt: captions.photo1,
      medium: isEs ? 'Espacio de creación y proceso' : 'Studio space & creative process'
    },
    {
      id: 'photo2',
      title: isEs ? 'Detalle de Obra' : 'Artwork Detail',
      src: images.photo2,
      image: images.photo2,
      alt: captions.photo2,
      medium: isEs ? 'Exploración de textura y color' : 'Texture and color exploration'
    },
    {
      id: 'photo3',
      title: isEs ? 'Proceso Creativo' : 'Creative Process',
      src: images.photo3,
      image: images.photo3,
      alt: captions.photo3,
      medium: isEs ? 'Técnica mixta en el taller' : 'Mixed media in the studio'
    },
    {
      id: 'photo4',
      title: isEs ? 'Taller y Obras' : 'Studio & Works',
      src: images.photo4,
      image: images.photo4,
      alt: captions.photo4,
      medium: isEs ? 'Obras en gran formato' : 'Large format works'
    }
  ];

  return (
    <div className="about-editorial-page">
      <div className="about-container">
        {/* Top Horizontal Photo Gallery (3-4 images) */}
        <section className="about-gallery-section">
          <div className="gallery-strip-grid">
            {galleryItems.map((item) => (
              <div 
                key={item.id} 
                className="gallery-strip-item"
                onClick={() => setSelectedPhoto(item)}
                style={{ cursor: 'pointer' }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedPhoto(item);
                  }
                }}
              >
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="gallery-strip-img" 
                />
              </div>
            ))}
          </div>
        </section>

        {/* Continuous Biography Section */}
        <section className="about-bio-continuous">
          {content.paragraphs.map((paragraph, index) => (
            <p key={index} className="about-continuous-paragraph">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Contact CTA */}
        <section className="about-closing-section">
          <button 
            className="btn-reference-outline" 
            onClick={() => {
              setCurrentPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {lang === 'en' ? 'Get in Touch' : 'Contactar'}
          </button>
        </section>
      </div>

      {/* Lightbox Image Modal */}
      {selectedPhoto && (
        <ArtworkModal
          artwork={selectedPhoto}
          itemList={galleryItems}
          onClose={() => setSelectedPhoto(null)}
          onSelectArtwork={(item) => setSelectedPhoto(item)}
          lang={lang}
          hideEnquireButton={true}
        />
      )}
    </div>
  );
}

