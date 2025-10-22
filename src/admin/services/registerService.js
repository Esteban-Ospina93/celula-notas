import axios from 'axios';

const API_URL = 'http://localhost:3306/usuarios';

export const createRegister = (usuarioDTO) => axios.post(API_URL, usuarioDTO);

export const getRegisters = () => axios.get(API_URL);