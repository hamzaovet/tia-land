import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const designs = await prisma.fashionDesign.findMany({
      orderBy: { createdAt: "desc" },
      take: 20,
    });
    return NextResponse.json({ success: true, designs });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, dressStyle, hairStyle, crown, wings, accessory, background, previewData } = body;

    const design = await prisma.fashionDesign.create({
      data: {
        title: title || "إطلالة ملكية للأميرة تيا",
        dressStyle: dressStyle || "pink_gown",
        hairStyle: hairStyle || "curls_bow",
        crown: crown || "gold_tiara",
        wings: wings || "none",
        accessory: accessory || "wand",
        background: background || "castle",
        previewData: previewData || null,
      },
    });

    return NextResponse.json({ success: true, design });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
