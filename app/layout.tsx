import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./ns.css";
import Spotlight from "@/components/Spotlight";
import { SITE_URL } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "OnchainSuite · Every wallet is a customer record",
    template: "%s · OnchainSuite",
  },
  description:
    "OnchainSuite joins what your customers do in your app with what their wallets do on-chain, so blockchain companies know who needs a message and can send it by email or in-app.",
  applicationName: "OnchainSuite",
  keywords: [
    "Web3 retention",
    "on-chain automation",
    "wallet analytics",
    "crypto CRM",
    "blockchain marketing",
    "on-chain triggers",
    "Web3 email",
    "protocol growth",
  ],
  authors: [{ name: "OnchainSuite" }],
  creator: "OnchainSuite",
  publisher: "OnchainSuite",
  alternates: { canonical: "/" },
  openGraph: {
    title: "OnchainSuite · Every wallet is a customer record",
    description:
      "OnchainSuite joins what your customers do in your app with what their wallets do on-chain, so your growth team knows who needs a message.",
    url: SITE_URL,
    siteName: "OnchainSuite",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "OnchainSuite · Every wallet is a customer record",
    description:
      "OnchainSuite joins what your customers do in your app with what their wallets do on-chain, so your growth team knows who needs a message.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400..700&family=Instrument+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Geist+Mono:wght@400;500&family=Newsreader:opsz,wght@6..72,400;6..72,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${SITE_URL}/#organization`,
                  name: "OnchainSuite",
                  url: SITE_URL,
                  logo: `${SITE_URL}/icon.svg`,
                  description:
                    "The lifecycle and retention platform for blockchain companies.",
                },
                {
                  "@type": "WebSite",
                  "@id": `${SITE_URL}/#website`,
                  url: SITE_URL,
                  name: "OnchainSuite",
                  publisher: { "@id": `${SITE_URL}/#organization` },
                },
                {
                  "@type": "SoftwareApplication",
                  name: "OnchainSuite",
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web",
                  url: SITE_URL,
                  description:
                    "Lifecycle and retention marketing that reads both what customers do in your app and what their wallets do on-chain.",
                  offers: {
                    "@type": "Offer",
                    price: "6",
                    priceCurrency: "USD",
                    description: "Send from $6 a month plus $3.95 per 1,000 subscribers; Suite from $39 a month (Launch) to $1,622 a month (Pro).",
                  },
                },
              ],
            }),
          }}
        />
        {children}
        <Spotlight />
      </body>
    </html>
  );
}
