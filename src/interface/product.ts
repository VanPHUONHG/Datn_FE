interface Product {
  _id: string;
  name: string;
  category_id: string;
  description: string;
  price: number;
  stock_quantity: string; // Nếu bạn muốn có thể đổi thành number nếu dữ liệu luôn số
  image_url: string;
  is_available: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}
export type { Product };

