import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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

        <a className="btn btn-primary navbar__cta" href="#contact">
          Hire me
        </a>

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
          <a className="btn btn-primary" href="#contact" onClick={() => setMenuOpen(false)}>
            Hire me
          </a>
        </div>
      )}
    </header>
  )
}
