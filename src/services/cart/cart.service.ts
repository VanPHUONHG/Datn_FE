import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const CART_ENDPOINT = `${API_URL}/cart`;

interface CartPayload {
  product_id: string;
  quantity: number;
  variant_id?: string;
}

export const getCart = async () => {
  const res = await axios.get(`${CART_ENDPOINT}`);
  return res.data;
};

export const addToCart = async (payload: CartPayload) => {
  const res = await axios.post(`${CART_ENDPOINT}/add`, payload);
  return res.data;
};

export const updateCartItem = async (payload: CartPayload) => {
  const res = await axios.put(`${CART_ENDPOINT}/update`, payload);
  return res.data;
};

export const removeFromCart = async (payload: { product_id: string; variant_id?: string }) => {
  const res = await axios.put(`${CART_ENDPOINT}/remove`, payload);
  return res.data;
};

export const clearCart = async () => {
  const res = await axios.delete(`${CART_ENDPOINT}/clear`);
  return res.data;
};
