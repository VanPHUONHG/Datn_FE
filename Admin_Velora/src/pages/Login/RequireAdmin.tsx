import React from "react";
import { Navigate } from "react-router-dom";

const RequireAdmin = ({ children }: { children: React.ReactNode }) => {
    const userString = localStorage.getItem("user_admin");
    const token = localStorage.getItem("token_admin");

    if (!userString || !token) {
        return <Navigate to="/admin/login" replace />;
    }

    try {
        const user = JSON.parse(userString);
        if (user.role !== "admin") {
            return <Navigate to="/admin/login" replace />;
        }

        return <>{children}</>;
    } catch (err) {
        const error = err as Error;
        console.error("Lỗi khi đọc user từ localStorage:", error.message);
        return <Navigate to="/admin/login" replace />;
    }
};

export default RequireAdmin;
