import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Works from './pages/Works';
import About from './pages/About';
import Workshops from './pages/Workshops';
import Contact from './pages/Contact';

import './styles/global.css';
import './styles/components.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Handle browser back/forward buttons with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'works', 'about', 'workshops', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (pageId) => {
    setCurrentPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={handlePageChange} />;
      case 'works':
        return <Works setCurrentPage={handlePageChange} />;
      case 'about':
        return <About setCurrentPage={handlePageChange} />;
      case 'workshops':
        return <Workshops setCurrentPage={handlePageChange} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={handlePageChange} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Navbar currentPage={currentPage} setCurrentPage={handlePageChange} />
      
      <main id="main-content" style={{ flexGrow: 1 }}>
        {renderPage()}
      </main>

      <Footer setCurrentPage={handlePageChange} />
    </div>
  );
}
