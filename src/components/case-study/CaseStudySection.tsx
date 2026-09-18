type CaseStudySectionProps = {
  title: string
  content?: string | string[]
  list?: boolean
}

export function CaseStudySection({ title, content, list = false }: CaseStudySectionProps) {
  const paragraphs = Array.isArray(content) ? content : content ? [content] : []
  if (!paragraphs.length) return null

  return <section className="case-study-section" aria-labelledby={`case-study-${title.toLowerCase().replaceAll(' ', '-')}`}><h2 id={`case-study-${title.toLowerCase().replaceAll(' ', '-')}`}>{title}</h2><div className="case-study-section__content">{list ? <ul>{paragraphs.map((paragraph) => <li key={paragraph}>{paragraph}</li>)}</ul> : paragraphs.map((paragraph, index) => <p key={`${title}-${index}`}>{paragraph}</p>)}</div></section>
}
