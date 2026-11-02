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
    default: "Psicólogo Gratis y Apoyo Emocional en Colombia | Desahogo Pro — Escucha Radical Anónima",
    template: "%s | Desahogo Pro Colombia",
  },
  description:
    "¿No tienes con quién hablar o no puedes pagar un psicólogo privado? En Desahogo Pro recibes 30 minutos de escucha radical, apoyo emocional anónimo y 100% gratuito en Colombia. Alivia el ataque de ansiedad, la soledad y el sobrepensar sin juicios.",
  applicationName: "Desahogo Pro",
  authors: [{ name: "Desahogo Pro Colombia" }],
  generator: "Next.js",
  verification: {
    google: "OZ75py7ICHIeppJUS2_hiQfGcqXMB8ihxWo8-QjN0ew",
  },
  keywords: [
    // Búsquedas de alto volumen durante el año en Colombia
    "psicologo gratis colombia",
    "ayuda psicologica gratis",
    "con quien hablar si me siento solo",
    "no tengo con quien hablar",
    "que hacer en un ataque de ansiedad",
    "como dejar de sobrepensar",
    "apoyo emocional gratuito colombia",
    "chat de ayuda psicologica gratis",
    "linea 106 bogota whatsapp",
    "linea de atencion en crisis colombia",
    "terapia psicologica gratis online",
    "desahogo emocional anonimo",
    "primeros auxilios psicologicos colombia",
    "lineas de salud mental medellin cali barranquilla",
    "escuchaderos colombia",
    "ruido mental ansiedad depresion",
    "con quien desahogarme gratis",
    "dolor en el pecho tristeza vacio emocional",
  ],
  alternates: {
    canonical: "https://desahogo-pro.vercel.app",
    languages: {
      "es-CO": "https://desahogo-pro.vercel.app",
      "es": "https://desahogo-pro.vercel.app",
    },
  },
  openGraph: {
    title: "Psicólogo Gratis y Apoyo Emocional Anónimo en Colombia | Desahogo Pro",
    description:
      "30 minutos de escucha radical y primeros auxilios emocionales en Colombia. Cuando no tienes con quién hablar o no puedes pagar terapia privada.",
    url: "https://desahogo-pro.vercel.app",
    siteName: "Desahogo Pro",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: "Desahogo Pro - Apoyo emocional y escucha gratuita en Colombia para ansiedad, soledad y ruido mental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apoyo Emocional y Escucha Gratuita en Colombia | Desahogo Pro",
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
    "google-site-verification": "OZ75py7ICHIeppJUS2_hiQfGcqXMB8ihxWo8-QjN0ew",
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
        "name": "Desahogo Pro Colombia - Apoyo Emocional y Escucha Gratuita",
        "description": "Espacio voluntario gratuito y anónimo de escucha radical para quienes no pueden costear terapia psicológica privada.",
        "inLanguage": "es-CO",
        "potentialAction": {
          "@type": "ReserveAction",
          "target": "https://calendar.app.google/QUHZjk8fuGqnutdF9",
          "name": "Reservar 30 Minutos de Escucha Gratis"
        }
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
        "name": "Apoyo Emocional y Escucha Radical 30 Minutos",
        "serviceType": "Primeros Auxilios Emocionales y Escucha Activa",
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
        "description": "Sesión individual de 30 minutos de escucha atenta, empática y confidencial sin costo para desahogo de ansiedad, sobrepensar, tristeza, soledad o estrés en Colombia."
      }
    ]
  };

  return (
    <html lang="es-CO" className={`${inter.variable} ${newsreader.variable} scroll-smooth`}>
      <head>
        <meta name="google-site-verification" content="OZ75py7ICHIeppJUS2_hiQfGcqXMB8ihxWo8-QjN0ew" />
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
