import React, { useState } from "react";
import Header from "../components/VistaNotasEstudiantes/Header";
import TablaNotas from "../components/VistaNotasEstudiantes/TablaNotas";

export default function VistaNotasEstudiantes() {
  const [filters, setFilters] = useState({
    estudiante: "",
    materia: "",
    periodo: "",
    docente: "",
    estado: "",
  });

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Vista de Notas por Estudiante</h1>
      <Header filters={filters} setFilters={setFilters} />
      <TablaNotas filters={filters} />
    </div>
  );
}