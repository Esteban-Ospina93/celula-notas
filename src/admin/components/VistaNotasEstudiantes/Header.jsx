import React from "react";

export default function Header({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3 d-flex justify-content-between align-items-center">
        <h6 className="m-0 font-weight-bold text-primary">
          Filtros de búsqueda
        </h6>
      </div>

      <div className="card-body">
        <form>
          <div className="row align-items-end">

          {/* Nombres estudiante */}
            <div className="col-md-3 mb-3">
              <center><label className="form-label">Nombre del Estudiante</label>
              <input
                type="text"
                className="form-control"
                value="Juan Manuel Ramírez Cardona"
                disabled
                readOnly
              /></center>
            </div>

            {/* Materia */}
            <div className="col-md-2 mb-3">
              <center><label className="form-label">Materia</label></center>
              <select
                className="form-control"
                name="materia"
                value={filters.materia}
                onChange={handleChange}
              >
                <option value="">Seleccionar</option>
                <option value="Matemáticas">Matemáticas</option>
                <option value="Sociales">Sociales</option>
                <option value="Español">Español</option>
                <option value="Inglés">Inglés</option>
              </select>
            </div>

            {/* Periodo */}
            <div className="col-md-2 mb-3">
              <center><label className="form-label">Periodo</label></center>
              <select
                className="form-control"
                name="periodo"
                value={filters.periodo}
                onChange={handleChange}
              >
                <option value="">Seleccionar</option>
                <option value="1">Periodo 1</option>
                <option value="2">Periodo 2</option>
              </select>
            </div>

            {/* Docente */}
            <div className="col-md-2 mb-3">
              <center><label className="form-label">Docente</label></center>
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

            {/* Estado */}
            <div className="col-md-2 mb-3">
              <center><label className="form-label">Estado</label></center>
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

          </div>
        </form>
      </div>
    </div>
  );
}

