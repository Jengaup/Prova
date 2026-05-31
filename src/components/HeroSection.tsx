"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#777F67]"
    >
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=80"
          alt="Ambiente del restaurante Prova Creole Grill"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#777F67]/75" />
      </motion.div>

      {/* Decorative flame pattern */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <svg
            key={i}
            className="absolute"
            style={{
              left: `${10 + i * 15}%`,
              top: `${5 + (i % 3) * 30}%`,
              transform: `rotate(${i * 25}deg) scale(${0.8 + (i % 2) * 0.6})`,
            }}
            width="80"
            height="120"
            viewBox="0 0 80 120"
            fill="none"
          >
            <path
              d="M40 5C40 5 10 35 10 65C10 82.7 23.4 97 40 97C56.6 97 70 82.7 70 65C70 35 40 5 40 5Z"
              fill="#F4E3D0"
            />
          </svg>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-[#F4E3D0]/15 border border-[#F4E3D0]/25 backdrop-blur-sm text-[#F4E3D0] text-xs font-medium tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C12 2 5 9 5 15C5 18.9 8.1 22 12 22C15.9 22 19 18.9 19 15C19 9 12 2 12 2Z" />
          </svg>
          Gastronomía Criolla &amp; Internacional
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="text-[#F4E3D0] font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4"
        >
          Sabores que
          <br />
          <em className="not-italic text-[#F4E3D0]/90">cuentan historias</em>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="text-[#F4E3D0]/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          En Prova, cada plato es una fusión de tradición criolla y técnica internacional.
          Ven a disfrutar de una experiencia culinaria única en familia.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#reservas"
            className="bg-[#F4E3D0] text-[#777F67] px-8 py-4 rounded-full font-semibold text-base hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Reservar Mesa
          </a>
          <a
            href="#menu"
            className="border border-[#F4E3D0]/50 text-[#F4E3D0] px-8 py-4 rounded-full font-semibold text-base hover:bg-[#F4E3D0]/10 transition-all duration-200 cursor-pointer"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Ver Menú
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.9, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-8 mt-20 pt-10 border-t border-[#F4E3D0]/15"
        >
          {[
            { value: "10+", label: "Años de experiencia" },
            { value: "500+", label: "Clientes felices al mes" },
            { value: "40+", label: "Platos en carta" },
            { value: "★ 4.9", label: "Calificación promedio" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-[#F4E3D0] text-3xl font-bold font-display">
                {stat.value}
              </p>
              <p
                className="text-[#F4E3D0]/60 text-xs mt-1 tracking-wider"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-[#F4E3D0]/40 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[#F4E3D0]/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
