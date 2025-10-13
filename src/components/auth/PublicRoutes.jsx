import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import LoadingSpinner from "../common/loadingSpinner";

export default function PublicRoutes() {
  let {user, loading} = useAuth(); //Variable del usuario logeado
  if (loading) {
    return <LoadingSpinner />
  }

  if (user) {
    let redirectPath = user.rol == "admin" ? "/Dashboard/admin" : 
    user.rol == "professor" ? "/Dashboard/professor" :
    user.rol == "student" ? "/Dashboard/student" :
    user.rol == "family" ? "/Dashboard/family" : "/dashboard"
    return <Navigate to={redirectPath} replace />
  }
  //Si no hay usuario, permitir acceso a las rutas publicas
  return <Outlet />
}
