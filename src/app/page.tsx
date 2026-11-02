import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  Clock,
  Heart,
  AlertTriangle,
  Lock,
  MessageCircle,
  CheckCircle2,
  XCircle,
  Calendar,
  VolumeX,
  Smile,
  Compass,
  Phone,
  MapPin,
  HelpCircle,
  Brain,
  Zap,
  Coffee,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";

const CALENDAR_URL = "https://calendar.app.google/QUHZjk8fuGqnutdF9";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative pt-24 pb-16 overflow-hidden">
        {/* Ambient atmospheric lighting */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-purple-600/10 via-teal-500/5 to-transparent blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute top-[800px] -right-20 w-[400px] h-[400px] bg-purple-900/10 blur-[120px] pointer-events-none rounded-full" />

        {/* =========================================================================
            1. HERO SECTION (Optimizado para Búsquedas Frecuentes en Colombia)
        ========================================================================= */}
        <section className="relative max-w-6xl mx-auto px-6 pt-10 pb-16 md:py-20" aria-labelledby="hero-heading">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-medium backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span>¿Buscas psicólogo gratis o alguien con quien hablar en Colombia?</span>
              </div>

              {/* Main Headline H1 with Top Annual Search Intent */}
              <h1 id="hero-heading" className="font-serif text-4xl sm:text-6xl text-white font-normal tracking-tight leading-[1.08]">
                El fin del ruido mental. <br />
                <em className="italic text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-purple-300 to-indigo-300">
                  Escucha radical sin costo.
                </em>
              </h1>

              {/* Problem Hook Statement */}
              <p className="text-zinc-300 text-base sm:text-lg max-w-xl leading-relaxed">
                Cuando la terapia privada no está a tu alcance económico y no tienes con quién hablar para no preocupar a tu familia ni ser juzgado: 
                aquí tienes <strong>30 minutos de escucha radical</strong>, anónima y 100% gratuita.
              </p>

              {/* Call To Action Button Group */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-300 text-zinc-950 px-7 py-4 rounded-full text-[15px] font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Hablar con alguien gratis ahora</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="#motivos"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-medium text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
                >
                  ¿Qué estás sintiendo hoy?
                </a>
              </div>

              {/* Micro Trust Indicators */}
              <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  <span>Sin costo ($0 COP) · Sin tarjetas</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-purple-400" />
                  <span>100% Privado, anónimo y seguro</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-zinc-300" />
                  <span>Sesión individual de 30 minutos</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column (Simulación cálida de acompañamiento) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/[0.1] shadow-2xl shadow-black/80 p-6 space-y-5">
                
                {/* Photo: Human warmth */}
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-white/[0.08]">
                  <Image
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
                    alt="Persona encontrando alivio emocional y calma al hablar en un espacio seguro"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    priority
                    className="object-cover object-center filter brightness-[0.88] contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12131a] via-transparent to-transparent opacity-90" />
                  
                  {/* Floating live badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] text-teal-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />
                    <span>Citas disponibles esta semana</span>
                  </div>
                </div>

                {/* Simulated Conversation Box */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                    <div className="w-8 h-8 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-300 shrink-0 text-xs font-semibold">
                      Tú
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      «Siento que sobrepienso todo y llevo semanas sin poder dormir bien ni desahogarme con nadie...»
                    </p>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                    <div className="w-8 h-8 rounded-full bg-purple-500/30 border border-purple-400/40 flex items-center justify-center text-purple-200 shrink-0 text-xs font-semibold">
                      DP
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-purple-200 font-medium">Desahogo Pro</p>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        Aquí no tienes que fingir que todo está bien. Tienes 30 minutos de escucha radical para soltar la carga sin ningún juicio.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            2. HIGHLIGHT STATS BAR (Proof & Clarity)
        ========================================================================= */}
        <section className="border-y border-white/[0.08] bg-[#0c0d14]/70 py-9" aria-label="Indicadores del servicio">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1.5">
              <p className="font-serif text-3xl sm:text-4xl text-white font-normal">30 Min</p>
              <p className="text-xs text-zinc-400 uppercase tracking-widest font-medium">Escucha Radical</p>
            </div>
            <div className="space-y-1.5">
              <p className="font-serif text-3xl sm:text-4xl text-teal-400 font-normal">$0 COP</p>
              <p className="text-xs text-zinc-400 uppercase tracking-widest font-medium">100% Gratuito</p>
            </div>
            <div className="space-y-1.5">
              <p className="font-serif text-3xl sm:text-4xl text-white font-normal">0 Juicios</p>
              <p className="text-xs text-zinc-400 uppercase tracking-widest font-medium">Sin Sermones</p>
            </div>
            <div className="space-y-1.5">
              <p className="font-serif text-3xl sm:text-4xl text-purple-300 font-normal">1 a 1</p>
              <p className="text-xs text-zinc-400 uppercase tracking-widest font-medium">Privacidad Total</p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. NUEVA SECCIÓN SEO: ¿QUÉ ESTÁS SINTIENDO HOY?
            (Mapeo de las consultas con mayor volumen anual en Colombia)
        ========================================================================= */}
        <section id="motivos" className="py-24 max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-3">
              <Heart className="w-3.5 h-3.5" />
              <span>Identifica tu situación</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal tracking-tight mb-4">
              ¿Qué te está pasando hoy? No estás solo.
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Las búsquedas más frecuentes en Colombia reflejan que miles de personas están pasando por lo mismo que tú. Desahogo Pro es un espacio diseñado para escucharte en cualquiera de estas situaciones:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Sobrepensar */}
            <div className="p-7 rounded-3xl glass-panel border border-white/[0.06] hover:border-teal-400/40 transition-all space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-300">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Sobrepensar todo y no poder apagar la mente</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Das vueltas al pasado, imaginas los peores escenarios del futuro y el insomnio no te deja descansar. Verbalizar lo que sientes rompe el bucle mental de inmediato.
              </p>
            </div>

            {/* Card 2: Ansiedad y Angustia */}
            <div className="p-7 rounded-3xl glass-panel border border-white/[0.06] hover:border-purple-400/40 transition-all space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Ataques de ansiedad o nudo en el pecho</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Sensación de opresión, falta de aire o miedo inexplicable. Tener a alguien presente que te escuche con calma te ayuda a regular el sistema nervioso y recuperar el aliento.
              </p>
            </div>

            {/* Card 3: Soledad */}
            <div className="p-7 rounded-3xl glass-panel border border-white/[0.06] hover:border-teal-400/40 transition-all space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-300">
                <VolumeX className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">«No tengo con quién hablar y me siento solo»</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Estar rodeado de gente y aun así sentirte profundamente incomprendido. En esta sesión no tienes que aparentar éxito ni fortaleza; puedes ser tú al 100%.
              </p>
            </div>

            {/* Card 4: Ruptura amorosa / Duelo */}
            <div className="p-7 rounded-3xl glass-panel border border-white/[0.06] hover:border-purple-400/40 transition-all space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Ruptura amorosa o crisis de pareja</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Tus amigos ya se cansaron de escuchar el tema y no quieres seguir molestándolos. Aquí tienes 30 minutos sin prisas para llorar, recordar o soltar la pena.
              </p>
            </div>

            {/* Card 5: Falta de dinero para terapia */}
            <div className="p-7 rounded-3xl glass-panel border border-white/[0.06] hover:border-teal-400/40 transition-all space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-300">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Buscar psicólogo gratis en Colombia sin citas de 3 meses</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Las citas por EPS tardan meses y la consulta privada es costosa. Desahogo Pro es un puente voluntario e inmediato para recibir primeros auxilios de escucha hoy mismo.
              </p>
            </div>

            {/* Card 6: Estrés laboral y Burnout */}
            <div className="p-7 rounded-3xl glass-panel border border-white/[0.06] hover:border-purple-400/40 transition-all space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300">
                <Coffee className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Sobrecarga laboral, agotamiento y desmotivación</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Sientes que ya no das más con la rutina y las exigencias diarias. Un respiro de media hora para hablar de tus límites sin temor a ser etiquetado.
              </p>
            </div>

          </div>

          <div className="mt-12 text-center">
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-400 to-emerald-400 text-zinc-950 px-7 py-3.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-teal-500/20 transition-all"
            >
              <span>Desahogarme gratis en 30 minutos</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* =========================================================================
            4. THE OFFER (30 min Radical Listening breakdown)
        ========================================================================= */}
        <section id="oferta" className="py-24 bg-[#0d0e15] border-y border-white/[0.08] relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Big Badge Box */}
              <div className="lg:col-span-5 glass-panel border border-teal-500/20 p-8 sm:p-12 rounded-3xl text-center space-y-4 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-teal-500/15 rounded-full blur-2xl" />
                <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">
                  La Propuesta Central
                </span>
                <div className="font-serif text-8xl sm:text-9xl text-white font-normal leading-none tracking-tight">
                  30
                </div>
                <p className="text-xl font-medium text-zinc-100">
                  Minutos de Escucha Radical
                </p>
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                  <span className="px-3 py-1 rounded-full text-xs bg-zinc-800 text-zinc-300 border border-white/[0.06]">
                    Sin consejos no solicitados
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs bg-zinc-800 text-zinc-300 border border-white/[0.06]">
                    Sin sermones
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs bg-teal-500/20 text-teal-300 border border-teal-500/30 font-medium">
                    Sin costo ($0 COP)
                  </span>
                </div>
              </div>

              {/* Right Description */}
              <div className="lg:col-span-7 space-y-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-teal-400">
                  ¿Por qué la escucha activa marca la diferencia?
                </p>
                <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal tracking-tight leading-tight">
                  No venimos a sermonearte. <br />
                  <span className="italic text-zinc-400">Venimos a escucharte de verdad.</span>
                </h2>
                <p className="text-zinc-300 text-base leading-relaxed">
                  30 minutos donde lo único que importa es lo que tú quieras expresar. No voy a interrumpirte para contarte anécdotas mías, ni a darte frases vacías de autoayuda. Solo presencia humana atenta, empática y respetuosa.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-white">Escucha activa y respetuosa</h3>
                      <p className="text-xs sm:text-sm text-zinc-400">Tú marcas el ritmo de la conversación. Puedes llorar, hacer pausas o hablar rápido; este espacio te pertenece.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-white">Acompañamiento humano y orientación</h3>
                      <p className="text-xs sm:text-sm text-zinc-400">Si en algún momento identificamos que requieres atención clínica o médica especializada, te orientaremos hacia las rutas profesionales y gratuitas en Colombia.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-white">Servicio voluntario y transparente</h3>
                      <p className="text-xs sm:text-sm text-zinc-400">No hay cobros posteriores, no hay membresías ocultas ni recopilación de datos comerciales. Es una iniciativa puramente humanitaria.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href={CALENDAR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-gradient-to-r from-teal-400 to-emerald-400 text-zinc-950 px-6 py-3.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-teal-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Agendar mi sesión de 30 minutos</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            5. WHAT YOU GET (3 Core Pillars)
        ========================================================================= */}
        <section id="beneficios" className="py-24 max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">
              Lo Que Obtienes
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal tracking-tight mb-4">
              Tres pilares fundamentales
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              No necesitas meses de espera para sentir el alivio inmediato de sacar las palabras de tu cabeza.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Beneficio 1 */}
            <div className="p-8 rounded-3xl glass-panel border border-white/[0.08] relative overflow-hidden group hover:border-teal-400/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-300 mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Privacidad Total</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Lo que se dice en la sesión, muere en la sesión. Sin registros oficiales, sin grabaciones y sin rastro. Tu tranquilidad y anonimato están 100% protegidos.
              </p>
              <div className="text-xs text-teal-300 font-medium">
                Confidencialidad absoluta
              </div>
            </div>

            {/* Beneficio 2 */}
            <div className="p-8 rounded-3xl glass-panel border border-white/[0.08] relative overflow-hidden group hover:border-purple-400/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300 mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Cero Filtros</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Puedes decir las cosas como son, sin adornarlas y sin miedo a &ldquo;quedar mal&rdquo;. Aquí se permite la rabia, la confusión o el llanto sin máscaras ni etiquetas.
              </p>
              <div className="text-xs text-purple-300 font-medium">
                Libertad de expresión plena
              </div>
            </div>

            {/* Beneficio 3 */}
            <div className="p-8 rounded-3xl glass-panel border border-white/[0.08] relative overflow-hidden group hover:border-teal-400/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-300 mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Claridad Inmediata</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Al sacar las palabras de tu cabeza, recuperas el control. Escucharte a ti mismo en voz alta rompe el bucle del ruido mental y te devuelve la paz.
              </p>
              <div className="text-xs text-teal-300 font-medium">
                Alivio y enfoque renovado
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            6. COMPARISON: "Guardártelo vs. Desahogarte" (High-Conversion Therapy Pattern)
        ========================================================================= */}
        <section className="py-20 bg-[#0c0d13] border-y border-white/[0.08]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-3">
                ¿Qué pasa cuando decides hablar?
              </h2>
              <p className="text-zinc-400 text-sm">
                La diferencia entre seguir cargando en soledad o regalarte 30 minutos de alivio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Opción 1: Seguir callado */}
              <div className="p-6 sm:p-8 rounded-3xl bg-red-950/10 border border-red-500/20 space-y-4">
                <div className="flex items-center gap-2 text-red-400 font-semibold text-sm">
                  <XCircle className="w-5 h-5 shrink-0" />
                  <span>Guardártelo todo en silencio</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">•</span>
                    <span>El ruido mental aumenta y te quita horas de sueño y descanso.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">•</span>
                    <span>Sientes irritabilidad o desconexión con las personas que te rodean.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">•</span>
                    <span>La sensación de soledad se vuelve más pesada cada semana.</span>
                  </li>
                </ul>
              </div>

              {/* Opción 2: 30 min Desahogo Pro */}
              <div className="p-6 sm:p-8 rounded-3xl bg-teal-950/15 border border-teal-500/30 space-y-4 shadow-xl shadow-teal-950/20">
                <div className="flex items-center gap-2 text-teal-300 font-semibold text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-teal-400" />
                  <span>30 minutos en Desahogo Pro</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 font-bold">•</span>
                    <span>Sueltas las palabras atragantadas sin temor a herir o decepcionar.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 font-bold">•</span>
                    <span>Recuperas claridad, perspectiva y una sensación real de ligereza.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 font-bold">•</span>
                    <span>Sabes que hay alguien dispuesto a escucharte de verdad, sin costo.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            7. SEO DIRECTORY: GUÍA DE LÍNEAS DE AYUDA Y SALUD MENTAL EN COLOMBIA
        ========================================================================= */}
        <section id="lineas-colombia" className="py-24 max-w-6xl mx-auto px-6 border-b border-white/[0.08]">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-3">
              <Phone className="w-3.5 h-3.5" />
              <span>Directorio de Ayuda Psicológica en Colombia</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal tracking-tight mb-4">
              Líneas de atención y apoyo psicológico gratuito en Colombia
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              En Desahogo Pro creemos en la solidaridad y el acceso abierto al bienestar. Si buscas atención psicológica clínica inmediata o atraviesas una situación de emergencia en Colombia, ponemos a tu disposición estos canales oficiales gratuitos y 24 horas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Línea 106 */}
            <div className="p-6 rounded-3xl glass-panel border border-white/[0.08] space-y-3 hover:border-teal-400/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-teal-300 font-semibold">Nacional / Bogotá</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">24 Horas</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Línea 106: El poder de ser escuchado</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Canal gratuito de primeros auxilios psicológicos y escucha activa de la Secretaría de Salud y MinSalud.
              </p>
              <div className="pt-2 flex flex-col gap-1.5 text-xs">
                <a href="tel:106" className="text-teal-400 font-semibold hover:underline flex items-center gap-1">
                  Marcar al 106 (Gratis)
                </a>
                <span className="text-zinc-400">WhatsApp Bogotá: 300 754 8933</span>
              </div>
            </div>

            {/* Línea 123 */}
            <div className="p-6 rounded-3xl glass-panel border border-white/[0.08] space-y-3 hover:border-rose-400/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-rose-400 font-semibold">Emergencias Nacionales</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20">24/7 Urgencias</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Línea 123: Auxilio Inmediato</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Para riesgo inminente a la vida, tentativa de autolesión o emergencia médica y psiquiátrica inmediata en todo el territorio nacional.
              </p>
              <div className="pt-2 text-xs">
                <a href="tel:123" className="text-rose-400 font-semibold hover:underline">
                  Marcar al 123 (Policía / Ambulancias)
                </a>
              </div>
            </div>

            {/* Línea Púrpura */}
            <div className="p-6 rounded-3xl glass-panel border border-white/[0.08] space-y-3 hover:border-purple-400/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-purple-300 font-semibold">Mujeres</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">Gratuita</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Línea Púrpura Distrital</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Atención y orientación psicosocial gratuita especializada para mujeres mayores de 18 años ante situaciones de crisis emocional o violencia.
              </p>
              <div className="pt-2 text-xs">
                <a href="tel:018000112137" className="text-purple-300 font-semibold hover:underline">
                  01 8000 112 137
                </a>
              </div>
            </div>

            {/* Línea Calma */}
            <div className="p-6 rounded-3xl glass-panel border border-white/[0.08] space-y-3 hover:border-indigo-400/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-indigo-300 font-semibold">Hombres</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">Gratuita</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Línea Calma</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Espacio de escucha y asesoramiento emocional para hombres en manejo de ansiedad, frustración, celos, duelo o depresión.
              </p>
              <div className="pt-2 text-xs">
                <a href="tel:018000423614" className="text-indigo-300 font-semibold hover:underline">
                  01 8000 423 614
                </a>
              </div>
            </div>

            {/* Escuchaderos Medellín / Antioquia */}
            <div className="p-6 rounded-3xl glass-panel border border-white/[0.08] space-y-3 hover:border-teal-400/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-teal-300 font-semibold">Medellín / Presencial</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">Puntos Clave</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Escuchaderos Comunitarios</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Puntos de atención gratuita presencial en estaciones del Metro y comunas de Medellín con psicólogos profesionales sin cita previa.
              </p>
              <div className="pt-2 text-xs text-zinc-400">
                Línea amiga Medellín: <a href="tel:6044444448" className="text-teal-400 font-semibold hover:underline">(604) 444 44 48</a>
              </div>
            </div>

            {/* Línea 106 Cali / Valle */}
            <div className="p-6 rounded-3xl glass-panel border border-white/[0.08] space-y-3 hover:border-teal-400/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-teal-300 font-semibold">Cali y Valle del Cauca</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">Línea 106</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Línea de Salud Mental Cali</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Orientación psicológica telefónica y canal de teleorientación para la prevención de la depresión, estrés y crisis familiar.
              </p>
              <div className="pt-2 text-xs text-zinc-400">
                Marcar 106 en el Valle o <a href="tel:106" className="text-teal-400 font-semibold hover:underline">atención gratuita</a>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            8. HOW IT WORKS (Simple 3 steps)
        ========================================================================= */}
        <section id="como-funciona" className="py-24 max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">
              Proceso Transparente
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal tracking-tight mb-4">
              ¿Cómo funciona? En tres pasos sencillos.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              No tienes que llenar cuestionarios invasivos ni dar tu tarjeta de crédito. Solo dos minutos para elegir tu hora en el calendario de Google.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="space-y-3 p-8 rounded-3xl glass-panel border border-white/[0.06] hover:border-teal-500/30 transition-all">
              <span className="font-serif text-4xl text-teal-300 font-normal">01</span>
              <h3 className="text-lg font-semibold text-white">Reserva tu horario</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Haz clic en el botón de reserva, selecciona el horario que mejor te convenga en Google Calendar y listo.
              </p>
            </div>

            <div className="space-y-3 p-8 rounded-3xl glass-panel border border-white/[0.06] hover:border-teal-500/30 transition-all">
              <span className="font-serif text-4xl text-teal-300 font-normal">02</span>
              <h3 className="text-lg font-semibold text-white">Nos conectamos</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Recibirás un enlace privado de videollamada o audio. Puedes mantener tu cámara apagada si así te sientes más cómodo.
              </p>
            </div>

            <div className="space-y-3 p-8 rounded-3xl glass-panel border border-white/[0.06] hover:border-teal-500/30 transition-all">
              <span className="font-serif text-4xl text-teal-300 font-normal">03</span>
              <h3 className="text-lg font-semibold text-white">Sueltas la carga</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                30 minutos de escucha honesta y radical. Al terminar, respirarás con más calma, ligereza y perspectiva.
              </p>
            </div>

          </div>
        </section>

        {/* =========================================================================
            9. FINAL CONVERSION SECTION (High Visibility CTA)
        ========================================================================= */}
        <section className="py-24 border-t border-white/[0.08] relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-950/15 to-transparent pointer-events-none" />
          
          <div className="relative max-w-4xl mx-auto px-6 text-center space-y-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-medium">
              <Smile className="w-4 h-4 text-teal-400" />
              <span>Tu bienestar no tiene precio</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-6xl text-white font-normal tracking-tight leading-tight">
              No tienes que seguir cargando <br className="hidden sm:inline" />
              con todo en soledad.
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Un clic es todo lo que te separa de 30 minutos de paz y escucha sincera. Sin costo, sin sermones y con total anonimato desde cualquier lugar de Colombia.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-300 text-zinc-950 px-8 py-4 rounded-full text-base font-semibold hover:shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>Reservar mi espacio gratis ahora</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-xs text-zinc-400 pt-3">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-teal-400" />
                Agendamiento directo
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-teal-400" />
                Sin registros públicos
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            10. FAQ SECTION (With FAQPage Schema.org)
        ========================================================================= */}
        <FAQSection />

        {/* =========================================================================
            11. MANDATORY LEGAL DISCLAIMER & EMERGENCY HELPLINES
        ========================================================================= */}
        <section className="py-14 border-t border-white/[0.08] bg-[#090a0f]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="p-7 rounded-3xl bg-rose-950/20 border border-rose-500/30 space-y-4 shadow-xl">
              <div className="flex items-center gap-2.5 text-rose-400 font-semibold text-xs tracking-wider uppercase">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Descargo de Responsabilidad Legal y Ético (Disclaimer)</span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <p>
                  <strong>Este espacio es un servicio voluntario, gratuito y de carácter espiritual-humanitario.</strong> Quien facilita estas sesiones no es terapeuta profesional, no es psicólogo con licencia ni psiquiatra. <strong>No reemplaza ningún tratamiento médico, psicológico o psiquiátrico.</strong>
                </p>
                <p>
                  <strong>Lo que ofrezco:</strong> escucha activa, acompañamiento humano y orientación. Si en algún momento identificamos que necesitas atención especializada, te acompañaré a encontrarla con todo el respeto.
                </p>
              </div>

              {/* Helplines for Immediate Life Danger */}
              <div className="pt-3 border-t border-rose-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <p className="text-rose-300 font-medium">
                  🚨 Si estás en peligro inmediato o crisis vital severa en Colombia:
                </p>
                <div className="flex flex-wrap items-center gap-4 font-semibold text-rose-400">
                  <a href="tel:123" className="underline hover:text-rose-200">
                    Llama al 123 (Policía Colombia)
                  </a>
                  <a href="tel:106" className="underline hover:text-rose-200">
                    Línea 106 (Salud Mental Gratuita 24h)
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
