import { Link } from 'react-router-dom'
import type { ProjectLink } from '../../types/content'

type CaseStudySectionProps = {
  title: string
  content?: string | string[]
  list?: boolean
  link?: ProjectLink
}

export function CaseStudySection({ title, content, list = false, link }: CaseStudySectionProps) {
  const paragraphs = Array.isArray(content) ? content : content ? [content] : []
  if (!paragraphs.length) return null

  return <section className="case-study-section" aria-labelledby={`case-study-${title.toLowerCase().replaceAll(' ', '-')}`}><h2 id={`case-study-${title.toLowerCase().replaceAll(' ', '-')}`}>{title}</h2><div className="case-study-section__content">{list ? <ul>{paragraphs.map((paragraph) => <li key={paragraph}>{paragraph}</li>)}</ul> : paragraphs.map((paragraph, index) => <p key={`${title}-${index}`}>{paragraph}</p>)}{link ? <Link className="case-study-section__link" to={link.href}>{link.label} <span aria-hidden="true">→</span></Link> : null}</div></section>
}
