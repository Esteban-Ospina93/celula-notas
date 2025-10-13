import { createContext, useContext, useEffect, useState } from "react";

const AuthProvider = createContext();

export default function AuthContext({children}) {
    let [user, setUser] = useState(null);
    let [loading, setLoading] = useState(true);

    useEffect(()=> {
        //Verificar si hay un usuario en el localStorage
        let storedUser = localStorage.getItem("userData");
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
        setLoading(false);
    },[] );

    function login(formUser){
        setUser(formUser);
        localStorage.setItem("userData", JSON.stringify(formUser));
    } 

    function logout() {
        setUser(null);
        localStorage.removeItem("userData");
    }

  return (
    <AuthProvider.Provider value={{login, logout, user, loading}}>
        {children}
    </AuthProvider.Provider>
  )
}

//Crear un propio hook:
export function useAuth() {
    return useContext(AuthProvider);
}