"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Shield,
  Zap,
  MessageCircle,
  Star,
  CheckCircle,
  ChevronDown,
  Users,
  Award,
  ThumbsUp,
  Dumbbell,
  Home,
  Salad,
  Headphones,
  Trophy,
  Infinity,
  ArrowRight,
  Play,
} from "lucide-react";

const WA_LINK = "https://wa.me/5551993777314";

// ─── Reusable fade-up variant ───────────────────────────────────────────────
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
};

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } },
};

// ─── Components ─────────────────────────────────────────────────────────────

function GlowOrb({
  className,
  color = "orange",
}: {
  className?: string;
  color?: "orange" | "red";
}) {
  const bg =
    color === "orange"
      ? "radial-gradient(circle, rgba(249,115,22,0.35) 0%, transparent 70%)"
      : "radial-gradient(circle, rgba(220,38,38,0.3) 0%, transparent 70%)";
  return (
    <div
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{ background: bg }}
    />
  );
}

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-orange-400 via-red-400 to-red-600 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

function CTAButton({
  href,
  children,
  size = "lg",
}: {
  href: string;
  children: React.ReactNode;
  size?: "lg" | "md";
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center gap-2 rounded-full font-black tracking-wide shadow-[0_0_40px_rgba(249,115,22,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(249,115,22,0.7)] ${
        size === "lg"
          ? "px-10 py-5 text-lg"
          : "px-7 py-4 text-base"
      } bg-gradient-to-r from-orange-500 via-red-500 to-red-600 text-white uppercase`}
    >
      <span
        className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-red-500 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-60"
      />
      <span className="relative flex items-center gap-2">
        {children}
        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </a>
  );
}

// ─── NAVBAR ─────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav
      className="fixed top-0 z-50 w-full border-b border-white/5 backdrop-blur-xl"
      style={{ background: "rgba(10,10,10,0.85)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-600 shadow-[0_0_20px_rgba(249,115,22,0.5)]">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-black tracking-tight text-white">
            Transformação<span className="text-orange-500"> 30</span>
          </span>
        </div>
        <div className="hidden items-center gap-8 text-sm font-medium text-white/60 md:flex">
          <a href="#beneficios" className="transition-colors hover:text-orange-400">
            Benefícios
          </a>
          <a href="#depoimentos" className="transition-colors hover:text-orange-400">
            Depoimentos
          </a>
          <a href="#preco" className="transition-colors hover:text-orange-400">
            Preço
          </a>
          <a href="#faq" className="transition-colors hover:text-orange-400">
            FAQ
          </a>
        </div>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.6)]"
        >
          Começar Agora
        </a>
      </div>
    </nav>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* background glows */}
      <GlowOrb className="left-[-20%] top-[-10%] h-[700px] w-[700px]" color="orange" />
      <GlowOrb className="right-[-15%] bottom-[-10%] h-[600px] w-[600px]" color="red" />

      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
              </span>
              🔥 Mais de 2.000 alunos transformados
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-5xl font-black leading-[1.05] tracking-tight text-white lg:text-6xl"
            >
              Emagreça{" "}
              <GradientText>8kg em 30 dias</GradientText>{" "}
              com treinos em casa
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-white/60"
            >
              O Método Transformação 30 é o programa definitivo para quem quer resultados
              reais — sem academia, sem dieta sofrida, sem equipamentos.
              Apenas 20 minutos por dia e o método certo.
            </motion.p>

            {/* Countdown */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-400">
                ⏰ Oferta expira em:
              </p>
              <div className="flex items-center gap-3">
                {["02", "14", "33"].map((n, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl font-black text-white shadow-inner backdrop-blur-sm">
                      {n}
                    </div>
                    {i < 2 && (
                      <span className="text-2xl font-black text-orange-500">:</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <CTAButton href={WA_LINK}>QUERO COMEÇAR AGORA</CTAButton>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              {[
                { icon: Shield, label: "30 dias garantia" },
                { icon: Zap, label: "Acesso imediato" },
                { icon: MessageCircle, label: "Suporte no WhatsApp" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 backdrop-blur-sm"
                >
                  <Icon className="h-4 w-4 text-orange-400" />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-[0_0_80px_rgba(249,115,22,0.3)]">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800"
                alt="Fitness Training"
                className="h-[500px] w-full object-cover"
              />
              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20" />

              {/* play badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 shadow-[0_0_40px_rgba(249,115,22,0.5)] backdrop-blur-sm transition-transform hover:scale-110">
                  <Play className="h-8 w-8 fill-white text-white" />
                </div>
              </div>

              {/* floating card */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600">
                    <Trophy className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Resultado em 30 dias</p>
                    <p className="text-xs text-white/50">Garantia ou seu dinheiro de volta</p>
                  </div>
                  <div className="ml-auto text-2xl font-black text-orange-400">✓</div>
                </div>
              </div>
            </div>

            {/* decoration rings */}
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full border border-orange-500/20" />
            <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full border border-orange-500/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── SOCIAL PROOF ────────────────────────────────────────────────────────────

function SocialProof() {
  const stats = [
    { icon: Users, value: "2.341", label: "Alunos ativos", color: "from-orange-500 to-red-500" },
    { icon: Star, value: "4.9", label: "Estrelas de avaliação", color: "from-yellow-400 to-orange-500" },
    { icon: ThumbsUp, value: "97%", label: "Taxa de aprovação", color: "from-green-400 to-emerald-600" },
  ];

  return (
    <section className="relative overflow-hidden border-y border-white/5 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {stats.map(({ icon: Icon, value, label, color }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-orange-500/30 hover:bg-white/8"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} shadow-lg`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-3xl font-black text-white">{value}</p>
                  <p className="text-sm text-white/50">{label}</p>
                </div>
              </div>
              <div
                className={`absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br ${color} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── BENEFITS ────────────────────────────────────────────────────────────────

function Benefits() {
  const benefits = [
    {
      icon: Clock,
      emoji: "⏱️",
      title: "Treinos de 20 min",
      desc: "Resultados expressivos com apenas 20 minutos por dia. Sem perder tempo.",
    },
    {
      icon: Home,
      emoji: "🏠",
      title: "Sem equipamentos",
      desc: "Tudo em casa, no quarto, na sala. Apenas o peso do seu próprio corpo.",
    },
    {
      icon: Salad,
      emoji: "🥗",
      title: "Dieta prática",
      desc: "Guia nutricional simples com receitas rápidas e acessíveis para o dia a dia.",
    },
    {
      icon: Headphones,
      emoji: "🎧",
      title: "Suporte 24h",
      desc: "Nossa equipe responde suas dúvidas via WhatsApp a qualquer hora.",
    },
    {
      icon: Trophy,
      emoji: "🏆",
      title: "Resultado garantido",
      desc: "30 dias de garantia total. Se não funcionar, devolvemos 100% do valor.",
    },
    {
      icon: Infinity,
      emoji: "♾️",
      title: "Acesso vitalício",
      desc: "Pague uma vez e tenha acesso para sempre, incluindo todas as atualizações.",
    },
  ];

  return (
    <section id="beneficios" className="relative overflow-hidden py-24">
      <GlowOrb className="left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2" color="orange" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-400">
            O que você vai receber
          </span>
          <h2 className="mt-4 text-4xl font-black text-white lg:text-5xl">
            Tudo que você precisa para{" "}
            <GradientText>se transformar</GradientText>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/50">
            Um método completo, validado por mais de 2.000 alunos que já alcançaram resultados reais.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map(({ emoji, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/40 hover:bg-gradient-to-br hover:from-orange-500/10 hover:to-red-600/5"
            >
              <div className="mb-4 text-3xl">{emoji}</div>
              <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-white/50">{desc}</p>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br from-orange-500 to-red-600 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-15" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── HOW IT WORKS ────────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Acesse o programa",
      desc: "Após a compra, você recebe acesso imediato à plataforma com todos os módulos, vídeos e materiais complementares.",
    },
    {
      num: "02",
      title: "Siga o método diário",
      desc: "Apenas 20 minutos por dia seguindo o protocolo de treinos e a guia nutricional personalizada. Simples e eficaz.",
    },
    {
      num: "03",
      title: "Veja a transformação",
      desc: "Em 30 dias você vai sentir e ver a diferença. Corpo definido, mais energia e autoestima renovada.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-400">
            Como funciona
          </span>
          <h2 className="mt-4 text-4xl font-black text-white lg:text-5xl">
            Três passos para a sua{" "}
            <GradientText>transformação</GradientText>
          </h2>
        </motion.div>

        <div className="relative grid gap-8 md:grid-cols-3">
          {/* connector line */}
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent md:block" />

          {steps.map(({ num, title, desc }, i) => (
            <motion.div
              key={num}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-2xl font-black text-white shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                {num}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 to-red-500 blur-md opacity-50" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-white/50">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────

function Testimonials() {
  const testimonials = [
    {
      name: "Ana Paula S.",
      role: "Professora, 34 anos",
      text: "Perdi 9kg em 28 dias seguindo o método à risca. Nunca imaginei que 20 minutos por dia fossem tão poderosos. Totalmente recomendo!",
      stars: 5,
      avatar: "AP",
      color: "from-pink-500 to-red-500",
    },
    {
      name: "Carlos M.",
      role: "Engenheiro, 41 anos",
      text: "Tentei vários programas antes. Esse foi o único que realmente funcionou. O suporte é incrível e o método é simples de seguir.",
      stars: 5,
      avatar: "CM",
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "Juliana R.",
      role: "Enfermeira, 29 anos",
      text: "Trabalho em turnos e achei que não teria tempo. Com 20min por dia consegui minha transformação. Resultado real, garantido!",
      stars: 5,
      avatar: "JR",
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section id="depoimentos" className="relative overflow-hidden py-24">
      <GlowOrb className="-right-40 top-0 h-[600px] w-[600px]" color="red" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-400">
            Depoimentos reais
          </span>
          <h2 className="mt-4 text-4xl font-black text-white lg:text-5xl">
            Vidas que foram{" "}
            <GradientText>transformadas</GradientText>
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {testimonials.map(({ name, role, text, stars, avatar, color }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-orange-500/30"
            >
              {/* stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="mb-6 text-sm leading-relaxed text-white/70">
                &ldquo;{text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${color} text-xs font-bold text-white shadow-lg`}
                >
                  {avatar}
                </div>
                <div>
                  <p className="font-bold text-white">{name}</p>
                  <p className="text-xs text-white/40">{role}</p>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-br from-orange-500 to-red-600 opacity-0 blur-3xl transition-opacity group-hover:opacity-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── PRICING ─────────────────────────────────────────────────────────────────

function Pricing() {
  const items = [
    "30 dias de treinos em vídeo (HD)",
    "Guia nutricional completo com receitas",
    "Protocolo de recuperação muscular",
    "App de acompanhamento diário",
    "Suporte via WhatsApp 24/7",
    "Acesso vitalício + atualizações",
    "Bônus: Meditação e controle de ansiedade",
    "Garantia total de 30 dias",
  ];

  return (
    <section id="preco" className="relative overflow-hidden py-24">
      <GlowOrb className="-left-40 bottom-0 h-[600px] w-[600px]" color="orange" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-400">
            Investimento
          </span>
          <h2 className="mt-4 text-4xl font-black text-white lg:text-5xl">
            Oferta por tempo{" "}
            <GradientText>limitado</GradientText>
          </h2>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-lg"
        >
          <div className="relative overflow-hidden rounded-3xl border border-orange-500/40 bg-gradient-to-b from-white/8 to-white/5 p-1 shadow-[0_0_60px_rgba(249,115,22,0.2)]">
            {/* glow top */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

            <div className="rounded-[calc(1.5rem-4px)] bg-gradient-to-b from-white/5 to-transparent p-8">
              {/* popular badge */}
              <div className="mb-6 flex justify-center">
                <span className="rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-white shadow-[0_0_20px_rgba(249,115,22,0.5)]">
                  🔥 Mais vendido
                </span>
              </div>

              <h3 className="mb-1 text-center text-2xl font-black text-white">
                Método Transformação 30
              </h3>
              <p className="mb-6 text-center text-sm text-white/40">Acesso completo e vitalício</p>

              {/* price */}
              <div className="mb-8 text-center">
                <p className="text-sm text-white/30 line-through">De R$997</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-2xl font-bold text-white/70">R$</span>
                  <span className="text-7xl font-black leading-none text-white">297</span>
                </div>
                <p className="mt-1 text-sm text-white/40">ou 12x de R$29,70</p>
              </div>

              {/* items */}
              <ul className="mb-8 space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-400" />
                    {item}
                  </li>
                ))}
              </ul>

              <CTAButton href={WA_LINK}>GARANTIR MINHA VAGA</CTAButton>

              <p className="mt-4 text-center text-xs text-white/30">
                🔒 Pagamento seguro · 30 dias de garantia · Acesso imediato
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

function FAQ() {
  const faqs = [
    {
      q: "Preciso ter alguma experiência com exercícios?",
      a: "Não! O Método Transformação 30 foi desenvolvido para todos os níveis, desde iniciantes absolutos até pessoas que já praticam exercícios. O programa se adapta ao seu ritmo.",
    },
    {
      q: "E se eu não ver resultados em 30 dias?",
      a: "Oferecemos garantia total de 30 dias. Se seguir o método e não ver resultados, devolvemos 100% do seu investimento sem burocracia e sem perguntas.",
    },
    {
      q: "Preciso comprar algum equipamento?",
      a: "Absolutamente nenhum equipamento é necessário. Todos os treinos utilizam apenas o peso do próprio corpo e podem ser feitos em qualquer espaço da sua casa.",
    },
    {
      q: "Por quanto tempo terei acesso ao programa?",
      a: "Seu acesso é vitalício. Pague uma única vez e acesse para sempre, incluindo todas as atualizações e novos conteúdos que adicionarmos ao programa.",
    },
  ];

  return (
    <section id="faq" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-400">
            Dúvidas frequentes
          </span>
          <h2 className="mt-4 text-4xl font-black text-white lg:text-5xl">
            Perguntas{" "}
            <GradientText>frequentes</GradientText>
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map(({ q, a }, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4 p-5">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-xs font-black text-white shadow-md">
                  Q
                </div>
                <div>
                  <p className="font-bold text-white">{q}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">{a}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── FINAL CTA ───────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24">
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl px-8 py-16 text-center shadow-[0_0_80px_rgba(249,115,22,0.3)]"
        style={{
          background: "linear-gradient(135deg, #f97316 0%, #ef4444 50%, #dc2626 100%)",
        }}
      >
        {/* pattern overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-white/70">
            ⚡ Última chamada
          </p>
          <h2 className="mb-4 text-4xl font-black text-white lg:text-5xl">
            Sua transformação começa hoje
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/80">
            Junte-se a mais de 2.000 pessoas que já escolheram mudar. O único arrependimento será
            não ter começado antes.
          </p>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-5 text-lg font-black uppercase tracking-wide text-orange-600 shadow-[0_0_40px_rgba(0,0,0,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(0,0,0,0.4)]"
          >
            QUERO COMEÇAR AGORA
            <ArrowRight className="h-5 w-5" />
          </a>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4" /> 30 dias de garantia
            </span>
            <span className="flex items-center gap-2">
              <Zap className="h-4 w-4" /> Acesso imediato
            </span>
            <span className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> Suporte no WhatsApp
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-600">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-black text-white">
              Transformação<span className="text-orange-500"> 30</span>
            </span>
          </div>
          <p className="max-w-md text-sm text-white/30">
            Método Transformação 30 — Todos os direitos reservados.
            Este produto não garante resultados sem comprometimento e seguimento do método.
          </p>
          <div className="flex gap-6 text-xs text-white/20">
            <span>Política de Privacidade</span>
            <span>Termos de Uso</span>
            <span>Suporte</span>
          </div>
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} Método Transformação 30. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0a0a0a" }}>
      <Navbar />
      <Hero />
      <SocialProof />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
