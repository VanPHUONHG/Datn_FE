import type { Product } from "interface/product";

export interface IProductVariant {
  _id: string;
  product_id: string | Product; 
  size: string;
  color: string;
   image: string; // ảnh chính
  images?: string[]; 
  sku: string;
  price: number;
  discount_price?: number; 
  stock_quantity: number;
  is_available: boolean;
  isDeleted: boolean;
  created_at: string; 
  updated_at: string;
}
