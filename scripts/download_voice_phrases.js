const fs = require("fs");
const path = require("path");
const https = require("https");

const outDir = path.join(__dirname, "../public/audio/voices");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const phrases = [
  { id: "welcome_1", text: "Welcome to Tia Land! Let's have magical fun!" },
  { id: "welcome_2", text: "Hello Princess Tia! You are so sweet!" },
  { id: "welcome_3", text: "Yay Tia! Welcome to your magical kingdom!" },
  { id: "fashion_1", text: "Wow Tia! You look like a real glowing princess!" },
  { id: "fashion_2", text: "Tia, your fashion style is gorgeous!" },
  { id: "fashion_3", text: "Superstar Tia! The prettiest dress ever!" },
  { id: "art_1", text: "Tia, you are an amazing artist! Beautiful colors!" },
  { id: "art_2", text: "So creative, Princess Tia! Keep shining!" },
  { id: "art_3", text: "What a masterpiece, Tia! I love your painting!" },
  { id: "memory_1", text: "Good job Tia! You have a super smart memory!" },
  { id: "memory_2", text: "You found it Tia! You are brilliant!" },
  { id: "memory_3", text: "Yay Tia! Three stars for you!" },
  { id: "goodjob_1", text: "Good job Princess Tia!" },
  { id: "goodjob_2", text: "You did it, Tia!" },
  { id: "goodjob_3", text: "Super Tia, high five!" },
  { id: "princess_1", text: "You are the most beautiful princess in the whole world, Tia!" },
  { id: "princess_2", text: "Crown for Princess Tia!" },
  { id: "princess_3", text: "Princess Tia shines like a bright star!" },
  { id: "love_1", text: "Daddy loves you so much, Princess Tia!" },
  { id: "love_2", text: "Tia, you make the whole world smile!" },
  { id: "love_3", text: "We love you Tia! Forever and always!" },
  { id: "card_greeting", text: "Hello! Welcome to Princess Tia's magical world! Let's play and shine together!" },
  { id: "piano_cheer", text: "You are a musical superstar Tia! I love your music!" },
  { id: "secret_club", text: "Welcome to Tia's Secret Club! Daddy loves you so much Princess Tia!" },
  { id: "dad_message", text: "Hello my sweet Princess Tia! You are the smartest and most beautiful girl in the world! Daddy loves you so much!" },
  { id: "fairy_message", text: "Wow Tia! Your fashion style is super sparkling and glamorous! You shine like a real princess!" },
  { id: "art_message", text: "Tia, you are a superstar artist! Every color you touch turns into pure magic!" },
  { id: "dance_cheer", text: "Let's dance and sing with Princess Tia!" },
];

function downloadPhrase(item) {
  return new Promise((resolve, reject) => {
    const url = "https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=" + encodeURIComponent(item.text);
    const dest = path.join(outDir, `${item.id}.mp3`);
    const file = fs.createWriteStream(dest);

    https.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(dest);
        return reject(new Error(`Failed ${item.id}: status ${res.statusCode}`));
      }
      res.pipe(file);
      file.on("finish", () => {
        file.close(() => {
          console.log(`Saved ${item.id}.mp3 (${fs.statSync(dest).size} bytes)`);
          resolve();
        });
      });
    }).on("error", (err) => {
      file.close();
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      reject(err);
    });
  });
}

async function run() {
  console.log("Downloading audio phrases for Tia Land...");
  for (const item of phrases) {
    try {
      await downloadPhrase(item);
      // Small pause to be polite
      await new Promise((r) => setTimeout(r, 200));
    } catch (e) {
      console.error(e.message);
    }
  }
  console.log("All audio phrases successfully downloaded!");
}

run();
