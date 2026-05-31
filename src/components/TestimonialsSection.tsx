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

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonios" className="py-24 bg-[#fdf6ee] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-[#777F67] text-xs font-semibold tracking-[0.25em] uppercase mb-3 block"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Testimonios
          </span>
          <h2 className="text-[#2c2c2c] text-4xl md:text-5xl font-bold font-display mb-4">
            Lo que dicen nuestros comensales
          </h2>
          <p
            className="text-[#6b6b6b] text-lg max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Cada reseña es el reflejo del compromiso de nuestro equipo con la excelencia y el sabor.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#F4E3D0]/60 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#777F67">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <svg
                className="mx-auto mb-4 text-[#777F67]/20"
                width="40"
                height="32"
                viewBox="0 0 40 32"
                fill="currentColor"
              >
                <path d="M0 32V20.8C0 14.4 2.6 8.8 7.8 4 11 1.3 14.7 0 18.7 0v5.3c-2.7 0-5 1-7 3-2 2-3 4.3-3 7h5.3V32H0zm21.3 0V20.8c0-6.4 2.6-12 7.8-16.8C32.3 1.3 36 0 40 0v5.3c-2.7 0-5 1-7 3-2 2-3 4.3-3 7H35.3V32H21.3z" />
              </svg>

              <p
                className="text-[#2c2c2c] text-lg leading-relaxed mb-8 italic"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#777F67] flex items-center justify-center text-[#F4E3D0] font-bold text-sm">
                  {testimonials[current].avatar}
                </div>
                <div className="text-left">
                  <p
                    className="text-[#2c2c2c] font-semibold text-base"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {testimonials[current].name}
                  </p>
                  <p
                    className="text-[#6b6b6b] text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {testimonials[current].role} · {testimonials[current].date}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-[#777F67]/30 flex items-center justify-center text-[#777F67] hover:bg-[#777F67] hover:text-[#F4E3D0] transition-colors duration-200 cursor-pointer"
              aria-label="Anterior"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H3m0 0 4-4m-4 4 4 4" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-200 cursor-pointer ${
                    i === current ? "w-6 h-2.5 bg-[#777F67]" : "w-2.5 h-2.5 bg-[#777F67]/25 hover:bg-[#777F67]/50"
                  }`}
                  aria-label={`Ir al testimonio ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-[#777F67]/30 flex items-center justify-center text-[#777F67] hover:bg-[#777F67] hover:text-[#F4E3D0] transition-colors duration-200 cursor-pointer"
              aria-label="Siguiente"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h12m0 0-4-4m4 4-4 4" />
              </svg>
            </button>
          </div>
        </div>

        {/* Background stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "4.9 / 5", label: "Calificación promedio" },
            { value: "1,200+", label: "Reseñas positivas" },
            { value: "98%", label: "Clientes satisfechos" },
            { value: "#1", label: "Restaurante criollo de la zona" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 text-center border border-[#F4E3D0]/60 shadow-sm"
            >
              <p className="text-[#777F67] font-display font-bold text-2xl md:text-3xl mb-1">
                {stat.value}
              </p>
              <p
                className="text-[#6b6b6b] text-xs"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
