export default function PanelLateral() {
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Escala de Calificación</h6>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <span className="badge badge-success p-2">4.6 - 5.0</span>
            <small className="text-muted">Excelente</small>
          </div>
          <div className="mb-3">
            <span className="badge badge-primary p-2">4.1 - 4.5</span>
            <small className="text-muted">Sobresaliente</small>
          </div>
          <div className="mb-3">
            <span className="badge badge-warning p-2">3.6 - 4.0</span>
            <small className="text-muted">Bueno</small>
          </div>
          <div className="mb-3">
            <span className="badge badge-info p-2">3.0 - 3.5</span>
            <small className="text-muted">Aceptable</small>
          </div>
          <div className="mb-3">
            <span className="badge badge-danger p-2">0.0 - 2.9</span>
            <small className="text-muted">Reprobado</small>
          </div>
        </div>
      </div>

      <div className="card shadow">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Información del Sistema</h6>
        </div>
        <div className="card-body">
          <p className="small">
            <strong>Nota:</strong> El sistema calcula automáticamente el promedio con los siguientes pesos:
          </p>
          <ul className="small">
            <li>Nota 1: 30% del promedio</li>
            <li>Nota 2: 30% del promedio</li>
            <li>Nota 3: 40% del promedio</li>
          </ul>
          <p className="small text-muted">
            La nota mínima para aprobar es 3.0
          </p>
        </div>
      </div>
    </>
  );
}
