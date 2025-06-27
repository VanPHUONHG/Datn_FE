import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "services/auth/auth.service";


const AdminLogin = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.username.trim()) {
      setError("Vui lòng nhập tài khoản.");
      return false;
    }
    if (!formData.password) {
      setError("Vui lòng nhập mật khẩu.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateForm()) return;

    try {
      const res = await login(formData);
      const { user, token } = res.data;

      if (user.role !== "admin") {
        setError("Bạn không có quyền truy cập admin.");
        return;
      }

      localStorage.setItem("token_admin", token);
      localStorage.setItem("user_admin", JSON.stringify(user));

      // Phát custom event giống Login.tsx
      window.dispatchEvent(new Event("storageChanged"));

      setSuccess("Đăng nhập thành công!");
      setTimeout(() => navigate("/admin"), 1000);
    } catch (err: any) {
      const msg = err.response?.data?.message || "Đăng nhập thất bại";
      setError(msg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 animate-gradient-x opacity-70"></div>

      <div className="relative bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-xl p-10 max-w-md w-full z-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Admin Login
        </h2>

        {error && (
          <p className="text-red-600 text-sm mb-3 font-semibold">{error}</p>
        )}
        {success && (
          <p className="text-green-600 text-sm mb-3 font-semibold">{success}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-gray-700 font-semibold mb-2"
            >
              Tài khoản
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="admin"
              className="w-full border border-gray-300 rounded-md px-4 py-2
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         transition-colors duration-300"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Mật khẩu
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Your password"
              className="w-full border border-gray-300 rounded-md px-4 py-2
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         transition-colors duration-300"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white
                       font-semibold py-3 rounded-md transition-colors duration-300
                       flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
            Đăng nhập
          </button>
        </form>
      </div>

      <style>
        {`
          @keyframes gradient-x {
            0%, 100% {
              background-position: 0% center;
            }
            50% {
              background-position: 100% center;
            }
          }
          .animate-gradient-x {
            background-size: 200% auto;
            animation: gradient-x 10s ease infinite;
          }
        `}
      </style>
    </div>
  );
};

export default AdminLogin;
