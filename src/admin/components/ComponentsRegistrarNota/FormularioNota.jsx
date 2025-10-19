export default function FormularioNota({ nota, onChange}) {
  return (
    <form>
      {/* Información básica */}
      <div className="form-group row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <label>Estudiante</label>
          <select
            name="estudiante"
            className="form-control"
            value={nota.estudiante}
            onChange={onChange}
          >
            <option value="">Seleccione...</option>
            <option value="Juan Pérez">Juan Pérez</option>
            <option value="Ana Gómez">Ana Gómez</option>
            <option value="Luis Torres">Luis Torres</option>
          </select>
        </div>
        <div className="col-sm-6">
          <label>Asignatura</label>
          <select
            name="asignatura"
            className="form-control"
            value={nota.asignatura}
            onChange={onChange}
          >
            <option value="">Seleccione...</option>
            <option value="Matemáticas">Matemáticas</option>
            <option value="Ciencias">Ciencias</option>
            <option value="Historia">Historia</option>
          </select>
        </div>
      </div>

      <div className="form-group row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <label>Periodo Académico</label>
          <select
            name="periodo"
            className="form-control"
            value={nota.periodo}
            onChange={onChange}
          >
            <option value="">Seleccione...</option>
            <option value="2025-1">2025-1</option>
            <option value="2025-2">2025-2</option>
          </select>
        </div>
        <div className="col-sm-6">
          <label>Docente</label>
          <select
            name="docente"
            className="form-control"
            value={nota.docente}
            onChange={onChange}
          >
            <option value="">Seleccione...</option>
            <option value="Yeison">Yeison</option>
            <option value="María López">María López</option>
          </select>
        </div>
      </div>

      {/* Calificaciones */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Calificaciones</h6>
        </div>
        <div className="card-body">
          <div className="form-group row">
            <div className="col-sm-4 mb-3 mb-sm-0">
              <label>Nota 1 (30%)</label>
              <input
                type="number"
                name="nota1"
                className="form-control"
                value={nota.nota1}
                onChange={onChange}
              />
              <small className="form-text text-muted">Primer corte evaluativo</small>
            </div>
            <div className="col-sm-4">
              <label>Nota 2 (30%)</label>
              <input
                type="number"
                name="nota2"
                className="form-control"
                value={nota.nota2}
                onChange={onChange}
              />
              <small className="form-text text-muted">Segundo corte evaluativo</small>
            </div>
            <div className="col-sm-4">
              <label>Nota 3 (40%)</label>
              <input
                type="number"
                name="nota3"
                className="form-control"
                value={nota.nota3}
                onChange={onChange}
              />
              <small className="form-text text-muted">Tercer corte evaluativo</small>
            </div>
          </div>

          <div className="form-group">
            <label>Promedio Calculado</label>
            <div className="alert alert-info">
              <strong>
                {(
                  (parseFloat(nota.nota1 || 0) * 0.3 +
                    parseFloat(nota.nota2 || 0) * 0.3 +
                    parseFloat(nota.nota3 || 0) * 0.4) || 0
                ).toFixed(2)}
              </strong>{" "}
              - <span>Calculado automáticamente</span>
            </div>
          </div>
        </div>
      </div>

      {/* Información adicional */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Información Adicional</h6>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label>Observaciones</label>
            <textarea
              name="observaciones"
              className="form-control"
              rows="3"
              value={nota.observaciones}
              onChange={onChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Recomendaciones</label>
            <textarea
              name="recomendaciones"
              className="form-control"
              rows="3"
              value={nota.recomendaciones}
              onChange={onChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Fecha de Evaluación</label>
            <input
              type="date"
              name="fecha"
              className="form-control"
              value={nota.fecha}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </form>
  );
}