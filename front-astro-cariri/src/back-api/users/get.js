import axios from "axios";
import { API_URL } from "../api";

// Função para obter a lista de todos os usuários
export const getAllUsersBackApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error("Axios error:", error);
    throw error;
  }
};
