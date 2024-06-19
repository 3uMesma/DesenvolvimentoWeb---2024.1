import axios from 'axios';
import { API_URL } from '../api';

export const getAllMateriaisApi = async () => {
  try {
    const url = `${API_URL}/material`;

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Axios error:', error);
    throw error;
  }
};
