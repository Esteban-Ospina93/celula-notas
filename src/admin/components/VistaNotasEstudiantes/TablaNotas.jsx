import React, { useEffect, useState } from "react";

export default function TablaNotas({ filters }) {
  const [notas, setNotas] = useState([
    {
      estudiante: "Sara Cardona",
      materia: "Matemáticas",
      periodo: "1",
      docente: "Diana Sanchez",
      nota: 4.5,
      estado: "Aprobado",
    },
    {
      estudiante: "Luis Ramirez",
      materia: "Sociales",
      periodo: "2",
      docente: "Jose Gómez",
      nota: 3.2,
      estado: "Aprobado",
    },
    {
      estudiante: "Luisa zapata",
      materia: "Español",
      periodo: "3",
      docente: "Ana Velez",
      nota: 2.8,
      estado: "Reprobado",
    },
    {
      estudiante: "Sofía Martínez",
      materia: "Inglés",
      periodo: "4",
      docente: "Carlos Ruiz",
      nota: 4.7,
      estado: "Aprobado",
    },
  ]);

  const [filteredNotas, setFilteredNotas] = useState(notas);

  useEffect(() => {
    const filtered = notas.filter((n) => {
      return (
        (filters.estudiante === "" ||
          n.estudiante.toLowerCase().includes(filters.estudiante.toLowerCase())) &&
        (filters.materia === "" || n.materia === filters.materia) &&
        (filters.periodo === "" || n.periodo === filters.periodo) &&
        (filters.docente === "" || n.docente === filters.docente) &&
        (filters.estado === "" || n.estado === filters.estado)
      );
    });
    setFilteredNotas(filtered);
  }, [filters, notas]);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" width="100%" cellSpacing="0">
            <thead className="thead-light">
              <tr>
                <th>Estudiante</th>
                <th>Materia</th>
                <th>Periodo</th>
                <th>Docente</th>
                <th>Nota</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {filteredNotas.length > 0 ? (
                filteredNotas.map((nota, index) => (
                  <tr key={index}>
                    <td>{nota.estudiante}</td>
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
                  <td colSpan="6" className="text-center text-muted">
                    No se encontraron resultados
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
