import { SupportedLanguage } from '../types';

export interface Translations {
  appName: string;
  tagline: string;
  supportingMessage: string;
  heroHeadline: string;
  heroSupporting: string;
  exploreLisbon: string;
  askLisbonAi: string;
  whatWouldYouLikeToDo: string;
  filtersTitle: string;
  budgetLabel: string;
  interestLabel: string;
  timeAvailableLabel: string;
  clearFilters: string;
  indoorOnly: string;
  outdoorOnly: string;
  familyFriendly: string;
  accessible: string;
  metroAccessible: string;
  searchPlaceholder: string;
  placesFound: string;
  allCategories: string;
  allBudgets: string;
  allTimes: string;
  allNeighbourhoods: string;
  verifiedOfficial: string;
  priceEstimate: string;
  freeActivity: string;
  getDirections: string;
  officialSite: string;
  transitTips: string;
  localTip: string;
  hours: string;
  budgetPlannerTitle: string;
  budgetPlannerSubtitle: string;
  dailyBudget: string;
  calculatePlan: string;
  budgetDisclaimer: string;
  shortStaysTitle: string;
  shortStaysSubtitle: string;
  neighbourhoodsTitle: string;
  transportGuideTitle: string;
  creatorSectionTitle: string;
  creatorMessage: string;
  creatorSignature: string;
  builtByFooter: string;
  footerRights: string;
  aiIntro: string;
  aiPlaceholder: string;
  aiDisclaimer: string;
  liveAiConnected: string;
  curatedDemoMode: string;
  homepageCreatorTeaser: string;
  meetTheCreator: string;
  aboutTheCreatorTitle: string;
  backToExplore: string;
  aboutTheCreatorStory: string[];
  // Enhanced UI translations
  directoryTitle: string;
  directoryBadge: string;
  directoryShowing: string;
  directoryVerifiedPlaces: string;
  noPlacesFound: string;
  noPlacesHint: string;
  readMore: string;
  showLess: string;
  askAiAboutPlace: string;
  idealFor: string;
  estTotalCost: string;
  customiseWithAi: string;
  timelineTitle: string;
  localAdvice: string;
  transitAdviceTitle: string;
  explorePlan: string;
}

export const TRANSLATIONS: Record<SupportedLanguage, Translations> = {
  en: {
    appName: 'Lisbon Made Easy',
    tagline: 'Discover Lisbon. Make Every Moment Count.',
    supportingMessage: 'Your free local guide to Lisbon. Discover places, explore experiences, compare prices and find practical solutions for your stay.',
    heroHeadline: 'Lisbon, Made Easy.',
    heroSupporting: 'Not sure where to start? Discover places, food, experiences and practical tips to make the most of your time in Lisbon.',
    exploreLisbon: 'Explore Lisbon',
    askLisbonAi: 'Ask Lisbon AI',
    whatWouldYouLikeToDo: 'What Would You Like to Do?',
    filtersTitle: 'Quick Discovery Filters',
    budgetLabel: 'Budget',
    interestLabel: 'Interests',
    timeAvailableLabel: 'Available Time',
    clearFilters: 'Clear All Filters',
    indoorOnly: 'Indoor',
    outdoorOnly: 'Outdoor',
    familyFriendly: 'Family-friendly',
    accessible: 'Accessible',
    metroAccessible: 'Metro Accessible',
    searchPlaceholder: 'Search places, dishes, monuments, neighbourhoods...',
    placesFound: 'places found',
    allCategories: 'All Categories',
    allBudgets: 'Any Budget',
    allTimes: 'Any Duration',
    allNeighbourhoods: 'All Neighbourhoods',
    verifiedOfficial: 'Verified Official Info',
    priceEstimate: 'Indicative Price Estimate',
    freeActivity: 'Free Activity',
    getDirections: 'Get Directions',
    officialSite: 'Official Website',
    transitTips: 'Transit Advice',
    localTip: 'Local Tip',
    hours: 'Hours',
    budgetPlannerTitle: 'Prices & Lisbon Budget Planner',
    budgetPlannerSubtitle: 'Calculate realistic daily expenses with verified prices, authentic tascas, and transport passes.',
    dailyBudget: 'Your Target Daily Budget',
    calculatePlan: 'Calculate Day Plan',
    budgetDisclaimer: 'Estimated costs are indicative and may change. Check official sources before booking.',
    shortStaysTitle: 'Make the Most of Your Time',
    shortStaysSubtitle: 'Ready-to-use routes designed with realistic walking distances and verified transit.',
    neighbourhoodsTitle: 'Lisbon Neighbourhoods Explorer',
    transportGuideTitle: 'Transport & Airport Transfers Guide',
    creatorSectionTitle: 'A Local Perspective. A More Human Way to Explore Lisbon.',
    creatorMessage: `This app was created by a Portuguese local who has worked in tourism for several years and has a strong interest in Web3 and emerging technologies.

I hope it will be useful to visitors, especially those who only have a short time to discover Lisbon.

We all know how confusing it can be to arrive in another country, try to find our way around, understand local transport, discover places to eat, find something interesting to do or simply work out what is nearby. I know this feeling myself.

My aim is to make discovering Lisbon easier, more accessible and less stressful, with practical information and experiences that help visitors make the most of their stay.

I hope this little project makes your time in Lisbon a little easier, more enjoyable and more memorable.

Welcome to Lisbon!`,
    creatorSignature: 'Created in Portugal by AhnaX.',
    builtByFooter: 'Built by AhnaX · WebSubmit 2026',
    footerRights: 'Free & Independent Lisbon Companion. Less confusion. Easier access. More time to enjoy Lisbon.',
    aiIntro: 'Tell us what you need. We’ll help you explore your options.',
    aiPlaceholder: 'What would you like to find in Lisbon?',
    aiDisclaimer: 'Ask Lisbon AI provides practical local recommendations. Estimates are distinguished from verified rates.',
    liveAiConnected: 'Live Gemini 3.8 Flash Connected',
    curatedDemoMode: 'Curated Local Intelligence Mode',
    homepageCreatorTeaser: 'Created by a Portuguese local with years of experience in tourism, Lisbon Made Easy was built to make discovering Lisbon easier, less confusing and more enjoyable — especially for visitors with limited time.',
    meetTheCreator: 'Meet the Creator',
    aboutTheCreatorTitle: 'About the Creator',
    backToExplore: 'Back to Explore Lisbon',
    aboutTheCreatorStory: [
      "I created Lisbon Made Easy because I know that having access to information doesn't always make travelling in a foreign country easy.",
      "Having worked in tourism for several years, I wanted to create something practical, accessible and helpful for people discovering Lisbon.",
      "I'm Portuguese, part of this local community, and passionate about using technology to solve real-world problems. I'm a self-taught AI Product Builder exploring and building digital products, AI applications, intelligent agents, automation solutions, Web3 projects and blockchain-related ideas.",
      "My journey combines practical experience in tourism and hospitality with hands-on experimentation in AI, SaaS and emerging technologies. I believe in learning by doing, turning ideas into working products and finding practical ways to use technology to improve people's lives.",
      "Lisbon Made Easy is an independent project created to help visitors navigate Lisbon, discover interesting places and make the most of their stay.",
      "I'm also open to professional opportunities, collaborations and connections in AI, Web3, technology, tourism and digital innovation.",
      "I hope this little project makes your time in Lisbon a little easier, more enjoyable and more memorable."
    ],
    directoryTitle: 'Lisbon Discovery Directory',
    directoryBadge: 'Curated Directory',
    directoryShowing: 'Showing',
    directoryVerifiedPlaces: 'verified places & local experiences',
    noPlacesFound: 'No places match the selected filters',
    noPlacesHint: 'Try loosening your budget, time, or category filters to see more Lisbon highlights.',
    readMore: 'Read more details',
    showLess: 'Show less',
    askAiAboutPlace: 'Ask AI',
    idealFor: 'Ideal for',
    estTotalCost: 'Est. Total Cost',
    customiseWithAi: 'Customise with AI',
    timelineTitle: 'Realistic Timeline & Schedule',
    localAdvice: 'Local advice',
    transitAdviceTitle: 'Transit Advice',
    explorePlan: 'Explore places in this category'
  },

  pt: {
    appName: 'Lisbon Made Easy',
    tagline: 'Descubra Lisboa. Aproveite Cada Momento.',
    supportingMessage: 'O seu guia local gratuito para Lisboa. Descubra locais, viva experiências, compare preços e encontre soluções práticas para a sua estadia.',
    heroHeadline: 'Lisboa, de Forma Simples.',
    heroSupporting: 'Não sabe por onde começar? Descubra locais, gastronomia, experiências e dicas práticas para aproveitar ao máximo o seu tempo em Lisboa.',
    exploreLisbon: 'Explorar Lisboa',
    askLisbonAi: 'Perguntar à IA de Lisboa',
    whatWouldYouLikeToDo: 'O Que Gostaria de Fazer?',
    filtersTitle: 'Filtros Rápidos de Descoberta',
    budgetLabel: 'Orçamento',
    interestLabel: 'Interesses',
    timeAvailableLabel: 'Tempo Disponível',
    clearFilters: 'Limpar Filtros',
    indoorOnly: 'Interior',
    outdoorOnly: 'Ar Livre',
    familyFriendly: 'Para Famílias',
    accessible: 'Acessível',
    metroAccessible: 'Acesso por Metro',
    searchPlaceholder: 'Pesquisar locais, pratos, monumentos, bairros...',
    placesFound: 'locais encontrados',
    allCategories: 'Todas as Categorias',
    allBudgets: 'Qualquer Orçamento',
    allTimes: 'Qualquer Duração',
    allNeighbourhoods: 'Todos os Bairros',
    verifiedOfficial: 'Preço Oficial Verificado',
    priceEstimate: 'Estimativa Indicativa',
    freeActivity: 'Atividade Gratuita',
    getDirections: 'Como Chegar',
    officialSite: 'Site Oficial',
    transitTips: 'Dicas de Transporte',
    localTip: 'Dica Local',
    hours: 'Horário',
    budgetPlannerTitle: 'Preços e Planeador de Orçamento',
    budgetPlannerSubtitle: 'Calcule despesas diárias realistas com preços verificados, tascas autênticas e passes de transporte.',
    dailyBudget: 'O Seu Orçamento Diário Previsto',
    calculatePlan: 'Calcular Plano Diário',
    budgetDisclaimer: 'Os custos estimados são indicativos e podem sofrer alterações. Consulte fontes oficiais antes de reservar.',
    shortStaysTitle: 'Aproveite o Seu Tempo ao Máximo',
    shortStaysSubtitle: 'Roteiros prontos a usar pensados com distâncias a pé realistas e transportes verificados.',
    neighbourhoodsTitle: 'Explorador de Bairros de Lisboa',
    transportGuideTitle: 'Guia de Transportes e Aeroporto',
    creatorSectionTitle: 'Uma Perspetiva Local. Uma Forma Mais Humana de Explorar Lisboa.',
    creatorMessage: `Esta aplicação foi criada por uma pessoa local que trabalhou vários anos no turismo e tem um forte interesse em Web3 e tecnologias emergentes.

Espero que seja útil aos visitantes, especialmente a quem dispõe de pouco tempo para descobrir Lisboa.

Todos sabemos como pode ser confuso chegar a outro país, tentar orientar-se, compreender os transportes locais, descobrir onde comer, encontrar algo interessante para fazer ou simplesmente perceber o que está por perto. Conheço bem essa sensação.

O meu objetivo é tornar a descoberta de Lisboa mais simples, acessível e tranquila, com informações práticas e experiências que ajudem os visitantes a aproveitar ao máximo a sua estadia.

Espero que este pequeno projeto torne o seu tempo em Lisboa um pouco mais fácil, agradável e memorável.

Bem-vindo a Lisboa!`,
    creatorSignature: 'Criado em Portugal por AhnaX.',
    builtByFooter: 'Built by AhnaX · WebSubmit 2026',
    footerRights: 'Guia Gratuito e Independente de Lisboa. Menos confusão. Acesso mais fácil. Mais tempo para desfrutar de Lisboa.',
    aiIntro: 'Diga-nos o que procura. Nós ajudamos a explorar as suas opções.',
    aiPlaceholder: 'O que gostaria de encontrar em Lisboa?',
    aiDisclaimer: 'A IA de Lisboa fornece recomendações locais práticas com base em dados verificados.',
    liveAiConnected: 'Gemini 3.8 Flash Ativo',
    curatedDemoMode: 'Modo de Inteligência Local Curada',
    homepageCreatorTeaser: 'Criado por uma pessoa local com anos de experiência em turismo, o Lisbon Made Easy foi concebido para tornar a descoberta de Lisboa mais simples, intuitiva e agradável — especialmente para quem dispõe de pouco tempo.',
    meetTheCreator: 'Conheça o Criador',
    aboutTheCreatorTitle: 'Sobre o Criador',
    backToExplore: 'Voltar a Explorar Lisboa',
    aboutTheCreatorStory: [
      "Criei o Lisbon Made Easy porque sei que ter acesso à informação nem sempre facilita viajar num país estrangeiro.",
      "Tendo trabalhado vários anos no turismo, quis criar algo prático, acessível e útil para quem está a descobrir Lisboa.",
      "Sou português, parte desta comunidade local e apaixonado por utilizar a tecnologia para resolver desafios do mundo real. Sou um AI Product Builder autodidata que explora e cria produtos digitais, aplicações de IA, agentes inteligentes, automações, projetos Web3 e conceitos ligados a blockchain.",
      "O meu percurso combina experiência prática em turismo e hospitalidade com experimentação contínua em IA, SaaS e tecnologias emergentes. Acredito na aprendizagem prática, em transformar ideias em produtos funcionais e em encontrar formas úteis de usar a tecnologia para melhorar a vida das pessoas.",
      "O Lisbon Made Easy é um projeto independente criado para ajudar os visitantes a orientarem-se em Lisboa, descobrirem locais autênticos e aproveitarem a estadia ao máximo.",
      "Estou também aberto a oportunidades profissionais, colaborações e parcerias em IA, Web3, tecnologia, turismo e inovação digital.",
      "Espero que este pequeno projeto torne o seu tempo em Lisboa um pouco mais simples, agradável e inesquecível."
    ],
    directoryTitle: 'Diretório de Descoberta de Lisboa',
    directoryBadge: 'Diretório Selecionado',
    directoryShowing: 'A mostrar',
    directoryVerifiedPlaces: 'locais verificados e experiências',
    noPlacesFound: 'Nenhum local corresponde aos filtros selecionados',
    noPlacesHint: 'Experimente alargar o orçamento, o tempo ou a categoria para ver mais opções de Lisboa.',
    readMore: 'Ver mais detalhes',
    showLess: 'Ver menos',
    askAiAboutPlace: 'Perguntar à IA',
    idealFor: 'Ideal para',
    estTotalCost: 'Custo Total Estimado',
    customiseWithAi: 'Personalizar com IA',
    timelineTitle: 'Itinerário e Horários Realistas',
    localAdvice: 'Conselho local',
    transitAdviceTitle: 'Dica de Transporte',
    explorePlan: 'Explorar locais desta categoria'
  },

  es: {
    appName: 'Lisbon Made Easy',
    tagline: 'Descubre Lisboa. Haz que Cada Momento Cuente.',
    supportingMessage: 'Tu guía local gratuita de Lisboa. Descubre lugares, explora experiencias, compara precios y encuentra soluciones prácticas.',
    heroHeadline: 'Lisboa, de Forma Sencilla.',
    heroSupporting: '¿No sabes por dónde empezar? Descubre lugares, comida, experiencias y consejos prácticos para aprovechar tu estancia.',
    exploreLisbon: 'Explorar Lisboa',
    askLisbonAi: 'Preguntar a la IA de Lisboa',
    whatWouldYouLikeToDo: '¿Qué te gustaría hacer?',
    filtersTitle: 'Filtros de Descubrimiento Rápido',
    budgetLabel: 'Presupuesto',
    interestLabel: 'Intereses',
    timeAvailableLabel: 'Tiempo Disponible',
    clearFilters: 'Borrar Filtros',
    indoorOnly: 'Interior',
    outdoorOnly: 'Al aire libre',
    familyFriendly: 'Ideal para familias',
    accessible: 'Accesible',
    metroAccessible: 'Cerca del metro',
    searchPlaceholder: 'Buscar sitios, platos, monumentos, barrios...',
    placesFound: 'lugares encontrados',
    allCategories: 'Todas las Categorías',
    allBudgets: 'Cualquier Presupuesto',
    allTimes: 'Cualquier Duración',
    allNeighbourhoods: 'Todos los Barrios',
    verifiedOfficial: 'Precio Oficial Verificado',
    priceEstimate: 'Precio Estimado Indicativo',
    freeActivity: 'Actividad Gratuita',
    getDirections: 'Cómo llegar',
    officialSite: 'Sitio Oficial',
    transitTips: 'Consejos de Transporte',
    localTip: 'Consejo Local',
    hours: 'Horarios',
    budgetPlannerTitle: 'Precios y Planificador de Presupuesto',
    budgetPlannerSubtitle: 'Calcula gastos diarios realistas con precios verificados y tascas tradicionales.',
    dailyBudget: 'Tu Presupuesto Diario Objetivo',
    calculatePlan: 'Calcular Plan del Día',
    budgetDisclaimer: 'Los costes estimados son indicativos y pueden variar. Consulta fuentes oficiales antes de reservar.',
    shortStaysTitle: 'Aprovecha Tu Tiempo al Máximo',
    shortStaysSubtitle: 'Rutas listas para usar con tiempos a pie y transporte reales.',
    neighbourhoodsTitle: 'Guía de Barrios de Lisboa',
    transportGuideTitle: 'Guía de Transporte y Aeropuerto',
    creatorSectionTitle: 'Una Perspectiva Local. Una Forma Más Humana de Explorar Lisboa.',
    creatorMessage: `Esta aplicación fue creada por un residente local portugués que ha trabajado varios años en turismo y siente una gran pasión por la Web3 y las tecnologías emergentes.

Espero que sea útil para los visitantes, especialmente para quienes disponen de poco tiempo para descubrir Lisboa.

Todos sabemos lo confuso que puede ser llegar a otro país, intentar orientarse, entender el transporte público, descubrir dónde comer o encontrar actividades interesantes. Conozco bien esa sensación.

Mi objetivo es hacer que descubrir Lisboa sea más fácil, accesible y sin estrés, con datos prácticos que te permitan aprovechar tu estancia al máximo.

Espero que este pequeño proyecto haga que tu tiempo en Lisboa sea más sencillo, agradable e inolvidable.

¡Bienvenido a Lisboa!`,
    creatorSignature: 'Creado en Portugal por AhnaX.',
    builtByFooter: 'Built by AhnaX · WebSubmit 2026',
    footerRights: 'Guía local gratuita e independiente. Menos confusión. Acceso más fácil.',
    aiIntro: 'Cuéntanos qué necesitas. Te ayudaremos a explorar tus opciones.',
    aiPlaceholder: '¿Qué te gustaría encontrar en Lisboa?',
    aiDisclaimer: 'La IA ofrece recomendaciones prácticas distinguiendo precios reales de estimados.',
    liveAiConnected: 'Gemini 3.8 Flash Conectado',
    curatedDemoMode: 'Modo de Inteligencia Local Curada',
    homepageCreatorTeaser: 'Creado por un habitante local portugués con años de experiencia en turismo, Lisbon Made Easy nació para hacer que descubrir Lisboa sea más fácil, menos confuso y más gratificante.',
    meetTheCreator: 'Conoce al Creador',
    aboutTheCreatorTitle: 'Sobre el Creador',
    backToExplore: 'Volver a Explorar Lisboa',
    aboutTheCreatorStory: [
      "Creé Lisbon Made Easy porque sé que tener acceso a información no siempre hace que viajar en otro país sea sencillo.",
      "Habiendo trabajado en turismo durante varios años, quería crear algo práctico, accesible y verdaderamente útil para quienes descubren Lisboa.",
      "Soy portugués, parte de esta comunidad local y me apasiona usar la tecnología para resolver problemas reales. Soy un creador autodidacta de productos de IA explorando soluciones de automatización, agentes inteligentes y proyectos Web3.",
      "Mi trayectoria combina la experiencia en turismo y hospitalidad con la experimentación directa en IA y tecnologías emergentes.",
      "Lisbon Made Easy es un proyecto independiente creado para ayudar a los visitantes a moverse por Lisboa y disfrutar al máximo de su estancia.",
      "También estoy abierto a oportunidades profesionales, colaboraciones y conexiones en IA, Web3, tecnología, turismo e innovación digital.",
      "Espero que este proyecto haga que tu tiempo en Lisboa sea más fácil, agradable y memorable."
    ],
    directoryTitle: 'Directorio de Descubrimiento de Lisboa',
    directoryBadge: 'Directorio Seleccionado',
    directoryShowing: 'Mostrando',
    directoryVerifiedPlaces: 'lugares verificados y experiencias',
    noPlacesFound: 'Ningún lugar coincide con los filtros seleccionados',
    noPlacesHint: 'Prueba a ampliar el presupuesto o tiempo para ver más opciones.',
    readMore: 'Ver más detalles',
    showLess: 'Ver menos',
    askAiAboutPlace: 'Preguntar a la IA',
    idealFor: 'Ideal para',
    estTotalCost: 'Coste Total Estimado',
    customiseWithAi: 'Personalizar con IA',
    timelineTitle: 'Itinerario y Horarios Realistas',
    localAdvice: 'Consejo local',
    transitAdviceTitle: 'Consejo de Transporte',
    explorePlan: 'Explorar lugares de esta categoría'
  },

  de: {
    appName: 'Lisbon Made Easy',
    tagline: 'Lissabon Entdecken. Jeden Moment Genießen.',
    supportingMessage: 'Ihr kostenloser lokaler Reiseführer für Lissabon. Orte entdecken, Preise vergleichen und praktische Lösungen finden.',
    heroHeadline: 'Lissabon, Ganz Einfach.',
    heroSupporting: 'Nicht sicher, wo Sie anfangen sollen? Entdecken Sie Orte, Essen, Erlebnisse und praktische Tipps für Lissabon.',
    exploreLisbon: 'Lissabon Erkunden',
    askLisbonAi: 'Lissabon KI Fragen',
    whatWouldYouLikeToDo: 'Was Möchten Sie Unternehmen?',
    filtersTitle: 'Schnelle Filter',
    budgetLabel: 'Budget',
    interestLabel: 'Interessen',
    timeAvailableLabel: 'Verfügbare Zeit',
    clearFilters: 'Filter zurücksetzen',
    indoorOnly: 'Drinnen',
    outdoorOnly: 'Draußen',
    familyFriendly: 'Familienfreundlich',
    accessible: 'Barrierefrei',
    metroAccessible: 'Mit der Metro erreichbar',
    searchPlaceholder: 'Orte, Gerichte, Viertel suchen...',
    placesFound: 'Orte gefunden',
    allCategories: 'Alle Kategorien',
    allBudgets: 'Jedes Budget',
    allTimes: 'Jede Dauer',
    allNeighbourhoods: 'Alle Stadtteile',
    verifiedOfficial: 'Verifizierter Preis',
    priceEstimate: 'Geschätzter Richtpreis',
    freeActivity: 'Kostenlose Aktivität',
    getDirections: 'Wegbeschreibung',
    officialSite: 'Offizielle Website',
    transitTips: 'Verkehrstipps',
    localTip: 'Lokaler Tipp',
    hours: 'Öffnungszeiten',
    budgetPlannerTitle: 'Preise & Budgetplaner für Lissabon',
    budgetPlannerSubtitle: 'Berechnen Sie realistische Tagesausgaben mit verifizierten Preisen und lokalen Tascas.',
    dailyBudget: 'Ihr Tagesbudget in Euro',
    calculatePlan: 'Tagesplan berechnen',
    budgetDisclaimer: 'Geschätzte Kosten sind Richtwerte. Vor der Buchung offizielle Quellen prüfen.',
    shortStaysTitle: 'Nutzen Sie Ihre Zeit Optimal',
    shortStaysSubtitle: 'Fertige Routen mit realistischen Entfernungen und Fahrzeiten.',
    neighbourhoodsTitle: 'Lissabons Stadtviertel-Guide',
    transportGuideTitle: 'Transport & Flughafentransfer',
    creatorSectionTitle: 'Eine Lokale Perspektive. Eine Menschlichere Art, Lissabon zu Erkunden.',
    creatorMessage: `Diese App wurde von einem Einheimischen entwickelt, der mehrere Jahre im Tourismus gearbeitet hat und ein starkes Interesse an Web3 und neuen Technologien hat.

Ich hoffe, dass sie für Besucher nützlich ist, besonders für diejenigen, die nur wenig Zeit haben, um Lissabon zu entdecken.

Wir alle wissen, wie verwirrend es sein kann, in einem fremden Land anzukommen, sich zu orientieren, den Nahverkehr zu verstehen, gute Restaurants zu finden oder einfach zu sehen, was in der Nähe liegt. Ich kenne dieses Gefühl selbst sehr gut.

Mein Ziel ist es, das Entdecken von Lissabon einfacher, zugänglicher und stressfreier zu machen – mit praktischen Informationen und Erlebnissen, die Ihnen helfen, das Beste aus Ihrem Aufenthalt herauszuholen.

Ich hoffe, dieses kleine Projekt macht Ihre Zeit in Lissabon einfacher, angenehmer und unvergesslich.

Willkommen in Lissabon!`,
    creatorSignature: 'Erstellt in Portugal von AhnaX.',
    builtByFooter: 'Built by AhnaX · WebSubmit 2026',
    footerRights: 'Kostenloser und unabhängiger Reisebegleiter für Lissabon.',
    aiIntro: 'Sagen Sie uns, was Sie suchen. Wir helfen Ihnen, die besten Optionen zu finden.',
    aiPlaceholder: 'Was möchten Sie in Lissabon finden?',
    aiDisclaimer: 'Die KI liefert praktische Empfehlungen mit transparenten Preisangaben.',
    liveAiConnected: 'Gemini 3.8 Flash Verbunden',
    curatedDemoMode: 'Kuratierter Lokaler Intelligenzmodus',
    homepageCreatorTeaser: 'Erstellt von einem einheimischen Portugiesen mit jahrelanger Erfahrung im Tourismus, um die Entdeckung Lissabons einfacher, verständlicher und angenehmer zu gestalten.',
    meetTheCreator: 'Über den Entwickler',
    aboutTheCreatorTitle: 'Über den Entwickler',
    backToExplore: 'Zurück zu Lissabon Erkunden',
    aboutTheCreatorStory: [
      "Ich habe Lisbon Made Easy entwickelt, weil ich weiß, dass der bloße Zugang zu Informationen das Reisen in einem fremden Land nicht immer einfach macht.",
      "Nach mehreren Jahren im Tourismus wollte ich etwas Praktisches, Zugängliches und Hilfreiches für Reisende in Lissabon schaffen.",
      "Ich bin Portugiese, Teil dieser lokalen Gemeinschaft und begeistert davon, Technologie zur Lösung realer Herausforderungen einzusetzen. Als autodidaktischer AI Product Builder entwickle ich digitale Produkte, KI-Anwendungen und Web3-Projekte.",
      "Mein Weg verbindet praktische Erfahrung im Gastgewerbe mit kontinuierlicher Erprobung moderner Technologien.",
      "Lisbon Made Easy ist ein unabhängiges Projekt, das Besuchern hilft, sich in Lissabon zurechtzufinden und ihren Aufenthalt optimal zu nutzen.",
      "Ich bin auch offen für berufliche Möglichkeiten und Kooperationen in KI, Web3, Tourismus und digitaler Innovation.",
      "Ich hoffe, dieses kleine Projekt macht Ihre Zeit in Lissabon einfacher, angenehmer und unvergesslich."
    ],
    directoryTitle: 'Lissabon Entdeckungsverzeichnis',
    directoryBadge: 'Kuratierter Guide',
    directoryShowing: 'Zeigt',
    directoryVerifiedPlaces: 'geprüfte Orte & Erlebnisse',
    noPlacesFound: 'Keine Orte entsprechen den gewählten Filtern',
    noPlacesHint: 'Passen Sie Budget oder Zeit an, um mehr Highlights zu sehen.',
    readMore: 'Mehr Details',
    showLess: 'Weniger anzeigen',
    askAiAboutPlace: 'KI Fragen',
    idealFor: 'Ideal für',
    estTotalCost: 'Geschätzte Gesamtkosten',
    customiseWithAi: 'Mit KI anpassen',
    timelineTitle: 'Realistischer Ablauf & Zeitplan',
    localAdvice: 'Lokaler Rat',
    transitAdviceTitle: 'Verkehrstipp',
    explorePlan: 'Orte dieser Kategorie erkunden'
  },

  fr: {
    appName: 'Lisbon Made Easy',
    tagline: 'Découvrez Lisbonne. Profitez de Chaque Instant.',
    supportingMessage: 'Votre guide local gratuit de Lisbonne. Découvrez des lieux, comparez les prix et profitez de votre séjour.',
    heroHeadline: 'Lisbonne, en Toute Simplicité.',
    heroSupporting: 'Vous ne savez pas par où commencer ? Découvrez des lieux, restaurants et conseils pratiques pour profiter de Lisbonne.',
    exploreLisbon: 'Explorer Lisbonne',
    askLisbonAi: 'Demander à l’IA de Lisbonne',
    whatWouldYouLikeToDo: 'Que Souhaitez-vous Faire ?',
    filtersTitle: 'Filtres de Découverte Rapide',
    budgetLabel: 'Budget',
    interestLabel: 'Centres d’intérêt',
    timeAvailableLabel: 'Temps Disponible',
    clearFilters: 'Effacer les filtres',
    indoorOnly: 'En intérieur',
    outdoorOnly: 'En plein air',
    familyFriendly: 'Pour les familles',
    accessible: 'Accessible',
    metroAccessible: 'Accessible en métro',
    searchPlaceholder: 'Rechercher un lieu, un plat, un quartier...',
    placesFound: 'lieux trouvés',
    allCategories: 'Toutes Catégories',
    allBudgets: 'Tout Budget',
    allTimes: 'Toute Durée',
    allNeighbourhoods: 'Tous les Quartiers',
    verifiedOfficial: 'Tarif Officiel Vérifié',
    priceEstimate: 'Estimation Indicative',
    freeActivity: 'Activité Gratuite',
    getDirections: 'Itinéraire',
    officialSite: 'Site Officiel',
    transitTips: 'Conseils Transport',
    localTip: 'Astuce Locale',
    hours: 'Horaires',
    budgetPlannerTitle: 'Prix et Planificateur de Budget',
    budgetPlannerSubtitle: 'Estimez vos dépenses quotidiennes avec des prix fiables et des adresses authentiques.',
    dailyBudget: 'Votre Budget Journalier Prévu',
    calculatePlan: 'Calculer l’Itinéraire du Jour',
    budgetDisclaimer: 'Les coûts estimés sont indicatifs et sujets à modification. Vérifiez auprès des sources officielles.',
    shortStaysTitle: 'Optimisez Votre Temps',
    shortStaysSubtitle: 'Des parcours prêts à l’emploi avec des temps de trajet réalistes.',
    neighbourhoodsTitle: 'Guide des Quartiers de Lisbonne',
    transportGuideTitle: 'Guide des Transports et Aéroport',
    creatorSectionTitle: 'Une Perspective Locale. Une Façon Plus Humaine d’Explorer Lisbonne.',
    creatorMessage: `Cette application a été créée par un habitant local ayant travaillé plusieurs années dans le tourisme, avec un vif intérêt pour le Web3 et les technologies émergentes.

J'espère qu'elle sera utile aux visiteurs, particulièrement à ceux qui n'ont que peu de temps pour découvrir Lisbonne.

Nous savons tous à quel point il peut être déroutant d'arriver dans un autre pays, de s'orienter, de comprendre les transports locaux, de dénicher de bonnes tables ou d'identifier ce qui se trouve à proximité. Je connais très bien ce sentiment.

Mon but est de rendre la découverte de Lisbonne plus simple, accessible et sereine, grâce à des informations pratiques et des expériences authentiques.

J'espère que ce projet rendra votre séjour à Lisbonne plus facile, agréable et mémorable.

Bienvenue à Lisbonne !`,
    creatorSignature: 'Créé au Portugal par AhnaX.',
    builtByFooter: 'Built by AhnaX · WebSubmit 2026',
    footerRights: 'Compagnon de voyage gratuit et indépendant pour Lisbonne.',
    aiIntro: 'Dites-nous ce dont vous avez besoin. Nous explorerons les options pour vous.',
    aiPlaceholder: 'Que cherchez-vous à Lisbonne ?',
    aiDisclaimer: 'L’assistant propose des conseils pratiques vérifiés.',
    liveAiConnected: 'Gemini 3.8 Flash Connecté',
    curatedDemoMode: 'Mode Intelligence Locale Curatée',
    homepageCreatorTeaser: 'Créé par un habitant portugais fort de plusieurs années d’expérience dans le tourisme, Lisbon Made Easy a été conçu pour rendre la découverte de Lisbonne plus simple et plus agréable.',
    meetTheCreator: 'Rencontrer le Créateur',
    aboutTheCreatorTitle: 'À Propos du Créateur',
    backToExplore: 'Retour à Lisbonne',
    aboutTheCreatorStory: [
      "J'ai créé Lisbon Made Easy parce que je sais qu'avoir accès à des informations ne rend pas toujours les voyages à l'étranger simples.",
      "Ayant travaillé dans le tourisme pendant plusieurs années, je voulais concevoir un outil pratique, accessible et véritablement utile pour découvrir Lisbonne.",
      "Je suis portugais, membre de cette communauté locale et passionné par l'utilisation de la technologie pour résoudre des défis concrets. Je suis un AI Product Builder autodidacte concevant des applications d'IA, des agents intelligents et des projets Web3.",
      "Mon parcours associe une expérience pratique dans le tourisme et l'hôtellerie à une expérimentation continue dans les technologies émergentes.",
      "Lisbon Made Easy est un projet indépendant créé pour aider les visiteurs à naviguer facilement dans Lisbonne et à profiter au mieux de leur séjour.",
      "Je suis également ouvert aux opportunités professionnelles, collaborations et partenariats dans l'IA, le Web3, le tourisme et l'innovation numérique.",
      "J'espère que ce projet rendra votre séjour à Lisbonne plus simple, agréable et mémorable."
    ],
    directoryTitle: 'Répertoire des Découvertes de Lisbonne',
    directoryBadge: 'Sélection Curatée',
    directoryShowing: 'Affichage de',
    directoryVerifiedPlaces: 'lieux vérifiés & expériences',
    noPlacesFound: 'Aucun lieu ne correspond aux filtres sélectionnés',
    noPlacesHint: 'Essayez d’élargir vos filtres de budget ou de temps pour voir d’autres suggestions.',
    readMore: 'Voir plus de détails',
    showLess: 'Voir moins',
    askAiAboutPlace: 'Demander à l\'IA',
    idealFor: 'Idéal pour',
    estTotalCost: 'Coût Total Estimé',
    customiseWithAi: 'Personnaliser avec l\'IA',
    timelineTitle: 'Itinéraire & Horaires Réalistes',
    localAdvice: 'Conseil local',
    transitAdviceTitle: 'Conseil Transport',
    explorePlan: 'Explorer cette catégorie'
  },

  it: {
    appName: 'Lisbon Made Easy',
    tagline: 'Scopri Lisbona. Vivi Ogni Momento al Meglio.',
    supportingMessage: 'La tua guida locale gratuita per Lisbona. Scopri luoghi, confronta prezzi e trova soluzioni pratiche per il tuo soggiorno.',
    heroHeadline: 'Lisbona, Resa Semplice.',
    heroSupporting: 'Non sai da dove iniziare? Scopri luoghi, cibo, esperienze e consigli pratici per sfruttare al meglio il tuo tempo a Lisbona.',
    exploreLisbon: 'Esplora Lisbona',
    askLisbonAi: 'Chiedi all’IA di Lisbona',
    whatWouldYouLikeToDo: 'Cosa Vorresti Fare?',
    filtersTitle: 'Filtri di Ricerca Rapida',
    budgetLabel: 'Budget',
    interestLabel: 'Interessi',
    timeAvailableLabel: 'Tempo a Disposizione',
    clearFilters: 'Azzera Filtri',
    indoorOnly: 'Al chiuso',
    outdoorOnly: 'All’aperto',
    familyFriendly: 'Per famiglie',
    accessible: 'Accessibile',
    metroAccessible: 'Raggiungibile in metro',
    searchPlaceholder: 'Cerca luoghi, piatti tipici, quartieri...',
    placesFound: 'luoghi trovati',
    allCategories: 'Tutte le Categorie',
    allBudgets: 'Tutti i Budget',
    allTimes: 'Qualsiasi Durata',
    allNeighbourhoods: 'Tutti i Quartieri',
    verifiedOfficial: 'Prezzo Ufficiale Verificato',
    priceEstimate: 'Stima Indicativa',
    freeActivity: 'Attività Gratuita',
    getDirections: 'Ottieni Indicazioni',
    officialSite: 'Sito Ufficiale',
    transitTips: 'Consigli sui Trasporti',
    localTip: 'Consiglio Locale',
    hours: 'Orari',
    budgetPlannerTitle: 'Prezzi e Pianificatore di Budget',
    budgetPlannerSubtitle: 'Calcola spese giornaliere realistiche con prezzi verificati e tasche tradizionali.',
    dailyBudget: 'Il Tuo Budget Giornaliero',
    calculatePlan: 'Calcola Piano della Giornata',
    budgetDisclaimer: 'I costi stimati sono indicativi e soggetti a variazioni. Verifica sempre sui canali ufficiali.',
    shortStaysTitle: 'Ottimizza il Tuo Tempo',
    shortStaysSubtitle: 'Itinerari pronti all’uso con distanze e tempi di trasporto realistici.',
    neighbourhoodsTitle: 'Guida ai Quartieri di Lisbona',
    transportGuideTitle: 'Guida ai Trasporti e Aeroporto',
    creatorSectionTitle: 'Una Prospettiva Locale. Un Modo Più Umano per Esplorare Lisbona.',
    creatorMessage: `Questa app è stata creata da un residente portoghese che ha lavorato per diversi anni nel turismo e nutre un forte interesse per il Web3 e le tecnologie emergenti.

Spero che sia utile ai visitatori, specialmente a chi ha poco tempo per scoprire Lisbona.

Sappiamo tutti quanto possa essere disorientante arrivare in un altro paese, orientarsi, capire i trasporti pubblici, trovare posti autentici dove mangiare o scoprire cosa c'è nelle vicinanze. Conosco bene questa sensazione.

Il mio obiettivo è rendere la scoperta di Lisbona più semplice, accessibile e serena, con consigli pratici per vivere al meglio il vostro soggiorno.

Spero che questo piccolo progetto renda il vostro tempo a Lisbona più facile, piacevole e memorabile.

Benvenuti a Lisbona!`,
    creatorSignature: 'Creato in Portogallo da AhnaX.',
    builtByFooter: 'Built by AhnaX · WebSubmit 2026',
    footerRights: 'Guida gratuita e indipendente per esplorare Lisbona con semplicità.',
    aiIntro: 'Dicci cosa cerchi. Ti aiuteremo a trovare le opzioni migliori.',
    aiPlaceholder: 'Cosa vorresti scoprire a Lisbona?',
    aiDisclaimer: 'L’IA offre suggerimenti pratici distinguendo prezzi verificati da stime.',
    liveAiConnected: 'Gemini 3.8 Flash Connesso',
    curatedDemoMode: 'Modalità Intelligenza Locale Curata',
    homepageCreatorTeaser: 'Creato da un residente portoghese con anni di esperienza nel turismo, Lisbon Made Easy è nato per rendere la scoperta di Lisbona più semplice, chiara e piacevole.',
    meetTheCreator: 'Conosci il Creatore',
    aboutTheCreatorTitle: 'Informazioni sul Creatore',
    backToExplore: 'Torna a Esplora Lisbona',
    aboutTheCreatorStory: [
      "Ho creato Lisbon Made Easy perché so che avere accesso alle informazioni non rende sempre facile viaggiare in un paese straniero.",
      "Avendo lavorato nel turismo per diversi anni, volevo creare qualcosa di pratico, accessibile e davvero utile per chi scopre Lisbona.",
      "Sono portoghese, parte di questa comunità locale e appassionato nell'usare la tecnologia per risolvere problemi reali. Sono un AI Product Builder autodidatta che sviluppa applicazioni IA, agenti intelligenti e progetti Web3.",
      "Il mio percorso unisce l'esperienza nell'ospitalità alla sperimentazione diretta nelle tecnologie emergenti.",
      "Lisbon Made Easy è un progetto indipendente creato per aiutare i visitatori a orientarsi a Lisbona e a vivere al meglio il loro soggiorno.",
      "Sono aperto a opportunità professionali, collaborazioni e connessioni in IA, Web3, tecnologia, turismo e innovazione digitale.",
      "Spero che questo piccolo progetto renda il tuo tempo a Lisbona più semplice, piacevole e memorabile."
    ],
    directoryTitle: 'Directory delle Scoperte di Lisbona',
    directoryBadge: 'Directory Curata',
    directoryShowing: 'Mostrando',
    directoryVerifiedPlaces: 'luoghi verificati ed esperienze',
    noPlacesFound: 'Nessun luogo corrisponde ai filtri selezionati',
    noPlacesHint: 'Prova a modificare i filtri per vedere altre opzioni di Lisbona.',
    readMore: 'Maggiori dettagli',
    showLess: 'Mostra meno',
    askAiAboutPlace: 'Chiedi all\'IA',
    idealFor: 'Ideale per',
    estTotalCost: 'Costo Totale Stimato',
    customiseWithAi: 'Personalizza con l\'IA',
    timelineTitle: 'Itinerario e Orari Realistici',
    localAdvice: 'Consiglio locale',
    transitAdviceTitle: 'Consiglio Trasporti',
    explorePlan: 'Esplora luoghi di questa categoria'
  },

  ar: {
    appName: 'Lisbon Made Easy',
    tagline: 'اكتشف لشبونة. استمتع بكل لحظة.',
    supportingMessage: 'دليلك المحلي المجاني في لشبونة. استكشف الأماكن، وقارن الأسعار، وتعرف على الحلول العملية لإقامتك.',
    heroHeadline: 'لشبونة، بكل سهولة.',
    heroSupporting: 'لست متأكداً من أين تبدأ؟ اكتشف المعالم والمأكولات والتجارب والنصائح العملية لتستفيد بأفضل شكل من وقتك في لشبونة.',
    exploreLisbon: 'استكشف لشبونة',
    askLisbonAi: 'اسأل ذكاء لشبونة الاصطناعي',
    whatWouldYouLikeToDo: 'ماذا تود أن تفعل؟',
    filtersTitle: 'خيارات التصفية السريعة',
    budgetLabel: 'الميزانية',
    interestLabel: 'الاهتمامات',
    timeAvailableLabel: 'الوقت المتاح',
    clearFilters: 'إعادة ضبط الخيارات',
    indoorOnly: 'داخل الأماكن المغلقة',
    outdoorOnly: 'في الهواء الطلق',
    familyFriendly: 'مناسب للعائلات',
    accessible: 'مهيأ للكراسي المتحركة',
    metroAccessible: 'متاح بالمترو',
    searchPlaceholder: 'ابحث عن الأماكن، الأطباق، المعالم، الأحياء...',
    placesFound: 'مكان تم العثور عليه',
    allCategories: 'جميع الفئات',
    allBudgets: 'أي ميزانية',
    allTimes: 'أي مدة',
    allNeighbourhoods: 'جميع الأحياء',
    verifiedOfficial: 'سعر رسمي موثق',
    priceEstimate: 'سعر تقديري تقريبي',
    freeActivity: 'نشاط مجاني',
    getDirections: 'الاتجاهات على الخريطة',
    officialSite: 'الموقع الرسمي',
    transitTips: 'نصائح المواصلات',
    localTip: 'نصيحة محلية',
    hours: 'ساعات العمل',
    budgetPlannerTitle: 'الأسعار ومخطط الميزانية في لشبونة',
    budgetPlannerSubtitle: 'احسب مصاريفك اليومية بدقة مع أسعار موثقة ومطاعم تقليدية وتذاكر النقل.',
    dailyBudget: 'ميزانيتك اليومية المستهدفة',
    calculatePlan: 'احسب خطة اليوم',
    budgetDisclaimer: 'التكاليف التقديرية قابلة للتغيير. يُرجى التحقق من المصادر الرسمية قبل الحجز.',
    shortStaysTitle: 'استثمر وقتك بأفضل طريقة',
    shortStaysSubtitle: 'مسارات جاهزة ومحسوبة بمسافات المشي والمواصلات الحقيقية.',
    neighbourhoodsTitle: 'دليل أحياء لشبونة',
    transportGuideTitle: 'دليل المواصلات والتنقل من المطار',
    creatorSectionTitle: 'رؤية محلية. طريقة أكثر إنسانية لاستكشاف لشبونة.',
    creatorMessage: `تم إنشاء هذا التطبيق بواسطة أحد السكان المحليين البرتغاليين الذين عملوا في مجال السياحة لعدة سنوات ولديه اهتمام كبير بـ Web3 والتقنيات الناشئة.

أتمنى أن يكون مفيداً للزوار، وخاصة أولئك الذين لديهم وقت قصير لاستكشاف لشبونة.

نعلم جميعاً كم يمكن أن يكون الأمر مربكاً عند الوصول إلى بلد آخر، ومحاولة معرفة الاتجاهات، وفهم المواصلات المحلية، واكتشاف المطاعم، أو معرفة ما يوجد في الجوار. أنا أعرف هذا الشعور جيداً.

هدفي هو جعل استكشاف لشبونة أسهل وأكثر متعة وبأقل قدر من التوتر، مع معلومات وتجارب عملية تساعد الزوار على الاستمتاع بإقامتهم.

أتمنى أن يجعل هذا المشروع وقتك في لشبونة أسهل وأكثر متعة وذكرى لا تُنسى.

مرحباً بكم في لشبونة!`,
    creatorSignature: 'صُنع في البرتغال بواسطة AhnaX.',
    builtByFooter: 'Built by AhnaX · WebSubmit 2026',
    footerRights: 'دليل مجاني ومستقل في لشبونة. حيرة أقل، وصول أسهل، ووقت أمتع.',
    aiIntro: 'أخبرنا بما تبحث عنه وسنساعدك في استكشاف أفضل الخيارات.',
    aiPlaceholder: 'ما الذي ترغب في العثور عليه في لشبونة؟',
    aiDisclaimer: 'يقدم المساعد نصائح محلية عملية ويميز بين الأسعار الموثقة والتقديرات.',
    liveAiConnected: 'متصل عبر Gemini 3.8 Flash',
    curatedDemoMode: 'وضع المعرفة المحلية الموثقة',
    homepageCreatorTeaser: 'تم إنشاء هذا الدليل بواسطة مواطن برتغالي يتمتع بسنوات من الخبرة في مجال السياحة، لجعل استكشاف لشبونة أكثر سهولة ووضوحاً ومتعة — وخاصة للزوار ذوي الوقت المحدود.',
    meetTheCreator: 'تعرف على المنشئ',
    aboutTheCreatorTitle: 'نبذة عن المنشئ',
    backToExplore: 'العودة لاستكشاف لشبونة',
    aboutTheCreatorStory: [
      "أنشأت Lisbon Made Easy لأنني أدرك أن مجرد الوصول إلى المعلومات لا يجعل السفر في بلد أجنبي أمراً سهلاً دائماً.",
      "بعد العمل في قطاع السياحة لعدة سنوات، أردت ابتكار شيء عملي وسهل الاستخدام ومفيد حقاً لمن يستكشفون لشبونة.",
      "أنا برتغالي، وجزء من هذا المجتمع المحلي، وشغوف باستخدام التكنولوجيا لحل مشكلات العالم الواقعي. أنا صانع منتجات ذكاء اصطناعي عصامي أستكشف وأبني تطبيقات وحلول أتمتة ومشاريع Web3.",
      "تجمع رحلتي بين الخبرة الميدانية في السياحة والضيافة والتجربة المستمرة في تقنيات الذكاء الاصطناعي والتكنولوجيا الناشئة.",
      "Lisbon Made Easy هو مشروع مستقل هدفه مساعدة الزوار على التنقل في لشبونة واكتشاف أماكنها الرائعة والاستمتاع بإقامتهم إلى أقصى حد.",
      "كما أنني منفتح على الفرص المهنية والتعاون وبناء العلاقات في مجالات الذكاء الاصطناعي وWeb3 والسياحة والابتكار الرقمي.",
      "أتمنى أن يجعل هذا المشروع البسيط وقتك في لشبونة أسهل وأكثر متعة ولا يُنسى."
    ],
    directoryTitle: 'دليل استكشاف لشبونة',
    directoryBadge: 'دليل موثق',
    directoryShowing: 'عرض',
    directoryVerifiedPlaces: 'أماكن وتجارب محلية موثقة',
    noPlacesFound: 'لا توجد أماكن تطابق الفلاتر المحددة',
    noPlacesHint: 'جرب تخفيف فلاتر الميزانية أو الوقت لرؤية المزيد من معالم لشبونة.',
    readMore: 'المزيد من التفاصيل',
    showLess: 'عرض أقل',
    askAiAboutPlace: 'اسأل الذكاء الاصطناعي',
    idealFor: 'مثالي لـ',
    estTotalCost: 'التكلفة الإجمالية التقديرية',
    customiseWithAi: 'تخصيص عبر الذكاء الاصطناعي',
    timelineTitle: 'جدول زمني ومسار واقعي',
    localAdvice: 'نصيحة محلية',
    transitAdviceTitle: 'نصيحة المواصلات',
    explorePlan: 'استكشف هذه الفئة'
  }
};
