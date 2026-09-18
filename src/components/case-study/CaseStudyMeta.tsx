type CaseStudyMetaProps = {
  number?: string
  category?: string
  projectType?: string
  technologies?: string[]
  showDetails?: boolean
  showTechnologies?: boolean
}

export function CaseStudyMeta({ number, category, projectType, technologies, showDetails = true, showTechnologies = true }: CaseStudyMetaProps) {
  const details = [number, category, projectType].filter(Boolean)

  return (
    <div className="case-study-meta">
      {showDetails && details.length ? <p className="case-study-meta__details">{details.join(' / ')}</p> : null}
      {showTechnologies && technologies?.length ? <ul aria-label="Project technologies" className="case-study-meta__tags">{technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul> : null}
    </div>
  )
}
