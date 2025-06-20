export interface IProductVariant {
  _id: string;
  product_id: {
    _id: string;
    name: string;
  } | string; // populate hoặc chỉ là ObjectId string
  size: string;
  color: string;
  image: string;
  images: string[];
  sku: string;
  price: number;
  discount_price?: number;
  stock_quantity: number;
  is_available: boolean;
  isDeleted?: boolean;
  created_at?: string;
  updated_at?: string;
}
