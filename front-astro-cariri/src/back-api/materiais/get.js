import axios from 'axios';
import { API_URL } from '../api';

export const getMaterialApi = async (id) => {
  try {
    const url = `${API_URL}/material/${id}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Axios error:', error);
    throw error;
  }
};