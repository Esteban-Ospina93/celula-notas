import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import EncabezadoRegistrar from "../components/ComponentsRegistrarNota/EncabezadoRegistrar";
import PanelLateral from "../components/ComponentsRegistrarNota/PanelLateral";
import FormularioNota from "../components/ComponentsRegistrarNota/FormularioNota";
import BotonRegistrar from "../components/ComponentsRegistrarNota/BotonRegistrar";

export default function RegistrarNota() {
  const navigate = useNavigate();

  const [nota, setNota] = useState({
    estudiante: "",
    asignatura: "",
    periodo: "",
    docente: "",
    nota1: "",
    nota2: "",
    nota3: "",
    observaciones: "",
    recomendaciones: "",
    fecha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNota((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const promedio =
      (parseFloat(nota.nota1 || 0) * 0.3 +
        parseFloat(nota.nota2 || 0) * 0.3 +
        parseFloat(nota.nota3 || 0) * 0.4).toFixed(2);

    const nuevaNota = { ...nota, promedio };

    const notasGuardadas = JSON.parse(localStorage.getItem("notas")) || [];
    localStorage.setItem("notas", JSON.stringify([...notasGuardadas, nuevaNota]));

    navigate("../ver-notas");
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
