import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { site } from '../../data/site'

const navigationItems = [
  { label: 'Work', to: '/work/logbot' },
  { label: 'Experience', to: '/#experience' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const updateScrollState = () => setHasScrolled(window.scrollY > 8)
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

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

  const headerClassName = hasScrolled
    ? 'border-b border-border bg-background'
    : 'border-b border-transparent bg-background'

  return (
    <header ref={headerRef} className={`site-header sticky top-0 z-50 transition-colors duration-200 ease-out motion-reduce:transition-none ${headerClassName}`}>
      <nav aria-label="Primary navigation" className="page-container flex h-20 items-center justify-between gap-6 max-md:h-[68px]">
        <Link className="text-sm font-bold tracking-[0.08em]" to="/" aria-label={`${site.name} home`}>
          {site.name.toUpperCase()}
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navigationItems.map((item) => (
            <NavLink className={({ isActive }) => `site-header__link text-sm font-semibold ${isActive ? 'site-header__link--active' : ''}`} key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="site-header__menu-button md:hidden"
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
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="site-header__mobile-menu md:hidden">
          <div className="page-container flex flex-col py-6">
            {navigationItems.map((item, index) => (
              <NavLink
                className={({ isActive }) => `site-header__mobile-link ${isActive ? 'site-header__mobile-link--active' : ''}`}
                key={item.to}
                onClick={() => setIsMenuOpen(false)}
                ref={index === 0 ? firstMenuLinkRef : undefined}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}
