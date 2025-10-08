import React from 'react'

export default function Aside() {
  return (
    <>
      {/* <!-- Sidebar --> */}
      {/* <!-- Se carga desde archivo externo --> */}
      <div id="sidebar-wrapper">
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
          {/* <!-- Sidebar - Brand --> */}
          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Sistema Educativo</div>
          </a>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider my-0" />

          {/* <!-- Nav Item - Dashboard --> */}
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
          </li>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider" />

          {/* <!-- Heading --> */}
          <div className="sidebar-heading">
            Módulos Educativos
          </div>

          {/* <!-- Nav Item - Ingreso y registro --> */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseIngreso"
              aria-expanded="true" aria-controls="collapseIngreso">
              <i className="fas fa-fw fa-user-plus"></i>
              <span>Ingreso y registro</span>
            </a>
            <div id="collapseIngreso" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Acciones:</h6>
                <a className="collapse-item" href="listado-estudiantes.html">Ver Estudiantes</a>
                <a className="collapse-item" href="crear-estudiante.html">Crear Estudiante</a>
              </div>
            </div>
          </li>

          {/* <!-- Nav Item - Hy estudiantil --> */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseHistorial"
              aria-expanded="true" aria-controls="collapseHistorial">
              <i className="fas fa-fw fa-history"></i>
              <span>Hy estudiantil</span>
            </a>
            <div id="collapseHistorial" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Acciones:</h6>
                <a className="collapse-item" href="listado-historial.html">Ver Historial</a>
                <a className="collapse-item" href="crear-historial.html">Crear Registro</a>
              </div>
            </div>
          </li>

          {/* <!-- Nav Item - Modulo Familiar --> */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseFamiliar"
              aria-expanded="true" aria-controls="collapseFamiliar">
              <i className="fas fa-fw fa-users"></i>
              <span>Módulo Familiar</span>
            </a>
            <div id="collapseFamiliar" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Acciones:</h6>
                <a className="collapse-item" href="listado-familiares.html">Ver Familiares</a>
                <a className="collapse-item" href="crear-familiar.html">Crear Familiar</a>
              </div>
            </div>
          </li>

          {/* <!-- Nav Item - Seguimiento de notas --> */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseNotas"
              aria-expanded="true" aria-controls="collapseNotas">
              <i className="fas fa-fw fa-clipboard-list"></i>
              <span>Seguimiento de notas</span>
            </a>
            <div id="collapseNotas" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Acciones:</h6>
                <a className="collapse-item" href="/">Ver Notas</a>
                <a className="collapse-item" href="/registrar-nota">Registrar Nota</a>
                {/* 🔹 Nuevo enlace agregado */}
                <a className="collapse-item" href="/notas-estudiante">Notas por Estudiante</a>
              </div>
            </div>
          </li>

          {/* <!-- Nav Item - Asistencias --> */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseAsistencias"
              aria-expanded="true" aria-controls="collapseAsistencias">
              <i className="fas fa-fw fa-calendar-check"></i>
              <span>Asistencias</span>
            </a>
            <div id="collapseAsistencias" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Acciones:</h6>
                <a className="collapse-item" href="listado-asistencias.html">Ver Asistencias</a>
                <a className="collapse-item" href="crear-asistencia.html">Registrar Asistencia</a>
              </div>
            </div>
          </li>

          {/* <!-- Nav Item - Bienestar Estudiantil --> */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBienestar"
              aria-expanded="true" aria-controls="collapseBienestar">
              <i className="fas fa-fw fa-heart"></i>
              <span>Bienestar Estudiantil</span>
            </a>
            <div id="collapseBienestar" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Acciones:</h6>
                <a className="collapse-item" href="listado-bienestar.html">Ver Registros</a>
                <a className="collapse-item" href="crear-bienestar.html">Crear Registro</a>
              </div>
            </div>
          </li>

          {/* <!-- Nav Item - Estadísticas --> */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseEstadisticas"
              aria-expanded="true" aria-controls="collapseEstadisticas">
              <i className="fas fa-fw fa-chart-bar"></i>
              <span>Estadísticas</span>
            </a>
            <div id="collapseEstadisticas" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Acciones:</h6>
                <a className="collapse-item" href="reportes.html">Ver Reportes</a>
                <a className="collapse-item" href="graficos.html">Ver Gráficos</a>
              </div>
            </div>
          </li>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider" />

          {/* <!-- Sidebar Toggler (Sidebar) --> */}
          <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
          </div>
        </ul>
        {/* <!-- End of Sidebar --></hr> */}
      </div>
    </>
  )
}
