"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NautaLogoFull } from "./NautaLogo";

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

  return (
    <nav className="relative z-20 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#" aria-label="NautaWeb — início">
          <NautaLogoFull />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/60 hover:text-white transition-colors duration-200 font-medium"
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
          className="md:hidden text-white/60 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/[0.06] bg-black/60 backdrop-blur-xl px-6 py-5 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-white/60 hover:text-white text-sm font-medium transition-colors"
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
