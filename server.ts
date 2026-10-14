import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Check if Gemini API is available
const hasApiKey = Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'MY_GEMINI_API_KEY');

let aiClient: GoogleGenAI | null = null;
if (hasApiKey) {
  try {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  } catch (err) {
    console.error('Failed to initialize GoogleGenAI client:', err);
  }
}

// Status endpoint
app.get('/api/status', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    aiConfigured: Boolean(aiClient),
    model: 'gemini-3.8-flash',
    product: 'Lisbon Made Easy',
    brand: 'AhnaX',
    edition: 'WebSubmit Edition',
    timestamp: new Date().toISOString(),
  });
});

// Comprehensive Lisbon knowledge base summary for system prompt context
const LISBON_SYSTEM_INSTRUCTION = `You are "Ask Lisbon AI", the official digital assistant for "Lisbon Made Easy" (by AhnaX - WebSubmit Edition).
Your mission: Help international visitors discover Lisbon easily, find practical info, compare real prices in Euros, and make the most of their stay without confusion.

Guidelines:
1. Product identity: "Lisbon Made Easy", created in Portugal by AhnaX.
2. Tone: Welcoming, practical, culturally respectful, honest, local.
3. Pricing & Verification:
   - Always state prices in Euros (€).
   - Clearly identify whether prices are Free, verified published prices, or indicative estimates.
   - Never claim to have booked tickets or checked live seat availability unless real API integration is present.
4. Transport & Logistics:
   - Provide realistic travel times and specific transit lines (e.g., Metro Red line from Airport to Alameda/São Sebastião, Tram 15E or train from Cais do Sodré to Belém, CP train from Rossio to Sintra, CP train from Cais do Sodré to Cascais).
   - Mention the Navegante rechargeable card (€0.50 card, €1.80 single metro/bus fare, or €6.80 24h pass).
5. Language:
   - If the user writes in Portuguese, Spanish, French, German, Italian, or Arabic, reply fluently in that language, maintaining high quality and local Portuguese terminology (e.g. "tasca", "miradouro", "petiscos", "bica", "pastel de nata").
6. Output Format:
   - Keep answers clear and scannable.
   - For recommendations, provide:
     - Name of venue or experience
     - Neighbourhood / Location
     - Why it fits & short practical description
     - Indicative or verified price (€ or Free)
     - How to get there (metro station / tram / walking)
     - Helpful local tip (e.g. "go at sunset", "order prato do dia at lunch for under €10", "validate Viva/Navegante ticket")
7. Alternatives:
   - If someone's budget is low or time is tight, offer realistic, affordable alternatives immediately.`;

// Conversational terminal endpoint
app.post('/api/chat', async (req: Request, res: Response) => {
  const { message, language = 'en', history = [] } = req.body;

  if (!message || typeof message !== 'string') {
    res.status(400).json({ error: 'Message is required.' });
    return;
  }

  // If Gemini API is available, query real Gemini 3.8 Flash
  if (aiClient) {
    try {
      // Build conversation context
      const formattedHistory = Array.isArray(history)
        ? history.slice(-6).map((h: { role: string; content: string }) => `${h.role === 'user' ? 'User' : 'Assistant'}: ${h.content}`).join('\n')
        : '';

      const prompt = `${LISBON_SYSTEM_INSTRUCTION}

User Language: ${language}
${formattedHistory ? `Recent Conversation:\n${formattedHistory}\n` : ''}
User Query: ${message}

Provide a thoughtful, practical Lisbon recommendation answering their request with prices in €, transit advice, and neighborhood context.`;

      const response = await aiClient.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
      });

      const reply = response.text || "Desculpe, could not generate a response. Please try again.";

      res.json({
        reply,
        isLiveAI: true,
        model: 'gemini-3.8-flash',
        source: 'Google Gemini 3.8 Flash (Live Server)',
      });
      return;
    } catch (err: unknown) {
      console.error('Error generating content with Gemini:', err);
      // Fall through to curated fallback mode
    }
  }

  // Curated Lisbon local intelligence fallback (clearly labelled as Curated Local Intelligence)
  const fallbackReply = generateCuratedLocalResponse(message, language);
  res.json({
    reply: fallbackReply,
    isLiveAI: false,
    model: 'curated-local-intelligence',
    source: 'Curated Lisbon Local Intelligence Engine (AhnaX Knowledge Base)',
    notice: 'Demo mode active: Connected to AhnaX Lisbon Local Curated Intelligence.',
  });
});

// Helper for local intelligence fallback
function generateCuratedLocalResponse(query: string, lang: string): string {
  const q = query.toLowerCase();

  if (q.includes('airport') || q.includes('aeroporto')) {
    return `### Getting from Lisbon Humberto Delgado Airport (LIS) to the City Centre

Here are the most practical and verified options:

1. **Metro (Red Line / Linha Vermelha) — Best Value & Fast**
   - **Cost:** €1.80 per trip (+ €0.50 for reloadable Navegante card) or €6.80 for a 24-hour unlimited pass.
   - **Duration:** ~25–35 minutes to Baixa-Chiado or Saldanha (transfer to Green or Blue line at Alameda or São Sebastião).
   - **Operating Hours:** 06:30 to 01:00 daily.
   - **Station:** Station is connected directly inside Terminal 1 Arrivals.

2. **Ride-Hailing (Uber / Bolt) — Convenient with Luggage**
   - **Cost:** Typically €9–€16 depending on destination (Baixa, Chiado, Alfama) and surge pricing.
   - **Duration:** 20–30 minutes outside of peak rush hour (08:00–09:30 & 17:30–19:30).
   - **Pick-up Point:** Follow the "Departures / Partidas" upper ramp designated ride-share lane.

3. **Official Aerotaxi**
   - **Cost:** Flat or metered ~€15–€22 (ensure meter is running; €1.60 luggage fee applies).

*Local Tip:* If arriving at Terminal 2 (low-cost flights like Ryanair), take the free 3-minute shuttle bus to Terminal 1 to access the Metro station.`;
  }

  if (q.includes('sintra')) {
    return `### Visiting Sintra Without a Car (Recommended Route)

Renting a car for Sintra is not recommended due to narrow hill roads, heavy traffic, and restricted parking near the monuments.

**The Best Way:**
1. **Train from Rossio Station (Baixa/Restauradores):**
   - **Cost:** €2.40 each way (covered by Navegante Zapping or 24h CP ticket).
   - **Frequency:** Every 20 minutes (CP Urban train line).
   - **Duration:** 40 minutes to Sintra terminal station.
2. **From Sintra Station to Palaces:**
   - **Bus 434 (Circuito da Pena):** Loops from the station up to the Moorish Castle and Pena Palace (€4.55 single or €7.60 hop-on).
   - **Walking:** Historic town center is a pleasant 10-minute flat walk; Quinta da Regaleira is 15 minutes walk from town.

**Key Highlights & Verified Prices:**
- **Pena Palace (Palácio da Pena):** €14.00 (Park + Palace exterior) or €20.00 (full interior). Book online in advance for a 15% discount and required time slot.
- **Quinta da Regaleira (Initiation Well):** €12.00 adult.
- **Local Sweet:** Try *Travesseiros* or *Queijadas* at Piriquita in Sintra old town (~€1.80).`;
  }

  if (q.includes('sunset') || q.includes('pôr do sol') || q.includes('coucher du soleil')) {
    return `### Best Spots to Watch the Lisbon Sunset

Lisbon's golden hour across the Tagus River and terracotta rooftops is unforgettable:

1. **Miradouro da Senhora do Monte (Graça) — Highest Panoramic View**
   - **Price:** Free
   - **Vibe:** Sweeping 250-degree panorama over São Jorge Castle, Baixa, and the 25 de Abril Bridge. Often has acoustic musicians.
   - **Transport:** Tram 28 to Graça, then a 6-minute walk uphill.

2. **Miradouro de Santa Catarina (Adamastor)**
   - **Price:** Free public viewpoint + relaxed outdoor kiosk drinks (€2–€3 for beer/wine).
   - **Vibe:** Lively, Bohemian, views straight across the river port and bridge.

3. **Rooftop Bar: PARK (Bairro Alto)**
   - **Location:** Top floor of a multi-storey car park on Calçada do Combro 58.
   - **Price:** Drinks €6–€14. Free entry.
   - **Vibe:** Lush garden canopy, DJ beats, direct sunset line over the river.

4. **Ribeira das Naus (Cais do Sodré riverfront)**
   - **Price:** Free.
   - **Vibe:** Sit directly on the river stone steps with the breeze and watch the sailboats glide by.`;
  }

  if (q.includes('under €20') || q.includes('under 20') || q.includes('budget') || q.includes('cheap') || q.includes('barato')) {
    return `### Traditional Portuguese Dining Under €20

You can eat extraordinarily well in Lisbon on a modest budget if you look for traditional neighbourhood *tascas*:

1. **O Trevo (Praça Luís de Camões / Bairro Alto)**
   - **Price:** €3.00 for the iconic garlic-marinated pork *Bifana*, plus €1.30 for an Imperial (draft beer).
   - **Vibe:** Standing counter local institution made famous by Anthony Bourdain.

2. **Zé da Mouraria 2 (Arroios / Mouraria)**
   - **Price:** €14–€18 per enormous sharing platter (Bacalhau com grão or Grilled cuttlefish).
   - **Tip:** Portions are giant — one dish easily feeds two people!

3. **A Provinciana (Travessa do Forno / Baixa)**
   - **Price:** Daily *Prato do Dia* typically €8.50–€10.50 including bread and olives.
   - **Specialty:** Chanfana, grilled sardines, roasted pork belly.

4. **A Merendinha do Arco (Rua dos Sapateiros, Baixa)**
   - **Price:** Hearty soups for €2.00, fried codfish cakes (Pastéis de Bacalhau) €1.50, grilled mackerel platter €8.50.

*Local Rule of Thumb:* Look for hand-written menus on paper tablecloths titled "Prato do Dia" (Dish of the Day) served between 12:00 and 15:00.`;
  }

  if (q.includes('rain') || q.includes('chuva') || q.includes('indoors')) {
    return `### Best Indoor & Rainy Day Activities in Lisbon

1. **Oceanário de Lisboa (Parque das Nações)**
   - **Why:** One of the world's most acclaimed oceanariums, with a giant 5-million-litre central tank. Completely indoors.
   - **Price:** €25.00 adults (book online).
   - **Transport:** Metro Oriente (Red line).

2. **Calouste Gulbenkian Museum (São Sebastião)**
   - **Why:** World-class collection spanning ancient Egyptian relics, Rembrandt, Monet, and Lalique jewellery.
   - **Price:** €10.00 (free on Sundays after 14:00).
   - **Transport:** Metro São Sebastião.

3. **Time Out Market (Mercado da Ribeira, Cais do Sodré)**
   - **Why:** Historic covered market hall packed with curated kitchens by Portugal's top chefs under one historic roof.
   - **Price:** Free entry; dishes from €9 to €20.

4. **National Tile Museum (Museu Nacional do Azulejo, Xabregas)**
   - **Why:** Housed in a breathtaking 16th-century convent; showcases 500 years of iconic Portuguese glazed tiles, including a 23-metre panorama of Lisbon before the 1755 earthquake.
   - **Price:** €8.00.`;
  }

  if (lang === 'pt') {
    return `### Dicas Locais AhnaX para a sua Visita a Lisboa

Obrigado pela sua pergunta! A melhor forma de descobrir Lisboa é equilibrar miradouros históricos, tascas tradicionais e passeios a pé pelos bairros:

1. **Destaques Históricos:**
   - **Alfama:** Perca-se no labirinto medieval de ruelas, vasos com flores e tabernas de Fado (Acesso livre; o Elétrico 28E passa mesmo ao lado).
   - **Miradouro de Santa Luzia & Portas do Sol:** Miradouros panorâmicos icónicos com pérgula de buganvílias e vista deslumbrante sobre o rio Tejo.

2. **Gastronomia Autêntica:**
   - **Manteigaria (Chiado ou Time Out Market):** *Pastel de Nata* quentinho a sair do forno polvilhado com canela (€1.30 cada) acompanhado de uma *bica* (€0.90).
   - **Jantar de Tasca:** Procure tascas de bairro familiares na Graça ou Mouraria para peixe fresco grelhado (Dourada ou Robalo) por menos de €12.

3. **Transportes Práticos:**
   - Adquira um **Cartão Navegante Ocasional** (€0.50) e carregue saldo Zapping (€5, €10 ou €15) para viagens com desconto em toda a rede de Metro, autocarros Carris, elétricos e comboios da CP para Belém, Cascais e Sintra.

*Indique-me quanto tempo tem disponível ou o seu orçamento previsto, e preparo um roteiro adaptado para si!*`;
  }

  if (lang === 'es') {
    return `### Recomendaciones Locales de AhnaX para Lisboa

¡Gracias por preguntar! La mejor manera de descubrir Lisboa es combinando miradores históricos, tascas tradicionales y paseos por sus barrios:

1. **Puntos Históricos Imprescindibles:**
   - **Alfama:** Piérdete por el laberinto medieval de callejuelas y tabernas de fado (Acceso libre; el tranvía 28E pasa al lado).
   - **Miradouro de Santa Luzia & Portas do Sol:** Vistas panorámicas del río Tajo y balcones con azulejos.

2. **Sabores Tradicionales:**
   - **Manteigaria (Chiado):** *Pastel de Nata* recién salido del horno (€1.30) junto a un café *bica* (€0.90).
   - **Cena en Tasca:** Busca locales tradicionales en Graça o Mouraria para pescado fresco a la brasa por menos de 12 €.

3. **Transporte Práctico:**
   - Compra la tarjeta **Navegante Ocasional** (€0.50) y recarga con saldo Zapping para viajar con descuento en metro, tranvías históricos y trenes de cercanías.

*¿Cuánto tiempo tienes disponible o cuál es tu presupuesto? ¡Te preparo un plan a medida!*`;
  }

  if (lang === 'fr') {
    return `### Conseils Locaux AhnaX pour Votre Séjour à Lisbonne

Merci pour votre question ! La meilleure façon de découvrir Lisbonne est de combiner belvédères historiques, tascas authentiques et balades dans les ruelles :

1. **Incontournables Historiques :**
   - **Alfama :** Flânez dans le dédale médiéval de ruelles pavées et de maisons de fado (Accès libre ; le tram 28E passe tout près).
   - **Miradouro de Santa Luzia :** Pergola romantique d'azulejos et vue spectaculaire sur le Tage.

2. **Pause Gourmande :**
   - **Manteigaria (Chiado) :** *Pastel de Nata* tiède saupoudré de cannelle (€1.30) et café *bica* (€0.90).
   - **Dîner en Tasca :** Petits restaurants familiaux à Graça ou Mouraria pour du poisson grillé à moins de 12 €.

3. **Transports Pratiques :**
   - Achetez la carte rechargeable **Navegante Occasionnel** (€0.50) et chargez du crédit Zapping pour bénéficier de tarifs réduits sur le métro, tramways et trains.

*Indiquez-moi le temps dont vous disposez ou votre budget pour un itinéraire personnalisé !*`;
  }

  if (lang === 'de') {
    return `### Lokale AhnaX-Empfehlungen für Ihren Aufenthalt in Lissabon

Vielen Dank für Ihre Anfrage! Am besten erlebt man Lissabon durch eine Mischung aus historischen Aussichtspunkten, urigen Tascas und Spaziergängen:

1. **Historische Highlights:**
   - **Alfama:** Schlendern Sie durch die mittelalterlichen Gassen mit Fado-Lokalen (Kostenlos; Straßenbahn 28E hält direkt daneben).
   - **Miradouro de Santa Luzia:** Wunderschöne Kachelbögen und weiter Blick über den Tejo.

2. **Kulinarische Spezialitäten:**
   - **Manteigaria (Chiado):** Ofenfrische *Pastéis de Nata* mit Zimt (€1.30) und Espresso *Bica* (€0.90).
   - **Tascas:** Traditionelle Familienlokale in Graça oder Mouraria mit gegrilltem Fisch für unter 12 €.

3. **Öffentlicher Nahverkehr:**
   - Kaufen Sie die aufladbare **Navegante-Karte** (€0.50) mit Zapping-Guthaben für ermäßigte Fahrten in Metro, Bussen, Zügen und historischen Trams.

*Sagen Sie mir gern, wie viel Zeit oder welches Budget Sie haben, und ich passe den Plan für Sie an!*`;
  }

  if (lang === 'it') {
    return `### Consigli Locali AhnaX per la Tua Visita a Lisbona

Grazie per la domanda! Il modo migliore per scoprire Lisbona è alternare punti panoramici, tasche tradizionali e passeggiate tra i vicoli:

1. **Punti Storici:**
   - **Alfama:** Perditi nel labirinto medievale di vicoli e locali di fado (Visita libera; il tram 28E passa nelle vicinanze).
   - **Miradouro de Santa Luzia:** Pergola romantica di azulejos con vista mozzafiato sul fiume Tago.

2. **Sapori Tipici:**
   - **Manteigaria (Chiado):** *Pastel de Nata* caldo appena sfornato con cannella (€1.30) e caffè espresso *bica* (€0.90).
   - **Cena in Tasca:** Locali tipici a Graça o Mouraria per gustare pesce alla griglia sotto i 12 €.

3. **Trasporti Pratici:**
   - Acquista la tessera **Navegante Occasionale** (€0.50) e carica credito Zapping per viaggiare a tariffa agevolata su metro, tram storici e treni.

*Dimmi quanto tempo hai a disposizione o il tuo budget e creerò un itinerario su misura per te!*`;
  }

  // General comprehensive guide response (English default)
  return `### AhnaX Lisbon Local Recommendations for You

Thank you for asking! Lisbon is best discovered by balancing historic viewpoints, authentic tascas, and neighbourhood strolls:

1. **Historic Highlights:**
   - **Alfama:** Wander the medieval labyrinth of alleyways, flower pots, and Fado taverns (Free to explore; Tram 28 passes nearby).
   - **Miradouro das Portas do Sol & Santa Luzia:** Two adjacent iconic viewpoints with bougainvillea arches and sweeping views of the river.

2. **Authentic Bites:**
   - **Manteigaria (Chiado & Time Out Market):** Freshly baked *Pastel de Nata* sprinkled with cinnamon (€1.30 each) paired with an espresso *bica* (€0.90).
   - **Tasca Dinner:** Look for family-run eateries in Graça or Mouraria for fresh grilled fish (Dourada or Robalo) under €12.

3. **Practical Transit:**
   - Buy a **Navegante Occasional Card** at any metro station machine for €0.50 and load "Zapping" credit (€5, €10, or €15) for discounted rides across Metro, buses, ferries, and commuter trains.

*Tell me more about your available time (e.g. 2 hours, full day) or your budget, and I'll tailor a tailored Lisbon plan for you!*`;
}

// Development Vite integration or Production static files
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`[Lisbon Made Easy] Server running on port ${PORT} (AI configured: ${hasApiKey})`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
