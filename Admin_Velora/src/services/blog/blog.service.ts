import axios from "axios";

const API = "http://localhost:8888/api/blogs";

//  Lấy danh sách blog
export const getBlogs = (params = {}) => {
  return axios.get(API, { params });
};

export const getBlogBySlug = (slug: string) => {
  return axios.get(`${API}/${slug}`);
};

export const createBlog = (data: any) => {
  return axios.post(API, data);
};

export const updateBlog = (slug: string, data: any) => {
  return axios.put(`${API}/${slug}`, data);
};

export const deleteBlog = (slug: string) => {
  return axios.delete(`${API}/${slug}`);
};

export const getDeletedBlogs = (params = {}) => {
  return axios.get(`${API}/trash`, { params });
};

export const restoreBlog = (slug: string) => {
  return axios.patch(`${API}/restore/${slug}`);
};

export const forceDeleteBlog = (slug: string) => {
  return axios.delete(`${API}/forcedelete/${slug}`);
};
