"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Preços", href: "#precos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Planos", href: "#planos" },
  { label: "Depoimentos", href: "#depoimentos" },
];

const WA_URL =
  "https://wa.me/5551993777314?text=Ol%C3%A1%2C%20quero%20um%20site%20com%20a%20NautaWeb";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-white/10 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center glow-purple shadow-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L20 7V12C20 16.4 16.4 20.4 12 22C7.6 20.4 4 16.4 4 12V7L12 2Z" fill="white" fillOpacity="0.9"/>
              <path d="M9 12L11 14L15 10" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            Nauta<span className="text-gradient">Web</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 hover:text-white transition-colors duration-200 font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-700 to-purple-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-purple-900/40 glow-purple"
          >
            Fale no WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-white/10 px-6 py-5 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-white/70 hover:text-white text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center px-5 py-3 rounded-xl bg-gradient-to-r from-purple-700 to-purple-500 text-white text-sm font-semibold"
          >
            Fale no WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
