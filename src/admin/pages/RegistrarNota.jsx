import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { crearNota } from "../services/notasService";
import { obtenerEstudiantes } from "../services/estudianteService";
import { obtenerMaterias } from "../services/materiaService";

import EncabezadoRegistrar from "../components/ComponentsRegistrarNota/EncabezadoRegistrar";
import PanelLateral from "../components/ComponentsRegistrarNota/PanelLateral";
import FormularioNota from "../components/ComponentsRegistrarNota/FormularioNota";
import BotonRegistrar from "../components/ComponentsRegistrarNota/BotonRegistrar";

export default function RegistrarNota() {
  const navigate = useNavigate();

  const [nota, setNota] = useState({
    tipoNota: "",
    valor: "",
    fecha: "",
    estudiante: "",
    asignatura: "",
    observaciones: "",
    recomendaciones: ""
  });

  const [estudiantes, setEstudiantes] = useState([]);
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    obtenerEstudiantes().then(res => {
      setEstudiantes(res.data);
    });
    obtenerMaterias().then(res => {
      setMaterias(res.data);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNota((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const notaDTO = {
        nombre: nota.tipoNota,
        valor: parseFloat(nota.valor),
        fecha: nota.fecha,
        estudiante: { id: parseInt(nota.estudiante) },
        materia: { id: parseInt(nota.asignatura) },
        observaciones: nota.observaciones,
        recomendaciones: nota.recomendaciones
      };

      await crearNota(notaDTO);
      alert("La nota fue registrada con éxito");
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

          <FormularioNota
            nota={nota}
            onChange={handleChange}
            estudiantes={estudiantes}
            materias={materias}
          />
          <BotonRegistrar onSubmit={handleSubmit} />
        </div>
        <div className="col-md-4">
          <PanelLateral />
        </div>
      </div>
    </div>
  );
}
