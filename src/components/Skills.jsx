import { useLang } from '../context/LangContext'
import useScrollReveal from '../hooks/useScrollReveal'
import './Skills.css'

export default function Skills() {
  const { t } = useLang()
  const headerRef = useScrollReveal()

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div ref={headerRef} className="skills__header reveal">
          <span className="section-label">{t.skills.label}</span>
          <h2>{t.skills.title.split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}</h2>
        </div>

        <div className="skills__grid">
          {t.about.bio_skills.map((group, i) => (
            <SkillGroup key={group.label} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillGroup({ group, index }) {
  const ref = useScrollReveal({ threshold: 0.1 })
  return (
    <div ref={ref} className="skill-group reveal" data-delay={(index % 3) + 1}>
      <h4 className="skill-group__title">{group.label}</h4>
      <ul className="skill-group__list">
        {group.items.split(', ').map((skill) => (
          <li key={skill} className="skill-item">
            <span className="skill-item__dot" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}
