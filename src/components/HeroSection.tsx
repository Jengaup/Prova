"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#777F67]"
    >
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=80"
          alt="Ambiente del restaurante Prova Creole Grill"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlay: more opaque at top (navbar) and darker at center */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3d4436]/80 via-[#777F67]/70 to-[#777F67]/90" />
      </motion.div>

      {/* Main content — vertically centered */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 pt-28 pb-36">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="inline-flex flex-wrap justify-center items-center gap-2 bg-[#F4E3D0]/20 border border-[#F4E3D0]/30 backdrop-blur-sm text-[#F4E3D0] text-[11px] font-semibold tracking-[0.18em] uppercase px-5 py-2.5 rounded-full mb-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C12 2 5 9 5 15C5 18.9 8.1 22 12 22C15.9 22 19 18.9 19 15C19 9 12 2 12 2Z" />
            </svg>
            Gastronomía Criolla &amp; Internacional
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="font-display font-bold leading-[1.05] tracking-tight mb-6"
            style={{ color: "#F4E3D0", fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            Sabores que
            <br />
            <span style={{ color: "rgba(244,227,208,0.88)" }}>cuentan historias</span>
          </motion.h1>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
            className="w-16 h-px bg-[#F4E3D0]/40 mx-auto mb-6"
          />

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="text-[#F4E3D0]/80 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Tradición criolla, técnica internacional y un ambiente familiar inigualable.
            Una experiencia que va más allá del plato.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#reservas"
              className="inline-flex items-center gap-2 bg-[#F4E3D0] text-[#777F67] px-9 py-4 rounded-full font-semibold text-base hover:bg-white transition-all duration-200 shadow-xl hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto justify-center"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Reservar Mesa
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </a>
            <a
              href="#menu"
              className="inline-block border-2 border-[#F4E3D0]/50 text-[#F4E3D0] px-9 py-4 rounded-full font-semibold text-base hover:border-[#F4E3D0] hover:bg-[#F4E3D0]/10 transition-all duration-200 cursor-pointer w-full sm:w-auto text-center"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Ver Menú
            </a>
          </motion.div>
        </div>
      </div>

      {/* Stats bar — pinned to bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
        className="relative z-10 border-t border-[#F4E3D0]/15 bg-[#2c2c2c]/30 backdrop-blur-sm"
      >
        <div className="max-w-4xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "10+", label: "Años de experiencia" },
            { value: "500+", label: "Clientes al mes" },
            { value: "40+", label: "Platos en carta" },
            { value: "★ 4.9", label: "Calificación" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-[#F4E3D0] text-2xl md:text-3xl font-bold font-display">
                {stat.value}
              </p>
              <p
                className="text-[#F4E3D0]/55 text-xs mt-0.5 tracking-wide"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-[#F4E3D0]/35 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[#F4E3D0]/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
