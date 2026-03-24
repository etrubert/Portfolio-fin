import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__name">Elyot Trubert</span>
        <span className="footer__copy">© {year} — Tous droits réservés</span>
        <div className="footer__links">
          <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
