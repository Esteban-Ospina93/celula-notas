import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Register() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const contra = watch("contrasena");
  const navigate = useNavigate();

  const onSumbited = async (data) => {
    // console.log("Datos del formulario");
    // console.log(data);

    let endpoint = "";

    // Determinar el endpoint según el rol
    switch (data.rol) {
      case "profesor":
        endpoint = "http://localhost:8080/docentes";
        break;
      case "estudiante":
        endpoint = "http://localhost:8080/estudiantes";
        break;
      default:
        endpoint = "http://localhost:8080/usuarios";
        break;
    }

    console.log("Registrando en:", endpoint);
    console.log("Datos enviados:", data);

    try {
      const response = await axios.post("http://localhost:8080/register", {
        nombre: data.nombre,
        correo: data.correo,
        contrasena: data.contrasena,
        estado: "activo",
        rol: data.rol
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
      <NavBar />
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{ background: "linear-gradient(135deg, #000000ff, #3a4345ff)" }}
      >
        <div className="card shadow-lg p-4" style={{ width: "28rem" }}>
          <h2 className="text-center text-secondary mb-4">Formulario de Registro</h2>

          <form
            onSubmit={handleSubmit(onSumbited)}
            className="bg-primary-subtle p-4 rounded"
          >
            {/* Nombre */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Nombre de Usuario</label>
              <input
                type="text"
                {...register("nombre", { required: true })}
                className="form-control"
                placeholder="Ingresa tu nombre de usuario"
              />
              {errors.nombre && (
                <p className="text-danger mt-1">
                  Debes escribir un nombre de usuario
                </p>
              )}
            </div>

            {/* Correo */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Correo Electrónico</label>
              <input
                type="email"
                {...register("correo", { required: true })}
                className="form-control"
                placeholder="correo@ejemplo.com"
              />
              {errors.correo && (
                <p className="text-danger mt-1">Debes escribir un correo</p>
              )}
            </div>

            {/* Contraseña */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Contraseña</label>
              <input
                type="password"
                {...register("contrasena", { required: true })}
                className="form-control"
                placeholder="********"
              />
              {errors.contrasena && (
                <p className="text-danger mt-1">La contraseña es obligatoria</p>
              )}
            </div>

            {/* Confirmar Contraseña */}
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Confirmar Contraseña
              </label>
              <input
                type="password"
                {...register("confirmar_contrasena", {
                  required: "Por favor digita una contraseña",
                  validate: (value) =>
                    value === contra || "La contraseña no coincide",
                })}
                className="form-control"
                placeholder="Repite tu contraseña"
              />
              {errors.confirmar_contrasena && (
                <p className="text-danger mt-1">
                  {errors.confirmar_contrasena.message}
                </p>
              )}
            </div>

            {/* Rol */}
            <div className="mb-3 d-flex flex-column">
              <label className="form-label fw-semibold">Rol</label>
              <select
                className="form-select"
                {...register("rol", { required: true })}
              >
                <option value="">Selecciona un rol...</option>
                <option value={"profesor"}>Profesor</option>
                <option value="estudiante">Estudiante</option>
                <option value="familia">Familia</option>
              </select>
              {errors.rol && (
                <p className="text-danger mt-1">Debes seleccionar un rol</p>
              )}
            </div>

            {/* Check */}
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="checkMe"
                {...register("checkMe")}
              />
              <label className="form-check-label" htmlFor="checkMe">
                Acepto los términos y condiciones
              </label>
            </div>

            {/* Botón */}
            <button type="submit" className="btn btn-outline-primary w-100">
              Registrarse
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}
