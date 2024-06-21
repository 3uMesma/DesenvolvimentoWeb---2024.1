import axios from "axios";
import { API_URL } from "../api";

export const getEventApi = async (id) => {
  try {
    const url = `${API_URL}/event/${id}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Axios error:", error);
    throw error;
  }
};
