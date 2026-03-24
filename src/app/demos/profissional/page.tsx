"use client";

import { motion, useInView } from "framer-motion";
import {
  Scale,
  Shield,
  Briefcase,
  Users,
  Phone,
  Mail,
  MapPin,
  Star,
  ArrowRight,
  CheckCircle,
  Clock,
  Award,
  TrendingUp,
  MessageCircle,
  ChevronRight,
  Building2,
  Heart,
  FileText,
} from "lucide-react";
import { useRef, useState } from "react";

const WA_LINK = "https://wa.me/5551993777314";

const practiceAreas = [
  {
    icon: <Scale size={26} />,
    emoji: "⚖️",
    title: "Direito Civil",
    description:
      "Contratos, responsabilidade civil, indenizações, direito de propriedade e ações possessórias.",
  },
  {
    icon: <Briefcase size={26} />,
    emoji: "👔",
    title: "Direito Trabalhista",
    description:
      "Rescisões, horas extras, assédio moral, estabilidade e negociações coletivas.",
  },
  {
    icon: <Heart size={26} />,
    emoji: "👨‍👩‍👧",
    title: "Direito de Família",
    description:
      "Divórcio, guarda compartilhada, pensão alimentícia, inventário e herança.",
  },
  {
    icon: <Building2 size={26} />,
    emoji: "🏢",
    title: "Direito Empresarial",
    description:
      "Constituição de empresas, contratos societários, fusões, aquisições e recuperação judicial.",
  },
  {
    icon: <FileText size={26} />,
    emoji: "📋",
    title: "Direito Previdenciário",
    description:
      "Aposentadoria, benefícios por incapacidade, revisão do INSS e planejamento previdenciário.",
  },
  {
    icon: <Shield size={26} />,
    emoji: "🛡️",
    title: "Direito do Consumidor",
    description:
      "Relações de consumo, danos morais, recall, vícios do produto e cobranças indevidas.",
  },
];

const stats = [
  { value: "500+", label: "Casos resolvidos", icon: <Award size={22} /> },
  { value: "15+", label: "Anos de experiência", icon: <TrendingUp size={22} /> },
  { value: "98%", label: "Taxa de aprovação", icon: <CheckCircle size={22} /> },
  { value: "24h", label: "Tempo de resposta", icon: <Clock size={22} /> },
];

const team = [
  {
    name: "Dr. Ricardo Ferreira",
    specialty: "Direito Civil & Empresarial",
    oab: "OAB/RS 45.231",
    gradient: "from-blue-800 to-blue-600",
    initials: "RF",
  },
  {
    name: "Dra. Camila Ferreira",
    specialty: "Direito de Família & Previdenciário",
    oab: "OAB/RS 52.108",
    gradient: "from-indigo-800 to-blue-700",
    initials: "CF",
  },
  {
    name: "Dr. Lucas Andrade",
    specialty: "Direito Trabalhista & Consumidor",
    oab: "OAB/RS 61.774",
    gradient: "from-blue-900 to-indigo-700",
    initials: "LA",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consulta Gratuita",
    description: "Análise inicial do seu caso sem qualquer custo. Você nos conta tudo e avaliamos as possibilidades.",
  },
  {
    step: "02",
    title: "Análise do Caso",
    description: "Estudo detalhado das evidências, documentos e precedentes jurídicos aplicáveis à sua situação.",
  },
  {
    step: "03",
    title: "Estratégia Jurídica",
    description: "Elaboração do plano de ação personalizado, com prazos, etapas e previsão de resultados.",
  },
  {
    step: "04",
    title: "Resultado",
    description: "Execução precisa da estratégia definida, com acompanhamento total e transparência em cada etapa.",
  },
];

const testimonials = [
  {
    name: "Roberto Almeida",
    role: "Empresário",
    text: "O escritório Ferreira & Associados resolveu uma disputa societária complexa que durava anos. Profissionalismo e competência excepcionais.",
    stars: 5,
  },
  {
    name: "Fernanda Costa",
    role: "Professora",
    text: "A Dra. Camila me orientou em todo o processo de divórcio com muita sensibilidade e eficiência. Resultado excelente em tempo recorde.",
    stars: 5,
  },
  {
    name: "Paulo Henrique",
    role: "Engenheiro",
    text: "Consegui minha aposentadoria após anos tentando sozinho. A equipe do escritório foi fundamental para virar o jogo no INSS.",
    stars: 5,
  },
];

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ProfissionalDemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    message: "",
  });

  return (
    <div
      className="min-h-screen font-sans"
      style={{ background: "#050912", color: "#e2e8f0" }}
    >
      {/* ── NAVBAR ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{
          background: "rgba(5,9,18,0.8)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(29,78,216,0.2)",
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#1d4ed8,#3b82f6)" }}
          >
            <Scale size={17} color="#fff" strokeWidth={2} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-sm tracking-tight" style={{ color: "#e2e8f0" }}>
              Ferreira & Associados
            </span>
            <span className="text-xs" style={{ color: "#d4a017" }}>
              Advocacia
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "#94a3b8" }}>
          <a href="#areas" className="hover:text-blue-400 transition-colors">Áreas</a>
          <a href="#equipe" className="hover:text-blue-400 transition-colors">Equipe</a>
          <a href="#processo" className="hover:text-blue-400 transition-colors">Processo</a>
          <a href="#contato" className="hover:text-blue-400 transition-colors">Contato</a>
        </div>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
          style={{
            background: "linear-gradient(135deg,#1d4ed8,#3b82f6)",
            color: "#fff",
            boxShadow: "0 4px 16px rgba(29,78,216,0.4)",
          }}
        >
          <MessageCircle size={15} />
          <span className="hidden sm:inline">Consulta gratuita</span>
        </a>
      </nav>

      {/* ── HERO ── */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 pt-36 pb-28 overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        {/* Grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(29,78,216,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(29,78,216,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Blue glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 35%, rgba(29,78,216,0.18) 0%, transparent 70%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
          style={{ background: "linear-gradient(to top, #050912, transparent)" }}
        />

        {/* Free consultation badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8"
          style={{
            background: "rgba(212,160,23,0.12)",
            border: "1px solid rgba(212,160,23,0.35)",
            color: "#d4a017",
          }}
        >
          <CheckCircle size={13} />
          Primeira consulta 100% gratuita
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative z-10 font-extrabold leading-tight mb-6 max-w-4xl"
          style={{
            fontSize: "clamp(2.4rem, 6vw, 5rem)",
            background: "linear-gradient(135deg, #e2e8f0 0%, #93c5fd 45%, #3b82f6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Defendendo seus direitos com excelência
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative z-10 text-lg max-w-xl mb-10"
          style={{ color: "#64748b" }}
        >
          Mais de 15 anos de experiência jurídica em Porto Alegre. Resultados comprovados, atendimento humano.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative z-10 flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg,#1d4ed8,#3b82f6)",
              color: "#fff",
              boxShadow: "0 8px 32px rgba(29,78,216,0.45)",
            }}
          >
            <MessageCircle size={20} />
            Falar com um advogado
          </a>
          <a
            href="#areas"
            className="flex items-center gap-2 px-6 py-4 rounded-full font-semibold text-sm border transition-all hover:scale-105 hover:border-blue-500"
            style={{ borderColor: "rgba(59,130,246,0.3)", color: "#93c5fd" }}
          >
            Nossas áreas
            <ChevronRight size={16} />
          </a>
        </motion.div>

        {/* Floating stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="relative z-10 mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl w-full"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="flex flex-col items-center p-4 rounded-2xl"
              style={{
                background: "rgba(15,23,42,0.7)",
                border: "1px solid rgba(29,78,216,0.2)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div style={{ color: "#3b82f6" }} className="mb-2">
                {s.icon}
              </div>
              <div className="font-extrabold text-2xl" style={{ color: "#e2e8f0" }}>
                {s.value}
              </div>
              <div className="text-xs text-center mt-1" style={{ color: "#475569" }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── PRACTICE AREAS ── */}
      <section id="areas" className="px-6 py-24 max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#3b82f6" }}>
            Áreas de Atuação
          </p>
          <h2 className="font-extrabold text-4xl md:text-5xl mb-4" style={{ color: "#e2e8f0" }}>
            Expertise jurídica completa
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: "#475569" }}>
            Atuamos nas principais áreas do direito brasileiro com profundidade técnica e atendimento personalizado.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {practiceAreas.map((area, i) => (
            <FadeIn key={area.title} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -6, borderColor: "rgba(59,130,246,0.5)" }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="rounded-2xl p-7 h-full flex flex-col cursor-default"
                style={{
                  background: "rgba(10,18,35,0.85)",
                  border: "1px solid rgba(29,78,216,0.15)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(29,78,216,0.15)",
                      border: "1px solid rgba(29,78,216,0.25)",
                      color: "#3b82f6",
                    }}
                  >
                    {area.icon}
                  </div>
                  <div>
                    <div className="text-xl mb-1">{area.emoji}</div>
                    <h3 className="font-bold text-base leading-tight" style={{ color: "#e2e8f0" }}>
                      {area.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "#475569" }}>
                  {area.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium" style={{ color: "#3b82f6" }}>
                  Saiba mais <ArrowRight size={12} />
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── TEAM ── */}
      <section
        id="equipe"
        className="py-24 px-6"
        style={{ background: "rgba(8,14,28,0.9)", borderTop: "1px solid rgba(29,78,216,0.1)" }}
      >
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#3b82f6" }}>
              Nossa Equipe
            </p>
            <h2 className="font-extrabold text-4xl md:text-5xl mb-4" style={{ color: "#e2e8f0" }}>
              Advogados especialistas
            </h2>
            <p className="text-base max-w-lg mx-auto" style={{ color: "#475569" }}>
              Profissionais qualificados, comprometidos com a excelência e os resultados dos nossos clientes.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="rounded-2xl p-8 text-center"
                  style={{
                    background: "rgba(10,18,35,0.85)",
                    border: "1px solid rgba(29,78,216,0.15)",
                  }}
                >
                  {/* Avatar */}
                  <div
                    className={`w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center text-2xl font-extrabold bg-gradient-to-br ${member.gradient}`}
                    style={{ color: "#fff", boxShadow: "0 8px 24px rgba(29,78,216,0.4)" }}
                  >
                    {member.initials}
                  </div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: "#e2e8f0" }}>
                    {member.name}
                  </h3>
                  <p className="text-sm mb-3" style={{ color: "#64748b" }}>
                    {member.specialty}
                  </p>
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: "rgba(212,160,23,0.12)",
                      border: "1px solid rgba(212,160,23,0.3)",
                      color: "#d4a017",
                    }}
                  >
                    {member.oab}
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="processo" className="px-6 py-24 max-w-5xl mx-auto">
        <FadeIn className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#3b82f6" }}>
            Como Trabalhamos
          </p>
          <h2 className="font-extrabold text-4xl md:text-5xl mb-4" style={{ color: "#e2e8f0" }}>
            Do primeiro contato ao resultado
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {processSteps.map((step, i) => (
            <FadeIn key={step.step} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-2xl p-6 h-full flex flex-col"
                style={{
                  background: "rgba(10,18,35,0.85)",
                  border: "1px solid rgba(29,78,216,0.15)",
                }}
              >
                <div
                  className="font-black text-4xl mb-5 leading-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(29,78,216,0.6), rgba(59,130,246,0.3))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {step.step}
                </div>
                <h3 className="font-bold text-base mb-3" style={{ color: "#e2e8f0" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "#475569" }}>
                  {step.description}
                </p>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:flex justify-end mt-4" style={{ color: "#1d4ed8" }}>
                    <ArrowRight size={16} />
                  </div>
                )}
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-12 text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-base transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg,#1d4ed8,#3b82f6)",
              color: "#fff",
              boxShadow: "0 8px 32px rgba(29,78,216,0.4)",
            }}
          >
            <MessageCircle size={20} />
            Iniciar minha consulta gratuita
          </a>
        </FadeIn>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        className="py-24 px-6"
        style={{ background: "rgba(8,14,28,0.9)", borderTop: "1px solid rgba(29,78,216,0.1)" }}
      >
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#3b82f6" }}>
              Depoimentos
            </p>
            <h2 className="font-extrabold text-4xl" style={{ color: "#e2e8f0" }}>
              O que dizem nossos clientes
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl p-7 h-full flex flex-col"
                  style={{
                    background: "rgba(10,18,35,0.9)",
                    border: "1px solid rgba(29,78,216,0.15)",
                  }}
                >
                  {/* Quote mark */}
                  <div className="text-4xl font-black mb-3 leading-none" style={{ color: "rgba(59,130,246,0.3)" }}>
                    "
                  </div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, si) => (
                      <Star key={si} size={13} fill="#d4a017" color="#d4a017" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "#64748b" }}>
                    {t.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg,#1d4ed8,#3b82f6)",
                        color: "#fff",
                      }}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm" style={{ color: "#e2e8f0" }}>
                        {t.name}
                      </div>
                      <div className="text-xs" style={{ color: "#475569" }}>
                        {t.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section id="contato" className="px-6 py-24 max-w-4xl mx-auto">
        <FadeIn className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#3b82f6" }}>
            Entre em Contato
          </p>
          <h2 className="font-extrabold text-4xl md:text-5xl mb-4" style={{ color: "#e2e8f0" }}>
            Fale conosco hoje
          </h2>
          <p className="text-base max-w-md mx-auto" style={{ color: "#475569" }}>
            Preencha o formulário e nossa equipe entrará em contato em até 24 horas.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div
            className="rounded-3xl p-8 md:p-12"
            style={{
              background: "rgba(10,18,35,0.9)",
              border: "1px solid rgba(29,78,216,0.2)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
            }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium" style={{ color: "#94a3b8" }}>
                  Nome completo
                </label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2"
                  style={{
                    background: "rgba(5,9,18,0.8)",
                    border: "1px solid rgba(29,78,216,0.2)",
                    color: "#e2e8f0",
                    caretColor: "#3b82f6",
                  }}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium" style={{ color: "#94a3b8" }}>
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2"
                  style={{
                    background: "rgba(5,9,18,0.8)",
                    border: "1px solid rgba(29,78,216,0.2)",
                    color: "#e2e8f0",
                    caretColor: "#3b82f6",
                  }}
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium" style={{ color: "#94a3b8" }}>
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="(51) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="px-4 py-3 rounded-xl text-sm outline-none transition-all"
                  style={{
                    background: "rgba(5,9,18,0.8)",
                    border: "1px solid rgba(29,78,216,0.2)",
                    color: "#e2e8f0",
                    caretColor: "#3b82f6",
                  }}
                />
              </div>

              {/* Area */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium" style={{ color: "#94a3b8" }}>
                  Área de interesse
                </label>
                <select
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="px-4 py-3 rounded-xl text-sm outline-none transition-all appearance-none"
                  style={{
                    background: "rgba(5,9,18,0.8)",
                    border: "1px solid rgba(29,78,216,0.2)",
                    color: formData.area ? "#e2e8f0" : "#475569",
                    cursor: "pointer",
                  }}
                >
                  <option value="">Selecione uma área</option>
                  {practiceAreas.map((a) => (
                    <option key={a.title} value={a.title}>
                      {a.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-medium" style={{ color: "#94a3b8" }}>
                  Descreva seu caso
                </label>
                <textarea
                  rows={5}
                  placeholder="Conte-nos brevemente sobre sua situação jurídica..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                  style={{
                    background: "rgba(5,9,18,0.8)",
                    border: "1px solid rgba(29,78,216,0.2)",
                    color: "#e2e8f0",
                    caretColor: "#3b82f6",
                  }}
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 rounded-full font-bold text-base transition-all"
                style={{
                  background: "linear-gradient(135deg,#1d4ed8,#3b82f6)",
                  color: "#fff",
                  boxShadow: "0 8px 32px rgba(29,78,216,0.45)",
                }}
              >
                <Mail size={18} />
                Enviar mensagem
              </motion.button>
              <p className="text-xs text-center sm:text-left" style={{ color: "#334155" }}>
                Seus dados estão seguros. Respondemos em até 24h úteis.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Quick contact info */}
        <FadeIn delay={0.2}>
          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {[
              {
                icon: <MessageCircle size={18} />,
                label: "WhatsApp",
                value: "(51) 99377-7314",
                href: WA_LINK,
              },
              {
                icon: <Mail size={18} />,
                label: "E-mail",
                value: "contato@ferreiraadv.com.br",
                href: "mailto:contato@ferreiraadv.com.br",
              },
              {
                icon: <MapPin size={18} />,
                label: "Endereço",
                value: "Av. Ipiranga, 6681 — Porto Alegre",
                href: "#",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl transition-all hover:border-blue-800"
                style={{
                  background: "rgba(10,18,35,0.7)",
                  border: "1px solid rgba(29,78,216,0.12)",
                  textDecoration: "none",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: "rgba(29,78,216,0.15)",
                    color: "#3b82f6",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs font-semibold mb-1" style={{ color: "#475569" }}>
                    {item.label}
                  </div>
                  <div className="text-sm font-medium" style={{ color: "#94a3b8" }}>
                    {item.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-16 px-6"
        style={{
          background: "#030609",
          borderTop: "1px solid rgba(29,78,216,0.15)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg,#1d4ed8,#3b82f6)" }}
                >
                  <Scale size={17} color="#fff" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-bold text-sm" style={{ color: "#e2e8f0" }}>
                    Ferreira & Associados
                  </div>
                  <div className="text-xs" style={{ color: "#d4a017" }}>
                    Advocacia
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#334155" }}>
                Escritório de advocacia especializado, comprometido com a excelência jurídica e a defesa dos direitos dos nossos clientes.
              </p>
              <div
                className="inline-block px-3 py-1 rounded-full text-xs"
                style={{
                  background: "rgba(212,160,23,0.08)",
                  border: "1px solid rgba(212,160,23,0.2)",
                  color: "#d4a017",
                }}
              >
                OAB/RS — Ordem dos Advogados do Brasil
              </div>
            </div>

            {/* Áreas */}
            <div>
              <h4 className="font-semibold text-sm mb-5" style={{ color: "#e2e8f0" }}>
                Áreas de Atuação
              </h4>
              <ul className="space-y-2">
                {practiceAreas.map((area) => (
                  <li key={area.title}>
                    <a
                      href="#"
                      className="text-sm transition-colors hover:text-blue-400 flex items-center gap-2"
                      style={{ color: "#334155", textDecoration: "none" }}
                    >
                      <ChevronRight size={12} style={{ color: "#1d4ed8" }} />
                      {area.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="font-semibold text-sm mb-5" style={{ color: "#e2e8f0" }}>
                Contato
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm" style={{ color: "#334155" }}>
                  <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#3b82f6" }} />
                  <span>Av. Ipiranga, 6681 — Sala 204, Porto Alegre/RS</span>
                </div>
                <div className="flex items-center gap-3 text-sm" style={{ color: "#334155" }}>
                  <Phone size={14} className="flex-shrink-0" style={{ color: "#3b82f6" }} />
                  <span>(51) 99377-7314</span>
                </div>
                <div className="flex items-center gap-3 text-sm" style={{ color: "#334155" }}>
                  <Mail size={14} className="flex-shrink-0" style={{ color: "#3b82f6" }} />
                  <span>contato@ferreiraadv.com.br</span>
                </div>
                <div className="flex items-center gap-3 text-sm" style={{ color: "#334155" }}>
                  <Clock size={14} className="flex-shrink-0" style={{ color: "#3b82f6" }} />
                  <span>Seg–Sex: 9h–18h</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
            style={{ borderTop: "1px solid rgba(29,78,216,0.1)", color: "#1e293b" }}
          >
            <span>© 2024 Ferreira & Associados Advocacia. Todos os direitos reservados.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-600 transition-colors" style={{ color: "#1e293b" }}>
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors" style={{ color: "#1e293b" }}>
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
