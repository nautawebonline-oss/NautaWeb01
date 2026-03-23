"use client";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const WA_URL =
  "https://wa.me/5551993777314?text=Ol%C3%A1%2C%20quero%20contratar%20um%20plano%20de%20manuten%C3%A7%C3%A3o";

const plans = [
  {
    name: "Básico",
    price: "R$ 150",
    range: "– R$ 200",
    period: "/mês",
    desc: "Ideal para sites simples que precisam ficar no ar com segurança.",
    features: [
      "Hospedagem gerenciada",
      "Domínio incluso",
      "SSL certificado grátis",
      "Backups semanais",
      "Suporte a combinar",
    ],
    highlight: false,
    badge: null,
  },
  {
    name: "Starter",
    price: "R$ 300",
    range: "",
    period: "/mês",
    desc: "Para negócios que querem conteúdo sempre atualizado sem se preocupar.",
    features: [
      "Tudo do plano Básico",
      "Manutenção mensal de conteúdo",
      "Backups diários",
      "Monitoramento de uptime",
      "Suporte básico via WhatsApp",
      "Relatório mensal de acessos",
    ],
    highlight: false,
    badge: null,
  },
  {
    name: "Pro",
    price: "R$ 500",
    range: "",
    period: "/mês",
    desc: "Para quem exige o melhor: performance, segurança e suporte prioritário.",
    features: [
      "Tudo do plano Starter",
      "Suporte prioritário 24/7",
      "Web Application Firewall (WAF)",
      "Temas sazonais (Natal, etc.)",
      "Análise de tráfego mensal",
      "Otimizações de performance",
      "Atualizações ilimitadas de conteúdo",
    ],
    highlight: true,
    badge: "Mais Completo",
  },
];

export default function MaintenancePlans() {
  return (
    <section id="planos" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-700/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Planos mensais
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Manutenção &{" "}
            <span className="text-gradient">Hospedagem</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-2xl mx-auto">
            Serviços disponíveis exclusivamente para clientes que compraram um site conosco.
            Foque no seu negócio — a gente cuida da tecnologia.
          </p>
        </motion.div>

        {/* Info chip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-purple-300 text-sm">
            <Zap size={14} className="text-purple-400" />
            Cancele quando quiser · Sem fidelidade
          </div>
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
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white text-xs font-bold shadow-lg shadow-purple-900/50">
                    <Zap size={11} fill="white" />
                    {plan.badge}
                  </div>
                </div>
              )}

              <p className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-3">
                {plan.name}
              </p>

              <div className="mb-2">
                <span className="text-4xl font-black text-white">{plan.price}</span>
                {plan.range && (
                  <span className="text-white/50 text-lg font-medium">{plan.range}</span>
                )}
                <span className="text-white/40 text-base ml-1">{plan.period}</span>
              </div>

              <p className="text-white/50 text-sm leading-relaxed mb-6">{plan.desc}</p>

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
                Contratar plano
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
