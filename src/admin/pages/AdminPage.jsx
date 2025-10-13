import { useAuth } from "../../context/AuthContext"

export default function AdminPage() {
  let {user} = useAuth();
  return (
    <div>
      <h1>Panel de control</h1>
      <p>{user.rol}: {user.username} </p>
      <h2>Para ver el Dashboard deben borrar /admin en el navegador, ya que estan parados en la página del admin que debe ser llenado con información</h2>
    </div>
  )
}
