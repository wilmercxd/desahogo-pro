import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidad | Desahogo Pro",
  description: "Tratamiento de datos personales, confidencialidad y anonimato en Desahogo Pro.",
};

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 pt-36 pb-24 text-zinc-300">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver al inicio</span>
        </Link>

        <div className="flex items-center gap-2.5 text-purple-400 mb-3">
          <ShieldCheck className="w-5 h-5" />
          <span className="text-xs uppercase tracking-widest font-semibold">
            Confidencialidad & Datos
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl text-white font-normal tracking-tight mb-6">
          Política de Privacidad
        </h1>

        <p className="text-xs text-zinc-400 mb-10">
          Última actualización: {new Date().toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed border-t border-white/[0.08] pt-8">
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">1. Principio Fundamental: Privacidad Radical</h2>
            <p className="text-zinc-400">
              En <strong className="text-white">Desahogo Pro</strong>, creemos que la confianza es la base indispensable para desahogarse. Nuestro principio rector es simple: <em>lo que se dice en la sesión, muere en la sesión</em>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">2. Datos que NO recopilamos</h2>
            <p className="text-zinc-400">
              No solicitamos número de documento de identidad, dirección física, tarjetas de crédito, historial crediticio ni registros médicos oficiales. Tienes total libertad de presentarte con un pseudónimo o únicamente con tu primer nombre durante la llamada.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">3. Datos recabados para el agendamiento</h2>
            <p className="text-zinc-400">
              El agendamiento se realiza a través de la herramienta oficial de Google Calendar. La única información necesaria es una dirección de correo electrónico para enviarte el enlace de conexión y recordatorios automáticos de la cita.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">4. No grabación ni registro de sesiones</h2>
            <p className="text-zinc-400">
              Las sesiones de 30 minutos <strong className="text-white">NO son grabadas</strong> ni en audio ni en video. No se transcriben mediante inteligencias artificiales para análisis comercial ni se venden a terceros bajo ninguna circunstancia.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">5. Excepciones éticas y legales</h2>
            <p className="text-zinc-400">
              La confidencialidad únicamente podrá verse limitada en caso de que durante la conversación se manifieste una intención clara e inminente de daño físico hacia ti mismo o hacia terceras personas, o cuando la ley colombiana o internacional exija la notificación a autoridades de protección y auxilio.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">6. Contacto</h2>
            <p className="text-zinc-400">
              Si tienes preguntas sobre cómo protegemos tu anonimato, puedes comunicarte a través del canal de agendamiento o soporte oficial.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
