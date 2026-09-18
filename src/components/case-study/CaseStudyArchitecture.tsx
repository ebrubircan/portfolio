import type { CaseStudyArchitecture as CaseStudyArchitectureData } from '../../types/content'

type CaseStudyArchitectureProps = {
  architecture?: CaseStudyArchitectureData
}

function formatPathLabel(label: string) {
  return `${label.slice(0, 1)}${label.slice(1).toLowerCase()}`
}

export function CaseStudyArchitecture({ architecture }: CaseStudyArchitectureProps) {
  if (!architecture?.items?.length && !architecture?.paths?.length) return null

  return (
    <section className="case-study-architecture" aria-labelledby="case-study-architecture-title">
      <div className="case-study-architecture__heading"><h2 id="case-study-architecture-title">{architecture.title ?? 'Architecture / Process'}</h2>{architecture.description ? <p>{architecture.description}</p> : null}</div>
      {architecture.items?.length ? <ol className="case-study-architecture__diagram">{architecture.items.map((item) => <li key={item}>{item}</li>)}</ol> : null}
      {architecture.paths?.length ? <div className="case-study-architecture__paths">{architecture.paths.map((path) => <section key={path.label}><h3>{formatPathLabel(path.label)}</h3><ol>{path.items.map((item) => <li key={item}>{item}</li>)}</ol></section>)}</div> : null}
      {architecture.fallback ? <p className="case-study-architecture__fallback">{architecture.fallback}</p> : null}
    </section>
  )
}
