import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aside from "./admin/components/Aside";
import ListadoNotas from "./admin/pages/ListadoNotas";
import RegistrarNota from "./admin/pages/RegistrarNota";
import VistaNotasEstudiantes from "./admin/pages/VistaNotasEstudiantes";

function App() {
  return (
    <Router>
      <div id="page-top">
        <div id="wrapper">
          <Aside />
          <div id="content-wrapper" className="d-flex flex-column">
            <div className="container-fluid">
              <Routes>
                <Route path="/" element={<ListadoNotas />} />
                <Route path="/registrar-nota" element={<RegistrarNota />} />
                <Route path="/notas-estudiante" element={<VistaNotasEstudiantes />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
