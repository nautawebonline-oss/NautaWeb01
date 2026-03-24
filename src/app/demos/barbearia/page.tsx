"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Scissors,
  MapPin,
  Phone,
  Clock,
  Star,
  ChevronDown,
  MessageCircle,
  Calendar,
  User,
  Award,
  CheckCircle,
} from "lucide-react";

const IgIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

// ─── Colour tokens ────────────────────────────────────────────────────────────
const GOLD = "#d4a017";
const GOLD_LIGHT = "#f5c842";
const GOLD_DARK = "#b8860b";
const BLACK = "#0a0a0a";
const SURFACE = "#111111";
const SURFACE2 = "#161616";
const BORDER = "#1e1e1e";

// ─── Utility ─────────────────────────────────────────────────────────────────
const WA_LINK = "https://wa.me/5551993777314";

function GoldLine({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-px ${className}`}
      style={{
        background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
      }}
    />
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, transparent, ${GOLD_DARK})` }} />
      <span
        className="text-xs tracking-[0.3em] uppercase font-semibold"
        style={{ color: GOLD }}
      >
        {text}
      </span>
      <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${GOLD_DARK}, transparent)` }} />
    </div>
  );
}

function FadeInWhenVisible({
  children,
  delay = 0,
  y = 30,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Serviços", "Equipe", "Galeria", "Depoimentos", "Contato"];

  function scrollTo(id: string) {
    const el = document.getElementById(id.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
    el?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? `1px solid ${BORDER}` : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${GOLD_DARK}, ${GOLD_LIGHT})` }}
            >
              <Scissors size={18} color={BLACK} strokeWidth={2.5} />
            </div>
            <div className="leading-none">
              <span className="text-white font-black text-lg tracking-tight">Black</span>
              <span className="font-black text-lg tracking-tight ml-1" style={{ color: GOLD }}>
                Gold
              </span>
              <div className="text-[9px] tracking-[0.2em] uppercase" style={{ color: GOLD_DARK }}>
                Barbearia
              </div>
            </div>
          </div>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l}>
                <button
                  onClick={() => scrollTo(l)}
                  className="text-sm text-gray-400 hover:text-white transition-colors tracking-wide"
                >
                  {l}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${GOLD_DARK}, ${GOLD})`, color: BLACK }}
          >
            <MessageCircle size={15} />
            Agendar
          </a>

          {/* Mobile burger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-6 h-0.5 transition-all"
                style={{ background: GOLD }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden py-6 px-6 flex flex-col gap-4"
            style={{ background: "rgba(10,10,10,0.97)", borderBottom: `1px solid ${BORDER}` }}
          >
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className="text-left text-white text-base py-2 border-b"
                style={{ borderColor: BORDER }}
              >
                {l}
              </button>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 py-3 rounded-full font-semibold"
              style={{ background: `linear-gradient(135deg, ${GOLD_DARK}, ${GOLD})`, color: BLACK }}
            >
              <MessageCircle size={16} />
              Agendar pelo WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: BLACK }}
    >
      {/* CSS grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(${GOLD} 1px, transparent 1px),
            linear-gradient(90deg, ${GOLD} 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 50% 60%, rgba(212,160,23,0.08) 0%, transparent 70%)`,
        }}
      />

      {/* Diagonal accent bars */}
      <div
        className="absolute top-0 right-0 w-px h-full opacity-20"
        style={{ background: `linear-gradient(to bottom, transparent, ${GOLD}, transparent)` }}
      />
      <div
        className="absolute top-0 left-0 w-px h-full opacity-20"
        style={{ background: `linear-gradient(to bottom, transparent, ${GOLD}, transparent)` }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-12" style={{ background: GOLD }} />
          <span className="text-xs tracking-[0.4em] uppercase font-medium" style={{ color: GOLD }}>
            Porto Alegre · Desde 2019
          </span>
          <div className="h-px w-12" style={{ background: GOLD }} />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6"
        >
          A sua melhor
          <br />
          <span
            className="relative inline-block"
            style={{
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              backgroundImage: `linear-gradient(135deg, ${GOLD_DARK}, ${GOLD_LIGHT}, ${GOLD})`,
            }}
          >
            versão
          </span>{" "}
          começa aqui
        </motion.h1>

        {/* Gold accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-0.5 w-24 mx-auto mb-8"
          style={{ background: `linear-gradient(90deg, ${GOLD_DARK}, ${GOLD_LIGHT})` }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Cortes precisos, barba impecável e um atendimento exclusivo para homens que valorizam
          estilo e excelência.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-full font-bold text-base transition-all duration-200 hover:scale-105 shadow-2xl"
            style={{
              background: `linear-gradient(135deg, ${GOLD_DARK}, ${GOLD_LIGHT})`,
              color: BLACK,
              boxShadow: `0 0 40px rgba(212,160,23,0.35)`,
            }}
          >
            <Calendar size={18} />
            Agendar Horário
          </a>
          <button
            onClick={() => {
              document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-3 px-8 py-4 rounded-full font-bold text-base border transition-all duration-200 hover:scale-105"
            style={{ borderColor: GOLD, color: GOLD, background: "transparent" }}
          >
            Ver Serviços
            <ChevronDown size={18} />
          </button>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12"
        >
          {[
            { value: "500+", label: "Clientes satisfeitos" },
            { value: "5 anos", label: "De experiência" },
            { value: "3", label: "Barbeiros experts" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div
                className="text-3xl font-black"
                style={{ color: GOLD }}
              >
                {s.value}
              </div>
              <div className="text-xs text-gray-500 tracking-wide uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          style={{ color: GOLD_DARK }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
const services = [
  {
    name: "Corte Simples",
    price: "R$45",
    desc: "Corte clássico ou moderno com acabamento perfeito. Lavagem e finalização incluídas.",
    icon: "✂️",
    tag: "Mais Popular",
  },
  {
    name: "Corte + Barba",
    price: "R$75",
    desc: "Combinação completa: corte a seu gosto e barba modelada com navalha e produtos premium.",
    icon: "💈",
    tag: "Recomendado",
  },
  {
    name: "Barba Completa",
    price: "R$40",
    desc: "Modelagem, hidratação, hot towel e finalização com óleo artesanal.",
    icon: "🪒",
    tag: null,
  },
  {
    name: "Platinado",
    price: "R$150",
    desc: "Descoloração e tonalização profissional. Resultado impecável com proteção capilar.",
    icon: "⚡",
    tag: "Premium",
  },
];

function Services() {
  return (
    <section id="servicos" className="py-24 px-6" style={{ background: SURFACE }}>
      <div className="max-w-6xl mx-auto">
        <FadeInWhenVisible>
          <SectionLabel text="O que oferecemos" />
          <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-4 tracking-tight">
            Nossos Serviços
          </h2>
          <p className="text-center text-gray-500 mb-16 max-w-lg mx-auto">
            Cada serviço é executado com precisão, produtos de alta qualidade e atenção aos detalhes.
          </p>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <FadeInWhenVisible key={s.name} delay={i * 0.1}>
              <ServiceCard service={s} />
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl p-6 flex flex-col gap-4 cursor-default transition-all duration-300"
      style={{
        background: SURFACE2,
        border: `1px solid ${hovered ? GOLD : BORDER}`,
        boxShadow: hovered ? `0 0 30px rgba(212,160,23,0.2), inset 0 0 30px rgba(212,160,23,0.03)` : "none",
      }}
    >
      {/* Tag */}
      {service.tag && (
        <span
          className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
          style={{ background: `rgba(212,160,23,0.15)`, color: GOLD }}
        >
          {service.tag}
        </span>
      )}

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
        style={{ background: `rgba(212,160,23,0.08)`, border: `1px solid rgba(212,160,23,0.15)` }}
      >
        {service.icon}
      </div>

      <div>
        <h3 className="text-white font-bold text-lg mb-1">{service.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
      </div>

      <div
        className="text-2xl font-black mt-auto"
        style={{ color: GOLD }}
      >
        {service.price}
      </div>

      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
        style={{
          background: hovered ? `linear-gradient(135deg, ${GOLD_DARK}, ${GOLD})` : `rgba(212,160,23,0.08)`,
          color: hovered ? BLACK : GOLD,
          border: `1px solid ${hovered ? "transparent" : "rgba(212,160,23,0.2)"}`,
        }}
      >
        Agendar
      </a>
    </motion.div>
  );
}

// ─── Booking ──────────────────────────────────────────────────────────────────
function Booking() {
  return (
    <section id="agendamento" className="py-24 px-6" style={{ background: BLACK }}>
      {/* background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,160,23,0.05) 0%, transparent 70%)`,
        }}
      />
      <div className="max-w-3xl mx-auto relative z-10">
        <FadeInWhenVisible>
          <SectionLabel text="Agende agora" />
          <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-4 tracking-tight">
            Reserve seu Horário
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-lg mx-auto">
            Preencha seus dados e confirme pelo WhatsApp. É rápido, fácil e sem espera.
          </p>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.1}>
          <div
            className="rounded-3xl p-8 md:p-10"
            style={{
              background: SURFACE,
              border: `1px solid ${BORDER}`,
              boxShadow: `0 0 60px rgba(212,160,23,0.08)`,
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nome */}
              <BookingField label="Nome completo" placeholder="João Silva" icon={<User size={16} />} />
              {/* Telefone */}
              <BookingField label="Telefone / WhatsApp" placeholder="(51) 99999-9999" icon={<Phone size={16} />} />
              {/* Serviço */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold tracking-wider uppercase" style={{ color: GOLD }}>
                  Serviço
                </label>
                <div
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{ background: SURFACE2, border: `1px solid ${BORDER}` }}
                >
                  <Scissors size={16} color={GOLD_DARK} />
                  <select
                    className="bg-transparent text-gray-300 text-sm flex-1 outline-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecione o serviço
                    </option>
                    <option>Corte Simples — R$45</option>
                    <option>Corte + Barba — R$75</option>
                    <option>Barba Completa — R$40</option>
                    <option>Platinado — R$150</option>
                  </select>
                </div>
              </div>
              {/* Data */}
              <BookingField label="Data" placeholder="DD/MM/AAAA" icon={<Calendar size={16} />} type="date" />
              {/* Horário */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold tracking-wider uppercase" style={{ color: GOLD }}>
                  Horário preferido
                </label>
                <div
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{ background: SURFACE2, border: `1px solid ${BORDER}` }}
                >
                  <Clock size={16} color={GOLD_DARK} />
                  <select
                    className="bg-transparent text-gray-300 text-sm flex-1 outline-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Escolha o horário
                    </option>
                    {["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00"].map((h) => (
                      <option key={h}>{h}</option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Observações */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-xs font-semibold tracking-wider uppercase" style={{ color: GOLD }}>
                  Observações (opcional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Alguma preferência ou detalhe especial..."
                  className="px-4 py-3 rounded-xl text-sm text-gray-300 placeholder-gray-600 outline-none resize-none"
                  style={{ background: SURFACE2, border: `1px solid ${BORDER}` }}
                />
              </div>
            </div>

            <GoldLine className="my-8" />

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-base transition-all duration-200 hover:scale-[1.02]"
              style={{
                background: `linear-gradient(135deg, ${GOLD_DARK}, ${GOLD_LIGHT})`,
                color: BLACK,
                boxShadow: `0 0 40px rgba(212,160,23,0.3)`,
              }}
            >
              <MessageCircle size={20} />
              Confirmar pelo WhatsApp
            </a>
            <p className="text-center text-gray-600 text-xs mt-4">
              Ao clicar, você será direcionado ao WhatsApp para confirmar o agendamento.
            </p>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}

function BookingField({
  label,
  placeholder,
  icon,
  type = "text",
}: {
  label: string;
  placeholder: string;
  icon: React.ReactNode;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-semibold tracking-wider uppercase" style={{ color: GOLD }}>
        {label}
      </label>
      <div
        className="flex items-center gap-3 px-4 py-3 rounded-xl"
        style={{ background: SURFACE2, border: `1px solid ${BORDER}` }}
      >
        <span style={{ color: GOLD_DARK }}>{icon}</span>
        <input
          type={type}
          placeholder={placeholder}
          className="bg-transparent text-gray-300 text-sm flex-1 outline-none placeholder-gray-600"
        />
      </div>
    </div>
  );
}

// ─── Team ─────────────────────────────────────────────────────────────────────
const team = [
  { name: "Rafael Costa", role: "Master Barber", specialty: "Cortes clássicos & fade", years: "8 anos" },
  { name: "Lucas Mendes", role: "Senior Barber", specialty: "Barba & navalha", years: "5 anos" },
  { name: "Bruno Farias", role: "Color Specialist", specialty: "Platinado & coloração", years: "4 anos" },
];

const avatarGradients = [
  `linear-gradient(135deg, ${GOLD_DARK}, #3d2800)`,
  `linear-gradient(135deg, #1a1a1a, ${GOLD_DARK})`,
  `linear-gradient(135deg, ${GOLD_DARK}, #0a0a0a)`,
];

function Team() {
  return (
    <section id="equipe" className="py-24 px-6" style={{ background: SURFACE }}>
      <div className="max-w-5xl mx-auto">
        <FadeInWhenVisible>
          <SectionLabel text="Quem faz acontecer" />
          <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-4 tracking-tight">
            Nossa Equipe
          </h2>
          <p className="text-center text-gray-500 mb-16 max-w-lg mx-auto">
            Profissionais apaixonados pelo que fazem, sempre atualizados com as últimas tendências.
          </p>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <FadeInWhenVisible key={member.name} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="text-center p-8 rounded-2xl flex flex-col items-center gap-5"
                style={{ background: SURFACE2, border: `1px solid ${BORDER}` }}
              >
                {/* Avatar */}
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-black text-white relative"
                  style={{
                    background: avatarGradients[i],
                    boxShadow: `0 0 30px rgba(212,160,23,0.25)`,
                    border: `2px solid ${GOLD_DARK}`,
                  }}
                >
                  {member.name.split(" ").map((n) => n[0]).join("")}
                  {/* Gold ring */}
                  <div
                    className="absolute -inset-1 rounded-full opacity-30"
                    style={{ border: `1px solid ${GOLD}` }}
                  />
                </div>

                <div>
                  <h3 className="text-white font-bold text-xl mb-1">{member.name}</h3>
                  <div className="text-sm font-semibold mb-2" style={{ color: GOLD }}>
                    {member.role}
                  </div>
                  <p className="text-gray-500 text-sm">{member.specialty}</p>
                </div>

                <div
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: `rgba(212,160,23,0.1)`, color: GOLD_DARK }}
                >
                  <Award size={12} />
                  {member.years} de experiência
                </div>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Gallery ──────────────────────────────────────────────────────────────────
const galleryItems = [
  { emoji: "✂️", label: "Fade Degradê", sub: "Corte de precisão" },
  { emoji: "💈", label: "Clássico Lateral", sub: "Linha perfeita" },
  { emoji: "🪒", label: "Barba Navalha", sub: "Acabamento impecável" },
  { emoji: "⚡", label: "Platinado", sub: "Descoloração total" },
  { emoji: "👑", label: "Skin Fade", sub: "Alta fusão" },
  { emoji: "🔥", label: "Texturizado", sub: "Moderno & arrojado" },
];

function Gallery() {
  return (
    <section id="galeria" className="py-24 px-6" style={{ background: BLACK }}>
      <div className="max-w-6xl mx-auto">
        <FadeInWhenVisible>
          <SectionLabel text="Nosso trabalho" />
          <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-4 tracking-tight">
            Galeria
          </h2>
          <p className="text-center text-gray-500 mb-16 max-w-lg mx-auto">
            Cada corte conta uma história. Veja alguns dos nossos trabalhos mais recentes.
          </p>
        </FadeInWhenVisible>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, i) => (
            <FadeInWhenVisible key={item.label} delay={i * 0.08}>
              <GalleryCard item={item} index={i} />
            </FadeInWhenVisible>
          ))}
        </div>

        <FadeInWhenVisible delay={0.3}>
          <div className="text-center mt-12">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-semibold text-sm border transition-all hover:scale-105"
              style={{ borderColor: GOLD, color: GOLD }}
            >
              <IgIcon size={16} />
              Ver mais no Instagram
            </a>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}

function GalleryCard({ item, index }: { item: (typeof galleryItems)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const gradients = [
    `linear-gradient(135deg, #1a0f00, #0a0a0a)`,
    `linear-gradient(135deg, #0d0d0d, #1a1200)`,
    `linear-gradient(135deg, #0a0a0a, #1a0d00)`,
    `linear-gradient(135deg, #110a00, #0a0a0a)`,
    `linear-gradient(135deg, #0a0a0a, #140f00)`,
    `linear-gradient(135deg, #160c00, #0a0a0a)`,
  ];

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="relative aspect-square rounded-2xl overflow-hidden flex items-center justify-center cursor-pointer"
      style={{
        background: gradients[index % gradients.length],
        border: `1px solid ${hovered ? GOLD_DARK : BORDER}`,
        boxShadow: hovered ? `0 0 30px rgba(212,160,23,0.2)` : "none",
      }}
    >
      {/* Corner decorations */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t border-l" style={{ borderColor: GOLD_DARK, opacity: 0.5 }} />
      <div className="absolute top-3 right-3 w-4 h-4 border-t border-r" style={{ borderColor: GOLD_DARK, opacity: 0.5 }} />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l" style={{ borderColor: GOLD_DARK, opacity: 0.5 }} />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r" style={{ borderColor: GOLD_DARK, opacity: 0.5 }} />

      {/* Content */}
      <div className="text-center">
        <div className="text-5xl mb-3">{item.emoji}</div>
        <div className="text-white font-bold text-sm">{item.label}</div>
        <div className="text-gray-600 text-xs mt-1">{item.sub}</div>
      </div>

      {/* Hover overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: `rgba(212,160,23,0.08)` }}
          >
            <div
              className="px-5 py-2 rounded-full text-xs font-bold"
              style={{ background: `rgba(212,160,23,0.9)`, color: BLACK }}
            >
              Ver detalhes
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Testimonials ──────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: "Marcos Oliveira",
    role: "Cliente há 3 anos",
    text: "Melhor barbearia de Porto Alegre. Rafael é um artista — meu corte fica sempre impecável. Atendimento de primeira classe.",
    stars: 5,
  },
  {
    name: "Diego Souza",
    role: "Cliente há 2 anos",
    text: "O Corte + Barba é sensacional. Custo-benefício excelente e o ambiente é muito top. Recomendo demais!",
    stars: 5,
  },
  {
    name: "André Ferreira",
    role: "Cliente há 1 ano",
    text: "Fiz o platinado com o Bruno e ficou incrível. Muito cuidado com os produtos e resultado profissional.",
    stars: 5,
  },
];

function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 px-6" style={{ background: SURFACE }}>
      <div className="max-w-6xl mx-auto">
        <FadeInWhenVisible>
          <SectionLabel text="O que dizem sobre nós" />
          <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-4 tracking-tight">
            Depoimentos
          </h2>
          <p className="text-center text-gray-500 mb-16 max-w-lg mx-auto">
            A satisfação dos nossos clientes é o nosso maior troféu.
          </p>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeInWhenVisible key={t.name} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="p-7 rounded-2xl flex flex-col gap-4"
                style={{
                  background: SURFACE2,
                  border: `1px solid ${BORDER}`,
                }}
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={14} fill={GOLD} color={GOLD} />
                  ))}
                </div>

                {/* Quote mark */}
                <div className="text-4xl font-serif leading-none" style={{ color: GOLD_DARK, opacity: 0.4 }}>
                  "
                </div>

                <p className="text-gray-400 text-sm leading-relaxed -mt-4">"{t.text}"</p>

                <GoldLine />

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: `linear-gradient(135deg, ${GOLD_DARK}, #3d2800)`, color: "white" }}
                  >
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-600 text-xs">{t.role}</div>
                  </div>
                  <CheckCircle size={16} className="ml-auto" style={{ color: GOLD }} />
                </div>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Location & Hours ─────────────────────────────────────────────────────────
const hours = [
  { day: "Segunda – Sexta", time: "09:00 – 20:00", open: true },
  { day: "Sábado", time: "08:00 – 18:00", open: true },
  { day: "Domingo", time: "Fechado", open: false },
];

function LocationHours() {
  return (
    <section id="contato" className="py-24 px-6" style={{ background: BLACK }}>
      <div className="max-w-5xl mx-auto">
        <FadeInWhenVisible>
          <SectionLabel text="Nos encontre" />
          <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-4 tracking-tight">
            Localização & Horários
          </h2>
          <p className="text-center text-gray-500 mb-16 max-w-lg mx-auto">
            Estamos no coração de Porto Alegre, prontos para atendê-lo.
          </p>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Address */}
          <FadeInWhenVisible delay={0.05}>
            <div
              className="rounded-2xl p-8 h-full flex flex-col gap-6"
              style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `rgba(212,160,23,0.1)`, border: `1px solid rgba(212,160,23,0.2)` }}
              >
                <MapPin size={22} style={{ color: GOLD }} />
              </div>

              <div>
                <h3 className="text-white font-bold text-xl mb-3">Endereço</h3>
                <p className="text-gray-400 leading-relaxed">
                  Rua dos Andradas, 1234 — Centro Histórico
                  <br />
                  Porto Alegre, RS — CEP 90020-005
                </p>
              </div>

              <GoldLine />

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `rgba(212,160,23,0.1)`, border: `1px solid rgba(212,160,23,0.2)` }}
                >
                  <Phone size={16} style={{ color: GOLD }} />
                </div>
                <div>
                  <div className="text-gray-600 text-xs mb-1 uppercase tracking-wide">WhatsApp</div>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:underline"
                    style={{ color: GOLD }}
                  >
                    (51) 99377-7314
                  </a>
                </div>
              </div>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm mt-auto transition-all hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${GOLD_DARK}, ${GOLD})`,
                  color: BLACK,
                }}
              >
                <MessageCircle size={16} />
                Falar pelo WhatsApp
              </a>
            </div>
          </FadeInWhenVisible>

          {/* Hours */}
          <FadeInWhenVisible delay={0.12}>
            <div
              className="rounded-2xl p-8 h-full flex flex-col gap-6"
              style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `rgba(212,160,23,0.1)`, border: `1px solid rgba(212,160,23,0.2)` }}
              >
                <Clock size={22} style={{ color: GOLD }} />
              </div>

              <div>
                <h3 className="text-white font-bold text-xl mb-1">Horário de Funcionamento</h3>
                <p className="text-gray-600 text-sm">Agendamento com antecedência recomendado</p>
              </div>

              <div className="flex flex-col gap-3">
                {hours.map((h, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-gray-300 text-sm font-medium">{h.day}</span>
                      <span
                        className="text-sm font-semibold"
                        style={{ color: h.open ? GOLD : "#555" }}
                      >
                        {h.time}
                      </span>
                    </div>
                    {i < hours.length - 1 && <GoldLine />}
                  </div>
                ))}
              </div>

              <div
                className="mt-auto p-4 rounded-xl flex items-start gap-3"
                style={{ background: `rgba(212,160,23,0.06)`, border: `1px solid rgba(212,160,23,0.12)` }}
              >
                <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
                <p className="text-gray-500 text-xs leading-relaxed">
                  Reserve com antecedência pelo WhatsApp. Atendimentos de até 2h antes do fechamento.
                </p>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: SURFACE, borderTop: `1px solid ${BORDER}` }}>
      <GoldLine />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${GOLD_DARK}, ${GOLD_LIGHT})` }}
              >
                <Scissors size={18} color={BLACK} strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-black text-xl tracking-tight">
                  <span className="text-white">Black</span>
                  <span style={{ color: GOLD }}> Gold</span>
                </div>
                <div className="text-[9px] tracking-[0.25em] uppercase" style={{ color: GOLD_DARK }}>
                  Barbearia
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Barbearia premium em Porto Alegre. Precisão, estilo e excelência em cada atendimento.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Navegação</h4>
            <ul className="flex flex-col gap-2">
              {["Serviços", "Equipe", "Galeria", "Depoimentos", "Contato"].map((l) => (
                <li key={l}>
                  <button
                    onClick={() => {
                      document
                        .getElementById(l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-500 text-sm hover:text-white transition-colors"
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Contato</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-gray-500 text-sm">
                <MapPin size={14} style={{ color: GOLD_DARK }} />
                Rua dos Andradas, 1234 — Centro, Porto Alegre
              </div>
              <div className="flex items-center gap-3 text-gray-500 text-sm">
                <Phone size={14} style={{ color: GOLD_DARK }} />
                (51) 99377-7314
              </div>
              <div className="flex items-center gap-3 text-gray-500 text-sm">
                <Clock size={14} style={{ color: GOLD_DARK }} />
                Seg–Sex: 09h–20h · Sáb: 08h–18h
              </div>
            </div>
          </div>
        </div>

        <GoldLine />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-gray-700 text-xs">
            © {new Date().getFullYear()} Black Gold Barbearia. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-gray-700 text-xs">
            <span>Feito com</span>
            <span style={{ color: GOLD }}>♦</span>
            <span>em Porto Alegre</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Floating WhatsApp Button ─────────────────────────────────────────────────
function FloatingWA() {
  return (
    <motion.a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
      style={{
        background: `linear-gradient(135deg, ${GOLD_DARK}, ${GOLD})`,
        boxShadow: `0 0 30px rgba(212,160,23,0.5)`,
      }}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={26} color={BLACK} strokeWidth={2.5} />

      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeOut" }}
        style={{ border: `2px solid ${GOLD}` }}
      />
    </motion.a>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function BarbeariaPage() {
  return (
    <main style={{ background: BLACK, minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <Hero />
      <Services />
      <Booking />
      <Team />
      <Gallery />
      <Testimonials />
      <LocationHours />
      <Footer />
      <FloatingWA />
    </main>
  );
}
