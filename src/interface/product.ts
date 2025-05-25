interface Product {
  _id: string;
  name: string;
  category_id: string;
  description: string;
  price: number;
  stock_quantity: string; //kiểm tra hàng tồn kho
  image_url: string;
  is_available: boolean;// ktr còn bán hay kg
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}
export type { Product };

