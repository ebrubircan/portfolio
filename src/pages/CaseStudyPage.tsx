import { useParams } from 'react-router-dom'
import { getCaseStudyBySlug } from '../utils/content'

export function CaseStudyPage() {
  const { slug } = useParams()
  const caseStudy = slug ? getCaseStudyBySlug(slug) : undefined
  if (!caseStudy) return <section className="page-container page-placeholder" aria-labelledby="work-not-found-title"><div className="page-placeholder__content"><h1 id="work-not-found-title" className="font-display text-5xl leading-none tracking-tight">Work not found</h1></div></section>

  return <section className="page-container page-placeholder" aria-labelledby="case-study-title"><div className="page-placeholder__content"><p className="text-sm font-bold uppercase tracking-[0.08em] text-accent">{caseStudy.category}</p><h1 id="case-study-title" className="mt-3 font-display text-5xl leading-none tracking-tight sm:text-6xl">{caseStudy.title}</h1><p className="mt-4 text-text-secondary">Case study content will be added in a later stage.</p></div></section>
}
