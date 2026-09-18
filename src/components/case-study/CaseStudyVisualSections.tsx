import type { CaseStudyVisualSection as CaseStudyVisualSectionData } from '../../types/content'
import { CaseStudyImage } from './CaseStudyImage'

type CaseStudyVisualSectionsProps = {
  sections?: CaseStudyVisualSectionData[]
}

export function CaseStudyVisualSections({ sections }: CaseStudyVisualSectionsProps) {
  if (!sections?.length) return null

  return <>{sections.map((section) => <section className="case-study-visual-section" aria-labelledby={`case-study-visual-${section.title.toLowerCase().replaceAll(' ', '-')}`} key={section.title}><div className="case-study-visual-section__intro"><h2 id={`case-study-visual-${section.title.toLowerCase().replaceAll(' ', '-')}`}>{section.title}</h2>{section.description ? <p>{section.description}</p> : null}</div><figure><CaseStudyImage visual={section.visual} />{section.visual.caption ? <figcaption>{section.visual.caption}</figcaption> : null}</figure></section>)}</>
}
