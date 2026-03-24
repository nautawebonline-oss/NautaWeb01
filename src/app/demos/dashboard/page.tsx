"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  Package,
  BarChart2,
  Settings,
  Bell,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity,
  ChevronRight,
  CheckCircle2,
  Clock,
  XCircle,
  Star,
  Zap,
  UserPlus,
  ShoppingBag,
  RefreshCw,
  LogOut,
  Search,
  ArrowUpRight,
} from "lucide-react";

// ─── Animated counter ────────────────────────────────────────────────────────
function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 });
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    spring.on("change", (v) => {
      if (ref.current) {
        const formatted =
          decimals > 0
            ? v.toFixed(decimals).replace(".", ",")
            : Math.floor(v).toLocaleString("pt-BR");
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });
  }, [spring, prefix, suffix, decimals]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}

// ─── Sidebar nav items ────────────────────────────────────────────────────────
const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: ShoppingCart, label: "Pedidos", badge: 12 },
  { icon: Users, label: "Clientes" },
  { icon: Package, label: "Produtos" },
  { icon: BarChart2, label: "Relatórios" },
  { icon: Settings, label: "Configurações" },
];

// ─── Stats data ───────────────────────────────────────────────────────────────
const stats = [
  {
    label: "Receita do Mês",
    value: 47832,
    prefix: "R$ ",
    change: "+12%",
    up: true,
    icon: DollarSign,
    color: "from-cyan-500 to-blue-500",
    glow: "shadow-cyan-500/20",
  },
  {
    label: "Pedidos",
    value: 384,
    prefix: "",
    change: "+8%",
    up: true,
    icon: ShoppingCart,
    color: "from-blue-500 to-violet-500",
    glow: "shadow-blue-500/20",
  },
  {
    label: "Clientes Ativos",
    value: 1247,
    prefix: "",
    change: "+3%",
    up: true,
    icon: Users,
    color: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/20",
  },
  {
    label: "Taxa de Conversão",
    value: 3.8,
    prefix: "",
    suffix: "%",
    decimals: 1,
    change: "+0.5%",
    up: true,
    icon: Activity,
    color: "from-purple-500 to-pink-500",
    glow: "shadow-purple-500/20",
  },
];

// ─── Bar chart data ───────────────────────────────────────────────────────────
const barData = [
  { day: "Seg", value: 5200, height: 52 },
  { day: "Ter", value: 7800, height: 78 },
  { day: "Qua", value: 6100, height: 61 },
  { day: "Qui", value: 9400, height: 94 },
  { day: "Sex", value: 8700, height: 87 },
  { day: "Sáb", value: 5900, height: 59 },
  { day: "Dom", value: 4800, height: 48 },
];
const maxBar = Math.max(...barData.map((d) => d.value));

// ─── Donut data ───────────────────────────────────────────────────────────────
const donutData = [
  { label: "Entregue", pct: 65, color: "#06b6d4" },
  { label: "Em andamento", pct: 20, color: "#8b5cf6" },
  { label: "Cancelado", pct: 15, color: "#ef4444" },
];

// ─── Orders table ─────────────────────────────────────────────────────────────
const orders = [
  {
    id: "#8821",
    client: "Marina Costa",
    product: "Plano Pro",
    value: "R$ 297,00",
    status: "Entregue",
    date: "23/03/2026",
  },
  {
    id: "#8820",
    client: "Rafael Mendes",
    product: "Plano Starter",
    value: "R$ 97,00",
    status: "Pendente",
    date: "23/03/2026",
  },
  {
    id: "#8819",
    client: "Juliana Alves",
    product: "Plano Enterprise",
    value: "R$ 997,00",
    status: "Entregue",
    date: "22/03/2026",
  },
  {
    id: "#8818",
    client: "Carlos Nunes",
    product: "Plano Pro",
    value: "R$ 297,00",
    status: "Cancelado",
    date: "22/03/2026",
  },
  {
    id: "#8817",
    client: "Fernanda Lima",
    product: "Plano Starter",
    value: "R$ 97,00",
    status: "Entregue",
    date: "21/03/2026",
  },
  {
    id: "#8816",
    client: "Bruno Carvalho",
    product: "Plano Pro",
    value: "R$ 297,00",
    status: "Pendente",
    date: "21/03/2026",
  },
];

const statusConfig: Record<
  string,
  { color: string; bg: string; icon: React.ElementType }
> = {
  Entregue: {
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 border border-emerald-400/20",
    icon: CheckCircle2,
  },
  Pendente: {
    color: "text-amber-400",
    bg: "bg-amber-400/10 border border-amber-400/20",
    icon: Clock,
  },
  Cancelado: {
    color: "text-red-400",
    bg: "bg-red-400/10 border border-red-400/20",
    icon: XCircle,
  },
};

// ─── Top products ─────────────────────────────────────────────────────────────
const topProducts = [
  { rank: 1, name: "Plano Pro", units: 148, revenue: 43956, pct: 100 },
  { rank: 2, name: "Plano Enterprise", units: 42, revenue: 41874, pct: 95 },
  { rank: 3, name: "Plano Starter", units: 194, revenue: 18818, pct: 43 },
  { rank: 4, name: "Add-on Analytics", units: 87, revenue: 8613, pct: 20 },
  { rank: 5, name: "Add-on API", units: 53, revenue: 5247, pct: 12 },
];

// ─── Activity feed ────────────────────────────────────────────────────────────
const activities = [
  {
    icon: UserPlus,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    text: "Novo cliente cadastrado: Marina Costa",
    time: "há 3 min",
  },
  {
    icon: ShoppingBag,
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    text: "Pedido #8821 confirmado — R$ 297,00",
    time: "há 8 min",
  },
  {
    icon: RefreshCw,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    text: "Plano atualizado: Carlos Nunes → Pro",
    time: "há 22 min",
  },
  {
    icon: Zap,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    text: "Integração Stripe sincronizada com sucesso",
    time: "há 41 min",
  },
  {
    icon: Star,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    text: "Avaliação 5★ recebida de Fernanda Lima",
    time: "há 1h",
  },
];

// ─── Main component ───────────────────────────────────────────────────────────
export default function DashboardDemo() {
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <div
      className="flex h-screen w-full overflow-hidden"
      style={{ background: "#0a0a0f", fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── SIDEBAR ─────────────────────────────────────────────────────────── */}
      <aside
        className="flex flex-col shrink-0 border-r"
        style={{
          width: 240,
          background: "#0d0d15",
          borderColor: "rgba(255,255,255,0.06)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-5 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div
            className="flex items-center justify-center w-8 h-8 rounded-lg"
            style={{ background: "linear-gradient(135deg,#06b6d4,#8b5cf6)" }}
          >
            <Activity size={16} className="text-white" />
          </div>
          <span className="font-bold text-white text-base tracking-tight">
            NautaPanel
          </span>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          <p className="px-3 text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.25)" }}>
            Menu
          </p>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.label;
            return (
              <button
                key={item.label}
                onClick={() => setActiveNav(item.label)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group relative"
                style={{
                  background: isActive
                    ? "linear-gradient(135deg,rgba(6,182,212,0.15),rgba(139,92,246,0.15))"
                    : "transparent",
                  color: isActive ? "#e2e8f0" : "rgba(255,255,255,0.45)",
                }}
              >
                {isActive && (
                  <span
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-r-full"
                    style={{ background: "linear-gradient(#06b6d4,#8b5cf6)" }}
                  />
                )}
                <Icon
                  size={17}
                  style={{
                    color: isActive ? "#06b6d4" : "rgba(255,255,255,0.35)",
                  }}
                />
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <span
                    className="text-xs px-1.5 py-0.5 rounded-full font-semibold"
                    style={{
                      background: "rgba(6,182,212,0.2)",
                      color: "#06b6d4",
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* User at bottom */}
        <div className="px-4 py-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="flex items-center gap-3 px-2 py-2 rounded-xl cursor-pointer hover:bg-white/5 transition-colors">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
              style={{ background: "linear-gradient(135deg,#06b6d4,#8b5cf6)" }}
            >
              J
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-white truncate">João Silva</p>
              <p className="text-xs truncate" style={{ color: "rgba(255,255,255,0.35)" }}>
                Admin
              </p>
            </div>
            <LogOut size={14} style={{ color: "rgba(255,255,255,0.3)" }} />
          </div>
        </div>
      </aside>

      {/* ── MAIN CONTENT ────────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* TOP BAR */}
        <header
          className="flex items-center justify-between px-8 py-4 border-b shrink-0"
          style={{
            background: "rgba(13,13,21,0.8)",
            borderColor: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div>
            <h1 className="text-lg font-bold text-white">
              Bom dia, João! 👋
            </h1>
            <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
              Segunda-feira, 23 de março de 2026
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.35)",
              }}
            >
              <Search size={14} />
              <span className="text-xs hidden md:inline">Buscar...</span>
            </div>

            {/* Bell */}
            <button className="relative p-2 rounded-xl hover:bg-white/5 transition-colors">
              <Bell size={18} style={{ color: "rgba(255,255,255,0.6)" }} />
              <span
                className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
                style={{ background: "#06b6d4" }}
              />
            </button>

            {/* Avatar */}
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white cursor-pointer"
              style={{ background: "linear-gradient(135deg,#06b6d4,#8b5cf6)" }}
            >
              J
            </div>
          </div>
        </header>

        {/* SCROLLABLE BODY */}
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">

          {/* STATS ROW */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="relative rounded-2xl p-5 overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  {/* gradient orb */}
                  <div
                    className={`absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-20 bg-gradient-to-br ${s.color}`}
                  />

                  <div className="flex items-start justify-between relative">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${s.color} shadow-lg ${s.glow}`}
                    >
                      <Icon size={18} className="text-white" />
                    </div>
                    <span
                      className={`flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${
                        s.up
                          ? "bg-emerald-400/10 text-emerald-400"
                          : "bg-red-400/10 text-red-400"
                      }`}
                    >
                      {s.up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                      {s.change}
                    </span>
                  </div>

                  <div className="mt-4">
                    <p
                      className="text-xs font-medium mb-1"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      {s.label}
                    </p>
                    <p className="text-2xl font-bold text-white tabular-nums">
                      <AnimatedNumber
                        value={s.value}
                        prefix={s.prefix}
                        suffix={s.suffix ?? ""}
                        decimals={s.decimals ?? 0}
                      />
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CHARTS ROW */}
          <div className="grid grid-cols-5 gap-4">
            {/* BAR CHART — 3 cols */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="col-span-5 xl:col-span-3 rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-sm font-semibold text-white">
                    Receita dos últimos 7 dias
                  </h2>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                    Total: R$ 47.900
                  </p>
                </div>
                <button
                  className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg"
                  style={{
                    background: "rgba(6,182,212,0.1)",
                    color: "#06b6d4",
                    border: "1px solid rgba(6,182,212,0.2)",
                  }}
                >
                  Esta semana <ChevronRight size={12} />
                </button>
              </div>

              {/* Bars */}
              <div className="flex items-end justify-between gap-2 h-40">
                {barData.map((bar, i) => (
                  <div key={bar.day} className="flex-1 flex flex-col items-center gap-1.5">
                    {/* value label */}
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + i * 0.07 }}
                      className="text-xs font-medium tabular-nums"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {(bar.value / 1000).toFixed(1)}k
                    </motion.span>
                    {/* bar */}
                    <motion.div
                      className="w-full rounded-t-lg relative overflow-hidden cursor-pointer group"
                      style={{
                        height: `${(bar.value / maxBar) * 130}px`,
                        background:
                          "linear-gradient(180deg,#8b5cf6 0%,#06b6d4 100%)",
                        minHeight: 8,
                      }}
                      initial={{ scaleY: 0, originY: 1 }}
                      animate={{ scaleY: 1 }}
                      transition={{
                        delay: 0.4 + i * 0.07,
                        duration: 0.6,
                        ease: [0.34, 1.56, 0.64, 1],
                      }}
                    >
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-150" />
                    </motion.div>
                    {/* day label */}
                    <span
                      className="text-xs font-medium"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      {bar.day}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* DONUT CHART — 2 cols */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.5 }}
              className="col-span-5 xl:col-span-2 rounded-2xl p-6 flex flex-col"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="mb-6">
                <h2 className="text-sm font-semibold text-white">
                  Pedidos por Status
                </h2>
                <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Mês atual
                </p>
              </div>

              {/* Donut */}
              <div className="flex items-center justify-center flex-1">
                <div className="relative w-36 h-36">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.55, duration: 0.6, ease: "backOut" }}
                    className="w-full h-full rounded-full"
                    style={{
                      background: `conic-gradient(
                        #06b6d4 0% 65%,
                        #8b5cf6 65% 85%,
                        #ef4444 85% 100%
                      )`,
                    }}
                  />
                  {/* hole */}
                  <div
                    className="absolute inset-4 rounded-full flex items-center justify-center"
                    style={{ background: "#0d0d15" }}
                  >
                    <div className="text-center">
                      <p className="text-lg font-bold text-white">384</p>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                        pedidos
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="mt-5 space-y-2">
                {donutData.map((d) => (
                  <div key={d.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ background: d.color }}
                      />
                      <span className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                        {d.label}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-white">{d.pct}%</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ORDERS TABLE */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <h2 className="text-sm font-semibold text-white">Pedidos Recentes</h2>
              <button
                className="flex items-center gap-1.5 text-xs font-medium"
                style={{ color: "#06b6d4" }}
              >
                Ver todos <ArrowUpRight size={12} />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    {["#Pedido", "Cliente", "Produto", "Valor", "Status", "Data"].map(
                      (h) => (
                        <th
                          key={h}
                          className="text-left px-6 py-3 font-semibold uppercase tracking-wider"
                          style={{ color: "rgba(255,255,255,0.3)" }}
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o, i) => {
                    const cfg = statusConfig[o.status];
                    const StatusIcon = cfg.icon;
                    return (
                      <motion.tr
                        key={o.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.55 + i * 0.06 }}
                        className="hover:bg-white/[0.02] transition-colors cursor-pointer"
                        style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                      >
                        <td className="px-6 py-3.5 font-mono font-semibold" style={{ color: "#06b6d4" }}>
                          {o.id}
                        </td>
                        <td className="px-6 py-3.5 font-medium text-white">{o.client}</td>
                        <td className="px-6 py-3.5" style={{ color: "rgba(255,255,255,0.55)" }}>
                          {o.product}
                        </td>
                        <td className="px-6 py-3.5 font-semibold text-white">{o.value}</td>
                        <td className="px-6 py-3.5">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-medium ${cfg.color} ${cfg.bg}`}
                          >
                            <StatusIcon size={10} />
                            {o.status}
                          </span>
                        </td>
                        <td className="px-6 py-3.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                          {o.date}
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* BOTTOM ROW */}
          <div className="grid grid-cols-5 gap-4 pb-6">
            {/* TOP PRODUCTS */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="col-span-5 xl:col-span-3 rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-sm font-semibold text-white">Top Produtos</h2>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                  Este mês
                </span>
              </div>
              <div className="space-y-4">
                {topProducts.map((p, i) => (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.65 + i * 0.07 }}
                    className="flex items-center gap-4"
                  >
                    {/* Rank */}
                    <span
                      className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0"
                      style={{
                        background:
                          i === 0
                            ? "linear-gradient(135deg,#fbbf24,#f59e0b)"
                            : i === 1
                            ? "linear-gradient(135deg,#94a3b8,#64748b)"
                            : i === 2
                            ? "linear-gradient(135deg,#c97040,#a8602a)"
                            : "rgba(255,255,255,0.08)",
                        color: i < 3 ? "#fff" : "rgba(255,255,255,0.4)",
                      }}
                    >
                      {p.rank}
                    </span>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-medium text-white truncate">
                          {p.name}
                        </span>
                        <div className="flex items-center gap-3 shrink-0 ml-2">
                          <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                            {p.units} un.
                          </span>
                          <span className="text-xs font-semibold text-white">
                            R$ {p.revenue.toLocaleString("pt-BR")}
                          </span>
                        </div>
                      </div>
                      {/* Progress bar */}
                      <div
                        className="h-1.5 rounded-full overflow-hidden"
                        style={{ background: "rgba(255,255,255,0.07)" }}
                      >
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background:
                              "linear-gradient(90deg,#06b6d4,#8b5cf6)",
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: `${p.pct}%` }}
                          transition={{
                            delay: 0.7 + i * 0.07,
                            duration: 0.8,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ACTIVITY FEED */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.66, duration: 0.5 }}
              className="col-span-5 xl:col-span-2 rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-sm font-semibold text-white">Atividade Recente</h2>
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: "#06b6d4" }}
                />
              </div>
              <div className="space-y-4">
                {activities.map((a, i) => {
                  const Icon = a.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.72 + i * 0.07 }}
                      className="flex items-start gap-3"
                    >
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${a.bg}`}
                      >
                        <Icon size={13} className={a.color} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-xs leading-snug"
                          style={{ color: "rgba(255,255,255,0.7)" }}
                        >
                          {a.text}
                        </p>
                        <p
                          className="text-xs mt-0.5"
                          style={{ color: "rgba(255,255,255,0.3)" }}
                        >
                          {a.time}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* DEMO BADGE */}
      <div
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
        style={{
          background: "rgba(6,182,212,0.12)",
          border: "1px solid rgba(6,182,212,0.25)",
          color: "#06b6d4",
          backdropFilter: "blur(8px)",
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ background: "#06b6d4" }}
        />
        Demo — Desenvolvido por NautaWeb
      </div>
    </div>
  );
}
