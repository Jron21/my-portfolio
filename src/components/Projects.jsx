import React from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="section-break section-break--light">
      <div className="layout-width projects-section">
        <div className="section-heading">
          <span className="section-label">02 / Selected work</span>
          <h2>Two projects, each built to do something useful.</h2>
          <p>One runs its model on-device. The other keeps an eye on RSS feeds.</p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
