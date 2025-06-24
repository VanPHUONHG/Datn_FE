import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const createOrder = async (orderData: any) => {
    try {
        const token = localStorage.getItem("token");

        const response = await axios.post(`${API_URL}/orders`, orderData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error: any) {
        throw error.response?.data || { message: "Không thể tạo đơn hàng" };
    }
};

export const getOrdersByUserService = async () => {
    try {
        const token = localStorage.getItem("token");

        const response = await axios.get(`${API_URL}/orders`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data; // { message, status, data: [orders] }
    } catch (error: any) {
        throw error.response?.data || { message: "Không thể lấy đơn hàng" };
    }
};

export const getOrderById = async (orderId: string) => {
    try {
        const token = localStorage.getItem("token");

        const response = await axios.get(`${API_URL}/orders/${orderId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data; // { message, statusCode, data: order }
    } catch (error: any) {
        throw error.response?.data || { message: "Không thể lấy đơn hàng theo ID" };
    }
};


export const updateOrderInfoService = async (orderId: string, updatedData: any) => {
    try {
        const token = localStorage.getItem("token");

        const res = await axios.put(
            `${API_URL}/orders/${orderId}/update-info`,
            updatedData,
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );

        return res.data;
    } catch (error: any) {
        throw error.response?.data || { message: "Không thể cập nhật thông tin đơn hàng" };
    }
};





