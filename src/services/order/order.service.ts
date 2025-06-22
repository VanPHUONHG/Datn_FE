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
