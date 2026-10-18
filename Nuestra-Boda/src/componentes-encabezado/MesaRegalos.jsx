
import React from "react";
import { motion } from "framer-motion";
import {
  Gift,
  ArrowUpRight,
  Heart,
} from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY
// ==========================================

const mesaRegalos = {
  tienda: "Liverpool",
  numeroEvento: "60044446",
  enlace:
    "https://mesaderegalos.liverpool.com.mx/milistaderegalos/60044446",
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
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// COMPONENTE MESA DE REGALOS
// ==========================================

const MesaDeRegalos = () => {
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
      {/* DECORACIONES EXTERIORES */}
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

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* ======================================
            ENCABEZADO
            ====================================== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          {/* ICONO */}
          <div className="flex justify-center mb-6">
            <Gift
              size={30}
              strokeWidth={1.2}
              className="text-[#EDE5DC]"
            />
          </div>

          {/* TEXTO SUPERIOR */}
          <p
            className="
              uppercase
              tracking-[0.3em]
              text-[#D3C3B4]
              text-xs sm:text-sm
              font-serif
            "
          >
            Un detalle especial
          </p>

          {/* TÍTULO */}
          <h2
            className="
              text-4xl sm:text-5xl md:text-6xl
              font-playfair
              font-normal
              text-white
              mt-5
            "
          >
            Mesa de Regalos
          </h2>

          {/* ORNAMENTO */}
          <div
            className="
              flex items-center
              justify-center
              gap-4
              mt-7
            "
          >
            <span className="w-12 h-px bg-[#A9998B]" />

            <span className="text-[#EDE5DC] text-sm">
              ✦
            </span>

            <span className="w-12 h-px bg-[#A9998B]" />
          </div>
        </motion.div>

        {/* ======================================
            TARJETA PRINCIPAL CLÁSICA
            ====================================== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="
            relative
            w-full max-w-xl
            mx-auto
            bg-[#EDE5DC]
            p-2 sm:p-3
            shadow-[0_20px_60px_rgba(0,0,0,0.2)]
          "
        >
          {/* MARCO INTERIOR */}
          <div
            className="
              relative
              border border-[#A9998B]
              px-5 py-12
              sm:px-10 sm:py-14
              text-center
            "
          >
            {/* ESQUINAS DECORATIVAS */}
            <div
              className="
                absolute top-0 left-0
                w-9 h-9
                border-t-2 border-l-2
                border-[#927D6B]
                pointer-events-none
              "
            />

            <div
              className="
                absolute top-0 right-0
                w-9 h-9
                border-t-2 border-r-2
                border-[#927D6B]
                pointer-events-none
              "
            />

            <div
              className="
                absolute bottom-0 left-0
                w-9 h-9
                border-b-2 border-l-2
                border-[#927D6B]
                pointer-events-none
              "
            />

            <div
              className="
                absolute bottom-0 right-0
                w-9 h-9
                border-b-2 border-r-2
                border-[#927D6B]
                pointer-events-none
              "
            />

            {/* ORNAMENTO SUPERIOR */}
            <div
              className="
                flex items-center
                justify-center
                gap-3
                mb-9
              "
            >
              <span className="w-10 h-px bg-[#927D6B]" />
              <span className="text-[#927D6B] text-sm">
                ✦
              </span>
              <span className="w-10 h-px bg-[#927D6B]" />
            </div>

            {/* ICONO CENTRAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="
                w-16 h-16
                border border-[#927D6B]
                flex items-center
                justify-center
                mx-auto mb-8
              "
            >
              <Gift
                size={29}
                strokeWidth={1.2}
                className="text-[#171717]"
              />
            </motion.div>

            {/* MENSAJE */}
            <h3
              className="
                text-2xl sm:text-3xl
                font-playfair
                font-normal
                text-[#171717]
                leading-snug
              "
            >
              El mejor regalo es tu presencia
            </h3>

            <p
              className="
                text-[#65574A]
                text-sm sm:text-base
                leading-relaxed
                mt-6
                max-w-md mx-auto
              "
            >
              Si deseas tener un detalle con nosotros,
              hemos preparado una mesa de regalos
              donde podrás encontrar algunas opciones.
            </p>

            {/* SEPARADOR */}
            <div
              className="
                flex items-center
                justify-center
                gap-4
                my-10
              "
            >
              <span className="w-14 h-px bg-[#A9998B]" />
              <span className="text-[#927D6B] text-sm">
                ✦
              </span>
              <span className="w-14 h-px bg-[#A9998B]" />
            </div>

            {/* TIENDA */}
            <h4
              className="
                text-3xl sm:text-4xl
                font-playfair
                font-normal
                text-[#171717]
              "
            >
              {mesaRegalos.tienda}
            </h4>

            {/* NÚMERO DE EVENTO */}
            <p
              className="
                uppercase
                tracking-[0.2em]
                text-[#75685D]
                text-xs
                mt-8
              "
            >
              Número de evento
            </p>

            <p
              className="
                text-2xl sm:text-3xl
                font-playfair
                text-[#171717]
                mt-3
                tracking-[0.08em]
              "
            >
              {mesaRegalos.numeroEvento}
            </p>

            {/* BOTÓN LIVERPOOL */}
            <motion.a
              href={mesaRegalos.enlace}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="
                group
                mt-10
                inline-flex
                items-center
                justify-center
                gap-3
                bg-[#171717]
                hover:bg-[#333333]
                text-white
                px-6 sm:px-8
                py-4
                border border-[#171717]
                transition-colors duration-300
                text-sm sm:text-base
                font-medium
              "
            >
              <Gift size={18} strokeWidth={1.5} />

              Ver mesa de regalos

              <ArrowUpRight
                size={18}
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
                flex items-center
                justify-center
                gap-3
                mt-12
              "
            >
              <span className="w-10 h-px bg-[#927D6B]" />
              <span className="text-[#927D6B] text-sm">
                ✦
              </span>
              <span className="w-10 h-px bg-[#927D6B]" />
            </div>
          </div>
        </motion.div>

        {/* ======================================
            MENSAJE FINAL
            ====================================== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            flex flex-col
            items-center
            text-center
            mt-14
          "
        >
          <Heart
            size={20}
            strokeWidth={1.2}
            className="text-[#EDE5DC] mb-4"
          />

          <p
            className="
              font-playfair
              italic
              text-lg sm:text-xl
              text-[#EDE5DC]
            "
          >
            Gracias por formar parte de nuestra historia.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MesaDeRegalos;
