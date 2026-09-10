import { Outlet } from 'react-router-dom'
import { SiteFooter } from '../components/navigation/SiteFooter'
import { SiteHeader } from '../components/navigation/SiteHeader'

export function AppShell() {
  return <div className="flex min-h-screen flex-col bg-background text-text-primary"><SiteHeader /><main className="flex-1"><Outlet /></main><SiteFooter /></div>
}
