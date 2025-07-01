import React, { useEffect, useState } from "react";
import { getUserById } from "services/user/user.service";
import type { IUser } from "types/user";
import { Spin, Descriptions, message } from "antd";

const Profile = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

 useEffect(() => {
  const fetchUser = async () => {
    try {
      const storedUser = localStorage.getItem("user");
      if (!storedUser) {
        message.error("Không tìm thấy thông tin người dùng trong localStorage");
        return;
      }

      const parsedUser = JSON.parse(storedUser);
      const userId = parsedUser._id;

      const userData = await getUserById(userId);
      setUser(userData);
    } catch {
      message.error("Không thể tải thông tin người dùng");
    } finally {
      setLoading(false);
    }
  };

  fetchUser();
}, []);

  if (loading) return <Spin tip="Đang tải..." className="flex justify-center p-10" />;

  if (!user) return <div className="text-center text-red-500">Không tìm thấy người dùng</div>;

  return (
    <div className="p-6 mt-10 max-w-3xl mx-auto bg-white shadow rounded-xl">
      <h2 className="text-2xl font-semibold mb-4">Thông tin cá nhân</h2>
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Tên đăng nhập">{user.username}</Descriptions.Item>
        <Descriptions.Item label="Họ và tên">{user.full_name}</Descriptions.Item>
        <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
        <Descriptions.Item label="Số điện thoại">{user.phone}</Descriptions.Item>
        <Descriptions.Item label="Địa chỉ">{user.address}</Descriptions.Item>
        <Descriptions.Item label="Vai trò">{user.role === "admin" ? "Quản trị viên" : "Khách hàng"}</Descriptions.Item>
        <Descriptions.Item label="Trạng thái">
          {{
            active: "Đang hoạt động",
            unactive: "Chưa kích hoạt",
            banned: "Đã bị khoá",
          }[user.status]}
        </Descriptions.Item>
        <Descriptions.Item label="Ngày tạo">{new Date(user.created_at).toLocaleString()}</Descriptions.Item>
        <Descriptions.Item label="Cập nhật gần nhất">{new Date(user.updated_at).toLocaleString()}</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default Profile;
