import { Link } from "react-router-dom";

export default function FamilyPage() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Bienvenido, Familiar 🏡</h2>

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">📋 Ver notas académicas</h5>
          <p className="card-text">Consulta las calificaciones registradas para el estudiante que acompañas.</p>
          <Link to="/ver-notas" className="btn btn-primary">Ver notas</Link>
        </div>
      </div>

      <div className="mt-4">
        <Link to="/Login" className="btn btn-outline-secondary">Cerrar sesión</Link>
      </div>
    </div>
  );
}
