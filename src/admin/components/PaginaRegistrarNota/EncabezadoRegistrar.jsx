import { Link } from "react-router-dom";

export default function EncabezadoRegistrar() {
  return (
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Registrar Nota</h1>
      <Link
        to="/"
        className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
      >
        <i className="fas fa-list fa-sm text-white-50"></i> Listado
      </Link>
    </div>
  );
}
