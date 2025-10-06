import EncabezadoNotas from "../components/PaginaSeguimientoNotas/EncabezadoNotas";
import FiltroNotas from "../components/PaginaSeguimientoNotas/FiltroNotas";
import TablaNotas from "../components/PaginaSeguimientoNotas/TablaNotas";
import EstadisticasNotas from "../components/PaginaSeguimientoNotas/EstadisticasNotas";
import PaginacionNotas from "../components/PaginaSeguimientoNotas/PaginacionNotas";
import ModalVerNota from "../components/PaginaSeguimientoNotas/ModalVerNota";

export default function ListadoNotas() {
  return (
    <>
      <div className="container-fluid">
        <EncabezadoNotas />
        <FiltroNotas />
        <TablaNotas />
        <EstadisticasNotas />
        <PaginacionNotas />
        <ModalVerNota />
      </div>
    </>
  );
}
