export interface Product {
    product_id: number;
    category_id: number;
    name: string;
    description: string;
    price: number; 
    stock_quantity: number;
    image_url: string;
    is_available: boolean;
    created_at: string; 
    updated_at: string; 
}