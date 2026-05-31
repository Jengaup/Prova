"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "María González",
    role: "Cliente habitual",
    avatar: "MG",
    rating: 5,
    text: "Prova se ha convertido en nuestro lugar favorito para almuerzos familiares. La calidad de los platos es increíble y el servicio es siempre atento y cálido. Las costillas a la parrilla son simplemente espectaculares.",
    date: "Noviembre 2024",
  },
  {
    name: "Carlos Mendoza",
    role: "Empresario",
    avatar: "CM",
    rating: 5,
    text: "Organicé el almuerzo anual de mi empresa en Prova y fue un éxito total. La comida superó todas las expectativas y el ambiente fue perfecto para el equipo. Volveremos sin duda el próximo año.",
    date: "Octubre 2024",
  },
  {
    name: "Ana Sofía Reyes",
    role: "Foodie & Blogger",
    avatar: "AR",
    rating: 5,
    text: "Como amante de la gastronomía, Prova me ha sorprendido enormemente. La fusión de sabores criollos con técnicas modernas es ejecutada con maestría. El ceviche y el arroz con mariscos son de otro nivel.",
    date: "Diciembre 2024",
  },
  {
    name: "Roberto Díaz",
    role: "Padre de familia",
    avatar: "RD",
    rating: 5,
    text: "Llevé a mi familia a celebrar el cumpleaños de mi esposa y fue una noche perfecta. Los niños quedaron fascinados con los postres y nosotros con los cocteles de autor. Un lugar especial para momentos especiales.",
    date: "Septiembre 2024",
  },
  {
    name: "Valentina Cruz",
    role: "Ejecutiva de ventas",
    avatar: "VC",
    rating: 5,
    text: "El ambiente de Prova es exactamente lo que buscaba para mis reuniones de trabajo. Elegante pero cómodo, con una carta que satisface tanto a carnívoros como a quienes prefieren opciones ligeras.",
    date: "Enero 2025",
  },
];

const stats = [
  { value: "4.9 / 5", label: "Calificación promedio" },
  { value: "1,200+", label: "Reseñas positivas" },
  { value: "98%", label: "Clientes satisfechos" },
  { value: "#1", label: "Restaurante criollo de la zona" },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonios" className="py-24 bg-[#fdf6ee] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center mb-14"
        >
          <span className="font-[family-name:var(--font-inter)] text-[#777F67] text-[10px] font-semibold tracking-[0.35em] uppercase mb-4 block">
            Testimonios
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-[#2c2c2c] text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Lo que dicen nuestros comensales
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-[#777F67]/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#777F67]/40" />
            <div className="w-10 h-px bg-[#777F67]/30" />
          </div>
          <p className="font-[family-name:var(--font-inter)] text-[#6b6b6b] text-base max-w-lg mx-auto leading-relaxed">
            Cada reseña es el reflejo del compromiso de nuestro equipo con la excelencia y el sabor.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -35 }}
              transition={{ duration: 0.38, ease: "easeOut" as const }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#F4E3D0]/70 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#777F67">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Decorative quote mark */}
              <div className="text-[#777F67]/15 font-[family-name:var(--font-playfair)] text-8xl font-bold leading-none mb-0 -mb-4 select-none" aria-hidden="true">
                &ldquo;
              </div>

              {/* Quote text */}
              <p className="font-[family-name:var(--font-playfair)] text-[#2c2c2c] text-lg md:text-xl leading-relaxed mb-8 italic">
                {testimonials[current].text}
              </p>

              {/* Divider */}
              <div className="w-12 h-px bg-[#777F67]/25 mx-auto mb-6" />

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#777F67] flex items-center justify-center text-[#F4E3D0] font-[family-name:var(--font-inter)] font-bold text-xs tracking-wide shadow-sm">
                  {testimonials[current].avatar}
                </div>
                <div className="text-left">
                  <p className="font-[family-name:var(--font-inter)] text-[#2c2c2c] font-semibold text-sm">
                    {testimonials[current].name}
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-[#8a8a8a] text-xs mt-0.5">
                    {testimonials[current].role} &middot; {testimonials[current].date}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-7">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#777F67]/30 flex items-center justify-center text-[#777F67] hover:bg-[#777F67] hover:text-[#F4E3D0] hover:border-[#777F67] transition-all duration-200 cursor-pointer"
              aria-label="Anterior"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H3m0 0 4-4m-4 4 4 4" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-250 cursor-pointer ${
                    i === current
                      ? "w-6 h-2 bg-[#777F67]"
                      : "w-2 h-2 bg-[#777F67]/22 hover:bg-[#777F67]/45"
                  }`}
                  aria-label={`Ir al testimonio ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#777F67]/30 flex items-center justify-center text-[#777F67] hover:bg-[#777F67] hover:text-[#F4E3D0] hover:border-[#777F67] transition-all duration-200 cursor-pointer"
              aria-label="Siguiente"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h12m0 0-4-4m4 4-4 4" />
              </svg>
            </button>
          </div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 text-center border border-[#F4E3D0]/70 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <p className="font-[family-name:var(--font-playfair)] text-[#777F67] font-bold text-2xl md:text-3xl mb-1.5 leading-tight">
                {stat.value}
              </p>
              <p className="font-[family-name:var(--font-inter)] text-[#8a8a8a] text-xs leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
