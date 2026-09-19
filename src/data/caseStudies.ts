import fontsheriffDashboard from '../assets/images/fontsheriff-dashboard-overview.png'
import fontsheriffScan from '../assets/images/fontsheriff-single-scan.png'
import kioskGraduationProject from '../assets/images/kiosk-graduation-project.jpg'
import kioskSponsorshipMeeting from '../assets/images/kiosk-sponsorship-meeting.jpg'
import deeptraceAnalysis from '../assets/images/deeptrace-analysis.png'
import type { CaseStudy } from '../types/content'

export const caseStudies: CaseStudy[] = [
  {
    slug: 'deeptrace',
    title: 'DeepTrace',
    number: '01',
    projectType: 'AI / Backend / Search',
    category: 'Selected Projects',
    featured: true,
    summary: 'An AI-powered hybrid log analysis assistant combining RAG and MCP for interpreting application logs.',
    overview: 'DeepTrace is a hybrid chatbot system that analyzes application logs in Elasticsearch and responds to natural-language queries through Microsoft Teams.',
    contributions: ['Designed and developed the AI-powered assistant for investigating application logs.', 'Worked across Django services, Elasticsearch, RAG and MCP to support both direct questions and higher-level log interpretation.', 'Integrated the assistant with Microsoft Teams for a familiar conversational entry point.'],
    features: ['Intent-aware handling of direct log questions and interpretive analysis', 'Hybrid retrieval across structured logs and relevant context', 'Natural-language responses supported by LLM-based analysis'],
    outcome: 'The system combines deterministic log queries with retrieval-augmented analysis according to the intent of each request.',
    technologies: ['RAG', 'MCP', 'Elasticsearch', 'PostgreSQL', 'pgvector', 'Python', 'Django', 'Ollama'],
    visuals: [{ src: deeptraceAnalysis, alt: 'DeepTrace log analysis assistant showing an AI-generated log analysis response', caption: 'DeepTrace / log analysis workflow', previewFit: 'cover', previewPosition: 'center 55%' }],
    links: [{ label: 'View case study', href: '/projects/deeptrace' }],
  },
  {
    slug: 'fontsheriff',
    title: 'FontSheriff',
    number: '02',
    projectType: 'Full Stack / Font Licensing',
    category: 'Selected Projects',
    featured: true,
    summary: 'A font license management application that scans domains, detects font usage and license violations, and presents the results in a structured interface.',
    overview: 'FontSheriff is a font license management application built to make font usage across a domain visible and easier to assess.',
    contributions: ['Contributed to a full-stack product for reviewing font usage and potential license violations across domains.', 'Worked on structured product flows for scan results, dashboards, reporting and export.', 'Supported maintainable frontend and API integration work within an enterprise compliance-focused application.'],
    features: ['Domain scans that surface font usage across a selected site', 'Structured views for detected fonts and potential license violations', 'Dashboards, reporting and export tools for reviewing results'],
    outcome: 'FontSheriff brings domain scanning, font detection and structured result review into a single workflow for examining potential license violations.',
    technologies: ['React', 'TypeScript', 'Django', 'REST API', 'PostgreSQL'],
    visuals: [
      { src: fontsheriffDashboard, alt: 'FontSheriff dashboard showing domain, font and license violation metrics', caption: 'FontSheriff / license overview', previewFit: 'cover', previewPosition: 'center' },
      { src: fontsheriffScan, alt: 'FontSheriff single URL scan showing detected font usage and license violations', caption: 'FontSheriff / single URL scan' },
    ],
    gallery: [{ src: fontsheriffScan, alt: 'FontSheriff single URL scan showing detected font usage and license violations', caption: 'FontSheriff / domain scan workflow', context: 'A focused scan view for reviewing detected font usage and potential license violations.', previewFit: 'cover', previewPosition: 'center' }],
    links: [{ label: 'View case study', href: '/projects/fontsheriff' }],
  },
  {
    slug: 'interactive-faculty-kiosk',
    title: 'Interactive Faculty Kiosk',
    number: '03',
    projectType: 'Graduation Project',
    category: 'Selected Projects',
    featured: true,
    summary: 'An interactive faculty information kiosk developed as a university graduation project.',
    overview: 'The project was designed as an interactive information point inside the faculty, helping students and staff access different types of everyday academic and campus information from a single interface.',
    contributions: ['Developed the software experience for a faculty information point.', 'Took part in sponsorship outreach, sourcing physical components and kiosk assembly.', 'Contributed to bringing the finished system into real-world use inside the faculty.'],
    features: ['Faculty and school navigation', 'Classroom and instructor locations', 'Faculty announcements, surveys and real-time announcements', 'Daily cafeteria menu and campus information'],
    outcome: 'With no initial budget, the team secured sponsors, coordinated with companies for physical components and assembled the kiosk alongside the software work. The system remains in active use within the faculty and received a certificate of appreciation from the deanery.',
    technologies: ['C#', '.NET'],
    visuals: [{ src: kioskGraduationProject, alt: 'Ebru Bircan standing beside an interactive faculty kiosk developed as her graduation project', caption: 'Interactive faculty kiosk / graduation project', previewFit: 'cover', previewPosition: 'center' }],
    gallery: [
      { src: kioskSponsorshipMeeting, alt: 'Project sponsorship meeting with faculty and industry partners for the interactive faculty kiosk', caption: 'Interactive Faculty Kiosk / sponsorship meeting', previewFit: 'cover', previewPosition: 'center' },
    ],
    links: [{ label: 'View case study', href: '/projects/interactive-faculty-kiosk' }],
    certificateLink: { label: 'View appreciation certificate', href: '/certifications#kiosk' },
  },
]
