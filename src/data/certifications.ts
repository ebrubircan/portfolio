import type { Certification } from '../types/content'

const imageSources = import.meta.glob<string>('../assets/images/*', {
  eager: true,
  import: 'default',
  query: '?url',
})

function getCertificateImage(filename: string) {
  return imageSources[`../assets/images/${filename}`]
}

function certificateVisual(filename: string, alt: string, caption: string) {
  const src = getCertificateImage(filename)
  return src ? { src, alt, caption, previewFit: 'cover' as const, previewPosition: 'center' } : undefined
}

export const certifications: Certification[] = [
  {
    slug: 'nesine',
    title: 'Internship Completion Certificate',
    organization: 'Nesine',
    description: 'Issued following the frontend development internship.',
    visual: certificateVisual('nesine-internship-certificate.jpg', 'Nesine internship completion certificate', 'Nesine / Internship completion certificate'),
    relatedLink: { label: 'View related experience', href: '/experience#nesine' },
  },
  {
    slug: 'kiosk',
    title: 'Appreciation Certificate',
    organization: 'Dokuz Eylul University',
    description: 'Recognition for the Interactive Faculty Kiosk graduation project.',
    visual: certificateVisual('kiosk-appreciation-certificate.jpg', 'Certificate of appreciation for the Interactive Faculty Kiosk project', 'Dokuz Eylul University / Appreciation certificate'),
    relatedLink: { label: 'View related project', href: '/projects/kiosk' },
  },
  {
    slug: 'kodluyoruz-game-development',
    title: 'Game Development Certificate',
    organization: 'Kodluyoruz',
    description: 'Certificate for the Game Development program.',
    visual: certificateVisual('kodluyoruz-game-development-certificate.jpg', 'Kodluyoruz Game Development certificate', 'Kodluyoruz / Game Development certificate'),
  },
  {
    slug: 'hubx-marketing-bootcamp',
    title: 'Marketing Bootcamp Certificate',
    organization: 'HubX',
    description: 'Certificate for the Marketing Bootcamp.',
    visual: certificateVisual('hubx-marketing-bootcamp-certificate.jpg', 'HubX Marketing Bootcamp certificate', 'HubX / Marketing Bootcamp certificate'),
  },
]
