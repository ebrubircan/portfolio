import { site } from '../../data/site'

export function SiteFooter() {
  return <footer className="border-t border-border"><div className="page-container py-6 text-sm text-text-secondary">© {new Date().getFullYear()} {site.name}</div></footer>
}
