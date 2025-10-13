export default function loadingSpinner() {
    return (
            <div className="d-flex justify-content-center align-items-center flex-column cargar-spinner">
                <div className="spinner-border" role="status"></div>
                <div>
                    <p className="visually-hidden">Cargando...</p>
                </div>         
            </div>            
    );
}
