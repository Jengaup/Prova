"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "10+", label: "Años de experiencia" },
  { value: "500+", label: "Clientes al mes" },
  { value: "40+", label: "Platos en carta" },
  { value: "★ 4.9", label: "Calificación" },
];

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" as const }}
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=80"
          alt="Ambiente del restaurante Prova Creole Grill"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Rich layered gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f16]/78 via-[#2c3526]/50 to-[#1a1f16]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f16]/25 via-transparent to-[#1a1f16]/15" />
      </motion.div>

      {/* Main content — vertically centered */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 pt-28 pb-40">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" as const }}
            className="inline-flex flex-wrap justify-center items-center gap-2 bg-[#F4E3D0]/12 border border-[#F4E3D0]/22 backdrop-blur-sm text-[#F4E3D0]/88 font-[family-name:var(--font-inter)] text-[10px] font-semibold tracking-[0.22em] uppercase px-5 py-2.5 rounded-full mb-9"
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="opacity-75">
              <path d="M12 2C12 2 5 9 5 15C5 18.9 8.1 22 12 22C15.9 22 19 18.9 19 15C19 9 12 2 12 2Z" />
            </svg>
            Gastronomía Criolla &amp; Internacional
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" as const }}
            className="font-[family-name:var(--font-playfair)] font-bold leading-[1.04] tracking-tight mb-6 text-[#F4E3D0]"
            style={{ fontSize: "clamp(3.2rem, 8.5vw, 6.5rem)" }}
          >
            Sabores que
            <br />
            <span className="italic text-[#F4E3D0]/85">cuentan historias</span>
          </motion.h1>

          {/* Ornamental divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.65, ease: "easeOut" as const }}
            className="flex items-center justify-center gap-3 mb-7"
          >
            <div className="w-14 h-px bg-[#F4E3D0]/30" />
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#F4E3D0" className="opacity-35">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" />
            </svg>
            <div className="w-14 h-px bg-[#F4E3D0]/30" />
          </motion.div>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" as const }}
            className="font-[family-name:var(--font-inter)] text-[#F4E3D0]/72 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed"
          >
            Tradición criolla, técnica internacional y un ambiente familiar inigualable.
            Una experiencia que va más allá del plato.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: "easeOut" as const }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#reservas"
              className="font-[family-name:var(--font-inter)] inline-flex items-center gap-2.5 bg-[#F4E3D0] text-[#777F67] px-9 py-4 rounded-full font-semibold text-base hover:bg-white transition-all duration-200 shadow-2xl hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto justify-center"
            >
              Reservar Mesa
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </a>
            <a
              href="#menu"
              className="font-[family-name:var(--font-inter)] inline-flex items-center justify-center border border-[#F4E3D0]/40 text-[#F4E3D0] px-9 py-4 rounded-full font-semibold text-base hover:border-[#F4E3D0]/80 hover:bg-[#F4E3D0]/10 transition-all duration-200 cursor-pointer w-full sm:w-auto"
            >
              Ver Menú
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-[7.5rem] left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-[#F4E3D0]/28 flex justify-center pt-2"
        >
          <div className="w-1 h-2.5 bg-[#F4E3D0]/42 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Stats bar — pinned to bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" as const }}
        className="relative z-10 border-t border-[#F4E3D0]/10 bg-[#1a1f16]/50 backdrop-blur-md"
      >
        <div className="max-w-4xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#F4E3D0]/10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center px-4 py-1">
              <p className="font-[family-name:var(--font-playfair)] text-[#F4E3D0] text-2xl md:text-3xl font-bold leading-tight">
                {stat.value}
              </p>
              <p className="font-[family-name:var(--font-inter)] text-[#F4E3D0]/48 text-[10px] mt-1 tracking-widest uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
