"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["Destacados", "Entradas", "Principales", "Postres", "Bebidas"];

const menuItems = [
  {
    category: "Destacados",
    name: "Arroz con Mariscos Criollo",
    description: "Arroz aromático con camarones, mejillones y pulpo, sazonado con especias criollas y aceite de achiote.",
    price: "$18.90",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80",
    tag: "Chef's Pick",
    tagColor: "bg-[#777F67]",
  },
  {
    category: "Destacados",
    name: "Costillas BBQ Criolla",
    description: "Costillas de cerdo marinadas 24 horas en salsa criolla de la casa, ahumadas lentamente al carbón.",
    price: "$22.50",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    tag: "Más Pedido",
    tagColor: "bg-[#c17b3f]",
  },
  {
    category: "Destacados",
    name: "Pollo a la Brasa Prova",
    description: "Pollo entero marinado con hierbas criollas, asado en horno de leña. Acompañado de yuca frita y ensalada.",
    price: "$16.50",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600&q=80",
    tag: "Favorito",
    tagColor: "bg-[#4a7c59]",
  },
  {
    category: "Entradas",
    name: "Ceviche Mixto",
    description: "Pescado fresco, camarones y calamar marinados en limón con cebolla morada, cilantro y ají.",
    price: "$12.50",
    image: "https://images.unsplash.com/photo-1535400673774-5a52cf4b5a27?w=600&q=80",
    tag: null,
    tagColor: "",
  },
  {
    category: "Entradas",
    name: "Tostones con Guacamole",
    description: "Plátano verde doblemente frito, crujiente por fuera y suave por dentro, con guacamole cremoso.",
    price: "$7.90",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=600&q=80",
    tag: null,
    tagColor: "",
  },
  {
    category: "Principales",
    name: "Corvina a la Parrilla",
    description: "Filete de corvina fresca a la brasa, con salsa de mantequilla de hierbas y vegetales salteados.",
    price: "$21.00",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80",
    tag: null,
    tagColor: "",
  },
  {
    category: "Principales",
    name: "Lomo Saltado Criollo",
    description: "Tiras de lomo fino salteadas con cebolla, tomate y pimientos, en salsa criolla especial. Con arroz y papas.",
    price: "$19.50",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
    tag: null,
    tagColor: "",
  },
  {
    category: "Postres",
    name: "Flan de Coco Criollo",
    description: "Flan artesanal de coco tostado con caramelo de papelón y crema batida.",
    price: "$6.90",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80",
    tag: "Artesanal",
    tagColor: "bg-[#777F67]",
  },
  {
    category: "Postres",
    name: "Cheesecake de Maracuyá",
    description: "Base de galleta con crema de queso cremoso, cubierta con coulis de maracuyá fresco.",
    price: "$7.50",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80",
    tag: null,
    tagColor: "",
  },
  {
    category: "Bebidas",
    name: "Mojito Criollo",
    description: "Ron blanco, lima fresca, hojas de hierbabuena, azúcar de caña y agua con gas. Refrescante y auténtico.",
    price: "$9.00",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&q=80",
    tag: "Signature",
    tagColor: "bg-[#777F67]",
  },
  {
    category: "Bebidas",
    name: "Limonada de Coco",
    description: "Limonada artesanal mezclada con leche de coco, hielo y un toque de menta. Sin alcohol disponible.",
    price: "$6.50",
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&q=80",
    tag: null,
    tagColor: "",
  },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Destacados");

  const filtered = menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center mb-12"
        >
          <span className="font-[family-name:var(--font-inter)] text-[#777F67] text-[10px] font-semibold tracking-[0.35em] uppercase mb-4 block">
            Nuestra Carta
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-[#2c2c2c] text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Sabores que enamoran
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-[#777F67]/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#777F67]/40" />
            <div className="w-10 h-px bg-[#777F67]/30" />
          </div>
          <p className="font-[family-name:var(--font-inter)] text-[#6b6b6b] text-base max-w-lg mx-auto leading-relaxed">
            Ingredientes frescos, recetas con alma y presentaciones que conquistan antes del primer bocado.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" as const }}
          className="flex flex-wrap justify-center gap-2.5 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-[family-name:var(--font-inter)] px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer border ${
                activeCategory === cat
                  ? "bg-[#777F67] text-[#F4E3D0] border-[#777F67] shadow-md"
                  : "bg-transparent text-[#5a5a5a] border-[#E5D5C5] hover:border-[#777F67]/40 hover:text-[#777F67]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Menu grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" as const }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.35, ease: "easeOut" as const }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#F4E3D0]/70 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-[#f0ebe3]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-600"
                  />
                  {/* Subtle bottom gradient for readability */}
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/25 to-transparent" />
                  {item.tag && (
                    <span className={`absolute top-3 left-3 ${item.tagColor} text-white font-[family-name:var(--font-inter)] text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wide shadow-md`}>
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2.5">
                    <h3 className="font-[family-name:var(--font-playfair)] text-[#2c2c2c] font-bold text-lg leading-snug">
                      {item.name}
                    </h3>
                    <span className="font-[family-name:var(--font-inter)] text-[#777F67] font-bold text-lg shrink-0 tabular-nums">
                      {item.price}
                    </span>
                  </div>
                  <p className="font-[family-name:var(--font-inter)] text-[#7a7a7a] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="text-center mt-12"
        >
          <a
            href="#reservas"
            className="font-[family-name:var(--font-inter)] inline-flex items-center gap-2.5 bg-[#777F67] text-[#F4E3D0] px-8 py-4 rounded-full font-semibold text-sm hover:bg-[#5a6154] transition-colors duration-200 shadow-md cursor-pointer hover:-translate-y-0.5"
          >
            Ver carta completa &amp; Reservar
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
