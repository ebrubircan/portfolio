import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return <section className="page-container page-placeholder" aria-labelledby="not-found-title"><div className="page-placeholder__content"><p className="text-sm font-bold uppercase tracking-[0.08em] text-accent">404</p><h1 id="not-found-title" className="mt-3 font-display text-5xl leading-none tracking-tight sm:text-6xl">Page not found</h1><Link className="mt-6 inline-flex text-sm font-bold text-accent hover:underline" to="/">Return home →</Link></div></section>
}
