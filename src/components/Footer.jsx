import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { ARTIST_DATA } from '../data/artistData';

export default function Footer() {
  return (
    <footer className="footer-section-cream">
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 className="footer-faq-title">F A Q</h2>

        <div className="footer-social-icons-group">
          <a
            href={ARTIST_DATA.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon-link"
            aria-label="Instagram"
          >
            <Instagram size={28} strokeWidth={1.4} />
          </a>
          <a
            href={ARTIST_DATA.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon-link"
            aria-label="Facebook"
          >
            <Facebook size={28} strokeWidth={1.4} />
          </a>
        </div>

        <p style={{ fontFamily: 'var(--font-serif-body)', fontSize: '1.05rem', color: 'var(--color-text-dark)', marginBottom: '0.4rem' }}>
          official email {ARTIST_DATA.contact.email}
        </p>

        <p style={{ fontFamily: 'var(--font-serif-body)', fontSize: '0.95rem', color: '#666666' }}>
          {new Date().getFullYear()} @pau_canelles
        </p>
      </div>
    </footer>
  );
}
