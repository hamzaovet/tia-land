import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#ff4081",
};

export const metadata: Metadata = {
  title: "أرض تيا السحرية | Tia Land 💖 Princess World",
  description: "عالم الألعاب السحرية، الرسم، الموضة، والموسيقى للأميرة تيا (6 سنوات)",
  icons: {
    icon: "/tia.jpg",
    apple: "/tia.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen flex flex-col justify-between selection:bg-pink-300 selection:text-pink-900">
        {children}
      </body>
    </html>
  );
}
