import { AdsterraPopunderGate, AdsterraSocialBarGate, AdsterraStickyRail, AdsterraGlobalFallback } from "@/components/ads";
import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import { JsonLd } from "./components/GuideElements";
import { SITE_URL } from "./content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "My Toll Farm Guide — Beginner Tutorial & Progression",
    template: "%s | My Toll Farm Guide",
  },
  description:
    "A verified beginner guide to My Toll Farm: roll and place cars, understand toll income, choose upgrades, avoid mistakes, and plan Rebirth.",
  applicationName: "My Toll Farm Beginner Guide",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: {
    icon: "/official-game-icon.png",
    shortcut: "/official-game-icon.png",
    apple: "/official-game-icon.png",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "My Toll Farm! Beginner Guide",
    description:
      "Start with the verified gameplay loop, then build a practical progression plan.",
    siteName: "My Toll Farm Guide",
    images: [
      {
        url: "/og.png",
        width: 1672,
        height: 941,
        alt: "My Toll Farm beginner guide with a stylized toll road and cars",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Toll Farm! Beginner Guide",
    description:
      "A fact-checked quick start, core loop, progression plan, mistakes, and FAQ.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AdsterraPopunderGate />
        <AdsterraSocialBarGate />
        <AdsterraStickyRail />
        <AdsterraGlobalFallback />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "My Toll Farm Beginner Guide",
            url: SITE_URL,
            description:
              "An independent, fact-checked guide to the Roblox experience My Toll Farm!",
            inLanguage: "en",
          }}
        />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
