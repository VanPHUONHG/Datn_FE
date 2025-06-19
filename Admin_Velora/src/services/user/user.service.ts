import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const getAllUsers = async () => {
    try {
        const res = await axios.get(`${API_URL}/users`);
        return res.data;
    } catch (error) {
        throw error;
    }
};
