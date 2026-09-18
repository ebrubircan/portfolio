type CaseStudyFeatureListProps = {
  features?: string[]
  title: string
}

export function CaseStudyFeatureList({ features, title }: CaseStudyFeatureListProps) {
  if (!features?.length) return null

  return (
    <section className="case-study-feature-list" aria-labelledby="case-study-features-title">
      <h2 id="case-study-features-title">{title}</h2>
      <ul>{features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
    </section>
  )
}
