import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AlertTriangle, ArrowLeft, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "Descargo de Responsabilidad (Disclaimer) | Desahogo Pro",
  description: "Aviso legal indispensable sobre el alcance de las sesiones de escucha.",
};

export default function DisclaimerPage() {
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

        <div className="flex items-center gap-2.5 text-rose-400 mb-3">
          <AlertTriangle className="w-5 h-5" />
          <span className="text-xs uppercase tracking-widest font-semibold">
            Aviso Legal Esencial
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl text-white font-normal tracking-tight mb-6">
          Descargo de Responsabilidad
        </h1>

        <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-500/30 mb-10 text-rose-200 text-sm leading-relaxed">
          <p className="font-semibold mb-2">Importante para cada usuario:</p>
          <p>
            Este espacio es un servicio voluntario, gratuito y de carácter espiritual-humanitario. Quien facilita estas sesiones no es terapeuta profesional, no es psicólogo con licencia ni psiquiatra. No reemplaza ningún tratamiento médico, psicológico o psiquiátrico.
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed border-t border-white/[0.08] pt-8">
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">¿Qué sí ofrecemos?</h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-400 pl-2">
              <li>Escucha activa ininterrumpida y presencia empática.</li>
              <li>Acompañamiento humano sincero sin juicio moral ni religioso.</li>
              <li>Orientación y acompañamiento para buscar atención especializada en caso de requerirse.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">¿Qué NO ofrecemos?</h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-400 pl-2">
              <li>Diagnóstico de trastornos de la personalidad o patologías clínicas.</li>
              <li>Prescripción de medicamentos ni sustitución de tratamientos en curso.</li>
              <li>Intervención de emergencia para crisis suicidas activas.</li>
            </ul>
          </section>

          <section className="space-y-4 pt-4 border-t border-white/[0.08]">
            <div className="flex items-center gap-2 text-rose-400 font-semibold">
              <PhoneCall className="w-4 h-4" />
              <h2 className="text-base text-white">Líneas de Emergencia Inmediata</h2>
            </div>
            <p className="text-zinc-400">
              Si estás experimentando pensamientos de autolesión, ideación suicida, o peligro físico inmediato, por favor suspende el uso de esta página y comunícate de inmediato con las líneas de auxilio profesional gratuito:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#14141b] border border-white/[0.08]">
                <p className="text-xs text-zinc-400">Colombia (Salud Mental 24h)</p>
                <p className="text-lg font-semibold text-rose-400">Línea 106</p>
                <p className="text-xs text-zinc-400 mt-1">Llamada gratuita nacional desde cualquier teléfono fijo o celular.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#14141b] border border-white/[0.08]">
                <p className="text-xs text-zinc-400">Emergencias Generales Colombia</p>
                <p className="text-lg font-semibold text-rose-400">Línea 123</p>
                <p className="text-xs text-zinc-400 mt-1">Policía Nacional, Ambulancias y atención de emergencias.</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
