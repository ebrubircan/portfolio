import { Link } from 'react-router-dom'
import { CaseStudyImage } from '../components/case-study/CaseStudyImage'
import { experiences, startupExperience } from '../data/experiences'

export function ExperiencePage() {
  return (
    <main className="page-container experience-page" aria-labelledby="experience-title">
      <header className="experience-page__header">
        <h1 id="experience-title" className="experience-page__title">Experience</h1>
      </header>
      <div className="experience-page__list">
        {experiences.map((experience, index) => <article className="experience-entry" id={experience.company.toLowerCase()} key={experience.company}>
          <p aria-hidden="true" className="experience-entry__number">{String(index + 1).padStart(2, '0')}</p>
          <div className="experience-entry__identity">
            <h2>{experience.company}</h2>
            <p className="experience-entry__role">{experience.role}</p>
            <div className="experience-entry__metadata"><p>{experience.period}</p><p>{experience.location}</p></div>
          </div>
          <div className="experience-entry__content">
            <div className="experience-entry__blocks">{experience.contentBlocks.map((block) => <section key={block.label}><h3>{block.label}</h3><p>{block.description}</p></section>)}</div>
            {experience.visual ? <figure className="experience-entry__visual"><CaseStudyImage visual={experience.visual} />{experience.visual.caption ? <figcaption>{experience.visual.caption}</figcaption> : null}</figure> : null}
            {experience.certificateLink ? <Link className="experience-entry__certificate-link" to={experience.certificateLink.href}>{experience.certificateLink.label} <span aria-hidden="true">→</span></Link> : null}
            {experience.highlights?.length ? <aside className="experience-entry__highlights" aria-label={`${experience.company} selected work`}>
              <p className="experience-entry__highlights-label">Selected work</p>
              <div>{experience.highlights.map((highlight) => <section key={highlight.title}><h3>{highlight.title}</h3><p>{highlight.description}</p><Link to={highlight.href}>{highlight.linkLabel}</Link></section>)}</div>
            </aside> : null}
          </div>
        </article>)}
      </div>
      <section className="startup-experience" aria-labelledby="startup-experience-title">
        <p aria-hidden="true" className="experience-entry__number startup-experience__number">04</p>
        <div className="startup-experience__identity"><p className="editorial-page__label">{startupExperience.label}</p><h2 id="startup-experience-title">{startupExperience.company}</h2></div>
        <div className="startup-experience__content"><p>{startupExperience.description}</p>{startupExperience.href && startupExperience.linkLabel ? <a href={startupExperience.href} rel="noreferrer" target="_blank">{startupExperience.linkLabel}</a> : null}{startupExperience.visual ? <figure className="startup-experience__visual"><CaseStudyImage visual={startupExperience.visual} />{startupExperience.visual.caption ? <figcaption>{startupExperience.visual.caption}</figcaption> : null}</figure> : null}</div>
      </section>
    </main>
  )
}
