import type { CaseStudy } from '../../types/content'
import { CaseStudyImage } from './CaseStudyImage'
import { CaseStudyMeta } from './CaseStudyMeta'

type CaseStudyHeroProps = {
  caseStudy: CaseStudy
}

export function CaseStudyHero({ caseStudy }: CaseStudyHeroProps) {
  const heroVisual = caseStudy.visuals?.[0]

  return (
    <header className={`case-study-hero ${heroVisual ? 'case-study-hero--with-image' : ''}`}>
      <div className="case-study-hero__content">
        <CaseStudyMeta category={caseStudy.projectType ?? caseStudy.category} number={caseStudy.number} showTechnologies={false} />
        <h1 id="case-study-title">{caseStudy.title}</h1>
        {caseStudy.summary ? <p className="case-study-hero__summary">{caseStudy.summary}</p> : null}
        <CaseStudyMeta technologies={caseStudy.technologies} showDetails={false} />
      </div>
      {heroVisual ? <figure className="case-study-hero__visual"><CaseStudyImage visual={heroVisual} />{heroVisual.caption ? <figcaption>{heroVisual.caption}</figcaption> : null}</figure> : null}
    </header>
  )
}
