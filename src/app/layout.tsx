import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://desahogopro.vercel.app"),
  title: "Desahogo Pro — El fin del ruido mental | Escucha activa gratuita",
  description:
    "30 minutos de escucha radical. Sin consejos no solicitados, sin sermones y sin costo. Un espacio anónimo, confidencial y humano para soltar lo que llevas dentro.",
  keywords: [
    "escucha activa",
    "desahogo emocional",
    "salud mental",
    "apoyo emocional gratuito",
    "espacio anonimo para hablar",
    "coaching de vida",
    "ruido mental",
  ],
  authors: [{ name: "Desahogo Pro" }],
  openGraph: {
    title: "Desahogo Pro — El fin del ruido mental",
    description:
      "30 minutos de escucha radical, anónima y 100% gratuita. Suelta la carga sin miedo al juicio.",
    url: "https://desahogopro.vercel.app",
    siteName: "Desahogo Pro",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Desahogo Pro - Escucha Radical",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desahogo Pro — El fin del ruido mental",
    description: "30 minutos de escucha radical, anónima y sin costo.",
    images: [
      "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${newsreader.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#09090b] text-[#ededef] selection:bg-purple-900/40">
        {children}
      </body>
    </html>
  );
}
