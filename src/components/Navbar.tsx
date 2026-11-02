"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, HeartHandshake } from "lucide-react";

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090b]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform">
            <HeartHandshake className="w-4 h-4" />
          </div>
          <span className="font-semibold tracking-tight text-white text-[15px]">
            Desahogo <span className="text-zinc-400 font-light">Pro</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-[13.5px]">
          <Link
            href="#problema"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            El Problema
          </Link>
          <Link
            href="#oferta"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            La Oferta
          </Link>
          <Link
            href="#beneficios"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Beneficios
          </Link>
          <Link
            href="#como-funciona"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Cómo Funciona
          </Link>
          <Link
            href="#preguntas"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Preguntas
          </Link>
        </div>

        {/* High-Converting Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://calendar.app.google/QUHZjk8fuGqnutdF9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-zinc-950 px-4 py-2 rounded-lg text-[13px] font-medium hover:bg-zinc-200 transition-all active:scale-[0.98] shadow-sm hover:shadow-white/10 shadow-transparent"
          >
            <span>Reservar Espacio Gratis</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-zinc-300 p-1 hover:text-white"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0e12] border-b border-white/[0.08] px-6 py-6 space-y-4">
          <Link
            href="#problema"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-white text-sm"
          >
            El Problema
          </Link>
          <Link
            href="#oferta"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-white text-sm"
          >
            La Oferta
          </Link>
          <Link
            href="#beneficios"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-white text-sm"
          >
            Beneficios
          </Link>
          <Link
            href="#como-funciona"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-white text-sm"
          >
            Cómo Funciona
          </Link>
          <Link
            href="#preguntas"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-white text-sm"
          >
            Preguntas Frecuentes
          </Link>

          <div className="pt-2">
            <a
              href="https://calendar.app.google/QUHZjk8fuGqnutdF9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-white text-zinc-950 py-2.5 rounded-lg text-sm font-medium"
            >
              <span>Reservar Espacio Gratis (30 min)</span>
              <ArrowUpRight className="w-4 h-4 opacity-60" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
