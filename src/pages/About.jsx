import React from 'react';
import { ARTIST_DATA } from '../data/artistData';

export default function About({ setCurrentPage, lang = 'es' }) {
  const content = ARTIST_DATA.aboutStory[lang] || ARTIST_DATA.aboutStory.es;
  const captions = ARTIST_DATA.aboutStory.photoCaptions;
  const images = ARTIST_DATA.aboutImages;

  const galleryItems = [
    { id: 'photo1', src: images.photo1, alt: captions.photo1 },
    { id: 'photo2', src: images.photo2, alt: captions.photo2 },
    { id: 'photo3', src: images.photo3, alt: captions.photo3 },
    { id: 'photo4', src: images.photo4, alt: captions.photo4 }
  ];

  return (
    <div className="about-editorial-page">
      <div className="about-container">
        {/* Top Horizontal Photo Gallery (3-4 images) */}
        <section className="about-gallery-section">
          <div className="gallery-strip-grid">
            {galleryItems.map((item) => (
              <div key={item.id} className="gallery-strip-item">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="gallery-strip-img" 
                />
                <span className="gallery-strip-caption">{item.alt}</span>
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
    </div>
  );
}
