const { Pool } = require("pg");
const { PrismaPg } = require("@prisma/adapter-pg");
const { PrismaClient } = require("../lib/generated/client");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding Tia Land database...");

  // Upsert settings
  await prisma.settings.upsert({
    where: { id: "default" },
    update: {
      princessName: "Tia",
      princessAge: 6,
      favoriteColor: "#ff4081",
      pinCode: "tia",
      welcomeVoiceEn: "Welcome to Tia Land! You are the sweetest princess in the whole world, Tia!",
      welcomeVoiceAr: "أهلاً بكِ في أرض تيا السحرية! أنتِ أحلى وأجمل أميرة في الدنيا يا تيا!",
      soundEnabled: true,
    },
    create: {
      id: "default",
      princessName: "Tia",
      princessAge: 6,
      favoriteColor: "#ff4081",
      pinCode: "tia",
      welcomeVoiceEn: "Welcome to Tia Land! You are the sweetest princess in the whole world, Tia!",
      welcomeVoiceAr: "أهلاً بكِ في أرض تيا السحرية! أنتِ أحلى وأجمل أميرة في الدنيا يا تيا!",
      soundEnabled: true,
    },
  });

  // Seed Badges
  const badges = [
    {
      badgeCode: "STAR_ARTIST",
      title: "رسامة المملكة الأولى 🎨",
      description: "رسمتِ ولونتِ أروع لوحات سحرية في أرض تيا!",
      icon: "🎨",
      isUnlocked: true,
      unlockedAt: new Date(),
    },
    {
      badgeCode: "FASHION_QUEEN",
      title: "ملكة الموضة والأناقة 👗",
      description: "صممتِ أرقى إطلالة فستان وتاج ملكي للأميرات!",
      icon: "👑",
      isUnlocked: true,
      unlockedAt: new Date(),
    },
    {
      badgeCode: "MUSIC_MAESTRO",
      title: "عازفة النجوم السحرية 🎹",
      description: "عزفتِ أحلى ألحان على بيانو تيا الوردي!",
      icon: "🎵",
      isUnlocked: true,
      unlockedAt: new Date(),
    },
    {
      badgeCode: "MEMORY_CHAMP",
      title: "أميرة الذاكرة الذكية 🧠",
      description: "تفوقتِ وجمعتِ كل الكروت المتطابقة بسرعة فائقة!",
      icon: "⭐",
      isUnlocked: true,
      unlockedAt: new Date(),
    },
    {
      badgeCode: "SUPER_TIA",
      title: "تيا الخارقة 6 سنين 💖",
      description: "أشطر وأحلى بنوتة في العالم كله!",
      icon: "🦄",
      isUnlocked: true,
      unlockedAt: new Date(),
    },
    {
      badgeCode: "DADDY_PRINCESS",
      title: "أميرة بابا وحبيبة قلبه 👨‍👧",
      description: "فتحتِ النادي السري بكلمة السر السحرية tia!",
      icon: "🎀",
      isUnlocked: true,
      unlockedAt: new Date(),
    },
  ];

  for (const b of badges) {
    await prisma.secretClubBadge.upsert({
      where: { badgeCode: b.badgeCode },
      update: b,
      create: b,
    });
  }

  // Seed Voice Messages
  const voiceMessages = [
    {
      fromName: "بابا حبيبي 👨‍👧",
      messageEn: "Hello my sweet Princess Tia! You are the smartest and most beautiful girl in the world! Daddy loves you so much!",
      messageAr: "أهلاً يا أميرتي الحلوة تيا! أنتِ أذكى وأجمل بنوتة في العالم، وبابا بيحبك فوق ما تتخيلي!",
      icon: "💖",
    },
    {
      fromName: "الجنية الوردية 🧚‍♀️",
      messageEn: "Wow Tia! Your fashion style is super sparkling and glamorous! You shine like a real princess!",
      messageAr: "واو يا تيا! استايل لبسك بيلمع وفخم جداً، طالعة زي أميرات ديزني الحقيقيين!",
      icon: "✨",
    },
    {
      fromName: "مرسم النجوم 🎨",
      messageEn: "Tia, you are a superstar artist! Every color you touch turns into pure magic!",
      messageAr: "يا تيا، أنتِ فنانة ورسامة مبدعة! كل لون بتحطيه بيتحول لسحر حقيقي!",
      icon: "🌈",
    },
    {
      fromName: "نادي المرح والرقص 🎶",
      messageEn: "Let's dance and sing with Tia! 1, 2, 3, Yay Tia!",
      messageAr: "يلا نرقص ونغني مع أحلى تيا! 1، 2، 3، هيييه يا تيا!",
      icon: "🎉",
    },
  ];

  // Clear existing voice messages to avoid duplicates
  await prisma.voiceMessage.deleteMany({});
  for (const vm of voiceMessages) {
    await prisma.voiceMessage.create({ data: vm });
  }

  // Seed initial Scores
  await prisma.gameScore.deleteMany({});
  await prisma.gameScore.createMany({
    data: [
      { playerName: "الأميرة تيا", gameType: "MEMORY", score: 350, stars: 3, level: 3 },
      { playerName: "الأميرة تيا", gameType: "FASHION", score: 500, stars: 3, level: 2 },
      { playerName: "الأميرة تيا", gameType: "PIANO", score: 420, stars: 3, level: 1 },
      { playerName: "الأميرة تيا", gameType: "COLORING", score: 600, stars: 3, level: 1 },
    ],
  });

  console.log("Seeding finished successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
