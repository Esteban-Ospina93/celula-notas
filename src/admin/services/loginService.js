// authService.js
import axios from "axios";

const API_URL = "http://localhost:8080/auth"; // ajusta si tu endpoint es diferente

export const loginUsuario = (credenciales) =>
  axios.post(`${API_URL}/login`, credenciales);
