
import React from "react";
import { motion } from "framer-motion";

const Novios = () => {
  return (
    <section
      className="
        relative
        w-full
        bg-[#EDE5DC]
        py-20 sm:py-28
        px-5 sm:px-8
        flex items-center justify-center
        overflow-hidden
      "
    >
      {/* DECORACIONES DE FONDO */}
      <div
        className="
          absolute
          top-0 left-0
          w-40 h-40
          border-l border-t
          border-[#B8A99B]/30
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0 right-0
          w-40 h-40
          border-r border-b
          border-[#B8A99B]/30
          pointer-events-none
        "
      />

      {/* CONTENEDOR PRINCIPAL */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="
          relative
          max-w-4xl w-full
          border border-[#B8A99B]
          px-6 py-16
          sm:px-14 sm:py-20
          text-center
        "
      >
        {/* MARCO INTERIOR */}
        <div
          className="
            absolute
            inset-2 sm:inset-3
            border border-[#B8A99B]/40
            pointer-events-none
          "
        />

        {/* ESQUINAS DECORATIVAS */}
        <div
          className="
            absolute
            top-0 left-0
            w-10 h-10
            border-t-2 border-l-2
            border-[#927D6B]
            pointer-events-none
          "
        />

        <div
          className="
            absolute
            top-0 right-0
            w-10 h-10
            border-t-2 border-r-2
            border-[#927D6B]
            pointer-events-none
          "
        />

        <div
          className="
            absolute
            bottom-0 left-0
            w-10 h-10
            border-b-2 border-l-2
            border-[#927D6B]
            pointer-events-none
          "
        />

        <div
          className="
            absolute
            bottom-0 right-0
            w-10 h-10
            border-b-2 border-r-2
            border-[#927D6B]
            pointer-events-none
          "
        />

        {/* CONTENIDO */}
        <div className="relative z-10">

          {/* TÍTULO */}
          <motion.p
            initial={{
              opacity: 0,
              letterSpacing: "0.4em",
            }}
            whileInView={{
              opacity: 1,
              letterSpacing: "0.25em",
            }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              uppercase
              text-[#75685D]
              text-xs sm:text-sm
              font-serif
            "
          >
            Nuestra Boda
          </motion.p>

          {/* ORNAMENTO SUPERIOR */}
          <div
            className="
              flex items-center justify-center
              gap-4 mt-8
            "
          >
            <span className="w-12 h-px bg-[#927D6B]" />
            <span className="text-[#927D6B] text-sm">
              ✦
            </span>
            <span className="w-12 h-px bg-[#927D6B]" />
          </div>

          {/* NOMBRE DE LA NOVIA */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="
              mt-10
              text-4xl sm:text-5xl md:text-6xl
              font-playfair
              font-normal
              text-[#171717]
              leading-tight
            "
          >
            Landy Evelyne Cervantes Ugalde
          </motion.h1>

          {/* SÍMBOLO */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="
              my-4
              text-4xl sm:text-5xl
              text-[#927D6B]
              font-[DancingScript]
            "
          >
            &amp;
          </motion.p>

          {/* NOMBRE DEL NOVIO */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="
              text-4xl sm:text-5xl md:text-6xl
              font-playfair
              font-normal
              text-[#171717]
              leading-tight
            "
          >
            Jose Emmanuel Mancilla Gonzalez
          </motion.h1>

          {/* DIVISOR */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "7rem" }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
            className="
              h-px
              bg-[#927D6B]
              mx-auto
              mt-12
            "
          />

          {/* TEXTO DE BENDICIÓN */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="
              mt-10
              text-2xl sm:text-3xl
              text-[#171717]
              font-[DancingScript]
              leading-relaxed
            "
          >
            Con la bendición de nuestros padres
          </motion.p>

          {/* PADRES */}
          <div
            className="
              grid grid-cols-1 md:grid-cols-2
              gap-12 md:gap-0
              mt-14
            "
          >
            {/* PADRES DE LA NOVIA */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="
                px-2 sm:px-6
                md:border-r
                md:border-[#B8A99B]/60
              "
            >
              <h2
                className="
                  text-[#75685D]
                  uppercase
                  tracking-[0.18em]
                  text-xs sm:text-sm
                  font-serif
                  mb-8
                "
              >
                Padres de la Novia
              </h2>

              <p
                className="
                  text-lg sm:text-xl
                  font-playfair
                  text-[#171717]
                  leading-relaxed
                "
              >
                Zenaido Cervantes Martinez
              </p>

              <div
                className="
                  w-8 h-px
                  bg-[#B8A99B]
                  mx-auto my-5
                "
              />

              <p
                className="
                  text-lg sm:text-xl
                  font-playfair
                  text-[#171717]
                  leading-relaxed
                "
              >
                Paula Ugalde Hernandez
              </p>
            </motion.div>

            {/* PADRES DEL NOVIO */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="
                px-2 sm:px-6
              "
            >
              <h2
                className="
                  text-[#75685D]
                  uppercase
                  tracking-[0.18em]
                  text-xs sm:text-sm
                  font-serif
                  mb-8
                "
              >
                Padres del Novio
              </h2>

              <p
                className="
                  text-lg sm:text-xl
                  font-playfair
                  text-[#171717]
                  leading-relaxed
                "
              >
                Maria Juana Gonzalez Pineda
              </p>

              <div
                className="
                  w-8 h-px
                  bg-[#B8A99B]
                  mx-auto my-5
                "
              />

              <p
                className="
                  text-lg sm:text-xl
                  font-playfair
                  text-[#171717]
                  leading-relaxed
                "
              >
                Mario Alberto Mancilla Ortiz{" "}
                <span
                  className="
                    inline-block
                    text-[#927D6B]
                    text-[0.85em]
                    ml-1
                  "
                  aria-label="Finado"
                  title="Finado"
                >
                  †
                </span>
              </p>
            </motion.div>
          </div>

          {/* DETALLE INFERIOR */}
          <div
            className="
              flex items-center
              justify-center
              gap-4
              mt-16
            "
          >
            <span
              className="
                w-12 h-px
                bg-[#927D6B]/70
              "
            />

            <span
              className="
                text-[#927D6B]
                text-lg
              "
            >
              ✦
            </span>

            <span
              className="
                w-12 h-px
                bg-[#927D6B]/70
              "
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Novios;
