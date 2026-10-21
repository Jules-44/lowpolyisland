/**
 * AudioEngine — Procedural Atmospheric Drum & Bass synthesizer and ambient soundscape player.
 * Built with Web Audio API. Provides authentic 164 BPM rolling breakbeats, lush ambient pads,
 * deep sub bass, and coastal ocean wash.
 */
export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.bpm = 164;
    this.masterGain = null;
    this.visualizerData = new Uint8Array(16);
    this.analyser = null;

    // Track presets
    this.tracks = [
      {
        title: "ATLANTIC BREEZE (LIQUID MIX)",
        artist: "LOW-POLY SOUNDSYSTEM",
        bpm: 164,
        key: "F#m9",
        chords: [
          [277.18, 369.99, 440.00, 554.37], // F#m9 (C#4, F#4, A4, C#5)
          [293.66, 369.99, 440.00, 587.33], // Dmaj7 (D4, F#4, A4, D5)
          [246.94, 329.63, 392.00, 493.88], // Bm7 (B3, E4, G4, B4)
          [220.00, 329.63, 440.00, 554.37], // Aadd9 (A3, E4, A4, C#5)
        ]
      },
      {
        title: "TWILIGHT OVER THE REEF",
        artist: "ORBITAL RUNNER",
        bpm: 162,
        key: "Ebm7",
        chords: [
          [311.13, 369.99, 466.16, 554.37], // Ebm9
          [261.63, 329.63, 392.00, 523.25], // Cbmaj7
          [233.08, 349.23, 440.00, 523.25], // Bbm7
          [293.66, 369.99, 440.00, 587.33], // Abm7
        ]
      },
      {
        title: "DREAMCAST MEMORY (1998)",
        artist: "VIRTUAL HORIZON",
        bpm: 166,
        key: "C#m7",
        chords: [
          [277.18, 329.63, 415.30, 493.88], // C#m7
          [220.00, 277.18, 329.63, 440.00], // Amaj7
          [246.94, 311.13, 369.99, 493.88], // Badd9
          [329.63, 415.30, 493.88, 659.25], // Emaj9
        ]
      },
      {
        title: "CYBER ROOFTOPS (TECHSTEP VIP)",
        artist: "NEO TOKYO UNIT",
        bpm: 166,
        key: "Dm9",
        chords: [
          [293.66, 349.23, 440.00, 523.25], // Dm7
          [261.63, 329.63, 392.00, 493.88], // Cmaj7
          [246.94, 311.13, 369.99, 440.00], // Bdim
          [233.08, 293.66, 349.23, 466.16], // Bbmaj7
        ]
      },
      {
        title: "NEON OVERPASS (LIQUID FUNK)",
        artist: "CIRCUIT RUNNER",
        bpm: 168,
        key: "Gm7",
        chords: [
          [392.00, 466.16, 587.33, 739.99], // Gm9
          [349.23, 440.00, 523.25, 659.25], // Fmaj7
          [311.13, 392.00, 466.16, 587.33], // Ebmaj7
          [293.66, 369.99, 440.00, 554.37], // D7sus4
        ]
      }
    ];

    this.currentTrackIndex = 0;
    this.currentChordIndex = 0;
    this.step = 0;
    this.timerId = null;
    this.oceanNode = null;
  }

  setTrack(index) {
    if (index >= 0 && index < this.tracks.length) {
      this.currentTrackIndex = index;
      this.bpm = this.tracks[index].bpm;
      this.currentChordIndex = 0;
      this.step = 0;
      return this.tracks[this.currentTrackIndex];
    }
    return this.getCurrentTrack();
  }

  _initContext() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AudioContext();

    // Master bus
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.75, this.ctx.currentTime);

    // Analyser node for walkman visualizer
    this.analyser = this.ctx.createAnalyser();
    this.analyser.fftSize = 32;

    this.masterGain.connect(this.analyser);
    this.analyser.connect(this.ctx.destination);

    // Ambient ocean waves sound generator
    this._startOceanWash();
  }

  getCurrentTrack() {
    return this.tracks[this.currentTrackIndex];
  }

  setVolume(vol) {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(Math.max(0, Math.min(1, vol)), this.ctx.currentTime);
    }
  }

  togglePlay() {
    this._initContext();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      this.stop();
    } else {
      this.play();
    }
    return this.isPlaying;
  }

  play() {
    this._initContext();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isPlaying = true;
    this.step = 0;
    this.currentChordIndex = 0;

    const interval = (60 / this.bpm) / 4 * 1000; // 16th note in ms
    this._playPadChord();
    this.timerId = setInterval(() => {
      this._onTick();
    }, interval);
  }

  stop() {
    this.isPlaying = false;
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  nextTrack() {
    this.currentTrackIndex = (this.currentTrackIndex + 1) % this.tracks.length;
    this.currentChordIndex = 0;
    if (this.isPlaying) {
      this.stop();
      this.play();
    }
    return this.getCurrentTrack();
  }

  prevTrack() {
    this.currentTrackIndex = (this.currentTrackIndex - 1 + this.tracks.length) % this.tracks.length;
    this.currentChordIndex = 0;
    if (this.isPlaying) {
      this.stop();
      this.play();
    }
    return this.getCurrentTrack();
  }

  _onTick() {
    if (!this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;
    const s = this.step % 16;

    // Atmospheric Breakbeat pattern (classic rolling jungle/dnb syncopation)
    // Kick: steps 0, 10
    if (s === 0 || s === 10) {
      this._triggerKick(now, s === 0 ? 1.0 : 0.7);
    }

    // Snare / Rim: steps 4, 12, plus syncopated ghost hit at step 7 or 15
    if (s === 4 || s === 12) {
      this._triggerSnare(now, 0.85);
    } else if (s === 7 || s === 15) {
      this._triggerSnare(now, 0.4, true); // Ghost snare
    }

    // Rolling Hi-hats: 16th notes with groove velocity
    let hatVel = 0.22;
    if (s % 2 === 0) hatVel = 0.45;
    if (s % 4 === 2) hatVel = 0.6;
    this._triggerHat(now, hatVel);

    // Deep sub / Reese bass trigger
    if (s === 0 || s === 6 || s === 10) {
      const track = this.tracks[this.currentTrackIndex];
      const baseFreq = track.chords[this.currentChordIndex][0] / 4; // 2 octaves below
      this._triggerSubBass(now, baseFreq);
    }

    // Step progression
    this.step++;
    // Advance chord every 32 steps (2 bars)
    if (this.step % 32 === 0) {
      const track = this.tracks[this.currentTrackIndex];
      this.currentChordIndex = (this.currentChordIndex + 1) % track.chords.length;
      this._playPadChord();
    }
  }

  _triggerKick(time, vel) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';

    // Pitch envelope drop
    osc.frequency.setValueAtTime(140, time);
    osc.frequency.exponentialRampToValueAtTime(45, time + 0.12);

    gain.gain.setValueAtTime(0.7 * vel, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.25);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.26);
  }

  _triggerSnare(time, vel, isGhost = false) {
    // Noise burst for snare snap
    const bufferSize = this.ctx.sampleRate * (isGhost ? 0.08 : 0.16);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.35));
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(isGhost ? 1400 : 900, time);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime((isGhost ? 0.2 : 0.5) * vel, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + (isGhost ? 0.09 : 0.18));

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(time);
  }

  _triggerHat(time, vel) {
    const osc = this.ctx.createOscillator();
    osc.type = 'highpass';
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 7500;

    const bufferSize = this.ctx.sampleRate * 0.04;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1);
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.2 * vel, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.04);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(time);
  }

  _triggerSubBass(time, freq) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0.45, time);
    gain.gain.linearRampToValueAtTime(0.35, time + 0.2);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.5);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.52);
  }

  _playPadChord() {
    if (!this.ctx || !this.isPlaying) return;
    const track = this.tracks[this.currentTrackIndex];
    const chord = track.chords[this.currentChordIndex];
    const duration = (60 / this.bpm) * 8; // 2 bars duration

    const now = this.ctx.currentTime;

    // Filtered saw/sine pad with slow chorus detune
    chord.forEach((freq, idx) => {
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const padGain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc1.type = 'sawtooth';
      osc2.type = 'sawtooth';
      osc1.frequency.setValueAtTime(freq, now);
      osc2.frequency.setValueAtTime(freq * 1.004, now); // slight chorus detuning

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800 + idx * 250, now);
      filter.frequency.exponentialRampToValueAtTime(1600, now + duration * 0.5);
      filter.frequency.exponentialRampToValueAtTime(700, now + duration);

      // Smooth envelope attack and release
      padGain.gain.setValueAtTime(0.001, now);
      padGain.gain.linearRampToValueAtTime(0.09, now + 1.2);
      padGain.gain.setValueAtTime(0.09, now + duration - 0.8);
      padGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(padGain);
      padGain.connect(this.masterGain);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + duration + 0.1);
      osc2.stop(now + duration + 0.1);
    });
  }

  _startOceanWash() {
    if (!this.ctx) return;
    // Continuous soft ocean waves in background
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(350, this.ctx.currentTime);

    // LFO for wave surges
    const lfo = this.ctx.createOscillator();
    lfo.frequency.setValueAtTime(0.12, this.ctx.currentTime); // ~8 second wave cycle
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(220, this.ctx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    const oceanGain = this.ctx.createGain();
    oceanGain.gain.setValueAtTime(0.18, this.ctx.currentTime);

    whiteNoise.connect(filter);
    filter.connect(oceanGain);
    oceanGain.connect(this.masterGain);

    whiteNoise.start();
    lfo.start();
  }

  getVisualizerData() {
    if (this.analyser) {
      this.analyser.getByteFrequencyData(this.visualizerData);
    }
    return this.visualizerData;
  }
}
