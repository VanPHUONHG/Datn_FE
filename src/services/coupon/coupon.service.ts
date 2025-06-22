import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const validateCouponForUser = async (code: string) => {
    try {
        const url = `${API_URL}/coupons/validate/${code}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error: any) {
        throw error.response?.data || { message: "Không thể áp dụng mã giảm giá." };
    }
};
