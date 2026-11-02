import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  Compass,
  Clock,
  Heart,
  AlertTriangle,
  Lock,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";

const CALENDAR_URL = "https://calendar.app.google/QUHZjk8fuGqnutdF9";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative pt-24 overflow-hidden">
        {/* Glow ambient background effects */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-purple-900/15 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-96 right-10 w-[300px] h-[300px] bg-indigo-900/10 blur-[100px] pointer-events-none rounded-full" />

        {/* ================= HERO SECTION ================= */}
        <section className="relative max-w-6xl mx-auto px-6 pt-12 pb-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline & Action */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Espacio voluntario · 100% Confidencial y Gratuito</span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-4xl sm:text-6xl text-white font-normal tracking-tight leading-[1.08]">
                El fin del <br />
                <em className="italic text-purple-300 font-serif">ruido mental.</em>
              </h1>

              {/* Problem statement hook */}
              <p className="text-zinc-300 text-base sm:text-lg max-w-xl leading-relaxed">
                Estás cargando con algo que no puedes contarle a tus amigos para no
                preocuparlos, ni a tu familia para no ser juzgado. Ese peso te
                quita energía, enfoque y paz.
              </p>

              {/* Hero CTA Box */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-zinc-100 text-zinc-950 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all active:scale-[0.98] shadow-lg shadow-white/5"
                >
                  <span>Reservar 30 Minutos Gratis</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70" />
                </a>

                <a
                  href="#como-funciona"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
                >
                  ¿Cómo funciona?
                </a>
              </div>

              {/* Trust badges row */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Sin costo ni suscripciones</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-purple-400" />
                  <span>Privacidad y anonimato total</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-zinc-300" />
                  <span>Sesión individual de 30 min</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Warmth */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-purple-950/20 group">
                {/* Hero Editorial Photography */}
                <div className="relative h-[380px] sm:h-[440px] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1000&q=80"
                    alt="Espacio seguro y tranquilo de escucha y reflexión"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover brightness-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80" />
                </div>

                {/* Floating Social Proof Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#09090b]/80 backdrop-blur-md border border-white/[0.08] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-medium text-purple-300">
                    <Heart className="w-3.5 h-3.5 fill-purple-400/40 text-purple-400" />
                    <span>Acompañamiento Humano Genuino</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-snug">
                    «Cuando saqué lo que tenía atorado en el pecho, sentí que volví a respirar por primera vez en semanas.»
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= STATS / HIGHLIGHT STRIP ================= */}
        <section className="border-y border-white/[0.08] bg-[#0c0c10]/60 py-8">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <p className="font-serif text-2xl sm:text-3xl text-white font-normal">30 Min</p>
              <p className="text-xs text-zinc-400 uppercase tracking-wider">Escucha Radical</p>
            </div>
            <div className="space-y-1">
              <p className="font-serif text-2xl sm:text-3xl text-emerald-400 font-normal">$0 COP</p>
              <p className="text-xs text-zinc-400 uppercase tracking-wider">100% Gratuito</p>
            </div>
            <div className="space-y-1">
              <p className="font-serif text-2xl sm:text-3xl text-white font-normal">0 Juicios</p>
              <p className="text-xs text-zinc-400 uppercase tracking-wider">Cero Filtros</p>
            </div>
            <div className="space-y-1">
              <p className="font-serif text-2xl sm:text-3xl text-purple-300 font-normal">1 a 1</p>
              <p className="text-xs text-zinc-400 uppercase tracking-wider">Sesión Personal</p>
            </div>
          </div>
        </section>

        {/* ================= THE PROBLEM SECTION ================= */}
        <section id="problema" className="py-24 max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-rose-400/90 mb-3">
              La Carga Silenciosa
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight mb-4">
              ¿Por qué tantas veces nos quedamos callados?
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              El dolor no siempre pide una solución inmediata; la mayoría de las veces sólo necesita ser reconocido y escuchado en un espacio libre de juicios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-[#111116] border border-white/[0.06] hover:border-white/[0.12] transition-colors space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Miedo al qué dirán</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Temes que si cuentas lo que te está pasando cambien la forma en que te ven, o que piensen que te estás quejando demasiado.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#111116] border border-white/[0.06] hover:border-white/[0.12] transition-colors space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">No querer ser una molestia</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Tus seres queridos ya tienen suficientes problemas. Callarte parece la opción más segura, aunque por dentro te estés desmoronando.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#111116] border border-white/[0.06] hover:border-white/[0.12] transition-colors space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Barrera económica real</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                La salud mental privada es un lujo que muchos no pueden costear mes a mes. Desahogo Pro existe para eliminar esa barrera.
              </p>
            </div>
          </div>
        </section>

        {/* ================= THE OFFER SECTION ================= */}
        <section id="oferta" className="py-20 bg-[#0d0d12] border-y border-white/[0.08]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left: 30 min focus */}
              <div className="lg:col-span-5 bg-[#14141b] border border-white/[0.08] p-8 sm:p-10 rounded-3xl text-center space-y-4 shadow-xl">
                <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold">
                  La Oferta Concreta
                </span>
                <div className="font-serif text-7xl sm:text-8xl text-white font-normal leading-none tracking-tight">
                  30
                </div>
                <p className="text-lg font-medium text-zinc-200">
                  Minutos de Escucha Radical
                </p>
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                  <span className="px-3 py-1 rounded-full text-xs bg-zinc-800 text-zinc-300 border border-white/[0.06]">
                    Sin consejos no solicitados
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs bg-zinc-800 text-zinc-300 border border-white/[0.06]">
                    Sin sermones
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    Sin costo alguno
                  </span>
                </div>
              </div>

              {/* Right: What it means */}
              <div className="lg:col-span-7 space-y-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-purple-400">
                  Un Trato Diferente
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight">
                  No venimos a arreglarte. <br />
                  <span className="italic text-zinc-400">Venimos a escucharte de verdad.</span>
                </h2>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  A veces lo único que necesitamos es a alguien con presencia sincera, capaz de sostener el silencio y darte el espacio para que seas tú mismo sin filtros.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Escucha activa y respetuosa</h4>
                      <p className="text-xs sm:text-sm text-zinc-400">Tú marcas el ritmo. Hablas de lo que quieras o de lo que puedas.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Sin pretensiones ni etiquetas</h4>
                      <p className="text-xs sm:text-sm text-zinc-400">No hay juicios morales, no hay diagnósticos fríos, no hay recetas prefabricadas.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Acompañamiento y orientación</h4>
                      <p className="text-xs sm:text-sm text-zinc-400">Si identificamos que requieres ayuda especializada, te acompañaremos a encontrar las rutas adecuadas.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href={CALENDAR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-zinc-950 px-5 py-3 rounded-xl text-sm font-medium hover:bg-zinc-200 transition-all shadow-md shadow-white/5"
                  >
                    <span>Agendar mi sesión de 30 minutos</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= WHAT YOU GET (BENEFITS) ================= */}
        <section id="beneficios" className="py-24 max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">
              Lo Que Obtienes
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight mb-4">
              Tres pilares fundamentales
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Lo que ocurre durante los 30 minutos transforma cómo te sientes al terminar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Beneficio 1 */}
            <div className="p-8 rounded-3xl bg-[#111116] border border-white/[0.08] relative overflow-hidden group hover:border-purple-500/30 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Privacidad Total</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Lo que se dice en la sesión, muere en la sesión. No hay grabaciones, no hay registro de nombres legales ni difusión alguna.
              </p>
              <div className="text-xs text-purple-300 font-medium flex items-center gap-1">
                <span>Confidencialidad absoluta</span>
              </div>
            </div>

            {/* Beneficio 2 */}
            <div className="p-8 rounded-3xl bg-[#111116] border border-white/[0.08] relative overflow-hidden group hover:border-purple-500/30 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-300 mb-6">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Cero Filtros</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Puedes decir las cosas como son, sin adornos ni miedo a &ldquo;quedar mal&rdquo;. Aquí se permite la rabia, el llanto o la duda.
              </p>
              <div className="text-xs text-indigo-300 font-medium flex items-center gap-1">
                <span>Libertad de expresión plena</span>
              </div>
            </div>

            {/* Beneficio 3 */}
            <div className="p-8 rounded-3xl bg-[#111116] border border-white/[0.08] relative overflow-hidden group hover:border-purple-500/30 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-300 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Claridad Inmediata</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Al sacar las palabras de tu cabeza, recuperas el control. Verbalizar organiza los pensamientos que antes parecían un laberinto.
              </p>
              <div className="text-xs text-emerald-300 font-medium flex items-center gap-1">
                <span>Desahogo con propósito</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECOND EDITORIAL VISUAL / QUOTE ================= */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="relative rounded-3xl overflow-hidden border border-white/[0.08]">
            <div className="relative h-[320px] sm:h-[400px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=80"
                alt="Paz mental, meditación y calma"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover brightness-[0.4]"
              />
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center bg-black/40 backdrop-blur-[2px]">
                <div className="max-w-2xl space-y-4">
                  <p className="font-serif italic text-2xl sm:text-3xl text-zinc-100 font-normal leading-relaxed">
                    &ldquo;Hablar de lo que te duele no es señal de debilidad; es el primer acto consciente de valentía para sanar.&rdquo;
                  </p>
                  <p className="text-xs uppercase tracking-widest text-purple-300 font-medium">
                    Desahogo Pro · Acompañamiento Humano
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section id="como-funciona" className="py-24 max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">
              Paso a Paso
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight mb-4">
              ¿Cómo funciona? Es simple y directo.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Sin trámites burocráticos ni formularios invasivos. En menos de dos minutos tienes tu cita lista.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="space-y-3 relative p-6 rounded-2xl bg-[#111116] border border-white/[0.06]">
              <span className="font-serif text-3xl text-purple-300">01</span>
              <h3 className="text-base font-semibold text-white">Eliges tu horario</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Ingresas al calendario de Google, seleccionas el día y la hora que te queden cómodos y reservas tu espacio.
              </p>
            </div>

            <div className="space-y-3 relative p-6 rounded-2xl bg-[#111116] border border-white/[0.06]">
              <span className="font-serif text-3xl text-purple-300">02</span>
              <h3 className="text-base font-semibold text-white">Nos conectamos</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Recibirás el enlace privado de videollamada o audio. Puedes prender tu cámara o mantenerla apagada si te hace sentir más seguro.
              </p>
            </div>

            <div className="space-y-3 relative p-6 rounded-2xl bg-[#111116] border border-white/[0.06]">
              <span className="font-serif text-3xl text-purple-300">03</span>
              <h3 className="text-base font-semibold text-white">Sueltas la carga</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                30 minutos dedicados exclusivamente a ti. Sin interrupciones, sin lecciones morales. Solo escucha honesta.
              </p>
            </div>
          </div>
        </section>

        {/* ================= FINAL CALL TO ACTION ================= */}
        <section className="py-24 border-t border-white/[0.08] bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-xs">
              <Compass className="w-3.5 h-3.5" />
              <span>Da el paso hoy mismo</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal tracking-tight leading-tight">
              No tienes que cargar con todo <br className="hidden sm:inline" />
              en silencio.
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              30 minutos pueden marcar la diferencia entre seguir dándole vueltas en la cabeza o recuperar la calma y la claridad.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-zinc-950 px-8 py-4 rounded-xl text-sm font-semibold hover:bg-zinc-200 transition-all shadow-xl shadow-white/5 active:scale-[0.98]"
              >
                <span>Reservar mi espacio ahora</span>
                <ArrowUpRight className="w-4 h-4 opacity-70" />
              </a>
            </div>

            <p className="text-xs text-zinc-400 pt-2">
              Calendario sincronizado con Google · Sesiones 100% gratuitas
            </p>
          </div>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <FAQSection />

        {/* ================= MANDATORY LEGAL DISCLAIMER BANNER ================= */}
        <section className="py-14 border-t border-white/[0.08] bg-[#0c0c11]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-rose-950/20 border border-rose-500/20 space-y-4">
              <div className="flex items-center gap-2 text-rose-400 font-semibold text-xs tracking-wider uppercase">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Aviso Legal y Descargo de Responsabilidad (Disclaimer)</span>
              </div>

              <div className="space-y-3 text-xs sm:text-[13px] text-zinc-300 leading-relaxed">
                <p>
                  <strong>Este espacio es un servicio voluntario, gratuito y de carácter espiritual-humanitario.</strong> Quien facilita estas sesiones no es terapeuta profesional, no es psicólogo con licencia ni psiquiatra. <strong>No reemplaza ningún tratamiento médico, psicológico o psiquiátrico.</strong>
                </p>
                <p>
                  <strong>Lo que ofrezco:</strong> escucha activa, acompañamiento humano y orientación. Si en algún momento identificamos que necesitas atención especializada, te acompañaré a encontrarla.
                </p>
              </div>

              {/* Inmediate Danger Helplines */}
              <div className="pt-2 border-t border-rose-500/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <p className="text-rose-300 font-medium">
                  🚨 Si estás en peligro inmediato o crisis severa:
                </p>
                <div className="flex items-center gap-4 font-semibold text-rose-400">
                  <a href="tel:123" className="underline hover:text-rose-300">
                    Llama al 123 (Policía Colombia)
                  </a>
                  <a href="tel:106" className="underline hover:text-rose-300">
                    Línea 106 (Salud Mental 24h)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
