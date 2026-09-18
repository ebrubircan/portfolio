import { Link } from 'react-router-dom'
import type { CaseStudy } from '../../types/content'

type CaseStudyNavigationProps = {
  previous?: CaseStudy
  next?: CaseStudy
}

function getProjectPath(caseStudy: CaseStudy) {
  return caseStudy.links?.[0]?.href ?? `/projects/${caseStudy.slug}`
}

export function CaseStudyNavigation({ previous, next }: CaseStudyNavigationProps) {
  return (
    <nav aria-label="Project navigation" className="case-study-navigation">
      <div>{previous ? <Link to={getProjectPath(previous)}>Previous project ←</Link> : null}</div>
      <div>{next ? <Link to={getProjectPath(next)}>Next project →</Link> : null}</div>
    </nav>
  )
}
