import { useLang } from '../context/LangContext'
import useScrollReveal from '../hooks/useScrollReveal'
import './Hero.css'

export default function Hero() {
  const { t } = useLang()

  const badgeRef   = useScrollReveal({ threshold: 0.1 })
  const leftRef    = useScrollReveal({ threshold: 0.1 })
  const photoRef   = useScrollReveal({ threshold: 0.1 })
  const actionsRef = useScrollReveal({ threshold: 0.1 })

  return (
    <section className="hero" id="hero">
      <div className="hero__bg-grid" aria-hidden="true" />

      <div className="container hero__content">
        <div ref={badgeRef} className="hero__badge reveal" data-delay="1">
          <span className="dot" />
          {t.hero.available}
        </div>

        <div className="hero__main">
          <div ref={leftRef} className="hero__text reveal" data-delay="2">
            <h1 className="hero__title">
              Elyot<br />
              <span className="hero__title--outline">Trubert</span>
            </h1>

            <div ref={actionsRef} className="hero__actions reveal" data-delay="3">
              <button
                className="btn btn-primary"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.hero.cta_work}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
              <button
                className="btn btn-outline"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.hero.cta_contact}
              </button>
            </div>
          </div>

          <div ref={photoRef} className="hero__photo-wrap reveal reveal--right" data-delay="3">
            <img
              src="/P1011730.JPG"
              alt="Elyot Trubert"
              className="hero__photo"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
