import { useLang } from '../context/LangContext'
import useScrollReveal from '../hooks/useScrollReveal'
import './About.css'

const years = ['2007', '2010', '2015', '2021', '2024', '2026']

const bars = [
  { color: '#f06292', position: 'top',    start: 0, end: 1 },
  { color: '#80deea', position: 'bottom', start: 1, end: 2 },
  { color: '#ffca28', position: 'top',    start: 2, end: 3 },
  { color: '#a5d6a7', position: 'bottom', start: 3, end: 4 },
  { color: '#ffab40', position: 'top',    start: 4, end: 5 },
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
                '--bar-delay': `${i * 0.3}s`,
                background: bar.color,
                left: `${(bar.start + 0.5) * cellWidth}%`,
                width: `${(bar.end - bar.start) * cellWidth}%`,
              }}
            >
              <div className={`timeline__stem timeline__stem--${bar.position}`}>
                <div className="timeline__stem-line" />
                <div className="timeline__stem-diamond" />
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
