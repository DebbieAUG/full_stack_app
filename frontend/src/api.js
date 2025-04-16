import axios from 'axios';


// Base API URL for the backend
const API_URL = '';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

// Helper functions for API calls
export const getProducts = async () => {
  const response = await api.get('/');
  return response.data;
};

export const addProduct = async (productData) => {
  const response = await api.post('/', productData);
  return response.data;
};

export const updateProduct = async (id, updatedData) => {
  const response = await api.put(`/${id}`, updatedData);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await api.delete(`/${id}`);
  return response.data;
};

export default api;
