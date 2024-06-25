import axios from "axios";
import { API_URL } from "../api";

export const getAllMateriaisApi = async (materialsTitle) => {
  try {
    const url = `${API_URL}/material?titulo=${materialsTitle}`;

    console.log(materialsTitle)

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Axios error:", error);
    throw error;
  }
};
