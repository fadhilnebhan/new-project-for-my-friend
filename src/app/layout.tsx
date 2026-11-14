import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0B0E14",
};

export const metadata: Metadata = {
  title: "WEVI INDIA — Premier Esports Organisation & Tournament Platform",
  description:
    "Enter the arena. WEVI INDIA is a competitive gaming platform organizing high-stakes esports tournaments across Free Fire, BGMI, Call of Duty, and eFootball with fair play and certified brackets.",
  keywords: [
    "WEVI INDIA",
    "Esports India",
    "Free Fire Tournament",
    "BGMI Tournament",
    "Call of Duty Mobile",
    "eFootball Tournament",
    "Gaming Community India",
    "Esports Registration",
  ],
  authors: [{ name: "WEVI INDIA Esports" }],
  openGraph: {
    title: "WEVI INDIA — Esports Organisation & Tournament Platform",
    description: "Enter the arena. Prove your skills in official WEVI circuits.",
    url: "https://wevi-india.esports",
    siteName: "WEVI INDIA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-wevi-darker text-gray-100 antialiased selection:bg-wevi-purple selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
