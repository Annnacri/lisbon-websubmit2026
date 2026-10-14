import { SupportedLanguage, LisbonSpot, ShortStayPlan } from '../types';
import { LISBON_SPOTS, LISBON_NEIGHBOURHOODS, SHORT_STAY_PLANS, LisbonNeighbourhood } from '../data/lisbonData';

// Localized 12 Suggestions Cards
export interface LocalizedCard {
  id: string;
  title: string;
  description: string;
  badge: string;
}

export const LOCALIZED_CARDS: Record<SupportedLanguage, Record<string, LocalizedCard>> = {
  en: {
    'historic-lisbon': {
      id: 'historic-lisbon',
      title: '1. Explore Historic Lisbon',
      description: 'Discover traditional neighbourhoods, monuments and panoramic viewpoints.',
      badge: 'Monuments & Views'
    },
    'eat-like-local': {
      id: 'eat-like-local',
      title: '2. Eat Like a Local',
      description: 'Find Portuguese restaurants, petiscos, seafood, bakeries and local cafés.',
      badge: 'Tascas & Sweets'
    },
    'do-tonight': {
      id: 'do-tonight',
      title: '3. Find Something to Do Tonight',
      description: 'Explore nightlife, live music, bars and confirmed upcoming events where data is available.',
      badge: 'Evening & Night'
    },
    'bars-rooftops': {
      id: 'bars-rooftops',
      title: '4. Discover Bars and Rooftops',
      description: 'Find places for cocktails, sunset views and relaxed evenings.',
      badge: 'Sunset Views'
    },
    'free-things': {
      id: 'free-things',
      title: '5. Find Free Things to Do',
      description: 'Explore viewpoints, parks, neighbourhood walks and free cultural activities.',
      badge: '€0 Cost'
    },
    'beaches-lisbon': {
      id: 'beaches-lisbon',
      title: '6. Beaches Near Lisbon',
      description: 'Discover nearby beaches, transport options and outdoor activities.',
      badge: 'Sun & Surf'
    },
    'budget-lisbon': {
      id: 'budget-lisbon',
      title: '7. Lisbon on a Budget',
      description: 'Find affordable food, attractions and experiences.',
      badge: 'Under €10'
    },
    'museums-culture': {
      id: 'museums-culture',
      title: '8. Museums and Culture',
      description: 'Explore museums, exhibitions, architecture and cultural landmarks.',
      badge: 'Art & Heritage'
    },
    'romantic-lisbon': {
      id: 'romantic-lisbon',
      title: '9. Romantic Lisbon',
      description: 'Discover scenic viewpoints, special dinners and experiences for couples.',
      badge: 'For Couples'
    },
    'lisbon-kids': {
      id: 'lisbon-kids',
      title: '10. Lisbon with Kids',
      description: 'Find family-friendly attractions, parks and activities.',
      badge: 'Family Safe'
    },
    'day-trips': {
      id: 'day-trips',
      title: '11. Day Trips',
      description: 'Explore Sintra, Cascais, Cabo da Roca, Évora and other destinations.',
      badge: 'Sintra & Beyond'
    },
    'getting-around': {
      id: 'getting-around',
      title: '12. Getting Around',
      description: 'Find practical information about the airport, metro, buses, trams, trains, ferries and other transport options.',
      badge: 'Airport & Transit'
    }
  },
  pt: {
    'historic-lisbon': {
      id: 'historic-lisbon',
      title: '1. Explorar Lisboa Histórica',
      description: 'Descubra bairros tradicionais, monumentos e miradouros panorâmicos.',
      badge: 'Monumentos e Vistas'
    },
    'eat-like-local': {
      id: 'eat-like-local',
      title: '2. Comer Como um Local',
      description: 'Encontre restaurantes portugueses, petiscos, marisco, padarias e cafés locais.',
      badge: 'Tascas e Doces'
    },
    'do-tonight': {
      id: 'do-tonight',
      title: '3. Fazer Algo Hoje à Noite',
      description: 'Explore a vida noturna, música ao vivo, bares e eventos confirmados.',
      badge: 'Noite e Música'
    },
    'bars-rooftops': {
      id: 'bars-rooftops',
      title: '4. Bares e Rooftops',
      description: 'Descubra sítios para cocktails, vistas de pôr do sol e fins de tarde descontraídos.',
      badge: 'Pôr do Sol'
    },
    'free-things': {
      id: 'free-things',
      title: '5. Atividades Gratuitas',
      description: 'Explore miradouros, parques, passeios nos bairros e atividades culturais grátis.',
      badge: 'Custo €0'
    },
    'beaches-lisbon': {
      id: 'beaches-lisbon',
      title: '6. Praias Perto de Lisboa',
      description: 'Descubra praias próximas, opções de transporte e atividades ao ar livre.',
      badge: 'Sol e Surf'
    },
    'budget-lisbon': {
      id: 'budget-lisbon',
      title: '7. Lisboa Económica',
      description: 'Encontre refeições acessíveis, atrações e experiências com bom custo-benefício.',
      badge: 'Menos de €10'
    },
    'museums-culture': {
      id: 'museums-culture',
      title: '8. Museus e Cultura',
      description: 'Explore museus, exposições, arquitetura e marcos culturais históricos.',
      badge: 'Arte e História'
    },
    'romantic-lisbon': {
      id: 'romantic-lisbon',
      title: '9. Lisboa Romântica',
      description: 'Descubra miradouros panorâmicos, jantares especiais e momentos para casais.',
      badge: 'Para Casais'
    },
    'lisbon-kids': {
      id: 'lisbon-kids',
      title: '10. Lisboa com Crianças',
      description: 'Encontre atrações para famílias, parques e atividades para os mais novos.',
      badge: 'Para Famílias'
    },
    'day-trips': {
      id: 'day-trips',
      title: '11. Passeios de um Dia',
      description: 'Explore Sintra, Cascais, Cabo da Roca, Évora e outros destinos vizinhos.',
      badge: 'Sintra e Arredores'
    },
    'getting-around': {
      id: 'getting-around',
      title: '12. Como Deslocar-se',
      description: 'Informações práticas sobre aeroporto, metro, autocarros, elétricos, comboios e barcos.',
      badge: 'Aeroporto e Trânsito'
    }
  },
  es: {
    'historic-lisbon': {
      id: 'historic-lisbon',
      title: '1. Explorar Lisboa Histórica',
      description: 'Descubre barrios tradicionales, monumentos y miradores panorámicos.',
      badge: 'Monumentos y Vistas'
    },
    'eat-like-local': {
      id: 'eat-like-local',
      title: '2. Comer Como un Local',
      description: 'Encuentra restaurantes portugueses, petiscos, marisco, pastelerías y cafés.',
      badge: 'Tascas y Dulces'
    },
    'do-tonight': {
      id: 'do-tonight',
      title: '3. Qué Hacer Esta Noche',
      description: 'Explora vida nocturna, música en directo, bares y eventos.',
      badge: 'Noche y Copas'
    },
    'bars-rooftops': {
      id: 'bars-rooftops',
      title: '4. Bares y Terrazas Rooftop',
      description: 'Sitios para cócteles, atardeceres y veladas relajadas con vistas.',
      badge: 'Atardeceres'
    },
    'free-things': {
      id: 'free-things',
      title: '5. Planes Gratis en Lisboa',
      description: 'Miradores, parques, paseos y actividades culturales sin coste.',
      badge: 'Coste €0'
    },
    'beaches-lisbon': {
      id: 'beaches-lisbon',
      title: '6. Playas Cerca de Lisboa',
      description: 'Descubre playas cercanas, opciones de transporte y actividades al aire libre.',
      badge: 'Sol y Surf'
    },
    'budget-lisbon': {
      id: 'budget-lisbon',
      title: '7. Lisboa Económica',
      description: 'Comida asequible, atracciones y experiencias a buen precio.',
      badge: 'Menos de €10'
    },
    'museums-culture': {
      id: 'museums-culture',
      title: '8. Museos y Cultura',
      description: 'Explora museos, exposiciones, arquitectura y patrimonio.',
      badge: 'Arte e Historia'
    },
    'romantic-lisbon': {
      id: 'romantic-lisbon',
      title: '9. Lisboa Romántica',
      description: 'Miradores escénicos, cenas especiales y planes para parejas.',
      badge: 'Para Parejas'
    },
    'lisbon-kids': {
      id: 'lisbon-kids',
      title: '10. Lisboa con Niños',
      description: 'Atracciones familiares, parques y planes interactivos.',
      badge: 'Familiar'
    },
    'day-trips': {
      id: 'day-trips',
      title: '11. Excursiones de un Día',
      description: 'Visita Sintra, Cascais, Cabo da Roca, Évora y más.',
      badge: 'Sintra y Alrededores'
    },
    'getting-around': {
      id: 'getting-around',
      title: '12. Cómo Moverse',
      description: 'Información práctica del aeropuerto, metro, autobuses, tranvías y trenes.',
      badge: 'Aeropuerto y Metro'
    }
  },
  de: {
    'historic-lisbon': {
      id: 'historic-lisbon',
      title: '1. Historisches Lissabon Entdecken',
      description: 'Entdecken Sie traditionelle Viertel, Denkmäler und Aussichtspunkte.',
      badge: 'Denkmäler & Aussicht'
    },
    'eat-like-local': {
      id: 'eat-like-local',
      title: '2. Essen wie die Einheimischen',
      description: 'Portugiesische Tascas, Petiscos, Meeresfrüchte, Bäckereien und Cafés.',
      badge: 'Tascas & Genuss'
    },
    'do-tonight': {
      id: 'do-tonight',
      title: '3. Was tun am Abend',
      description: 'Nachtleben, Live-Musik, Bars und bestätigte Abendveranstaltungen.',
      badge: 'Abend & Musik'
    },
    'bars-rooftops': {
      id: 'bars-rooftops',
      title: '4. Bars & Rooftops',
      description: 'Cocktails, Aussichten zum Sonnenuntergang und entspannte Abende.',
      badge: 'Sonnenuntergang'
    },
    'free-things': {
      id: 'free-things',
      title: '5. Kostenlose Aktivitäten',
      description: 'Aussichtspunkte (Miradouros), Parks, Spaziergänge und Kultur für 0 Euro.',
      badge: '€0 Kosten'
    },
    'beaches-lisbon': {
      id: 'beaches-lisbon',
      title: '6. Strände nahe Lissabon',
      description: 'Nahegelegene Strände, öffentliche Verkehrsmittel und Outdoor-Tipps.',
      badge: 'Sonne & Meer'
    },
    'budget-lisbon': {
      id: 'budget-lisbon',
      title: '7. Lissabon für Sparfüchse',
      description: 'Günstiges Essen, preiswerte Sehenswürdigkeiten und Erlebnisse.',
      badge: 'Unter €10'
    },
    'museums-culture': {
      id: 'museums-culture',
      title: '8. Museen & Kultur',
      description: 'Bedeutende Museen, Ausstellungen, Fliesenkunst und Architektur.',
      badge: 'Kunst & Erbe'
    },
    'romantic-lisbon': {
      id: 'romantic-lisbon',
      title: '9. Romantisches Lissabon',
      description: 'Malerische Sonnenuntergänge, gemütliche Dinners und Tipps für Paare.',
      badge: 'Für Paare'
    },
    'lisbon-kids': {
      id: 'lisbon-kids',
      title: '10. Lissabon mit Kindern',
      description: 'Familienfreundliche Attraktionen, Parks und Ozeanarium.',
      badge: 'Familie'
    },
    'day-trips': {
      id: 'day-trips',
      title: '11. Tagesausflüge',
      description: 'Erkunden Sie Sintra, Cascais, Cabo da Roca, Évora und die Umgebung.',
      badge: 'Sintra & Küste'
    },
    'getting-around': {
      id: 'getting-around',
      title: '12. Unterwegs in Lissabon',
      description: 'Praktische Tipps zu Flughafen, Metro, Straßenbahnen, Zügen und Fähren.',
      badge: 'Verkehr & Transit'
    }
  },
  fr: {
    'historic-lisbon': {
      id: 'historic-lisbon',
      title: '1. Explorer le Lisbonne Historique',
      description: 'Découvrez les quartiers anciens, monuments et belvédères panoramiques.',
      badge: 'Monuments & Vues'
    },
    'eat-like-local': {
      id: 'eat-like-local',
      title: '2. Manger comme un Local',
      description: 'Restaurants traditionnels, petiscos, poissons grillés et pâtisseries.',
      badge: 'Tascas & Saveurs'
    },
    'do-tonight': {
      id: 'do-tonight',
      title: '3. Que Faire ce Soir',
      description: 'Vie nocturne, musique live, bars et événements nocturnes.',
      badge: 'Soirée & Fado'
    },
    'bars-rooftops': {
      id: 'bars-rooftops',
      title: '4. Bars & Rooftops',
      description: 'Cocktails, couchers de soleil et soirées décontractées en terrasse.',
      badge: 'Coucher de Soleil'
    },
    'free-things': {
      id: 'free-things',
      title: '5. Activités Gratuites',
      description: 'Miradouros, parcs, balades pittoresques et visites à 0 euro.',
      badge: 'Coût €0'
    },
    'beaches-lisbon': {
      id: 'beaches-lisbon',
      title: '6. Plages près de Lisbonne',
      description: 'Plages côtières, liaisons en train et activités de plein air.',
      badge: 'Plage & Surf'
    },
    'budget-lisbon': {
      id: 'budget-lisbon',
      title: '7. Lisbonne à Petit Budget',
      description: 'Repas abordables, visites économiques et astuces locales.',
      badge: 'Moins de €10'
    },
    'museums-culture': {
      id: 'museums-culture',
      title: '8. Musées & Culture',
      description: 'Musées incontournables, azulejos, architecture et cloîtres historiques.',
      badge: 'Art & Histoire'
    },
    'romantic-lisbon': {
      id: 'romantic-lisbon',
      title: '9. Lisbonne Romantique',
      description: 'Belvédères au crépuscule, dîners aux chandelles et balades en amoureux.',
      badge: 'En Amoureux'
    },
    'lisbon-kids': {
      id: 'lisbon-kids',
      title: '10. Lisbonne en Famille',
      description: 'Aquarium géant, musées des sciences et parcs adaptés aux enfants.',
      badge: 'Famille'
    },
    'day-trips': {
      id: 'day-trips',
      title: '11. Excursions d’un Jour',
      description: 'Découvrez Sintra, Cascais, Cabo da Roca, Évora et les alentours.',
      badge: 'Sintra & Côte'
    },
    'getting-around': {
      id: 'getting-around',
      title: '12. Se Déplacer',
      description: 'Infos pratiques sur l’aéroport, métro, tramways historiques, bus et trains.',
      badge: 'Aéroport & Métro'
    }
  },
  it: {
    'historic-lisbon': {
      id: 'historic-lisbon',
      title: '1. Esplora la Lisbona Storica',
      description: 'Scopri quartieri tradizionali, monumenti storici e belvederi panoramici.',
      badge: 'Monumenti e Viste'
    },
    'eat-like-local': {
      id: 'eat-like-local',
      title: '2. Mangia come un Locale',
      description: 'Tascas tipiche, petiscos, pesce fresco, pasticcerie e caffè storici.',
      badge: 'Tascas e Dolci'
    },
    'do-tonight': {
      id: 'do-tonight',
      title: '3. Cosa Fare Stasera',
      description: 'Vita notturna, musica dal vivo, fado e locali serali.',
      badge: 'Serata e Musica'
    },
    'bars-rooftops': {
      id: 'bars-rooftops',
      title: '4. Bar e Terrazze Rooftop',
      description: 'Cocktail al tramonto e splendide terrazze panoramiche con vista sul Tago.',
      badge: 'Tramonti'
    },
    'free-things': {
      id: 'free-things',
      title: '5. Cose da Fare Gratis',
      description: 'Miradouros, parchi, passeggiate nei vicoli e cultura a costo zero.',
      badge: 'Costo €0'
    },
    'beaches-lisbon': {
      id: 'beaches-lisbon',
      title: '6. Spiagge vicino a Lisbona',
      description: 'Spiagge atlantiche, treni panoramici e attività all’aperto.',
      badge: 'Sole e Mare'
    },
    'budget-lisbon': {
      id: 'budget-lisbon',
      title: '7. Lisbona Low Cost',
      description: 'Cibo economico, attrazioni a basso costo ed esperienze autentiche.',
      badge: 'Meno di €10'
    },
    'museums-culture': {
      id: 'museums-culture',
      title: '8. Musei e Cultura',
      description: 'Musei rinomati, azulejos, architettura manuelina e monasteri.',
      badge: 'Arte e Storia'
    },
    'romantic-lisbon': {
      id: 'romantic-lisbon',
      title: '9. Lisbona Romantica',
      description: 'Punti panoramici suggestivi, cene a lume di candela e itinerari per coppie.',
      badge: 'Per Coppie'
    },
    'lisbon-kids': {
      id: 'lisbon-kids',
      title: '10. Lisbona con i Bambini',
      description: 'Oceanario, musei interattivi della scienza e parchi per famiglie.',
      badge: 'Famiglie'
    },
    'day-trips': {
      id: 'day-trips',
      title: '11. Gite in Giornata',
      description: 'Visita Sintra, Cascais, Cabo da Roca, Évora e i dintorni.',
      badge: 'Sintra e Dintorni'
    },
    'getting-around': {
      id: 'getting-around',
      title: '12. Come Muoversi',
      description: 'Guida pratica all’aeroporto, metro, tram storici, treni e traghetti.',
      badge: 'Aeroporto e Trasporti'
    }
  },
  ar: {
    'historic-lisbon': {
      id: 'historic-lisbon',
      title: '1. استكشاف لشبونة التاريخية',
      description: 'اكتشف الأحياء التقليدية والمعالم التاريخية والمطلات البانورامية.',
      badge: 'معالم وإطلالات'
    },
    'eat-like-local': {
      id: 'eat-like-local',
      title: '2. تناول الطعام مثل السكان المحليين',
      description: 'مطاعم برتغالية أصيلة، مأكولات بحرية، مخابز ومقاهٍ محلية.',
      badge: 'مأكولات شعبية'
    },
    'do-tonight': {
      id: 'do-tonight',
      title: '3. ماذا تفعل الليلة',
      description: 'استكشف الأجواء المسائية، الموسيقى الحية، والمقاهي.',
      badge: 'سهرات وموسيقى'
    },
    'bars-rooftops': {
      id: 'bars-rooftops',
      title: '4. مقاهي وشرفات السطح',
      description: 'أماكن بإطلالات رائعة على الغروب وأمسيات هادئة.',
      badge: 'إطلالات الغروب'
    },
    'free-things': {
      id: 'free-things',
      title: '5. أنشطة مجانية في لشبونة',
      description: 'مطلات مجانية، حدائق، جولات في الأحياء وزيارات بدون تكلفة.',
      badge: 'مجاناً €0'
    },
    'beaches-lisbon': {
      id: 'beaches-lisbon',
      title: '6. شواطئ قريبة من لشبونة',
      description: 'شواطئ المحيط، خيارات المواصلات وأنشطة الهواء الطلق.',
      badge: 'شواطئ وركوب أمواج'
    },
    'budget-lisbon': {
      id: 'budget-lisbon',
      title: '7. لشبونة بميزانية اقتصادية',
      description: 'وجبات بأسعار معقولة ومعالم وتجارب اقتصادية ممتازة.',
      badge: 'أقل من 10 يورو'
    },
    'museums-culture': {
      id: 'museums-culture',
      title: '8. المتاحف والثقافة',
      description: 'متاحف عالمية، فن الزليج البرتغالي، عمارة تاريخية وتراث.',
      badge: 'فن وتاريخ'
    },
    'romantic-lisbon': {
      id: 'romantic-lisbon',
      title: '9. لشبونة الرومانسية',
      description: 'مطلات خلابة، عشاء هادئ وتجارب مميزة للأزواج.',
      badge: 'للأزواج'
    },
    'lisbon-kids': {
      id: 'lisbon-kids',
      title: '10. لشبونة مع الأطفال',
      description: 'حوض أسماك عالمي، متاحف علوم تفاعلية وحدائق عائلية.',
      badge: 'عائلي'
    },
    'day-trips': {
      id: 'day-trips',
      title: '11. رحلات اليوم الواحد',
      description: 'قصور سينترا الساحرة، كاشكايش، كابو دا روكا وإيفورا.',
      badge: 'سينترا والجوار'
    },
    'getting-around': {
      id: 'getting-around',
      title: '12. التنقل والمواصلات',
      description: 'دليل عملي للمطار، المترو، الترام التاريخي، القطارات والعبارات.',
      badge: 'المطار والمترو'
    }
  }
};

// Localized Spot Information overrides
interface LocalizedSpotText {
  shortDescription?: string;
  transitAdvice?: string;
  tips?: string;
}

export const SPOT_TRANSLATIONS: Record<SupportedLanguage, Record<string, LocalizedSpotText>> = {
  en: {},
  pt: {
    'belem-tower': {
      shortDescription: 'Fortaleza manuelina do século XVI junto ao Tejo e Património Mundial da UNESCO.',
      transitAdvice: 'Elétrico 15E da Praça da Figueira / Cais do Sodré até Belém (30 min).',
      tips: 'Compre bilhetes online com antecedência. A visita exterior aos jardins e à beira-rio é livre.'
    },
    'jeronimos-monastery': {
      shortDescription: 'Claustro monumental da UNESCO e obra-prima da arquitetura manuelina em Portugal.',
      transitAdvice: 'Elétrico 15E ou comboio da CP no Cais do Sodré até à estação de Belém.',
      tips: 'A Igreja de Santa Maria é GRATUITA e guarda os túmulos de Vasco da Gama e Luís de Camões.'
    },
    'castelo-sao-jorge': {
      shortDescription: 'Fortaleza mourisca do século XI no topo da colina com vista sobre as sete colinas.',
      transitAdvice: 'Autocarro 737 da Figueira ou apanhe o elevador gratuito do Castelo na Rua dos Fanqueiros.',
      tips: 'Use o elevador público do Castelo na Rua da Madalena para poupar a subida a pé!'
    },
    'praca-do-comercio': {
      shortDescription: 'Grande praça neoclássica ribeirinha aberta ao Tejo com imponentes arcadas amarelas.',
      transitAdvice: 'Metro Linha Azul diretamente para a estação Terreiro do Paço.',
      tips: 'Suba ao topo do Arco da Rua Augusta por apenas €3.50 para uma vista privilegiada sobre a Baixa.'
    },
    'miradouro-santa-luzia': {
      shortDescription: 'Miradouro romântico com colunata de buganvílias e azulejos azuis sobre Alfama.',
      transitAdvice: 'Elétrico histórico 28E ou 12E até à paragem Miradouro de Santa Luzia.',
      tips: 'O final de tarde ilumina as cúpulas de São Vicente de Fora com uma luz dourada única.'
    },
    'lx-factory': {
      shortDescription: 'Espaço urbano criativo numa antiga fábrica têxtil do séc. XIX debaixo da ponte.',
      transitAdvice: 'Elétrico 15E ou autocarro 714 do Cais do Sodré até à paragem Calvário.',
      tips: 'Visite ao domingo de manhã para o LX Market com artesanato, roupa vintage e antiguidades.'
    },
    'manteigaria-chiado': {
      shortDescription: 'Fábrica artesanal de pastéis de nata servidos quentes a sair do forno à sua frente.',
      transitAdvice: 'Metro Baixa-Chiado (saída Largo de Camões).',
      tips: 'Peça ao balcão com uma bica (€0.90). Polvilhe levemente com canela.'
    },
    'pasteis-de-belem': {
      shortDescription: 'O berço dos pastéis de nata, criado em 1837 a partir da receita secreta do mosteiro.',
      transitAdvice: 'Elétrico 15E ou comboio do Cais do Sodré até Belém.',
      tips: 'Evite a fila exterior de take-away! Entre nos salões interiores para se sentar à mesa.'
    },
    'time-out-market': {
      shortDescription: 'Mercado gastronómico que reúne pratos de grandes chefs num edifício histórico de 1892.',
      transitAdvice: 'Metro Linha Verde ou comboio no Cais do Sodré (2 min a pé).',
      tips: 'Visite por volta das 12:00 ou 17:00 para encontrar mesas partilhadas de madeira com facilidade.'
    },
    'tasca-o-trevo': {
      shortDescription: 'Tasca icónica no Camões com a famosa bifana de porco elogiada por Anthony Bourdain.',
      transitAdvice: 'Metro Baixa-Chiado.',
      tips: 'Peça ao balcão: "Uma bifana e um fino, por favor!" (~€4.30 total).'
    },
    'oceanario-de-lisboa': {
      shortDescription: 'Um dos aquários mais aclamados do mundo com tanque central de 5 milhões de litros.',
      transitAdvice: 'Metro Linha Vermelha até à estação Oriente, seguido de 8 min a pé pelo parque ribeirinho.',
      tips: 'Excelente para dias de chuva ou famílias. Reserve online para garantir horário sem filas.'
    },
    'sintra-pena-regaleira': {
      shortDescription: 'Vila mágica na serra com palácios românticos, névoa e o Poço Iniciático da Regaleira.',
      transitAdvice: 'Comboio da CP no Rossio diretamente até Sintra (40 min, €2.40 por trajeto).',
      tips: 'NUNCA leve carro para Sintra. Reserve o horário do Palácio da Pena online com antecedência.'
    }
  },
  es: {
    'belem-tower': {
      shortDescription: 'Fortaleza manuelina del siglo XVI junto al Tajo y Patrimonio de la Humanidad por la UNESCO.',
      transitAdvice: 'Tranvía 15E desde Praça da Figueira / Cais do Sodré hasta Belém (30 min).',
      tips: 'Compra entradas online con antelación. Los jardines exteriores junto al río son de acceso libre.'
    },
    'manteigaria-chiado': {
      shortDescription: 'Fábrica artesanal donde elaboran los pasteles de nata calientes delante de ti.',
      transitAdvice: 'Metro Baixa-Chiado (salida Largo de Camões).',
      tips: 'Pide en barra con un café bica (€0.90) y espolvorea canela al gusto.'
    },
    'time-out-market': {
      shortDescription: 'Mercado gastronómico con propuestas de grandes chefs en un edificio histórico.',
      transitAdvice: 'Metro Línea Verde o tren en Cais do Sodré (2 min a pie).',
      tips: 'Acércate a las 12:00 o 17:00 para encontrar asiento fácilmente en las mesas comunitarias.'
    },
    'sintra-pena-regaleira': {
      shortDescription: 'Paisaje de cuento de hadas con palacios románticos entre bosques y niebla.',
      transitAdvice: 'Tren de cercanías CP desde Rossio directo a Sintra (40 min, €2.40 por trayecto).',
      tips: 'No vayas en coche. Reserva el turno del Palacio de Pena con antelación online.'
    }
  },
  de: {
    'belem-tower': {
      shortDescription: 'Manuelinische Festung aus dem 16. Jahrhundert am Tejo und UNESCO-Weltkulturerbe.',
      transitAdvice: 'Straßenbahn 15E ab Praça da Figueira / Cais do Sodré nach Belém (30 Min).',
      tips: 'Tickets vorab online buchen. Die Außenanlagen und der Uferpark sind frei zugänglich.'
    },
    'manteigaria-chiado': {
      shortDescription: 'Handwerkliche Bäckerei mit ofenfrischen Pastéis de Nata direkt vor Ihren Augen.',
      transitAdvice: 'Metro Baixa-Chiado (Ausgang Largo de Camões).',
      tips: 'An der Theke mit einem Espresso (Bica für €0.90) bestellen und mit Zimt bestreuen.'
    },
    'sintra-pena-regaleira': {
      shortDescription: 'Märchenhafte Berglandschaft mit romantischen Palästen und dem Initiationsbrunnen.',
      transitAdvice: 'CP-Vorortzug ab Bahnhof Rossio direkt nach Sintra (40 Min, €2.40 pro Fahrt).',
      tips: 'Kein Mietauto nach Sintra nutzen. Palast-Tickets vorab mit Zeitfenster reservieren.'
    }
  },
  fr: {
    'belem-tower': {
      shortDescription: 'Forteresse manuéline du XVIe siècle sur le Tage et site classé au patrimoine mondial de l’UNESCO.',
      transitAdvice: 'Tram 15E depuis Praça da Figueira / Cais do Sodré jusqu’à Belém (30 min).',
      tips: 'Réservez vos billets en ligne. Les jardins extérieurs en bord de fleuve sont en accès libre.'
    },
    'manteigaria-chiado': {
      shortDescription: 'Fabrique artisanale servant des pastéis de nata tièdes sortant tout juste du four.',
      transitAdvice: 'Métro Baixa-Chiado (sortie Largo de Camões).',
      tips: 'Commandez au comptoir avec un café bica (€0.90) et saupoudrez de cannelle.'
    },
    'sintra-pena-regaleira': {
      shortDescription: 'Cité féerique dans les collines avec palais romantiques et puits d’initiation.',
      transitAdvice: 'Train de banlieue CP depuis la gare de Rossio jusqu’à Sintra (40 min, €2.40 l’aller).',
      tips: 'Ne louez pas de voiture pour Sintra. Réservez votre créneau pour le Palais de Pena en avance.'
    }
  },
  it: {
    'belem-tower': {
      shortDescription: 'Fortezza manuelina del XVI secolo sul Tago e patrimonio mondiale dell’UNESCO.',
      transitAdvice: 'Tram 15E da Praça da Figueira / Cais do Sodré fino a Belém (30 min).',
      tips: 'Acquista i biglietti online in anticipo. I giardini esterni lungo il fiume sono ad accesso libero.'
    },
    'manteigaria-chiado': {
      shortDescription: 'Pasticceria artigianale con pastéis de nata caldi sfornati continuamente davanti a voi.',
      transitAdvice: 'Metro Baixa-Chiado (uscita Largo de Camões).',
      tips: 'Ordina al bancone con un espresso bica (€0.90) e spolvera con cannella.'
    },
    'sintra-pena-regaleira': {
      shortDescription: 'Borgo fiabesco tra boschi e colline con palazzi romantici e il pozzo iniziatico.',
      transitAdvice: 'Treno CP dalla stazione di Rossio diretto a Sintra (40 min, €2.40 a tratta).',
      tips: 'Evita l’auto a noleggio per Sintra. Prenota l’orario per il Palácio da Pena online.'
    }
  },
  ar: {
    'belem-tower': {
      shortDescription: 'قلعة مانويلية تاريخية من القرن السادس عشر على ضفاف نهر تاجة وموقع تراث عالمي.',
      transitAdvice: 'الترام 15E من ساحة فيغيرا أو كايش دو سودري إلى بيليم (30 دقيقة).',
      tips: 'احجز التذاكر مسبقاً عبر الإنترنت لتفادي الانتظار. الحديقة الخارجية وضفاف النهر مجانية.'
    },
    'manteigaria-chiado': {
      shortDescription: 'مخبز حرفي يقدم تارت الكاسترد البرتغالي الشهير ساخناً من الفرن أمامك مباشرة.',
      transitAdvice: 'محطة مترو بايكشا-شيادو (مخرج لارغو دي كامويش).',
      tips: 'اطلب من الواجهة مع قهوة إسبريسو بيكا (0.90 يورو) ورش القليل من القرفة.'
    }
  }
};

// Localized Short Stay Plan titles & badges
export const LOCALIZED_SHORT_STAYS: Record<SupportedLanguage, Record<string, { title: string; badge: string; summary?: string }>> = {
  en: {},
  pt: {
    'lisbon-2-hours': { title: 'Lisboa em 2 Horas', badge: 'Escala Rápida', summary: 'Um passeio dinâmico e de grande impacto a ligar a Baixa ribeirinha, paragem para café e miradouro sem filas.' },
    'lisbon-3-hours': { title: 'Lisboa em 3 Horas', badge: 'Centro Clássico', summary: 'O coração histórico: arquitetura da Baixa, o elétrico 28, miradouro de Santa Luzia e o Chiado boémio.' },
    'lisbon-1-day': { title: 'Lisboa em 1 Dia', badge: 'O Dia Essencial', summary: 'Manhã em Alfama e no Castelo; tarde em Belém com monumentos da UNESCO e pastéis originais; fim de tarde no miradouro.' },
    'lisbon-2-days': { title: 'Lisboa em 2 Dias', badge: 'Imersão Completa', summary: 'Dia 1: Colinas históricas, Belém e Bairro Alto. Dia 2: Design do Príncipe Real, LX Factory, Gulbenkian e Cais do Sodré.' },
    'lisbon-3-days': { title: 'Lisboa em 3 Dias', badge: 'Lisboa + Sintra', summary: 'Dias 1 e 2 para descobrir Lisboa a fundo; Dia 3 dedicado aos palácios de conto de fadas de Sintra de comboio.' },
    'food-adventure': { title: 'Aventura Gastronómica', badge: 'Rota dos Petiscos', summary: 'Pastel de nata no Chiado, bifana com alho no Trevo, ginjinha no Rossio e petiscos com vinho verde.' },
    'night-out': { title: 'Noite em Lisboa', badge: 'Pôr do Sol ao Fim da Noite', summary: 'Cocktail no rooftop, jantar de fado em Alfama, copos nas ruas do Bairro Alto e festa na Rua Cor-de-Rosa.' },
    'relaxed-sea-day': { title: 'Dia Relaxado à Beira-Mar', badge: 'Brisa do Atlântico', summary: 'Comboio junto ao Tejo até Cascais, passeio até à Boca do Inferno e almoço de peixe grelhado.' },
    'budget-lisbon': { title: 'Lisboa Económica', badge: 'Poupança Inteligente', summary: 'O melhor de Lisboa gastando o mínimo: miradouros grátis, palácio mourisco secreto e refeições tasca a €3–€8.' }
  },
  es: {
    'lisbon-2-hours': { title: 'Lisboa en 2 Horas', badge: 'Escala Rápida' },
    'lisbon-3-hours': { title: 'Lisboa en 3 Horas', badge: 'Centro Clásico' },
    'lisbon-1-day': { title: 'Lisboa en 1 Día', badge: 'Día Esencial' },
    'lisbon-2-days': { title: 'Lisboa en 2 Días', badge: 'Inmersión Total' },
    'lisbon-3-days': { title: 'Lisboa en 3 Días', badge: 'Lisboa + Sintra' },
    'food-adventure': { title: 'Ruta Gastronómica', badge: 'Ruta de Tapas' },
    'night-out': { title: 'Noche en Lisboa', badge: 'Atardecer a Madrugada' },
    'relaxed-sea-day': { title: 'Día de Mar en Cascais', badge: 'Brisa Atlántica' },
    'budget-lisbon': { title: 'Lisboa Low Cost', badge: 'Ahorro Inteligente' }
  },
  de: {
    'lisbon-2-hours': { title: 'Lissabon in 2 Stunden', badge: 'Kurzstopp' },
    'lisbon-3-hours': { title: 'Lissabon in 3 Stunden', badge: 'Klassisches Zentrum' },
    'lisbon-1-day': { title: 'Lissabon an 1 Tag', badge: 'Kompakter Tag' },
    'lisbon-2-days': { title: 'Lissabon in 2 Tagen', badge: 'Wochenende' },
    'lisbon-3-days': { title: 'Lissabon in 3 Tagen', badge: 'Lissabon + Sintra' },
    'food-adventure': { title: 'Kulinarische Tour', badge: 'Gourmet-Route' },
    'night-out': { title: 'Ausgehen in Lissabon', badge: 'Abend & Nacht' },
    'relaxed-sea-day': { title: 'Strandtag Cascais', badge: 'Atlantikbrise' },
    'budget-lisbon': { title: 'Lissabon für Sparer', badge: 'Clever Sparen' }
  },
  fr: {
    'lisbon-2-hours': { title: 'Lisbonne en 2 Heures', badge: 'Escale Express' },
    'lisbon-3-hours': { title: 'Lisbonne en 3 Heures', badge: 'Cœur Historique' },
    'lisbon-1-day': { title: 'Lisbonne en 1 Jour', badge: 'L\'Essentiel' },
    'lisbon-2-days': { title: 'Lisbonne en 2 Jours', badge: 'Immersion' },
    'lisbon-3-days': { title: 'Lisbonne en 3 Jours', badge: 'Lisbonne + Sintra' },
    'food-adventure': { title: 'Aventure Gourmande', badge: 'Petiscos & Saveurs' },
    'night-out': { title: 'Sortie Nocturne', badge: 'Du Coucher à l\'Aube' },
    'relaxed-sea-day': { title: 'Journée Mer & Détente', badge: 'Brise Marine' },
    'budget-lisbon': { title: 'Lisbonne Petit Budget', badge: 'Économique' }
  },
  it: {
    'lisbon-2-hours': { title: 'Lisbona in 2 Ore', badge: 'Sosta Rapida' },
    'lisbon-3-hours': { title: 'Lisbona in 3 Ore', badge: 'Centro Storico' },
    'lisbon-1-day': { title: 'Lisbona in 1 Giorno', badge: 'Giorno Essenziale' },
    'lisbon-2-days': { title: 'Lisbona in 2 Giorni', badge: 'Weekend Completo' },
    'lisbon-3-days': { title: 'Lisbona in 3 Giorni', badge: 'Lisbona + Sintra' },
    'food-adventure': { title: 'Tour Gastronomico', badge: 'Giro dei Petiscos' },
    'night-out': { title: 'Notte a Lisbona', badge: 'Tramonto & Musica' },
    'relaxed-sea-day': { title: 'Giornata di Mare', badge: 'Brezza Marina' },
    'budget-lisbon': { title: 'Lisbona Low Cost', badge: 'Risparmio' }
  },
  ar: {
    'lisbon-2-hours': { title: 'لشبونة في ساعتين', badge: 'ترانزيت سريع' },
    'lisbon-3-hours': { title: 'لشبونة في 3 ساعات', badge: 'القلب التاريخي' },
    'lisbon-1-day': { title: 'لشبونة في يوم واحد', badge: 'اليوم الأساسي' },
    'lisbon-2-days': { title: 'لشبونة في يومين', badge: 'استكشاف شامل' },
    'lisbon-3-days': { title: 'لشبونة في 3 أيام', badge: 'لشبونة + سينترا' },
    'food-adventure': { title: 'جولة المأكولات', badge: 'نكهات برتغالية' },
    'night-out': { title: 'سهرة في لشبونة', badge: 'من الغروب للفجر' },
    'relaxed-sea-day': { title: 'يوم ساحلي هادئ', badge: 'نسيم الأطلسي' },
    'budget-lisbon': { title: 'لشبونة بميزانية محدودة', badge: 'توفير ذكي' }
  }
};

// Localized Neighbourhood vibes and tips
export const LOCALIZED_NEIGHBOURHOODS: Record<SupportedLanguage, Record<string, { vibe?: string; bestFor?: string; tip?: string }>> = {
  en: {},
  pt: {
    alfama: {
      vibe: 'Alma medieval, ruelas caiadas de branco, roupa a secar nas janelas e acordes melancólicos de fado.',
      bestFor: 'Passeios históricos, miradouros de pôr do sol, tascas tradicionais e Sé Catedral',
      tip: 'Guarde o mapa e perca-se nas calçadas medievais. A descer vai sempre dar ao rio Tejo.'
    },
    baixa: {
      vibe: 'Grande grelha neoclássica do Iluminismo do séc. XVIII, arcos triunfais e praças históricas.',
      bestFor: 'Orientação inicial, comércio tradicional, pastelarias e Praça do Comércio',
      tip: 'Olhe para o chão: os padrões de calçada portuguesa a preto e branco nasceram aqui.'
    },
    chiado: {
      vibe: 'Sofisticado, literário, teatros elegantes, livrarias centenárias e pastelarias clássicas.',
      bestFor: 'Cultura de café, livrarias históricas, moda de autor e pastéis de nata',
      tip: 'Visite as ruínas a céu aberto do Convento do Carmo, memorial do terramoto de 1755.'
    },
    'bairro-alto': {
      vibe: 'Bairro tranquilo de aldeia de dia, capital boémia de convívio noturno nas ruas à noite.',
      bestFor: 'Bares de cocktails, tascas típicas, música e convívio nas calçadas',
      tip: 'Os bares são pequenos; o ritual tradicional é beber e conversar fora nas ruas de pedra.'
    },
    'cais-do-sodre': {
      vibe: 'Passado marítimo que se transformou em vida noturna vibrante e terraços ribeirinhos.',
      bestFor: 'Rua Cor-de-Rosa, Time Out Market, travessia de barco no Tejo e pores do sol',
      tip: 'Sente-se nos degraus de pedra da Ribeira das Naus ao pôr do sol para ver os barcos passar.'
    },
    'principe-real': {
      vibe: 'Arborizado, aristocrático, lojas de design independente, restaurantes modernos e ambiente inclusivo.',
      bestFor: 'Lojas conceptuais, jardim botânico, feiras biológicas e jantares românticos',
      tip: 'Visite a Embaixada, um palacete neo-árabe do séc. XIX transformado em galeria de design português.'
    },
    belem: {
      vibe: 'Bairro monumental à beira-rio a celebrar a Era dos Descobrimentos e património da UNESCO.',
      bestFor: 'Monumentos da UNESCO, arte moderna (MAAT e CCB) e os pastéis de Belém originais',
      tip: 'Caminhe ou alugue uma bicicleta ao longo do calçadão de 3 km à beira-rio entre o MAAT e a Torre.'
    },
    graca: {
      vibe: 'Bairro autêntico no ponto mais alto da cidade com tascas de bairro e vistas panorâmicas.',
      bestFor: 'Os melhores miradouros de pôr do sol, padarias tradicionais e arte urbana',
      tip: 'O quiosque do Miradouro da Graça serve bica e vinho fresco à sombra dos pinheiros.'
    },
    alcantara: {
      vibe: 'Alma industrial transformada em polo criativo debaixo dos pilares da Ponte 25 de Abril.',
      bestFor: 'LX Factory, docas de Santo Amaro, mercados de domingo e livraria Ler Devagar',
      tip: 'Passeie debaixo dos pilares gigantes da ponte suspensa nas docas para fotos impressionantes.'
    },
    'parque-das-nacoes': {
      vibe: 'Distrito moderno construído para a Expo 98 com arquitetura futurista e frentes de água.',
      bestFor: 'Oceanário, museu da ciência, teleférico ribeirinho e passeios planos à beira-rio',
      tip: 'A Gare do Oriente desenhada por Santiago Calatrava parece uma floresta moderna de aço e luz.'
    }
  },
  es: {
    alfama: {
      vibe: 'Alma medieval, callejuelas encaladas, ropa tendida en balcones y acordes de fado.',
      bestFor: 'Paseos históricos, miradores al atardecer y tascas tradicionales.',
      tip: 'Guarda el mapa y déjate llevar por las callejuelas empedradas.'
    },
    baixa: {
      vibe: 'Trazado neoclásico del siglo XVIII, arcos triunfales y grandes avenidas peatonales.',
      bestFor: 'Primer recorrido, compras clásicas y Praça do Comércio.',
      tip: 'Fíjate en los mosaicos de calzada portuguesa bajo tus pies.'
    },
    belem: {
      vibe: 'Barrio monumental a orillas del Tajo con joyas manuelinas de la UNESCO.',
      bestFor: 'Mosteiro dos Jerónimos, Torre de Belém y pasteles de nata originales.',
      tip: 'Recorre el paseo fluvial entre el MAAT y la Torre de Belém.'
    }
  },
  de: {
    alfama: {
      vibe: 'Mittelalterliche Seele, weiß getünchte Gassen und wehmütige Fado-Klänge.',
      bestFor: 'Historische Spaziergänge, Aussichtspunkte und urige Tascas.',
      tip: 'Karte einstecken und einfach durch die engen Gassen treiben lassen.'
    },
    belem: {
      vibe: 'Monumentales Viertel am Tejo mit UNESCO-Schätzen aus dem Zeitalter der Entdecker.',
      bestFor: 'Jerónimos-Kloster, Belém-Turm und originale Pastéis de Belém.',
      tip: 'Spazieren Sie entlang der 3 km langen Uferpromenade.'
    }
  },
  fr: {
    alfama: {
      vibe: 'Âme médiévale, ruelles blanchies à la chaux, linge aux fenêtres et notes de fado.',
      bestFor: 'Balades pittoresques, couchers de soleil et tavernes typiques.',
      tip: 'Laissez-vous guider au hasard des ruelles pavées.'
    },
    belem: {
      vibe: 'Quartier monumental au bord du fleuve célébrant les Grandes Découvertes.',
      bestFor: 'Monastère des Hiéronymites, Tour de Belém et pastéis d’origine.',
      tip: 'Promenez-vous le long du Tage entre le musée MAAT et la Tour.'
    }
  },
  it: {
    alfama: {
      vibe: 'Anima medievale, vicoli imbiancati, panni stesi e nostalgiche note di fado.',
      bestFor: 'Passeggiate storiche, punti panoramici e tascas tradizionali.',
      tip: 'Metti via la mappa e lasciati guidare dall\'atmosfera dei vicoli.'
    },
    belem: {
      vibe: 'Quartiere monumentale sul fiume che custodisce tesori UNESCO dell\'Era delle Scoperte.',
      bestFor: 'Monastero dos Jerónimos, Torre di Belém e pastéis originali.',
      tip: 'Passeggia lungo la riva del Tago tra il MAAT e la Torre.'
    }
  },
  ar: {
    alfama: {
      vibe: 'القلب التاريخي للشبونة بأزقته الحجرية ومنازله البيضاء وألحان الفادو الأصيلة.',
      bestFor: 'جولات تاريخية، مطلات الغروب، ومطاعم تقليدية.',
      tip: 'استمتع بالتجول في الأزقة القديمة بدون خريطة حتى تصل إلى النهر.'
    }
  }
};

// Helper function to return localized spots
export function getLocalizedSpots(lang: SupportedLanguage): LisbonSpot[] {
  const overrides = SPOT_TRANSLATIONS[lang] || {};
  return LISBON_SPOTS.map((spot) => {
    const override = overrides[spot.id];
    if (!override) return spot;
    return {
      ...spot,
      shortDescription: override.shortDescription || spot.shortDescription,
      transitAdvice: override.transitAdvice || spot.transitAdvice,
      tips: override.tips || spot.tips
    };
  });
}
