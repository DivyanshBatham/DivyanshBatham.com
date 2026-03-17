import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const roboto = Roboto({
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://divyanshbatham.com"),
  title: {
    default: "Divyansh Batham",
    template: "%s",
  },
  description: "Hi I'm Divyansh Batham",
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Divyansh Batham",
    description: "Hi I'm Divyansh Batham",
    url: "/",
    siteName: "Divyansh Batham",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@DivyanshBatham",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K3MWW56C1F"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K3MWW56C1F');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}

