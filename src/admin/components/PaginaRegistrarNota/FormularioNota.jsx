export default function FormularioNota() {
  return (
    <form>
      {/* Información básica */}
      <div className="form-group row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <label>Estudiante</label>
          <select className="form-control">
            <option>Seleccione...</option>
          </select>
        </div>
        <div className="col-sm-6">
          <label>Asignatura</label>
          <select className="form-control">
            <option>Seleccione...</option>
          </select>
        </div>
      </div>

      <div className="form-group row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <label>Periodo Académico</label>
          <select className="form-control">
            <option>Seleccione...</option>
          </select>
        </div>
        <div className="col-sm-6">
          <label>Docente</label>
          <select className="form-control">
            <option>Seleccione...</option>
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
              <input type="number" className="form-control" />
              <small className="form-text text-muted">Primer corte evaluativo</small>
            </div>
            <div className="col-sm-4">
              <label>Nota 2 (30%)</label>
              <input type="number" className="form-control" />
              <small className="form-text text-muted">Segundo corte evaluativo</small>
            </div>
            <div className="col-sm-4">
              <label>Nota 3 (40%)</label>
              <input type="number" className="form-control" />
              <small className="form-text text-muted">Tercer corte evaluativo</small>
            </div>
          </div>

          <div className="form-group">
            <label>Promedio Calculado</label>
            <div className="alert alert-info">
              <strong>0.0</strong> - <span>Sin calificar</span>
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
            <textarea className="form-control" rows="3"></textarea>
          </div>
          <div className="form-group">
            <label>Recomendaciones</label>
            <textarea className="form-control" rows="3"></textarea>
          </div>
          <div className="form-group">
            <label>Fecha de Evaluación</label>
            <input type="date" className="form-control" />
          </div>
        </div>
      </div>
    </form>
  );
}
