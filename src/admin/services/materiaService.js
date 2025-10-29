import axios from "axios";

const API_URL = "http://localhost:8080/academico/materias";

export const obtenerMaterias = () => {
  return axios.get(API_URL);
};
