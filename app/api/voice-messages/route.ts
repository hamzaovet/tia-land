import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const messages = await prisma.voiceMessage.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, messages });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { fromName, messageEn, messageAr, icon } = await req.json();

    const newMsg = await prisma.voiceMessage.create({
      data: {
        fromName: fromName || "بابا حبيبي 💖",
        messageEn: messageEn || "I love you Princess Tia!",
        messageAr: messageAr || "أنا بحبك أوي يا تيا يا أميرتي!",
        icon: icon || "💖",
      },
    });

    return NextResponse.json({ success: true, message: newMsg });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
