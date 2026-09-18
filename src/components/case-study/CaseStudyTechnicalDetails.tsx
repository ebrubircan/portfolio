import type { TechnicalDetail } from '../../types/content'

type CaseStudyTechnicalDetailsProps = {
  details?: TechnicalDetail[]
  title: string
}

export function CaseStudyTechnicalDetails({ details, title }: CaseStudyTechnicalDetailsProps) {
  if (!details?.length) return null

  return (
    <section className="case-study-technical-details" aria-labelledby="case-study-technical-details-title">
      <h2 id="case-study-technical-details-title">{title}</h2>
      <div className="case-study-technical-details__grid">
        {details.map((detail) => <article key={detail.title}><h3>{detail.title}</h3><p>{detail.description}</p></article>)}
      </div>
    </section>
  )
}
