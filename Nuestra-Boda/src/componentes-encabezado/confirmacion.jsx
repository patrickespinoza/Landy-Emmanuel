
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Users,
  Check,
  X,
} from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY
// ==========================================

// Código de país 52 + número de 10 dígitos
const WHATSAPP_NOVIA = "527714031586";
const WHATSAPP_NOVIO = "527717592482";

// ==========================================
// ANIMACIONES
// ==========================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
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
// COMPONENTE PRINCIPAL
// ==========================================

export default function ConfirmacionAsistencia() {
  const [nombre, setNombre] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [confirmacion, setConfirmacion] = useState("");

  // ==========================================
  // ENVIAR CONFIRMACIÓN POR WHATSAPP
  // FUNCIÓN ORIGINAL - SIN CAMBIOS
  // ==========================================

  const enviarConfirmacion = (numeroWhatsApp) => {
    if (!nombre.trim() || !asistencia) {
      setConfirmacion(
        "Por favor, escribe tu nombre y selecciona si asistirás."
      );
      return;
    }

    if (
      asistencia === "Sí asistiré" &&
      (!invitados || Number(invitados) < 1)
    ) {
      setConfirmacion(
        "Por favor, indica el número de invitados."
      );
      return;
    }

    setConfirmacion("");

    const numeroInvitados =
      asistencia === "No asistiré" ? "0" : invitados;

    const textoWhatsApp = [
      "💍 *CONFIRMACIÓN DE ASISTENCIA*",
      "🤍 *Boda de Landy y Emmanuel*",
      "📅 *12 de diciembre de 2026*",
      "",
      `👤 *Nombre:* ${nombre.trim()}`,
      `💌 *Asistencia:* ${asistencia}`,
      `👥 *Número de invitados:* ${numeroInvitados}`,
      "",
      "💬 *Mensaje para los novios:*",
      mensaje.trim() || "Sin mensaje adicional",
    ].join("\n");

    const urlWhatsApp =
      `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoWhatsApp)}`;

    window.open(urlWhatsApp, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="
        relative
        w-full
        bg-[#171717]
        text-white
        px-5 sm:px-8
        pt-8 pb-24
        sm:pt-12 sm:pb-28
        overflow-hidden
      "
    >
      {/* DECORACIONES CLÁSICAS */}
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

      <div className="relative z-10 max-w-2xl mx-auto">

        {/* ======================================
            ENCABEZADO
            ====================================== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <Heart
            size={28}
            strokeWidth={1.2}
            className="text-[#EDE5DC] mx-auto mb-6"
          />

          <p
            className="
              uppercase
              tracking-[0.25em]
              text-[#D3C3B4]
              text-xs sm:text-sm
              font-serif
              mb-5
            "
          >
            Nos encantaría verte
          </p>

          <h2
            className="
              text-4xl sm:text-5xl
              font-playfair
              font-normal
              text-white
              leading-tight
            "
          >
            Confirmación de Asistencia
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

          <p
            className="
              text-[#EDE5DC]
              text-sm sm:text-base
              leading-relaxed
              mt-7 mb-10
              max-w-md mx-auto
            "
          >
            Nos encantará saber si podremos contar
            con tu presencia en nuestro día especial.
          </p>
        </motion.div>

        {/* ======================================
            FORMULARIO CLÁSICO
            ====================================== */}
        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          onSubmit={(e) => e.preventDefault()}
          className="
            bg-[#EDE5DC]
            p-2 sm:p-3
            shadow-[0_20px_60px_rgba(0,0,0,0.25)]
          "
        >
          {/* MARCO INTERIOR */}
          <div
            className="
              relative
              border border-[#A9998B]
              px-5 py-10
              sm:px-9 sm:py-12
              space-y-7
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
                pb-3
              "
            >
              <span className="w-10 h-px bg-[#927D6B]" />
              <span className="text-[#927D6B] text-sm">
                ✦
              </span>
              <span className="w-10 h-px bg-[#927D6B]" />
            </div>

            {/* NOMBRE */}
            <div>
              <label
                htmlFor="nombre-invitado"
                className="
                  block
                  text-[#171717]
                  text-sm
                  font-medium
                  mb-3
                "
              >
                Nombre y apellido
              </label>

              <input
                id="nombre-invitado"
                type="text"
                placeholder="Escribe tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="
                  w-full
                  px-5 py-4
                  bg-white
                  text-[#171717]
                  border border-[#B8A99B]
                  placeholder:text-[#887B6E]
                  outline-none
                  focus:border-[#171717]
                  transition-colors
                "
              />
            </div>

            {/* ASISTENCIA */}
            <div>
              <p
                className="
                  text-[#171717]
                  text-sm
                  font-medium
                  mb-3
                "
              >
                ¿Nos acompañarás?
              </p>

              <div className="grid grid-cols-2 gap-3">

                {/* SÍ ASISTIRÉ */}
                <button
                  type="button"
                  onClick={() => setAsistencia("Sí asistiré")}
                  className={`
                    flex items-center
                    justify-center gap-2
                    py-4 px-2
                    border
                    text-sm sm:text-base
                    transition-all duration-300
                    ${
                      asistencia === "Sí asistiré"
                        ? "bg-[#171717] text-white border-[#171717]"
                        : "bg-white border-[#B8A99B] text-[#171717] hover:border-[#171717]"
                    }
                  `}
                >
                  <Check size={17} />
                  Sí asistiré
                </button>

                {/* NO ASISTIRÉ */}
                <button
                  type="button"
                  onClick={() => {
                    setAsistencia("No asistiré");
                    setInvitados("");
                  }}
                  className={`
                    flex items-center
                    justify-center gap-2
                    py-4 px-2
                    border
                    text-sm sm:text-base
                    transition-all duration-300
                    ${
                      asistencia === "No asistiré"
                        ? "bg-[#171717] text-white border-[#171717]"
                        : "bg-white border-[#B8A99B] text-[#171717] hover:border-[#171717]"
                    }
                  `}
                >
                  <X size={17} />
                  No asistiré
                </button>
              </div>
            </div>

            {/* NÚMERO DE INVITADOS */}
            {asistencia !== "No asistiré" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <label
                  htmlFor="numero-invitados"
                  className="
                    flex items-center gap-2
                    text-[#171717]
                    text-sm
                    font-medium
                    mb-3
                  "
                >
                  <Users size={17} />
                  Número de invitados
                </label>

                <input
                  id="numero-invitados"
                  type="number"
                  min="1"
                  step="1"
                  placeholder="Ej. 2"
                  value={invitados}
                  onChange={(e) => setInvitados(e.target.value)}
                  className="
                    w-full
                    px-5 py-4
                    bg-white
                    text-[#171717]
                    border border-[#B8A99B]
                    placeholder:text-[#887B6E]
                    outline-none
                    focus:border-[#171717]
                    transition-colors
                  "
                />
              </motion.div>
            )}

            {/* MENSAJE */}
            <div>
              <label
                htmlFor="mensaje-novios"
                className="
                  block
                  text-[#171717]
                  text-sm
                  font-medium
                  mb-3
                "
              >
                Mensaje para los novios (opcional)
              </label>

              <textarea
                id="mensaje-novios"
                placeholder="Escribe un mensaje especial..."
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                rows={4}
                className="
                  w-full
                  px-5 py-4
                  bg-white
                  text-[#171717]
                  border border-[#B8A99B]
                  placeholder:text-[#887B6E]
                  outline-none
                  resize-none
                  focus:border-[#171717]
                  transition-colors
                "
              />
            </div>

            {/* DIVISOR CLÁSICO */}
            <div
              className="
                flex items-center
                justify-center
                gap-4
                py-2
              "
            >
              <span className="w-14 h-px bg-[#A9998B]" />
              <span className="text-[#927D6B]">✦</span>
              <span className="w-14 h-px bg-[#A9998B]" />
            </div>

            {/* TEXTO DESTINATARIO */}
            <div className="text-center">
              <p
                className="
                  text-[#171717]
                  font-playfair
                  text-xl sm:text-2xl
                "
              >
                Confirma tu asistencia
              </p>

              <p
                className="
                  text-[#65574A]
                  text-sm
                  mt-3
                "
              >
                Elige con quién deseas confirmar
                tu asistencia por WhatsApp.
              </p>
            </div>

            {/* ==================================
                BOTONES WHATSAPP
                ================================== */}
            <div className="flex flex-col gap-4">

              {/* WHATSAPP NOVIA */}
              <motion.button
                type="button"
                onClick={() =>
                  enviarConfirmacion(WHATSAPP_NOVIA)
                }
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="
                  w-full
                  flex items-center
                  justify-center
                  gap-3
                  py-4 px-4
                  bg-[#171717]
                  hover:bg-[#333333]
                  text-white
                  text-sm sm:text-base
                  font-medium
                  tracking-wide
                  transition-colors duration-300
                "
              >
                <MessageCircle
                  size={20}
                  strokeWidth={1.5}
                  className="shrink-0"
                />
                Confirmar con Landy 
              </motion.button>

              {/* WHATSAPP NOVIO */}
              <motion.button
                type="button"
                onClick={() =>
                  enviarConfirmacion(WHATSAPP_NOVIO)
                }
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="
                  w-full
                  flex items-center
                  justify-center
                  gap-3
                  py-4 px-4
                  bg-white
                  hover:bg-[#F8F5F1]
                  border border-[#171717]
                  text-[#171717]
                  text-sm sm:text-base
                  font-medium
                  tracking-wide
                  transition-colors duration-300
                "
              >
                <MessageCircle
                  size={20}
                  strokeWidth={1.5}
                  className="shrink-0"
                />
                Confirmar con Emmanuel
              </motion.button>
            </div>

            {/* MENSAJE DE VALIDACIÓN */}
            {confirmacion && (
              <p
                role="alert"
                className="
                  text-center
                  text-[#9B3030]
                  text-sm
                  font-medium
                "
              >
                {confirmacion}
              </p>
            )}

            {/* NOTA */}
            <p
              className="
                text-xs
                text-[#65574A]
                text-center
                leading-relaxed
                pt-2
              "
            >
              Al confirmar, se abrirá WhatsApp
              con tu mensaje preparado para enviarlo.
            </p>

            {/* ORNAMENTO INFERIOR */}
            <div
              className="
                flex items-center
                justify-center
                gap-3
                pt-3
              "
            >
              <span className="w-10 h-px bg-[#927D6B]" />
              <span className="text-[#927D6B] text-sm">
                ✦
              </span>
              <span className="w-10 h-px bg-[#927D6B]" />
            </div>
          </div>
        </motion.form>

        {/* MENSAJE FINAL */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            text-center
            font-playfair
            italic
            text-[#EDE5DC]
            text-lg sm:text-xl
            mt-14
          "
        >
          ¡Esperamos compartir este día contigo!
        </motion.p>
      </div>
    </section>
  );
}
