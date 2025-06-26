import axios from "axios";

const API = "http://localhost:8888/api/blogcategories";

// Lấy danh sách danh mục blog
export const getBlogCategories = (params = {}) => {
  return axios.get(API, { params });
};

// Lấy chi tiết danh mục blog
export const getBlogCategoryDetail = (slug: string) => {
  return axios.get(`${API}/${slug}`);
};

// Tạo danh mục blog
export const createBlogCategory = (data: {
  name: string;
  description?: string;
}) => {
  return axios.post(API, data);
};

// Cập nhật danh mục blog
export const updateBlogCategory = (
  slug: string,
  data: {
    name: string;
    description?: string;
  }
) => {
  return axios.put(`${API}/${slug}`, data);
};

// Xoá mềm
export const deleteBlogCategory = (slug: string) => {
  return axios.delete(`${API}/${slug}`);
};

// Lấy danh sách danh mục đã xoá
export const getDeletedBlogCategories = () => {
  return axios.get(`${API}/trash`);
};

// Khôi phục danh mục
export const restoreBlogCategory = (slug: string) => {
  return axios.patch(`${API}/restore/${slug}`);
};

// Xoá vĩnh viễn
export const forceDeleteBlogCategory = (slug: string) => {
  return axios.delete(`${API}/forcedelete/${slug}`);
};
