import React, { useState } from 'react';
import { ARTIST_DATA } from '../data/artistData';

export default function Workshops() {
  const [activeAgeFilter, setActiveAgeFilter] = useState('All');

  const filteredWorkshops = activeAgeFilter === 'All'
    ? ARTIST_DATA.workshops
    : ARTIST_DATA.workshops.filter(w => w.ageGroup.includes(activeAgeFilter) || w.ageGroup.includes('All'));

  return (
    <div className="workshops-page site-container" style={{ paddingTop: '7.5rem', paddingBottom: '8rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '4rem' }}>
        <span className="meta-label">Schedule 2025 / 2026</span>
        <h1 className="heading-serif" style={{ fontSize: '2.8rem', marginTop: '0.5rem' }}>
          Creative Workshops
        </h1>
        <p style={{ maxWidth: '640px', color: '#555', marginTop: '1rem' }}>
          Experiential masterclasses designed by Pau Canelles for children and youth. Exploring raw art materials, tactile abstraction, and universal masters from art history.
        </p>
      </div>

      {/* Filter Links — Minimal Text Links */}
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '4rem', borderBottom: '1px solid var(--color-hairline)', paddingBottom: '1rem' }}>
        <button
          className="btn-item-link"
          style={{ fontStyle: activeAgeFilter === 'All' ? 'italic' : 'normal', fontWeight: activeAgeFilter === 'All' ? '500' : '300', cursor: 'pointer', background: 'none', border: 'none' }}
          onClick={() => setActiveAgeFilter('All')}
        >
          All Sessions ({ARTIST_DATA.workshops.length})
        </button>
        <button
          className="btn-item-link"
          style={{ fontStyle: activeAgeFilter === '5–8' ? 'italic' : 'normal', fontWeight: activeAgeFilter === '5–8' ? '500' : '300', cursor: 'pointer', background: 'none', border: 'none' }}
          onClick={() => setActiveAgeFilter('5–8')}
        >
          Ages 5 to 8
        </button>
        <button
          className="btn-item-link"
          style={{ fontStyle: activeAgeFilter === '8–12' ? 'italic' : 'normal', fontWeight: activeAgeFilter === '8–12' ? '500' : '300', cursor: 'pointer', background: 'none', border: 'none' }}
          onClick={() => setActiveAgeFilter('8–12')}
        >
          Ages 8 to 12
        </button>
      </div>

      {/* Editorial Timeline Listing */}
      <div className="workshop-editorial-list">
        {filteredWorkshops.map((ws) => (
          <div key={ws.id} className="workshop-editorial-item">
            <div>
              <span className="meta-label" style={{ marginBottom: '0.25rem' }}>{ws.ageGroup} &bull; {ws.price}€</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-sepia)', display: 'block' }}>{ws.displayDate}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>{ws.time}</span>
            </div>

            <div>
              <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{ws.title}</h3>
              <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: '1.6', marginBottom: '0.75rem' }}>{ws.description}</p>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-muted)' }}>
                <strong>Inspiration:</strong> {ws.inspiration} &bull; <strong>Materials:</strong> {ws.materials}
              </div>
            </div>

            <div style={{ justifySelf: 'end' }}>
              <a 
                href={`https://wa.me/34619755639?text=Hello%20Pau,%20I%20would%20like%20to%20reserve%20a%20spot%20for:%20${encodeURIComponent(ws.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-minimal"
              >
                Reserve via WhatsApp &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
