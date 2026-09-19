import { Link } from 'react-router-dom'
import { caseStudies } from '../../data/caseStudies'
import type { CaseStudy } from '../../types/content'

function ProjectInfo({ project }: { project: CaseStudy }) {
  const link = project.links?.[0]

  return (
    <div className="project-info">
      <div className="project-info__meta">
        {project.number ? <span>{project.number}</span> : null}
        {project.projectType ? <span>{project.projectType}</span> : null}
      </div>
      <h3 id={`${project.slug}-title`}>{project.title}</h3>
      {project.summary ? <p className="project-info__summary">{project.summary}</p> : null}
      {project.technologies?.length ? <p className="project-index__tags" aria-label={`${project.title} technologies`}>{project.technologies.slice(0, 4).join(' · ')}</p> : null}
      {link ? <Link className="project-info__link" to={link.href}>{link.label} <span aria-hidden="true">→</span></Link> : null}
    </div>
  )
}

export function SelectedWork() {
  return (
    <section className="selected-work" aria-labelledby="selected-work-title">
      <div className="page-container">
        <header className="selected-work__header">
          <p className="selected-work__label">Selected Projects</p>
          <h1 id="selected-work-title">Projects</h1>
        </header>
        <div className="project-index">{caseStudies.map((project) => <article className="project-index__item" aria-labelledby={`${project.slug}-title`} key={project.slug}><ProjectInfo project={project} /></article>)}</div>
      </div>
    </section>
  )
}
