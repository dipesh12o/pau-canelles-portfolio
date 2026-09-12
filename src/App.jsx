import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Works from './pages/Works';
import Murals from './pages/Murals';
import Exhibitions from './pages/Exhibitions';
import About from './pages/About';
import Workshops from './pages/Workshops';
import Contact from './pages/Contact';
import ArtworkModal from './components/ArtworkModal';

import { ARTIST_DATA } from './data/artistData';
import './styles/global.css';
import './styles/components.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [originPage, setOriginPage] = useState('home');
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('pau_site_lang') || 'es';
    } catch {
      return 'es';
    }
  });

  const handleLangChange = (newLang) => {
    setLang(newLang);
    try {
      localStorage.setItem('pau_site_lang', newLang);
    } catch {
      // Fallback
    }
  };

  // Handle browser back/forward buttons with URL hash & deep-linking
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#', '');
      const [path, query] = rawHash.split('?');

      let targetPage = path || 'home';
      let artId = null;

      if (query) {
        const params = new URLSearchParams(query);
        artId = params.get('art') || params.get('artwork');
      } else if (path.startsWith('artwork/')) {
        const parts = path.split('/');
        targetPage = 'works';
        artId = parts[1];
      }

      if (['home', 'works', 'murals', 'exhibitions', 'about', 'workshops', 'contact'].includes(targetPage)) {
        setCurrentPage(targetPage);
        setOriginPage(targetPage);
        if (artId) {
          const found = ARTIST_DATA.artworks.find(a => a.id === artId);
          if (found) {
            setSelectedArtwork(found);
          } else {
            setSelectedArtwork(null);
          }
        } else {
          setSelectedArtwork(null);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (pageId) => {
    setSelectedArtwork(null);
    setCurrentPage(pageId);
    setOriginPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArtwork = (art, sourcePage = null) => {
    const pageToUse = sourcePage || currentPage;
    if (art) {
      setOriginPage(pageToUse);
      setSelectedArtwork(art);
      window.location.hash = `${pageToUse}?art=${art.id}`;
    } else {
      setSelectedArtwork(null);
      window.location.hash = originPage || currentPage;
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home 
            setCurrentPage={handlePageChange} 
            lang={lang} 
            onSelectArtwork={(art) => handleSelectArtwork(art, 'home')} 
          />
        );
      case 'works':
        return (
          <Works 
            setCurrentPage={handlePageChange} 
            lang={lang} 
            selectedArtwork={selectedArtwork}
            onSelectArtwork={(art) => handleSelectArtwork(art, 'works')} 
          />
        );
      case 'murals':
        return <Murals lang={lang} />;
      case 'exhibitions':
        return <Exhibitions lang={lang} />;
      case 'about':
        return <About setCurrentPage={handlePageChange} lang={lang} setLang={handleLangChange} />;
      case 'workshops':
        return <Workshops setCurrentPage={handlePageChange} lang={lang} />;
      case 'contact':
        return <Contact lang={lang} />;
      default:
        return (
          <Home 
            setCurrentPage={handlePageChange} 
            lang={lang} 
            onSelectArtwork={(art) => handleSelectArtwork(art, 'home')} 
          />
        );
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Navbar currentPage={currentPage} setCurrentPage={handlePageChange} lang={lang} setLang={handleLangChange} />
      
      <main id="main-content" style={{ flexGrow: 1 }}>
        {renderPage()}
      </main>

      {/* Global Lightbox Component (Option B) for Return-to-Origin Navigation */}
      {selectedArtwork && (
        <ArtworkModal 
          artwork={selectedArtwork}
          onClose={() => handleSelectArtwork(null)}
          onSelectArtwork={(art) => handleSelectArtwork(art, originPage)}
          lang={lang}
        />
      )}

      <Footer setCurrentPage={handlePageChange} lang={lang} />
    </div>
  );
}
