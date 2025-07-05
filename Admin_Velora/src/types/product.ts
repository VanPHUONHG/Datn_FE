export interface Product {
  _id: string;
  category?: {
    _id: string;
    name: string;
  };
  name: string;
  origin?: string;
  description?: string;
  images: string[];
  stock_quantity: string;
  price: number;
  discount_price: number;
  variation_status: boolean;
  brand?: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}
