import { useState, useEffect } from 'react'
import { useLang } from '../context/LangContext'
import './Navbar.css'

export default function Navbar() {
  const { lang, toggle, t } = useLang()
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  const links = [
    { label: t.nav.about,    href: '#about' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.skills,   href: '#skills' },
    { label: t.nav.contact,  href: '#contact' },
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

        <ul className="navbar__links">
          {links.map(l => (
            <li key={l.label}>
              <button onClick={() => handleLink(l.href)}>{l.label}</button>
            </li>
          ))}
        </ul>

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
