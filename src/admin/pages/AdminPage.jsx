import { useAuth } from "../../context/AuthContext"



export default function AdminPage() {
  let { user } = useAuth();
  return (
    <>
      <div>
        <h1>Panel de control</h1>
        <p>{user.rol}: {user.username} </p>
      </div>
    </>
  )
}
