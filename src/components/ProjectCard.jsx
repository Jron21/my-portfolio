import React from 'react'

export default function ProjectCard({ project, index }) {
  return (
    <article className={`project-card ${index === 1 ? 'project-card--featured' : ''}`}>
      <div className="project-header">
        <p className="project-label"><span>0{index}</span> {project.role || 'Project'}</p>
        <h3>{project.title}</h3>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-tags">
        {project.tech.map((item) => (
          <span key={item} className="project-tag">{item}</span>
        ))}
      </div>
    </article>
  )
}
