import fontsheriffDashboard from '../assets/images/fontsheriff-dashboard-overview.png'
import fontsheriffScan from '../assets/images/fontsheriff-single-scan.png'
import logbotAnalysis from '../assets/images/logbot-deeptrace-analysis.png'
import type { CaseStudy } from '../types/content'

export const caseStudies: CaseStudy[] = [
  {
    slug: 'logbot',
    title: 'LogBot',
    number: '01',
    projectType: 'AI / Backend / Search',
    category: 'Selected Work',
    featured: true,
    summary: 'An AI-powered hybrid log analysis assistant combining RAG and MCP for interpreting application logs.',
    technologies: ['RAG', 'MCP', 'Elasticsearch', 'PostgreSQL', 'Python', 'Django'],
    visuals: [{ src: logbotAnalysis, alt: 'DeepTrace log analysis result showing AI-generated insights from application logs', caption: 'DeepTrace / log analysis workflow' }],
    links: [{ label: 'View case study', href: '/work/logbot' }],
  },
  {
    slug: 'fontsheriff',
    title: 'FontSheriff',
    number: '02',
    projectType: 'Full Stack / Font Licensing',
    category: 'Selected Work',
    featured: true,
    summary: 'A font license management application that scans domains, detects font usage and license violations, and presents the results in a structured interface.',
    technologies: ['React', 'TypeScript', 'Django', 'REST API', 'PostgreSQL'],
    visuals: [
      { src: fontsheriffDashboard, alt: 'FontSheriff dashboard showing domain scan statistics and detected font license violations' },
      { src: fontsheriffScan, alt: 'FontSheriff single URL scan showing detected font usage and license violations' },
    ],
    links: [{ label: 'View case study', href: '/work/fontsheriff' }],
  },
]
