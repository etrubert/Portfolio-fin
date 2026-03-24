import useScrollReveal from '../hooks/useScrollReveal'
import './Skills.css'

const skillGroups = [
  {
    category: 'Design',
    skills: ['Figma', 'Adobe XD', 'Illustrator', 'Photoshop'],
  },
  {
    category: 'Frontend',
    skills: ['HTML / CSS', 'JavaScript', 'React', 'Next.js'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'REST API'],
  },
  {
    category: 'Outils',
    skills: ['Git', 'Vite', 'Vercel', 'Figma'],
  },
]

export default function Skills() {
  const headerRef = useScrollReveal()

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div ref={headerRef} className="skills__header reveal">
          <span className="section-label">Compétences</span>
          <h2>Mon stack &amp;<br />mes outils</h2>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <SkillGroup key={group.category} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillGroup({ group, index }) {
  const ref = useScrollReveal({ threshold: 0.1 })
  return (
    <div ref={ref} className="skill-group reveal" data-delay={index + 1}>
      <h4 className="skill-group__title">{group.category}</h4>
      <ul className="skill-group__list">
        {group.skills.map((skill) => (
          <li key={skill} className="skill-item">
            <span className="skill-item__dot" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}
