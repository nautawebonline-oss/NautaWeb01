"use client";
import { motion } from "framer-motion";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";

const WA_URL =
  "https://wa.me/5551993777314?text=Ol%C3%A1%2C%20quero%20um%20or%C3%A7amento%20com%20a%20NautaWeb";

export default function CTA() {
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-700/50 to-transparent" />

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-purple-800/20 blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple text-purple-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Disponível para novos projetos
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            Pronto para modernizar{" "}
            <span className="text-gradient">seu negócio?</span>
          </h2>

          <p className="mt-6 text-white/50 text-xl max-w-2xl mx-auto leading-relaxed">
            Entre em contato agora e receba um orçamento gratuito em menos de
            1 hora. Sem compromisso, sem enrolação.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine group flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white font-bold text-lg shadow-2xl shadow-purple-900/50 glow-purple hover:scale-105 transition-transform duration-200"
            >
              <MessageCircle size={22} />
              <span>Falar no WhatsApp</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            <a
              href="mailto:nautawebonline@gmail.com"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl glass text-white/70 hover:text-white font-semibold text-lg hover:border-purple-500/40 transition-all duration-200"
            >
              <Mail size={20} />
              <span>Enviar e-mail</span>
            </a>
          </div>

          <p className="mt-6 text-white/30 text-sm">
            nautawebonline@gmail.com
          </p>
        </motion.div>
      </div>
    </section>
  );
}
