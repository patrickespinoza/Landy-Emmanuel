
import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock3,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY
// ==========================================

const fechaCelebracion = {
  dia: "Sábado",
  fecha: "12",
  mesAnio: "Diciembre 2026",
};

const evento = {
  titulo: "Celebración",
  hora: "9:00 a. m.",
  lugar: "El Socavón Pachuca",
  direccion:
    "Antigua, Carr a Real del Monte 102, San Juan Pachuca, 42010 Pachuca de Soto, Hgo.",
  ubicacion:
    "https://maps.app.goo.gl/e7YXrHxFYAqPW33K7",
};

// ==========================================
// ANIMACIONES
// ==========================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// TARJETA DEL EVENTO
// ==========================================

const TarjetaEvento = ({
  titulo,
  hora,
  lugar,
  direccion,
  ubicacion,
}) => {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -5 }}
      className="
        relative
        w-full max-w-xl
        border border-[#A9998B]
        p-2 sm:p-3
        text-center
      "
    >
      {/* MARCO INTERIOR */}
      <div
        className="
          relative
          border border-[#A9998B]/40
          px-5 py-12
          sm:px-12 sm:py-14
        "
      >
        {/* ORNAMENTO SUPERIOR */}
        <div
          className="
            flex items-center justify-center
            gap-3 mb-9
          "
        >
          <span className="w-12 h-px bg-[#A9998B]" />
          <span className="text-[#EDE5DC] text-sm">✦</span>
          <span className="w-12 h-px bg-[#A9998B]" />
        </div>

        {/* TÍTULO */}
        <h2
          className="
            text-3xl sm:text-4xl
            font-playfair
            font-normal
            text-white
          "
        >
          {titulo}
        </h2>

        {/* HORA */}
        <div className="flex flex-col items-center mt-10">
          <Clock3
            size={25}
            strokeWidth={1.2}
            className="text-[#EDE5DC] mb-4"
          />

          <p
            className="
              uppercase
              tracking-[0.25em]
              text-xs
              text-[#D3C3B4]
            "
          >
            Hora del evento
          </p>

          <p
            className="
              text-2xl sm:text-3xl
              font-playfair
              text-white
              mt-4
            "
          >
            {hora}
          </p>
        </div>

        {/* SEPARADOR */}
        <div
          className="
            flex items-center justify-center
            gap-4 my-10
          "
        >
          <span className="w-14 h-px bg-[#A9998B]" />
          <span className="text-[#EDE5DC]">✦</span>
          <span className="w-14 h-px bg-[#A9998B]" />
        </div>

        {/* LUGAR */}
        <div className="flex flex-col items-center">
          <MapPin
            size={27}
            strokeWidth={1.2}
            className="text-[#EDE5DC] mb-4"
          />

          <p
            className="
              uppercase
              tracking-[0.25em]
              text-xs
              text-[#D3C3B4]
            "
          >
            Lugar
          </p>

          <h3
            className="
              text-2xl sm:text-3xl
              font-playfair
              text-white
              mt-5
              leading-snug
            "
          >
            {lugar}
          </h3>

          <p
            className="
              text-[#EDE5DC]
              mt-5
              leading-relaxed
              text-sm sm:text-base
              max-w-sm
            "
          >
            {direccion}
          </p>
        </div>

        {/* BOTÓN GOOGLE MAPS */}
        <motion.a
          href={ubicacion}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="
            group
            mt-10
            inline-flex
            items-center justify-center
            gap-3
            bg-[#EDE5DC]
            hover:bg-white
            text-[#171717]
            px-8 py-4
            border border-[#EDE5DC]
            transition-colors duration-300
            text-sm
            font-medium
            tracking-wide
          "
        >
          <MapPin size={18} strokeWidth={1.5} />

          Ver ubicación

          <ArrowUpRight
            size={17}
            className="
              transition-transform duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </motion.a>

        {/* ORNAMENTO INFERIOR */}
        <div
          className="
            flex items-center justify-center
            gap-3 mt-10
          "
        >
          <span className="w-12 h-px bg-[#A9998B]" />
          <span className="text-[#EDE5DC] text-sm">✦</span>
          <span className="w-12 h-px bg-[#A9998B]" />
        </div>
      </div>
    </motion.article>
  );
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

const Celebracion = () => {
  return (
    <section
      className="
        relative
        w-full
        bg-[#171717]
        py-20 sm:py-28
        px-5 sm:px-8
        overflow-hidden
      "
    >
      {/* DECORACIONES DE ESQUINA */}
      <div
        className="
          absolute
          top-8 left-8
          w-20 h-20
          border-t border-l
          border-[#EDE5DC]/20
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-8 right-8
          w-20 h-20
          border-b border-r
          border-[#EDE5DC]/20
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ENCABEZADO */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          {/* ICONO DECORATIVO */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#A9998B]" />

            <CalendarDays
              size={20}
              strokeWidth={1.3}
              className="text-[#EDE5DC]"
            />

            <div className="w-10 h-px bg-[#A9998B]" />
          </div>

          <p
            className="
              uppercase
              tracking-[0.3em]
              text-[#EDE5DC]
              text-xs sm:text-sm
              font-serif
            "
          >
            Nuestra celebración
          </p>

          <h2
            className="
              text-4xl sm:text-5xl
              font-playfair
              text-white
              mt-5
            "
          >
            Un día inolvidable
          </h2>

          {/* FECHA */}
          <div className="mt-12 flex flex-col items-center">

            <p
              className="
                text-[#EDE5DC]
                tracking-[0.3em]
                uppercase
                text-sm sm:text-base
              "
            >
              {fechaCelebracion.dia}
            </p>

            <h3
              className="
                text-7xl sm:text-8xl md:text-9xl
                font-playfair
                text-white
                leading-none
                mt-4
              "
            >
              {fechaCelebracion.fecha}
            </h3>

            <p
              className="
                text-[#EDE5DC]
                text-xl sm:text-2xl
                tracking-[0.2em]
                mt-5
              "
            >
              {fechaCelebracion.mesAnio}
            </p>
          </div>
        </motion.div>

        {/* TARJETA DE UBICACIÓN */}
        <div className="flex justify-center">
          <TarjetaEvento {...evento} />
        </div>

        {/* MENSAJE FINAL */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            text-center
            text-[#EDE5DC]
            font-playfair
            italic
            text-lg sm:text-xl
            mt-16
            px-4
          "
        >
          Cada momento será más especial con tu presencia.
        </motion.p>
      </div>
    </section>
  );
};

export default Celebracion;
