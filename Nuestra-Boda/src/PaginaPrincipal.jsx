import React from "react";
import Celebracion from "./componentes-encabezado/ubicacion";
import Intinerario2 from "./componentes-encabezado/itinerario2";
import Novios from "./componentes-encabezado/novios";
import ConfirmacionAsistencia from "./componentes-encabezado/confirmacion";
import MesaDeRegalos from "./componentes-encabezado/MesaRegalos";
import FraseFinal from "./componentes-encabezado/Frasefinal";

export default function PaginaPrincipal() {

  return (
    <div>

      <Novios />

      <Celebracion/>

      <Intinerario2/>

      <MesaDeRegalos/>

      <ConfirmacionAsistencia/>

      <FraseFinal/>
    </div>
  );
}