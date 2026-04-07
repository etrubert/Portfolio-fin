import { createContext, useContext, useState } from 'react'

const translations = {
  fr: {
    nav: {
      about:    'À propos',
      projects: 'Projets',
      skills:   'Compétences',
      contact:  'Contact',
      hire:     'Me recruter',
    },
    hero: {
      available:   'Disponible',
      cta_work:    'Voir mes projets',
      cta_contact: 'Me contacter',
    },
    about: {
      label: 'À propos',
      title: 'Un peu plus\nsur moi',
      bio_p1: `À 19 ans, mon parcours est déjà marqué par une forte mobilité : avoir grandi et évolué entre la France, l'Espagne et le Mexique m'a doté d'une capacité d'adaptation exceptionnelle, tant humaine que technique. Sportif depuis mon plus jeune âge, j'ai pratiqué le rugby pendant 12 ans dans 3 pays différents — une école de la persévérance et de l'esprit d'équipe qui définit aujourd'hui ma façon de travailler.`,
      bio_p2: `Actuellement en Bachelor à l'Eugenia School (Paris), je me spécialise dans les technologies de la Data et de l'Intelligence Artificielle. Je développe une expertise concrète sur les outils qui redéfinissent le monde professionnel, notamment :`,
      bio_skills: [
        { label: 'Data & IA',              items: 'Python, Machine Learning, IA Générative' },
        { label: 'Analyse de données',     items: 'SQL, Statistiques, Excel' },
        { label: 'Organisation & Gestion', items: 'Notion, Airtable' },
        { label: 'Visualisation',          items: 'Google Sheets, Looker Studio' },
        { label: 'Développement',          items: 'Cursor' },
        { label: 'Langues',                items: 'Français (natif), Espagnol (courant)' },
      ],
      stat1_num:   '19',
      stat1_label: 'Ans',
      stat2_num:   '3',
      stat2_label: 'Pays de vie',
      stat3_num:   '12',
      stat3_label: 'Ans de rugby',
      cv: 'Télécharger mon CV',
    },
    projects: {
      label: 'Projets',
      title: "Ce que j'ai\nconstruit",
      intro: 'Une sélection de mes projets récents.',
      visit: 'Voir le projet',
    },
    skills: {
      label: 'Compétences',
      title: 'Mon stack &\nmes outils',
    },
    contact: {
      label:         'Contact',
      title:         'Travaillons\nensemble',
      desc:          `Vous avez un projet en tête ? N'hésitez pas à me contacter, je serai ravi d'en discuter avec vous.`,
      name_label:    'Nom',
      name_ph:       'Votre nom',
      email_label:   'Email',
      email_ph:      'votre@email.com',
      msg_label:     'Message',
      msg_ph:        'Décrivez votre projet...',
      submit:        'Envoyer le message',
      success_title: 'Message envoyé !',
      success_sub:   'Je vous répondrai dans les plus brefs délais.',
    },
    footer: {
      rights: 'Tous droits réservés',
    },
  },

  en: {
    nav: {
      about:    'About',
      projects: 'Projects',
      skills:   'Skills',
      contact:  'Contact',
      hire:     'Hire me',
    },
    hero: {
      available:   'Available for work',
      cta_work:    'View my projects',
      cta_contact: 'Contact me',
    },
    about: {
      label: 'About',
      title: 'A little more\nabout me',
      bio_p1: `At 19, my journey has already been shaped by strong mobility: growing up between France, Spain and Mexico has given me an exceptional capacity to adapt, both on a human and technical level. A sportsman from an early age, I played rugby for 12 years across 3 different countries — a school of perseverance and team spirit that defines how I work today.`,
      bio_p2: `Currently studying for my Bachelor's degree at Eugenia School (Paris), I am specialising in Data and Artificial Intelligence technologies. I am building hands-on expertise in the tools redefining the professional world, including:`,
      bio_skills: [
        { label: 'Data & AI',               items: 'Python, Machine Learning, Generative AI' },
        { label: 'Data Analysis',           items: 'SQL, Statistics, Excel' },
        { label: 'Organisation & Planning', items: 'Notion, Airtable' },
        { label: 'Visualisation',           items: 'Google Sheets, Looker Studio' },
        { label: 'Development',             items: 'Cursor' },
        { label: 'Languages',               items: 'French (native), Spanish (fluent)' },
      ],
      stat1_num:   '19',
      stat1_label: 'Years old',
      stat2_num:   '3',
      stat2_label: 'Countries lived in',
      stat3_num:   '12',
      stat3_label: 'Years of rugby',
      cv: 'Download my CV',
    },
    projects: {
      label: 'Projects',
      title: 'What I have\nbuilt',
      intro: 'A selection of my recent projects.',
      visit: 'View project',
    },
    skills: {
      label: 'Skills',
      title: 'My stack &\nmy tools',
    },
    contact: {
      label:         'Contact',
      title:         "Let's work\ntogether",
      desc:          "Have a project in mind? Feel free to reach out — I'd love to discuss it with you.",
      name_label:    'Name',
      name_ph:       'Your name',
      email_label:   'Email',
      email_ph:      'your@email.com',
      msg_label:     'Message',
      msg_ph:        'Describe your project...',
      submit:        'Send message',
      success_title: 'Message sent!',
      success_sub:   "I'll get back to you as soon as possible.",
    },
    footer: {
      rights: 'All rights reserved',
    },
  },
}

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState('fr')
  const toggle = () => setLang(l => (l === 'fr' ? 'en' : 'fr'))
  const t = translations[lang]

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
