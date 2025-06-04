import axios from "axios";
import type { Product } from "interface/product";

const API_URL = import.meta.env.VITE_API_URL;

export const getCategories = async (search?: string) => {
  try {
    const url = `${API_URL}/categories`;
    const params = search ? { search } : {};

    const response = await axios.get(url, { params });
    console.log("👉 Response data:", response.data);
    return response.data.data; // vì backend trả về { success, data, message }
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};


export const getProductsByCategory = async (categoryId: string): Promise<Product[]> => {
  try {
    const response = await axios.get(`${API_URL}/products/by-category/${categoryId}`);
    return response.data.data; // vì backend trả về { success, message, data }
  } catch (error) {
    console.error("❌ Error fetching products by category:", error);
    throw error;
  }
};
