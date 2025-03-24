import axios from "axios";

// Use environment variable for the backend URL
const API_URL = import.meta.env.VITE_BACKEND_URL;

// Create an axios instance
const api = axios.create({
  baseURL: API_URL,
});

// Example functions for API calls
export const fetchData = async () => {
  try {
    const response = await api.get("/your-endpoint"); // Change 'your-endpoint'
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const postData = async (data) => {
  try {
    const response = await api.post("/your-endpoint", data); // Change 'your-endpoint'
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export default api;
