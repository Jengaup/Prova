"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const highlights = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
    label: "Ingredientes frescos y locales",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    label: "Chefs con formación internacional",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    label: "Ambiente acogedor y familiar",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    ),
    label: "Parrilla artesanal al carbón",
  },
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-24 bg-[#777F67] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Images collage */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: "easeOut" as const }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=600&q=80"
                  alt="Cocina de Prova"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#777F67]/15" />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80"
                  alt="Ambiente del restaurante"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#777F67]/10" />
              </div>
              <div className="relative h-44 rounded-2xl overflow-hidden shadow-xl -mt-3">
                <Image
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80"
                  alt="Platos de Prova"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#777F67]/10" />
              </div>
              <div className="relative h-44 rounded-2xl overflow-hidden shadow-xl mt-4">
                <Image
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80"
                  alt="Gastronomía criolla"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#777F67]/10" />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.45, type: "spring" }}
              className="absolute -bottom-4 -right-3 bg-[#F4E3D0] rounded-2xl p-5 shadow-xl text-center min-w-[110px]"
            >
              <p className="font-[family-name:var(--font-playfair)] text-[#777F67] font-bold text-3xl leading-none">10+</p>
              <p className="font-[family-name:var(--font-inter)] text-[#6b6b6b] text-[11px] leading-tight mt-1">
                Años<br />sirviendo
              </p>
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: "easeOut" as const, delay: 0.1 }}
          >
            <span className="font-[family-name:var(--font-inter)] text-[#F4E3D0]/65 text-[10px] font-semibold tracking-[0.3em] uppercase mb-3 block">
              Nuestra Historia
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-[#F4E3D0] text-4xl md:text-5xl font-bold mb-6 leading-[1.1]">
              Donde la tradición
              <br />
              <em className="not-italic text-[#F4E3D0]/78">se convierte en arte</em>
            </h2>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-[#F4E3D0]/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#F4E3D0]/35" />
            </div>

            <p className="font-[family-name:var(--font-inter)] text-[#F4E3D0]/78 text-base leading-relaxed mb-4">
              Prova nació del amor por la cocina criolla y el deseo de compartirla con el mundo.
              Fusionamos las recetas de abuela con técnicas internacionales modernas para crear
              una experiencia gastronómica única.
            </p>
            <p className="font-[family-name:var(--font-inter)] text-[#F4E3D0]/78 text-base leading-relaxed mb-8">
              Nuestro ambiente familiar y cálido es el escenario perfecto para almuerzos de
              trabajo, cenas románticas o celebraciones en familia. En Prova, cada visita
              es una historia que vale la pena contar.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-9">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex items-center gap-3 bg-[#F4E3D0]/10 rounded-xl px-4 py-3 border border-[#F4E3D0]/12 hover:bg-[#F4E3D0]/15 transition-colors duration-200"
                >
                  <div className="text-[#F4E3D0]/70 shrink-0">
                    {h.icon}
                  </div>
                  <span className="font-[family-name:var(--font-inter)] text-[#F4E3D0]/88 text-sm font-medium">
                    {h.label}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#reservas"
              className="font-[family-name:var(--font-inter)] inline-flex items-center gap-2.5 bg-[#F4E3D0] text-[#777F67] px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white transition-colors duration-200 shadow-lg cursor-pointer hover:-translate-y-0.5"
            >
              Conoce más sobre nosotros
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
