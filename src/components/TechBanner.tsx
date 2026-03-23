"use client";

const techs = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js",
  "PostgreSQL", "Vercel", "Stripe", "Supabase", "Framer Motion",
  "SEO Técnico", "Google Analytics", "WhatsApp API", "Figma",
];

export default function TechBanner() {
  const doubled = [...techs, ...techs];

  return (
    <div className="py-10 relative border-y border-white/06 overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden">
        <div className="marquee-track flex items-center gap-8" style={{ width: "max-content" }}>
          {doubled.map((t, i) => (
            <div key={i} className="flex items-center gap-8 flex-shrink-0">
              <span className="text-white/25 text-sm font-medium whitespace-nowrap">
                {t}
              </span>
              <span className="w-1 h-1 rounded-full bg-purple-700 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
