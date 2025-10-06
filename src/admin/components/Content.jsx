import ListadoNotas from "../pages/ListadoNotas"
import Footer from "./Footer"
import Header from "./Header"


export default function Content() {
  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">

        {/* <!-- Main Content --> */}
        <div id="content">
          <Header />
          {/* <!-- Begin Page Content --> */}
          <div className="container-fluid">
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                <i className="fas fa-download fa-sm text-white-50"></i> Generar Reporte
              </a>
            </div>
            {/* Contenido del dashboard */}
            <ListadoNotas />
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}
