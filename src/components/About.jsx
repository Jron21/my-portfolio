import React from 'react'

export default function About() {
  return (
    <section id="about" className="section-break section-break--cream">
      <div className="layout-width about-section">
        <div className="about-intro">
          <span className="section-label">01 / About</span>
          <h2>How I got here.</h2>
          <p>
            I’m a Computer Science graduate with hands-on experience in programming,
            web development, machine learning, and computer hardware servicing through
            academic and personal projects. I enjoy building software with modern tools
            and technologies, and I’m especially passionate about AI and software
            development. I’m eager to contribute to real-world projects while continuing
            to learn and grow as a developer.
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
