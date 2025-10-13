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
  let {login} = useAuth();
  let navigate = useNavigate();
  console.log(datos.users);
  let {register, handleSubmit, formState : { errors } } = useForm();

  const onSumbited = (dataForm) => {
    console.log("form user", dataForm);
    //Logica para verificar un usuario
    let userVerify = datos.users.find((u)=>{
      return u.email == dataForm.email && u.password == dataForm.password;
    })
    console.log("usuario", userVerify)
    //Guardar el usuario en localStorage y redirigir a una ruta correspondiente
    if(userVerify) {
      login(userVerify);
      navigate(getDashboardRoutes(userVerify.rol));
    }else {
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
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-8">
            <h1 className='text-center text-secondary my-5'>Bienvenido! ingresa tu cuenta</h1>
          </div>
          <div className="col-sm-8 m-4">
            <form onSubmit={handleSubmit(onSumbited)} className='bg-secondary bg-primary-subtle p-3 rounded'>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input {...register("email", {required: true})} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                { errors.correo && <p className=" text-danger">Debes escribir un correo</p> }
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input {...register("password", {required: true})} type="password" className="form-control" id="exampleInputPassword1" />
                { errors.contrasena && <p className=" text-danger">La contraseña es obligatoria</p> }
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
              </div>
              <button type="submit" className="btn btn-success">Login</button>
            </form>
          </div>
        </div>      
      </div>
      <Footer />
    </>
  )
}
