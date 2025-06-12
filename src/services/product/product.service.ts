import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getAllProducts = async (search?: string) => {
  try {
    const url = `${API_URL}/products`;
    const params = search ? { search } : {};

    const response = await axios.get(url, { params });
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
