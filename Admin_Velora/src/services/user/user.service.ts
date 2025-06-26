import axios from "axios";
import type { User } from "types/user";

const API_URL = import.meta.env.VITE_API_URL;
const USER_ENDPOINT = `${API_URL}/users`;

// Lấy danh sách tất cả người dùng (chỉ admin mới gọi được)
export const getAllUsers = async (): Promise<User[]> => {
  const token = localStorage.getItem("token_admin");

  const res = await axios.get(`${USER_ENDPOINT}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
   return res.data.users as User[];
};

// Lấy thông tin chi tiết 1 user theo ID
export const getUserById = async (id: string): Promise<User> => {
  const token = localStorage.getItem("token_admin");

  const res = await axios.get(`${USER_ENDPOINT}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data.user as User; // giả định BE trả về { user }
};
