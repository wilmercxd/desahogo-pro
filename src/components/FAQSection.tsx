"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "¿Por qué ofrecen este servicio de apoyo emocional de forma totalmente gratuita?",
    a: "Desahogo Pro nace como una labor voluntaria, espiritual y de carácter humanitario en Colombia. Entendemos que muchas personas atraviesan momentos de saturación mental, tristeza, ansiedad o crisis y no cuentan con el dinero necesario para costear sesiones psicológicas privadas continuas. Este espacio existe para ser un respiro real, digno y accesible para cualquiera.",
  },
  {
    q: "¿Esto reemplaza una terapia psicológica clínica o una consulta psiquiátrica?",
    a: "No. De manera categórica y transparente: este no es un servicio médico, psicológico clínico ni psiquiátrico. Quien facilita las sesiones no actúa como psicólogo licenciado con tarjeta profesional ni prescribe diagnósticos o medicamentos. Es un espacio de primeros auxilios emocionales, escucha activa ininterrumpida y acompañamiento humano. Si identificamos que requieres intervención clínica especializada, te orientaremos hacia las redes profesionales gratuitas y de salud en Colombia.",
  },
  {
    q: "¿Qué significa exactamente '30 minutos de escucha radical'?",
    a: "Significa que durante media hora el centro eres tú. Nadie te interrumpirá para decirte 'tienes que hacer esto', ni juzgará tus emociones, ni te dará sermones morales o religiosos. Tendrás presencia atenta, contención y el silencio seguro necesario para poner en palabras lo que llevas en la cabeza.",
  },
  {
    q: "¿Cómo se garantiza mi anonimato y la privacidad de lo conversado?",
    a: "No solicitamos número de cédula, apellidos, dirección ni datos bancarios. Tienes total libertad de identificarte con tu primer nombre o con un pseudónimo. Lo que se conversa en la sesión, muere estrictamente en la sesión; no se graban audios ni se generan historiales públicos.",
  },
  {
    q: "¿Cómo funciona el proceso de reserva en línea?",
    a: "Haces clic en cualquiera de los botones de 'Reservar 30 Minutos Gratis', seleccionas la fecha y el horario disponible que mejor se adapte a tu rutina en Google Calendar y recibirás automáticamente el enlace privado de videollamada o audio.",
  },
  {
    q: "¿Qué hacer en caso de una crisis emocional severa o riesgo de vida inmediato en Colombia?",
    a: "Si estás experimentando pensamientos de autolesión o tu integridad física está en peligro inminente, debes comunicarte de inmediato con los canales de auxilio de urgencia en Colombia: llama gratis a la Línea 106 ('El poder de ser escuchado', disponible 24 horas) o a la Línea de Emergencias 123.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <section id="preguntas" className="py-24 border-t border-white/[0.08] relative">
      {/* Schema.org FAQPage for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Transparencia y Claridad</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal tracking-tight mb-4">
            Preguntas frecuentes sobre el servicio
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Resolvemos tus dudas sobre cómo funciona la escucha radical anónima y gratuita en Colombia.
          </p>
        </div>

        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="py-5 transition-colors">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between text-left gap-4 group"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-[15px] sm:text-base font-medium text-zinc-200 group-hover:text-teal-300 transition-colors">
                    {faq.q}
                  </h3>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-teal-400" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="mt-3 text-sm text-zinc-300 leading-relaxed pr-6 animate-fadeIn space-y-2">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
