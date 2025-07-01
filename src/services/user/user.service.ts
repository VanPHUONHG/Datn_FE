import axios from "axios";
import type { IUser } from "types/user";

const API_URL = import.meta.env.VITE_API_URL;

// GET user
export const getUserById = async (userId: string) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(`${API_URL}/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.user;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error;
  }
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


