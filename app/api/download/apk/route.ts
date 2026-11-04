import { NextResponse, NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  // Direct download link from official GitHub Release or local file
  const releaseUrl = "https://github.com/hamzaovet/tia-land/releases/download/v1.0.0/tialand.apk";
  const downloadUrl = process.env.APK_DOWNLOAD_URL || releaseUrl;

  return NextResponse.redirect(downloadUrl, {
    status: 302,
    headers: {
      "Cache-Control": "no-store, max-age=0",
      "Content-Disposition": 'attachment; filename="tialand.apk"',
    },
  });
}
