import { message, Popconfirm } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllOrdersAdmin } from "services/order/order.service";
import type { IOrder } from "types/order";

const OrderList = () => {
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [page, setPage] = useState(1);
    const perPage = 5;

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const data = await getAllOrdersAdmin();
                setOrders(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchOrders();
    }, []);

    const currentOrders = orders.slice((page - 1) * perPage, page * perPage);
    const totalPages = Math.ceil(orders.length / perPage);

    const handleUpdate = async (id: string) => {
        // Thêm logic cập nhật trạng thái nếu cần
        message.info("Tính năng cập nhật đang phát triển.");
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Danh sách đơn hàng
            </h2>

            <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                    <tr>
                        {[
                            "STT",
                            "ID khách hàng",
                            "Tên người nhận",
                            "SĐT",
                            "Địa chỉ",
                            "Tổng tiền",
                            "Thanh toán",
                            "Trạng thái",
                            "Thao tác",
                        ].map((header) => (
                            <th
                                key={header}
                                className="border px-4 py-2 text-left text-gray-700 font-medium"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentOrders.length === 0 ? (
                        <tr>
                            <td colSpan={9} className="text-center py-6 text-gray-500">
                                Không có đơn hàng nào
                            </td>
                        </tr>
                    ) : (
                        currentOrders.map((order, index) => (
                            <tr
                                key={order._id}
                                className="even:bg-gray-50 hover:bg-gray-100 transition-colors"
                            >
                                <td className="border px-4 py-2">
                                    {(page - 1) * perPage + index + 1}
                                </td>
                                <td className="border px-4 py-2">{order.user}</td>
                                <td className="border px-4 py-2">
                                    {order.shippingAddress?.name || "N/A"}
                                </td>
                                <td className="border px-4 py-2">
                                    {order.shippingAddress?.phone || "N/A"}
                                </td>
                                <td className="border px-4 py-2">
                                    {order.shippingAddress?.addressLine || "N/A"}
                                </td>
                                <td className="border px-4 py-2">
                                    {order.finalAmount.toLocaleString()} ₫
                                </td>
                                <td className="border px-4 py-2">
                                    {order.paymentMethod === "cod" ? "COD" : "VNPay"}
                                </td>
                                <td className="border px-4 py-2 capitalize">
                                    {order.status}
                                </td>
                                <td className="border px-4 py-2">
                                    <div className="flex gap-3">
                                        <Link
                                            to={`/admin/order-detail/${order._id}`}
                                            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                                        >
                                            Chi tiết
                                        </Link>
                                        <Popconfirm
                                            title="Bạn có chắc muốn cập nhật đơn hàng này?"
                                            okText="Có"
                                            cancelText="Không"
                                            onConfirm={() => handleUpdate(order._id!)}
                                        >
                                            <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                                                Cập nhật
                                            </button>
                                        </Popconfirm>
                                    </div>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="mt-6 flex justify-center items-center gap-2 text-sm select-none">
                <button
                    disabled={page === 1}
                    onClick={() => setPage(1)}
                    className="px-3 py-1 border rounded hover:bg-gray-100"
                >
                    «
                </button>
                <button
                    disabled={page === 1}
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    className="px-3 py-1 border rounded hover:bg-gray-100"
                >
                    ‹
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setPage(i + 1)}
                        className={`px-3 py-1 rounded border font-medium ${page === i + 1
                                ? "bg-blue-600 text-white"
                                : "bg-white hover:bg-gray-100"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    disabled={page === totalPages}
                    onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                    className="px-3 py-1 border rounded hover:bg-gray-100"
                >
                    ›
                </button>
                <button
                    disabled={page === totalPages}
                    onClick={() => setPage(totalPages)}
                    className="px-3 py-1 border rounded hover:bg-gray-100"
                >
                    »
                </button>
            </div>
        </div>
    );
};

export default OrderList;
