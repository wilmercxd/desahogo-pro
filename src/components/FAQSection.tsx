"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "¿Por qué el servicio es totalmente gratuito?",
    a: "Desahogo Pro nace como una labor voluntaria, espiritual y humanitaria. Muchas personas pasan por crisis o saturación mental y no cuentan con el dinero necesario para costear sesiones psicológicas privadas continuas. Este espacio existe para ser un respiro real y accesible para cualquiera.",
  },
  {
    q: "¿Esto reemplaza una terapia psicológica o psiquiátrica?",
    a: "No. De manera enfática: este no es un servicio médico, psicológico clínico ni psiquiátrico. Quien facilita las sesiones no actúa como psicólogo licenciado ni prescribe diagnósticos. Es un espacio de escucha activa, desahogo y claridad humana. Si identificamos que requieres intervención clínica especializada, te orientaremos a redes profesionales de ayuda.",
  },
  {
    q: "¿Qué significa '30 minutos de escucha radical'?",
    a: "Significa que durante media hora nadie te interrumpirá para decirte 'tienes que hacer esto', ni juzgará tus emociones, ni te dará sermones morales. Tendrás presencia plena, contención y el espacio seguro necesario para ordenar tus pensamientos en voz alta.",
  },
  {
    q: "¿Cómo se protege mi anonimato y privacidad?",
    a: "No pedimos identificación legal ni datos sensibles. Lo que se conversa en la sesión, muere estrictamente en la sesión. No se graban audios ni se crean expedientes públicos.",
  },
  {
    q: "¿Cómo es el proceso de reserva?",
    a: "Haces clic en cualquiera de los botones de agendamiento, seleccionas el horario disponible en Google Calendar que más te convenga y recibirás el enlace privado de videollamada/llamada para conectarte.",
  },
  {
    q: "¿Qué hago si estoy atravesando una crisis inmediata de riesgo vital?",
    a: "Si sientes que tu vida o la de alguien más corre peligro inminente, por favor comunícate de inmediato con las líneas de auxilio de emergencia: en Colombia llama a la Línea 106 (gratuita, atención psicológica 24 horas) o a la Línea 123.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="preguntas" className="py-24 border-t border-white/[0.08]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">
            Transparencia Total
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Todo lo que necesitas saber antes de dar el paso y agendar tus 30 minutos.
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
                  <span className="text-[15px] font-medium text-zinc-200 group-hover:text-white transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-purple-400" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed pr-6 animate-fadeIn">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
