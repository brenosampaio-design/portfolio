// ── Translations — EN / ES / FR ──────────────────────────────────────────
// *word* inside a string = <span className="accent"> (italic serif).
// Japanese annotations (間, 渋) stay unchanged across languages.

const en = {
  nav: { work: "Work", about: "About", approach: "Approach", contact: "Contact" },
  availability: "Available",

  hero: {
    title:  "Product designer with a *technical* edge.",
    lead:   "I design operational tools for service teams — and I care how they get built.",
    cta1:   "View selected work",
    cta2:   "Learn about my approach",
  },

  work: {
    eyebrow:    "Selected work",
    heading:    "Selected work",
    subheading: "Two cases, shown in full — problem first.",
    more:       "More case studies in progress — honest pieces beat a padded grid.",
  },

  approach: {
    eyebrow:    "Approach",
    heading:    "Design with *purpose*, build with *perspective*.",
    subheading: "My approach connects user needs, business goals and technical reality to create products that are useful, usable and built to last.",
  },

  process: {
    eyebrow:    "Process",
    heading:    "A clear process. Built for *impact*.",
    subheading: "A structured way to turn operational complexity into clarity. Each step builds on the last — useful, usable, and built to ship.",
  },

  principles: {
    eyebrow:    "Principles",
    heading:    "Guiding choices. *Creating impact*.",
    subheading: "These principles shape the way I think, design and collaborate. Not rules, but a compass for meaningful work.",
  },

  about: {
    eyebrow: "About Breno",
    heading: "Product designer with a *strategic* and *operational* mindset.",
    lead:    "I help teams turn complexity into clarity and ideas into products that create value. My work sits at the intersection of strategy, experience and execution.",
    cta:     "Read the full story",
    facts: {
      basedIn:       "Based in",
      working:       "Working",
      workingValue:  "Remotely · global projects",
      languages:     "Languages",
      cert:          "Certification",
      certValue:     "Google UX Design Certificate",
    },
  },

  contact: {
    eyebrow:   "Let's connect",
    heading:   "Let's create products with *clarity* and *purpose*.",
    body:      "I'm currently available for new opportunities. If the problem is real, I'd like to hear about it.",
    email:     "Email",
    location:  "Location",
    localTime: "Local time",
  },

  footer: {
    location:  "Valencia, Spain · working remotely",
    elsewhere: "Elsewhere",
    tagline:   "Good design is quiet, but it leaves a mark.",
  },

  aboutPage: {
    eyebrow:     "About Breno",
    heading:     "Product designer with a *strategic* and *operational* mindset.",
    lead:        "I came to design from inside the operation, not from the outside looking in — and that's still how I work.",
    downloadCv:  "Download CV",
    facts: {
      basedIn:       "Based in",
      working:       "Working",
      workingValue:  "Remotely · global projects",
      languages:     "Languages",
      cert:          "Certification",
      certValue:     "Google UX Design Certificate",
      status:        "Status",
      statusValue:   "Open to new work · in transition",
    },
    storyEyebrow: "The path",
    storyHeading: "From running operations to *designing* them.",
    story: [
      "For years my job was the operation itself — service operations, hotel reception, shift work, the front and back office where things actually happen. I was the person taking over a shift with half the context missing, or handing one over hoping nothing would slip.",
      "That's where I learned what software does to people under pressure. A good tool disappears and lets you do the work. A bad one becomes one more thing to manage. I started designing because I wanted to build the first kind.",
      "Today I work as a product designer with an implementation sensibility: I think in systems, I build and use design systems, and I work AI-assisted to move faster through research, structure and iteration — while keeping the design judgment my own. I earned the Google UX Design Certificate along the way, but the foundation is the years I spent inside the problems I now design for.",
      "I read and work across Portuguese (native), Spanish (fluent), French (professional), Italian (intermediate) and English. I'm based in {location}, working remotely, and currently in transition — open to product roles and collaborations where the problems are real.",
    ],
    ctaWork:    "View selected work",
    ctaContact: "Get in touch",
  },

  labels: {
    intro:      "Intro",
    work:       "Work",
    approach:   "Approach",
    process:    "Process",
    principles: "Principles",
    about:      "About",
    contact:    "Contact",
    thePath:    "The path",
  },

  languageNames: {
    Portuguese: "Portuguese", Spanish: "Spanish", French: "French",
    Italian: "Italian", English: "English",
  },
  languageLevels: {
    "Native": "Native", "Fluent": "Fluent",
    "Professional / Fluent": "Professional", "Intermediate": "Intermediate",
    "Professional working": "Professional",
  },

  projects: [
    {
      slug: "service-operations", category: "Concept case",
      title: "Service Operations Dashboard",
      problem: "One operational view of what's open at shift handover, so information stops getting lost between tools, paper and memory.",
      role: "Sole designer", year: "2026", href: "/work/service-operations",
    },
    {
      slug: "triageai", category: "Concept case", title: "TriageAI",
      problem: "Human-controlled AI intake for multilingual requests — AI structures and ranks, a human approves every reply that goes out.",
      role: "Sole designer", year: "2026", href: "/work/triageai",
    },
    {
      category: "Coming soon", title: "Operational work",
      problem: "Turning years of real service-operations work into proper case studies.",
      role: "Documenting", upcoming: true,
    },
    {
      category: "Coming soon", title: "Design systems",
      problem: "A systems-focused case is on the way — components, tokens and the rules between them.",
      role: "Documenting", upcoming: true,
    },
  ],

  approachItems: [
    { title: "Understand the work deeply", description: "I start inside the operation — behaviours, constraints, and where things actually break — before proposing anything." },
    { title: "Anchor in real context", description: "I align every decision with how the business actually runs and what's feasible, not how it looks on a slide." },
    { title: "Think in systems, not screens", description: "I design the structure first — information architecture, flows, states and rules — so it stays coherent as it grows." },
    { title: "Design with clarity and restraint", description: "I simplify without dumbing down. Hierarchy, content and interaction over decoration — clear, not clever." },
    { title: "Build with implementation in mind", description: "I design knowing it has to ship, and work with engineering through edge cases and handoff so it gets built right." },
  ],

  processSteps: [
    { title: "Discover", icon: "search", description: "Understand the operation, the people, and the constraints before proposing anything.", items: ["Talk to the people doing the work", "Map where information lives", "Find the failure points", "Separate evidence from assumption"] },
    { title: "Frame",   icon: "frame",  description: "Turn the mess into a clear problem worth solving, with explicit scope.", items: ["Define the real problem", "Set what's in and out of scope", "Name the constraints", "Decide what success looks like"] },
    { title: "Systems", icon: "sitemap", description: "Design the structure before the screens — the rules that keep things consistent.", items: ["Information architecture", "Core flows", "States and rules", "Tokens and components"] },
    { title: "Interface", icon: "layout", description: "Make it clear, fast, and honest — designed for the worst moment, not the demo.", items: ["Hierarchy and contrast", "Guided over free-form", "Every state, not just the happy path", "Plain language"] },
    { title: "Validate", icon: "check-circle", description: "Test the assumptions with real people and iterate on what breaks.", items: ["Put it in front of real users", "Watch behaviour, not opinions", "Iterate on what breaks", "Keep what holds"] },
    { title: "Deliver",  icon: "send",  description: "Hand off so it ships as designed — build-aware, with the edge cases written down.", items: ["Build-aware specs", "Work with engineering", "Edge cases documented", "Support through implementation"] },
  ],

  principlesItems: [
    { annotation: "間 ma",    principle: "Clarity over noise",          description: "I remove what's unnecessary so what matters can speak." },
    { annotation: "",         principle: "Usefulness first",            description: "I design with purpose, solving real problems for real people." },
    { annotation: "渋 shibui", principle: "Restraint with intention",    description: "I choose less, but with precision — restraint is a feature, not a shortage." },
    { annotation: "",         principle: "Design for the worst moment", description: "The real test isn't the demo — it's a tired person at 3am. I design for them." },
    { annotation: "",         principle: "Systems thinking",            description: "I see the whole, then design each part to belong and stay consistent." },
    { annotation: "",         principle: "Build-aware craft",           description: "I care how it's built, because that's what decides whether it ships as designed." },
  ],
};

// ── Español ─────────────────────────────────────────────────────────────
const es = {
  nav: { work: "Trabajo", about: "Sobre mí", approach: "Enfoque", contact: "Contacto" },
  availability: "Disponible",

  hero: {
    title:  "Product designer con perspectiva *técnica*.",
    lead:   "Diseño herramientas operativas para equipos de servicio — y me importa cómo se construyen.",
    cta1:   "Ver trabajos seleccionados",
    cta2:   "Conocer mi enfoque",
  },

  work: {
    eyebrow:    "Trabajos seleccionados",
    heading:    "Trabajos seleccionados",
    subheading: "Dos casos completos — el problema primero.",
    more:       "Más casos de estudio en proceso — piezas honestas valen más que una galería rellena.",
  },

  approach: {
    eyebrow:    "Enfoque",
    heading:    "Diseñar con *propósito*, construir con *perspectiva*.",
    subheading: "Mi enfoque conecta las necesidades del usuario, los objetivos del negocio y la realidad técnica para crear productos útiles, usables y duraderos.",
  },

  process: {
    eyebrow:    "Proceso",
    heading:    "Un proceso claro. Construido para el *impacto*.",
    subheading: "Una forma estructurada de convertir la complejidad operativa en claridad. Cada paso se apoya en el anterior — útil, usable y listo para entregar.",
  },

  principles: {
    eyebrow:    "Principios",
    heading:    "Elecciones que guían. *Impacto real*.",
    subheading: "Estos principios dan forma a mi manera de pensar, diseñar y colaborar. No son reglas, sino una brújula para un trabajo con sentido.",
  },

  about: {
    eyebrow: "Sobre Breno",
    heading: "Product designer con mentalidad *estratégica* y *operativa*.",
    lead:    "Ayudo a equipos a convertir la complejidad en claridad e ideas en productos que crean valor. Mi trabajo está en la intersección de estrategia, experiencia y ejecución.",
    cta:     "Leer la historia completa",
    facts: {
      basedIn:       "Ubicación",
      working:       "Modalidad",
      workingValue:  "Remoto · proyectos globales",
      languages:     "Idiomas",
      cert:          "Certificación",
      certValue:     "Google UX Design Certificate",
    },
  },

  contact: {
    eyebrow:   "Conectemos",
    heading:   "Creemos productos con *claridad* y *propósito*.",
    body:      "Estoy disponible para nuevas oportunidades. Si el problema es real, me gustaría escucharlo.",
    email:     "Correo",
    location:  "Ubicación",
    localTime: "Hora local",
  },

  footer: {
    location:  "Valencia, España · trabajo remoto",
    elsewhere: "En otras redes",
    tagline:   "El buen diseño es silencioso, pero deja huella.",
  },

  aboutPage: {
    eyebrow:    "Sobre Breno",
    heading:    "Product designer con mentalidad *estratégica* y *operativa*.",
    lead:       "Llegué al diseño desde dentro de la operación, no desde fuera mirando hacia adentro — y así sigo trabajando.",
    downloadCv: "Descargar CV",
    facts: {
      basedIn:       "Ubicación",
      working:       "Modalidad",
      workingValue:  "Remoto · proyectos globales",
      languages:     "Idiomas",
      cert:          "Certificación",
      certValue:     "Google UX Design Certificate",
      status:        "Estado",
      statusValue:   "Abierto a nuevas oportunidades · en transición",
    },
    storyEyebrow: "El camino",
    storyHeading: "De gestionar operaciones a *diseñarlas*.",
    story: [
      "Durante años mi trabajo fue la operación en sí — operaciones de servicio, recepción de hotel, trabajo por turnos, el front y back office donde las cosas realmente pasan. Era la persona que tomaba un turno con la mitad del contexto faltando, o que lo entregaba esperando que nada se escapara.",
      "Ahí aprendí lo que el software le hace a las personas bajo presión. Una buena herramienta desaparece y te deja hacer el trabajo. Una mala se convierte en una cosa más que gestionar. Empecé a diseñar porque quería construir la primera.",
      "Hoy trabajo como product designer con sensibilidad hacia la implementación: pienso en sistemas, construyo y uso design systems, y trabajo con IA para avanzar más rápido en investigación, estructura e iteración — manteniendo mi propio criterio de diseño. Obtuve el Google UX Design Certificate por el camino, pero la base son los años que pasé dentro de los problemas que ahora diseño.",
      "Leo y trabajo en portugués (nativo), español (fluido), francés (profesional), italiano (intermedio) e inglés. Estoy basado en {location}, trabajando de forma remota, y actualmente en transición — abierto a roles de producto y colaboraciones donde los problemas son reales.",
    ],
    ctaWork:    "Ver trabajos seleccionados",
    ctaContact: "Escribir",
  },

  labels: {
    intro:      "Intro",
    work:       "Trabajo",
    approach:   "Enfoque",
    process:    "Proceso",
    principles: "Principios",
    about:      "Sobre mí",
    contact:    "Contacto",
    thePath:    "El camino",
  },

  languageNames: {
    Portuguese: "Portugués", Spanish: "Español", French: "Francés",
    Italian: "Italiano", English: "Inglés",
  },
  languageLevels: {
    "Native": "Nativo", "Fluent": "Fluido",
    "Professional / Fluent": "Profesional", "Intermediate": "Intermedio",
    "Professional working": "Profesional",
  },

  projects: [
    {
      slug: "service-operations", category: "Caso conceptual",
      title: "Service Operations Dashboard",
      problem: "Una vista operativa de lo que está abierto al cambio de turno, para que la información deje de perderse entre herramientas, papel y memoria.",
      role: "Diseñador en solitario", year: "2026", href: "/work/service-operations",
    },
    {
      slug: "triageai", category: "Caso conceptual", title: "TriageAI",
      problem: "Gestión de solicitudes multilingüe controlada por personas — la IA estructura y prioriza, un humano aprueba cada respuesta antes de enviarla.",
      role: "Diseñador en solitario", year: "2026", href: "/work/triageai",
    },
    {
      category: "Próximamente", title: "Trabajo operativo",
      problem: "Años de trabajo real en operaciones de servicio convertidos en casos de estudio.",
      role: "Documentando", upcoming: true,
    },
    {
      category: "Próximamente", title: "Sistemas de diseño",
      problem: "Un caso centrado en sistemas en camino — componentes, tokens y las reglas entre ellos.",
      role: "Documentando", upcoming: true,
    },
  ],

  approachItems: [
    { title: "Entender el trabajo en profundidad", description: "Empiezo dentro de la operación — comportamientos, restricciones y dónde las cosas realmente fallan — antes de proponer nada." },
    { title: "Anclar en el contexto real", description: "Alineo cada decisión con cómo funciona realmente el negocio y qué es viable, no con cómo queda en una presentación." },
    { title: "Pensar en sistemas, no en pantallas", description: "Diseño la estructura primero — arquitectura de información, flujos, estados y reglas — para que se mantenga coherente a medida que crece." },
    { title: "Diseñar con claridad y contención", description: "Simplifico sin empobrecer. Jerarquía, contenido e interacción sobre decoración — claro, no ingenioso." },
    { title: "Construir pensando en la implementación", description: "Diseño sabiendo que tiene que funcionar, y trabajo con ingeniería en los casos límite y el handoff para que se construya bien." },
  ],

  processSteps: [
    { title: "Descubrir", icon: "search",       description: "Entender la operación, las personas y las restricciones antes de proponer nada.",         items: ["Hablar con quienes hacen el trabajo", "Mapear dónde vive la información", "Encontrar los puntos de fallo", "Separar evidencia de suposición"] },
    { title: "Definir",   icon: "frame",        description: "Convertir el caos en un problema claro que vale la pena resolver, con alcance explícito.", items: ["Definir el problema real", "Establecer qué entra y qué queda fuera", "Nombrar las restricciones", "Decidir cómo se ve el éxito"] },
    { title: "Sistemas",  icon: "sitemap",      description: "Diseñar la estructura antes que las pantallas — las reglas que mantienen la coherencia.",   items: ["Arquitectura de información", "Flujos principales", "Estados y reglas", "Tokens y componentes"] },
    { title: "Interfaz",  icon: "layout",       description: "Hacerlo claro, rápido y honesto — diseñado para el peor momento, no para la demo.",         items: ["Jerarquía y contraste", "Guiado, no libre", "Todos los estados, no solo el camino feliz", "Lenguaje claro"] },
    { title: "Validar",   icon: "check-circle", description: "Probar los supuestos con personas reales e iterar en lo que falla.",                        items: ["Mostrarlo a usuarios reales", "Observar comportamientos, no opiniones", "Iterar en lo que falla", "Mantener lo que funciona"] },
    { title: "Entregar",  icon: "send",         description: "Hacer el handoff para que se construya como se diseñó, con los casos límite documentados.",  items: ["Specs orientadas al build", "Trabajar con ingeniería", "Casos límite documentados", "Acompañar durante la implementación"] },
  ],

  principlesItems: [
    { annotation: "間 ma",    principle: "Claridad sobre ruido",          description: "Elimino lo innecesario para que lo que importa pueda hablar." },
    { annotation: "",         principle: "Utilidad primero",              description: "Diseño con propósito, resolviendo problemas reales para personas reales." },
    { annotation: "渋 shibui", principle: "Contención con intención",      description: "Elijo menos, pero con precisión — la contención es una característica, no una carencia." },
    { annotation: "",         principle: "Diseñar para el peor momento",  description: "La prueba real no es la demo — es una persona cansada a las 3am. Diseño para ellos." },
    { annotation: "",         principle: "Pensamiento sistémico",         description: "Veo el todo y diseño cada parte para que pertenezca y sea coherente." },
    { annotation: "",         principle: "Craft consciente de la implementación", description: "Me importa cómo se construye, porque eso decide si se entrega como fue diseñado." },
  ],
};

// ── Français ─────────────────────────────────────────────────────────────
const fr = {
  nav: { work: "Travaux", about: "À propos", approach: "Approche", contact: "Contact" },
  availability: "Disponible",

  hero: {
    title:  "Product designer avec une sensibilité *technique*.",
    lead:   "Je conçois des outils opérationnels pour les équipes de service — et je me soucie de la façon dont ils sont construits.",
    cta1:   "Voir les travaux",
    cta2:   "Découvrir mon approche",
  },

  work: {
    eyebrow:    "Travaux sélectionnés",
    heading:    "Travaux sélectionnés",
    subheading: "Deux études de cas complètes — le problème avant tout.",
    more:       "D'autres études de cas en cours — des pièces honnêtes valent mieux qu'une grille gonflée.",
  },

  approach: {
    eyebrow:    "Approche",
    heading:    "Concevoir avec *intention*, construire avec *perspective*.",
    subheading: "Mon approche relie les besoins des utilisateurs, les objectifs de l'entreprise et la réalité technique pour créer des produits utiles, utilisables et durables.",
  },

  process: {
    eyebrow:    "Processus",
    heading:    "Un processus clair. Pensé pour *l'impact*.",
    subheading: "Une façon structurée de transformer la complexité opérationnelle en clarté. Chaque étape s'appuie sur la précédente — utile, utilisable et prêt à livrer.",
  },

  principles: {
    eyebrow:    "Principes",
    heading:    "Des choix qui guident. *Un impact réel*.",
    subheading: "Ces principes façonnent ma façon de penser, de concevoir et de collaborer. Pas des règles, mais une boussole pour un travail qui a du sens.",
  },

  about: {
    eyebrow: "À propos de Breno",
    heading: "Product designer avec une vision *stratégique* et *opérationnelle*.",
    lead:    "J'aide les équipes à transformer la complexité en clarté et les idées en produits qui créent de la valeur. Mon travail se situe à l'intersection de la stratégie, de l'expérience et de l'exécution.",
    cta:     "Lire l'histoire complète",
    facts: {
      basedIn:       "Basé à",
      working:       "Mode de travail",
      workingValue:  "À distance · projets internationaux",
      languages:     "Langues",
      cert:          "Certification",
      certValue:     "Google UX Design Certificate",
    },
  },

  contact: {
    eyebrow:   "Connectons-nous",
    heading:   "Créons des produits avec *clarté* et *intention*.",
    body:      "Je suis actuellement disponible pour de nouvelles opportunités. Si le problème est réel, j'aimerais en entendre parler.",
    email:     "E-mail",
    location:  "Localisation",
    localTime: "Heure locale",
  },

  footer: {
    location:  "Valence, Espagne · travail à distance",
    elsewhere: "Ailleurs",
    tagline:   "Le bon design est discret, mais il laisse une trace.",
  },

  aboutPage: {
    eyebrow:    "À propos de Breno",
    heading:    "Product designer avec une vision *stratégique* et *opérationnelle*.",
    lead:       "Je suis venu au design depuis l'intérieur des opérations, pas de l'extérieur — et c'est encore ainsi que je travaille.",
    downloadCv: "Télécharger le CV",
    facts: {
      basedIn:       "Basé à",
      working:       "Mode de travail",
      workingValue:  "À distance · projets internationaux",
      languages:     "Langues",
      cert:          "Certification",
      certValue:     "Google UX Design Certificate",
      status:        "Statut",
      statusValue:   "Ouvert aux nouvelles opportunités · en transition",
    },
    storyEyebrow: "Le parcours",
    storyHeading: "De la gestion des opérations à leur *conception*.",
    story: [
      "Pendant des années, mon travail, c'était l'opération elle-même — la réception d'hôtel, le travail en équipe, les shifts, le front et back office là où les choses se passent vraiment. J'étais la personne qui prenait un shift avec la moitié du contexte manquant, ou qui le remettait en espérant que rien ne passe entre les mailles.",
      "C'est là que j'ai appris ce que le logiciel fait aux gens sous pression. Un bon outil disparaît et vous laisse faire le travail. Un mauvais devient une chose de plus à gérer. J'ai commencé à concevoir parce que je voulais construire le premier.",
      "Aujourd'hui, je travaille comme product designer avec une sensibilité à l'implémentation : je pense en systèmes, je construis et utilise des systèmes de design, et je travaille avec l'IA pour avancer plus vite dans la recherche, la structure et l'itération — tout en gardant le jugement design qui m'appartient. J'ai obtenu le Google UX Design Certificate en chemin, mais le fondement, c'est les années passées à l'intérieur des problèmes que je conçois maintenant.",
      "Je lis et travaille en portugais (langue maternelle), espagnol (courant), français (professionnel), italien (intermédiaire) et anglais. Je suis basé à {location}, en télétravail, et actuellement en transition — ouvert aux rôles produit et aux collaborations où les problèmes sont réels.",
    ],
    ctaWork:    "Voir les travaux",
    ctaContact: "Prendre contact",
  },

  labels: {
    intro:      "Intro",
    work:       "Travaux",
    approach:   "Approche",
    process:    "Processus",
    principles: "Principes",
    about:      "À propos",
    contact:    "Contact",
    thePath:    "Le parcours",
  },

  languageNames: {
    Portuguese: "Portugais", Spanish: "Espagnol", French: "Français",
    Italian: "Italien", English: "Anglais",
  },
  languageLevels: {
    "Native": "Langue maternelle", "Fluent": "Courant",
    "Professional / Fluent": "Professionnel", "Intermediate": "Intermédiaire",
    "Professional working": "Professionnel",
  },

  projects: [
    {
      slug: "service-operations", category: "Cas conceptuel",
      title: "Service Operations Dashboard",
      problem: "Une vue opérationnelle de ce qui est ouvert à la passation de poste, pour que l'information cesse de se perdre entre les outils, le papier et la mémoire.",
      role: "Seul designer", year: "2026", href: "/work/service-operations",
    },
    {
      slug: "triageai", category: "Cas conceptuel", title: "TriageAI",
      problem: "Gestion multilingue des demandes avec contrôle humain — l'IA structure et priorise, un humain valide chaque réponse avant envoi.",
      role: "Seul designer", year: "2026", href: "/work/triageai",
    },
    {
      category: "Bientôt disponible", title: "Travail opérationnel",
      problem: "Des années de vrai travail en opérations de service transformées en études de cas.",
      role: "En cours", upcoming: true,
    },
    {
      category: "Bientôt disponible", title: "Systèmes de design",
      problem: "Un cas centré sur les systèmes arrive — composants, tokens et les règles entre eux.",
      role: "En cours", upcoming: true,
    },
  ],

  approachItems: [
    { title: "Comprendre le travail en profondeur", description: "Je commence à l'intérieur de l'opération — comportements, contraintes et là où les choses cassent vraiment — avant de proposer quoi que ce soit." },
    { title: "Ancrer dans le contexte réel", description: "J'aligne chaque décision avec la façon dont l'entreprise fonctionne réellement et ce qui est faisable, pas sur ce que ça donne dans un slide." },
    { title: "Penser en systèmes, pas en écrans", description: "Je conçois la structure en premier — architecture de l'information, flux, états et règles — pour qu'elle reste cohérente à mesure qu'elle grandit." },
    { title: "Concevoir avec clarté et retenue", description: "Je simplifie sans appauvrir. Hiérarchie, contenu et interaction plutôt que décoration — clair, pas malin." },
    { title: "Construire avec l'implémentation en tête", description: "Je conçois en sachant que ça doit être livré, et je travaille avec l'ingénierie sur les cas limites et le handoff pour que ce soit bien construit." },
  ],

  processSteps: [
    { title: "Découvrir", icon: "search",       description: "Comprendre l'opération, les personnes et les contraintes avant de proposer quoi que ce soit.",            items: ["Parler aux gens qui font le travail", "Cartographier où vit l'information", "Trouver les points de rupture", "Séparer preuves et suppositions"] },
    { title: "Cadrer",    icon: "frame",        description: "Transformer le chaos en un problème clair qui vaut la peine d'être résolu, avec un périmètre explicite.", items: ["Définir le vrai problème", "Établir ce qui est dedans et dehors", "Nommer les contraintes", "Décider à quoi ressemble le succès"] },
    { title: "Systèmes",  icon: "sitemap",      description: "Concevoir la structure avant les écrans — les règles qui maintiennent la cohérence.",                     items: ["Architecture de l'information", "Flux principaux", "États et règles", "Tokens et composants"] },
    { title: "Interface", icon: "layout",       description: "Le rendre clair, rapide et honnête — conçu pour le pire moment, pas pour la démo.",                      items: ["Hiérarchie et contraste", "Guidé plutôt que libre", "Tous les états, pas seulement le bon chemin", "Langage simple"] },
    { title: "Valider",   icon: "check-circle", description: "Tester les hypothèses avec de vraies personnes et itérer sur ce qui casse.",                             items: ["Le mettre devant de vrais utilisateurs", "Observer les comportements, pas les opinions", "Itérer sur ce qui casse", "Garder ce qui tient"] },
    { title: "Livrer",    icon: "send",         description: "Faire le handoff pour que ça soit construit comme conçu, avec les cas limites documentés.",               items: ["Spécifications orientées build", "Travailler avec l'ingénierie", "Cas limites documentés", "Support pendant l'implémentation"] },
  ],

  principlesItems: [
    { annotation: "間 ma",    principle: "Clarté sur le bruit",           description: "J'enlève ce qui est inutile pour que ce qui compte puisse s'exprimer." },
    { annotation: "",         principle: "L'utilité avant tout",          description: "Je conçois avec un but, en résolvant de vrais problèmes pour de vraies personnes." },
    { annotation: "渋 shibui", principle: "Retenue avec intention",        description: "Je choisis moins, mais avec précision — la retenue est une qualité, pas un manque." },
    { annotation: "",         principle: "Concevoir pour le pire moment", description: "Le vrai test n'est pas la démo — c'est une personne fatiguée à 3h du matin. Je conçois pour elle." },
    { annotation: "",         principle: "Pensée systémique",             description: "Je vois l'ensemble, puis je conçois chaque partie pour qu'elle appartienne et reste cohérente." },
    { annotation: "",         principle: "Craft conscient de l'implémentation", description: "Je me soucie de la façon dont c'est construit, parce que c'est ce qui décide si c'est livré comme conçu." },
  ],
};

export const i18n = { en, es, fr };
export function getT(lang) { return i18n[lang] || i18n.en; }

// Splits "*word*" markers into [before, accent, after] fragments for rendering.
export function renderTitle(str) {
  const parts = str.split(/\*([^*]+)\*/);
  return parts.map((p, i) =>
    i % 2 === 0 ? p : <span key={i} className="accent">{p}</span>
  );
}
