"use client";

import { motion, useInView } from "framer-motion";
import {
  Coffee,
  MapPin,
  Clock,
  Phone,
  Star,
  Truck,
  ShoppingBag,
  ChevronDown,
  MessageCircle,
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
import { useRef } from "react";

const WA_LINK = "https://wa.me/5551993777314";

const products = [
  {
    emoji: "🍞",
    name: "Pão Francês",
    description: "Crocante por fora, macio por dentro. Assado toda manhã às 6h.",
    price: "R$0,80",
    unit: "/unidade",
    gradient: "from-amber-900/60 to-yellow-800/40",
  },
  {
    emoji: "🥐",
    name: "Croissant de Manteiga",
    description: "Folhado artesanal com manteiga francesa importada.",
    price: "R$8,90",
    unit: "",
    gradient: "from-orange-900/60 to-amber-800/40",
  },
  {
    emoji: "☕",
    name: "Café Especial",
    description: "Grãos selecionados da Serra Gaúcha, torra média.",
    price: "R$9,50",
    unit: "",
    gradient: "from-stone-900/60 to-amber-900/40",
  },
  {
    emoji: "🎂",
    name: "Bolo de Cenoura",
    description: "Receita da Nonna Rossi, cobertura de chocolate belga.",
    price: "R$45,00",
    unit: "/inteiro",
    gradient: "from-orange-900/60 to-red-900/40",
  },
  {
    emoji: "🫓",
    name: "Coxinha da Feira",
    description: "Massa crocante, recheio de frango desfiado temperado.",
    price: "R$6,50",
    unit: "",
    gradient: "from-yellow-900/60 to-orange-900/40",
  },
  {
    emoji: "🧺",
    name: "Kit Café da Manhã",
    description: "Pão, croissant, café, geleia e queijo minas para 2 pessoas.",
    price: "R$59,90",
    unit: "",
    gradient: "from-amber-900/60 to-stone-800/40",
  },
];

const testimonials = [
  {
    name: "Ana Paula Souza",
    text: "A melhor padaria de Porto Alegre! O pão francês é incomparável e o café especial faz meu dia muito melhor. Frequento há 10 anos.",
    stars: 5,
    role: "Cliente fiel",
  },
  {
    name: "Carlos Menezes",
    text: "Kit café da manhã perfeito para receber visitas. Entregaram no horário certo e embalado com muito carinho. Recomendo!",
    stars: 5,
    role: "Cliente recorrente",
  },
  {
    name: "Mariana Teixeira",
    text: "O bolo de cenoura da Bella Vista é lendário no bairro. Peço sempre nos aniversários da família. Qualidade incrível!",
    stars: 5,
    role: "Cliente desde 2015",
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
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ComercioDemoPage() {
  return (
    <div className="min-h-screen font-sans" style={{ background: "#0f0a05", color: "#f5e6d3" }}>
      {/* ── NAVBAR ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{
          background: "rgba(15,10,5,0.85)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(245,158,11,0.15)",
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#f59e0b,#d97706)" }}
          >
            <Coffee size={18} color="#0f0a05" strokeWidth={2.2} />
          </div>
          <div>
            <span className="font-bold text-base tracking-tight" style={{ color: "#f5e6d3" }}>
              Bella Vista
            </span>
            <span className="hidden sm:inline text-xs ml-1" style={{ color: "#f59e0b" }}>
              Padaria & Café
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "#c8a97e" }}>
          <a href="#produtos" className="hover:text-amber-400 transition-colors">Produtos</a>
          <a href="#sobre" className="hover:text-amber-400 transition-colors">Sobre</a>
          <a href="#entrega" className="hover:text-amber-400 transition-colors">Entrega</a>
          <a href="#depoimentos" className="hover:text-amber-400 transition-colors">Depoimentos</a>
        </div>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
          style={{ background: "linear-gradient(135deg,#f59e0b,#d97706)", color: "#0f0a05" }}
        >
          <MessageCircle size={15} />
          <span className="hidden sm:inline">Pedir agora</span>
        </a>
      </nav>

      {/* ── HERO ── */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 pt-36 pb-28 overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        {/* Background glow blobs */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(245,158,11,0.13) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(217,119,6,0.10) 0%, transparent 60%)",
          }}
        />
        {/* Grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 mb-6 text-7xl"
        >
          ☕
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-10 text-sm font-semibold tracking-widest uppercase mb-4"
          style={{ color: "#f59e0b" }}
        >
          Padaria & Café Bella Vista — Porto Alegre
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10 font-extrabold leading-tight mb-5 max-w-3xl"
          style={{
            fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
            background: "linear-gradient(135deg, #f5e6d3 0%, #f59e0b 50%, #d97706 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Pães fresquinhos e cafés especiais todo dia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="relative z-10 text-lg max-w-xl mb-10"
          style={{ color: "#c8a97e" }}
        >
          Feitos com amor desde 1998 pela família Rossi. Sabor autêntico, qualidade garantida.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative z-10 flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-105 hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg,#f59e0b,#d97706)",
              color: "#0f0a05",
              boxShadow: "0 8px 32px rgba(245,158,11,0.35)",
            }}
          >
            <MessageCircle size={20} />
            Fazer pedido pelo WhatsApp
          </a>
          <a
            href="#produtos"
            className="flex items-center gap-2 px-6 py-4 rounded-full font-semibold text-sm border transition-all hover:scale-105"
            style={{ borderColor: "rgba(245,158,11,0.4)", color: "#f59e0b" }}
          >
            Ver cardápio
            <ChevronDown size={16} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          style={{ color: "rgba(245,158,11,0.4)" }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section id="produtos" className="px-6 py-24 max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#f59e0b" }}>
            Nosso Cardápio
          </p>
          <h2 className="font-extrabold text-4xl md:text-5xl mb-4" style={{ color: "#f5e6d3" }}>
            Feitos com carinho
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: "#9a7a5a" }}>
            Produtos artesanais preparados diariamente com ingredientes selecionados.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <FadeIn key={product.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{
                  background: "rgba(30,18,8,0.9)",
                  border: "1px solid rgba(245,158,11,0.12)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                }}
              >
                {/* Emoji visual area */}
                <div
                  className={`relative h-44 flex items-center justify-center bg-gradient-to-br ${product.gradient}`}
                  style={{ fontSize: "5rem" }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, rgba(245,158,11,0.08) 0%, transparent 70%)",
                    }}
                  />
                  <span className="relative z-10 drop-shadow-lg">{product.emoji}</span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-lg mb-1" style={{ color: "#f5e6d3" }}>
                    {product.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "#9a7a5a" }}>
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-extrabold text-xl" style={{ color: "#f59e0b" }}>
                        {product.price}
                      </span>
                      {product.unit && (
                        <span className="text-xs ml-1" style={{ color: "#9a7a5a" }}>
                          {product.unit}
                        </span>
                      )}
                    </div>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-full font-semibold text-sm transition-all hover:scale-105"
                      style={{
                        background: "linear-gradient(135deg,#f59e0b,#d97706)",
                        color: "#0f0a05",
                      }}
                    >
                      Pedir
                    </a>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="sobre"
        className="py-24 px-6"
        style={{ background: "rgba(25,15,5,0.8)", borderTop: "1px solid rgba(245,158,11,0.08)" }}
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div
              className="rounded-3xl h-80 flex items-center justify-center text-8xl relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1a0d02, #2d1a06)",
                border: "1px solid rgba(245,158,11,0.15)",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 30% 40%, rgba(245,158,11,0.15) 0%, transparent 60%)",
                }}
              />
              <span className="relative z-10">👨‍👩‍👧‍👦</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#f59e0b" }}>
              Nossa História
            </p>
            <h2 className="font-extrabold text-3xl md:text-4xl mb-6 leading-tight" style={{ color: "#f5e6d3" }}>
              A família Rossi há 25 anos servindo Porto Alegre
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#9a7a5a" }}>
              Em 1998, Giovanni e Maria Rossi abriram as portas da Bella Vista com uma receita simples: ingredientes frescos, receitas de família e muito amor no preparo.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#9a7a5a" }}>
              Hoje, a segunda geração mantém viva essa tradição, com a mesma dedicação de sempre. Cada pão, cada café, cada bolo é feito com o cuidado de quem cozinha para a própria família.
            </p>
            <div className="flex flex-wrap gap-6">
              {[
                { value: "25+", label: "Anos de história" },
                { value: "50+", label: "Produtos artesanais" },
                { value: "1000+", label: "Clientes felizes/dia" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-extrabold text-2xl" style={{ color: "#f59e0b" }}>
                    {stat.value}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "#9a7a5a" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── DELIVERY INFO ── */}
      <section id="entrega" className="px-6 py-24 max-w-5xl mx-auto">
        <FadeIn className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#f59e0b" }}>
            Como Funciona
          </p>
          <h2 className="font-extrabold text-4xl mb-4" style={{ color: "#f5e6d3" }}>
            Pedido fácil e rápido
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Truck size={28} />,
              title: "Entrega em casa",
              items: ["Porto Alegre e região", "Mínimo R$25,00", "Grátis acima de R$80,00", "30–60 min"],
            },
            {
              icon: <ShoppingBag size={28} />,
              title: "Retirada no balcão",
              items: ["Av. Protásio Alves, 1250", "Bairro Petrópolis", "Sem taxa adicional", "Pronto em 15 min"],
            },
            {
              icon: <Clock size={28} />,
              title: "Horários",
              items: ["Seg–Sex: 6h–20h", "Sábados: 6h–18h", "Domingos: 7h–13h", "Feriados: consultar"],
            },
          ].map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-2xl p-7 h-full"
                style={{
                  background: "rgba(30,18,8,0.9)",
                  border: "1px solid rgba(245,158,11,0.12)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: "linear-gradient(135deg,rgba(245,158,11,0.2),rgba(217,119,6,0.1))",
                    color: "#f59e0b",
                    border: "1px solid rgba(245,158,11,0.2)",
                  }}
                >
                  {card.icon}
                </div>
                <h3 className="font-bold text-lg mb-4" style={{ color: "#f5e6d3" }}>
                  {card.title}
                </h3>
                <ul className="space-y-2">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "#9a7a5a" }}>
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#f59e0b" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-10 text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-base transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg,#f59e0b,#d97706)",
              color: "#0f0a05",
              boxShadow: "0 8px 32px rgba(245,158,11,0.3)",
            }}
          >
            <MessageCircle size={20} />
            Fazer pedido agora pelo WhatsApp
          </a>
        </FadeIn>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        id="depoimentos"
        className="py-24 px-6"
        style={{ background: "rgba(20,12,4,0.9)", borderTop: "1px solid rgba(245,158,11,0.08)" }}
      >
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#f59e0b" }}>
              Depoimentos
            </p>
            <h2 className="font-extrabold text-4xl" style={{ color: "#f5e6d3" }}>
              O que nossos clientes dizem
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl p-7 flex flex-col"
                  style={{
                    background: "rgba(30,18,8,0.9)",
                    border: "1px solid rgba(245,158,11,0.12)",
                  }}
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, si) => (
                      <Star key={si} size={14} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed mb-6 flex-1 italic" style={{ color: "#c8a97e" }}>
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                      style={{
                        background: "linear-gradient(135deg,#f59e0b,#d97706)",
                        color: "#0f0a05",
                      }}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm" style={{ color: "#f5e6d3" }}>
                        {t.name}
                      </div>
                      <div className="text-xs" style={{ color: "#9a7a5a" }}>
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

      {/* ── FOOTER ── */}
      <footer
        className="py-16 px-6"
        style={{
          background: "#080500",
          borderTop: "1px solid rgba(245,158,11,0.12)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg,#f59e0b,#d97706)" }}
                >
                  <Coffee size={18} color="#0f0a05" strokeWidth={2.2} />
                </div>
                <span className="font-bold text-base" style={{ color: "#f5e6d3" }}>
                  Bella Vista
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#9a7a5a" }}>
                Padaria & Café artesanal em Porto Alegre. Feitos com amor desde 1998.
              </p>
              <div className="flex gap-4 mt-5">
                {[IgIcon, FbIcon].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{
                      background: "rgba(245,158,11,0.1)",
                      border: "1px solid rgba(245,158,11,0.2)",
                      color: "#f59e0b",
                    }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-sm mb-4" style={{ color: "#f5e6d3" }}>
                Navegação
              </h4>
              <ul className="space-y-2">
                {["Produtos", "Sobre nós", "Entrega", "Depoimentos"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm transition-colors hover:text-amber-400"
                      style={{ color: "#9a7a5a" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-sm mb-4" style={{ color: "#f5e6d3" }}>
                Contato
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm" style={{ color: "#9a7a5a" }}>
                  <MapPin size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#f59e0b" }} />
                  <span>Av. Protásio Alves, 1250 — Petrópolis, Porto Alegre</span>
                </div>
                <div className="flex items-center gap-3 text-sm" style={{ color: "#9a7a5a" }}>
                  <Phone size={15} className="flex-shrink-0" style={{ color: "#f59e0b" }} />
                  <span>(51) 99377-7314</span>
                </div>
                <div className="flex items-center gap-3 text-sm" style={{ color: "#9a7a5a" }}>
                  <Clock size={15} className="flex-shrink-0" style={{ color: "#f59e0b" }} />
                  <span>Seg–Sáb 6h–20h | Dom 7h–13h</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
            style={{ borderTop: "1px solid rgba(245,158,11,0.08)", color: "#6b5240" }}
          >
            <span>© 2024 Padaria & Café Bella Vista. Todos os direitos reservados.</span>
            <span style={{ color: "#f59e0b", opacity: 0.5 }}>Porto Alegre — RS</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
