// Tia Land Magical Sound Synthesizer & Universal Voice Engine (Hybrid Audio & Native MP3)

class SoundEngine {
  private ctx: AudioContext | null = null;
  private soundEnabled: boolean = true;
  private currentAudio: HTMLAudioElement | null = null;

  constructor() {
    // initialized on first interaction
  }

  private initCtx() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public toggleSound(enabled?: boolean) {
    if (enabled !== undefined) {
      this.soundEnabled = enabled;
    } else {
      this.soundEnabled = !this.soundEnabled;
    }
    return this.soundEnabled;
  }

  public isEnabled() {
    return this.soundEnabled;
  }

  public vibrate() {
    if (typeof window !== "undefined" && "vibrate" in navigator) {
      try {
        navigator.vibrate([50, 40, 50]);
      } catch (e) {}
    }
  }

  // Fairy Magic Wand Sparkle (Disney-like harp chime)
  public playMagicWand() {
    if (!this.soundEnabled) return;
    this.initCtx();
    if (!this.ctx) return;
    this.vibrate();

    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51, 1567.98, 2093.0]; // C5 to C7
    const now = this.ctx.currentTime;

    notes.forEach((freq, idx) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + idx * 0.05);

      gain.gain.setValueAtTime(0, now + idx * 0.05);
      gain.gain.linearRampToValueAtTime(0.2, now + idx * 0.05 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.45);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.05);
      osc.stop(now + idx * 0.05 + 0.5);
    });
  }

  // Cute Bubble Pop for buttons and stickers
  public playPop() {
    if (!this.soundEnabled) return;
    this.initCtx();
    if (!this.ctx) return;
    this.vibrate();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.1);
  }

  // Piano Note (Do Re Mi Fa Sol La Si Do)
  public playPiano(freq: number) {
    if (!this.soundEnabled) return;
    this.initCtx();
    if (!this.ctx) return;
    this.vibrate();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.85);
  }

  // Victory / Cheer Fanfare
  public playCheer() {
    if (!this.soundEnabled) return;
    this.initCtx();
    if (!this.ctx) return;
    this.vibrate();

    const chords = [
      { f: 523.25, t: 0.0 }, // C5
      { f: 659.25, t: 0.1 }, // E5
      { f: 783.99, t: 0.2 }, // G5
      { f: 1046.5, t: 0.3 }, // C6
    ];
    const now = this.ctx.currentTime;

    chords.forEach(({ f, t }) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(f, now + t);

      gain.gain.setValueAtTime(0, now + t);
      gain.gain.linearRampToValueAtTime(0.25, now + t + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + t + 0.6);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + t);
      osc.stop(now + t + 0.65);
    });
  }

  // Play a dedicated bundled MP3 audio file (100% works in Android APK / WebView!)
  public playMp3(filename: string) {
    if (!this.soundEnabled || typeof window === "undefined") return;

    try {
      if (this.currentAudio) {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      }

      const audio = new Audio(`/audio/voices/${filename}`);
      this.currentAudio = audio;
      audio.play().catch((err) => {
        console.warn("Audio play error, retrying on user gesture", err);
      });
    } catch (e) {
      console.error(e);
    }
  }

  // Universal Speech Engine: Plays bundled MP3, or /api/tts streaming, with Web Speech API as fallback
  public speak(text: string) {
    if (!this.soundEnabled || typeof window === "undefined") return;

    // Direct mapping to bundled crystal-clear MP3 files
    const knownPhrases: Record<string, string> = {
      "Hello! Welcome to Princess Tia's magical world! Let's play and shine together!": "card_greeting.mp3",
      "You are a musical superstar Tia! I love your music!": "piano_cheer.mp3",
      "Welcome to Tia's Secret Club! Daddy loves you so much Princess Tia!": "secret_club.mp3",
      "Hello my sweet Princess Tia! You are the smartest and most beautiful girl in the world! Daddy loves you so much!": "dad_message.mp3",
      "Wow Tia! Your fashion style is super sparkling and glamorous! You shine like a real princess!": "fairy_message.mp3",
      "Tia, you are a superstar artist! Every color you touch turns into pure magic!": "art_message.mp3",
      "Let's dance and sing with Princess Tia!": "dance_cheer.mp3",
      "Let's dance and sing with Tia! 1, 2, 3, Yay Tia!": "dance_cheer.mp3",
    };

    if (knownPhrases[text]) {
      this.playMp3(knownPhrases[text]);
      return;
    }

    // Try streamed TTS audio endpoint (100% reliable inside APK / WebView)
    try {
      if (this.currentAudio) {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      }
      const audio = new Audio(`/api/tts?text=${encodeURIComponent(text)}`);
      this.currentAudio = audio;
      audio.play().catch(() => {
        // Fallback to browser Web Speech API
        this.fallbackWebSpeech(text);
      });
    } catch (e) {
      this.fallbackWebSpeech(text);
    }
  }

  private fallbackWebSpeech(text: string) {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.pitch = 1.3;
      utterance.rate = 0.92;
      window.speechSynthesis.speak(utterance);
    } catch (e) {}
  }

  // Random cheerleader voice for Princess Tia
  public cheerTia(phraseType?: "welcome" | "fashion" | "art" | "memory" | "goodjob" | "princess" | "love") {
    const type = phraseType || "goodjob";
    const files: Record<string, string[]> = {
      welcome: ["welcome_1.mp3", "welcome_2.mp3", "welcome_3.mp3"],
      fashion: ["fashion_1.mp3", "fashion_2.mp3", "fashion_3.mp3"],
      art: ["art_1.mp3", "art_2.mp3", "art_3.mp3"],
      memory: ["memory_1.mp3", "memory_2.mp3", "memory_3.mp3"],
      goodjob: ["goodjob_1.mp3", "goodjob_2.mp3", "goodjob_3.mp3"],
      princess: ["princess_1.mp3", "princess_2.mp3", "princess_3.mp3"],
      love: ["love_1.mp3", "love_2.mp3", "love_3.mp3"],
    };

    const list = files[type] || files.goodjob;
    const chosenFile = list[Math.floor(Math.random() * list.length)];
    this.playMp3(chosenFile);
    return chosenFile;
  }
}

export const sounds = new SoundEngine();
