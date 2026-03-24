"use client";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

const WA_URL =
  "https://wa.me/5551993777314?text=Ol%C3%A1%2C%20vi%20o%20portf%C3%B3lio%20e%20quero%20algo%20parecido";

const projects = [
  {
    title: "Landing Pages",
    category: "Marketing Digital",
    desc: "Landing pages modernas e chamativas com CTA otimizado para WhatsApp, alta conversão e carregamento ultrarrápido.",
    tags: ["HTML/CSS", "Tailwind", "SEO"],
    demoUrl: "/demos/landing",
    gradient: "from-purple-800/80 to-purple-600/40",
    icon: "🎯",
  },
  {
    title: "Pequeno Comércio",
    category: "E-commerce Local",
    desc: "Site completo com catálogo de produtos, variações, depoimentos de clientes e pedidos via WhatsApp.",
    tags: ["Catálogo", "WhatsApp", "Responsivo"],
    demoUrl: "/demos/comercio",
    gradient: "from-violet-800/80 to-purple-600/40",
    icon: "🛒",
  },
  {
    title: "App de Barbearia",
    category: "Agendamento Online",
    desc: "Sistema de marcação de horário online com confirmação automática via WhatsApp. Simples de gerenciar.",
    tags: ["Agendamento", "Dashboard", "WhatsApp"],
    demoUrl: "/demos/barbearia",
    gradient: "from-fuchsia-800/80 to-purple-600/40",
    icon: "✂️",
  },
  {
    title: "Restaurante com Cardápio",
    category: "Food & Delivery",
    desc: "Cardápio online com categorias, fotos dos pratos, combos em destaque e pedido direto via WhatsApp ou QR Code.",
    tags: ["Cardápio", "QR Code", "Delivery"],
    demoUrl: "/demos/restaurante",
    gradient: "from-purple-900/80 to-violet-600/40",
    icon: "🍽️",
  },
  {
    title: "Site Profissional",
    category: "Prestadores de Serviço",
    desc: "Site institucional para advogados, contadores, psicólogos e demais profissionais. Credibilidade e presença digital.",
    tags: ["Institucional", "Blog", "SEO"],
    demoUrl: "/demos/profissional",
    gradient: "from-violet-700/80 to-purple-500/40",
    icon: "👔",
  },
  {
    title: "Fullstack Dashboard",
    category: "Sistema Web",
    desc: "Sistema completo com login, CRUD, relatórios e painel administrativo. Ideal para negócios que precisam de gestão digital.",
    tags: ["React", "Node.js", "PostgreSQL"],
    demoUrl: "/demos/dashboard",
    gradient: "from-purple-700/80 to-fuchsia-600/40",
    icon: "⚡",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative">
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
            Portfólio
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Soluções para{" "}
            <span className="text-gradient">todo tipo de negócio</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">
            Veja alguns formatos prontos para adaptar ao seu nicho — ou criamos algo totalmente único para você.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p, i) => (
            <motion.article
              key={i}
              variants={item}
              className="glass rounded-2xl overflow-hidden card-hover group flex flex-col"
            >
              {/* Visual banner */}
              <div
                className={`relative h-44 bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}
              >
                {/* Grid decoration */}
                <div className="absolute inset-0 hero-grid opacity-30" />
                {/* Glow orb */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-purple-600/20 blur-2xl" />
                </div>
                <span className="relative text-6xl animate-float">{p.icon}</span>
                {/* Category chip */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-black/50 text-white/70 text-xs font-medium backdrop-blur">
                    {p.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((t, ti) => (
                    <span
                      key={ti}
                      className="px-2.5 py-1 rounded-lg glass-purple text-purple-300 text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                  >
                    <ExternalLink size={14} />
                    Ver demo
                  </a>
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white font-medium transition-colors ml-auto"
                  >
                    Quero assim
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
