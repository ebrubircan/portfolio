import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { site } from '../../data/site'

const navigationItems = [
  { label: 'Work', to: '/work', activePaths: ['/work', '/work/logbot', '/work/fontsheriff'] },
  { label: 'Experience', to: '/experience', activePaths: ['/experience'] },
  { label: 'About', to: '/about', activePaths: ['/about'] },
  { label: 'Contact', to: '/contact', activePaths: ['/contact'] },
]

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const location = useLocation()
  const headerRef = useRef<HTMLElement>(null)
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const updateScrollState = () => setHasScrolled(window.scrollY > 8)
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  useEffect(() => {
    const closeMenuOnDesktop = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false)
    }

    window.addEventListener('resize', closeMenuOnDesktop)
    return () => window.removeEventListener('resize', closeMenuOnDesktop)
  }, [])

  useEffect(() => {
    if (!location.hash) return

    const targetId = location.hash.slice(1)
    const animationFrame = window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })

    return () => window.cancelAnimationFrame(animationFrame)
  }, [location.hash, location.pathname])

  useEffect(() => {
    if (!isMenuOpen) return

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setIsMenuOpen(false)
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('mousedown', closeOnOutsideClick)
    firstMenuLinkRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('mousedown', closeOnOutsideClick)
    }
  }, [isMenuOpen])

  const headerClassName = hasScrolled ? 'site-header--scrolled' : ''
  const isItemActive = (activePaths: string[]) => activePaths.includes(location.pathname)

  return (
    <header ref={headerRef} className={`site-header ${headerClassName}`}>
      <nav aria-label="Primary navigation" className="page-container site-header__inner">
        <Link className="text-sm font-bold tracking-[0.08em]" to="/" aria-label={`${site.name} home`}>
          {site.name.toUpperCase()}
        </Link>

        <div className="site-header__desktop-nav">
          {navigationItems.map((item) => {
            const isActive = isItemActive(item.activePaths)
            return <Link aria-current={isActive ? 'page' : undefined} className={`site-header__link text-sm font-semibold ${isActive ? 'site-header__link--active' : ''}`} key={item.to} to={item.to}>{item.label}</Link>
          })}
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="site-header__menu-button"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          <span aria-hidden="true" className={`site-header__menu-icon ${isMenuOpen ? 'site-header__menu-icon--open' : ''}`}>
            <span />
            <span />
          </span>
          <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
        </button>
      </nav>

      {isMenuOpen ? (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="site-header__mobile-menu">
          <div className="page-container flex flex-col py-6">
            {navigationItems.map((item, index) => {
              const isActive = isItemActive(item.activePaths)
              return <Link aria-current={isActive ? 'page' : undefined} className={`site-header__mobile-link ${isActive ? 'site-header__mobile-link--active' : ''}`} key={item.to} onClick={() => setIsMenuOpen(false)} ref={index === 0 ? firstMenuLinkRef : undefined} to={item.to}>{item.label}</Link>
            })}
          </div>
        </nav>
      ) : null}
    </header>
  )
}
