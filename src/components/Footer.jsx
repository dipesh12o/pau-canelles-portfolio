import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { ARTIST_DATA } from '../data/artistData';

export default function Footer() {
  return (
    <footer className="footer-section-cream">
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 className="footer-faq-title">F A Q</h2>

        <div className="footer-social-icons-group">
          {/* 1. Instagram */}
          <a
            href={ARTIST_DATA.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon-link"
            aria-label="Instagram"
          >
            <Instagram size={28} strokeWidth={1.4} />
          </a>

          {/* 2. Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=100087217848122"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon-link"
            aria-label="Facebook"
          >
            <Facebook size={28} strokeWidth={1.4} />
          </a>

          {/* 3. TikTok */}
          <a
            href="https://www.tiktok.com/@pau.canelles"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon-link"
            aria-label="TikTok"
          >
            <svg 
              width={28} 
              height={28} 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth={1.4} 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
          </a>

          {/* 4. YouTube */}
          <a
            href="https://www.youtube.com/@PauCanelles"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon-link"
            aria-label="YouTube"
          >
            <Youtube size={28} strokeWidth={1.4} />
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
