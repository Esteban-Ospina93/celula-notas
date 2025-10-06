export default function EstadisticasNotas() {
    return (
        <>
            <div className="row mt-4">
                <div className="col-md-3">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body d-flex align-items-center justify-content-between">
                            <div>
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Promedio General</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">3.8</div>
                            </div>
                            <i className="fas fa-chart-line fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body d-flex align-items-center justify-content-between">
                            <div>
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Aprobados</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">75%</div>
                            </div>
                            <i className="fas fa-check-circle fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body d-flex align-items-center justify-content-between">
                            <div>
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">En Riesgo</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">15%</div>
                            </div>
                            <i className="fas fa-exclamation-triangle fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-left-danger shadow h-100 py-2">
                        <div className="card-body d-flex align-items-center justify-content-between">
                            <div>
                                <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">Reprobados</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">10%</div>
                            </div>
                            <i className="fas fa-times-circle fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
