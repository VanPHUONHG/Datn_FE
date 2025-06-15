export interface Product {
  matchedVariants: any;
  _id: string; 
  category_id: string; 
  name: string;
  description?: string;
  brand:string;
  origin?: string;
  price: number;
  stock_quantity: number;
  images: string[];
  discount_price: number;
  variation_status: boolean;
  isDeleted: boolean;
  createdAt: string; 
  updatedAt: string;
}
