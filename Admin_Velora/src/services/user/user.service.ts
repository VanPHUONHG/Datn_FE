import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const getAllUsers = async () => {
    try {
        const res = await axios.get(`${API_URL}/users`);
        return res.data;
    } catch (error) {
        console.log(error);

    }
};

export const getUserById = async (id: string, token: string) => {
    try {
        const res = await axios.get(`${API_URL}/users/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data.user; // vì BE trả về { message, user }
    } catch (error) {
        console.log(error);

    }
};