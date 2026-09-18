import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AppShell } from '../layouts/AppShell'
import { AboutPage } from '../pages/AboutPage'
import { CaseStudyPage } from '../pages/CaseStudyPage'
import { ContactPage } from '../pages/ContactPage'
import { ExperiencePage } from '../pages/ExperiencePage'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ProjectsPage } from '../pages/ProjectsPage'

export const router = createBrowserRouter([{ element: <AppShell />, children: [
  { index: true, element: <HomePage /> },
  { path: 'projects', element: <ProjectsPage /> },
  { path: 'projects/kiosk', element: <Navigate replace to="/projects/interactive-faculty-kiosk" /> },
  { path: 'projects/interactive-library-kiosk', element: <Navigate replace to="/projects/interactive-faculty-kiosk" /> },
  { path: 'projects/:slug', element: <CaseStudyPage /> },
  { path: 'work', element: <Navigate replace to="/projects" /> },
  { path: 'work/fontsheriff', element: <Navigate replace to="/projects/fontsheriff" /> },
  { path: 'work/kiosk', element: <Navigate replace to="/projects/interactive-faculty-kiosk" /> },
  { path: 'experience', element: <ExperiencePage /> },
  { path: 'about', element: <AboutPage /> },
  { path: 'contact', element: <ContactPage /> },
  { path: '*', element: <NotFoundPage /> },
] }])
