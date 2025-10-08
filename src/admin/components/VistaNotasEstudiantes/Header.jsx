import React from "react";

export default function Header({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3 d-flex justify-content-between align-items-center">
        <h6 className="m-0 font-weight-bold text-primary">
          Filtros de búsqueda
        </h6>
      </div>

      <div className="card-body">
        <form onSubmit={handleSearch}>
          <div className="row align-items-end">

            {/* 🔹 Nombre del estudiante */}
            <div className="col-md-3 mb-3">
              <label className="form-label">Nombre del Estudiante</label>
              <input
                type="text"
                className="form-control"
                name="estudiante"
                value={filters.estudiante}
                onChange={handleChange}
              />
            </div>

            {/* 🔹 Materia */}
            <div className="col-md-2 mb-3">
              <label className="form-label">Materia</label>
              <select
                className="form-control"
                name="materia"
                value={filters.materia}
                onChange={handleChange}
              >
                <option value="">Seleccionar</option>
                <option value="Matemáticas">Matemáticas</option>
                <option value="Ciencias">Sociales</option>
                <option value="Español">Español</option>
                <option value="Inglés">Inglés</option>
              </select>
            </div>

            {/* 🔹 Periodo */}
            <div className="col-md-2 mb-3">
              <label className="form-label">Periodo</label>
              <select
                className="form-control"
                name="periodo"
                value={filters.periodo}
                onChange={handleChange}
              >
                <option value="">Seleccionar</option>
                <option value="1">Periodo 1</option>
                <option value="2">Periodo 2</option>
                <option value="3">Periodo 3</option>
                <option value="4">Periodo 4</option>
              </select>
            </div>

            {/* 🔹 Docente */}
            <div className="col-md-2 mb-3">
              <label className="form-label">Docente</label>
              <select
                className="form-control"
                name="docente"
                value={filters.docente}
                onChange={handleChange}
              >
                <option value="">Seleccionar</option>
                <option value="Diana Sanchez">Diana Sanchez</option>
                <option value="Jose Gómez">Jose Gómez</option>
                <option value="Ana Velez">Ana Velez</option>
                <option value="Carlos Ruiz">Carlos Ruiz</option>
              </select>
            </div>

            {/* 🔹 Estado */}
            <div className="col-md-2 mb-3">
              <label className="form-label">Estado</label>
              <select
                className="form-control"
                name="estado"
                value={filters.estado}
                onChange={handleChange}
              >
                <option value="">Seleccionar</option>
                <option value="Aprobado">Aprobado</option>
                <option value="Reprobado">Reprobado</option>
              </select>
            </div>

            {/* 🔹 Botón de búsqueda */}
            <div className="col-md-1 mb-3 d-flex align-items-end">
              <button type="submit" className="btn btn-primary w-100">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
