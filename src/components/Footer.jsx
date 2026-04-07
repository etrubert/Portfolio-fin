import { useLang } from '../context/LangContext'
import './Footer.css'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__name">Elyot Trubert</span>
        <span className="footer__copy">© {year} — {t.footer.rights}</span>
        <div className="footer__links">
          <a href="https://www.linkedin.com/in/elyot-trubert-965070382" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/etrubert" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
