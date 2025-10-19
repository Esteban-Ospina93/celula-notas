import ListadoNotas from "../pages/ListadoNotas"
import RegistrarNota from "../pages/RegistrarNota"
import Footer from "./Footer"
import Header from "./Header"
import { Outlet } from "react-router-dom"


export default function Content() {

  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">

        {/* <!-- Main Content --> */}
        <div id="content">
          <Header />
          {/* Aqui va el contenido del DashBoard */}
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}
