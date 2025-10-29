import axios from 'axios';

const API_URL = 'http://localhost:8080/academico/usuarios';


export const createRegister = (usuarioDTO) => axios.post(API_URL, usuarioDTO);

export const getRegisters = () => axios.get(API_URL);