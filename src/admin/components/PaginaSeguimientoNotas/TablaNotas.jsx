export default function TablaNotas({ notas, agrupadas = false }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Estudiante</th>
          <th>Materia</th>
          {agrupadas ? (
            <>
              <th>NOTA1</th>
              <th>NOTA2</th>
              <th>NOTA3</th>
              <th>Promedio</th>
              <th>Estado</th>
            </>
          ) : (
            <>
              <th>Tipo de Nota</th>
              <th>Valor</th>
              <th>Fecha</th>
            </>
          )}
        </tr>
      </thead>
      <tbody>
        {notas.map((item, index) => (
          <tr key={index}>
            <td>
              {item.estudianteNombre ??
                item.estudiante?.usuario?.nombre ??
                `ID ${item.estudiante?.id}`}
            </td>
            <td>{item.asignatura ?? item.materia?.nombre ?? "—"}</td>

            {agrupadas ? (
              <>
                <td>
                  {item.notas?.NOTA1 ?? "—"}
                  <br />
                  <small className="text-muted">
                    {item.fechas?.NOTA1
                      ? new Date(item.fechas.NOTA1).toLocaleDateString()
                      : ""}
                  </small>
                </td>
                <td>
                  {item.notas?.NOTA2 ?? "—"}
                  <br />
                  <small className="text-muted">
                    {item.fechas?.NOTA2
                      ? new Date(item.fechas.NOTA2).toLocaleDateString()
                      : ""}
                  </small>
                </td>
                <td>
                  {item.notas?.NOTA3 ?? "—"}
                  <br />
                  <small className="text-muted">
                    {item.fechas?.NOTA3
                      ? new Date(item.fechas.NOTA3).toLocaleDateString()
                      : ""}
                  </small>
                </td>
                <td>{item.promedio ?? "—"}</td>
                <td>
                  {item.promedio !== "—" ? (
                    <button
                      className={`btn btn-sm ${
                        parseFloat(item.promedio) >= 3.0
                          ? "btn-success"
                          : "btn-danger"
                      }`}
                    >
                      {parseFloat(item.promedio) >= 3.0
                        ? "Aprobado"
                        : "Reprobado"}
                    </button>
                  ) : (
                    <span className="text-muted">Sin promedio</span>
                  )}
                </td>
              </>
            ) : (
              <>
                <td>{item.nombre}</td>
                <td>{item.valor}</td>
                <td>
                  {item.fecha
                    ? new Date(item.fecha).toLocaleDateString()
                    : "—"}
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
