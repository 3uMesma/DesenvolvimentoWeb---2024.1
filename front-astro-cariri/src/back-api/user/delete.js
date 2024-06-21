import axios from "axios";
import { API_URL } from "../api";

export const deleteUserBackApi = async (userId) => {
  try {
    const response = await axios.delete(`${API_URL}/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Axios error:", error);
    throw error;
  }
};
