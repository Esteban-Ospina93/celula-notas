export default function TablaNotas() {
    return (
        <>
            <div className="row">
                <div className="input-group mb-3 rounded-pill overflow-hidden border w-50">
                    <span className="input-group-text bg-white border-0 pe-1">
                        <i className="fas fa-search"></i>
                    </span>
                    <input
                        id="search-input"
                        type="search"
                        className="form-control hide-focus border-0"
                        placeholder="Buscar Estudiante"
                    />
                </div>

                <table className="table align-middle mb-0 bg-white">
                    <thead className="bg-light">
                        <tr>
                            <th>#</th>
                            <th>Estudiante</th>
                            <th>Asignatura</th>
                            <th>Periodo</th>
                            <th>Nota 1</th>
                            <th>Nota 2</th>
                            <th>Nota 3</th>
                            <th>Promedio</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Alan Brito</td>
                            <td>Matemáticas</td>
                            <td>Trimestre 1</td>
                            <td>4.5</td>
                            <td>4.2</td>
                            <td>4.8</td>
                            <td>4.5</td>
                            <td><span className="badge badge-success">Aprobado</span></td>
                            <td>
                                <button className="btn btn-sm btn-warning"><i className="fas fa-edit"></i></button>
                                <button className="btn btn-sm btn-danger"><i className="fas fa-trash"></i></button>
                                <button className="btn btn-sm btn-info"><i className="fas fa-eye"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
