import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const badges = await prisma.secretClubBadge.findMany({
      orderBy: { id: "asc" },
    });
    return NextResponse.json({ success: true, badges });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { badgeCode } = await req.json();
    if (!badgeCode) {
      return NextResponse.json({ success: false, error: "Missing badge code" }, { status: 400 });
    }
    const badge = await prisma.secretClubBadge.update({
      where: { badgeCode },
      data: { isUnlocked: true, unlockedAt: new Date() },
    });
    return NextResponse.json({ success: true, badge });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
