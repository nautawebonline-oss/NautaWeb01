"use client";
import { motion } from "framer-motion";
import { Globe, Smartphone, Server, Zap, Shield, HeadphonesIcon } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Profissionais",
    desc: "Landing pages e sites modernos com design impactante, carregamento ultrarrápido e SEO otimizado para gerar mais clientes.",
    features: ["Design responsivo premium", "SEO on-page completo", "Formulários e integração WhatsApp", "Google Analytics"],
    color: "from-purple-700 to-purple-500",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Web",
    desc: "Soluções full-stack sob medida — agendamentos, cardápios digitais, dashboards e muito mais.",
    features: ["Banco de dados seguro", "Painel de gestão simples", "Multi-usuário com login", "API própria"],
    color: "from-purple-600 to-fuchsia-500",
  },
  {
    icon: Zap,
    title: "E-commerce & Vendas",
    desc: "Lojas virtuais completas para vender 24h por dia. Integração com Mercado Pago, Pix e cartão de crédito.",
    features: ["Catálogo de produtos", "Checkout integrado", "Painel de pedidos", "Cupons e descontos"],
    color: "from-fuchsia-600 to-purple-500",
  },
  {
    icon: Shield,
    title: "Hospedagem Gerenciada",
    desc: "Sua infra cuidada por nós — domínio, SSL, backups e monitoramento 24/7 para nunca sair do ar.",
    features: ["SSL grátis", "Backups automáticos", "Uptime 99.9%", "Suporte dedicado"],
    color: "from-purple-800 to-purple-600",
  },
  {
    icon: Server,
    title: "Performance & SEO",
    desc: "Otimização técnica completa para ranquear no Google e carregar em menos de 1 segundo.",
    features: ["Core Web Vitals", "Lighthouse 90+", "Schema Markup", "Sitemap & robots.txt"],
    color: "from-violet-700 to-purple-500",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte & Manutenção",
    desc: "Equipe sempre disponível para atualizar conteúdo, corrigir bugs e manter seu site evoluindo.",
    features: ["Suporte via WhatsApp", "Atualizações mensais", "Temas sazonais", "Relatórios de tráfego"],
    color: "from-purple-600 to-violet-500",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="servicos" className="py-24 relative">
      {/* Top fade */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-700/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3">
            O que fazemos
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Soluções completas para{" "}
            <span className="text-gradient">crescer online</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">
            Da ideia ao ar: criamos, hospedamos e cuidamos para você focar no que importa.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                variants={item}
                className="glass rounded-2xl p-6 card-hover group cursor-default"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 shadow-lg shadow-purple-900/40 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={22} className="text-white" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{s.desc}</p>

                <ul className="space-y-2">
                  {s.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm text-white/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
