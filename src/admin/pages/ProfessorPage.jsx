import { useNavigate, Link } from "react-router-dom";

export default function ProfessorPage({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // borra el estado y el contexto
    navigate("/Login"); // redirige al login
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Bienvenido, Profesor 👨‍🏫</h2>

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">📋 Ver notas registradas</h5>
          <p className="card-text">Consulta el listado de notas guardadas en el sistema.</p>
          <Link to="/ver-notas" className="btn btn-primary">Ir al listado</Link>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">📝 Registrar nueva nota</h5>
          <p className="card-text">Accede al formulario para registrar una nueva evaluación.</p>
          <Link to="/registrar-nota" className="btn btn-success">Registrar nota</Link>
        </div>
      </div>

      <div className="mt-4">
        <button onClick={handleLogout} className="btn btn-outline-secondary">
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}
