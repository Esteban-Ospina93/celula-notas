import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../../assets/css/stylesDashBoard.css";
import { getLinkNavigate } from "../../components/common/getLinkNavigate";

export default function Aside() {
  let { user } = useAuth();
  let rol = user.rol;
  let [activeMenu, setActiveMenu] = useState(null);
  let roleRoutes = rol ? [...getLinkNavigate[rol], ...getLinkNavigate.all] : [];
  // console.log("Role:", rol);
  // console.log("roleRoutes:", roleRoutes);

  const toggleMenu = (label) => {
    setActiveMenu((prev) => (prev === label ? null : label));
  };

  return (
    <>
      {/* <!-- Sidebar --> */}
      <div id="sidebar-wrapper">
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
          {/* <!-- Sidebar - Brand --> */}
          <a className="sidebar-brand d-flex align-items-center" href="#">
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Sistema Educativo</div>
          </a>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider my-0" />

          {/* <!-- Nav Item - Dashboard --> */}
          <li className="nav-item">
            <Link className="nav-link" to="/Dashboard">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider" />

          {/* <!-- Heading --> */}
          <div className="sidebar-heading">Módulos Educativos</div>

          {/* <!-- Nav Item - Ingreso y registro --> */}
          {rol === "admin" && (
            <li className="nav-item">
              <button className="nav-link collapsed" onClick={() => toggleMenu("ingreso")}>
                <i className="fas fa-fw fa-user-plus"></i>
                <span>Ingreso y registro</span>
              </button>
              <div className={`submenu ${activeMenu === "ingreso" ? "open" : ""}`}>
                <h6 className="collapse-header">Acciones:</h6>
                <Link className="collapse-item" to="/listado-estudiantes">Ver Estudiantes</Link>
                <Link className="collapse-item" to="/crear-estudiante">Crear Estudiante</Link>
              </div>
            </li>
          )}

          {/* <!-- Nav Item - Hy estudiantil --> */}
          {["admin", "professor"].includes(rol) && (
            <li className="nav-item">
              <button className="nav-link collapsed" onClick={() => toggleMenu("historial")}>
                <i className="fas fa-fw fa-history"></i>
                <span>Hy estudiantil</span>
              </button>
              <div className={`submenu ${activeMenu === "historial" ? "open" : ""}`}>
                <h6 className="collapse-header">Acciones:</h6>
                <Link className="collapse-item" to="/listado-historial">Ver Historial</Link>
                <Link className="collapse-item" to="/crear-historial">Crear Registro</Link>
              </div>
            </li>
          )}

          {/* <!-- Nav Item - Modulo Familiar --> */}
          {rol === "family" && (
            <li className="nav-item">
              <button className="nav-link collapsed" onClick={() => toggleMenu("familiar")}>
                <i className="fas fa-fw fa-users"></i>
                <span>Módulo Familiar</span>
              </button>
              <div className={`submenu ${activeMenu === "familiar" ? "open" : ""}`}>
                <h6 className="collapse-header">Acciones:</h6>
                <Link className="collapse-item" to="/listado-familiares">Ver Familiares</Link>
                <Link className="collapse-item" to="/crear-familiar">Crear Familiar</Link>
              </div>
            </li>
          )}

          {/* <!-- Nav Item - Seguimiento de notas --> */}
          {roleRoutes.map((link, i) => (
            <li className="nav-item" key={i}>
              <button
                className="nav-link collapsed"
                onClick={() => toggleMenu(link.label)}
              >
                <i className={link.icon}></i>
                <span>{link.label}</span>
              </button>

              {link.children && (
                <div className={`submenu ${activeMenu === link.label ? "open" : ""}`}>
                  <h6 className="collapse-header">Acciones:</h6>
                  {link.children.map((child, j) => (
                    <Link key={j} className="collapse-item" to={child.path}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}



          {/* <!-- Nav Item - Asistencias --> */}
          {["admin", "professor"].includes(rol) && (
            <li className="nav-item">
              <button className="nav-link collapsed" onClick={() => toggleMenu("asistencias")}>
                <i className="fas fa-fw fa-calendar-check"></i>
                <span>Asistencias</span>
              </button>
              <div className={`submenu ${activeMenu === "asistencias" ? "open" : ""}`}>
                <h6 className="collapse-header">Acciones:</h6>
                <Link className="collapse-item" to="/listado-asistencias">Ver Asistencias</Link>
                <Link className="collapse-item" to="/crear-asistencia">Registrar Asistencia</Link>
              </div>
            </li>
          )}

          {/* <!-- Nav Item - Bienestar Estudiantil --> */}
          {["admin", "professor"].includes(rol) && (
            <li className="nav-item">
              <button className="nav-link collapsed" onClick={() => toggleMenu("bienestar")}>
                <i className="fas fa-fw fa-heart"></i>
                <span>Bienestar Estudiantil</span>
              </button>
              <div className={`submenu ${activeMenu === "bienestar" ? "open" : ""}`}>
                <h6 className="collapse-header">Acciones:</h6>
                <Link className="collapse-item" to="/listado-bienestar">Ver Registros</Link>
                <Link className="collapse-item" to="/crear-bienestar">Crear Registro</Link>
              </div>
            </li>
          )}

          {/* <!-- Nav Item - Estadísticas --> */}
          <li className="nav-item">
            <button className="nav-link collapsed" onClick={() => toggleMenu("estadisticas")}>
              <i className="fas fa-fw fa-chart-bar"></i>
              <span>Estadísticas</span>
            </button>
            <div className={`submenu ${activeMenu === "estadisticas" ? "open" : ""}`}>
              <h6 className="collapse-header">Acciones:</h6>
              <Link className="collapse-item" to="/reportes">Ver Reportes</Link>
              <Link className="collapse-item" to="/graficos">Ver Gráficos</Link>
            </div>
          </li>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider" />

          {/* <!-- Sidebar Toggler (Sidebar) --> */}
          <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
          </div>
        </ul>
        {/* <!-- End of Sidebar --> */}
      </div>
    </>
  );
}
