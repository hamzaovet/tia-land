import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const artworks = await prisma.drawingArtwork.findMany({
      orderBy: { createdAt: "desc" },
      take: 20,
    });
    return NextResponse.json({ success: true, artworks });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, artistName, imageData, stickers } = body;

    if (!imageData) {
      return NextResponse.json({ success: false, error: "Missing image data" }, { status: 400 });
    }

    const artwork = await prisma.drawingArtwork.create({
      data: {
        title: title || "لوحة سحرية جديدة",
        artistName: artistName || "الأميرة تيا 🎨",
        imageData,
        stickers: stickers || "",
        likesCount: 1,
      },
    });

    return NextResponse.json({ success: true, artwork });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
