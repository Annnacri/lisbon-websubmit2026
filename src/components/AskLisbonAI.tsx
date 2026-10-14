import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  RotateCcw, 
  Copy, 
  Check, 
  Info, 
  ChevronRight, 
  Loader2 
} from 'lucide-react';
import { ChatMessage, SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface AskLisbonAIProps {
  currentLang: SupportedLanguage;
  initialPrompt?: string;
  onClearInitialPrompt?: () => void;
  onOpenMap?: () => void;
}

const LOCALIZED_PROMPTS: Record<SupportedLanguage, string[]> = {
  en: [
    'I have three hours in Lisbon. What should I do?',
    'Find a traditional Portuguese restaurant under €20.',
    'How do I get from Lisbon Airport to the city centre?',
    'What can I do tonight?',
    'Find somewhere beautiful to watch the sunset.',
    'It\'s raining. What can I do indoors?',
    'I have €30 for food and activities today.',
    'How can I visit Sintra without renting a car?',
    'Find live music and a good place for dinner.',
    'Suggest something unusual that is easy to reach.',
  ],
  pt: [
    'Tenho três horas em Lisboa. O que devo fazer?',
    'Encontra um restaurante tradicional português por menos de €20.',
    'Como vou do Aeroporto de Lisboa até ao centro?',
    'O que posso fazer hoje à noite?',
    'Onde posso ver o melhor pôr do sol?',
    'Está a chover. O que posso fazer em espaços interiores?',
    'Tenho €30 para comida e atividades hoje.',
    'Como visitar Sintra sem alugar carro?',
    'Encontra música ao vivo e um bom sítio para jantar.',
    'Sugere algo diferente que seja fácil de alcançar.',
  ],
  es: [
    'Tengo tres horas en Lisboa. ¿Qué debería hacer?',
    'Busca un restaurante portugués tradicional por menos de 20 €.',
    '¿Cómo voy del aeropuerto de Lisboa al centro?',
    '¿Qué puedo hacer esta noche?',
    '¿Dónde ver el mejor atardecer?',
    'Está lloviendo. ¿Qué puedo hacer a cubierto?',
    'Tengo 30 € para comida y actividades hoy.',
    '¿Cómo visitar Sintra sin alquilar coche?',
    'Busca música en directo y un buen sitio para cenar.',
    'Recomienda algo curioso y fácil de llegar.',
  ],
  de: [
    'Ich habe drei Stunden in Lissabon. Was soll ich tun?',
    'Finde ein traditionelles Restaurant unter 20 €.',
    'Wie komme ich vom Flughafen Lissabon ins Zentrum?',
    'Was kann ich heute Abend unternehmen?',
    'Wo gibt es den schönsten Sonnenuntergang?',
    'Es regnet. Was kann ich drinnen machen?',
    'Ich habe 30 € für Essen und Aktivitäten heute.',
    'Wie besuche ich Sintra ohne Mietwagen?',
    'Finde Live-Musik und ein gutes Abendessen.',
    'Empfiehl etwas Ungewöhnliches, das leicht erreichbar ist.',
  ],
  fr: [
    'J\'ai trois heures à Lisbonne. Que faire ?',
    'Trouve un restaurant traditionnel à moins de 20 €.',
    'Comment aller de l\'aéroport de Lisbonne au centre-ville ?',
    'Que faire ce soir à Lisbonne ?',
    'Où admirer le plus beau coucher de soleil ?',
    'Il pleut. Que faire en intérieur ?',
    'J\'ai 30 € pour manger et visiter aujourd\'hui.',
    'Comment visiter Sintra sans louer de voiture ?',
    'Trouve de la musique live et un bon dîner.',
    'Conseille un lieu insolite facile d\'accès.',
  ],
  it: [
    'Ho tre ore a Lisbona. Cosa dovrei fare?',
    'Trova un ristorante tradizionale sotto i 20 €.',
    'Come arrivo dall\'aeroporto di Lisbona al centro?',
    'Cosa posso fare stasera?',
    'Dove ammirare il miglior tramonto?',
    'Piove. Cosa posso fare al chiuso?',
    'Ho 30 € per cibo e attività oggi.',
    'Come visitare Sintra senza noleggiare un\'auto?',
    'Trova musica dal vivo e un buon posto per cenare.',
    'Suggerisci qualcosa di insolito e facile da raggiungere.',
  ],
  ar: [
    'لدي ثلاث ساعات في لشبونة، ماذا أفعل؟',
    'ابحث عن مطعم برتغالي تقليدي بأقل من 20 يورو.',
    'كيف أصل من مطار لشبونة إلى وسط المدينة؟',
    'ماذا يمكنني أن أفعل الليلة؟',
    'أين يمكنني مشاهدة أفضل غروب شمس؟',
    'الجو ماطر، ما هي الأنشطة الداخلية المتاحة؟',
    'لدي ميزانية 30 يورو للطعام والأنشطة اليوم.',
    'كيف أزور سينترا بدون استئجار سيارة؟',
    'ابحث عن موسيقى حية ومكان جيد للعشاء.',
    'اقترح تجربة فريدة يسهل الوصول إليها.',
  ]
};

const DEFAULT_FOLLOW_UPS: Record<SupportedLanguage, string[]> = {
  en: ['Show cheaper options', 'Find something closer', 'Suggest an alternative', 'How do I get there?', 'Show on map'],
  pt: ['Opções mais baratas', 'Algo mais próximo', 'Sugerir alternativa', 'Como chegar lá?', 'Ver no mapa'],
  es: ['Opciones más baratas', 'Algo más cercano', 'Sugerir alternativa', '¿Cómo llego?', 'Ver en mapa'],
  de: ['Günstigere Optionen', 'Etwas in der Nähe', 'Alternative vorschlagen', 'Wie komme ich hin?', 'Auf Karte zeigen'],
  fr: ['Options moins chères', 'Quelque chose de plus proche', 'Autre alternative', 'Comment y aller ?', 'Voir sur la carte'],
  it: ['Opzioni più economiche', 'Qualcosa di più vicino', 'Suggerisci alternativa', 'Come ci arrivo?', 'Mostra sulla mappa'],
  ar: ['خيارات أرخص', 'مكان أقرب', 'اقتراح بديل', 'كيف أصل إلى هناك؟', 'عرض على الخريطة']
};

export const AskLisbonAI: React.FC<AskLisbonAIProps> = ({
  currentLang,
  initialPrompt,
  onClearInitialPrompt,
  onOpenMap,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const getWelcomeContent = (lang: SupportedLanguage) => {
    switch (lang) {
      case 'pt':
        return `Olá! Bem-vindo ao **Ask Lisbon AI**, o seu companheiro digital local criado pela AhnaX.\n\nDiga-nos o que precisa — o seu orçamento em €, o tempo disponível (por exemplo, 2 horas ou um fim de semana) ou com quem está a viajar. Damos-lhe sugestões práticas com distâncias a pé reais e conselhos de transporte!`;
      case 'es':
        return `¡Hola! Bienvenido a **Ask Lisbon AI**, tu asistente local creado por AhnaX.\n\nCuéntanos qué necesitas: tu presupuesto en €, el tiempo disponible (p. ej. 2 horas o un fin de semana) o con quién viajas. ¡Te damos recomendaciones prácticas con tiempos reales de paseo y transporte!`;
      case 'de':
        return `Olá! Willkommen bei **Ask Lisbon AI**, Ihrem lokalen Reisebegleiter von AhnaX.\n\nSagen Sie uns, was Sie suchen — Ihr Budget in €, Ihre Zeit oder Ihre Interessen. Wir bieten praktische Empfehlungen mit realistischen Entfernungen und Verkehrstipps!`;
      case 'fr':
        return `Olá ! Bienvenue sur **Ask Lisbon AI**, votre compagnon local créé par AhnaX.\n\nIndiquez-nous votre budget en €, le temps disponible ou vos envies. Nous vous proposons des recommandations pratiques avec des temps de marche et de transport réalistes !`;
      case 'it':
        return `Olá! Benvenuto su **Ask Lisbon AI**, la tua guida locale creata da AhnaX.\n\nDicci cosa cerchi: il tuo budget in €, il tempo a disposizione o chi viaggia con te. Ti offriamo suggerimenti pratici con distanze reali a piedi e consigli sui trasporti!`;
      case 'ar':
        return `أهلاً بك في **Ask Lisbon AI**، دليلك المحلي الرقمي في لشبونة من AhnaX.\n\nأخبرنا بميزانيتك باليورو والوقت المتاح لديك واهتماماتك وسنقدم لك أفضل الاقتراحات العملية مع مسارات المواصلات الحقيقية!`;
      default:
        return `Olá! Welcome to **Ask Lisbon AI**, your local digital companion by AhnaX.\n\nTell us what you need — your budget in €, your available time (e.g. 2 hours or a weekend), or who you are travelling with. We provide practical, unhurried suggestions with realistic walking and transit advice!`;
    }
  };

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: getWelcomeContent(currentLang),
      timestamp: 'Just now',
      isLiveAI: true,
      source: 'AhnaX Lisbon Knowledge Engine',
      suggestedActions: LOCALIZED_PROMPTS[currentLang]?.slice(0, 3) || LOCALIZED_PROMPTS['en'].slice(0, 3),
    }
  ]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [apiStatus, setApiStatus] = useState<{ isLive: boolean; label: string }>({
    isLive: false,
    label: 'Checking AI status...',
  });

  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Check backend server status
  useEffect(() => {
    fetch('/api/status')
      .then((res) => res.json())
      .then((data) => {
        if (data.aiConfigured) {
          setApiStatus({
            isLive: true,
            label: 'Live Gemini 3.8 Flash Connected',
          });
        } else {
          setApiStatus({
            isLive: false,
            label: 'Curated Local Intelligence Mode (Demo)',
          });
        }
      })
      .catch(() => {
        setApiStatus({
          isLive: false,
          label: 'Curated Local Intelligence Mode (AhnaX Knowledge Base)',
        });
      });
  }, []);

  // Handle triggered initial prompt from cards
  useEffect(() => {
    if (initialPrompt) {
      sendMessage(initialPrompt);
      if (onClearInitialPrompt) onClearInitialPrompt();
    }
  }, [initialPrompt]);

  // Update welcome message if user changes language before sending messages
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 'welcome') {
        return [
          {
            id: 'welcome',
            role: 'assistant',
            content: getWelcomeContent(currentLang),
            timestamp: 'Just now',
            isLiveAI: true,
            source: 'AhnaX Lisbon Knowledge Engine',
            suggestedActions: LOCALIZED_PROMPTS[currentLang]?.slice(0, 3) || LOCALIZED_PROMPTS['en'].slice(0, 3),
          }
        ];
      }
      return prev;
    });
  }, [currentLang]);

  const sendMessage = async (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed || loading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: trimmed,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const historyPayload = messages.slice(-5).map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          language: currentLang,
          history: historyPayload,
        }),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();

      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        content: data.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isLiveAI: data.isLiveAI,
        source: data.source || (data.isLiveAI ? 'Google Gemini 3.8 Flash' : 'Curated Lisbon Local Intelligence Engine'),
        suggestedActions: DEFAULT_FOLLOW_UPS[currentLang] || DEFAULT_FOLLOW_UPS['en'],
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error('Chat error:', err);
      // Local fallback in case network error
      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        content: `### Lisbon Local Recommendation

For **"${trimmed}"**, here are verified practical recommendations:

1. **Historic Stroll & Views:**
   - Head to **Miradouro da Senhora do Monte** (Graça) for the highest free panorama in Lisbon.
   - Hop on historic Tram 28E or walk up through the cobbled alleys of Alfama.

2. **Affordable Authentic Meal:**
   - Stop at **O Trevo** (Praça Luís de Camões) for a garlic-marinated pork *Bifana* (€3.00) or find a *prato do dia* at a neighbourhood tasca for under €10.

3. **Getting Around:**
   - Use the **Navegante 24-hour Pass** (€6.80) for unlimited Metro, Carris buses, and historic trams.

*Estimated costs are indicative. Feel free to ask about specific neighbourhoods or transit lines!*`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isLiveAI: false,
        source: 'Curated Lisbon Local Intelligence Engine (Offline Fallback)',
        suggestedActions: DEFAULT_FOLLOW_UPS[currentLang] || DEFAULT_FOLLOW_UPS.en,
      };

      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleActionClick = (action: string) => {
    if (action.toLowerCase() === 'show on map' && onOpenMap) {
      onOpenMap();
      return;
    }
    sendMessage(action);
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const clearChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        role: 'assistant',
        content: `Chat cleared! How else can we assist your Lisbon journey?`,
        timestamp: 'Just now',
        suggestedActions: [
          'What can I do tonight?',
          'Find somewhere beautiful to watch the sunset.',
          'Find a traditional Portuguese restaurant under €20.'
        ]
      }
    ]);
  };

  return (
    <section id="ask-ai" className="py-12 bg-linear-to-b from-[#FAF7F2] to-amber-50/40 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Terminal Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B192C] text-amber-300 text-xs font-semibold mb-2 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Conversational Terminal</span>
          </div>
          <h2 className="text-3xl font-bold font-display text-[#0B192C]">
            Ask Lisbon AI
          </h2>
          <p className="text-sm text-slate-700 mt-1">
            {t.aiIntro}
          </p>
          
          {/* Active Status Badge */}
          <div className="mt-2.5 inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-700 shadow-2xs">
            <span className={`w-2 h-2 rounded-full ${apiStatus.isLive ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
            <span className="font-medium">{apiStatus.label}</span>
          </div>
        </div>

        {/* Example Prompt Chips Carousel */}
        <div className="mb-5">
          <div className="text-xs font-semibold text-stone-700 mb-2 flex items-center justify-between">
            <span>Try one of these frequent visitor questions:</span>
            <span className="text-stone-500 text-[11px]">Click to ask instantly</span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {(LOCALIZED_PROMPTS[currentLang] || LOCALIZED_PROMPTS['en']).map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => sendMessage(prompt)}
                disabled={loading}
                className="shrink-0 text-xs bg-white hover:bg-amber-100/70 border border-stone-200 hover:border-amber-300 text-slate-800 font-medium px-3 py-1.5 rounded-full transition-all cursor-pointer shadow-2xs"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Window Container */}
        <div className="bg-white rounded-2xl border border-stone-300 shadow-lg overflow-hidden flex flex-col h-[520px]">
          
          {/* Terminal Toolbar */}
          <div className="px-4 py-3 bg-[#0B192C] text-white flex items-center justify-between text-xs border-b border-stone-800">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-amber-400" />
              <span className="font-bold tracking-wide">Ask Lisbon AI Assistant</span>
              <span className="text-stone-400 text-[11px] hidden sm:inline">| AhnaX Engine</span>
            </div>
            
            <button
              type="button"
              onClick={clearChat}
              className="text-stone-300 hover:text-white inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-md hover:bg-white/10 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Chat</span>
            </button>
          </div>

          {/* Messages Flow Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-stone-50/50">
            {messages.map((msg) => {
              const isBot = msg.role === 'assistant';

              return (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${isBot ? 'items-start' : 'items-start flex-row-reverse'}`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs shadow-2xs ${
                      isBot ? 'bg-[#0B192C] text-amber-400' : 'bg-[#C85A32] text-white font-bold'
                    }`}
                  >
                    {isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                  </div>

                  {/* Message Bubble */}
                  <div className={`max-w-[85%] sm:max-w-[78%] space-y-2`}>
                    <div
                      className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                        isBot
                          ? 'bg-white text-slate-800 border border-stone-200 shadow-2xs rounded-tl-xs'
                          : 'bg-[#0B192C] text-white rounded-tr-xs'
                      }`}
                    >
                      {/* Markdown-style rendering support */}
                      <div className="space-y-2 prose prose-sm max-w-none prose-slate">
                        {msg.content.split('\n\n').map((paragraph, pIdx) => {
                          if (paragraph.startsWith('### ')) {
                            return (
                              <h4 key={pIdx} className="font-bold font-display text-sm sm:text-base text-[#0B192C] mt-2 mb-1">
                                {paragraph.replace('### ', '')}
                              </h4>
                            );
                          }
                          return (
                            <p key={pIdx} className="whitespace-pre-line text-xs sm:text-sm leading-relaxed">
                              {paragraph}
                            </p>
                          );
                        })}
                      </div>

                      {/* Bot Footer Metadata */}
                      {isBot && (
                        <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-600">
                          <span className="italic">{msg.source}</span>
                          <button
                            type="button"
                            onClick={() => handleCopy(msg.id, msg.content)}
                            className="inline-flex items-center gap-1 text-stone-600 hover:text-slate-900"
                            title="Copy reply"
                          >
                            {copiedId === msg.id ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                            <span>{copiedId === msg.id ? 'Copied' : 'Copy'}</span>
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Follow-up Action Suggestions */}
                    {isBot && msg.suggestedActions && msg.suggestedActions.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {msg.suggestedActions.map((action, aIdx) => (
                          <button
                            key={aIdx}
                            type="button"
                            onClick={() => handleActionClick(action)}
                            disabled={loading}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold bg-white hover:bg-amber-50 text-slate-700 hover:text-[#C85A32] border border-stone-200 px-2.5 py-1 rounded-lg transition-colors shadow-2xs cursor-pointer"
                          >
                            <span>{action}</span>
                            <ChevronRight className="w-3 h-3 text-stone-400" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Loading Indicator */}
            {loading && (
              <div className="flex gap-3 items-start animate-in fade-in">
                <div className="w-8 h-8 rounded-xl bg-[#0B192C] text-amber-400 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-stone-200 rounded-2xl rounded-tl-xs p-4 shadow-2xs flex items-center gap-2 text-xs text-stone-600">
                  <Loader2 className="w-4 h-4 animate-spin text-[#C85A32]" />
                  <span>Consulting local Lisbon knowledge base & verified transit data...</span>
                </div>
              </div>
            )}

            <div ref={chatBottomRef} />
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-white border-t border-stone-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.aiPlaceholder}
                disabled={loading}
                className="flex-1 bg-stone-50 border border-stone-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-hidden focus:bg-white focus:border-[#C85A32] focus:ring-2 focus:ring-[#C85A32]/20 transition-all placeholder:text-stone-500 text-slate-900"
              />

              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="px-4 py-2.5 rounded-xl bg-[#0B192C] hover:bg-[#1E3E62] disabled:opacity-50 text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Send</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="mt-1.5 flex items-center gap-1 text-[11px] text-stone-600 px-1">
              <Info className="w-3 h-3 text-stone-500 shrink-0" />
              <span>{t.aiDisclaimer}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
