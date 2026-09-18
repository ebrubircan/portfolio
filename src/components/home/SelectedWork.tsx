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
  const deeptrace = caseStudies.find((project) => project.slug === 'deeptrace')
  const fontsheriff = caseStudies.find((project) => project.slug === 'fontsheriff')
  const kiosk = caseStudies.find((project) => project.slug === 'interactive-faculty-kiosk')

  if (!deeptrace || !fontsheriff || !kiosk) return null

  const [deeptraceVisual] = deeptrace.visuals ?? []
  const [dashboardVisual] = fontsheriff.visuals ?? []
  const [kioskVisual] = kiosk.visuals ?? []

  return (
    <section className="selected-work" aria-labelledby="selected-work-title">
      <div className="page-container">
        <header className="selected-work__header">
          <p className="selected-work__label">Selected Projects</p>
          <h1 id="selected-work-title">A few projects I’ve built and worked on.</h1>
        </header>

        <article className="selected-work__project selected-work__project--deeptrace" aria-labelledby="deeptrace-title">
          <div className="selected-work__project-visuals">
            {deeptraceVisual ? <figure className="project-visual project-visual--deeptrace"><ProjectImage visual={deeptraceVisual} />{deeptraceVisual.caption ? <figcaption>{deeptraceVisual.caption}</figcaption> : null}</figure> : null}
          </div>
          <ProjectInfo project={deeptrace} />
        </article>

        <article className="selected-work__project selected-work__project--fontsheriff" aria-labelledby="fontsheriff-title">
          <div className="selected-work__project-visuals selected-work__fontsheriff-visuals">
            {dashboardVisual ? <figure className="project-visual project-visual--dashboard"><ProjectImage visual={dashboardVisual} />{dashboardVisual.caption ? <figcaption>{dashboardVisual.caption}</figcaption> : null}</figure> : null}
          </div>
          <ProjectInfo project={fontsheriff} />
        </article>

        <article className="selected-work__project selected-work__project--kiosk" aria-labelledby="kiosk-title">
          <div className="selected-work__project-visuals">
            {kioskVisual ? <figure className="project-visual project-visual--kiosk"><ProjectImage visual={kioskVisual} />{kioskVisual.caption ? <figcaption>{kioskVisual.caption}</figcaption> : null}</figure> : null}
          </div>
          <ProjectInfo project={kiosk} />
        </article>
      </div>
    </section>
  )
}
