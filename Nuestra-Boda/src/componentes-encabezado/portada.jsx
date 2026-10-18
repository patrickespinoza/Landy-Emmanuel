
import React, { useRef, useState } from "react";

export default function Portada() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error al reproducir el audio:", error);
      });
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      className="
        relative
        w-full
        h-[100svh]
        min-h-[550px]
        overflow-hidden
        bg-[#171717]
      "
    >
      {/* ======================================
          FOTOGRAFÍA DE PORTADA
          ====================================== */}
      <img
        src="/portada.jpg"
        alt="Landy y Emmanuel"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-[20%_35%]
          md:object-[50%_25%]
        "
      />

      {/* ======================================
          DEGRADADO OSCURO INFERIOR
          No oscurece la parte superior.
          ====================================== */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[48%]
          sm:h-[45%]
          md:h-[42%]
          z-[1]
          pointer-events-none
          bg-gradient-to-t
          from-black/90
          via-black/55
          to-transparent
        "
      />

      {/* ======================================
          INFORMACIÓN INFERIOR
          ====================================== */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-10
          flex
          flex-col
          items-center
          justify-end
          text-center
          px-3 sm:px-6
          pb-10
          sm:pb-14
          md:pb-16
          text-[#F8F4EE]
        "
        style={{
          textShadow: "0 2px 12px rgba(0,0,0,0.45)",
        }}
      >
        {/* ======================================
            NOMBRES EN UN SOLO RENGLÓN
            ====================================== */}
        <h1
          className="
            flex
            flex-nowrap
            items-baseline
            justify-center
            gap-[0.18em]
            whitespace-nowrap
            font-playfair
            font-normal
            text-[clamp(1.65rem,6.4vw,5.5rem)]
            leading-[1.15]
            tracking-[-0.035em]
            text-[#F8F4EE]
          "
        >
          <span>Landy</span>

          <span
            className="
              font-[DancingScript]
              font-normal
              text-[0.8em]
              text-[#EDE5DC]
            "
          >
            &amp;
          </span>

          <span>Emmanuel</span>
        </h1>

        {/* ======================================
            DIVISOR DECORATIVO
            ====================================== */}
        <div
          className="
            flex
            items-center
            justify-center
            gap-3
            mt-5
            mb-4
          "
        >
          <span
            className="
              w-10 sm:w-16 md:w-20
              h-px
              bg-[#EDE5DC]/80
            "
          />

          <span
            className="
              text-[#EDE5DC]
              text-xs
            "
          >
            ✦
          </span>

          <span
            className="
              w-10 sm:w-16 md:w-20
              h-px
              bg-[#EDE5DC]/80
            "
          />
        </div>

        {/* ======================================
            FECHA
            ====================================== */}
        <p
          className="
            font-serif
            text-[11px]
            sm:text-sm
            md:text-base
            uppercase
            tracking-[0.16em]
            sm:tracking-[0.3em]
            text-[#F8F4EE]
          "
        >
          12 de diciembre de 2026
        </p>
      </div>
    </section>
  );
}
