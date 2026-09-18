import { useParams } from 'react-router-dom'
import { CaseStudyArchitecture } from '../components/case-study/CaseStudyArchitecture'
import { CaseStudyGallery } from '../components/case-study/CaseStudyGallery'
import { CaseStudyFeatureList } from '../components/case-study/CaseStudyFeatureList'
import { CaseStudyHero } from '../components/case-study/CaseStudyHero'
import { CaseStudyNavigation } from '../components/case-study/CaseStudyNavigation'
import { CaseStudySection } from '../components/case-study/CaseStudySection'
import { CaseStudyTechnicalDetails } from '../components/case-study/CaseStudyTechnicalDetails'
import { CaseStudyVisualSections } from '../components/case-study/CaseStudyVisualSections'
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
          <CaseStudySection content={caseStudy.problem} title={caseStudyCopy.sections.problem} />
          <CaseStudySection content={caseStudy.goal} title={caseStudyCopy.sections.goal} />
          <CaseStudySection content={caseStudy.approach} list title={caseStudyCopy.sections.approach} />
          <CaseStudyFeatureList features={caseStudy.features} title={caseStudyCopy.sections.kioskFeatures} />
          <CaseStudySection content={caseStudy.story} title={caseStudyCopy.sections.kioskStory} />
          <CaseStudySection content={caseStudy.contributions} list title={caseStudyCopy.sections.contributions} />
          <CaseStudySection content={caseStudy.solution} title={caseStudyCopy.sections.solution} />
          <CaseStudyArchitecture architecture={caseStudy.architecture} />
          <CaseStudyTechnicalDetails details={caseStudy.technicalDetails} title={caseStudyCopy.sections.technicalDepth} />
          <CaseStudySection content={caseStudy.challenges} title={caseStudyCopy.sections.challenges} />
          <CaseStudySection content={caseStudy.outcome} title={caseStudyCopy.sections.outcome} />
          <CaseStudyVisualSections sections={caseStudy.visualSections} />
          <CaseStudyGallery visuals={caseStudy.gallery} />
        </div>
        <CaseStudyNavigation next={next} previous={previous} />
      </div>
    </article>
  )
}
