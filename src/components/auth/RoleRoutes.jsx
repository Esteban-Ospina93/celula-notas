import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import LoadingSpinner from "../common/loadingSpinner";

export default function RoleRoutes({allowedRoles}) {
  let {user, loading} = useAuth(); //Variable del usuario logeado
  if (loading) {
    return <LoadingSpinner />
  }

  //Si no hay usuario autenticado, redirige al login
  if(!user) {
    return <Navigate to="Login" replace />
  }
  //Si el usuario no tiene rol, regdirige al inicio
  if(!allowedRoles.includes(user.rol)) {
    return <Navigate to="/" replace />
  }
  //Usuario permitido, puede continuar
  return <Outlet />
}
