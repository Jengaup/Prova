"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const highlights = [
  { icon: "🌿", label: "Ingredientes frescos y locales" },
  { icon: "👨‍🍳", label: "Chefs con formación internacional" },
  { icon: "🏡", label: "Ambiente acogedor y familiar" },
  { icon: "🔥", label: "Parrilla artesanal al carbón" },
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-[#777F67] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=600&q=80"
                  alt="Cocina de Prova"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80"
                  alt="Ambiente del restaurante"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl -mt-4">
                <Image
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80"
                  alt="Platos de Prova"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl mt-4">
                <Image
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80"
                  alt="Gastronomía criolla"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4, type: "spring" }}
              className="absolute -bottom-4 -right-4 bg-[#F4E3D0] rounded-2xl p-4 shadow-lg text-center min-w-[120px]"
            >
              <p className="text-[#777F67] font-display font-bold text-3xl">10+</p>
              <p
                className="text-[#6b6b6b] text-xs leading-tight mt-0.5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Años<br />sirviendo
              </p>
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <span
              className="text-[#F4E3D0]/70 text-xs font-semibold tracking-[0.25em] uppercase mb-3 block"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Nuestra Historia
            </span>
            <h2 className="text-[#F4E3D0] text-4xl md:text-5xl font-bold font-display mb-6 leading-tight">
              Donde la tradición<br />
              <em className="not-italic text-[#F4E3D0]/80">se convierte en arte</em>
            </h2>
            <p
              className="text-[#F4E3D0]/80 text-base leading-relaxed mb-5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Prova nació del amor por la cocina criolla y el deseo de compartirla con el mundo.
              Fusionamos las recetas de abuela con técnicas internacionales modernas para crear
              una experiencia gastronómica única.
            </p>
            <p
              className="text-[#F4E3D0]/80 text-base leading-relaxed mb-8"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Nuestro ambiente familiar y cálido es el escenario perfecto para almuerzos de
              trabajo, cenas románticas o celebraciones en familia. En Prova, cada visita
              es una historia que vale la pena contar.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex items-center gap-3 bg-[#F4E3D0]/10 rounded-xl px-4 py-3 border border-[#F4E3D0]/15"
                >
                  <span className="text-xl">{h.icon}</span>
                  <span
                    className="text-[#F4E3D0]/90 text-sm font-medium"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {h.label}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#reservas"
              className="inline-flex items-center gap-2 bg-[#F4E3D0] text-[#777F67] px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white transition-colors duration-200 shadow-md cursor-pointer"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Conoce más sobre nosotros
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
