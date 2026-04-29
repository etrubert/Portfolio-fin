import { useEffect, useState } from 'react'
import { useLang } from '../context/LangContext'
import useScrollReveal from '../hooks/useScrollReveal'
import './Projects.css'

const projects = [
  {
    id: 3,
    title: "Test d'orientation Bachelor",
    category: 'Hackathon LVMH',
    description: "Application web qui aide les lycéens à identifier le Bachelor le plus adapté à leur profil grâce à un questionnaire personnalisé.",
    longDescription: "Outil pédagogique imaginé lors du hackathon LVMH. Le lycéen renseigne son profil (classe, intérêts, ambitions) et répond à une série de questions calibrées : l'algorithme recoupe les réponses avec les programmes des écoles partenaires pour proposer le Bachelor le mieux aligné. Pensé pour réduire l'angoisse du choix d'orientation et donner une réponse claire en quelques minutes.",
    features: [
      "Questionnaire d'orientation guidé étape par étape",
      'Recommandation personnalisée selon le profil',
      'Capture de leads (prénom, nom, email, classe)',
      'Interface fluide et accessible mobile / desktop',
    ],
    tags: ['React', 'UX', 'Education'],
    year: '2025',
    image: '/bachelor-screenshot.png',
    video: '/lvmh.mp4',
  },
  {
    id: 2,
    title: 'Calculatrice Fiche de Paie',
    category: 'Hackathon Payfit',
    description: "Calculatrice de fiche de paie française, conçue lors du hackathon Payfit. Calcul du net à partir du brut avec les taux 2026 et les sources officielles.",
    longDescription: "Outil web qui transforme un salaire brut en fiche de paie complète : cotisations salariales et patronales, net à payer, net imposable. Tous les paramètres réels sont pris en compte (type de contrat, temps de travail, région pour le versement mobilité, effectif de l'entreprise, taux AT/MP, avantages en nature). Les taux sont alignés sur les barèmes 2026 et sourcés depuis urssaf.fr, service-public.gouv.fr et boss.gouv.fr.",
    features: [
      'Calcul en temps réel à chaque modification',
      'Barèmes & taux 2026 conformes',
      'Sources officielles : URSSAF, BOSS, service-public',
      'CDI, CDD, alternance, stage et freelance',
    ],
    tags: ['React', 'Product', 'Finance'],
    year: '2025',
    image: '/payfit-screenshot.png',
    video: '/payfit-hackathon.mp4',
  },
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
    id: 4,
    title: 'TalentAI — Mirakl',
    category: 'Hackathon Mirakl',
    description: "Plateforme de recrutement augmentée par l'IA pour Mirakl : sourcing automatisé, scoring des candidats et tableau de bord temps réel.",
    longDescription: "Outil interne pensé pour les équipes recrutement de Mirakl. À partir d'une fiche de poste, l'IA scrute les profils disponibles, attribue un score de pertinence et remonte les meilleurs candidats. Le dashboard centralise les offres ouvertes, le pipeline de candidats et les emails envoyés, et un mode démo (Shift+D) déroule un walkthrough automatique du flux job → scoring → candidat.",
    features: [
      'Scoring automatique des candidats par IA',
      'Dashboard temps réel (offres, candidats, emails)',
      'Top candidats classés par adéquation au poste',
      'Mode démo guidé (walkthrough Shift+D)',
    ],
    tags: ['React', 'IA', 'RAG', 'n8n'],
    year: '2025',
    image: '/mirakl-screenshot.png',
    video: '/mirakl.mp4',
  },
]

export default function Projects() {
  const { t } = useLang()
  const headerRef = useScrollReveal()
  const introRef  = useScrollReveal()
  const [activeProject, setActiveProject] = useState(null)

  useEffect(() => {
    if (!activeProject) return
    const onKey = (e) => { if (e.key === 'Escape') setActiveProject(null) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [activeProject])

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
            <ProjectCard key={p.id} project={p} index={i} onOpenProject={setActiveProject} />
          ))}
        </div>
      </div>

      {activeProject && (
        <div className="video-modal" onClick={() => setActiveProject(null)} role="dialog" aria-modal="true">
          <button className="video-modal__close" onClick={() => setActiveProject(null)} aria-label="Fermer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <div className="video-modal__panel" onClick={(e) => e.stopPropagation()}>
            <div className="video-modal__media">
              <video
                key={activeProject.id}
                src={activeProject.video}
                className="video-modal__video"
                controls
                autoPlay
                playsInline
              />
            </div>
            <div className="video-modal__info">
              <div className="video-modal__meta">
                <span className="project-card__category">{activeProject.category}</span>
                <span className="project-card__year">{activeProject.year}</span>
              </div>
              <h3 className="video-modal__title">{activeProject.title}</h3>
              <p className="video-modal__desc">
                {activeProject.longDescription || activeProject.description}
              </p>
              {activeProject.features && (
                <ul className="video-modal__features">
                  {activeProject.features.map(f => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              )}
              <div className="project-card__tags">
                {activeProject.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function ProjectCard({ project, index, onOpenProject }) {
  const { t } = useLang()
  const ref   = useScrollReveal({ threshold: 0.1 })
  const delay = (index % 2) + 1

  const hasVideoModal = Boolean(project.video)
  const handleClick = () => {
    if (hasVideoModal) onOpenProject(project)
    else if (project.link && project.link !== '#') window.open(project.link, '_blank')
  }

  return (
    <article ref={ref} className="project-card reveal" data-delay={delay} onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="project-card__image">
        {project.image ? (
          <img src={project.image} alt={project.title} className="project-card__img" />
        ) : project.video ? (
          <video
            src={project.video}
            className="project-card__img"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <div className="project-card__placeholder">
            <span>{project.title.charAt(0)}</span>
          </div>
        )}
        <div className="project-card__visit">
          {hasVideoModal ? 'Regarder la vidéo' : t.projects.visit}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {hasVideoModal ? (
              <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
            ) : (
              <>
                <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
              </>
            )}
          </svg>
        </div>
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-card__category">{project.category}</span>
          <span className="project-card__year">{project.year}</span>
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__tags">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  )
}
