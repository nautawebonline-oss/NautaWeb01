interface NautaLogoProps {
  size?: number;
  className?: string;
}

export function NautaLogoIcon({ size = 40, className = "" }: NautaLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="nw-bg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2e0057" />
          <stop offset="55%" stopColor="#5b21b6" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="nw-diag" x1="12" y1="11" x2="36" y2="37" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="nw-wave" x1="6" y1="38" x2="42" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#c084fc" stopOpacity="0" />
          <stop offset="30%" stopColor="#a855f7" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#c084fc" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
        </linearGradient>
        <filter id="nw-glow">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background rounded square */}
      <rect width="48" height="48" rx="13" fill="url(#nw-bg)" />

      {/* Subtle inner glow top */}
      <rect
        width="48" height="24" rx="13"
        fill="white" fillOpacity="0.04"
      />

      {/* Left vertical bar of N */}
      <rect x="11" y="10" width="5" height="26" rx="2.5" fill="white" />

      {/* Right vertical bar of N */}
      <rect x="32" y="10" width="5" height="26" rx="2.5" fill="white" />

      {/* Diagonal bar of N — gradient purple */}
      <path
        d="M13.5 12 L34.5 36"
        stroke="url(#nw-diag)"
        strokeWidth="5"
        strokeLinecap="round"
        filter="url(#nw-glow)"
      />

      {/* Wave arc below — nautical element */}
      <path
        d="M7 40 Q14 34 24 40 Q34 46 41 40"
        stroke="url(#nw-wave)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function NautaLogoFull({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <NautaLogoIcon size={38} />
      <div className="flex flex-col leading-none">
        <span className="text-[17px] font-black tracking-tight text-white">
          Nauta<span
            style={{
              background: "linear-gradient(135deg, #c084fc 0%, #a855f7 60%, #7c3aed 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >Web</span>
        </span>
        <span className="text-[9px] tracking-[0.18em] uppercase text-white/35 font-medium mt-0.5">
          Sites · SEO · Suporte
        </span>
      </div>
    </div>
  );
}
