// Tia Land Magical Sound Synthesizer & Voice Engine (Web Audio API & Web Speech)

class SoundEngine {
  private ctx: AudioContext | null = null;
  private soundEnabled: boolean = true;

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

  // Web Speech API: Sweet English Voice calling Princess Tia!
  public speak(text: string) {
    if (!this.soundEnabled || typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }

    try {
      window.speechSynthesis.cancel(); // stop current utterance
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.pitch = 1.3; // friendly, cheerful, child-like
      utterance.rate = 0.92; // clear and gentle

      // Select female / pleasant voice if available
      const voices = window.speechSynthesis.getVoices();
      const englishVoice =
        voices.find((v) => v.lang.startsWith("en") && (v.name.includes("Female") || v.name.includes("Samantha") || v.name.includes("Zira") || v.name.includes("Victoria") || v.name.includes("Google US English"))) ||
        voices.find((v) => v.lang.startsWith("en"));

      if (englishVoice) {
        utterance.voice = englishVoice;
      }

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.error("Speech error", e);
    }
  }

  // Pre-packaged phrases for Tia
  public cheerTia(phraseType?: "welcome" | "fashion" | "art" | "memory" | "goodjob" | "princess" | "love") {
    const phrases = {
      welcome: [
        "Welcome to Tia Land! Let's have magical fun!",
        "Hello Princess Tia! You are so sweet!",
        "Yay Tia! Welcome to your magical kingdom!",
      ],
      fashion: [
        "Wow Tia! You look like a real glowing princess!",
        "Tia, your fashion style is gorgeous!",
        "Superstar Tia! The prettiest dress ever!",
      ],
      art: [
        "Tia, you are an amazing artist! Beautiful colors!",
        "So creative, Princess Tia! Keep shining!",
        "What a masterpiece, Tia! I love your painting!",
      ],
      memory: [
        "Good job Tia! You have a super smart memory!",
        "You found it Tia! You are brilliant!",
        "Yay Tia! Three stars for you!",
      ],
      goodjob: [
        "Good job Princess Tia!",
        "You did it, Tia!",
        "Super Tia, high five!",
      ],
      princess: [
        "You are the most beautiful princess in the whole world, Tia!",
        "Crown for Princess Tia!",
        "Princess Tia shines like a bright star!",
      ],
      love: [
        "Daddy loves you so much, Princess Tia!",
        "Tia, you make the whole world smile!",
        "We love you Tia! Forever and always!",
      ],
    };

    const list = phrases[phraseType || "goodjob"];
    const text = list[Math.floor(Math.random() * list.length)];
    this.speak(text);
    return text;
  }
}

export const sounds = new SoundEngine();
