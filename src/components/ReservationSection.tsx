"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ReservationSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="reservas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="text-[#777F67] text-xs font-semibold tracking-[0.25em] uppercase mb-3 block"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Reservaciones
            </span>
            <h2 className="text-[#2c2c2c] text-4xl md:text-5xl font-bold font-display mb-6 leading-tight">
              Reserva tu<br />
              <em className="not-italic text-[#777F67]">mesa ideal</em>
            </h2>
            <p
              className="text-[#6b6b6b] text-base leading-relaxed mb-8"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Asegura tu lugar en Prova y déjate sorprender. Nuestro equipo estará listo
              para recibirte y hacer de tu visita una experiencia memorable.
            </p>

            {/* Info cards */}
            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  ),
                  title: "Horarios",
                  detail: "Lunes–Viernes: 12:00 – 22:00\nSábado–Domingo: 11:00 – 23:00",
                },
                {
                  icon: (
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  ),
                  title: "Ubicación",
                  detail: "Av. Principal, Local 12\nCiudad, País",
                },
                {
                  icon: (
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  ),
                  title: "Teléfono",
                  detail: "+1 (555) 123-4567\nWhatsApp disponible",
                },
              ].map((info) => (
                <div
                  key={info.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#fdf6ee] border border-[#F4E3D0]/60"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#777F67]/10 flex items-center justify-center text-[#777F67] shrink-0 mt-0.5">
                    {info.icon}
                  </div>
                  <div>
                    <p
                      className="text-[#2c2c2c] font-semibold text-sm mb-0.5"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {info.title}
                    </p>
                    <p
                      className="text-[#6b6b6b] text-sm whitespace-pre-line"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {info.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="bg-[#fdf6ee] rounded-3xl p-8 border border-[#F4E3D0]/60 shadow-sm">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-[#777F67]/15 flex items-center justify-center mx-auto mb-4">
                    <svg width="32" height="32" fill="none" stroke="#777F67" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-[#2c2c2c] font-display font-bold text-2xl mb-3">
                    ¡Reserva recibida!
                  </h3>
                  <p
                    className="text-[#6b6b6b] text-base"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Te contactaremos pronto para confirmar tu mesa. ¡Nos vemos en Prova!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-[#2c2c2c] font-display font-bold text-2xl mb-6">
                    Solicitar reservación
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[#2c2c2c] text-sm font-medium block mb-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className="w-full px-4 py-3 rounded-xl border border-[#F4E3D0] bg-white text-[#2c2c2c] text-sm focus:outline-none focus:border-[#777F67] transition-colors"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                    </div>
                    <div>
                      <label className="text-[#2c2c2c] text-sm font-medium block mb-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 555 123 4567"
                        className="w-full px-4 py-3 rounded-xl border border-[#F4E3D0] bg-white text-[#2c2c2c] text-sm focus:outline-none focus:border-[#777F67] transition-colors"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[#2c2c2c] text-sm font-medium block mb-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#F4E3D0] bg-white text-[#2c2c2c] text-sm focus:outline-none focus:border-[#777F67] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[#2c2c2c] text-sm font-medium block mb-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Fecha *
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={form.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#F4E3D0] bg-white text-[#2c2c2c] text-sm focus:outline-none focus:border-[#777F67] transition-colors cursor-pointer"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                    </div>
                    <div>
                      <label className="text-[#2c2c2c] text-sm font-medium block mb-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Hora *
                      </label>
                      <select
                        name="time"
                        required
                        value={form.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#F4E3D0] bg-white text-[#2c2c2c] text-sm focus:outline-none focus:border-[#777F67] transition-colors cursor-pointer"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <option value="">Seleccionar</option>
                        {["12:00", "12:30", "13:00", "13:30", "14:00", "19:00", "19:30", "20:00", "20:30", "21:00"].map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[#2c2c2c] text-sm font-medium block mb-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Número de personas *
                    </label>
                    <select
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#F4E3D0] bg-white text-[#2c2c2c] text-sm focus:outline-none focus:border-[#777F67] transition-colors cursor-pointer"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"].map((n) => (
                        <option key={n} value={n}>{n} {parseInt(n) === 1 ? "persona" : "personas"}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[#2c2c2c] text-sm font-medium block mb-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Notas adicionales
                    </label>
                    <textarea
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Alergias, celebración especial, preferencias de mesa..."
                      className="w-full px-4 py-3 rounded-xl border border-[#F4E3D0] bg-white text-[#2c2c2c] text-sm focus:outline-none focus:border-[#777F67] transition-colors resize-none"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#777F67] text-[#F4E3D0] py-4 rounded-xl font-semibold text-base hover:bg-[#5a6154] transition-colors duration-200 shadow-md cursor-pointer mt-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Confirmar Reservación
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
