import { useParams } from 'react-router-dom'
import { CaseStudyGallery } from '../components/case-study/CaseStudyGallery'
import { CaseStudyFeatureList } from '../components/case-study/CaseStudyFeatureList'
import { CaseStudyHero } from '../components/case-study/CaseStudyHero'
import { CaseStudyNavigation } from '../components/case-study/CaseStudyNavigation'
import { CaseStudySection } from '../components/case-study/CaseStudySection'
import { caseStudyCopy } from '../data/copy'
import { caseStudies } from '../data/caseStudies'
import { getCaseStudyBySlug } from '../utils/content'

export function CaseStudyPage() {
  const { slug } = useParams()
  const caseStudy = slug ? getCaseStudyBySlug(slug) : undefined
  if (!caseStudy) return <section className="page-container page-placeholder" aria-labelledby="project-not-found-title"><div className="page-placeholder__content"><h1 id="project-not-found-title" className="font-display text-5xl leading-none tracking-tight">{caseStudyCopy.notFound}</h1></div></section>

  const currentIndex = caseStudies.findIndex((project) => project.slug === caseStudy.slug)
  const previous = currentIndex > 0 ? caseStudies[currentIndex - 1] : undefined
  const next = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : undefined

  return (
    <article className="case-study-page" aria-labelledby="case-study-title">
      <div className="page-container">
        <CaseStudyHero caseStudy={caseStudy} />
        <div className="case-study-page__content">
          <CaseStudySection content={caseStudy.overview} title={caseStudyCopy.sections.overview} />
          <CaseStudySection content={caseStudy.contributions} list title={caseStudyCopy.sections.contributions} />
          <CaseStudyFeatureList features={caseStudy.features} title={caseStudyCopy.sections.features} />
          <CaseStudySection content={caseStudy.outcome} link={caseStudy.certificateLink} title={caseStudyCopy.sections.outcome} />
          <CaseStudyGallery visuals={caseStudy.gallery} />
        </div>
        <CaseStudyNavigation next={next} previous={previous} />
      </div>
    </article>
  )
}
