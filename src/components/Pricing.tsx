"use client";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const WA_URL =
  "https://wa.me/5551993777314?text=Ol%C3%A1%2C%20quero%20um%20or%C3%A7amento%20com%20a%20NautaWeb";

const plans = [
  {
    name: "Essencial",
    price: "R$ 500",
    range: "– R$ 800",
    period: "projeto único",
    desc: "Ideal para quem quer presença online rápida e profissional.",
    features: [
      "Landing page ou até 3 páginas",
      "Design responsivo e moderno",
      "Formulário de contato",
      "Integração com WhatsApp",
      "SEO básico on-page",
      "Entrega em até 5 dias úteis",
    ],
    highlight: false,
    badge: null,
  },
  {
    name: "Profissional",
    price: "R$ 1.000",
    range: "– R$ 1.500",
    period: "projeto único",
    desc: "Para negócios que querem se destacar com um site completo e de alta performance.",
    features: [
      "Até 6 páginas personalizadas",
      "Design premium com animações",
      "Performance Lighthouse 90+",
      "Multi-dispositivo otimizado",
      "SEO completo + Schema Markup",
      "Blog ou galeria de portfólio",
      "Google Analytics configurado",
      "Entrega em até 10 dias úteis",
    ],
    highlight: true,
    badge: "Mais Popular",
  },
  {
    name: "Fullstack",
    price: "R$ 2.000",
    range: "– R$ 4.000",
    period: "projeto único",
    desc: "Sistema completo com backend, banco de dados e painel administrativo.",
    features: [
      "Frontend + Backend completo",
      "Banco de dados seguro",
      "Dashboard e painel admin",
      "Autenticação e multi-usuário",
      "CRUD completo",
      "Upload de arquivos e mídias",
      "API REST documentada",
      "Integração de pagamentos",
    ],
    highlight: false,
    badge: null,
  },
];

export default function Pricing() {
  return (
    <section id="precos" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-700/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Preços
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Investimento{" "}
            <span className="text-gradient">transparente</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">
            Projetos sob demanda com escopo e prazo combinados antes de começar.
            Sem surpresas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 card-hover flex flex-col ${
                plan.highlight
                  ? "glass-purple border-purple-500/40 glow-purple"
                  : "glass"
              }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white text-xs font-bold shadow-lg shadow-purple-900/50">
                    <Star size={11} fill="white" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan name */}
              <p className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-3">
                {plan.name}
              </p>

              {/* Price */}
              <div className="mb-2">
                <span className="text-4xl font-black text-white">{plan.price}</span>
                <span className="text-white/50 text-lg font-medium">{plan.range}</span>
              </div>
              <p className="text-white/30 text-xs uppercase tracking-widest mb-4">
                {plan.period}
              </p>

              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {plan.desc}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-3 text-sm text-white/70">
                    <Check size={15} className="text-purple-400 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-shine block text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  plan.highlight
                    ? "bg-gradient-to-r from-purple-700 to-purple-500 text-white shadow-lg shadow-purple-900/40 hover:scale-[1.02]"
                    : "glass text-white/80 hover:text-white hover:border-purple-500/40"
                }`}
              >
                Pedir orçamento
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-white/30 text-sm"
        >
          Precisa de algo personalizado?{" "}
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
            Fale conosco e criamos um plano sob medida.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
