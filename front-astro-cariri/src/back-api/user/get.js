// api.js
import axios from 'axios';
import { API_URL } from '../api';

export const getUserBackApi = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Axios error:', error);
    throw error;
  }
};
