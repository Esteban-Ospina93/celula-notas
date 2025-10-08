import { Link } from "react-router-dom";


export default function EncabezadoNotas() {
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Seguimiento de Notas</h1>
        <Link
          to="/registrar-nota"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-plus fa-sm text-white-50"></i> Registrar Nota
        </Link>
      </div>
    </>
  );
}
