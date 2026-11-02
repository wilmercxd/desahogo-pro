import Link from "next/link";
import { HeartHandshake } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#070709] py-14 text-zinc-400 text-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Columna 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300">
                <HeartHandshake className="w-3.5 h-3.5" />
              </div>
              <span className="font-semibold tracking-tight text-white text-[15px]">
                Desahogo <span className="text-zinc-500 font-light">Pro</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              El fin del ruido mental. Un espacio voluntario, gratuito y confidencial de escucha radical y acompañamiento humano.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400/90 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Sesiones voluntarias activas</span>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200 mb-3">
              Explorar
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#problema" className="hover:text-white transition-colors">
                  El Problema
                </Link>
              </li>
              <li>
                <Link href="/#oferta" className="hover:text-white transition-colors">
                  La Oferta
                </Link>
              </li>
              <li>
                <Link href="/#beneficios" className="hover:text-white transition-colors">
                  Beneficios
                </Link>
              </li>
              <li>
                <Link href="/#como-funciona" className="hover:text-white transition-colors">
                  Cómo Funciona
                </Link>
              </li>
              <li>
                <Link href="/#preguntas" className="hover:text-white transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Legal & Cumplimiento */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200 mb-3">
              Legal y Cumplimiento
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/privacidad" className="hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">
                  Descargo de Responsabilidad (Disclaimer)
                </Link>
              </li>
              <li className="pt-2">
                <span className="text-rose-400/90 block">Emergencias Colombia:</span>
                <span className="text-zinc-400 block text-[11px]">Línea 106 (Salud Mental) / 123</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} Desahogo Pro. Iniciativa de acompañamiento voluntario y humanitario.</p>
          <p className="text-zinc-400">Diseñado con empatía y claridad.</p>
        </div>
      </div>
    </footer>
  );
}
