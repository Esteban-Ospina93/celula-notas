export default function PaginacionNotas({ currentPage, totalPages, irAnterior, irSiguiente, irUltima }) {
  return (
    <nav aria-label="Navegación de páginas" className="mt-3">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button className="page-link" onClick={irAnterior}>Anterior</button>
        </li>
        <li className="page-item disabled">
          <span className="page-link">
            Página {currentPage} de {totalPages}
          </span>
        </li>
        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
          <button className="page-link" onClick={irSiguiente}>Siguiente</button>
        </li>
        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
          <button className="page-link" onClick={irUltima}>Última</button>
        </li>
      </ul>
    </nav>
  );
}
