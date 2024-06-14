// api.js
import axios from 'axios';
import { API_URL } from '../api';

export const putUserBackApi = async (userId, userData) => {
  try {
    const response = await axios.put(`${API_URL}/user/${userId}`, userData);
    return response.data;
  } catch (error) {
    console.error('Axios error:', error);
    throw error;
  }
};
