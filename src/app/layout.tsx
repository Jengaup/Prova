import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prova Creole Grill — Gastronomía Criolla e Internacional",
  description:
    "Bienvenido a Prova Creole Grill, donde la tradición criolla se fusiona con sabores internacionales. Almuerzos especiales, menú a la carta, tragos, cervezas y postres en un ambiente familiar de primer nivel.",
  keywords: "Prova, Creole Grill, restaurante criollo, gastronomía, almuerzo, carta, tragos, postres",
  openGraph: {
    title: "Prova Creole Grill",
    description: "Gastronomía criolla e internacional con excelente servicio y ambiente familiar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#fdf6ee]">{children}</body>
    </html>
  );
}
