import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderById, updateOrderStatus } from "services/order/order.service";
import type { IOrder } from "types/order";

const STATUS_ORDER = ["pending", "confirmed", "shipped", "completed", "cancelled"];

const getValidNextStatuses = (current: string) => {
    if (current === "pending") return ["confirmed", "cancelled"];
    if (current === "confirmed") return ["shipped"];
    if (current === "shipped") return ["completed"];
    return []; // completed or cancelled can't change
};

const formatOrderCode = (id: string) => {
    const last6 = id.slice(-6).toUpperCase();
    return `ORDER-${last6}`;
};

const OrderUpdate = () => {
    const { id: orderId } = useParams();
    const [order, setOrder] = useState<IOrder | null>(null);
    const [status, setStatus] = useState("");

    const handleUpdateStatus = async () => {
        if (!order) return;

        const validNext = getValidNextStatuses(order?.status || "pending");
        if (!validNext.includes(status)) {
            return message.warning("⚠️ Trạng thái này không hợp lệ!");
        }

        try {
            await updateOrderStatus(orderId as string, status);
            const refreshedOrder = await getOrderById(orderId as string);
            setOrder(refreshedOrder);
            message.success("✅ Cập nhật trạng thái thành công!");
        } catch (error: any) {
            console.error("Lỗi cập nhật trạng thái:", error.response?.data || error.message);
            message.error("❌ Cập nhật trạng thái thất bại!");
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getOrderById(orderId as string);
                setOrder(data);
                setStatus(data.status || "pending");
            } catch (err) {
                console.error("Lỗi khi lấy đơn hàng:", err);
            }
        };
        fetchData();
    }, [orderId]);

    if (!order) return <div className="p-6">Đang tải đơn hàng...</div>;

    const validOptions = getValidNextStatuses(order?.status || "pending");

    return (
        <div className="bg-gray-50 min-h-screen py-10 px-6 font-sans">
            <section className="max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <header className="p-6 bg-blue-600">
                    <h2 className="text-white text-xl font-bold">
                        Chi tiết đơn hàng: <span className="underline">{formatOrderCode(order._id || "")}</span>
                    </h2>
                </header>

                <div className="p-6 grid grid-cols-2 gap-6">
                    {/* Thông tin người nhận */}
                    <div className="col-span-2">
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">Thông tin người nhận</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Tên người nhận</label>
                                <input
                                    type="text"
                                    value={order.shippingAddress?.name || ""}
                                    readOnly
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Số điện thoại</label>
                                <input
                                    type="tel"
                                    value={order.shippingAddress?.phone || ""}
                                    readOnly
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100"
                                />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-600 mb-1">Địa chỉ</label>
                                <input
                                    type="text"
                                    value={order.shippingAddress?.addressLine || ""}
                                    readOnly
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Trạng thái đơn hàng */}
                    <div className="col-span-2">
                        <div className="mb-3">
                            <label className="block text-sm font-medium text-gray-600 mb-1">Trạng thái đơn hàng</label>
                            <select
                                className="w-full border border-gray-300 rounded-md px-4 py-2"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                {STATUS_ORDER.map((stt) => (
                                    <option
                                        key={stt}
                                        value={stt}
                                        disabled={!validOptions.includes(stt)}
                                    >
                                        {stt === "pending" && "🕓 Chờ xác nhận"}
                                        {stt === "confirmed" && "✅ Đã xác nhận"}
                                        {stt === "shipped" && "🚚 Đang giao"}
                                        {stt === "completed" && "🎉 Hoàn thành"}
                                        {stt === "cancelled" && "❌ Đã huỷ"}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={handleUpdateStatus}
                                className="bg-green-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-700"
                            >
                                Cập nhật trạng thái
                            </button>
                        </div>
                    </div>

                    {/* Danh sách sản phẩm */}
                    <div className="col-span-2 mt-6">
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">Danh sách sản phẩm</h3>
                        <ul className="border border-gray-300 rounded-md bg-gray-50 divide-y divide-gray-200">
                            {order.items.map((item, idx) => (
                                <li key={idx} className="p-4 flex justify-between items-center">
                                    <div>
                                        <span className="font-medium">{item.productName || "❌ Sản phẩm đã bị xoá"}</span>{" "}
                                        – Size: {item.variant.size}, Màu: {item.variant.color}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        SL: {item.quantity}, Giá: {(item.price * item.quantity).toLocaleString()} ₫
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OrderUpdate;
