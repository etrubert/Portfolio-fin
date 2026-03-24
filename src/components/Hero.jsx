import useScrollReveal from '../hooks/useScrollReveal'
import './Hero.css'

export default function Hero() {
  const badgeRef  = useScrollReveal({ threshold: 0.1 })
  const titleRef  = useScrollReveal({ threshold: 0.1 })
  const subRef    = useScrollReveal({ threshold: 0.1 })
  const actionsRef = useScrollReveal({ threshold: 0.1 })
  const scrollRef = useScrollReveal({ threshold: 0.1 })

  return (
    <section className="hero" id="hero">
      <div className="hero__bg-grid" aria-hidden="true" />

      <div className="container hero__content">
        <div ref={badgeRef} className="hero__badge reveal" data-delay="1">
          <span className="dot" />
          Available for work
        </div>

        <h1 ref={titleRef} className="hero__title reveal" data-delay="2">
          Elyot<br />
          <span className="hero__title--outline">Trubert</span>
        </h1>

        <p ref={subRef} className="hero__subtitle reveal" data-delay="3">
          {/* À remplir — ex: Designer & Développeur Frontend basé à Paris */}
          Votre titre / métier ici
        </p>

        <div ref={actionsRef} className="hero__actions reveal" data-delay="4">
          <button
            className="btn btn-primary"
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Voir mes projets
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
          <button
            className="btn btn-outline"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Me contacter
          </button>
        </div>

        <div ref={scrollRef} className="hero__scroll-hint reveal" data-delay="6" aria-hidden="true">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </div>
    </section>
  )
}
