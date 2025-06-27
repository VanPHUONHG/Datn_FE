import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "services/user/user.service";
import type { User } from "types/user";

const UserDetail = () => {
  const { id } = useParams(); // lấy id từ URL
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUserById(id!); // ! vì chắc chắn có id
        setUser(data);
      } catch (error) {
        console.error("Lỗi khi lấy chi tiết người dùng:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  if (loading) return <p className="text-center py-4">Đang tải...</p>;
  if (!user) return <p className="text-center py-4 text-red-500">Không tìm thấy người dùng</p>;

  return (
    <div className="p-6 bg-white rounded shadow max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-green-600">Chi tiết tài khoản</h2>
      <p><strong>Họ tên:</strong> {user.full_name}</p>
      <p><strong>Tên đăng nhập:</strong> {user.username}</p>
      <p><strong>SĐT:</strong> {user.phone}</p>
      <p><strong>Địa chỉ:</strong> {user.address}</p>
      <p><strong>Vai trò:</strong> {user.role === "admin" ? "Admin" : "Khách hàng"}</p>
      <p><strong>Ngày tạo:</strong> {new Date(user.created_at).toLocaleDateString()}</p>
    </div>
  );
};

export default UserDetail;
