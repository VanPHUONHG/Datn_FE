import type { Product } from "interface/product";

export interface IProductVariant {
  _id: string;
  product_id: string | Product; 
  size: string;
  sku: string;
  price: number;
  stock_quantity: number;
  is_available: boolean;
  isDeleted: boolean;
  created_at: string; 
  updated_at: string;
}
