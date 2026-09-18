import type { AssetReference } from '../../types/content'
import { CaseStudyImage } from './CaseStudyImage'

type CaseStudyGalleryProps = {
  visuals?: AssetReference[]
}

export function CaseStudyGallery({ visuals }: CaseStudyGalleryProps) {
  if (!visuals?.length) return null

  return (
    <section className="case-study-gallery" aria-labelledby="case-study-visuals-title">
      <h2 id="case-study-visuals-title">Visuals</h2>
      <div className="case-study-gallery__grid">
        {visuals.map((visual) => <figure key={visual.src} className="case-study-gallery__item"><CaseStudyImage visual={visual} />{visual.caption ? <figcaption>{visual.caption}</figcaption> : null}{visual.context ? <p>{visual.context}</p> : null}</figure>)}
      </div>
    </section>
  )
}
