import React, { useState, useEffect } from 'react';
import { Instagram, Menu, X } from 'lucide-react';
import { ARTIST_DATA } from '../data/artistData';

export default function Navbar({ currentPage, setCurrentPage }) {
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
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'works', label: 'PORTFOLIO' },
    { id: 'workshops', label: 'WORKSHOPS' },
    { id: 'contact', label: 'CONTACT' }
  ];

  return (
    <header className="header-reference">
      <div className="header-nav-flex">
        {/* Mobile Header Layout: Hamburger LEFT, Instagram RIGHT (Exact reference screenshot match) */}
        <div className="header-mobile-bar">
          <button
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile navigation menu"
          >
            <Menu size={28} color="#FCE8D2" strokeWidth={1.4} />
          </button>

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

        {/* Desktop Centered Links */}
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
        </ul>
      </div>

      {/* Full Screen Dark Mobile Menu Overlay (Matching Screenshot 2) */}
      {mobileMenuOpen && (
        <div className="mobile-full-overlay">
          <div className="mobile-overlay-header">
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
