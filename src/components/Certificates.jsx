import React from 'react'
import { certificates } from '../data/certificates'

export default function Certificates() {
  return (
    <section id="certificates" className="section-break section-break--cream">
      <div className="layout-width certificates-section">
        <div className="section-heading">
          <span className="section-label">05 / Learning</span>
          <h2>Courses &amp; certificates</h2>
        </div>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <article key={cert} className="certificate-card">
              <span className="certificate-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{cert}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
