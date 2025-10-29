export default function FormularioNota({ nota, onChange, estudiantes = [], materias = [] }) {
  return (
    <form>
      {/* Información básica */}
      <div className="form-group row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <label>Estudiante</label>
          <select
            name="estudiante"
            className="form-control"
            value={String(nota.estudiante)}
            onChange={onChange}
          >
            <option value="">Seleccione...</option>
            {estudiantes.map(e => (
              <option key={e.id} value={String(e.id)}>
                {`Estudiante #${e.id}`}
              </option>
            ))}
          </select>
        </div>

        <div className="col-sm-6">
          <label>Asignatura</label>
          <select
            name="asignatura"
            className="form-control"
            value={String(nota.asignatura)}
            onChange={onChange}
          >
            <option value="">Seleccione...</option>
            {materias.map(m => (
              <option key={m.id} value={String(m.id)}>
                {m.nombre}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tipo y valor de nota */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Registro de Nota</h6>
        </div>
        <div className="card-body">
          <div className="form-group row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <label>Tipo de Nota</label>
              <select
                name="tipoNota"
                className="form-control"
                value={nota.tipoNota}
                onChange={onChange}
              >
                <option value="">Seleccione...</option>
                <option value="NOTA1">NOTA1</option>
                <option value="NOTA2">NOTA2</option>
                <option value="NOTA3">NOTA3</option>
              </select>
            </div>
            <div className="col-sm-6">
              <label>Valor</label>
              <input
                type="number"
                name="valor"
                className="form-control"
                value={nota.valor}
                onChange={onChange}
                min="0"
                max="5"
                step="0.01"
              />
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
