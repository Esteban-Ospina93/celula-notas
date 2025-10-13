import React, { useMemo } from "react";

export default function TablaNotas({ filters }) {
  const notas = [
    { materia: "Matemáticas", periodo: "1", docente: "Diana Sanchez", nota: 4.5, estado: "Aprobado" },
    { materia: "Sociales", periodo: "2", docente: "Jose Gómez", nota: 3.2, estado: "Aprobado" },
    { materia: "Español", periodo: "1", docente: "Ana Velez", nota: 2.8, estado: "Reprobado" },
    { materia: "Inglés", periodo: "2", docente: "Carlos Ruiz", nota: 4.7, estado: "Aprobado" },
  ];

  // Filtros
  const notasFiltradas = useMemo(() => {
    return notas.filter((nota) => {
      return (
        (!filters.materia || nota.materia === filters.materia) &&
        (!filters.periodo || nota.periodo === filters.periodo) &&
        (!filters.docente || nota.docente === filters.docente) &&
        (!filters.estado || nota.estado === filters.estado)
      );
    });
  }, [filters]);

  // Promedio
  const promedio = useMemo(() => {
    if (notasFiltradas.length === 0) return 0;
    const suma = notasFiltradas.reduce((acc, n) => acc + n.nota, 0);
    return (suma / notasFiltradas.length).toFixed(1);
  }, [notasFiltradas]);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h5 className="mb-3 text-primary fw-bold">Notas del Estudiante</h5>

        {/* Tabla_notas */}
        <div className="table-responsive">
          <table className="table table-bordered text-center" width="100%" cellSpacing="0">
            <thead className="thead-light">
              <tr>
                <th>Materia</th>
                <th>Periodo</th>
                <th>Docente</th>
                <th>Nota</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {notasFiltradas.length > 0 ? (
                notasFiltradas.map((nota, index) => (
                  <tr key={index}>
                    <td>{nota.materia}</td>
                    <td>{nota.periodo}</td>
                    <td>{nota.docente}</td>
                    <td>{nota.nota}</td>
                    <td
                      className={
                        nota.estado === "Aprobado"
                          ? "text-success fw-bold"
                          : "text-danger fw-bold"
                      }
                    >
                      {nota.estado}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center text-muted">
                    No hay notas disponibles
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Estilo_promedio */}
        <div className="d-flex justify-content-center mt-4">
          <div
            className="card shadow-sm"
            style={{
              minWidth: "280px",
              borderRadius: "10px",
              borderLeft: "4px solid #1cc88a",
            }}
          >
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <div className="text-xs fw-bold text-success text-uppercase mb-1">
                  Promedio General
                </div>
                <div className="h5 mb-0 fw-bold text-gray-800">{promedio}</div>
              </div>
              <div>
                <i
                  className="fas fa-chart-line"
                  style={{
                    fontSize: "1.8rem",
                    color: "#1cc88a",
                  }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
