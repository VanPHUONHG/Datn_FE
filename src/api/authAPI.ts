import axios from 'axios';

const BASE_URL = 'http://localhost:8888/api/auth'; // ✅ Đúng path backend

export interface SignupData {
  username: string;
  password: string;
  email: string;
  full_name: string;
  phone: string;
  address: string;
}

export interface LoginData {
  username: string;
  password: string;
}

export const signup = async (data: SignupData) => {
  return await axios.post(`${BASE_URL}/signup`, data); // POST http://localhost:8888/api/auth/signup
};

export const login = async (data: LoginData) => {
  return await axios.post(`${BASE_URL}/login`, data); // ✅ POST http://localhost:8888/api/auth/login
};
