import { useLang } from '../context/LangContext'
import useScrollReveal from '../hooks/useScrollReveal'
import './About.css'

export default function About() {
  const { t } = useLang()

  const leftRef  = useScrollReveal()
  const bioRef   = useScrollReveal()
  const linksRef = useScrollReveal()

  return (
    <section id="about" className="about">
      <div className="container about__grid">

        <div ref={leftRef} className="about__left reveal reveal--left">
          <span className="section-label">{t.about.label}</span>
          <h2>{t.about.title.split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}</h2>
        </div>

        <div className="about__right">
          <div ref={bioRef} className="about__bio reveal" data-delay="1">
            <p>{t.about.bio_p1}</p>
            <p>{t.about.bio_p2}</p>
          </div>

          <div ref={linksRef} className="about__links reveal" data-delay="2">
            <a href="#" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              {t.about.cv}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/elyot-trubert-965070382"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
