import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getOrderById } from 'services/order/order.service';
import type { IOrder } from 'types/order';
import dayjs from 'dayjs';

const OrderDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState<IOrder | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            getOrderById(id)
                .then(res => setOrder(res.data))
                .catch(err => console.error('Lỗi khi lấy đơn hàng:', err))
                .finally(() => setLoading(false));
        }
    }, [id]);

    if (loading) return <p className="text-center text-gray-600 py-10">Đang tải dữ liệu...</p>;
    if (!order) return <p className="text-center text-red-500 py-10">Không tìm thấy đơn hàng</p>;

    return (
        <div className="bg-green-50 min-h-screen p-6">
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">Chi tiết đơn hàng</h2>

                {/* Danh sách sản phẩm */}
                <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse text-sm">
                        <thead>
                            <tr className="bg-green-500 text-white text-center">
                                <th className="p-3 border border-green-200">Hình ảnh</th>
                                <th className="p-3 border border-green-200">Tên sản phẩm</th>
                                <th className="p-3 border border-green-200">Phân loại</th>
                                <th className="p-3 border border-green-200">Đơn giá</th>
                                <th className="p-3 border border-green-200">Số lượng</th>
                                <th className="p-3 border border-green-200">Thành tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.items.map((item, idx) => (
                                <tr key={idx} className="text-center">
                                    <td className="p-3 border border-green-100">
                                        <img src={item.productImage} alt={item.productName} className="w-16 h-16 object-cover rounded mx-auto" />
                                    </td>
                                    <td className="p-3 border border-green-100 text-left">{item.productName}</td>
                                    <td className="p-3 border border-green-100">{item.variant.color} / {item.variant.size}</td>
                                    <td className="p-3 border border-green-100 text-green-600 font-semibold">
                                        {item.price.toLocaleString()} đ
                                    </td>
                                    <td className="p-3 border border-green-100">{item.quantity}</td>
                                    <td className="p-3 border border-green-100 font-bold">
                                        {(item.quantity * item.price).toLocaleString()} đ
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Thông tin đơn hàng */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <div><span className="font-semibold">Mã đơn hàng:</span> {order._id.slice(-6).toUpperCase()}</div>
                        <div><span className="font-semibold">Người nhận:</span> {order.shippingAddress.name}</div>
                        <div><span className="font-semibold">SĐT:</span> {order.shippingAddress.phone}</div>
                        <div><span className="font-semibold">Địa chỉ:</span> {order.shippingAddress.addressLine}</div>
                    </div>
                    <div className="space-y-2">
                        <div><span className="font-semibold">Ngày đặt:</span> {dayjs(order.createdAt).format('DD/MM/YYYY HH:mm')}</div>
                        <div><span className="font-semibold">Hình thức thanh toán:</span> {order.paymentMethod === 'cod' ? 'Thanh toán khi nhận hàng' : 'VNPAY'}</div>
                        <div><span className="font-semibold">Ghi chú:</span> {order.note || 'Không có'}</div>
                        <div className="text-lg font-bold text-green-600">
                            Tổng tiền: {order.finalAmount.toLocaleString()} đ <span className="text-sm font-normal text-gray-600">(đã bao gồm 32.000đ phí ship)</span>
                        </div>

                    </div>
                </div>

                {/* Nút quay lại */}
                <div className="text-center mt-8">
                    <button
                        onClick={() => navigate("/user/order")}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-semibold shadow-md transition"
                    >
                        ← Quay lại danh sách đơn hàng
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
