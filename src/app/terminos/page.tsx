import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Desahogo Pro",
  description: "Condiciones de uso y alcance del servicio voluntario Desahogo Pro.",
};

export default function TerminosPage() {
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
          <FileText className="w-5 h-5" />
          <span className="text-xs uppercase tracking-widest font-semibold">
            Términos de Uso
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl text-white font-normal tracking-tight mb-6">
          Términos y Condiciones
        </h1>

        <p className="text-xs text-zinc-400 mb-10">
          Última actualización: {new Date().toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed border-t border-white/[0.08] pt-8">
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">1. Naturaleza del Servicio</h2>
            <p className="text-zinc-400">
              Desahogo Pro es una iniciativa voluntaria, gratuita y de carácter humanitario y espiritual. Proporciona espacios de escucha empática, diálogo abierto y desahogo de ruido mental sin contraprestación financiera alguna.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">2. No relación médico-paciente</h2>
            <p className="text-zinc-400">
              Al agendar o participar en cualquiera de las sesiones, reconoces y aceptas de manera expresa que <strong className="text-white">no se constituye una relación médico-paciente, psicológica ni terapéutica con licencia clínica</strong>. No se emiten recetas, diagnósticos ni planes de tratamiento médico.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">3. Compromiso y puntualidad</h2>
            <p className="text-zinc-400">
              Dado que los cupos son limitados y 100% gratuitos, te pedimos respeto y puntualidad con el horario seleccionado. Si no puedes asistir, agradecemos cancelar o reprogramar con anterioridad para permitir que otra persona que lo necesite tome ese espacio.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">4. Conducta y respeto mutuo</h2>
            <p className="text-zinc-400">
              El espacio está concebido para la expresión auténtica, el desahogo del llanto, la angustia o el estrés. Sin embargo, no se tolerará el acoso deliberado, la violencia verbal directa o amenazas contra el facilitador. Nos reservamos el derecho de interrumpir cualquier sesión que infrinja estas normas de seguridad humana básica.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">5. Limitación de responsabilidad</h2>
            <p className="text-zinc-400">
              Desahogo Pro no se hace responsable de decisiones personales, laborales, financieras o familiares que el usuario tome antes, durante o después de la sesión. El usuario asume plena responsabilidad y autonomía sobre su propia vida y bienestar.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
