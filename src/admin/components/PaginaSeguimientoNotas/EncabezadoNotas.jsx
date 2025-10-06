export default function EncabezadoNotas() {
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Seguimiento de Notas</h1>
                <a href="crear-nota.html" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <i className="fas fa-plus fa-sm text-white-50"></i> Registrar Nota
                </a>
            </div>
        </>
    );
}