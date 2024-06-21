// Importe o Axios e a URL da API conforme necessário
import axios from "axios";
import { API_URL } from "../api";

export const putMaterialApi = async (materialData) => {
  try {
    const url = `${API_URL}/material/${materialData.material_id}`;

    const response = await axios.put(url, materialData);
    return response.data;
  } catch (error) {
    console.error("Axios error:", error);
    throw error;
  }
};