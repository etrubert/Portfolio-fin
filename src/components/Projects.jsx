import { useLang } from '../context/LangContext'
import useScrollReveal from '../hooks/useScrollReveal'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'Licter Dashboard',
    category: 'Dashboard',
    description: "Dashboard COMEX de gestion de réputation et de crise pour Decathlon. Monitoring en temps réel, analyse de sentiment et plan d'action automatisé.",
    tags: ['React', 'Data', 'IA'],
    year: '2026',
    link: 'https://licter-dashboard.pages.dev',
    image: '/project-licter.png',
  },
  {
    id: 2,
    title: 'Nom du projet 2',
    category: 'Development',
    description: "Description courte du projet. Ce que vous avez fait, les technologies utilisées et l'impact.",
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    year: '2024',
    link: '#',
  },
  {
    id: 3,
    title: 'Nom du projet 3',
    category: 'Branding',
    description: "Description courte du projet. Ce que vous avez fait, les technologies utilisées et l'impact.",
    tags: ['Figma', 'Illustrator'],
    year: '2023',
    link: '#',
  },
  {
    id: 4,
    title: 'Nom du projet 4',
    category: 'Mobile',
    description: "Description courte du projet. Ce que vous avez fait, les technologies utilisées et l'impact.",
    tags: ['React Native', 'Firebase'],
    year: '2023',
    link: '#',
  },
]

export default function Projects() {
  const { t } = useLang()
  const headerRef = useScrollReveal()
  const introRef  = useScrollReveal()

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects__header">
          <div ref={headerRef} className="reveal reveal--left">
            <span className="section-label">{t.projects.label}</span>
            <h2>{t.projects.title.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}</h2>
          </div>
          <p ref={introRef} className="projects__intro reveal reveal--right" data-delay="1">
            {t.projects.intro}
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const { t } = useLang()
  const ref   = useScrollReveal({ threshold: 0.1 })
  const delay = (index % 2) + 1

  return (
    <article ref={ref} className="project-card reveal" data-delay={delay} onClick={() => window.open(project.link, '_blank')} style={{ cursor: 'pointer' }}>
      <div className="project-card__image">
        {project.image ? (
          <img src={project.image} alt={project.title} className="project-card__img" />
        ) : (
          <div className="project-card__placeholder">
            <span>{project.title.charAt(0)}</span>
          </div>
        )}
        <a href={project.link} className="project-card__visit" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
          {t.projects.visit}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
          </svg>
        </a>
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-card__category">{project.category}</span>
          <span className="project-card__year">{project.year}</span>
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__tags">
          {project.tags.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </article>
  )
}
