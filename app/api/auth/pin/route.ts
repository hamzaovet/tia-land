import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { pin } = await req.json();
    const cleanPin = (pin || "").toString().trim().toLowerCase();

    // Default pin is "tia", also accept "2026" or "1234" as fallback
    if (cleanPin === "tia" || cleanPin === "2026") {
      return NextResponse.json({
        success: true,
        message: "Welcome to Tia's Secret Club! 👑",
        role: "princess",
      });
    }

    return NextResponse.json(
      { success: false, message: "رمز الدخول غير صحيح! جربي حروف اسمك: tia" },
      { status: 401 }
    );
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
