export interface ICoupon {
  _id?: string;
  code: string;
  discount_type: 'percent' | 'fixed';
  discount_value: number;
  min_purchase?: number;
  max_discount?: number;
  start_date?: string; // ISO string nếu từ API
  end_date?: string;
  is_active?: boolean;
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
