import type { Product } from "./product";
import type { IProductVariant } from "./productVariant";

export interface ICartItem {
  product: Product | string;
  variant?: IProductVariant | string;
  quantity: number;
}

export interface ICart {
  _id?: string;
  user: string;
  items: ICartItem[];
  updatedAt?: string;
}
