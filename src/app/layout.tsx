import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090a0f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://desahogo-pro.vercel.app"),
  title: {
    default: "Desahogo Pro — Ayuda Emocional y Escucha Radical Gratuita en Colombia | Espacio Anónimo",
    template: "%s | Desahogo Pro Colombia",
  },
  description:
    "¿Te sientes solo, triste o abrumado y no tienes dinero para terapia psicológica privada? En Desahogo Pro te brindamos 30 minutos de escucha radical, anónima y 100% gratuita en Colombia. Sin juicios, sin sermones y con total privacidad.",
  applicationName: "Desahogo Pro",
  authors: [{ name: "Desahogo Pro Colombia" }],
  generator: "Next.js",
  keywords: [
    // Trends de búsqueda en Colombia
    "ayuda psicologica gratis colombia",
    "apoyo emocional gratuito colombia",
    "con quien hablar si me siento solo",
    "desahogo emocional anonimo",
    "espacio para hablar gratis",
    "psicologia gratis bogota medellin cali",
    "primeros auxilios psicologicos colombia",
    "linea 106 salud mental",
    "escuchaderos colombia",
    "escucha activa y orientacion humana",
    "ansiedad depresion con quien hablar gratis",
    "ruido mental y estres",
    "servicio voluntario de escucha",
    "atencion en crisis emocional colombia",
  ],
  alternates: {
    canonical: "https://desahogo-pro.vercel.app",
    languages: {
      "es-CO": "https://desahogo-pro.vercel.app",
      "es": "https://desahogo-pro.vercel.app",
    },
  },
  openGraph: {
    title: "Desahogo Pro — El fin del ruido mental | Escucha Radical Gratuita y Anónima",
    description:
      "30 minutos de escucha activa y humana para cuando no puedes pagar terapia psicológica privada y necesitas soltar lo que llevas dentro sin ser juzgado.",
    url: "https://desahogo-pro.vercel.app",
    siteName: "Desahogo Pro",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: "Desahogo Pro - Espacio gratuito de escucha radical y apoyo emocional en Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desahogo Pro — Ayuda Emocional y Escucha Gratuita en Colombia",
    description:
      "30 minutos de escucha radical y confidencial. Sin costo, sin sermones y sin juicio.",
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&h=630&q=85",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "CO",
    "geo.placename": "Colombia",
    "language": "Spanish",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://desahogo-pro.vercel.app/#website",
        "url": "https://desahogo-pro.vercel.app",
        "name": "Desahogo Pro Colombia",
        "description": "Espacio voluntario gratuito de escucha radical y acompañamiento emocional anónimo.",
        "inLanguage": "es-CO",
      },
      {
        "@type": "Organization",
        "@id": "https://desahogo-pro.vercel.app/#organization",
        "name": "Desahogo Pro",
        "url": "https://desahogo-pro.vercel.app",
        "logo": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80",
        "areaServed": {
          "@type": "Country",
          "name": "Colombia",
        },
        "sameAs": [
          "https://calendar.app.google/QUHZjk8fuGqnutdF9"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://desahogo-pro.vercel.app/#service",
        "name": "30 Minutos de Escucha Radical Gratuita",
        "serviceType": "Apoyo Emocional y Escucha Activa",
        "provider": {
          "@id": "https://desahogo-pro.vercel.app/#organization"
        },
        "areaServed": "Colombia",
        "isAccessibleForFree": true,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "COP",
          "availability": "https://schema.org/InStock",
          "url": "https://calendar.app.google/QUHZjk8fuGqnutdF9"
        },
        "description": "Sesión individual de 30 minutos de escucha atenta, empática y confidencial sin costo para desahogo de ruido mental, tristeza, soledad o estrés."
      }
    ]
  };

  return (
    <html lang="es-CO" className={`${inter.variable} ${newsreader.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#090a0f] text-[#f4f4f7] selection:bg-purple-900/40">
        {children}
      </body>
    </html>
  );
}
