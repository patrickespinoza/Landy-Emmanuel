
import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

// ==========================================
// COMPONENTE FRASE FINAL - WEDLY
// ==========================================

const FraseFinal = () => {
  return (
    <section
      className="
        relative
        w-full
        min-h-[80vh]
        bg-[#EDE5DC]
        flex items-center justify-center
        px-5 sm:px-10
        py-20 sm:py-28
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
          border-[#927D6B]/30
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-8 right-8
          w-20 h-20
          border-b border-r
          border-[#927D6B]/30
          pointer-events-none
        "
      />

      {/* MARCO DECORATIVO EXTERIOR */}
      <div
        className="
          absolute
          inset-4 sm:inset-8
          border border-[#A9998B]/60
          pointer-events-none
        "
      />

      {/* MARCO INTERIOR */}
      <div
        className="
          absolute
          inset-6 sm:inset-11
          border border-[#A9998B]/25
          pointer-events-none
        "
      />

      {/* CONTENIDO PRINCIPAL */}
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
        className="
          relative z-10
          max-w-3xl
          mx-auto
          flex flex-col
          items-center
          text-center
        "
      >
        {/* ORNAMENTO SUPERIOR */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            flex items-center
            justify-center
            gap-4
            mb-8
          "
        >
          <span className="w-12 h-px bg-[#927D6B]" />

          <span className="text-[#927D6B] text-lg">
            ✦
          </span>

          <span className="w-12 h-px bg-[#927D6B]" />
        </motion.div>

        {/* COMILLAS DECORATIVAS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="
            text-[#927D6B]
            text-7xl sm:text-8xl
            font-playfair
            leading-none
            mt-4
          "
        >
          “
        </motion.div>

        {/* FRASE PRINCIPAL */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="
            max-w-2xl
            -mt-3
          "
        >
          {/* PRIMER PÁRRAFO */}
          <p
            className="
              text-[#171717]
              text-xl sm:text-2xl md:text-3xl
              font-playfair
              italic
              leading-[1.8]
            "
          >
            ¿Será que a Dios de vez en cuando
            se le antoja partir un alma
            y ponerla en dos personas?
          </p>

          {/* SEGUNDO PÁRRAFO */}
          <p
            className="
              text-[#65574A]
              text-lg sm:text-xl md:text-2xl
              font-playfair
              italic
              leading-[1.8]
              mt-7
            "
          >
            ¿O es que el destino de repente
            se entretuvo poniéndonos
            a ti y a mí en el mismo rumbo?
          </p>

          {/* TERCER PÁRRAFO */}
          <p
            className="
              text-[#171717]
              text-xl sm:text-2xl md:text-3xl
              font-playfair
              italic
              leading-[1.8]
              mt-7
            "
          >
            No sé, tal vez...
            <br />
            pero casualidad no es...
          </p>
        </motion.div>

        {/* DIVISOR CLÁSICO */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}
          className="
            flex items-center
            justify-center
            gap-4
            mt-12
          "
        >
          <span className="w-14 h-px bg-[#927D6B]" />

          <span className="text-[#927D6B] text-sm">
            ✦
          </span>

          <span className="w-14 h-px bg-[#927D6B]" />
        </motion.div>

        {/* NOMBRES DE LOS NOVIOS */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="
            text-3xl sm:text-4xl md:text-5xl
            font-playfair
            font-normal
            text-[#171717]
            mt-10
            leading-tight
          "
        >
          Landy
          <span
            className="
              font-[DancingScript]
              text-[#927D6B]
              mx-3
            "
          >
            &
          </span>
          Emmanuel
        </motion.h2>

        {/* FECHA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="
            text-[#75685D]
            tracking-[0.3em]
            text-xs sm:text-sm
            mt-6
          "
        >
          12 · 12 · 2026
        </motion.p>

        {/* ORNAMENTO FINAL */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Heart
            size={19}
            strokeWidth={1.1}
            className="text-[#927D6B]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FraseFinal;
