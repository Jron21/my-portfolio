import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import Button from './Button'
import heroImage from '../assets/profileimage.png'

export default function Hero() {
  return (
    <section id="home" className="hero-banner">
      <div className="layout-width hero-grid">
        <div className="hero-copy-panel">
          <p className="hero-eyebrow">Jay Ron Driz <span>/</span> Software developer</p>
          <h1 className="hero-title">
            Software with
            <span>a clear job to do.</span>
          </h1>
          <p className="hero-copy">
            I’m a computer science graduate. I’ve built an offline-capable Flutter thesis
            app and a Discord bot for RSS monitoring and translation.
          </p>

          <div className="hero-actions">
            <Button href="#projects" variant="primary">Selected work <ArrowUpRight size={17} /></Button>
            <Button href="#contact" variant="secondary">Get in touch</Button>
          </div>
          <p className="hero-location">Based in the Philippines <span>·</span> Open to entry-level roles</p>
        </div>

        <div className="hero-visual-panel">
          <div className="hero-portrait">
            <div className="portrait-frame">
              <img src={heroImage} alt="Portrait of Jay Ron Driz" className="hero-image" />
            </div>
            <div className="hero-card-footer">
              <div>
                <p className="panel-label">Jay Ron Driz</p>
                <p className="panel-copy">Computer Science · Intelligent Systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
