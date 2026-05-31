"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Menú", href: "#menu" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#777F67] shadow-xl shadow-black/15"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2.5 group cursor-pointer">
          <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
            <path
              d="M18 4C18 4 10 12 10 20C10 24.4 13.6 28 18 28C22.4 28 26 24.4 26 20C26 12 18 4 18 4Z"
              fill="#F4E3D0"
            />
            <path
              d="M18 14C18 14 14 18 14 21C14 23.2 15.8 25 18 25C20.2 25 22 23.2 22 21C22 18 18 14 18 14Z"
              fill="#777F67"
            />
          </svg>
          <div>
            <span className="font-[family-name:var(--font-playfair)] text-[#F4E3D0] font-bold text-2xl tracking-tight leading-none block">
              PROVA
            </span>
            <p className="font-[family-name:var(--font-inter)] text-[#F4E3D0]/65 text-[9px] tracking-[0.28em] uppercase leading-none">
              Creole Grill
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-inter)] text-[#F4E3D0]/80 hover:text-[#F4E3D0] text-sm font-medium tracking-wide px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#reservas"
            className="hidden md:inline-flex font-[family-name:var(--font-inter)] items-center gap-2 bg-[#F4E3D0] text-[#777F67] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white transition-colors duration-200 cursor-pointer shadow-sm"
          >
            Reservar Mesa
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#F4E3D0] cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Abrir menú"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" as const }}
            className="md:hidden bg-[#777F67] border-t border-[#F4E3D0]/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-5 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-[family-name:var(--font-inter)] text-[#F4E3D0]/80 hover:text-[#F4E3D0] hover:bg-white/10 text-sm font-medium py-3 px-3 rounded-lg transition-all duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#reservas"
                onClick={() => setMobileOpen(false)}
                className="font-[family-name:var(--font-inter)] bg-[#F4E3D0] text-[#777F67] px-5 py-3.5 rounded-full text-sm font-semibold text-center cursor-pointer mt-3 hover:bg-white transition-colors"
              >
                Reservar Mesa
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
