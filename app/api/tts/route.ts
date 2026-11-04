import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text") || "Hello Princess Tia";

  try {
    const googleTtsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=${encodeURIComponent(text)}`;
    const res = await fetch(googleTtsUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    if (!res.ok) {
      return NextResponse.json({ error: "TTS failed" }, { status: 500 });
    }

    const buffer = await res.arrayBuffer();

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
