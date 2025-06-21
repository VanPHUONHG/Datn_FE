import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getUserById = async (userId: string) => {
    try {
        const token = localStorage.getItem("token");

        const response = await axios.get(`${API_URL}/users/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.user;
    } catch (error) {
        console.error("Error fetching user by ID:", error);
        throw error;
    }
};
