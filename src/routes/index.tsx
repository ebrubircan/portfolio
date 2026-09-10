import { createBrowserRouter } from 'react-router-dom'
import { AppShell } from '../layouts/AppShell'
import { AboutPage } from '../pages/AboutPage'
import { CaseStudyPage } from '../pages/CaseStudyPage'
import { ContactPage } from '../pages/ContactPage'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'

export const router = createBrowserRouter([{ element: <AppShell />, children: [
  { index: true, element: <HomePage /> },
  { path: 'work/logbot', element: <CaseStudyPage /> },
  { path: 'work/fontsheriff', element: <CaseStudyPage /> },
  { path: 'about', element: <AboutPage /> },
  { path: 'contact', element: <ContactPage /> },
  { path: '*', element: <NotFoundPage /> },
] }])
