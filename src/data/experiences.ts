import type { Experience, StartupExperience } from '../types/content'

export const experiences: Experience[] = [
  {
    company: 'Doğuş Teknoloji',
    role: 'AI / Full-Stack Developer Intern',
    period: '06/2025 — 04/2026',
    location: 'Istanbul, Turkey',
    contentBlocks: [
      { label: 'Enterprise applications', description: 'Selected as one of the top two applicants from more than 10,000 for the internship program, I worked on enterprise web applications with React, TypeScript and Tailwind. The frontend work included modular structures with Context API and React Router, alongside Azure AD authentication and role-based access flows.' },
      { label: 'AI and backend systems', description: 'I designed and developed an AI-powered log analysis assistant with Python, Django and Elasticsearch. Its RAG and MCP architecture used Llama 3 and pgvector to combine semantic retrieval, vector-based retrieval and structured log analysis, with Microsoft Teams integration.' },
      { label: 'Compliance-focused product work', description: 'I also contributed to FontSheriff, an enterprise application for identifying unauthorized font usage. The work covered Azure AD SSO, analytics dashboards, reporting and export tools, API integration, testing, documentation and maintainable frontend architecture.' },
      { label: 'Quality and delivery', description: 'The role included CI/CD pipelines, automated alerts and Jest testing with 85%+ coverage, as well as code reviews, documentation and maintainable architecture practices. I worked in cross-functional Agile collaboration across development, product and operational contexts.' },
    ],
    highlights: [
      { title: 'DeepTrace', description: 'AI-powered log analysis assistant', href: '/projects/deeptrace', linkLabel: 'View project →' },
      { title: 'FontSheriff', description: 'Font license management system', href: '/projects/fontsheriff', linkLabel: 'View project →' },
    ],
  },
  {
    company: 'Nesine',
    role: 'Frontend Developer Intern',
    period: '07/2024 — 12/2024',
    location: 'Istanbul, Turkey',
    contentBlocks: [
      { label: 'Production frontend', description: 'Selected as one of the top three applicants from more than 4,500, I contributed to more than 50 production-ready React features and interfaces connected to real-time betting data.' },
      { label: 'Interface quality', description: 'The work focused on responsive UI components that remained clear under changing data, while addressing performance optimization, SEO and accessibility in the frontend.' },
      { label: 'Product collaboration', description: 'I worked in an Agile environment with design and product collaborators, using Figma as part of the delivery process. I also introduced unit tests for components that had previously been untested.' },
    ],
  },
  {
    company: 'Arteria Ventures — Faladdin',
    role: 'Full-Stack Developer Intern',
    period: '08/2023 — 04/2024',
    location: 'Istanbul, Turkey',
    contentBlocks: [
      { label: 'Backend foundations', description: 'I worked on backend features with Laravel and MySQL, contributing to clean and maintainable application architecture within a full-stack development environment.' },
      { label: 'Funnel product context', description: 'The work also connected to a web funnel system and user acquisition metrics, giving the backend and frontend work a clear product-driven context.' },
      { label: 'Across the stack', description: 'Alongside backend work, I collaborated across responsive web design and Vue.js layers, building an understanding of how full-stack decisions support the product experience.' },
    ],
  },
]

export const startupExperience: StartupExperience = {
  label: 'Startup experience',
  company: 'Phoyer',
  description: 'An early-stage startup experience where I worked as part of a team and participated in the ÜNLÜ & Co Women Technology Entrepreneurs Academy. The team reached the finalist stage.',
  href: 'https://www.unluco.com/basin-odasi/basin-bultenleri/unlu-co-kadin-teknoloji-girisimcileri-akademisi-ilk-mezunlarini-verdi/',
  linkLabel: 'View program →',
}
