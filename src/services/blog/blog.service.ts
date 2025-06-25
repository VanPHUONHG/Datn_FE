import axios from "axios";
const API = "http://localhost:8888/api/blogs";

export const getBlogs = (params = {}) => {
  return axios.get(API, { params });
};

export const getBlogBySlug = (slug: string) => {
  return axios.get(`http://localhost:8888/api/blogs/${slug}`);
};
