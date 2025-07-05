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

export const getProductDetail = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product detail:", error);
    throw error;
  }
};



// Lấy danh sách sản phẩm mới nhất
export const getNewestProducts = async (limit = 8) => {
  try {
    const response = await axios.get(`${API_URL}/products/productnew`, {
      params: { limit },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching newest products:", error);
    throw error;
  }
};