export interface IOrderItem {
    productId: string; // ObjectId dạng string
    variantId: string;
    productImage: string;
    productName: string;
    variant: {
        size: string;
        color: string;
    };
    quantity: number;
    price: number;
}

export interface ICouponInfo {
    couponId?: string;
    code?: string;
    discountAmount?: number;
}

export interface IShippingAddress {
    name?: string;
    phone?: string;
    addressLine?: string;
}

export type PaymentMethod = 'cod' | 'vnpay';
export type OrderStatus = 'pending' | 'confirmed' | 'shipped' | 'completed' | 'cancelled';

export interface IOrder {
    _id?: string;
    user: { _id: string; full_name: string } | string;

    items: IOrderItem[];

    totalAmount: number;
    discountAmount?: number;
    finalAmount: number;

    coupon?: ICouponInfo;

    shippingAddress?: IShippingAddress;

    note?: string;

    paymentMethod?: PaymentMethod;
    status?: OrderStatus;

    createdAt?: string;
    updatedAt?: string;
}
