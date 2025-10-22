import axios from 'axios';

const API_URL = 'http://localhost:8080/notas';

export const obtenerNotas = () => axios.get(API_URL);

export const crearNota = (notaDTO) => axios.post(API_URL, notaDTO);
