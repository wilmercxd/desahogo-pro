"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, HeartHandshake, ShieldCheck } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "glass-nav py-3 shadow-2xl shadow-black/60"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-500/25 to-teal-400/25 border border-purple-400/30 flex items-center justify-center text-purple-200 group-hover:scale-105 transition-transform shadow-inner shadow-purple-500/20">
              <HeartHandshake className="w-5 h-5 text-teal-300" />
            </div>
            <div>
              <span className="font-semibold tracking-tight text-white text-base">
                Desahogo <span className="text-teal-400 font-light">Pro</span>
              </span>
              <span className="hidden sm:block text-[10px] text-zinc-400 -mt-1 tracking-wider uppercase">
                Escucha Radical
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-[13.5px] font-medium text-zinc-300">
            <Link
              href="#problema"
              className="hover:text-white transition-colors"
            >
              El Problema
            </Link>
            <Link
              href="#oferta"
              className="hover:text-white transition-colors"
            >
              La Oferta (30 min)
            </Link>
            <Link
              href="#beneficios"
              className="hover:text-white transition-colors"
            >
              Lo Que Obtienes
            </Link>
            <Link
              href="#como-funciona"
              className="hover:text-white transition-colors"
            >
              Cómo Funciona
            </Link>
            <Link
              href="#preguntas"
              className="hover:text-white transition-colors"
            >
              Preguntas
            </Link>
          </div>

          {/* High-Converting Right CTA Button (Selia & Top Therapy standard) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://calendar.app.google/QUHZjk8fuGqnutdF9"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center gap-2 bg-gradient-to-r from-teal-400 to-emerald-400 text-zinc-950 px-5 py-2.5 rounded-full text-[13px] font-semibold hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>Hablar con alguien gratis</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-zinc-300 p-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-panel border-t border-white/[0.08] px-6 py-6 space-y-4 animate-fadeIn">
            <Link
              href="#problema"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-200 hover:text-white text-sm py-1 font-medium"
            >
              El Problema
            </Link>
            <Link
              href="#oferta"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-200 hover:text-white text-sm py-1 font-medium"
            >
              La Oferta (30 minutos)
            </Link>
            <Link
              href="#beneficios"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-200 hover:text-white text-sm py-1 font-medium"
            >
              Lo Que Obtienes
            </Link>
            <Link
              href="#como-funciona"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-200 hover:text-white text-sm py-1 font-medium"
            >
              Cómo Funciona
            </Link>
            <Link
              href="#preguntas"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-200 hover:text-white text-sm py-1 font-medium"
            >
              Preguntas Frecuentes
            </Link>

            <div className="pt-3 border-t border-white/[0.08]">
              <a
                href="https://calendar.app.google/QUHZjk8fuGqnutdF9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-teal-400 to-emerald-400 text-zinc-950 py-3 rounded-full text-sm font-semibold shadow-lg shadow-teal-500/20"
              >
                <span>Reservar Espacio Gratis (30 min)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-400 mt-2.5">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>100% Confidencial y Anónimo</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
