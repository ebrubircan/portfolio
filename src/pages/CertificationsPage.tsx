import { Link } from 'react-router-dom'
import { CaseStudyImage } from '../components/case-study/CaseStudyImage'
import { certifications } from '../data/certifications'

export function CertificationsPage() {
  return (
    <main className="page-container certifications-page" aria-labelledby="certifications-title">
      <header className="certifications-page__header">
        <p>Certifications</p>
        <h1 id="certifications-title">Certifications</h1>
      </header>

      <div className="certifications-page__list">
        {certifications.map((certification) => (
          <article className="certification-entry" id={certification.slug} key={certification.slug}>
            <div className="certification-entry__identity">
              <p>{certification.organization}</p>
              <h2>{certification.title}</h2>
            </div>
            <div className="certification-entry__content">
              <p>{certification.description}</p>
              {certification.relatedLink ? <Link to={certification.relatedLink.href}>{certification.relatedLink.label} <span aria-hidden="true">→</span></Link> : null}
            </div>
            {certification.visual ? <figure className="certification-entry__visual"><CaseStudyImage visual={certification.visual} />{certification.visual.caption ? <figcaption>{certification.visual.caption}</figcaption> : null}</figure> : null}
          </article>
        ))}
      </div>
    </main>
  )
}
