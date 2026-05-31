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
  },
  {
    category: "Destacados",
    name: "Costillas BBQ Criolla",
    description: "Costillas de cerdo marinadas 24 horas en salsa criolla de la casa, ahumadas lentamente al carbón.",
    price: "$22.50",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    tag: "Más Pedido",
  },
  {
    category: "Destacados",
    name: "Pollo a la Brasa Prova",
    description: "Pollo entero marinado con hierbas criollas, asado en horno de leña. Acompañado de yuca frita y ensalada.",
    price: "$16.50",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c3?w=600&q=80",
    tag: "Favorito",
  },
  {
    category: "Entradas",
    name: "Ceviche Mixto",
    description: "Pescado fresco, camarones y calamar marinados en limón con cebolla morada, cilantro y ají.",
    price: "$12.50",
    image: "https://images.unsplash.com/photo-1535400673774-5a52cf4b5a27?w=600&q=80",
    tag: null,
  },
  {
    category: "Entradas",
    name: "Tostones con Guacamole",
    description: "Plátano verde doblemente frito, crujiente por fuera y suave por dentro, con guacamole cremoso.",
    price: "$7.90",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=600&q=80",
    tag: null,
  },
  {
    category: "Principales",
    name: "Corvina a la Parrilla",
    description: "Filete de corvina fresca a la brasa, con salsa de mantequilla de hierbas y vegetales salteados.",
    price: "$21.00",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80",
    tag: null,
  },
  {
    category: "Principales",
    name: "Lomo Saltado Criollo",
    description: "Tiras de lomo fino salteadas con cebolla, tomate y pimientos, en salsa criolla especial. Con arroz y papas.",
    price: "$19.50",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
    tag: null,
  },
  {
    category: "Postres",
    name: "Flan de Coco Criollo",
    description: "Flan artesanal de coco tostado con caramelo de papelón y crema batida.",
    price: "$6.90",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80",
    tag: "Artesanal",
  },
  {
    category: "Postres",
    name: "Cheesecake de Maracuyá",
    description: "Base de galleta con crema de queso cremoso, cubierta con coulis de maracuyá fresco.",
    price: "$7.50",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80",
    tag: null,
  },
  {
    category: "Bebidas",
    name: "Mojito Criollo",
    description: "Ron blanco, lima fresca, hojas de hierbabuena, azúcar de caña y agua con gas. Refrescante y auténtico.",
    price: "$9.00",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&q=80",
    tag: "Signature",
  },
  {
    category: "Bebidas",
    name: "Limonada de Coco",
    description: "Limonada artesanal mezclada con leche de coco, hielo y un toque de menta. Sin alcohol disponible.",
    price: "$6.50",
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&q=80",
    tag: null,
  },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Destacados");

  const filtered = menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="text-[#777F67] text-xs font-semibold tracking-[0.3em] uppercase mb-4 block"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Nuestra Carta
          </span>
          <h2 className="text-[#2c2c2c] text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-5">
            Sabores que enamoran
          </h2>
          <p
            className="text-[#6b6b6b] text-lg max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Ingredientes frescos, recetas con alma y presentaciones que conquistan antes del primer bocado.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#777F67] text-[#F4E3D0] shadow-md scale-105"
                  : "bg-[#F4E3D0]/70 text-[#5a5a5a] hover:bg-[#F4E3D0] hover:scale-105"
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Menu grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group bg-[#fdf6ee] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-[#F4E3D0]/60"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.tag && (
                    <span
                      className="absolute top-3 left-3 bg-[#777F67] text-[#F4E3D0] text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-[#2c2c2c] font-display font-bold text-lg leading-tight">
                      {item.name}
                    </h3>
                    <span
                      className="text-[#777F67] font-bold text-lg shrink-0"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.price}
                    </span>
                  </div>
                  <p
                    className="text-[#6b6b6b] text-sm leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#reservas"
            className="inline-flex items-center gap-2 bg-[#777F67] text-[#F4E3D0] px-8 py-4 rounded-full font-semibold text-base hover:bg-[#5a6154] transition-colors duration-200 shadow-md cursor-pointer"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Ver carta completa & Reservar
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
