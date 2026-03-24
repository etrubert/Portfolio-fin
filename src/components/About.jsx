import useScrollReveal from '../hooks/useScrollReveal'
import './About.css'

export default function About() {
  const leftRef  = useScrollReveal()
  const bioRef   = useScrollReveal()
  const statsRef = useScrollReveal()
  const linksRef = useScrollReveal()

  return (
    <section id="about" className="about">
      <div className="container about__grid">

        <div ref={leftRef} className="about__left reveal reveal--left">
          <span className="section-label">À propos</span>
          <h2>Un peu plus<br />sur moi</h2>
        </div>

        <div className="about__right">
          <p ref={bioRef} className="about__bio reveal" data-delay="1">
            {/* À remplir — votre biographie */}
            Votre biographie ici. Parlez de qui vous êtes, votre parcours,
            vos passions et ce qui vous anime au quotidien dans votre travail.
          </p>

          <div ref={statsRef} className="about__stats reveal" data-delay="2">
            <div className="stat">
              <span className="stat__number">00+</span>
              <span className="stat__label">Projets réalisés</span>
            </div>
            <div className="stat">
              <span className="stat__number">00+</span>
              <span className="stat__label">Années d'expérience</span>
            </div>
            <div className="stat">
              <span className="stat__number">00+</span>
              <span className="stat__label">Clients satisfaits</span>
            </div>
          </div>

          <div ref={linksRef} className="about__links reveal" data-delay="3">
            <a
              href="#"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Télécharger mon CV
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </a>
            <a
              href="#"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
