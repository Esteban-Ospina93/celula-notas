import { useNavigate, Link } from "react-router-dom";

export default function StudentPage({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // actualiza el estado global
    navigate("/Login"); // redirige al login
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Bienvenido, Estudiante 🎓</h2>

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">📋 Ver tus notas</h5>
          <p className="card-text">Consulta las calificaciones que han sido registradas para ti.</p>
          <Link to="/ver-notas" className="btn btn-primary">Ver notas</Link>
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
