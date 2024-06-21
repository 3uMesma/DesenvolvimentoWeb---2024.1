// Importe o Axios e a URL da API conforme necessário
import axios from "axios";
import { API_URL } from "../api";

// Função para realizar o login na API
export const postLoginApi = async (username, password) => {
  try {
    const url = `${API_URL}/login`;

    const loginData = {
      username: username,
      password: password,
    };

    const response = await axios.post(url, loginData);
    return response.data;
  } catch (error) {
    console.error("Axios error:", error);
    throw error;
  }
};
