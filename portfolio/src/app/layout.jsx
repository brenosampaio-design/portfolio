// Link the design system FOR REAL — this single file imports the brand
// tokens (color, type, spacing, motion), the font @imports, and the base
// reset. Nothing below should reintroduce raw values.
import "../../design-system/styles.css";
import "./globals.css";

import Script from "next/script";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { ToTop } from "@/components/site/ToTop";
import { Preloader } from "@/components/site/Preloader";
import { Providers } from "@/context/AppContext";
import { profile } from "@/lib/content";

const SHARE_DESCRIPTION =
  "Product designer with a technical edge. Service operations, systems thinking, design systems, and an implementation sensibility.";

export const metadata = {
  metadataBase: new URL("https://brenosampaio.com"),
  title: {
    default: "Breno Sampaio — Product Designer with a technical edge",
    template: "%s — Breno Sampaio",
  },
  description: SHARE_DESCRIPTION,
  openGraph: {
    title: "Breno Sampaio — Product Designer with a technical edge",
    description: SHARE_DESCRIPTION,
    url: "https://brenosampaio.com",
    siteName: "Breno Sampaio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Breno Sampaio — Product Designer with a technical edge",
    description: SHARE_DESCRIPTION,
  },
};

export const viewport = {
  themeColor: "#FAFAFA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Reads localStorage('theme') or prefers-color-scheme before first paint
            so the correct data-theme attribute is set with no visible flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var p=window.matchMedia('(prefers-color-scheme:dark)').matches;document.documentElement.setAttribute('data-theme',s||(p?'dark':'light'));}catch(e){}})();`,
          }}
        />
        {/*
          Brand webfonts. The design system declares these via an @import in
          design-system/tokens/fonts.css (the canonical source). The bundler
          strips nested remote @imports from the compiled CSS, so we mirror the
          EXACT same Google Fonts request here as a <link> — same families and
          weights — so DM Sans + Cormorant Garamond actually load. display=swap
          keeps it non-blocking.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"
        />
      </head>
      <body>
        {/* Structured data — lets search engines understand who this is. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: profile.name,
              jobTitle: "Product Designer",
              description: SHARE_DESCRIPTION,
              url: "https://brenosampaio.com",
              email: `mailto:${profile.email}`,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Valencia",
                addressCountry: "ES",
              },
              knowsLanguage: profile.languages.map((l) => l.name),
              sameAs: ["https://www.linkedin.com/in/brenosampaio"],
            }),
          }}
        />
        {/* Enable JS-gated reveals before first paint. */}
        <Script id="js-flag" strategy="beforeInteractive">
          {`document.documentElement.classList.add('js')`}
        </Script>
        <Providers>
          <Preloader />
          <SmoothScroll />
          <ScrollProgress />
          <a href="#main" className="skip-link">Skip to content</a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <ToTop />
        </Providers>
      </body>
    </html>
  );
}
