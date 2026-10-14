import React, { useState, useEffect, useRef } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Music, 
  ChevronUp, 
  ChevronDown, 
  Sparkles, 
  X,
  Disc3,
  Sliders,
  Info
} from 'lucide-react';
import { 
  portugueseGuitar, 
  GUITAR_TRACKS, 
  LISBON_GUITAR_COURSES, 
  COMMON_FADO_CHORDS,
  GuitarTrack 
} from '../utils/portugueseGuitarAudio';
import { SupportedLanguage } from '../types';

interface PortugueseGuitarPlayerProps {
  currentLang: SupportedLanguage;
}

const PLAYER_TEXTS: Record<SupportedLanguage, {
  title: string;
  badge: string;
  turnOn: string;
  turnOff: string;
  playing: string;
  paused: string;
  soundOn: string;
  soundOff: string;
  volume: string;
  nextTrack: string;
  prevTrack: string;
  tryPluck: string;
  tryPluckSubtitle: string;
  chords: string;
  unescoBadge: string;
  minimize: string;
  expand: string;
  close: string;
  acousticNote: string;
}> = {
  pt: {
    title: 'Guitarra Portuguesa de Lisboa',
    badge: 'Som Tradicional de Lisboa',
    turnOn: 'Ligar Som da Guitarra',
    turnOff: 'Desligar Som',
    playing: 'A Tocar ao Vivo',
    paused: 'Som em Pausa',
    soundOn: 'Guitarra: Ligada',
    soundOff: 'Guitarra: Desligada',
    volume: 'Volume',
    nextTrack: 'Faixa seguinte',
    prevTrack: 'Faixa anterior',
    tryPluck: 'Experimenta Tocar a Guitarra',
    tryPluckSubtitle: 'Clica nas 6 ordens de cordas ou nos acordes típicos do Fado para ouvir o som real.',
    chords: 'Acordes Tradicionais do Fado:',
    unescoBadge: 'Fado de Lisboa · Património Imaterial da Humanidade UNESCO',
    minimize: 'Minimizar leitor',
    expand: 'Expandir som da guitarra',
    close: 'Fechar',
    acousticNote: '12 cordas de aço com timbre brilhante e ressonância de Alfama',
  },
  en: {
    title: 'Portuguese Guitar of Lisbon',
    badge: 'Traditional Lisbon Sound',
    turnOn: 'Turn On Guitar Sound',
    turnOff: 'Turn Off Sound',
    playing: 'Playing Live',
    paused: 'Sound Paused',
    soundOn: 'Guitar: ON',
    soundOff: 'Guitar: OFF',
    volume: 'Volume',
    nextTrack: 'Next track',
    prevTrack: 'Previous track',
    tryPluck: 'Try Plucking the Guitar',
    tryPluckSubtitle: 'Click the 6 double-string courses or classic Fado chords to hear the authentic acoustic sound.',
    chords: 'Classic Fado Chords:',
    unescoBadge: 'Lisbon Fado · UNESCO Intangible Cultural Heritage',
    minimize: 'Minimize player',
    expand: 'Expand guitar player',
    close: 'Close',
    acousticNote: '12 steel strings with bright shimmering resonance from Alfama',
  },
  es: {
    title: 'Guitarra Portuguesa de Lisboa',
    badge: 'Sonido Tradicional de Lisboa',
    turnOn: 'Activar Sonido de Guitarra',
    turnOff: 'Desactivar Sonido',
    playing: 'Sonando en Vivo',
    paused: 'Sonido en Pausa',
    soundOn: 'Guitarra: Activada',
    soundOff: 'Guitarra: Desactivada',
    volume: 'Volumen',
    nextTrack: 'Pista siguiente',
    prevTrack: 'Pista anterior',
    tryPluck: 'Prueba Tocar la Guitarra',
    tryPluckSubtitle: 'Haz clic en las 6 órdenes de cuerdas o en los acordes de fado para escuchar el timbre real.',
    chords: 'Acordes Tradicionales de Fado:',
    unescoBadge: 'Fado de Lisboa · Patrimonio Cultural Inmaterial UNESCO',
    minimize: 'Minimizar reproductor',
    expand: 'Expandir reproductor',
    close: 'Cerrar',
    acousticNote: '12 cuerdas de acero con brillo metálico y resonancia de Alfama',
  },
  fr: {
    title: 'Guitare Portugaise de Lisbonne',
    badge: 'Son Traditionnel de Lisbonne',
    turnOn: 'Activer le Son de Guitare',
    turnOff: 'Couper le Son',
    playing: 'En Lecture',
    paused: 'Son en Pause',
    soundOn: 'Guitare : Activée',
    soundOff: 'Guitare : Désactivée',
    volume: 'Volume',
    nextTrack: 'Piste suivante',
    prevTrack: 'Piste précédente',
    tryPluck: 'Pincer la Guitare',
    tryPluckSubtitle: 'Cliquez sur les 6 choeurs de cordes ou les accords de fado pour écouter le son acoustique authentique.',
    chords: 'Accords Traditionnels du Fado :',
    unescoBadge: 'Fado de Lisbonne · Patrimoine Mondial de l\'UNESCO',
    minimize: 'Réduire le lecteur',
    expand: 'Agrandir le lecteur',
    close: 'Fermer',
    acousticNote: '12 cordes en acier au timbre cristallin et résonance d\'Alfama',
  },
  de: {
    title: 'Portugiesische Gitarre von Lissabon',
    badge: 'Traditioneller Lissabon-Klang',
    turnOn: 'Gitarrenklang Einschalten',
    turnOff: 'Klang Ausschalten',
    playing: 'Wiedergabe aktiv',
    paused: 'Ton pausiert',
    soundOn: 'Gitarre: AN',
    soundOff: 'Gitarre: AUS',
    volume: 'Lautstärke',
    nextTrack: 'Nächster Titel',
    prevTrack: 'Vorheriger Titel',
    tryPluck: 'Gitarre selbst zupfen',
    tryPluckSubtitle: 'Klicken Sie auf die 6 Saitenchöre oder Fado-Akkorde für den originalen Klang.',
    chords: 'Klassische Fado-Akkorde:',
    unescoBadge: 'Lissabonner Fado · UNESCO Weltkulturerbe',
    minimize: 'Minimieren',
    expand: 'Maximieren',
    close: 'Schließen',
    acousticNote: '12 Stahlsaiten mit hellem Schimmern und Alfama-Resonanz',
  },
  it: {
    title: 'Chitarra Portoghese di Lisbona',
    badge: 'Suono Tradizionale di Lisbona',
    turnOn: 'Attiva Suono della Chitarra',
    turnOff: 'Disattiva Suono',
    playing: 'In Riproduzione',
    paused: 'Suono in Pausa',
    soundOn: 'Chitarra: ON',
    soundOff: 'Chitarra: OFF',
    volume: 'Volume',
    nextTrack: 'Traccia successiva',
    prevTrack: 'Traccia precedente',
    tryPluck: 'Prova a Suonare la Chitarra',
    tryPluckSubtitle: 'Tocca le 6 corde doppie o gli accordi tipici del Fado per ascoltare il timbro originale.',
    chords: 'Accordi Tradizionali del Fado:',
    unescoBadge: 'Fado di Lisbona · Patrimonio Culturale Immateriale UNESCO',
    minimize: 'Riduci lettore',
    expand: 'Espandi lettore',
    close: 'Chiudi',
    acousticNote: '12 corde d\'acciaio con brillantezza metallica e risonanza di Alfama',
  },
  ar: {
    title: 'الجيتار البرتغالي للشبونة',
    badge: 'أنغام لشبونة التقليدية',
    turnOn: 'تشغيل صوت الجيتار',
    turnOff: 'إيقاف الصوت',
    playing: 'يعزف الآن',
    paused: 'متوقف مؤقتاً',
    soundOn: 'الجيتار: يعمل',
    soundOff: 'الجيتار: متوقف',
    volume: 'مستوى الصوت',
    nextTrack: 'المقطع التالي',
    prevTrack: 'المقطع السابق',
    tryPluck: 'جرّب العزف على الأوتار',
    tryPluckSubtitle: 'انقر على الأوتار المزدوجة الستة للاستماع إلى النغمات الأصلية.',
    chords: 'مقامات الفادو التقليدية:',
    unescoBadge: 'فادو لشبونة · التراث الثقافي غير المادي لليونسكو',
    minimize: 'تصغير',
    expand: 'توسيع',
    close: 'إغلاق',
    acousticNote: '12 وترًا فولاذيًا برنين مميز مستوحى من أزقة ألفاما',
  },
};

export const PortugueseGuitarPlayer: React.FC<PortugueseGuitarPlayerProps> = ({ currentLang }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [volume, setVolume] = useState(0.65);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showInteractiveModal, setShowInteractiveModal] = useState(false);
  const [activeCourseIndex, setActiveCourseIndex] = useState<number | null>(null);
  const [activeChordName, setActiveChordName] = useState<string | null>(null);
  const [visualizerBars, setVisualizerBars] = useState<number[]>([4, 6, 8, 5, 7, 3, 6, 9]);

  const animFrameRef = useRef<number | null>(null);
  const texts = PLAYER_TEXTS[currentLang] || PLAYER_TEXTS.pt;
  const currentTrack: GuitarTrack = GUITAR_TRACKS[currentTrackIndex] || GUITAR_TRACKS[0];

  // Subscribe to audio engine events
  useEffect(() => {
    const unsubscribe = portugueseGuitar.subscribe((playing, trackIdx) => {
      setIsPlaying(playing);
      setCurrentTrackIndex(trackIdx);
    });

    setVolume(portugueseGuitar.getVolume());
    setIsMuted(portugueseGuitar.isMute());

    return () => {
      unsubscribe();
    };
  }, []);

  // Visualizer animation loop when playing
  useEffect(() => {
    if (!isPlaying) {
      setVisualizerBars([3, 4, 3, 5, 4, 3, 4, 3]);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    const updateBars = () => {
      const data = portugueseGuitar.getVisualizerData();
      if (data && data.length >= 8) {
        const heights: number[] = [];
        for (let i = 0; i < 8; i++) {
          const val = data[i * 2] || 0;
          // Scale between 4px and 24px
          const px = Math.max(4, Math.min(24, Math.round((val / 255) * 22) + 4));
          heights.push(px);
        }
        setVisualizerBars(heights);
      } else {
        // Fallback natural wave
        const now = Date.now() / 150;
        setVisualizerBars([
          Math.sin(now) * 6 + 12,
          Math.cos(now * 1.2) * 8 + 14,
          Math.sin(now * 0.8) * 10 + 14,
          Math.cos(now * 1.5) * 7 + 13,
          Math.sin(now * 1.1) * 9 + 15,
          Math.cos(now * 0.9) * 6 + 11,
          Math.sin(now * 1.4) * 8 + 13,
          Math.cos(now * 1.7) * 7 + 12,
        ]);
      }
      animFrameRef.current = requestAnimationFrame(updateBars);
    };

    animFrameRef.current = requestAnimationFrame(updateBars);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying]);

  const handleTogglePlay = () => {
    portugueseGuitar.toggle();
  };

  const handleNextTrack = () => {
    portugueseGuitar.nextTrack();
  };

  const handlePrevTrack = () => {
    portugueseGuitar.prevTrack();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    portugueseGuitar.setVolume(val);
    if (isMuted && val > 0) {
      setIsMuted(false);
      portugueseGuitar.toggleMute();
    }
  };

  const handleToggleMute = () => {
    const muted = portugueseGuitar.toggleMute();
    setIsMuted(muted);
  };

  const handlePluckCourse = (courseIndex: number, freq: number) => {
    setActiveCourseIndex(courseIndex);
    portugueseGuitar.pluck(freq, 1.8, 0.9, true);
    setTimeout(() => setActiveCourseIndex(null), 300);
  };

  const handlePlayChord = (name: string, notes: number[]) => {
    setActiveChordName(name);
    portugueseGuitar.strumChord(notes, 30, 0.85);
    setTimeout(() => setActiveChordName(null), 400);
  };

  return (
    <>
      {/* Floating Bottom Sound Dock */}
      <aside 
        aria-label={texts.title}
        className="fixed bottom-4 right-4 z-40 max-w-[calc(100vw-2rem)] select-none transition-all duration-300"
      >
        <div className="bg-[#0B192C]/95 backdrop-blur-md text-amber-50 rounded-2xl shadow-2xl border border-amber-500/30 overflow-hidden transition-all duration-300">
          
          {/* Top Bar / Header of Player */}
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-gradient-to-r from-amber-950/60 via-[#1E3E62]/40 to-[#0B192C]/80 border-b border-amber-500/20 gap-3">
            
            {/* Left: Guitar Icon with pulsating note */}
            <div 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                isPlaying 
                  ? 'bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 shadow-lg shadow-amber-500/30 ring-2 ring-amber-400/50' 
                  : 'bg-slate-800 text-amber-400/70 border border-amber-500/20'
              }`}>
                {isPlaying ? (
                  <Disc3 className="w-4 h-4 animate-spin text-slate-950" style={{ animationDuration: '4s' }} />
                ) : (
                  <Music className="w-4 h-4" />
                )}
              </div>
              
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-bold tracking-wide uppercase text-amber-300">
                    {texts.title}
                  </span>
                  <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-semibold uppercase ${
                    isPlaying 
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                      : 'bg-stone-700/50 text-stone-300'
                  }`}>
                    {isPlaying ? texts.playing : texts.paused}
                  </span>
                </div>
                <p className="text-[11px] text-amber-100/90 font-medium truncate max-w-[180px] sm:max-w-[220px]">
                  {currentTrack.title}
                </p>
              </div>
            </div>

            {/* Right: Quick Play/Pause Big Toggle + Expand/Minimize button */}
            <div className="flex items-center gap-1.5">
              
              {/* PRIMARY ON / OFF TOGGLE BUTTON */}
              <button
                type="button"
                onClick={handleTogglePlay}
                title={isPlaying ? texts.turnOff : texts.turnOn}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs transition-all shadow-md active:scale-95 cursor-pointer ${
                  isPlaying
                    ? 'bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-amber-500/30'
                    : 'bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 hover:from-amber-500 hover:to-amber-400 shadow-amber-900/40'
                }`}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-current" />
                    <span className="hidden sm:inline">{texts.turnOff}</span>
                    <span className="sm:hidden">OFF</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    <span className="hidden sm:inline">{texts.turnOn}</span>
                    <span className="sm:hidden">LIGAR</span>
                  </>
                )}
              </button>

              {/* Expand / Minimize toggle button */}
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 rounded-lg text-amber-200/70 hover:text-amber-100 hover:bg-white/10 transition-colors"
                aria-label={isExpanded ? texts.minimize : texts.expand}
              >
                {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
              </button>
            </div>

          </div>

          {/* Equalizer Visualizer Strip */}
          <div className="h-2 bg-slate-950/80 px-3 flex items-center justify-between gap-1 overflow-hidden">
            {visualizerBars.map((height, idx) => (
              <span
                key={idx}
                className={`flex-1 rounded-full transition-all duration-100 ${
                  isPlaying ? 'bg-gradient-to-t from-amber-500 to-amber-300' : 'bg-stone-700/40'
                }`}
                style={{ height: `${height}px` }}
              />
            ))}
          </div>

          {/* Expanded Controls Panel */}
          {isExpanded && (
            <div className="p-3.5 sm:p-4 space-y-3.5 w-[310px] sm:w-[360px] animate-in fade-in duration-150">
              
              {/* Track Info & Category */}
              <div className="bg-slate-900/80 border border-amber-500/20 rounded-xl p-2.5">
                <div className="flex items-center justify-between text-[10px] text-amber-400 font-semibold mb-1">
                  <span>{currentTrack.subtitle}</span>
                  <span className="text-stone-400">{currentTrack.key}</span>
                </div>
                <p className="text-xs text-stone-200 line-clamp-2 leading-relaxed">
                  {currentTrack.description}
                </p>
              </div>

              {/* Controls: Skip Back, Play/Pause, Skip Next */}
              <div className="flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handlePrevTrack}
                  className="p-2 rounded-xl bg-slate-800 text-amber-200 hover:bg-slate-700 hover:text-amber-100 transition-colors cursor-pointer"
                  title={texts.prevTrack}
                >
                  <SkipBack className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleTogglePlay}
                  className={`px-5 py-2 rounded-xl font-bold text-xs flex items-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer ${
                    isPlaying 
                      ? 'bg-amber-400 text-slate-950 hover:bg-amber-300' 
                      : 'bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 hover:brightness-110'
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 fill-current" />
                      <span>{texts.turnOff}</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                      <span>{texts.turnOn}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleNextTrack}
                  className="p-2 rounded-xl bg-slate-800 text-amber-200 hover:bg-slate-700 hover:text-amber-100 transition-colors cursor-pointer"
                  title={texts.nextTrack}
                >
                  <SkipForward className="w-4 h-4" />
                </button>
              </div>

              {/* Volume Slider & Mute */}
              <div className="flex items-center gap-2.5 bg-slate-950/50 px-3 py-2 rounded-xl border border-stone-800">
                <button
                  type="button"
                  onClick={handleToggleMute}
                  className="text-amber-300 hover:text-amber-100 transition-colors"
                  title={isMuted ? 'Desmutar' : 'Silenciar'}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-4 h-4 text-rose-400" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="flex-1 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  aria-label={texts.volume}
                />
                <span className="text-[10px] font-mono text-stone-400 w-7 text-right">
                  {Math.round((isMuted ? 0 : volume) * 100)}%
                </span>
              </div>

              {/* Track Selection Pills */}
              <div className="space-y-1">
                <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider block">
                  Repertório de Fado:
                </span>
                <div className="grid grid-cols-2 gap-1.5">
                  {GUITAR_TRACKS.map((t, idx) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => portugueseGuitar.selectTrack(idx)}
                      className={`text-left px-2 py-1.5 rounded-lg text-[11px] font-medium transition-all truncate border ${
                        currentTrackIndex === idx
                          ? 'bg-amber-500/20 text-amber-200 border-amber-500/40 font-bold'
                          : 'bg-slate-800/60 text-stone-300 border-transparent hover:bg-slate-800'
                      }`}
                    >
                      {idx + 1}. {t.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interactive Pluck Mode Trigger Button */}
              <button
                type="button"
                onClick={() => setShowInteractiveModal(true)}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-gradient-to-r from-amber-900/60 to-amber-700/40 border border-amber-400/30 text-amber-200 hover:text-amber-100 hover:border-amber-400 text-xs font-semibold transition-all shadow-sm group cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300 group-hover:rotate-12 transition-transform" />
                <span>{texts.tryPluck}</span>
              </button>

              {/* UNESCO cultural footer */}
              <div className="text-[10px] text-stone-400 text-center pt-1 border-t border-stone-800/80">
                {texts.unescoBadge}
              </div>

            </div>
          )}

        </div>
      </aside>

      {/* Interactive Modal: Virtual Portuguese Guitar (Plucking strings & chords) */}
      {showInteractiveModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#FAF7F2] text-slate-900 rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-amber-900/20 relative overflow-hidden">
            
            {/* Header */}
            <div className="flex items-start justify-between pb-3 border-b border-stone-200 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#0B192C] text-amber-400 flex items-center justify-center shadow-md">
                  <Music className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#0B192C]">
                    {texts.tryPluck}
                  </h3>
                  <p className="text-xs text-stone-600">
                    {texts.acousticNote}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowInteractiveModal(false)}
                className="p-2 rounded-xl text-stone-500 hover:text-stone-800 hover:bg-stone-100 transition-colors"
                aria-label={texts.close}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Explanation */}
            <p className="text-xs text-stone-700 mb-4 leading-relaxed">
              {texts.tryPluckSubtitle}
            </p>

            {/* The 6 Guitar Courses (Ordens) */}
            <div className="space-y-2 mb-6">
              <span className="text-[11px] font-bold text-amber-950 uppercase tracking-wider block">
                As 6 Ordens de Cordas (Afinação de Lisboa: D - A - B - E - A - D):
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {LISBON_GUITAR_COURSES.map((course) => (
                  <button
                    key={course.index}
                    type="button"
                    onClick={() => handlePluckCourse(course.index, course.freq)}
                    className={`p-3 rounded-2xl border text-left transition-all active:scale-95 cursor-pointer flex flex-col justify-between ${
                      activeCourseIndex === course.index
                        ? 'bg-amber-400 text-slate-950 border-amber-500 shadow-md ring-2 ring-amber-300'
                        : 'bg-white hover:bg-amber-50 border-stone-200 text-slate-800 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold">{course.note}</span>
                      <span className="text-[10px] text-stone-500 font-mono">
                        {Math.round(course.freq)} Hz
                      </span>
                    </div>
                    <span className="text-[11px] text-stone-600 font-medium truncate">
                      {course.name}
                    </span>
                    {/* Visual vibrating string line */}
                    <div className="w-full h-1 bg-amber-900/20 rounded-full mt-2 overflow-hidden">
                      <div 
                        className={`h-full bg-amber-600 transition-all ${
                          activeCourseIndex === course.index ? 'w-full animate-pulse' : 'w-1/3'
                        }`} 
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Traditional Fado Chords */}
            <div className="space-y-2 mb-6">
              <span className="text-[11px] font-bold text-amber-950 uppercase tracking-wider block">
                {texts.chords}
              </span>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
                {COMMON_FADO_CHORDS.map((chord) => (
                  <button
                    key={chord.name}
                    type="button"
                    onClick={() => handlePlayChord(chord.name, chord.notes)}
                    className={`py-2 px-1 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer border ${
                      activeChordName === chord.name
                        ? 'bg-[#0B192C] text-amber-300 border-[#0B192C] shadow-md scale-105'
                        : 'bg-white text-slate-800 border-stone-200 hover:bg-amber-50 shadow-2xs'
                    }`}
                  >
                    {chord.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Cultural Footnote */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3 flex items-start gap-2.5 text-xs text-amber-950">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                A <strong>Guitarra Portuguesa</strong> distingue-se pela sua caixa harmónica em forma de pera e pela cabeça em voluta com leque de afinação. As suas 12 cordas duplas de aço conferem o pranto, a alegria e a alma inconfundível das noites de Fado em Lisboa.
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="mt-5 flex items-center justify-between">
              <button
                type="button"
                onClick={handleTogglePlay}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#0B192C] text-amber-400 hover:bg-[#1E3E62] transition-colors cursor-pointer"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? texts.turnOff : texts.turnOn}</span>
              </button>

              <button
                type="button"
                onClick={() => setShowInteractiveModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-stone-200 hover:bg-stone-300 transition-colors cursor-pointer"
              >
                {texts.close}
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
