import React from 'react'

export default function About() {
  return (
    <section id="about" className="section-break section-break--cream">
      <div className="layout-width about-section">
        <div className="about-intro">
          <span className="section-label">01 / About</span>
          <h2>How I got here.</h2>
          <p>
            I studied Intelligent Systems and led the mobile development for my thesis:
            a Flutter app that uses a TensorFlow Lite model to recognize skin diseases
            offline. I also built a Discord bot for RSS monitoring and translation.
          </p>
        </div>

        <div className="about-notes">
          <p><span>Education</span> BS Computer Science <small>Intelligent Systems</small></p>
          <p><span>Experience</span> Lead Mobile Application Developer <small>Undergraduate thesis · 2025</small></p>
          <p><span>Currently</span> Open to entry-level software developer roles</p>
        </div>
      </div>
    </section>
  )
}
