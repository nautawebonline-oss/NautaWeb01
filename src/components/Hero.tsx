"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const WA_URL =
  "https://wa.me/5551993777314?text=Ol%C3%A1%2C%20quero%20um%20site%20com%20a%20NautaWeb";

const stats = [
  { value: "50+", label: "Projetos entregues" },
  { value: "100%", label: "Clientes satisfeitos" },
  { value: "3 dias", label: "Prazo médio" },
  { value: "24/7", label: "Suporte disponível" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 hero-grid opacity-60" />

      {/* Gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob-1 absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-purple-700/20 blur-[100px]" />
        <div className="blob-2 absolute -bottom-32 -right-32 w-[700px] h-[700px] rounded-full bg-purple-500/15 blur-[120px]" />
        <div className="blob-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-purple-900/20 blur-[80px]" />
      </div>

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-transparent to-black/60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-purple-300 text-sm font-medium">
            <Sparkles size={14} className="text-purple-400" />
            <span>Agência de desenvolvimento web premium</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight"
        >
          <span className="text-white">Sites que</span>
          <br />
          <span className="text-gradient">vendem por você.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-center text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
        >
          Landing pages, e-commerces e aplicativos sob medida para pequenos
          negócios. Design premium, performance máxima e hospedagem inclusa.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine group flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white font-bold text-base shadow-2xl shadow-purple-900/50 glow-purple hover:scale-105 transition-transform duration-200"
          >
            <span>Quero meu site agora</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#portfolio"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl glass text-white/80 hover:text-white font-semibold text-base hover:border-purple-500/50 transition-all duration-200"
          >
            Ver portfólio
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="glass rounded-2xl px-6 py-5 text-center card-hover"
            >
              <div className="text-3xl font-black text-gradient">{s.value}</div>
              <div className="mt-1 text-xs text-white/50 font-medium leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#servicos"
            className="flex flex-col items-center gap-2 text-white/30 hover:text-white/50 transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Explorar</span>
            <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent animate-float" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
