import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "./frontend/pages/Login";
import Register from "./frontend/pages/Register";
import HomePage from "./frontend/pages/HomePage";
import ProfessorPage from "./admin/pages/ProfessorPage";
import StudentPage from "./admin/pages/StudentPage";
import FamilyPage from "./admin/pages/FamilyPage";
import PublicRoutes from "./components/auth/PublicRoutes";
import PrivateRoutes from "./components/auth/PrivateRoutes";
import RoleRoutes from "./components/auth/RoleRoutes";
import NotFound from "./admin/pages/NotFound";
import DashBoardPage from "./admin/pages/DashBoardPage";
import AdminPage from "./admin/pages/AdminPage";
import AuthContext from "./context/AuthContext";
import VistaNotasEstudiantes from "./admin/pages/VistaNotasEstudiantes";
import DashBoardLayout from "./admin/pages/DashBoardLayout";
import RegistrarNota from "./admin/pages/RegistrarNota";
import ListadoNotas from "./admin/pages/ListadoNotas";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') == "true");
  const [userName, setUserName] = useState(localStorage.getItem('userName') || "");

  //console.log("Usuario logeado: " + isAuthenticated);

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
    localStorage.setItem('userName', userName);
  }, [isAuthenticated, userName])

  const handleLogin = (userName) => {
    setIsAuthenticated(true); //token de autorización.
    setUserName(userName);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserName('');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userName');
  };

  return (
    <>
      <AuthContext>
        <Routes>
          {/* Rutas publicas */}
          <Route element={<PublicRoutes />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/Login" element={<Login onLogin={handleLogin} />} />
            <Route path="/Register" element={<Register />} />
          </Route>

          {/* Rutas privadas */}
          <Route element={<PrivateRoutes />} >
            <Route element={<RoleRoutes allowedRoles={["admin", "professor", "student", "family"]} />}>
              <Route path="/Dashboard" element={<DashBoardLayout />} >
                <Route index element={<DashBoardPage />} />
                  <Route path="admin" element={<AdminPage />} />
                  <Route path="ver-notas" element={<ListadoNotas />} />
                  <Route path="registrar-nota" element={<RegistrarNota />} />
                  <Route path="professor" element={<ProfessorPage />} />
                  <Route path="student" element={<StudentPage />} />
                  <Route path="ver-mis-notas" element={<VistaNotasEstudiantes />} />
                  <Route path="family" element={<FamilyPage />} />
                </Route>
              </Route>
          </Route>
            {/* Ruta de error 404 */}
            <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContext>
    </>
  );
}

export default App;
