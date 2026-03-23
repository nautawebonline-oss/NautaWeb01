import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NautaWeb — Sites e Apps que vendem por você",
  description:
    "Agência de desenvolvimento web premium. Landing pages, e-commerces e aplicativos sob medida. Design profissional, entrega rápida e suporte contínuo.",
  keywords: ["sites profissionais", "desenvolvimento web", "landing page", "e-commerce", "NautaWeb"],
  openGraph: {
    title: "NautaWeb — Sites e Apps que vendem por você",
    description:
      "Landing pages, e-commerces e aplicativos sob medida. Design premium com hospedagem inclusa.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
