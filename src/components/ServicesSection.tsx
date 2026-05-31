"use client";

import { motion, type Variants } from "framer-motion";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Especiales de Almuerzo",
    description:
      "Cada día, nuestros chefs preparan platos del día con ingredientes frescos y recetas de temporada. Sabor auténtico a un precio excepcional.",
    accent: "#777F67",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />
      </svg>
    ),
    title: "Menú a la Carta",
    description:
      "Una selección curada de entradas, platos principales y acompañantes que fusionan la cocina criolla con técnicas internacionales de alto nivel.",
    accent: "#777F67",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L19.5 14.5M14.25 3.104c.251.023.501.05.75.082M19.5 14.5l-1.409 1.409a2.25 2.25 0 0 1-3.182 0l-1.909-1.91A2.25 2.25 0 0 0 11.25 13.5H12a2.25 2.25 0 0 0-2.25 2.25v1.125M19.5 14.5V18a2.25 2.25 0 0 1-2.25 2.25h-3.75M5 14.5V18a2.25 2.25 0 0 0 2.25 2.25H9" />
      </svg>
    ),
    title: "Tragos & Cocteles",
    description:
      "Nuestra barra ofrece una variedad de cocteles artesanales, tragos clásicos y creaciones exclusivas diseñadas por nuestros bartenders.",
    accent: "#777F67",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    ),
    title: "Grill & Parrilla",
    description:
      "Cortes premium y proteínas marinadas al carbón, cocinadas a la perfección sobre nuestras parrillas artesanales. La esencia del Creole Grill.",
    accent: "#777F67",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    title: "Postres Artesanales",
    description:
      "Cierra tu experiencia Prova con nuestros postres de autor: desde flan criollo hasta cheesecake de maracuyá. Dulce perfección en cada cucharada.",
    accent: "#777F67",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: "Eventos Familiares",
    description:
      "Organizamos eventos privados, celebraciones y reuniones de empresa. Nuestro equipo crea momentos memorables en un ambiente acogedor y elegante.",
    accent: "#777F67",
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function ServicesSection() {
  return (
    <section id="nosotros" className="py-24 bg-[#fdf6ee]">
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
            Lo que ofrecemos
          </span>
          <h2 className="text-[#2c2c2c] text-4xl md:text-5xl font-bold font-display mb-4">
            Una experiencia completa
          </h2>
          <p
            className="text-[#6b6b6b] text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Desde el primer trago hasta el último bocado de postre, en Prova diseñamos
            cada momento de tu visita con dedicación y pasión.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariant}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#F4E3D0]/60"
            >
              <div className="w-14 h-14 rounded-xl bg-[#777F67]/10 flex items-center justify-center text-[#777F67] mb-5 group-hover:bg-[#777F67] group-hover:text-[#F4E3D0] transition-colors duration-300">
                {service.icon}
              </div>
              <h3
                className="text-[#2c2c2c] text-xl font-bold font-display mb-3"
              >
                {service.title}
              </h3>
              <p
                className="text-[#6b6b6b] text-sm leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
