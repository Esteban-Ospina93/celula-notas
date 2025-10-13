import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

export default function Register() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const contra = watch("contrasena");
  const navigate = useNavigate();
  const onSumbited = async (data) => {
    console.log("Datos del formulario");
    console.log(data);
    try {
      const response = await axios.post("http://localhost/loginApi/register", {
        nombre: data.nombre,
        correo: data.correo,
        contrasena: data.contrasena
      });
      alert(response.data.message)
      navigate("/Login");
      console.log("Respuesta del servidor");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-8">
            <h1 className='text-center text-secondary my-5'>Formulario de Registro</h1>
          </div>
          <div className="col-sm-8">
            <form onSubmit={handleSubmit(onSumbited)} className='bg-secondary bg-primary-subtle p-3 rounded'>
              <div className="mb-3">
                <label className="form-label">Nombre de Usuario</label>
                <input type="text" {...register("nombre", { required: true })} className="form-control" />
                {errors.nombre && <p className=" text-danger">Debes escribir un nombre de usuario</p>}
              </div>
              <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input type="email" {...register("correo", { required: true })} className="form-control" />
                {errors.correo && <p className=" text-danger">Debes escribir un correo</p>}
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" {...register("contrasena", { required: true })} className="form-control" />
                {errors.contrasena && <p className=" text-danger">La contraseña es obligatoria</p>}
              </div>
              <div className="mb-3">
                <label className="form-label">Confirmar Password</label>
                <input type="password"
                {...register("confirmar_contrasena", 
                    { required: "Por favor digita una contraseña", 
                        validate: (value) => value == contra || "La contraseña no coincide"
                    }) 
                } className="form-control" />
                {errors.confirmar_contrasena && <p className="text-danger">{ errors.confirmar_contrasena.message }</p>}
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label">Check me out</label>
              </div>
              <button type="submit" className="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
