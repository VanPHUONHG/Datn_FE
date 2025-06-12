import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const CART_ENDPOINT = `${API_URL}/cart`;

export interface CartPayload {
  product_id: string;
  quantity: number;
  variant_id?: string;
}

export const getCart = async () => {
  const token = localStorage.getItem("token");
  
  const res = await axios.get(`${CART_ENDPOINT}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const addToCart = async (payload: CartPayload) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(`${CART_ENDPOINT}/add`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const updateCartItem = async (payload: CartPayload) => {
  const token = localStorage.getItem("token");
  const res = await axios.put(`${CART_ENDPOINT}/update`, payload , {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const removeFromCart = async (payload: { product_id: string; variant_id?: string }) => {
  const token = localStorage.getItem("token");
  const res = await axios.delete(`${CART_ENDPOINT}/remove`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: payload,
  });
  return res.data;
};
export const clearCart = async () => {
  const token = localStorage.getItem("token");
  const res = await axios.delete(`${CART_ENDPOINT}/clear`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
