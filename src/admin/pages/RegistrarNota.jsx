import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { crearNota } from "../../services/notaService";

import EncabezadoRegistrar from "../components/ComponentsRegistrarNota/EncabezadoRegistrar";
import PanelLateral from "../components/ComponentsRegistrarNota/PanelLateral";
import FormularioNota from "../components/ComponentsRegistrarNota/FormularioNota";
import BotonRegistrar from "../components/ComponentsRegistrarNota/BotonRegistrar";

export default function RegistrarNota() {
  const navigate = useNavigate();

  const [nota, setNota] = useState({
  asignatura: "", // ← nuevo campo
  nota1: "",
  nota2: "",
  nota3: "",
  fecha: "",
  tipoevaluacion: "Final" // ← corregido
});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setNota((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
  const promedio =
    (parseFloat(nota.nota1 || 0) * 0.3 +
      parseFloat(nota.nota2 || 0) * 0.3 +
      parseFloat(nota.nota3 || 0) * 0.4).toFixed(2);

  const nuevaNota = {
    nombre: nota.asignatura, // ← este campo debe existir en el estado
    valor: parseFloat(promedio),
    tipoevaluacion: nota.tipoevaluacion, // ← debe ser "Final", "Parcial" o "Seguimiento"
    fecha: nota.fecha
  };

  console.log("Enviando nota:", nuevaNota); // ← para verificar en consola

  try {
    await crearNota(nuevaNota);
    alert("Nota registrada con éxito");
    navigate("../ver-notas");
  } catch (error) {
    console.error("Error al registrar nota:", error);
    alert("Hubo un error al registrar la nota");
  }
};



  return (
    <div className="container-fluid">
      <EncabezadoRegistrar />
      <div className="row">
        <div className="col-md-8">
          <Link to={"../ver-notas"} className="btn btn-secondary mb-3">
            ← Volver al listado de notas
          </Link>

          <FormularioNota nota={nota} onChange={handleChange} />
          <BotonRegistrar onSubmit={handleSubmit} />
        </div>
        <div className="col-md-4">
          <PanelLateral />
        </div>
      </div>
    </div>
  );
}
