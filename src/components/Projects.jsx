import { useEffect, useState } from 'react'
import { useLang } from '../context/LangContext'
import useScrollReveal from '../hooks/useScrollReveal'
import './Projects.css'

const projects = [
  {
    id: 5,
    title: 'FairWay',
    category: 'Application Mobile',
    context: 'Projet équipe · Léon Le Calvez, Alexandre Mc Namara, Hector Lebrun, Elyot Trubert, Amaury Despretz',
    description: "Application mobile dédiée aux golfeurs : suivi du score en temps réel, statistiques de joueur et réservation de tee times. Swing your way.",
    longDescription: "FairWay accompagne le golfeur du tee au green. Pendant la partie, l'application suit le score trou par trou avec une visualisation claire du parcours et de la distance restante. Une fois la partie terminée, le joueur retrouve ses statistiques détaillées (score moyen, progression, performance par parcours) et peut réserver son prochain tee time directement depuis l'app. Pensé pour rendre le golf plus accessible et plus connecté, avec une identité graphique douce qui rompt avec les codes austères du secteur.",
    features: [
      "Suivi du score en temps réel pendant la partie",
      "Visualisation du parcours et de la distance restante",
      "Statistiques détaillées du joueur",
      "Historique des rounds",
      "Réservation de tee times intégrée",
      "Design épuré et identité graphique soignée",
    ],
    tags: ['Mobile', 'Product', 'UI/UX', 'Sport'],
    year: '2025',
    image: '/fairway-screenshot.png',
    embed: 'https://www.canva.com/design/DAG4BiapqTE/aIdkQj-brxoBaSQGgSMvOg/view?embed',
  },
  {
    id: 3,
    title: "Test d'orientation Bachelor",
    category: 'Hackathon LVMH',
    context: 'Hackathon LVMH · Équipe pluridisciplinaire · Format court',
    description: "Application web qui aide les lycéens à identifier le Bachelor le plus adapté à leur profil grâce à un questionnaire personnalisé.",
    longDescription: "Beaucoup de lycéens choisissent leur école d'enseignement supérieur sans avoir une vision claire de ce qui leur correspond vraiment. Le test d'orientation Bachelor part de ce constat : on transforme une décision floue et anxiogène en une recommandation claire en quelques minutes. Le lycéen renseigne son profil (prénom, classe, contact, centres d'intérêt) puis répond à une série de questions calibrées sur sa personnalité, ses ambitions et son rapport au monde du travail. L'algorithme recoupe les réponses avec les programmes des écoles partenaires et propose le Bachelor le mieux aligné, avec une explication concrète du choix.",
    features: [
      'Onboarding rapide : prénom, nom, email, classe',
      "Questionnaire d'orientation guidé étape par étape",
      'Recommandation personnalisée et explicable',
      'Capture de leads pour les écoles partenaires',
      'Interface responsive (mobile, tablette, desktop)',
      "Charte graphique cohérente avec l'identité Bachelor",
    ],
    tags: ['React', 'UX', 'Product', 'Education'],
    year: '2025',
    image: '/bachelor-screenshot.png',
    video: '/lvmh.mp4',
  },
  {
    id: 2,
    title: 'Calculatrice Fiche de Paie',
    category: 'Hackathon Payfit',
    context: 'Hackathon Payfit · Conformité 2026 · Sources officielles',
    description: "Calculatrice de fiche de paie française, conçue lors du hackathon Payfit. Calcul du net à partir du brut avec les taux 2026 et les sources officielles.",
    longDescription: "Comprendre sa fiche de paie reste opaque pour la majorité des salariés français : cotisations qui se chevauchent, taux qui varient selon le contrat, plafonds qui changent chaque année. Cette calculatrice s'attaque à ce problème en transformant un simple salaire brut en fiche de paie lisible et fidèle au réel. L'outil prend en compte tous les paramètres concrets — type de contrat (CDI, CDD, alternance, stage, freelance), temps de travail, région pour le versement mobilité, effectif de l'entreprise, taux AT/MP, avantages en nature — et applique les barèmes 2026 sourcés depuis URSSAF, BOSS et service-public.gouv.fr. Le résultat : cotisations salariales et patronales détaillées, net à payer, net imposable.",
    features: [
      'Calcul en temps réel à chaque modification',
      'Barèmes & taux 2026 strictement conformes',
      'Sources officielles : URSSAF, BOSS, service-public',
      'Tous les contrats : CDI, CDD, alternance, stage, freelance',
      "Prise en compte des avantages en nature et du versement mobilité",
      "Détail complet : cotisations salariales, patronales, net imposable",
    ],
    tags: ['React', 'Product', 'Finance', 'Réglementation'],
    year: '2025',
    image: '/payfit-screenshot.png',
    video: '/payfit-hackathon.mp4',
  },
  {
    id: 1,
    title: 'Licter Dashboard',
    category: 'Dashboard',
    context: 'Projet client Decathlon · COMEX · Production',
    description: "Dashboard COMEX de gestion de réputation et de crise pour Decathlon : monitoring temps réel, analyse de sentiment et plan d'action automatisé.",
    longDescription: "Outil exécutif pensé pour le COMEX de Decathlon. Licter agrège en continu les signaux de réputation de la marque (avis clients, presse, réseaux sociaux), les passe au filtre d'une analyse de sentiment et fait remonter automatiquement ce qui mérite l'attention de la direction. En cas de signal faible ou de crise naissante, le dashboard propose un plan d'action structuré pour réagir vite, plutôt que de laisser les équipes interpréter une masse de données brutes. L'objectif : transformer une veille passive en décision dirigeante, en quelques minutes plutôt qu'en plusieurs jours.",
    features: [
      'Monitoring temps réel multi-canal',
      "Analyse de sentiment automatisée par IA",
      "Détection précoce des signaux de crise",
      "Plan d'action recommandé pour le COMEX",
      'Interface synthétique pensée pour la direction',
    ],
    tags: ['React', 'Data', 'IA', 'Dashboard'],
    year: '2026',
    link: 'https://licter-dashboard.pages.dev',
    image: '/project-licter.png',
  },
  {
    id: 4,
    title: 'TalentAI — Mirakl',
    category: 'Hackathon Mirakl',
    context: '🏆 Projet vainqueur du Hackathon Mirakl · IA & automatisation',
    description: "Plateforme de recrutement augmentée par l'IA pour Mirakl : sourcing automatisé, scoring des candidats et tableau de bord temps réel. Projet vainqueur du hackathon.",
    longDescription: "Projet réalisé dans le cadre du hackathon Mirakl, remporté avec mon équipe. Le recrutement tech consomme énormément de temps à filtrer manuellement des CV qui n'ont rien à voir avec le poste. TalentAI part de l'idée inverse : on décrit la fiche de poste, l'IA scanne les profils disponibles, attribue un score de pertinence basé sur les compétences demandées (langages, frameworks, expériences) et fait remonter directement les meilleurs candidats. Le dashboard agrège en temps réel les offres actives, les candidats sourcés, les scores moyens et les emails envoyés. Un mode démo (Shift+D) déroule automatiquement le flux complet — création d'un job, scoring, sélection des top candidats — pour pitcher l'outil à un décideur en moins d'une minute.",
    features: [
      'Scoring automatique des candidats par IA',
      "Dashboard temps réel : offres actives, candidats, score moyen, emails",
      'Top candidats classés par adéquation au poste',
      "Filtres par compétences (Python, ML, RAG, n8n…)",
      'Mode démo guidé (walkthrough Shift+D)',
      'Workflow automatisé via n8n pour le sourcing',
    ],
    tags: ['React', 'IA', 'RAG', 'n8n', 'Automation'],
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
              {activeProject.embed ? (
                <iframe
                  key={activeProject.id}
                  src={activeProject.embed}
                  className="video-modal__embed"
                  title={activeProject.title}
                  allowFullScreen
                  allow="fullscreen"
                  loading="lazy"
                />
              ) : activeProject.video ? (
                <video
                  key={activeProject.id}
                  src={activeProject.video}
                  className="video-modal__video"
                  controls
                  autoPlay
                  playsInline
                />
              ) : activeProject.image ? (
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="video-modal__image"
                />
              ) : null}
            </div>
            <div className="video-modal__info">
              <div className="video-modal__meta">
                <span className="project-card__category">{activeProject.category}</span>
                <span className="project-card__year">{activeProject.year}</span>
              </div>
              <h3 className="video-modal__title">{activeProject.title}</h3>
              {activeProject.context && (
                <p className="video-modal__context">{activeProject.context}</p>
              )}
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
              {activeProject.link && activeProject.link !== '#' && (
                <a
                  href={activeProject.link}
                  className="video-modal__cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le projet en ligne
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                  </svg>
                </a>
              )}
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

  const hasModal = Boolean(project.video || project.longDescription)
  const handleClick = () => {
    if (hasModal) onOpenProject(project)
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
          {project.video ? 'Regarder la vidéo' : hasModal ? 'En savoir plus' : t.projects.visit}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {project.video ? (
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
