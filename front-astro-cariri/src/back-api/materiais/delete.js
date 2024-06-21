import axios from "axios";
import { API_URL } from "../api";

export const deleteMaterialApi = async (id) => {
  try {
    const url = `${API_URL}/material/${id}`;
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    console.error("Axios error:", error);
    throw error;
  }
};
