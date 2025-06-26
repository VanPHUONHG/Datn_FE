import axios from "axios";
import type { IOrder } from "types/order";

const API_URL = import.meta.env.VITE_API_URL;
const ORDER_ENDPOINT = `${API_URL}/orders`;

export const getAllOrdersAdmin = async (): Promise<IOrder[]> => {
    const token = localStorage.getItem("token_admin");

    const res = await axios.get(`${ORDER_ENDPOINT}/all`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    // Trả về danh sách đơn hàng (mảng)
    return res.data.data as IOrder[];
};

export const getOrderById = async (orderId: string): Promise<IOrder> => {
    const token = localStorage.getItem("token_admin");

    const res = await axios.get(`${ORDER_ENDPOINT}/${orderId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res.data.data as IOrder;
};
