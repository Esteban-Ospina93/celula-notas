import axios from 'axios';

const API_URL = 'http://localhost:8080/academico/estudiantes';

export const obtenerEstudiantes = () =>
  axios.get(API_URL);
