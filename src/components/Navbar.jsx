import { useState, useEffect } from 'react'
import { useLang } from '../context/LangContext'
import './Navbar.css'

export default function Navbar() {
  const { lang, toggle, t } = useLang()
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  const links = [
    { label: t.nav.about,    href: '#about',    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
    { label: t.nav.projects, href: '#projects', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
    { label: t.nav.skills,   href: '#skills',   icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
    { label: t.nav.contact,  href: '#contact',  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner container">
        <a className="navbar__logo" href="#hero">ET</a>

        <div className="navbar__menu">
          {links.map(l => (
            <button key={l.label} className="nav-link" onClick={() => handleLink(l.href)}>
              <span className="nav-link__icon">{l.icon}</span>
              <span className="nav-link__title">{l.label}</span>
            </button>
          ))}
        </div>

        <div className="navbar__right">
          {/* Language toggle */}
          <button className="lang-toggle" onClick={toggle} aria-label="Switch language">
            <span className={lang === 'fr' ? 'lang-toggle__active' : ''}>FR</span>
            <span className="lang-toggle__sep" />
            <span className={lang === 'en' ? 'lang-toggle__active' : ''}>EN</span>
          </button>

          <a className="btn btn-primary navbar__cta" href="#contact">
            {t.nav.hire}
          </a>
        </div>

        <button
          className={`navbar__burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {menuOpen && (
        <div className="navbar__mobile">
          {links.map(l => (
            <button key={l.label} onClick={() => handleLink(l.href)}>
              {l.label}
            </button>
          ))}
          <div className="navbar__mobile-bottom">
            <button className="lang-toggle" onClick={toggle} aria-label="Switch language">
              <span className={lang === 'fr' ? 'lang-toggle__active' : ''}>FR</span>
              <span className="lang-toggle__sep" />
              <span className={lang === 'en' ? 'lang-toggle__active' : ''}>EN</span>
            </button>
            <a className="btn btn-primary" href="#contact" onClick={() => setMenuOpen(false)}>
              {t.nav.hire}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
