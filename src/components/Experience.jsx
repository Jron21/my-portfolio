import React from 'react'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section-break section-break--cream">
      <div className="layout-width experience-section">
        <div className="section-heading">
          <span className="section-label">04 / Experience</span>
          <h2>Work, study, and projects that got me here.</h2>
          <p>
            A mix of internship work, my undergraduate thesis, and a personal project.
          </p>
        </div>

        <div className="experience-grid">
          {experience.map((item) => (
            <article key={`${item.title}-${item.company}`} className="experience-card">
              <div className="experience-meta">
                <span className="experience-year">{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.company}</p>
                </div>
              </div>
              <ul className="experience-list">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
