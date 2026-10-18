
import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  HeartHandshake,
  UtensilsCrossed,
  Music2,
  Clock3,
} from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY
// ==========================================

const eventos = [
  {
    titulo: "Recepción",
    hora: "9:00 a. m.",
    icono: Users,
  },
  {
    titulo: "Boda civil",
    hora: "9:30 a. m.",
    icono: HeartHandshake,
  },
  {
    titulo: "Desayuno",
    hora: "10:00 a. m. - 11:00 a. m.",
    icono: UtensilsCrossed,
  },
  {
    titulo: "Celebración con amigos y familiares",
    hora: "11:00 a. m. - 2:00 p. m.",
    icono: Music2,
  },
];

// ==========================================
// ANIMACIONES
// ==========================================

const containerFade = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardFade = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.96,
  },
  show: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// ==========================================
// ELEMENTO DEL ITINERARIO
// ==========================================

const TarjetaItinerario = ({ evento, index }) => {
  const Icono = evento.icono;

  return (
    <motion.div
      custom={index}
      variants={cardFade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        y: -5,
        transition: { duration: 0.25 },
      }}
      className="
        relative
        flex items-start
        gap-5 sm:gap-8
        w-full
      "
    >
      {/* ICONO CLÁSICO */}
      <div
        className="
          relative z-10
          flex-shrink-0
          w-12 h-12
          sm:w-16 sm:h-16
          rounded-full
          bg-[#EDE5DC]
          border border-[#927D6B]
          flex items-center justify-center
        "
      >
        <Icono
          size={25}
          strokeWidth={1.2}
          className="text-[#171717]"
        />
      </div>

      {/* INFORMACIÓN DEL EVENTO */}
      <div
        className="
          flex-1
          min-w-0
          pb-10 sm:pb-12
          border-b border-[#B8A99B]/50
        "
      >
        {/* NÚMERO DECORATIVO */}
        <p
          className="
            text-[#927D6B]
            text-xs
            tracking-[0.25em]
            font-serif
            mb-3
          "
        >
          {String(index + 1).padStart(2, "0")}
        </p>

        {/* NOMBRE DEL EVENTO */}
        <h3
          className="
            text-xl sm:text-2xl md:text-3xl
            font-playfair
            font-normal
            text-[#171717]
            leading-snug
          "
        >
          {evento.titulo}
        </h3>

        {/* HORARIO */}
        <div
          className="
            flex items-center
            gap-2
            text-[#75685D]
            mt-4
          "
        >
          <Clock3
            size={16}
            strokeWidth={1.3}
            className="flex-shrink-0"
          />

          <p
            className="
              text-sm sm:text-base
              font-serif
              leading-relaxed
            "
          >
            {evento.hora}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

const Itinerario2 = () => {
  return (
    <section
      className="
        relative
        w-full
        bg-[#EDE5DC]
        py-20 sm:py-28
        px-5 sm:px-8
        overflow-hidden
      "
    >
      {/* DECORACIONES EXTERIORES */}
      <div
        className="
          absolute top-8 left-8
          w-20 h-20
          border-t border-l
          border-[#927D6B]/30
          pointer-events-none
        "
      />

      <div
        className="
          absolute bottom-8 right-8
          w-20 h-20
          border-b border-r
          border-[#927D6B]/30
          pointer-events-none
        "
      />

      <motion.div
        variants={containerFade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="
          relative z-10
          w-full max-w-4xl
          mx-auto
          border border-[#B8A99B]
          px-6 py-14
          sm:px-14 sm:py-20
        "
      >
        {/* ENCABEZADO */}
        <div className="text-center">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              uppercase
              tracking-[0.3em]
              text-[#75685D]
              text-xs sm:text-sm
              font-serif
            "
          >
            Nuestro Día
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            viewport={{ once: true }}
            className="
              text-4xl sm:text-5xl md:text-6xl
              font-playfair
              text-[#171717]
              mt-5
            "
          >
            Itinerario
          </motion.h2>

          {/* ORNAMENTO CLÁSICO */}
          <div
            className="
              flex items-center
              justify-center
              gap-4
              mt-7
            "
          >
            <span className="w-12 h-px bg-[#927D6B]" />

            <span className="text-[#927D6B] text-sm">
              ✦
            </span>

            <span className="w-12 h-px bg-[#927D6B]" />
          </div>

          {/* FECHA */}
          <p
            className="
              text-[#75685D]
              font-serif
              text-sm sm:text-base
              mt-6
              tracking-[0.1em]
            "
          >
            12 de diciembre de 2026
          </p>
        </div>

        {/* LÍNEA DE TIEMPO */}
        <div className="relative mt-16 sm:mt-20">

          {/* LÍNEA VERTICAL */}
          <div
            className="
              absolute
              left-[23px]
              sm:left-[31px]
              top-6 bottom-12
              w-px
              bg-[#B8A99B]
            "
          />

          {/* EVENTOS EN ORDEN */}
          <div className="relative flex flex-col">
            {eventos.map((evento, index) => (
              <TarjetaItinerario
                key={index}
                evento={evento}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* MENSAJE FINAL */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            text-center
            text-[#75685D]
            font-playfair
            italic
            text-lg sm:text-xl
            mt-12
          "
        >
          Un día para celebrar nuestro amor.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Itinerario2;
