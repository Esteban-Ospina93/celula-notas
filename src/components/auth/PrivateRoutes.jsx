import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import LoadingSpinner from "../common/loadingSpinner";
import { useState, useEffect } from "react";

export default function PrivateRoutes() {
  let {user, loading} = useAuth(); //Variable del usuario logeado
  let [spinner, setSpinner] = useState(true);

  useEffect(() => {
    let time = setTimeout(() =>{
      setSpinner(false);
    },500);
    return () => clearTimeout(time);
  }, []) 
  if (loading || spinner) {
    return <LoadingSpinner />
  }
  //Si no hay usuario, lo redirige al login
  if(!user) {
    return <Navigate to="Login" replace />
  }
  //Usuario autenticado, puede continuar
  return <Outlet />
}
