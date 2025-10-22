import { data, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";
import NavBar from "../components/NavBar";
import datos from "../../assets/data.json"
import { useAuth } from "../../context/AuthContext";
import { getDashboardRoutes } from "../../components/common/getDashboardRoutes";

export default function Login() {
  let { login } = useAuth();
  let navigate = useNavigate();
  console.log(datos.users);
  let { register, handleSubmit, formState: { errors } } = useForm();

  const onSumbited = (dataForm) => {
    console.log("form user", dataForm);
    //Logica para verificar un usuario
    let userVerify = datos.users.find((u) => {
      return u.email == dataForm.email && u.password == dataForm.password;
    })
    console.log("usuario", userVerify)
    //Guardar el usuario en localStorage y redirigir a una ruta correspondiente
    if (userVerify) {
      login(userVerify);
      navigate(getDashboardRoutes(userVerify.rol));
    } else {
      alert("Credenciales incorrectas o usuario no encontrado");
    }
  }
  // const onSumbited = async ( data ) => {
  //   console.log("Datos del formulario");
  //   console.log(data);
  //   try {
  //     const response = await axios.post("http://localhost/loginApi/login", data);
  //     alert("Bienvenido " + response.data.nombre);
  //     onLogin(response.data.nombre);
  //     navigate("/Dashboard");
  //     console.log("Respuesta del servidor");
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //     alert("El usuario o contraseña es incorrecto")
  //   }
  // };

  return (
    <>
      <NavBar />
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{
          background: "linear-gradient(135deg, #000000ff, #3a4345ff)",
        }}
      >
        <div className="card shadow-lg p-4" style={{ width: "22rem" }}>
          <h4 className="text-center mb-4 text-dark">Iniciar Sesión</h4>
          <form onSubmit={handleSubmit(onSumbited)}>
            <div className="mb-3">
              <label
                htmlFor="exampleDropdownFormEmail1"
                className="form-label fw-semibold"
              >
                Correo electrónico
              </label>
              <input 
                {...register("email", {required: true})}                
                type="email"
                className="form-control"
                id="exampleDropdownFormEmail1"
                placeholder="email@example.com"
                required
              />
              { errors.correo && <p className=" text-danger">Debes escribir un correo</p> }
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleDropdownFormPassword1"
                className="form-label fw-semibold"
              >
                Contraseña
              </label>
              <input 
                {...register("password", {required: true})}                
                type="password"
                className="form-control"
                id="exampleDropdownFormPassword1"
                placeholder="********"
                required
              />
              { errors.contrasena && <p classNameName=" text-danger">La contraseña es obligatoria</p> }
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="dropdownCheck"
              />
              <label className="form-check-label" htmlFor="dropdownCheck">
                Recordarme
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Ingresar
            </button>
          </form>

          <hr />
          <div className="text-center">
            <Link to={"/Register"} className="d-block mb-1 text-decoration-none">
              ¿Nuevo aquí? Regístrate
            </Link>
            <a href="#" className="text-muted text-decoration-none">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
