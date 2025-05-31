import axios from "axios";
import type { Category } from "types/category";
import type { Product } from "types/product";

const API_URL = import.meta.env.VITE_API_URL;

export const getAllCategories = async (): Promise<Category[]> => {
  try {
    const res = await axios.get(`${API_URL}/categories`);
    return res.data.data;
  } catch (error: any) {
    console.error("Lỗi khi lấy danh mục:", error);
    throw new Error("Không thể lấy danh mục");
  }
};

export const createCategory = async (data: Category): Promise<Category> => {
  const res = await axios.post(`${API_URL}/categories`, data);
  return res.data.data; 
};

export const deleteCategory = async(id: string)=>{
  const res = await axios.delete(`${API_URL}/categories/${id}`);
  return res.data
}

export const getProductsByCategory = async (categoryId: string): Promise<Product[]> => {
  try {
    const res = await axios.get(`${API_URL}/products/by-category/${categoryId}`);
    if(res.data.success) {
      return res.data.data || [];
    } else {
      return [];
    }
  } catch (error) {
    return []; 
  }
};

// Lấy danh mục theo ID
export const getCategoryById = async (id: string): Promise<Category> => {
  const res = await axios.get(`${API_URL}/categories/${id}`);
  return res.data.data;
};

// Cập nhật danh mục
export const updateCategory = async (id: string,categoryData: Partial<Category>): Promise<Category> => {
  const res = await axios.put(`${API_URL}/categories/${id}`, categoryData);
  return res.data.data;
};

// Hàm lấy danh mục đã xóa (xóa mềm)
export const getDeletedCategories = async (page = 1, perPage = 10) => {
  const res = await axios.get(`${API_URL}/categories/trash`, {
    params: { page, perPage }
  });
  return res.data;
};

// Hàm khôi phục danh mục
export const restoreCategory = async (id: string) => {
  const res = await axios.patch(`${API_URL}/categories/restore/${id}`);
  return res.data;
};

// Hàm xóa vĩnh viễn danh mục
export const forceDeleteCategory = async (id: string) => {
  const res = await axios.delete(`${API_URL}/categories/forcedelete/${id}`);
  return res.data;
};