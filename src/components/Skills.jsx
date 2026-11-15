import React from 'react'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section-break section-break--light">
      <div className="layout-width skills-section">
        <div className="section-heading">
          <span className="section-label">03 / Toolkit</span>

          <h2>Tools I’ve used across these projects.</h2>

          <p>
            Languages, libraries, and frameworks from my coursework and hands-on projects.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((category) => (
            <article key={category.category} className="skill-card">
              <h3>{category.category}</h3>
              <div className="skill-tags">
                {category.items.map((item) => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
