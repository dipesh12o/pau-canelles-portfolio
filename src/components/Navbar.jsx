import React, { useState, useEffect } from 'react';
import { Instagram, Menu, X } from 'lucide-react';
import { ARTIST_DATA } from '../data/artistData';

export default function Navbar({ currentPage, setCurrentPage, lang = 'es', setLang }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: lang === 'es' ? 'INICIO' : 'HOME' },
    { id: 'works', label: lang === 'es' ? 'PORTAFOLIO' : 'PORTFOLIO' },
    { id: 'murals', label: lang === 'es' ? 'MURALES' : 'MURALS' },
    { id: 'exhibitions', label: lang === 'es' ? 'EXPOSICIONES' : 'EXHIBITIONS' },
    { id: 'about', label: lang === 'es' ? 'SOBRE MÍ' : 'ABOUT' },
    { id: 'workshops', label: lang === 'es' ? 'TALLERES' : 'WORKSHOPS' },
    { id: 'contact', label: lang === 'es' ? 'CONTACTO' : 'CONTACT' }
  ];

  return (
    <header className="header-reference">
      <div className="header-nav-flex">
        {/* Mobile Header Layout: Hamburger LEFT, Lang + Instagram RIGHT */}
        <div className="header-mobile-bar">
          <button
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile navigation menu"
          >
            <Menu size={28} color="#FCE8D2" strokeWidth={1.4} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div className="header-lang-switch">
              <button 
                className={`header-lang-btn ${lang === 'es' ? 'active' : ''}`}
                onClick={() => setLang && setLang('es')}
                type="button"
                aria-label="Español"
              >
                ES
              </button>
              <span className="header-lang-divider">/</span>
              <button 
                className={`header-lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang && setLang('en')}
                type="button"
                aria-label="English"
              >
                EN
              </button>
            </div>

            <a
              href={ARTIST_DATA.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-instagram-link"
              aria-label="Instagram"
            >
              <Instagram size={24} color="#FCE8D2" strokeWidth={1.4} />
            </a>
          </div>
        </div>

        {/* Desktop Centered Links with Language Switcher next to Instagram */}
        <ul className="header-links-group">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`header-link-item ${currentPage === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            </li>
          ))}
          
          <li>
            <a
              href={ARTIST_DATA.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="header-instagram-icon"
              aria-label="Instagram"
            >
              <Instagram size={24} strokeWidth={1.4} />
            </a>
          </li>

          {/* Compact Global ES / EN Switcher */}
          <li className="header-lang-item">
            <div className="header-lang-switch">
              <button 
                className={`header-lang-btn ${lang === 'es' ? 'active' : ''}`}
                onClick={() => setLang && setLang('es')}
                type="button"
                aria-label="Español"
              >
                ES
              </button>
              <span className="header-lang-divider">/</span>
              <button 
                className={`header-lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang && setLang('en')}
                type="button"
                aria-label="English"
              >
                EN
              </button>
            </div>
          </li>
        </ul>
      </div>

      {/* Full Screen Dark Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-full-overlay">
          <div className="mobile-overlay-header">
            <div className="header-lang-switch">
              <button 
                className={`header-lang-btn ${lang === 'es' ? 'active' : ''}`}
                onClick={() => setLang && setLang('es')}
                type="button"
              >
                ES
              </button>
              <span className="header-lang-divider">/</span>
              <button 
                className={`header-lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang && setLang('en')}
                type="button"
              >
                EN
              </button>
            </div>

            <button
              className="mobile-overlay-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <X size={32} color="#FCE8D2" strokeWidth={1.2} />
            </button>
          </div>

          <nav className="mobile-overlay-nav">
            <ul className="mobile-overlay-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`mobile-overlay-item ${currentPage === item.id ? 'active' : ''}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
