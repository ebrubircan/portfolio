import { Link } from 'react-router-dom'
import { caseStudies } from '../../data/caseStudies'
import type { CaseStudy } from '../../types/content'
import { ProjectImage } from './ProjectImage'

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
      {project.technologies?.length ? <ul className="project-info__tags" aria-label={`${project.title} technologies`}>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul> : null}
      {link ? <Link className="project-info__link" to={link.href}>{link.label} <span aria-hidden="true">→</span></Link> : null}
    </div>
  )
}

export function SelectedWork() {
  const logbot = caseStudies.find((project) => project.slug === 'logbot')
  const fontsheriff = caseStudies.find((project) => project.slug === 'fontsheriff')

  if (!logbot || !fontsheriff) return null

  const [logbotVisual] = logbot.visuals ?? []
  const [dashboardVisual] = fontsheriff.visuals ?? []

  return (
    <section className="selected-work" aria-labelledby="selected-work-title">
      <div className="page-container">
        <header className="selected-work__header">
          <p className="selected-work__label">Selected Work</p>
          <h1 id="selected-work-title">A few products I’ve built and worked on.</h1>
        </header>

        <article className="selected-work__project selected-work__project--logbot" aria-labelledby="logbot-title">
          <div className="selected-work__project-visuals">
            {logbotVisual ? <figure className="project-visual project-visual--logbot"><ProjectImage visual={logbotVisual} />{logbotVisual.caption ? <figcaption>{logbotVisual.caption}</figcaption> : null}</figure> : null}
          </div>
          <ProjectInfo project={logbot} />
        </article>

        <article className="selected-work__project selected-work__project--fontsheriff" aria-labelledby="fontsheriff-title">
          <div className="selected-work__project-visuals selected-work__fontsheriff-visuals">
            {dashboardVisual ? <figure className="project-visual project-visual--dashboard"><ProjectImage visual={dashboardVisual} /></figure> : null}
          </div>
          <ProjectInfo project={fontsheriff} />
        </article>
      </div>
    </section>
  )
}
