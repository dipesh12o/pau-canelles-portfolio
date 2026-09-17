import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ArtworkModal from '../components/ArtworkModal';

export default function Exhibitions({ lang = 'es' }) {
  const isEs = lang === 'es';

  const [expandedId, setExpandedId] = useState('exh-artistes-morts');
  const [selectedExhibition, setSelectedExhibition] = useState(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  // Chronological Exhibition Archive — Most recent exhibitions first
  const exhibitionEntries = [
    {
      id: 'exh-artistes-morts',
      title: 'Artistes Morts o Artistes Vius?',
      type: isEs ? 'Exposición individual' : 'Solo exhibition',
      venue: 'L’Antic Forn',
      location: 'Tales, Castellón',
      city: 'Tales, Castellón',
      year: 2025,
      order: 1,
      description: {
        es: `Artistes Morts o Artistes Vius? nace como una reflexión sobre las oportunidades que reciben los artistas jóvenes frente al enorme peso que siguen teniendo los grandes nombres de la historia del arte.\n\nMientras artistas ya fallecidos continúan concentrando gran parte de la atención del público, las instituciones y el mercado, muchos artistas emergentes encuentran grandes dificultades para conseguir espacios donde mostrar y desarrollar su trabajo.\n\nLa exposición plantea una pregunta sencilla: si no damos oportunidades a los artistas que están creando hoy, ¿cómo podrán convertirse en los artistas que recordaremos mañana?`,
        en: `Artistes Morts o Artistes Vius? (Dead Artists or Living Artists?) reflects on the opportunities available to young artists compared with the enormous attention still given to the great names of art history.\n\nWhile artists who are no longer alive continue to attract much of the attention of audiences, institutions and the art market, many emerging artists struggle to find spaces where they can show and develop their work.\n\nThe exhibition poses a simple question: if we don’t give opportunities to the artists creating today, how can they become the artists we remember tomorrow?`
      },
      images: [
        '/exhibitions/artistes-morts-sign.webp',
        '/exhibitions/artistes-morts-pau.webp',
        '/exhibitions/artistes-morts-hallway.webp',
        '/exhibitions/artistes-morts-detail.webp'
      ]
    },
    {
      id: 'exh-mediante-el-arte',
      title: 'Mediante el Arte',
      venue: 'Casa de la Cultura',
      location: 'Onda, Castellón',
      city: 'Onda, Castellón',
      year: 2025,
      order: 2,
      workPresented: isEs ? 'Hasta 50 obras' : 'Up to 50 works',
      works: isEs ? 'Hasta 50 obras' : 'Up to 50 works',
      interviewUrl: 'https://arrelsonline.es/art/19847/su-primera-exposicion-en-solitario',
      description: {
        es: `Mediante el Arte reunió cerca de 50 obras en un recorrido por diferentes etapas de mi trayectoria artística, desde mis primeros trabajos hasta las investigaciones y formas de expresión que posteriormente han ido definiendo mi obra.\n\nEl título nace de entender el arte como un medio de comunicación. **Mediante el arte he encontrado una forma de expresar ideas, experiencias e inquietudes que muchas veces me resulta difícil trasladar de otra manera.** La exposición planteaba así no solo un recorrido por la evolución de mi pintura, sino también por mi propia manera de observar, comprender y comunicarme con el mundo.\n\nLa diversidad de obras, técnicas y momentos presentes en la exposición permitía observar esa evolución y entender cada pieza como parte de un proceso que continúa transformándose.`,
        en: `Mediante el Arte (Through Art) brought together around 50 works, creating a journey through different stages of my artistic development, from my earliest pieces to the explorations and forms of expression that would later come to define my work.\n\nThe title comes from understanding art as a means of communication. **Through art, I have found a way to express ideas, experiences and concerns that I often find difficult to communicate in other ways.** The exhibition therefore presented not only the evolution of my painting, but also the evolution of my own way of observing, understanding and communicating with the world.\n\nThe diversity of works, techniques and different moments represented in the exhibition offered a way to see this evolution, with each piece forming part of a process that continues to transform.`
      },
      images: [
        '/exhibitions/mediante-el-arte-poster.webp',
        '/exhibitions/mediante-el-arte-gallery.webp',
        '/exhibitions/mediante-el-arte-speech.webp',
        '/exhibitions/mediante-el-arte-pau.webp',
        '/exhibitions/mediante-el-arte-visitors.webp'
      ]
    },
    {
      id: 'exh-todos-somos-contingentes',
      title: 'Todos somos contingentes',
      venue: 'EST ART Gallery',
      location: 'Alcobendas, Madrid',
      city: 'Alcobendas, Madrid',
      year: 2024,
      order: 3,
      workPresented: 'Vida sin sentido',
      description: {
        es: `Vida sin sentido es una serie de seis obras que reflexiona sobre la desconexión con uno mismo y cómo esta puede conducirnos hacia una vida carente de sentido.\n\nA través de la fragmentación y transformación de atributos físicos como la nariz, la boca o los ojos, la serie plantea una reflexión sobre aquello que reconocemos como propio y sobre los elementos que intervienen en la construcción de nuestra identidad.\n\nEstas seis piezas dialogan entre sí como diferentes fragmentos de un mismo individuo, explorando la distancia que puede aparecer entre quiénes somos, cómo nos percibimos y la identidad que vamos construyendo.`,
        en: `Vida sin sentido (Life Without Meaning) is a series of six works that reflects on disconnection from oneself and how this can lead to a life that feels devoid of meaning.\n\nThrough the fragmentation and transformation of physical features such as the nose, mouth and eyes, the series reflects on what we recognise as our own and on the elements involved in the construction of our identity.\n\nThe six pieces interact as different fragments of the same individual, exploring the distance that can emerge between who we are, how we perceive ourselves and the identity we gradually construct.`
      },
      images: [
        '/exhibitions/todos-somos-contingentes-1.webp',
        '/exhibitions/todos-somos-contingentes-2.webp',
        '/exhibitions/todos-somos-contingentes-3.webp',
        '/exhibitions/todos-somos-contingentes-4.webp',
        '/exhibitions/todos-somos-contingentes-5.webp'
      ]
    },
    {
      id: 'exh-miau-fanzara',
      title: 'MIAU Fanzara',
      event: 'MIAU – Museo Inacabado de Arte Urbano',
      venue: 'MIAU – Museo Inacabado de Arte Urbano',
      location: 'Fanzara, Castellón',
      city: 'Fanzara, Castellón',
      year: 2023,
      order: 4,
      project: 'Mirada Felina',
      workPresented: 'Mirada Felina',
      numberOfWorks: 18,
      videoUrl: 'https://www.youtube.com/watch?v=DaTke35TZ4M',
      context: {
        es: 'MIAU es un festival de arte urbano en Fanzara, Castellón. Para esta edición, desarrollé un proyecto de cartelería seleccionado a través de la feria de arte contemporáneo MART, compuesto por una serie de 18 obras titulada Mirada Felina.',
        en: 'MIAU is an urban art festival in Fanzara, Castellón. For this edition, I developed a poster-based project that was selected through the MART contemporary art fair, consisting of a series of 18 works titled Mirada Felina.'
      },
      description: {
        es: `Mirada Felina es una serie de 18 obras que reflexiona sobre la crispación social y sobre cómo los conflictos y problemas de nuestro entorno terminan afectando a nuestra forma de percibir, relacionarnos y construir nuestra propia identidad.\n\nA través de diferentes rostros y miradas, la serie pone el foco en las huellas que deja sobre el individuo aquello que sucede a su alrededor. Como guiño al MIAU, los carteles esconden además numerosas referencias visuales al mundo felino, integradas entre los diferentes elementos de las composiciones.`,
        en: `Mirada Felina (Feline Gaze) is a series of 18 works reflecting on social tension and the way conflicts and problems within our surroundings can affect how we perceive, relate to others and construct our own identity.\n\nThrough different faces and gazes, the series focuses on the traces that our surroundings leave on the individual. As a nod to MIAU, the posters also hide numerous visual references to cats, subtly integrated throughout the compositions.`
      },
      images: [
        '/exhibitions/miau-fanzara-poster.webp',
        '/exhibitions/miau-fanzara-wall-posters.webp',
        '/exhibitions/miau-fanzara-process-1.webp',
        '/exhibitions/miau-fanzara-process-2.webp',
        '/exhibitions/miau-fanzara-prep.webp'
      ]
    }
  ];

  // Data-driven chronological sorting (most recent year first, then order)
  const sortedExhibitions = [...exhibitionEntries].sort((a, b) => (b.year || 0) - (a.year || 0) || (a.order || 99) - (b.order || 99));

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleImageClick = (exhibition, imgIndex = 0) => {
    setSelectedExhibition(exhibition);
    setActiveImgIndex(imgIndex);
  };

  return (
    <div 
      className="exhibitions-page-wrapper"
      style={{
        backgroundColor: '#FFFFFF',
        color: '#1A1916',
        minHeight: '100vh',
        paddingTop: '1rem',
        paddingBottom: '2.5rem'
      }}
    >
      <div className="site-container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Editorial Header */}
        <header className="exhibitions-header" style={{ marginBottom: '1.25rem', borderBottom: '1px solid #E5E5E5', paddingBottom: '1.25rem' }}>
          <span 
            className="meta-label" 
            style={{ 
              display: 'block', 
              fontSize: '0.725rem', 
              letterSpacing: '0.22em', 
              textTransform: 'uppercase', 
              color: '#777777', 
              marginBottom: '0.35rem' 
            }}
          >
            {isEs ? 'Trayectoria & Registro Visual' : 'Trajectory & Visual Archive'}
          </span>
          <h1 
            style={{ 
              fontFamily: 'Playfair Display, Georgia, serif', 
              fontSize: '2.25rem', 
              fontWeight: 400, 
              margin: 0,
              color: '#111111'
            }}
          >
            {isEs ? 'Exposiciones' : 'Exhibitions'}
          </h1>
        </header>

        {/* Temporary Upcoming Exhibition Announcement Block */}
        <div 
          className="upcoming-exhibition-announcement" 
          style={{ 
            marginBottom: '1.25rem', 
            padding: '1.25rem 1.5rem', 
            backgroundColor: '#FAFAFA', 
            border: '1px solid #EAEAEA', 
            borderRadius: '2px' 
          }}
        >
          <span 
            style={{ 
              fontSize: '0.725rem', 
              letterSpacing: '0.2em', 
              textTransform: 'uppercase', 
              color: '#888888', 
              fontWeight: 600, 
              display: 'block', 
              marginBottom: '0.35rem' 
            }}
          >
            {isEs ? 'PRÓXIMA EXPOSICIÓN' : 'UPCOMING EXHIBITION'}
          </span>
          <div 
            style={{ 
              fontFamily: 'Inter, -apple-system, sans-serif', 
              fontSize: '0.975rem', 
              fontWeight: 500, 
              color: '#111111' 
            }}
          >
            {isEs ? 'Inauguración: 5 de octubre de 2026' : 'Opening October 5th, 2026'}
          </div>
        </div>

        {/* Chronological List of Exhibitions */}
        <div className="exhibitions-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {sortedExhibitions.map((item) => {
            const isExpanded = expandedId === item.id;
            const currentDesc = typeof item.description === 'object'
              ? (item.description[lang] || item.description.es)
              : item.description;
            const currentContext = typeof item.context === 'object'
              ? (item.context[lang] || item.context.es)
              : item.context;

            return (
              <article 
                key={item.id} 
                className={`exhibition-row-entry ${isExpanded ? 'expanded' : ''}`}
                style={{
                  borderBottom: '1px solid #EAEAEA',
                  paddingBottom: isExpanded ? '2rem' : '1.25rem',
                  transition: 'all 0.25s ease'
                }}
              >
                {/* Collapsed Header / Summary Line (Clickable) */}
                <div 
                  className="exhibition-summary-header"
                  onClick={() => toggleExpand(item.id)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleExpand(item.id);
                    }
                  }}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    cursor: 'pointer',
                    userSelect: 'none',
                    gap: '1rem'
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <h2 
                      style={{ 
                        fontFamily: 'Playfair Display, Georgia, serif', 
                        fontSize: '1.35rem', 
                        fontWeight: isExpanded ? 500 : 400,
                        margin: 0,
                        color: '#111111'
                      }}
                    >
                      {item.title}
                    </h2>
                    <div 
                      style={{ 
                        fontFamily: 'Inter, -apple-system, sans-serif', 
                        fontSize: '0.85rem', 
                        color: '#666666', 
                        marginTop: '0.25rem',
                        letterSpacing: '0.02em'
                      }}
                    >
                      <span>{item.venue || item.event}</span>
                      {item.location && <span> — {item.location}</span>}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <span 
                      style={{ 
                        fontFamily: 'Inter, -apple-system, sans-serif', 
                        fontSize: '0.9rem', 
                        fontWeight: 600, 
                        color: '#111111',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {item.year}
                    </span>
                    <button 
                      type="button"
                      aria-label={isExpanded ? (isEs ? 'Plegar' : 'Collapse') : (isEs ? 'Desplegar' : 'Expand')}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#444444',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0.25rem'
                      }}
                    >
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                  </div>
                </div>

                {/* Expanded Exhibition Detail Area */}
                {isExpanded && (
                  <div 
                    className="exhibition-expanded-detail" 
                    style={{ 
                      marginTop: '1.75rem',
                      paddingTop: '1.25rem',
                      borderTop: '1px solid #F0F0F0'
                    }}
                  >
                    {/* Exhibition Type Tag */}
                    {item.type && (
                      <div style={{ marginBottom: '1.25rem' }}>
                        <span 
                          style={{ 
                            fontFamily: 'Inter, -apple-system, sans-serif', 
                            fontSize: '0.75rem', 
                            textTransform: 'uppercase', 
                            letterSpacing: '0.15em', 
                            color: '#888888',
                            display: 'block',
                            marginBottom: '0.2rem'
                          }}
                        >
                          {isEs ? 'Tipo de Exposición' : 'Exhibition Type'}
                        </span>
                        <div style={{ fontFamily: 'Inter, -apple-system, sans-serif', fontSize: '0.95rem', color: '#222222', fontWeight: 500 }}>
                          {item.type}
                        </div>
                      </div>
                    )}
                    {/* Event / Venue Metadata */}
                    {item.event && (
                      <div style={{ marginBottom: '1.25rem' }}>
                        <span 
                          style={{ 
                            fontFamily: 'Inter, -apple-system, sans-serif', 
                            fontSize: '0.75rem', 
                            textTransform: 'uppercase', 
                            letterSpacing: '0.15em', 
                            color: '#888888',
                            display: 'block',
                            marginBottom: '0.2rem'
                          }}
                        >
                          {isEs ? 'Evento' : 'Event'}
                        </span>
                        <div style={{ fontFamily: 'Inter, -apple-system, sans-serif', fontSize: '0.95rem', color: '#222222', fontWeight: 500 }}>
                          {item.event}
                        </div>
                      </div>
                    )}

                    {/* Work Presented / Project */}
                    {(item.project || item.workPresented) && (
                      <div style={{ marginBottom: '1.25rem' }}>
                        <span 
                          style={{ 
                            fontFamily: 'Inter, -apple-system, sans-serif', 
                            fontSize: '0.75rem', 
                            textTransform: 'uppercase', 
                            letterSpacing: '0.15em', 
                            color: '#888888',
                            display: 'block',
                            marginBottom: '0.2rem'
                          }}
                        >
                          {item.project ? (isEs ? 'Proyecto / Serie' : 'Project / Series') : (isEs ? 'Obra presentada' : 'Work presented')}
                        </span>
                        <h3 
                          style={{ 
                            fontFamily: 'Playfair Display, Georgia, serif', 
                            fontSize: '1.15rem', 
                            fontWeight: 400,
                            margin: 0,
                            color: '#222222',
                            fontStyle: 'italic'
                          }}
                        >
                          {item.project || item.workPresented} {item.numberOfWorks ? `(${item.numberOfWorks} ${isEs ? 'obras' : 'works'})` : ''}
                        </h3>
                      </div>
                    )}

                    {/* Project Context (if available) */}
                    {currentContext && (
                      <div 
                        style={{
                          fontFamily: 'Inter, -apple-system, sans-serif',
                          fontSize: '0.925rem',
                          lineHeight: '1.65',
                          color: '#555555',
                          maxWidth: '780px',
                          marginBottom: '1.25rem',
                          fontStyle: 'italic'
                        }}
                      >
                        <p style={{ margin: 0 }}>{currentContext}</p>
                      </div>
                    )}

                    {/* Multilingual Text Description */}
                    {currentDesc && (
                      <div 
                        className="exhibition-description-text"
                        style={{
                          fontFamily: 'Playfair Display, Georgia, serif',
                          fontSize: '1rem',
                          lineHeight: '1.75',
                          color: '#333333',
                          maxWidth: '780px',
                          marginBottom: '1.75rem'
                        }}
                      >
                        {currentDesc.split('\n\n').map((paragraph, idx) => {
                          const parts = paragraph.split('**');
                          return (
                            <p key={idx} style={{ marginBottom: '1rem', marginTop: 0 }}>
                              {parts.map((part, pIdx) => (
                                pIdx % 2 === 1 ? <strong key={pIdx} style={{ fontWeight: 600 }}>{part}</strong> : part
                              ))}
                            </p>
                          );
                        })}
                      </div>
                    )}

                    {/* Watch Video Button */}
                    {item.videoUrl && (
                      <div style={{ marginBottom: '2rem' }}>
                        <a 
                          href={item.videoUrl} 
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
                            backgroundColor: '#FFFFFF',
                            textDecoration: 'none',
                            fontWeight: 600,
                            borderRadius: '1px',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          WATCH VIDEO &rarr;
                        </a>
                      </div>
                    )}

                    {/* Watch Interview Button */}
                    {item.interviewUrl && (
                      <div style={{ marginBottom: '2rem' }}>
                        <a 
                          href={item.interviewUrl} 
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
                            backgroundColor: '#FFFFFF',
                            textDecoration: 'none',
                            fontWeight: 600,
                            borderRadius: '1px',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          WATCH INTERVIEW &rarr;
                        </a>
                      </div>
                    )}

                    {/* Exhibition Photographs Gallery */}
                    {item.images && item.images.length > 0 && (
                      <div className="exhibition-photos-section">
                        <span 
                          style={{ 
                            fontFamily: 'Inter, -apple-system, sans-serif', 
                            fontSize: '0.75rem', 
                            textTransform: 'uppercase', 
                            letterSpacing: '0.15em', 
                            color: '#888888',
                            display: 'block',
                            marginBottom: '0.85rem'
                          }}
                        >
                          {isEs ? 'Registro Fotográfico' : 'Exhibition Gallery'} ({item.images.length})
                        </span>
                        
                        <div 
                          className="exhibition-photos-grid"
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                            gap: '1.25rem'
                          }}
                        >
                          {item.images.map((imgSrc, idx) => (
                            <div
                              key={idx}
                              className="exhibition-photo-thumbnail img-container-hover"
                              onClick={() => handleImageClick(item, idx)}
                              role="button"
                              tabIndex={0}
                              aria-label={`${item.title} photo ${idx + 1}`}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  handleImageClick(item, idx);
                                }
                              }}
                              style={{
                                cursor: 'pointer',
                                overflow: 'hidden',
                                borderRadius: '2px',
                                backgroundColor: '#F9F9F8',
                                border: '1px solid #EAEAEA',
                                aspectRatio: '4/3'
                              }}
                            >
                              <img
                                src={imgSrc}
                                alt={`${item.title} — Photo ${idx + 1}`}
                                loading="lazy"
                                decoding="async"
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover',
                                  display: 'block',
                                  transition: 'transform 0.4s ease'
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      {/* Expanded Lightbox Viewer */}
      {selectedExhibition && (
        <ArtworkModal
          item={selectedExhibition}
          itemList={sortedExhibitions}
          activeImgIndex={activeImgIndex}
          onClose={() => setSelectedExhibition(null)}
          onSelectArtwork={(item) => setSelectedExhibition(item)}
          lang={lang}
        />
      )}
    </div>
  );
}
