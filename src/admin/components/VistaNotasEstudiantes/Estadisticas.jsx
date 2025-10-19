function Estadisticas() {
  const datos = [
    { titulo: "Promedio General", valor: "3.8", color: "primary" },
    { titulo: "Aprobadas", valor: "75%", color: "success" },
    { titulo: "En Riesgo", valor: "15%", color: "warning" },
    { titulo: "Reprobadas", valor: "10%", color: "danger" },
  ];

  return (
    <div className="row">
      {datos.map((item, index) => (
        <div className="col-md-3 mb-4" key={index}>
          <div className={`card border-left-${item.color} shadow h-100 py-2`}>
            <div className="card-body">
              <div className="text-xs font-weight-bold text-uppercase mb-1">
                {item.titulo}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {item.valor}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Estadisticas;