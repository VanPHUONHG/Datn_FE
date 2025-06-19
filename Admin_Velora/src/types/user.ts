
export interface User {
  _id: string;
  username: string;
  password?: string;
  full_name: string;
  phone: string;
  address: string;
  role: "customer" | "admin";
  created_at: string;
  updated_at: string;
}