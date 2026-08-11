import type { Metadata, Viewport } from "next";
import "./globals.css";
import Spotlight from "@/components/Spotlight";
import { SITE_URL } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "OnchainSuite · Retention for Web3",
    template: "%s · OnchainSuite",
  },
  description:
    "The behavior-triggered retention platform for Web3. Turn what wallets do on-chain into automations and campaigns. Klaviyo for on-chain behaviour.",
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
    title: "OnchainSuite · retention for Web3, triggered by on-chain behaviour",
    description:
      "Build the rule once, and it fires the moment a wallet acts. The retention layer Web3 never had.",
    url: SITE_URL,
    siteName: "OnchainSuite",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "OnchainSuite · Retention for Web3",
    description:
      "Build the rule once, and it fires the moment a wallet acts. The retention layer Web3 never had.",
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
  themeColor: "#FAFAF8",
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
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
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
                    "The behavior-triggered retention platform for Web3.",
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
                    "Turn what wallets do on-chain into automations and campaigns. The retention layer Web3 never had.",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                    description: "Usage-based pricing with founding rates for early teams.",
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
