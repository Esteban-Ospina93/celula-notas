import profile from "../../assets/img/undraw_profile.svg";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import "../../assets/css/stylesDashBoard.css";


export default function Header() {
  let { user, logout } = useAuth();
  let [profileMenu, setProfileMenu] = useState(false);

  return (
    <>
      <div id="topbar-wrapper">
        {/* <!-- Topbar --> */}
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          {/* <!-- Sidebar Toggle (Topbar) --> */}
          <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars"></i>
          </button>

          {/* <!-- Topbar Search --> */}
          <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
              <input type="text" className="form-control bg-light border-0 small" placeholder="Buscar..."
                aria-label="Search" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>

          {/* <!-- Topbar Navbar --> */}
          <ul className="navbar-nav ml-auto">
            {/* <!-- Nav Item - User Information --> */}
            <li className="nav-item dropdown no-arrow">
              <button onClick={() => setProfileMenu(!profileMenu)}
                className="nav-link dropdown-toggle" type="button" id="userDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span id="nombre-usuario" className="mr-2 d-none d-lg-inline text-gray-600 small">{user.username}</span>
                <img className="img-profile rounded-circle" src={profile} />
              </button>
              {/* <!-- Dropdown - User Information --> */}
              {
                profileMenu && <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown">
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    Perfil
                  </a>
                  <div className="dropdown-divider"></div>
                  <button onClick={()=>logout()}
                  type="button" id="btnLogout" className="dropdown-item">
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                  </button>
                </div>
              }
            </li>
          </ul>
        </nav>
        {/* <!-- End of Topbar --></> */}
      </div>
    </>
  )
}
