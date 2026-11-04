import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const scores = await prisma.gameScore.findMany({
      orderBy: { createdAt: "desc" },
      take: 20,
    });
    return NextResponse.json({ success: true, scores });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { playerName, gameType, score, stars, level } = await req.json();

    const newScore = await prisma.gameScore.create({
      data: {
        playerName: playerName || "الأميرة تيا 👑",
        gameType: gameType || "GENERAL",
        score: Number(score) || 100,
        stars: Number(stars) || 3,
        level: Number(level) || 1,
      },
    });

    return NextResponse.json({ success: true, score: newScore });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
