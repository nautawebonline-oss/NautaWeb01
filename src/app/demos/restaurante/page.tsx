"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Utensils,
  MapPin,
  Clock,
  Phone,
  Star,
  ChevronDown,
  Menu,
  X,
  MessageCircle,
  Wifi,
  CreditCard,
  ParkingSquare,
  Wine,
} from "lucide-react";

const IgIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);
const FbIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

// ─── DATA ────────────────────────────────────────────────────────────────────

const menuItems = [
  {
    emoji: "🍝",
    name: "Tagliatelle al Ragù",
    description: "Massa fresca artesanal com ragù de carne bovina e pancetta, cozido lentamente por 4 horas",
    price: 62,
    category: "Massas",
    badge: "Mais Pedido",
  },
  {
    emoji: "🍕",
    name: "Pizza Margherita Verace",
    description: "Massa napolitana, molho de tomate San Marzano, mozzarella di bufala e manjericão fresco",
    price: 54,
    category: "Pizzas",
    badge: null,
  },
  {
    emoji: "🥗",
    name: "Insalata Caprese",
    description: "Tomate heirloom, mozzarella de búfala importada, manjericão e azeite extravirgem siciliano",
    price: 42,
    category: "Entradas",
    badge: "Vegano",
  },
  {
    emoji: "🍷",
    name: "Ossobuco alla Milanese",
    description: "Jarrete de vitela braseado com gremolata, açafrão e risotto alla milanese",
    price: 89,
    category: "Pratos",
    badge: "Chef Indica",
  },
  {
    emoji: "🍨",
    name: "Tiramisù della Casa",
    description: "Receita original com mascarpone, espresso, savoiardi e cacau belga em pó",
    price: 38,
    category: "Sobremesas",
    badge: null,
  },
  {
    emoji: "🥩",
    name: "Bistecca Fiorentina",
    description: "Costata de novilho angus 400g, grelhada na brasa, alecrim e manteiga composta de ervas",
    price: 89,
    category: "Pratos",
    badge: "Premium",
  },
  {
    emoji: "🦐",
    name: "Linguine alle Vongole",
    description: "Linguine com vôngoles frescos, vinho branco, alho, pimenta calabresa e salsinha",
    price: 74,
    category: "Massas",
    badge: null,
  },
  {
    emoji: "🍞",
    name: "Bruschetta al Pomodoro",
    description: "Pão ciabatta tostado, tomate concassé, alho, azeite extravirgem e manjericão",
    price: 32,
    category: "Entradas",
    badge: null,
  },
];

const testimonials = [
  {
    emoji: "🍝",
    name: "Fernanda Oliveira",
    role: "Cliente há 5 anos",
    stars: 5,
    text: "O melhor restaurante italiano de Porto Alegre. O Tagliatelle al Ragù é simplesmente perfeito — parece que estamos na Itália.",
  },
  {
    emoji: "🥂",
    name: "Ricardo Mendes",
    role: "Empresário",
    stars: 5,
    text: "Ambiente sofisticado, atendimento impecável e uma carta de vinhos incrível. Perfeito para jantares de negócios.",
  },
  {
    emoji: "🍕",
    name: "Ana Carolina Lima",
    role: "Influenciadora Gastronômica",
    stars: 5,
    text: "A pizza Margherita é autêntica como em Nápoles. La Piazza é um patrimônio gastronômico de Porto Alegre.",
  },
];

const hours = [
  { day: "Segunda", time: "12h – 23h" },
  { day: "Terça", time: "12h – 23h" },
  { day: "Quarta", time: "12h – 23h" },
  { day: "Quinta", time: "12h – 23h" },
  { day: "Sexta", time: "12h – 00h" },
  { day: "Sábado", time: "11h – 00h" },
  { day: "Domingo", time: "11h – 22h" },
];

const categories = ["Todos", "Entradas", "Massas", "Pizzas", "Pratos", "Sobremesas"];

const WA_LINK = "https://wa.me/5551993777314";

// ─── ANIMATIONS ──────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function BadgePill({ label }: { label: string }) {
  const colors: Record<string, string> = {
    "Mais Pedido": "bg-amber-500/20 text-amber-400 border-amber-500/30",
    "Chef Indica": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    Premium: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    Vegano: "bg-green-500/20 text-green-400 border-green-500/30",
  };
  return (
    <span
      className={`text-[10px] font-semibold tracking-widest uppercase border rounded-full px-2 py-0.5 ${
        colors[label] ?? "bg-white/10 text-white/60 border-white/20"
      }`}
    >
      {label}
    </span>
  );
}

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function RestaurantePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroParallax = useTransform(scrollYProgress, [0, 0.4], [0, -80]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filteredItems =
    activeCategory === "Todos"
      ? menuItems
      : menuItems.filter((i) => i.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans overflow-x-hidden">
      {/* ── PROGRESS BAR ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-emerald-500 origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* ═══════════════════════════════════════════════════════════════ NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0d0d0d]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/40"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#hero"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500/20 transition-all duration-300">
              <Utensils size={18} className="text-emerald-400" />
            </div>
            <div className="leading-none">
              <span className="block text-lg font-bold tracking-tight text-white">
                La Piazza
              </span>
              <span className="block text-[10px] tracking-[0.2em] uppercase text-emerald-500/80 font-medium">
                Ristorante
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
            {["Cardápio", "Sobre", "Reserva", "Contato"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.2 }}
                className="hover:text-emerald-400 transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-emerald-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm px-4 py-2 rounded-lg transition-all duration-200 shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle size={15} />
              Reservar
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#111]/95 backdrop-blur-xl border-b border-white/5"
            >
              <div className="px-4 py-4 flex flex-col gap-4 text-sm text-white/70">
                {["Cardápio", "Sobre", "Reserva", "Contato"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileOpen(false)}
                    className="hover:text-emerald-400 transition-colors py-1 border-b border-white/5"
                  >
                    {item}
                  </a>
                ))}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-500 text-black font-semibold py-2.5 rounded-lg mt-1"
                >
                  <MessageCircle size={16} />
                  Reservar pelo WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ═══════════════════════════════════════════════════════════════ HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background layers */}
        <div className="absolute inset-0 bg-[#0d0d0d]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_70%_70%,rgba(245,158,11,0.06),transparent)]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating orbs */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-amber-500/5 blur-3xl pointer-events-none"
        />

        <motion.div
          style={{ y: heroParallax }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-emerald-400">
              Cucina Italiana Autentica
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.05]"
          >
            <span className="block text-white">Sabores da</span>
            <span className="block bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-400 bg-clip-text text-transparent">
              Itália
            </span>
            <span className="block text-white/90 text-4xl sm:text-5xl md:text-6xl font-light mt-1">
              em cada prato
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/50 text-lg sm:text-xl max-w-xl mx-auto mb-4 leading-relaxed"
          >
            Trinta anos de tradição, ingredientes importados e receitas que atravessaram o Atlântico.
          </motion.p>

          {/* Hours badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="flex items-center justify-center gap-2 text-amber-400/80 text-sm mb-10"
          >
            <Clock size={14} />
            <span>Aberto todos os dias das 12h às 23h</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#cardapio"
              className="group flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-base px-7 py-3.5 rounded-xl transition-all duration-200 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-400/30 hover:scale-[1.03]"
            >
              <Utensils size={18} />
              Ver Cardápio
              <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/40 text-white font-semibold text-base px-7 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.03]"
            >
              <MessageCircle size={18} className="text-emerald-400" />
              Fazer Reserva
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-1.5 text-white/20"
            >
              <span className="text-[10px] tracking-widest uppercase">Explorar</span>
              <ChevronDown size={16} />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════ STATS STRIP */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "30+", label: "Anos de tradição" },
            { value: "120", label: "Lugares disponíveis" },
            { value: "4.9★", label: "Avaliação média" },
            { value: "50+", label: "Pratos no cardápio" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-3xl font-bold text-emerald-400 mb-1">{s.value}</div>
              <div className="text-xs text-white/40 tracking-wide uppercase">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ CARDÁPIO */}
      <section id="cardapio" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-500 mb-3 block">
              — Il Menù —
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Nosso Cardápio
            </h2>
            <p className="text-white/40 max-w-md mx-auto">
              Ingredientes selecionados importados diretamente da Itália, preparados com técnica e amor
            </p>
          </motion.div>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-emerald-500 border-emerald-500 text-black shadow-lg shadow-emerald-500/20"
                    : "bg-white/5 border-white/10 text-white/60 hover:border-emerald-500/40 hover:text-emerald-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Menu grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.name}
                  layout
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="group relative bg-white/[0.03] border border-white/8 rounded-2xl p-5 flex flex-col gap-4 hover:border-emerald-500/40 hover:bg-white/[0.06] transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5 cursor-pointer"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

                  {/* Badge */}
                  {item.badge && (
                    <div className="absolute top-4 right-4">
                      <BadgePill label={item.badge} />
                    </div>
                  )}

                  {/* Emoji */}
                  <div className="text-5xl leading-none select-none">{item.emoji}</div>

                  <div className="flex-1">
                    <h3 className="font-bold text-white text-base mb-1.5 leading-snug group-hover:text-emerald-100 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-white/40 text-xs leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <span className="text-emerald-400 font-bold text-lg">
                      R${item.price}
                      <span className="text-white/30 text-sm font-normal">,00</span>
                    </span>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-500/10 hover:bg-emerald-500 border border-emerald-500/30 hover:border-emerald-500 text-emerald-400 hover:text-black text-xs font-semibold px-4 py-1.5 rounded-lg transition-all duration-200"
                    >
                      Pedir
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View more */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium border border-emerald-500/20 hover:border-emerald-500/40 px-6 py-2.5 rounded-xl transition-all duration-200"
            >
              <MessageCircle size={15} />
              Ver cardápio completo via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ ABOUT */}
      <section id="sobre" className="py-24 px-4 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-500 mb-4 block">
              — La Nostra Storia —
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              30 anos servindo o{" "}
              <span className="text-emerald-400">melhor</span> da culinária italiana
            </h2>
            <p className="text-white/50 leading-relaxed mb-5">
              Fundado em 1994 pelo Chef Marco Conti e sua esposa Sofia, La Piazza nasceu do sonho de trazer a autêntica culinária da Toscana para Porto Alegre. Com ingredientes importados diretamente da Itália e receitas que passam de geração em geração, cada prato conta uma história.
            </p>
            <p className="text-white/40 leading-relaxed mb-8 text-sm">
              Nossa massa é feita artesanalmente todos os dias pela manhã. Nosso azeite vem da Sicília. Nossos vinhos são cuidadosamente selecionados nas regiões de Toscana, Piemonte e Veneto.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Ingredientes Importados", "Massa Artesanal", "Vinhos Selecionados", "Família desde 1994"].map((tag) => (
                <span
                  key={tag}
                  className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium px-3 py-1.5 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative bg-gradient-to-br from-emerald-950/60 to-[#0d0d0d] border border-emerald-500/20 rounded-3xl p-8 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.12),transparent_60%)]" />
              <div className="relative z-10">
                <div className="text-7xl mb-6 leading-none">🍝</div>
                <h3 className="text-2xl font-bold text-white mb-2">Chef Marco Conti</h3>
                <p className="text-emerald-400 text-sm font-medium mb-4">Fundador & Chef Executivo</p>
                <p className="text-white/40 text-sm leading-relaxed">
                  "Cozinhar não é apenas alimentar o corpo — é nutrir a alma. Cada prato que sai da minha cozinha carrega um pedaço da Itália que tanto amo."
                </p>
                <div className="mt-6 pt-6 border-t border-white/5 grid grid-cols-3 gap-4 text-center">
                  {[
                    { n: "30+", l: "Anos" },
                    { n: "50k+", l: "Clientes" },
                    { n: "12", l: "Prêmios" },
                  ].map((s) => (
                    <div key={s.l}>
                      <div className="text-xl font-bold text-emerald-400">{s.n}</div>
                      <div className="text-white/30 text-xs mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating amenities */}
            <div className="absolute -bottom-4 -left-4 bg-[#1a1a1a] border border-white/10 rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Wine size={18} className="text-amber-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Carta de Vinhos</div>
                  <div className="text-white/40 text-xs">80+ rótulos italianos</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ AMENITIES */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Wifi, label: "Wi-Fi Grátis" },
            { icon: CreditCard, label: "Cartão Aceito" },
            { icon: ParkingSquare, label: "Estacionamento" },
            { icon: Wine, label: "Carta de Vinhos" },
          ].map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center gap-3 bg-white/[0.03] border border-white/8 rounded-2xl py-6 px-4 text-center hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <Icon size={18} className="text-emerald-400" />
              </div>
              <span className="text-white/60 text-xs font-medium">{label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ RESERVA */}
      <section id="reserva" className="py-24 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-500 mb-3 block">
              — Prenota Ora —
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Fazer Reserva</h2>
            <p className="text-white/40 text-sm">
              Preencha os dados abaixo e enviaremos a confirmação pelo WhatsApp
            </p>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/[0.03] border border-white/8 rounded-3xl p-8 space-y-5"
          >
            {/* Fields */}
            {[
              { label: "Nome Completo", placeholder: "Seu nome", icon: "👤", type: "text" },
              { label: "Número de Pessoas", placeholder: "Ex: 4 pessoas", icon: "👥", type: "text" },
              { label: "Data Preferida", placeholder: "DD/MM/AAAA", icon: "📅", type: "text" },
              { label: "Horário Desejado", placeholder: "Ex: 20h00", icon: "🕗", type: "text" },
            ].map((field) => (
              <div key={field.label}>
                <label className="block text-white/60 text-xs font-semibold uppercase tracking-widest mb-2">
                  {field.label}
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base select-none pointer-events-none">
                    {field.icon}
                  </span>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-white/[0.05] border border-white/10 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 rounded-xl pl-11 pr-4 py-3 text-white placeholder-white/25 text-sm transition-all duration-200"
                  />
                </div>
              </div>
            ))}

            {/* Observations textarea */}
            <div>
              <label className="block text-white/60 text-xs font-semibold uppercase tracking-widest mb-2">
                Observações
              </label>
              <textarea
                rows={3}
                placeholder="Alergias, preferências, ocasião especial..."
                className="w-full bg-white/[0.05] border border-white/10 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm transition-all duration-200 resize-none"
              />
            </div>

            {/* CTA */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-base py-4 rounded-xl transition-all duration-200 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-400/30 hover:scale-[1.02] mt-2"
            >
              <MessageCircle size={20} />
              Reservar pelo WhatsApp
            </a>

            <p className="text-center text-white/25 text-xs">
              Você será redirecionado para o WhatsApp com os dados preenchidos
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ TESTIMONIALS */}
      <section className="py-24 px-4 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-500 mb-3 block">
              — Testimonianze —
            </span>
            <h2 className="text-4xl font-bold text-white">O que dizem nossos clientes</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                className="group bg-white/[0.03] border border-white/8 hover:border-emerald-500/30 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5"
              >
                <div className="flex items-start justify-between">
                  <div className="text-4xl">{t.emoji}</div>
                  <StarRow count={t.stars} />
                </div>
                <p className="text-white/55 text-sm leading-relaxed flex-1 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="pt-4 border-t border-white/5">
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-white/30 text-xs mt-0.5">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Overall rating */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-amber-500/5 border border-amber-500/15 rounded-2xl px-8 py-4">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={18} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <div className="text-amber-300 font-bold text-xl">4.9</div>
              <div className="text-white/30 text-sm">baseado em 2.4k avaliações</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ HOURS & LOCATION */}
      <section id="contato" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-500 mb-3 block">
              — Dove Siamo —
            </span>
            <h2 className="text-4xl font-bold text-white">Horários & Localização</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Hours card */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/[0.03] border border-white/8 rounded-2xl p-7"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <Clock size={16} className="text-emerald-400" />
                </div>
                <h3 className="font-bold text-white text-lg">Horário de Funcionamento</h3>
              </div>
              <div className="space-y-3">
                {hours.map((h, i) => {
                  const isToday = new Date().getDay() === (i === 6 ? 0 : i + 1);
                  return (
                    <div
                      key={h.day}
                      className={`flex items-center justify-between text-sm py-2 border-b border-white/5 last:border-0 ${
                        isToday ? "text-emerald-400" : "text-white/60"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {isToday && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        )}
                        <span className={isToday ? "font-semibold" : ""}>{h.day}</span>
                        {isToday && (
                          <span className="text-[10px] bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-full px-2 py-0.5 font-medium">
                            Hoje
                          </span>
                        )}
                      </div>
                      <span className={isToday ? "font-semibold text-emerald-400" : ""}>{h.time}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Location & contact card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              {/* Address */}
              <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <MapPin size={16} className="text-emerald-400" />
                  </div>
                  <h3 className="font-bold text-white text-lg">Endereço</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Rua dos Andradas, 1247 — Sala 01<br />
                  Centro Histórico<br />
                  Porto Alegre — RS, 90020-007
                </p>
                <div className="h-36 bg-white/[0.03] border border-white/8 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={28} className="text-emerald-400/40 mx-auto mb-2" />
                    <span className="text-white/20 text-xs">Mapa interativo</span>
                  </div>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <Phone size={16} className="text-emerald-400" />
                  </div>
                  <h3 className="font-bold text-white text-lg">Contato</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <a
                    href="tel:+5551993777314"
                    className="flex items-center gap-2 text-white/60 hover:text-emerald-400 transition-colors"
                  >
                    <Phone size={13} />
                    (51) 99377-7314
                  </a>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/60 hover:text-emerald-400 transition-colors"
                  >
                    <MessageCircle size={13} />
                    WhatsApp: (51) 99377-7314
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ FOOTER */}
      <footer className="border-t border-white/5 bg-[#080808]">
        {/* Top footer */}
        <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <Utensils size={18} className="text-emerald-400" />
              </div>
              <div>
                <span className="block text-lg font-bold text-white">La Piazza</span>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-emerald-500/70">
                  Ristorante Italiano
                </span>
              </div>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs mb-5">
              Autenticidade italiana no coração de Porto Alegre. Trinta anos de tradição, sabor e hospitalidade.
            </p>
            <div className="flex gap-3">
              {[
                { icon: IgIcon, label: "Instagram" },
                { icon: FbIcon, label: "Facebook" },
                { icon: MessageCircle, label: "WhatsApp", href: WA_LINK },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href ?? "#"}
                  target={href ? "_blank" : undefined}
                  rel={href ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/10 flex items-center justify-center text-white/40 hover:text-emerald-400 transition-all duration-200"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4 uppercase tracking-widest text-[11px]">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-white/35 text-sm">
              {["Cardápio", "Sobre Nós", "Reservas", "Contato", "Galeria"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4 uppercase tracking-widest text-[11px]">
              Informações
            </h4>
            <ul className="space-y-3 text-white/35 text-sm">
              <li className="flex gap-2">
                <MapPin size={13} className="text-emerald-500/60 mt-0.5 shrink-0" />
                <span>Rua dos Andradas, 1247, Porto Alegre — RS</span>
              </li>
              <li className="flex gap-2">
                <Clock size={13} className="text-emerald-500/60 mt-0.5 shrink-0" />
                <span>Seg–Dom: 12h às 23h</span>
              </li>
              <li className="flex gap-2">
                <Phone size={13} className="text-emerald-500/60 mt-0.5 shrink-0" />
                <span>(51) 99377-7314</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-white/5 px-4 py-5">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-white/20 text-xs">
            <span>© 2024 La Piazza Ristorante. Todos os direitos reservados.</span>
            <span className="flex items-center gap-1">
              Desenvolvido com <span className="text-red-400/60">♥</span> por{" "}
              <span className="text-emerald-500/60 font-medium">NautaWeb</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
