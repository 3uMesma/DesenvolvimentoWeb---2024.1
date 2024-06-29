// api.js
import axios from "axios";
import { API_URL } from "../api";

export const createNewUser = async (newUser) => {
  try {
    const response = await axios.post(`${API_URL}/user`, newUser);
    return response.data;
  } catch (error) {
    console.error("Axios error:", error);
    throw error;
  }
};
