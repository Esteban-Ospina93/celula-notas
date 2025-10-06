export default function ModalVerNota() {
    return (
        <>
            <div className="modal fade" id="verNotaModal" tabIndex="-1" role="dialog" aria-labelledby="verNotaModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                <i className="fas fa-clipboard-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                Detalles de la Nota
                            </h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Aquí irán los detalles del estudiante y sus notas.</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cerrar</button>
                            <button className="btn btn-primary" type="button"><i className="fas fa-edit fa-sm fa-fw mr-2"></i>Editar Nota</button>
                            <button className="btn btn-success" type="button"><i className="fas fa-print fa-sm fa-fw mr-2"></i>Imprimir Boletín</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
