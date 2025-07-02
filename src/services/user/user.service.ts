import axios from "axios";
import type { IUser, IChangePasswordPayload } from "types/user";

const API_URL = import.meta.env.VITE_API_URL;

// GET user
export const getUserById = async (userId: string) => {
  const token = localStorage.getItem("token");

  const response = await axios.get(`${API_URL}/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.user;
};

// Update user
export const updateUser = async (userId: string, data: Partial<IUser>) => {
  const token = localStorage.getItem("token");

  const response = await axios.patch(`${API_URL}/users/update/${userId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.user;
};

// Change password
export const changePassword = async (data: IChangePasswordPayload) => {
  const token = localStorage.getItem("token");

  const response = await axios.patch(`${API_URL}/users/update-password`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
