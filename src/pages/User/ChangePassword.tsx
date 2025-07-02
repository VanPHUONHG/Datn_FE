import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { changePassword } from "services/user/user.service";
import type { IChangePasswordPayload } from "types/user";
import { useNavigate } from "react-router-dom";
import { isAxiosError } from "axios";

const ChangePassword = () => {
  const [form] = Form.useForm<IChangePasswordPayload>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

const onFinish = async (values: IChangePasswordPayload) => {
  try {
    setLoading(true);
    await changePassword(values);
    message.success("Đổi mật khẩu thành công. Vui lòng đăng nhập lại!");
    
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.dispatchEvent(new Event("storageChanged"));
    navigate("/login");
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      message.error(error.response?.data?.message || "Đổi mật khẩu thất bại.");
    } else {
      message.error("Đổi mật khẩu thất bại.");
    }
  } finally {
    setLoading(false);
  }
};

  return (
  <div className="w-full flex justify-center mt-16">
  <div className="w-full max-w-2xl p-12 bg-white rounded shadow">
    <h2 className="text-3xl font-bold mb-8 text-center">Đổi mật khẩu</h2>

    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        name="password"
        label="Mật khẩu hiện tại"
        rules={[{ required: true, message: "Vui lòng nhập mật khẩu hiện tại" }]}
      >
        <Input.Password
          placeholder="Nhập mật khẩu cũ"
          className="text-base h-12"
        />
      </Form.Item>

      <Form.Item
        name="newPassword"
        label="Mật khẩu mới"
        rules={[
          { required: true, message: "Vui lòng nhập mật khẩu mới" },
          { min: 6, message: "Mật khẩu phải từ 6 ký tự trở lên" },
        ]}
      >
        <Input.Password
          placeholder="Nhập mật khẩu mới"
          className="text-base h-12"
        />
      </Form.Item>

      <Form.Item
        name="reNewPassword"
        label="Xác nhận mật khẩu mới"
        dependencies={["newPassword"]}
        rules={[
          { required: true, message: "Vui lòng xác nhận mật khẩu mới" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("newPassword") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("Mật khẩu xác nhận không khớp!")
              );
            },
          }),
        ]}
      >
        <Input.Password
          placeholder="Xác nhận lại mật khẩu mới"
          className="text-base h-12"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="w-full !h-10 !text-base"
          loading={loading}
        >
          Cập nhật mật khẩu
        </Button>
      </Form.Item>
    </Form>
  </div>
</div>
  );
};

export default ChangePassword;
