import axios from "axios";
export const getBlogCategories = () => axios.get("http://localhost:8888/api/blog-categories");
