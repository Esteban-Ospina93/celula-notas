import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "./context/AuthContext"; // ✅ Importar el contexto

import ListadoNotas from "./admin/pages/ListadoNotas";
import RegistrarNota from "./admin/pages/RegistrarNota";
// import Aside from "./admin/components/Aside";
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

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') == "true");
  const [userName, setUserName] = useState(localStorage.getItem('userName') || "");

  const StudentWrapper = () => {
    const { logout } = useAuth();

    const handleLogout = () => {
      logout();
      setIsAuthenticated(false);
      setUserName('');
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('userName');
      localStorage.removeItem('rol');
    };

    return <StudentPage onLogout={handleLogout} />;
  };

  const ProfessorWrapper = () => {
    const { logout } = useAuth();

    const handleLogout = () => {
      logout();
      setIsAuthenticated(false);
      setUserName('');
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('userName');
      localStorage.removeItem('rol');
    };

    return <ProfessorPage onLogout={handleLogout} />;
  };

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
    localStorage.setItem('userName', userName);
  }, [isAuthenticated, userName]);

  const handleLogin = (userName) => {
    setIsAuthenticated(true); //token de autorización.
    setUserName(userName);
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
            <Route element={<RoleRoutes allowedRoles={["admin", "professor"]} />}>
              <Route path="/Dashboard" element={<DashBoardPage />} />
            </Route>
            <Route element={<RoleRoutes allowedRoles={["admin"]} />}>
              <Route path="/Dashboard/admin" element={<AdminPage />} />
            </Route>
            <Route element={<RoleRoutes allowedRoles={["admin", "professor"]} />}>
              <Route path="/Dashboard/professor" element={<ProfessorWrapper />} />
            </Route>
            <Route element={<RoleRoutes allowedRoles={["student"]} />}>
              <Route path="/Dashboard/student" element={<StudentWrapper />} />
            </Route>
            <Route element={<RoleRoutes allowedRoles={["family"]} />}>
              <Route path="/Dashboard/family" element={<FamilyPage />} />
            </Route>

            {/* Rutas para seguimiento de notas */}
            <Route element={<RoleRoutes allowedRoles={["professor", "student"]} />}>
              <Route path="/ver-notas" element={<ListadoNotas />} />
            </Route>
            <Route element={<RoleRoutes allowedRoles={["professor"]} />}>
              <Route path="/registrar-nota" element={<RegistrarNota />} />
            </Route>

            {/* <Route path="/Dashboard" element={isAuthenticated ? <Dashboard user={userName} onLogout={handleLogout} /> : <Navigate to="/Login" />} />
            <Route path="/Dashboard/Docente" element={isAuthenticated ? <PageDocentes user={userName} onLogout={handleLogout} /> : <Navigate to="/Login" />} />
            <Route path="/Dashboard/Estudiante" element={isAuthenticated ? <PageEstudiantes user={userName} onLogout={handleLogout} /> : <Navigate to="/Login" />} />
            <Route path="/Dashboard/Familiar" element={isAuthenticated ? <PageFamiliares user={userName} onLogout={handleLogout} /> : <Navigate to="/Login" />} /> */}
            {/* <Route path="/ver-notas" element={<ListadoNotas />} />
            <Route path="/registrar-nota" element={<RegistrarNota />} /> */}
          </Route>

          {/* Ruta de error 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContext>
    </>
  );
}

export default App;
