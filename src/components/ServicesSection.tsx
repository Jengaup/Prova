"use client";

import { motion, type Variants } from "framer-motion";

const services = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Especiales de Almuerzo",
    description:
      "Cada día, nuestros chefs preparan platos del día con ingredientes frescos y recetas de temporada. Sabor auténtico a un precio excepcional.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />
      </svg>
    ),
    title: "Menú a la Carta",
    description:
      "Una selección curada de entradas, platos principales y acompañantes que fusionan la cocina criolla con técnicas internacionales de alto nivel.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L19.5 14.5M14.25 3.104c.251.023.501.05.75.082M19.5 14.5l-1.409 1.409a2.25 2.25 0 0 1-3.182 0l-1.909-1.91A2.25 2.25 0 0 0 11.25 13.5H12a2.25 2.25 0 0 0-2.25 2.25v1.125M19.5 14.5V18a2.25 2.25 0 0 1-2.25 2.25h-3.75M5 14.5V18a2.25 2.25 0 0 0 2.25 2.25H9" />
      </svg>
    ),
    title: "Tragos & Cocteles",
    description:
      "Nuestra barra ofrece una variedad de cocteles artesanales, tragos clásicos y creaciones exclusivas diseñadas por nuestros bartenders.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    ),
    title: "Grill & Parrilla",
    description:
      "Cortes premium y proteínas marinadas al carbón, cocinadas a la perfección sobre nuestras parrillas artesanales. La esencia del Creole Grill.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    title: "Postres Artesanales",
    description:
      "Cierra tu experiencia Prova con nuestros postres de autor: desde flan criollo hasta cheesecake de maracuyá. Dulce perfección en cada cucharada.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: "Eventos Familiares",
    description:
      "Organizamos eventos privados, celebraciones y reuniones de empresa. Nuestro equipo crea momentos memorables en un ambiente acogedor y elegante.",
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09 },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-[#fdf6ee]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center mb-16"
        >
          <span className="font-[family-name:var(--font-inter)] text-[#777F67] text-[10px] font-semibold tracking-[0.35em] uppercase mb-4 block">
            Lo que ofrecemos
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-[#2c2c2c] text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Una experiencia completa
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-[#777F67]/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#777F67]/40" />
            <div className="w-10 h-px bg-[#777F67]/30" />
          </div>
          <p className="font-[family-name:var(--font-inter)] text-[#6b6b6b] text-base max-w-lg mx-auto leading-relaxed">
            Desde el primer trago hasta el último bocado de postre, en Prova diseñamos
            cada momento con dedicación y pasión.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariant}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-[#F4E3D0]/60 hover:-translate-y-1 hover:border-[#777F67]/20"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#777F67]/10 flex items-center justify-center text-[#777F67] mb-6 group-hover:bg-[#777F67] group-hover:text-[#F4E3D0] transition-all duration-300">
                {service.icon}
              </div>
              {/* Title */}
              <h3 className="font-[family-name:var(--font-playfair)] text-[#2c2c2c] text-lg font-bold mb-3 leading-snug">
                {service.title}
              </h3>
              {/* Description */}
              <p className="font-[family-name:var(--font-inter)] text-[#6b6b6b] text-sm leading-relaxed">
                {service.description}
              </p>
              {/* Bottom accent line */}
              <div className="mt-6 w-0 h-0.5 bg-[#777F67]/50 group-hover:w-10 transition-all duration-300 rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
