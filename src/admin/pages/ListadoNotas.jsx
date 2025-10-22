import { useEffect, useState } from "react";
import { obtenerNotas } from "../../services/notaService"; // ya lo tienes bien

import EncabezadoNotas from "../components/PaginaSeguimientoNotas/EncabezadoNotas";
import FiltroNotas from "../components/PaginaSeguimientoNotas/FiltroNotas";
import TablaNotas from "../components/PaginaSeguimientoNotas/TablaNotas";
import EstadisticasNotas from "../components/PaginaSeguimientoNotas/EstadisticasNotas";
import PaginacionNotas from "../components/PaginaSeguimientoNotas/PaginacionNotas";
import ModalVerNota from "../components/PaginaSeguimientoNotas/ModalVerNota";

export default function ListadoNotas() {
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    obtenerNotas()
      .then(response => setNotas(response.data))
      .catch(error => console.error("Error al obtener notas:", error));
  }, []);

  return (
    <div className="container-fluid">
      <EncabezadoNotas />
      <FiltroNotas />
      <TablaNotas notas={notas} /> {/* Aquí pasas las notas como prop */}
      <EstadisticasNotas />
      <PaginacionNotas />
      <ModalVerNota />
    </div>
  );
}
