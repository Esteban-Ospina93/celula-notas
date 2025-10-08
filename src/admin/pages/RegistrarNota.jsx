import { Link } from "react-router-dom";
import EncabezadoRegistrar from "../components/PaginaRegistrarNota/EncabezadoRegistrar";
import FormularioNota from "../components/PaginaRegistrarNota/FormularioNota";
import PanelLateral from "../components/PaginaRegistrarNota/PanelLateral";
import BotonRegistrar from "../components/PaginaRegistrarNota/BotonRegistrar";

export default function RegistrarNota() {
  return (
    <div className="container-fluid">
      <EncabezadoRegistrar />
      <div className="row">
        <div className="col-md-8">
          {/* Botón para volver al listado */}
          <Link to="/" className="btn btn-secondary mb-3">
            ← Volver al listado de notas
          </Link>

          <FormularioNota />
          <BotonRegistrar />
        </div>
        <div className="col-md-4">
          <PanelLateral />
        </div>
      </div>
    </div>
  );
}
