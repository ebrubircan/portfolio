import { createBrowserRouter } from 'react-router-dom'
import { AppShell } from '../layouts/AppShell'
import { AboutPage } from '../pages/AboutPage'
import { CaseStudyPage } from '../pages/CaseStudyPage'
import { ContactPage } from '../pages/ContactPage'
import { ExperiencePage } from '../pages/ExperiencePage'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { WorkPage } from '../pages/WorkPage'

export const router = createBrowserRouter([{ element: <AppShell />, children: [
  { index: true, element: <HomePage /> },
  { path: 'work', element: <WorkPage /> },
  { path: 'work/logbot', element: <CaseStudyPage /> },
  { path: 'work/fontsheriff', element: <CaseStudyPage /> },
  { path: 'experience', element: <ExperiencePage /> },
  { path: 'about', element: <AboutPage /> },
  { path: 'contact', element: <ContactPage /> },
  { path: '*', element: <NotFoundPage /> },
] }])
