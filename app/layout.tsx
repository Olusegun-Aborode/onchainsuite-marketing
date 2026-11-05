import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./ns.css";
import Spotlight from "@/components/Spotlight";
import { SITE_URL } from "@/lib/data";

/* Head tags follow the "Dummy Site SEO Fixes" doc (Fix 1, 5 November 2026). Other pages title themselves
   "[Page name] · OnchainSuite" through the template, under 60 characters. No keywords tag: Google ignores it. */
const TITLE = "OnchainSuite: retention and CRM for blockchain companies";
const DESCRIPTION =
  "OnchainSuite is retention software for blockchain companies. It reads what your customers do in your app and on the chain, puts every wallet and email on one record, and sends email and in-app messages when someone deposits, withdraws or goes quiet. Works on Ethereum, Base, Arbitrum, Optimism, Polygon and Solana.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · OnchainSuite",
  },
  description: DESCRIPTION,
  applicationName: "OnchainSuite",
  authors: [{ name: "OnchainSuite" }],
  creator: "OnchainSuite",
  publisher: "OnchainSuite",
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description:
      "Win back the customers who stopped using your protocol. OnchainSuite reads wallet activity and sends email and in-app messages when someone goes quiet.",
    url: SITE_URL,
    siteName: "OnchainSuite",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "OnchainSuite: retention for blockchain companies",
    description:
      "When a wallet goes quiet, your win-back message sends. Email and in-app, triggered by what happens on the chain.",
    creator: "@0nchainSuite",
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
                    description: "Send plan from $6 a month plus $3.95 per 1,000 subscribers; Suite plan from $39 a month, priced by contacts.",
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
