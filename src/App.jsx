import { Routes, Route } from "react-router-dom";
import ListadoNotas from "./admin/pages/ListadoNotas";
import RegistrarNota from "./admin/pages/RegistrarNota";
import Aside from "./admin/components/Aside";


function App() {
  return (
    <>
      <div id="page-top">
        <div id="wrapper">
          <Aside />
          <div id="content-wrapper" className="d-flex flex-column">
            <div className="container-fluid">
              <Routes>
                <Route path="/ver-notas" element={<ListadoNotas />} />                         
                <Route path="/registrar-nota" element={<RegistrarNota />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
