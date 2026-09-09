import React, { useState } from 'react';
import { Instagram, Menu, X } from 'lucide-react';
import { ARTIST_DATA } from '../data/artistData';

export default function Navbar({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          
          {/* Instagram Icon link on far right of nav group (Exact match to reference screenshots) */}
          <li>
            <a
              href={ARTIST_DATA.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="header-instagram-icon"
              aria-label="Instagram de Pau Canelles"
            >
              <Instagram size={24} strokeWidth={1.4} />
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
        >
          {mobileMenuOpen ? <X size={26} color="#FCE8D2" /> : <Menu size={26} color="#FCE8D2" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="mobile-nav-item"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div style={{ borderTop: '1px solid var(--color-hairline)', paddingTop: '1.5rem', marginTop: '2rem' }}>
            <span className="meta-label">Pau Canelles</span>
            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.4rem' }}>{ARTIST_DATA.contact.email}</p>
          </div>
        </div>
      )}
    </header>
  );
}
