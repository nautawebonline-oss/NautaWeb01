import { Mail, MessageCircle } from "lucide-react";

const WA_URL =
  "https://wa.me/5551993777314?text=Ol%C3%A1%2C%20quero%20um%20site%20com%20a%20NautaWeb";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Preços", href: "#precos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Planos", href: "#planos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 border-t border-white/08">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top row */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L20 7V12C20 16.4 16.4 20.4 12 22C7.6 20.4 4 16.4 4 12V7L12 2Z" fill="white" fillOpacity="0.9"/>
                  <path d="M9 12L11 14L15 10" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-lg font-bold text-white">
                Nauta<span className="text-gradient">Web</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Sites e aplicativos que geram resultados reais para o seu negócio.
              Design premium, entrega rápida e suporte contínuo.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-4">
              Navegação
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/40 hover:text-white/70 text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-4">
              Contato
            </p>
            <div className="space-y-3">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/40 hover:text-white/70 transition-colors duration-200"
              >
                <MessageCircle size={15} className="text-purple-500" />
                +55 51 99377-7314
              </a>
              <a
                href="mailto:nautawebonline@gmail.com"
                className="flex items-center gap-2.5 text-sm text-white/40 hover:text-white/70 transition-colors duration-200"
              >
                <Mail size={15} className="text-purple-500" />
                nautawebonline@gmail.com
              </a>
              <a
                href="https://instagram.com/nautaweb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/40 hover:text-white/70 transition-colors duration-200"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                @nautaweb
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/06 mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © 2025 NautaWeb. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">
            Desenvolvido com ❤️ pela NautaWeb
          </p>
        </div>
      </div>
    </footer>
  );
}
