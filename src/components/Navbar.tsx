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
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#777F67]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group cursor-pointer">
          <div className="flex items-center gap-2">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
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
              <span
                className="text-[#F4E3D0] font-display font-bold text-2xl tracking-tight leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                PROVA
              </span>
              <p
                className="text-[#F4E3D0]/70 text-[9px] tracking-[0.25em] uppercase leading-none"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Creole Grill
              </p>
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#F4E3D0]/80 hover:text-[#F4E3D0] text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservas"
            className="bg-[#F4E3D0] text-[#777F67] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white transition-colors duration-200 cursor-pointer shadow-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Reservar Mesa
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#F4E3D0] cursor-pointer p-2"
          aria-label="Abrir menú"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <>
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#777F67]/98 backdrop-blur-md border-t border-[#F4E3D0]/10"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#F4E3D0]/80 hover:text-[#F4E3D0] text-sm font-medium py-2 border-b border-[#F4E3D0]/10 cursor-pointer"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#reservas"
                onClick={() => setMobileOpen(false)}
                className="bg-[#F4E3D0] text-[#777F67] px-5 py-3 rounded-full text-sm font-semibold text-center cursor-pointer mt-2"
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
