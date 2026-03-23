"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "Dono — Barbearia Premium",
    text: "Em 3 dias já tinha o site no ar e os clientes começaram a agendar pelo WhatsApp na mesma semana. Muito além do que esperava!",
    stars: 5,
    avatar: "CE",
    color: "from-purple-700 to-purple-500",
  },
  {
    name: "Fernanda Oliveira",
    role: "Gestora — Doces da Fer",
    text: "O site ficou lindo e profissional. Consegui dobrar os pedidos no primeiro mês. O suporte é incrível, respondem super rápido!",
    stars: 5,
    avatar: "FO",
    color: "from-fuchsia-700 to-purple-500",
  },
  {
    name: "Ricardo Santos",
    role: "Fundador — RS Contabilidade",
    text: "Precisava de credibilidade online para a minha contabilidade. O site transmite exatamente essa seriedade. Clientes novos chegando pelo Google!",
    stars: 5,
    avatar: "RS",
    color: "from-violet-700 to-purple-500",
  },
  {
    name: "Ana Lima",
    role: "Proprietária — Restaurante Sabor Real",
    text: "O cardápio digital facilitou demais! Clientes escaneiam o QR Code na mesa e pedem pelo WhatsApp. Modernizou todo o atendimento.",
    stars: 5,
    avatar: "AL",
    color: "from-purple-600 to-fuchsia-600",
  },
  {
    name: "Marcos Pereira",
    role: "CEO — Loja de Eletrônicos MP",
    text: "Site profissional, rápido e com SEO que me coloca no Google. O investimento se pagou em menos de 1 mês. Recomendo 100%!",
    stars: 5,
    avatar: "MP",
    color: "from-violet-600 to-purple-600",
  },
  {
    name: "Juliana Costa",
    role: "Psicóloga — Clínica JC",
    text: "Profissionalismo impecável. Entregaram exatamente o que combinamos, no prazo. Minha clínica nunca teve tanta visibilidade online.",
    stars: 5,
    avatar: "JC",
    color: "from-purple-700 to-violet-500",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-purple-400 fill-purple-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  // Duplicate for seamless marquee
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-700/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/8 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Depoimentos
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            O que nossos{" "}
            <span className="text-gradient">clientes dizem</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">
            Mais de 50 negócios já confiaram na NautaWeb para crescer online.
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        {/* Fade right */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <div className="marquee-track flex gap-5 py-4" style={{ width: "max-content" }}>
            {doubled.map((t, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-6 w-80 flex-shrink-0 card-hover"
              >
                {/* Quote icon */}
                <Quote size={18} className="text-purple-500/50 mb-3" />

                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                  >
                    {t.avatar}
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-semibold text-sm truncate">{t.name}</p>
                    <p className="text-white/40 text-xs truncate">{t.role}</p>
                  </div>
                  <div className="ml-auto">
                    <StarRating count={t.stars} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
