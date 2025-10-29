import { useEffect, useState } from "react";
import { obtenerTodasLasNotas } from "../services/notasService";
import { obtenerMaterias } from "../services/materiaService";

import PaginacionNotas from "../components/PaginaSeguimientoNotas/PaginacionNotas";
import EncabezadoNotas from "../components/PaginaSeguimientoNotas/EncabezadoNotas";
import FiltroNotas from "../components/PaginaSeguimientoNotas/FiltroNotas";
import TablaNotas from "../components/PaginaSeguimientoNotas/TablaNotas";
import EstadisticasNotas from "../components/PaginaSeguimientoNotas/EstadisticasNotas";

export default function ListadoNotas() {
  const [notasAgrupadas, setNotasAgrupadas] = useState([]);
  const [materias, setMaterias] = useState([]);
  const [materiaSeleccionada, setMateriaSeleccionada] = useState("");
  const [estadisticas, setEstadisticas] = useState({
    promedioGeneral: "—",
    porcentajeAprobados: "—",
    porcentajeReprobados: "—",
    porcentajeEnRiesgo: "—"
  });
  const [currentPage, setCurrentPage] = useState(1);
  const notasPorPagina = 15;

  // Obtener todas las notas
  useEffect(() => {
    obtenerTodasLasNotas()
      .then(response => {
        const agrupadas = agruparNotas(response.data);
        setNotasAgrupadas(agrupadas);
      })
      .catch(error => console.error("Error al obtener notas:", error));
  }, []);

  // Obtener todas las materias
  useEffect(() => {
    obtenerMaterias()
      .then(response => setMaterias(response.data))
      .catch(error => console.error("Error al obtener materias:", error));
  }, []);

  // Calcular estadísticas
  useEffect(() => {
    const promediosValidos = notasAgrupadas
      .map(n => parseFloat(n.promedio))
      .filter(n => !isNaN(n));

    const promedioGeneral = promediosValidos.length > 0
      ? (promediosValidos.reduce((a, b) => a + b, 0) / promediosValidos.length).toFixed(2)
      : "—";

    const total = notasAgrupadas.length;
    const enRiesgo = notasAgrupadas.filter(n => parseFloat(n.promedio) > 0 && parseFloat(n.promedio) < 3.0).length;
    const reprobados = notasAgrupadas.filter(n => parseFloat(n.promedio) < 3.0).length;
    const aprobados = notasAgrupadas.filter(n => parseFloat(n.promedio) >= 3.0).length;

    const porcentajeAprobados = total > 0 ? ((aprobados / total) * 100).toFixed(1) : "—";
    const porcentajeReprobados = total > 0 ? ((reprobados / total) * 100).toFixed(1) : "—";
    const porcentajeEnRiesgo = total > 0 ? ((enRiesgo / total) * 100).toFixed(1) : "—";

    setEstadisticas({
      promedioGeneral,
      porcentajeAprobados,
      porcentajeReprobados,
      porcentajeEnRiesgo
    });
  }, [notasAgrupadas]);

  // Agrupar notas por estudiante y materia
  const agruparNotas = (notas) => {
    const grupos = {};

    notas.forEach(nota => {
      const estudiante = nota.estudiante;
      const materia = nota.materia;
      if (!estudiante || !materia) return;

      const key = `${estudiante.id}-${materia.id}`;
      if (!grupos[key]) {
        grupos[key] = {
          estudianteId: estudiante.id,
          estudianteNombre: estudiante.usuario?.nombre ?? `ID ${estudiante.id}`,
          asignatura: materia.nombre,
          notas: {},
          fechas: {},
          promedio: null
        };
      }

      grupos[key].notas[nota.nombre] = nota.valor;
      grupos[key].fechas[nota.nombre] = nota.fecha;
    });

    Object.values(grupos).forEach(grupo => {
      const valores = ["NOTA1", "NOTA2", "NOTA3"]
        .map(nombre => grupo.notas[nombre])
        .filter(valor => typeof valor === "number");

      grupo.promedio = valores.length > 0
        ? (valores.reduce((a, b) => a + b, 0) / valores.length).toFixed(2)
        : "—";
    });

    return Object.values(grupos);
  };

  // Filtrar por materia seleccionada
  const notasFiltradas = materiaSeleccionada
    ? notasAgrupadas.filter(n => n.asignatura === materiaSeleccionada)
    : notasAgrupadas;

  // Paginación
  const totalPages = Math.ceil(notasFiltradas.length / notasPorPagina);
  const indexInicio = (currentPage - 1) * notasPorPagina;
  const indexFin = indexInicio + notasPorPagina;
  const notasPaginadas = notasFiltradas.slice(indexInicio, indexFin);

  const irPaginaAnterior = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const irPaginaSiguiente = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const irUltimaPagina = () => {
    setCurrentPage(totalPages);
  };

  return (
    <div className="container-fluid">
      <EncabezadoNotas />
      <FiltroNotas
        materias={materias}
        materiaSeleccionada={materiaSeleccionada}
        setMateriaSeleccionada={setMateriaSeleccionada}
      />
      <TablaNotas
        notas={notasPaginadas}
        agrupadas={true}
      />
      <EstadisticasNotas {...estadisticas} />
      <PaginacionNotas
        currentPage={currentPage}
        totalPages={totalPages}
        irAnterior={irPaginaAnterior}
        irSiguiente={irPaginaSiguiente}
        irUltima={irUltimaPagina}
      />
    </div>
  );
}
