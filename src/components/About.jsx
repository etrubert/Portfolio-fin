import { useLang } from '../context/LangContext'
import useScrollReveal from '../hooks/useScrollReveal'
import './About.css'

const years = ['2006', '2007', '2010', '2015', '2021', '2026']

const bars = [
  {
    color: '#f06292', position: 'top', start: 0, end: 1,
    title: 'Naissance & Maroc',
    text: 'Je suis né en 2006 et je suis parti tout de suite au Maroc.',
  },
  {
    color: '#80deea', position: 'bottom', start: 1, end: 2,
    title: 'Grèce',
    text: 'Après 6 mois au Maroc, je suis parti en Grèce, où j\'ai commencé ma scolarité.',
  },
  {
    color: '#ffca28', position: 'top', start: 2, end: 3,
    title: 'Espagne',
    text: 'J\'arrive en Espagne à l\'âge de 4 ans, j\'ai commencé ma scolarité dans une école française. Pendant mes 6 ans, j\'ai commencé à jouer au rugby et à apprendre la vie d\'équipe.',
  },
  {
    color: '#a5d6a7', position: 'bottom', start: 3, end: 4,
    title: 'Mexique',
    text: 'Après mes années à Madrid, je pars pour la première fois loin de toute ma famille. Je suis arrivé au Mexique, une ville incroyable et une ambiance de vie de très bonne qualité.',
  },
  {
    color: '#ffab40', position: 'top', start: 4, end: 5,
    title: 'France',
    text: 'Après 14 ans à l\'étranger, je rentre en France près de ma famille. Je rentre dans une école privée à Fontainebleau, une petite ville à côté de Paris. J\'ai fait mon lycée dans une filière technologique. Dès que j\'ai passé mon bac, je suis parti chez Eugenia School, une nouvelle école de Data & IA qui mélange tous les aspects du business.',
  },
]

export default function About() {
  const { t } = useLang()
  const titleRef = useScrollReveal()
  const timelineRef = useScrollReveal()

  const cellWidth = 100 / years.length

  return (
    <section id="about" className="about">
      <div className="container">

        <div ref={titleRef} className="about__header reveal reveal--left">
          <span className="section-label">{t.about.label}</span>
          <h2>{t.about.title.split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}</h2>
        </div>

        <div ref={timelineRef} className="timeline reveal" data-delay="1">
          {/* Colored bars */}
          {bars.map((bar, i) => (
            <div
              key={i}
              className={`timeline__bar timeline__bar--${bar.position}`}
              style={{
                '--bar-color': bar.color,
                '--bar-delay': `${i * 0.12}s`,
                background: bar.color,
                left: `${(bar.start + 0.5) * cellWidth}%`,
                width: `${(bar.end - bar.start) * cellWidth}%`,
              }}
            >
              <div className={`timeline__stem timeline__stem--${bar.position}`}>
                <div className="timeline__stem-line" />
                <div className="timeline__stem-diamond" />
                <div className="timeline__info">
                  <h4 className="timeline__info-title" style={{ color: bar.color }}>{bar.title}</h4>
                  <p className="timeline__info-text">{bar.text}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Arrow */}
          <div className="timeline__arrow">
            {years.map((year, i) => (
              <div key={i} className="timeline__cell">
                <span className="timeline__year">{year}</span>
              </div>
            ))}
            <div className="timeline__arrow-tip" />
          </div>
        </div>

      </div>
    </section>
  )
}
