// Importe o Axios e a URL da API conforme necessário
import axios from "axios";
import { API_URL } from "../api";

// Função para realizar o login na API
export const postEventoApi = async (eventData) => {
  try {
    const url = `${API_URL}/event`;

    let data = Object.assign({}, eventData);

    if (data["tipo"] == "Minicurso") {
      data["tipo"] = 1;
    } else if (data["tipo"] == "Palestra") {
      data["tipo"] = 2;
    } else if (data["tipo"] == "Roda de Conversa") {
      data["tipo"] = 3;
    } else {
      data["tipo"] = 4;
    }

    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error("Axios error:", error);
    throw error;
  }
};

// titulo, contato, interessado, instituicao, endereco, tipo, data, descricao
