export interface Product {
  _id: string;
  category_id: string;           
  name: string;
  origin?: string;              
  description?: string;           
  images: string[];             
  stock_quantity: string;       
  price: number;
  discount_price: number;        
  variation_status: boolean;
  isDeleted: boolean;
  createdAt: string;           
  updatedAt: string;              
}
