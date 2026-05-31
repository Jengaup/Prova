"use client";

import { motion } from "framer-motion";

const footerLinks = {
  "Navegación": [
    { label: "Inicio", href: "#inicio" },
    { label: "Menú", href: "#menu" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Reservaciones", href: "#reservas" },
    { label: "Testimonios", href: "#testimonios" },
  ],
  "Carta": [
    { label: "Especiales del Día", href: "#menu" },
    { label: "Menú a la Carta", href: "#menu" },
    { label: "Grill & Parrilla", href: "#menu" },
    { label: "Postres", href: "#menu" },
    { label: "Bebidas & Cocteles", href: "#menu" },
  ],
};

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#2c2c2c] text-[#F4E3D0]">
      {/* Top CTA band */}
      <div className="bg-[#777F67] py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-[#F4E3D0] font-display text-3xl font-bold mb-1">
              ¿Listo para una experiencia inolvidable?
            </h3>
            <p
              className="text-[#F4E3D0]/75 text-base"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Reserva tu mesa hoy y déjate llevar por los sabores de Prova.
            </p>
          </div>
          <a
            href="#reservas"
            className="shrink-0 bg-[#F4E3D0] text-[#777F67] px-8 py-4 rounded-full font-semibold text-base hover:bg-white transition-colors duration-200 shadow-lg cursor-pointer whitespace-nowrap"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Reservar Ahora
          </a>
        </motion.div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                <path d="M18 4C18 4 10 12 10 20C10 24.4 13.6 28 18 28C22.4 28 26 24.4 26 20C26 12 18 4 18 4Z" fill="#F4E3D0" />
                <path d="M18 14C18 14 14 18 14 21C14 23.2 15.8 25 18 25C20.2 25 22 23.2 22 21C22 18 18 14 18 14Z" fill="#777F67" />
              </svg>
              <div>
                <span
                  className="text-[#F4E3D0] font-display font-bold text-2xl tracking-tight leading-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  PROVA
                </span>
                <p
                  className="text-[#F4E3D0]/50 text-[9px] tracking-[0.25em] uppercase leading-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Creole Grill
                </p>
              </div>
            </div>
            <p
              className="text-[#F4E3D0]/60 text-sm leading-relaxed mb-6 max-w-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Gastronomía criolla e internacional de primer nivel. Un espacio donde la
              familia, los amigos y los sabores se unen para crear momentos inolvidables.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                {
                  name: "Facebook",
                  href: "https://www.facebook.com/ProvaCreoleGrill",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  name: "Instagram",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                    </svg>
                  ),
                },
                {
                  name: "WhatsApp",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-[#F4E3D0]/10 hover:bg-[#777F67] flex items-center justify-center text-[#F4E3D0]/70 hover:text-[#F4E3D0] transition-all duration-200 cursor-pointer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="text-[#F4E3D0] font-semibold text-sm mb-5 tracking-wider uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#F4E3D0]/55 hover:text-[#F4E3D0] text-sm transition-colors duration-200 cursor-pointer"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-[#F4E3D0]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-[#F4E3D0]/40 text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © {new Date().getFullYear()} Prova Creole Grill. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {["Política de Privacidad", "Términos de Uso"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#F4E3D0]/40 hover:text-[#F4E3D0]/70 text-xs transition-colors duration-200 cursor-pointer"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
