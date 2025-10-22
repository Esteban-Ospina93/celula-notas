import { useEffect, useState } from "react";

export default function TablaNotas() {
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    const notasGuardadas = JSON.parse(localStorage.getItem("notas")) || [];
    setNotas(notasGuardadas);
  }, []);

  const eliminarNota = (index) => {
    const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar esta nota?");
    if (!confirmacion) return;

    const nuevasNotas = [...notas];
    nuevasNotas.splice(index, 1);
    setNotas(nuevasNotas);
    localStorage.setItem("notas", JSON.stringify(nuevasNotas));
  };

  return (
    <>
      <div className="row">
        <div className="input-group mb-3 rounded-pill overflow-hidden border w-50">
          <span className="input-group-text bg-white border-0 pe-1">
            <i className="fas fa-search"></i>
          </span>
          <input
            id="search-input"
            type="search"
            className="form-control hide-focus border-0"
            placeholder="Buscar Estudiante"
          />
        </div>

        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>#</th>
              <th>Estudiante</th>
              <th>Asignatura</th>
              <th>Periodo</th>
              <th>Nota 1</th>
              <th>Nota 2</th>
              <th>Nota 3</th>
              <th>Promedio</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {notas.length === 0 ? (
              <tr>
                <td colSpan="10" className="text-center">No hay notas registradas.</td>
              </tr>
            ) : (
              notas.map((nota, index) => {
                const promedio = parseFloat(nota.promedio || nota.valor || 0);
                const estado = promedio >= 3.0 ? "Aprobado" : "Reprobado";
                const badgeClass = promedio >= 3.0 ? "badge-success" : "badge-danger";

                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{nota.estudiante || "—"}</td>
                    <td>{nota.asignatura || "—"}</td>
                    <td>{nota.periodo || nota.tipoevaluacion || "—"}</td>
                    <td>{nota.nota1 || "—"}</td>
                    <td>{nota.nota2 || "—"}</td>
                    <td>{nota.nota3 || "—"}</td>
                    <td>{promedio}</td>
                    <td><span className={`badge ${badgeClass}`}>{estado}</span></td>
                    <td>
                      <button className="btn btn-sm btn-warning me-1">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-danger me-1"
                        onClick={() => eliminarNota(index)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                      <button className="btn btn-sm btn-info">
                        <i className="fas fa-eye"></i>
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
