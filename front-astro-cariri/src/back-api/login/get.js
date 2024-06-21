import axios from 'axios';
import { API_URL } from '../api';

export const getUserApi = async () => {
  try {
    const url = `${API_URL}/user`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Axios error:', error);
    throw error;
  }
};