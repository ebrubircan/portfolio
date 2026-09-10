export type AssetReference = { src: string; alt: string; caption?: string }
export type ProjectLink = { label: string; href: string }
export type CaseStudy = { slug: string; title: string; category?: string; featured?: boolean; summary?: string; overview?: string; problem?: string; goal?: string; role?: string; approach?: string[]; solution?: string; architecture?: { title?: string; description?: string; items?: string[] }; challenges?: string[]; outcome?: string; technologies?: string[]; visuals?: AssetReference[]; links?: ProjectLink[] }
export type Experience = { company: string; role: string; period?: string; contribution?: string; visual?: AssetReference }
export type AdditionalProject = { title: string; kind: 'Graduation' | 'Bootcamp' | 'Personal'; summary?: string; technologies?: string[]; visual?: AssetReference; links?: ProjectLink[] }
export type Capability = { title: string; description?: string }
export type SiteDetails = { name: string; role: string; email?: string; links?: ProjectLink[]; resumeUrl?: string }
