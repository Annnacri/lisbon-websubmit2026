/**
 * Portuguese Guitar (Guitarra Portuguesa de Lisboa) Audio Synthesis Engine
 * 
 * Simulates the unique acoustic characteristics of the Lisbon 12-string guitar:
 * - 6 double-courses (pares de cordas de aço)
 * - Steel strings with shimmering micro-chorus detuning (~2-4 cents)
 * - Sharp metallic attack of the traditional Portuguese "unha" (plectrum)
 * - Wooden pear-shaped soundboard resonance cavity (400-850 Hz body filter)
 * - Expressive Fado ornamentation (trinados, arpeggios, rubato)
 */

export interface GuitarTrack {
  id: string;
  title: string;
  subtitle: string;
  style: string;
  description: string;
  tempo: number; // BPM
  key: string;
}

export const GUITAR_TRACKS: GuitarTrack[] = [
  {
    id: 'alfama-fado-menor',
    title: 'Canção de Alfama',
    subtitle: 'Fado Menor Tradicional',
    style: 'Nostálgico & Tradicional',
    description: 'A melodia mais emblemática das ruelas estreitas de Alfama, com arpejos suaves e o clássico trinado da guitarra portuguesa.',
    tempo: 78,
    key: 'Ré menor (D minor)',
  },
  {
    id: 'corridinho-tejo',
    title: 'Variações sobre o Tejo',
    subtitle: 'Guitarrada Luminosa',
    style: 'Alegre & Rítmico',
    description: 'Tema vivo e brilhante que reflete a luz dourada do rio Tejo ao final de tarde, com arpejos rápidos e bordões cantantes.',
    tempo: 104,
    key: 'Sol maior (G major)',
  },
  {
    id: 'noite-mouraria',
    title: 'Noite na Mouraria',
    subtitle: 'Fado Corrido Antigo',
    style: 'Expressivo & Romântico',
    description: 'Inspirado no berço de Severa na Mouraria. Melodia emotiva com acordes densos e variações virtuosas.',
    tempo: 84,
    key: 'Lá menor (A minor)',
  },
  {
    id: 'miradouro-santa-luzia',
    title: 'Balada de Santa Luzia',
    subtitle: 'Poema das Colinas',
    style: 'Suave & Contemplativo',
    description: 'O som da brisa nos azulejos do miradouro com vista para o casario branco e as cúpulas de Lisboa.',
    tempo: 72,
    key: 'Ré maior (D major)',
  },
];

// Frequencies for Lisbon Portuguese Guitar Tuning (Natural da Guitarra de Lisboa):
// 1ª corda: D4 (~293.66 Hz)
// 2ª corda: A3 (~220.00 Hz)
// 3ª corda: B3 (~246.94 Hz)
// 4ª corda: E3 (~164.81 Hz)
// 5ª corda: A2 (~110.00 Hz)
// 6ª corda: D2 (~73.42 Hz)
export const LISBON_GUITAR_COURSES = [
  { index: 1, name: '1ª Ordem (Ré alto)', note: 'D4', freq: 293.66, octaves: 'unison' },
  { index: 2, name: '2ª Ordem (Lá)', note: 'A3', freq: 220.00, octaves: 'unison' },
  { index: 3, name: '3ª Ordem (Si)', note: 'B3', freq: 246.94, octaves: 'unison' },
  { index: 4, name: '4ª Ordem (Mi)', note: 'E3', freq: 164.81, octaves: 'octave' },
  { index: 5, name: '5ª Ordem (Lá baixo)', note: 'A2', freq: 110.00, octaves: 'octave' },
  { index: 6, name: '6ª Ordem (Ré baixo)', note: 'D2', freq: 73.42, octaves: 'octave' },
];

export const COMMON_FADO_CHORDS = [
  { name: 'Dm (Ré m)', notes: [146.83, 220.0, 293.66, 349.23, 440.0] },
  { name: 'A7 (Lá 7)', notes: [110.0, 220.0, 277.18, 329.63, 440.0, 554.37] },
  { name: 'Gm (Sol m)', notes: [196.0, 246.94, 293.66, 392.0, 466.16] },
  { name: 'D (Ré Maior)', notes: [146.83, 220.0, 293.66, 369.99, 440.0, 587.33] },
  { name: 'Am (Lá m)', notes: [110.0, 220.0, 261.63, 329.63, 440.0, 523.25] },
  { name: 'E7 (Mi 7)', notes: [164.81, 246.94, 329.63, 392.0, 493.88] },
];

// Score representation: [noteFreq, durationInBeats, isTrinado, velocity]
type NoteEvent = [number, number, boolean?, number?];

// Musical pieces composed authentically in the traditional Lisbon Fado idioms:
const COMPOSITIONS: Record<string, NoteEvent[]> = {
  'alfama-fado-menor': [
    // Intro arpeggio in Dm (classic fado cadence)
    [146.83, 0.5, false, 0.7], [220.0, 0.5, false, 0.6], [293.66, 0.5, false, 0.8], [349.23, 0.5, false, 0.9],
    [440.0, 1.0, true, 0.95], [392.0, 0.5, false, 0.75], [349.23, 0.5, false, 0.8],
    [329.63, 1.0, true, 0.85], [293.66, 0.5, false, 0.7], [277.18, 0.5, false, 0.8],
    // Cadence to A7
    [220.0, 1.0, false, 0.8], [277.18, 0.5, false, 0.7], [329.63, 0.5, false, 0.75], [440.0, 1.0, true, 0.9],
    [523.25, 0.5, false, 0.85], [440.0, 0.5, false, 0.8], [392.0, 0.5, false, 0.75], [349.23, 0.5, false, 0.7],
    // Characteristic Trinado on high D
    [587.33, 1.0, true, 1.0], [523.25, 0.5, false, 0.8], [440.0, 0.5, false, 0.8],
    [392.0, 0.5, false, 0.7], [349.23, 0.5, false, 0.75], [329.63, 1.0, true, 0.8],
    // Bass descent: D2 -> A2 -> D3
    [73.42, 0.75, false, 0.9], [110.0, 0.5, false, 0.8], [146.83, 0.5, false, 0.75], [220.0, 0.5, false, 0.7],
    [293.66, 1.5, true, 0.95],
    // Second phrase: emotive descent
    [440.0, 0.5, false, 0.85], [493.88, 0.5, false, 0.9], [523.25, 0.75, true, 0.95],
    [493.88, 0.25, false, 0.8], [440.0, 0.5, false, 0.8], [392.0, 0.5, false, 0.75],
    [349.23, 1.0, true, 0.85], [293.66, 0.5, false, 0.8], [220.0, 0.5, false, 0.7],
    [277.18, 1.0, true, 0.85], [220.0, 1.5, false, 0.8],
  ],

  'corridinho-tejo': [
    // Bright G Major opening
    [196.0, 0.5, false, 0.8], [246.94, 0.5, false, 0.75], [293.66, 0.5, false, 0.85], [392.0, 0.5, false, 0.9],
    [493.88, 0.5, true, 0.95], [392.0, 0.5, false, 0.8], [493.88, 0.5, false, 0.9], [587.33, 1.0, true, 1.0],
    [587.33, 0.5, false, 0.85], [523.25, 0.5, false, 0.8], [493.88, 0.5, false, 0.85], [440.0, 0.5, false, 0.75],
    [392.0, 1.0, true, 0.9], [293.66, 0.5, false, 0.75], [196.0, 0.5, false, 0.8],
    // D7 bridge
    [146.83, 0.5, false, 0.8], [220.0, 0.5, false, 0.75], [293.66, 0.5, false, 0.8], [369.99, 0.5, false, 0.85],
    [440.0, 0.5, true, 0.9], [369.99, 0.5, false, 0.8], [440.0, 0.5, false, 0.85], [587.33, 1.0, true, 0.95],
    [523.25, 0.5, false, 0.8], [493.88, 0.5, false, 0.8], [440.0, 0.5, false, 0.75], [369.99, 0.5, false, 0.7],
    // Resolution in G
    [392.0, 1.5, true, 1.0], [293.66, 0.5, false, 0.75], [196.0, 1.0, false, 0.85],
  ],

  'noite-mouraria': [
    // Mouraria Fado in A minor
    [110.0, 0.75, false, 0.85], [220.0, 0.5, false, 0.75], [261.63, 0.5, false, 0.8], [329.63, 0.5, false, 0.85],
    [440.0, 1.0, true, 0.95], [392.0, 0.5, false, 0.8], [349.23, 0.5, false, 0.75], [329.63, 1.0, true, 0.85],
    [261.63, 0.5, false, 0.75], [246.94, 0.5, false, 0.7], [220.0, 1.0, false, 0.8],
    // E7 response
    [164.81, 0.5, false, 0.8], [246.94, 0.5, false, 0.75], [329.63, 0.5, false, 0.85], [415.30, 1.0, true, 0.9],
    [493.88, 0.5, false, 0.85], [440.0, 0.5, false, 0.8], [415.30, 0.5, false, 0.75], [329.63, 1.0, true, 0.85],
    // Grand ornament
    [523.25, 1.0, true, 1.0], [493.88, 0.5, false, 0.85], [440.0, 0.5, false, 0.8], [392.0, 0.5, false, 0.75],
    [349.23, 0.5, false, 0.7], [329.63, 0.5, false, 0.75], [261.63, 0.5, false, 0.75], [220.0, 1.5, true, 0.9],
  ],

  'miradouro-santa-luzia': [
    // Gentle D Major
    [146.83, 0.75, false, 0.8], [220.0, 0.5, false, 0.7], [293.66, 0.5, false, 0.8], [369.99, 0.75, true, 0.9],
    [440.0, 0.5, false, 0.85], [587.33, 1.0, true, 0.95], [440.0, 0.5, false, 0.8], [369.99, 0.5, false, 0.75],
    [293.66, 1.0, true, 0.85],
    // G major gentle turn
    [196.0, 0.5, false, 0.75], [246.94, 0.5, false, 0.7], [293.66, 0.5, false, 0.75], [392.0, 0.75, true, 0.85],
    [493.88, 0.5, false, 0.9], [440.0, 0.5, false, 0.8], [392.0, 0.5, false, 0.75], [369.99, 1.0, true, 0.85],
    [293.66, 1.5, false, 0.8],
  ],
};

class PortugueseGuitarEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private bodyFilter: BiquadFilterNode | null = null;
  private reverbNode: ConvolverNode | null = null;
  private dryGain: GainNode | null = null;
  private wetGain: GainNode | null = null;
  private analyser: AnalyserNode | null = null;

  private isPlayingAudio = false;
  private currentTrackIndex = 0;
  private volumeLevel = 0.65;
  private isMuted = false;
  private playbackTimer: number | null = null;
  private noteStep = 0;
  private statusListeners: Set<(playing: boolean, trackIndex: number) => void> = new Set();

  constructor() {
    // Lazy AudioContext initialization on first user interaction
  }

  private initContext() {
    if (this.ctx && this.ctx.state !== 'closed') {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      return;
    }

    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new AudioContextClass();

    // Master volume control
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volumeLevel, this.ctx.currentTime);

    // Lisbon Guitar Acoustic Chamber Resonance (pear-shaped soundbox)
    // Characteristic 600-800Hz warm wood midrange bump
    this.bodyFilter = this.ctx.createBiquadFilter();
    this.bodyFilter.type = 'peaking';
    this.bodyFilter.frequency.value = 650;
    this.bodyFilter.Q.value = 1.6;
    this.bodyFilter.gain.value = 4.5; // dB boost

    // Subtle high shelf to smooth ultra-high harshness, retaining metallic sparkle
    const sparkleFilter = this.ctx.createBiquadFilter();
    sparkleFilter.type = 'highshelf';
    sparkleFilter.frequency.value = 6000;
    sparkleFilter.gain.value = 2.0;

    // Fast-acting Analyser for visualizer (waveforms / dancing strings)
    this.analyser = this.ctx.createAnalyser();
    this.analyser.fftSize = 64;
    this.analyser.smoothingTimeConstant = 0.8;

    // Dry / Wet Reverb Bus (Simulating Alfama stones / Fado house atmosphere)
    this.dryGain = this.ctx.createGain();
    this.wetGain = this.ctx.createGain();
    this.dryGain.gain.value = 0.85;
    this.wetGain.gain.value = 0.35;

    // Synthetic impulse response for historic Lisbon room reverb
    this.reverbNode = this.ctx.createConvolver();
    this.reverbNode.buffer = this.createAlfamaImpulse(this.ctx, 1.8, 2.2);

    // Audio Graph routing:
    // Plucks -> bodyFilter -> sparkleFilter -> masterGain -> [dry / wet] -> analyser -> destination
    this.bodyFilter.connect(sparkleFilter);
    sparkleFilter.connect(this.masterGain);

    this.masterGain.connect(this.dryGain);
    this.masterGain.connect(this.reverbNode);
    this.reverbNode.connect(this.wetGain);

    this.dryGain.connect(this.analyser);
    this.wetGain.connect(this.analyser);
    this.analyser.connect(this.ctx.destination);
  }

  /**
   * Generates a warm, authentic room impulse response simulating an intimate Alfama fado house
   */
  private createAlfamaImpulse(ctx: AudioContext, duration = 1.8, decay = 2.0): AudioBuffer {
    const sampleRate = ctx.sampleRate;
    const length = Math.floor(sampleRate * duration);
    const impulse = ctx.createBuffer(2, length, sampleRate);
    const left = impulse.getChannelData(0);
    const right = impulse.getChannelData(1);

    for (let i = 0; i < length; i++) {
      const n = i / length;
      const env = Math.exp(-n * decay * 4);
      // Soft diffuse reflections
      const noiseL = (Math.random() * 2 - 1) * env;
      const noiseR = (Math.random() * 2 - 1) * env;
      left[i] = noiseL * (1 + 0.15 * Math.sin(i * 0.02));
      right[i] = noiseR * (1 + 0.15 * Math.cos(i * 0.02));
    }
    return impulse;
  }

  /**
   * Plucks a single string / double-course with the characteristic metallic timbre of the Portuguese guitar
   */
  public pluck(frequency: number, duration = 1.6, velocity = 0.8, isTrinado = false) {
    this.initContext();
    if (!this.ctx || !this.bodyFilter) return;

    const now = this.ctx.currentTime;

    // Portuguese Guitar strings come in pairs (ordens).
    // Pair 1: Base frequency
    // Pair 2: Detuned slightly (+3.5 cents) to create the signature Lisbon shimmering chorus
    const detuneCents = 3.2;
    const freqs = [
      frequency,
      frequency * Math.pow(2, detuneCents / 1200),
    ];

    // If it's a bass course (frequencies < 200Hz), add an octave upper string
    if (frequency < 200) {
      freqs.push(frequency * 2 * Math.pow(2, 2 / 1200));
    }

    freqs.forEach((f, idx) => {
      if (!this.ctx || !this.bodyFilter) return;

      const osc = this.ctx.createOscillator();
      // Triangle + gentle harmonics simulate the steel wound strings of the Portuguese guitar
      osc.type = idx % 2 === 0 ? 'triangle' : 'sawtooth';
      osc.frequency.setValueAtTime(f, now);

      // Fado Trinado ornamentation: rapid flutter on high notes
      if (isTrinado) {
        const vibratoRate = 18; // Fast trinado speed
        const vibratoDepth = f * 0.035; // 3.5% pitch variation
        const lfo = this.ctx.createOscillator();
        const lfoGain = this.ctx.createGain();
        lfo.frequency.setValueAtTime(vibratoRate, now);
        lfoGain.gain.setValueAtTime(vibratoDepth, now);
        lfo.connect(osc.frequency);
        lfo.start(now);
        lfo.stop(now + duration);
      }

      // Gain Envelope for physical pluck:
      // Very fast attack (~2ms) then exponential decay
      const stringGain = this.ctx.createGain();
      const stringVelocity = velocity * (idx === 0 ? 0.45 : idx === 1 ? 0.35 : 0.25);
      
      stringGain.gain.setValueAtTime(0.0001, now);
      stringGain.gain.exponentialRampToValueAtTime(stringVelocity, now + 0.003);
      
      // Decay time depends on pitch (higher notes decay faster, bass notes sustain longer)
      const noteDecay = Math.max(0.6, duration * (300 / Math.max(100, frequency)));
      stringGain.gain.exponentialRampToValueAtTime(0.0001, now + noteDecay);

      // Attack Transient: "Unha" metal plectrum click
      const clickOsc = this.ctx.createOscillator();
      const clickGain = this.ctx.createGain();
      clickOsc.type = 'sine';
      clickOsc.frequency.setValueAtTime(2400, now);
      clickOsc.frequency.exponentialRampToValueAtTime(300, now + 0.012);
      clickGain.gain.setValueAtTime(velocity * 0.3, now);
      clickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.015);

      clickOsc.connect(clickGain);
      clickGain.connect(this.bodyFilter);
      clickOsc.start(now);
      clickOsc.stop(now + 0.02);

      // Connect string oscillator through soundboard resonance
      osc.connect(stringGain);
      stringGain.connect(this.bodyFilter);

      osc.start(now);
      osc.stop(now + noteDecay + 0.05);
    });
  }

  /**
   * Strum a full chord with a rapid roll (rasgado / arpejo)
   */
  public strumChord(notes: number[], delayBetweenStringsMs = 28, velocity = 0.8) {
    this.initContext();
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.pluck(freq, 2.0, velocity * (0.8 + idx * 0.05), false);
      }, idx * delayBetweenStringsMs);
    });
  }

  /**
   * Starts playing the current track
   */
  public start() {
    this.initContext();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isPlayingAudio = true;
    this.noteStep = 0;
    this.notifyStatus();
    this.scheduleNextNote();
  }

  /**
   * Stops/Pauses playing
   */
  public stop() {
    this.isPlayingAudio = false;
    if (this.playbackTimer) {
      clearTimeout(this.playbackTimer);
      this.playbackTimer = null;
    }
    this.notifyStatus();
  }

  /**
   * Toggles playback on and off
   */
  public toggle(): boolean {
    if (this.isPlayingAudio) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  /**
   * Selects a track by index
   */
  public selectTrack(index: number) {
    const safeIndex = (index + GUITAR_TRACKS.length) % GUITAR_TRACKS.length;
    this.currentTrackIndex = safeIndex;
    this.noteStep = 0;
    if (this.isPlayingAudio) {
      if (this.playbackTimer) clearTimeout(this.playbackTimer);
      this.scheduleNextNote();
    }
    this.notifyStatus();
  }

  public nextTrack() {
    this.selectTrack(this.currentTrackIndex + 1);
  }

  public prevTrack() {
    this.selectTrack(this.currentTrackIndex - 1);
  }

  /**
   * Adjusts volume (0.0 to 1.0)
   */
  public setVolume(volume: number) {
    this.volumeLevel = Math.max(0, Math.min(1, volume));
    if (this.masterGain && this.ctx && !this.isMuted) {
      this.masterGain.gain.setValueAtTime(this.volumeLevel, this.ctx.currentTime);
    }
  }

  /**
   * Toggles mute
   */
  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volumeLevel, this.ctx.currentTime);
    }
    return this.isMuted;
  }

  public getVolume(): number {
    return this.volumeLevel;
  }

  public isMute(): boolean {
    return this.isMuted;
  }

  public isPlaying(): boolean {
    return this.isPlayingAudio;
  }

  public getCurrentTrack(): GuitarTrack {
    return GUITAR_TRACKS[this.currentTrackIndex];
  }

  public getCurrentTrackIndex(): number {
    return this.currentTrackIndex;
  }

  /**
   * Returns current audio visualizer frequency byte array
   */
  public getVisualizerData(): Uint8Array {
    if (!this.analyser) {
      return new Uint8Array(32);
    }
    const data = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(data);
    return data;
  }

  private scheduleNextNote() {
    if (!this.isPlayingAudio) return;

    const track = GUITAR_TRACKS[this.currentTrackIndex];
    const score = COMPOSITIONS[track.id] || COMPOSITIONS['alfama-fado-menor'];

    if (this.noteStep >= score.length) {
      // Loop piece with small organic pause between cycles
      this.noteStep = 0;
      this.playbackTimer = window.setTimeout(() => {
        this.scheduleNextNote();
      }, 900);
      return;
    }

    const noteEvent = score[this.noteStep];
    const [freq, durationBeats, isTrinado, velocity] = noteEvent;

    // Pluck the note with realistic parameters
    const secondsPerBeat = 60 / track.tempo;
    const durationSeconds = durationBeats * secondsPerBeat;

    this.pluck(freq, durationSeconds * 1.3, velocity || 0.8, isTrinado || false);

    this.noteStep++;

    // Calculate time to next note
    const delayMs = durationSeconds * 1000;
    this.playbackTimer = window.setTimeout(() => {
      this.scheduleNextNote();
    }, delayMs);
  }

  public subscribe(listener: (playing: boolean, trackIndex: number) => void) {
    this.statusListeners.add(listener);
    listener(this.isPlayingAudio, this.currentTrackIndex);
    return () => {
      this.statusListeners.delete(listener);
    };
  }

  private notifyStatus() {
    this.statusListeners.forEach((fn) => fn(this.isPlayingAudio, this.currentTrackIndex));
  }
}

// Singleton global instance for seamless persistence across navigation
export const portugueseGuitar = new PortugueseGuitarEngine();
