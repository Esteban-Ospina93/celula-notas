export default function FiltroNotas({ materias, materiaSeleccionada, setMateriaSeleccionada }) {
  return (
    <div className="row mb-4">
      <div className="col-md-3">
        <label className="form-label">Periodo Académico</label>
        <select id="filtro-periodo" className="form-control">
          <option value="">Todos los periodos</option>
          <option value="1">Primer Trimestre 2024</option>
          <option value="2">Segundo Trimestre 2024</option>
          <option value="3">Tercer Trimestre 2024</option>
        </select>
      </div>

      <div className="col-md-3">
        <label className="form-label">Asignatura</label>
        <select
          id="filtro-asignatura"
          className="form-control"
          value={materiaSeleccionada}
          onChange={(e) => setMateriaSeleccionada(e.target.value)}
        >
          <option value="">Todas las asignaturas</option>
          {materias.map((materia) => (
            <option key={materia.id} value={materia.nombre}>
              {materia.nombre}
            </option>
          ))}
        </select>
      </div>

      <div className="col-md-3">
        <label className="form-label">Grado</label>
        <select id="filtro-grado" className="form-control">
          <option value="">Todos los grados</option>
          <option value="10">10°</option>
          <option value="11">11°</option>
        </select>
      </div>

      <div className="col-md-3">
        <label className="form-label">Estado</label>
        <select id="filtro-estado" className="form-control">
          <option value="">Todos los estados</option>
          <option value="aprobado">Aprobado</option>
          <option value="reprobado">Reprobado</option>
        </select>
      </div>
    </div>
  );
}
