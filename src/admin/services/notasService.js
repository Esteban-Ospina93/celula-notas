import axios from 'axios';

const API_URL = 'http://localhost:8080/academico/notas';

export const obtenerNotasPorEstudiante = (estudianteId) =>
  axios.get(`${API_URL}/estudiante/${estudianteId}`);

export const obtenerNotasPorMateria = (materiaId) =>
  axios.get(`${API_URL}/materia/${materiaId}`);

export const obtenerNotasPorEstudianteYMateria = (estudianteId, materiaId) =>
  axios.get(`${API_URL}/estudiante/${estudianteId}/materia/${materiaId}`);

export const crearNota = (notaDTO) => {
  console.log("Enviando al backend:", notaDTO);
  return axios.post(API_URL, notaDTO, {
    headers: {
      "Content-Type": "application/json"
    }
  });
};



export const actualizarNota = (id, notaDTO) =>
  axios.put(`${API_URL}/${id}`, notaDTO);

export const eliminarNota = (id) =>
  axios.delete(`${API_URL}/${id}`);

export const obtenerTodasLasNotas = () =>
  axios.get("http://localhost:8080/academico/notas");
