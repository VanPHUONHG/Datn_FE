import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import type { ICartItem } from "types/cart";
import type { IUser } from "types/user";

function Checkout() {
    const location = useLocation();

    const selectedItems: ICartItem[] = location.state?.selectedItems || [];
    const passedUser: IUser | null = location.state?.user || null;

    const [userForm, setUserForm] = useState<IUser | null>(null);
    const [loading, setLoading] = useState(true);

    const deliveryCharges = 32400;

    // ✅ Lấy user từ location.state thay vì gọi lại API
    useEffect(() => {
        if (passedUser) {
            setUserForm(passedUser);
        }
        setLoading(false);
    }, [passedUser]);

    const formatVND = (value: number) =>
        new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(value);

    const calculatePrice = (item: ICartItem) => {
        const variant = item.variant && typeof item.variant !== "string" ? item.variant : null;
        const discountPrice = variant?.discount_price;
        const originalPrice = variant?.price || 0;
        const price = discountPrice && discountPrice < originalPrice ? discountPrice : originalPrice;
        return { price, originalPrice };
    };

    const totalAmount = selectedItems.reduce((sum, item) => {
        const { price } = calculatePrice(item);
        return sum + price * item.quantity;
    }, 0);

    if (loading) return <p>Đang tải...</p>;
    if (selectedItems.length === 0) return <p>Không có sản phẩm nào được chọn.</p>;
    return (
        <div>
            <div className="max-w-6xl mx-auto space-y-6">
                <div className="flex flex-col lg:flex-row bg-[#f8f9ff] rounded-md p-6">
                    <div className="max-w-7xl mx-auto px-4 py-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Danh sách sản phẩm */}
                            <div className="space-y-6">
                                <h2 className="text-lg font-semibold text-gray-800">Đơn hàng của bạn</h2>
                                {selectedItems.map((item, index) => {
                                    const product = typeof item.product === "string" ? null : item.product;
                                    const variant = typeof item.variant === "string" ? null : item.variant;
                                    const { price, originalPrice } = calculatePrice(item);
                                    const image = variant?.image || product?.images?.[0] || "/no-image.png";
                                    const name = product?.name || "Sản phẩm";
                                    const color = variant?.color || "Không rõ";
                                    const size = variant?.size || "Không rõ";

                                    return (
                                        <div key={index} className="flex gap-4 bg-white p-4 rounded-xl border shadow-sm hover:shadow-md">
                                            <img src={image} alt={name} className="w-20 h-20 object-cover rounded-lg border" />
                                            <div className="flex-1 text-sm">
                                                <h3 className="font-medium text-gray-900">{name}</h3>
                                                <p className="text-xs text-gray-500">Màu: {color} | Size: {size}</p>
                                                <p className="text-xs text-gray-500">Số lượng: {item.quantity}</p>
                                                <div className="flex gap-2 pt-1">
                                                    {price < originalPrice && (
                                                        <span className="line-through text-xs text-gray-400">{formatVND(originalPrice)}</span>
                                                    )}
                                                    <span className="text-sm font-semibold text-gray-900">{formatVND(price)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Phiếu thanh toán */}
                            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-md space-y-6">
                                <h2 className="text-lg font-semibold text-gray-800">Tóm tắt đơn hàng</h2>

                                <div className="space-y-3 text-sm text-gray-700">
                                    <div className="flex justify-between">
                                        <span>Tạm tính</span>
                                        <span>{formatVND(totalAmount)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Phí vận chuyển</span>
                                        <span>{formatVND(deliveryCharges)}</span>
                                    </div>

                                </div>

                                <div className="border-t pt-4 flex justify-between font-bold text-gray-900 text-base">
                                    <span>Tổng thanh toán</span>
                                    <span>{formatVND(totalAmount + deliveryCharges)}</span>
                                </div>

                                <button className="w-full mt-2 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition text-sm font-semibold">
                                    Thanh toán
                                </button>-

                                <div className="mt-6 space-y-2"> <span className="text-gray-500 text-sm">Thêm mã khuyến mãi:</span>
                                    <div className="flex items-center gap-2 mt-2">
                                        <input type="text" placeholder="Nhập mã" className="border rounded px-3 py-1 w-44 focus:outline-none focus:ring-2 focus:ring-green-500" />
                                        <button className="bg-green-600 text-white text-[11px] px-2 py-1 rounded-sm hover:bg-green-700 transition">
                                            Áp dụng
                                        </button>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 flex justify-center items-center mt-6 lg:mt-0">
                        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm space-y-3 text-sm text-gray-700">
                            <h2 className="text-lg font-semibold text-gray-800 mb-3">Thông tin người nhận</h2>

                            {userForm ? (
                                <>
                                    <div>
                                        <label className="font-medium block mb-1">Họ tên:</label>
                                        <input
                                            type="text"
                                            value={userForm.full_name}
                                            onChange={(e) =>
                                                setUserForm({ ...userForm, full_name: e.target.value })
                                            }
                                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                                        />
                                    </div>



                                    <div>
                                        <label className="font-medium block mb-1">SĐT:</label>
                                        <input
                                            type="tel"
                                            value={userForm.phone}
                                            onChange={(e) =>
                                                setUserForm({ ...userForm, phone: e.target.value })
                                            }
                                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                                        />
                                    </div>

                                    <div>
                                        <label className="font-medium block mb-1">Địa chỉ:</label>
                                        <input
                                            type="text"
                                            value={userForm.address}
                                            onChange={(e) =>
                                                setUserForm({ ...userForm, address: e.target.value })
                                            }
                                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                                        />
                                    </div>
                                </>
                            ) : (
                                <p className="italic text-gray-400">Đang tải thông tin người dùng...</p>
                            )}
                        </div>
                    </div>


                </div>
                {/* Bottom left section */}
                <div className="max-w-md space-y-4">
                    <div className="bg-[#f8f9ff] rounded-md p-4 text-xs text-gray-700">
                        <h3 className="font-semibold mb-2">
                            Phương thức thanh toán
                        </h3>
                        <p className="mb-1">
                            Vui lòng chọn phương thức thanh toán ưa thích để sử dụng với đơn hàng này.
                        </p>
                        <label className="flex items-center space-x-2 mb-2 cursor-pointer">
                            <input defaultChecked className="w-3 h-3 text-blue-600 border-gray-300 focus:ring-blue-500" name="payment" type="radio" />
                            <span className="text-xs">
                                Tiền mặt khi giao hàng
                            </span>
                        </label>
                        <p className="mb-2">
                            Thêm bình luận về đơn hàng của bạn
                        </p>
                        <textarea className="w-full rounded border border-gray-300 p-2 text-xs resize-none focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Comments" rows={3} defaultValue={""} />
                        <p className="mt-2 text-[10px] text-gray-400">
                            Tôi đã đọc và đồng ý với Điều khoản &amp; Điều kiện.
                        </p>
                    </div>
                    <div className="bg-[#f8f9ff] rounded-md p-4 text-xs text-gray-700">
                        <h3 className="font-semibold mb-2">
                            Payment Method
                        </h3>
                        <div className="flex items-center space-x-3">
                            <img alt="Visa credit card logo" className="h-6 object-contain" height={24} src="https://storage.googleapis.com/a1aa/image/63719734-9fd4-4a47-b853-7f60ecc22e59.jpg" width={40} />
                            <img alt="Mastercard credit card logo" className="h-6 object-contain" height={24} src="https://storage.googleapis.com/a1aa/image/aa799d13-9fec-4cfd-e671-11f16f87cd15.jpg" width={40} />
                            <img alt="Paypal payment logo" className="h-6 object-contain" height={24} src="https://storage.googleapis.com/a1aa/image/d8d82665-6995-4961-fc8e-d118ea9a632e.jpg" width={40} />
                            <img alt="Skil payment logo" className="h-6 object-contain" height={24} src="https://storage.googleapis.com/a1aa/image/a9ebe714-6bc9-467f-d668-7a7aee61d3e7.jpg" width={40} />
                            <img alt="Visa credit card logo" className="h-6 object-contain" height={24} src="https://storage.googleapis.com/a1aa/image/63719734-9fd4-4a47-b853-7f60ecc22e59.jpg" width={40} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-10">
                <div className="text-center mb-6">
                    <h2 className="text-gray-700 font-semibold text-lg">
                        Related
                        <span className="text-green-500">
                            Products
                        </span>
                    </h2>
                    <p className="text-gray-400 text-xs mt-1">
                        Browse The Collection of Top Products
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {/* Product 1 */}
                    <div className="bg-gray-50 p-4">
                        <div className="relative">
                            <img alt="White sneaker with blue sole on white background" className="w-full h-auto" height={100} src="https://storage.googleapis.com/a1aa/image/b7bac6f8-5e86-4a65-2cb8-bd6d3cef099e.jpg" width={260} />
                            <span className="absolute top-2 right-2 bg-red-500 text-white text-[9px] font-semibold px-2 py-0.5 rounded">
                                SALE
                            </span>
                        </div>
                        <p className="text-[9px] text-gray-400 mt-3">
                            Dried Fruits
                        </p>
                        <p className="text-[11px] font-semibold text-gray-700 mt-1">
                            Mixed Nuts Berries Pack
                        </p>
                        <div className="flex items-center space-x-1 mt-1 text-yellow-400 text-[10px]">
                            <i className="fas fa-star">
                            </i>
                            <i className="fas fa-star">
                            </i>
                            <i className="fas fa-star">
                            </i>
                            <i className="fas fa-star-half-alt">
                            </i>
                            <i className="far fa-star">
                            </i>
                        </div>
                        <p className="text-[11px] font-bold text-gray-900 mt-1">
                            $56.00
                            <span className="line-through text-gray-400 font-normal">
                                $45.00
                            </span>
                        </p>
                    </div>
                    {/* Product 2 */}
                    <div className="bg-gray-50 p-4">
                        <div className="relative">
                            <img alt="Black sneaker with yellow swoosh on white background" className="w-full h-auto" height={100} src="https://storage.googleapis.com/a1aa/image/5ca9e2b2-2b8e-4ba2-0efb-ad34068584f3.jpg" width={260} />
                            <span className="absolute top-2 right-2 bg-red-500 text-white text-[9px] font-semibold px-2 py-0.5 rounded">
                                SALE
                            </span>
                        </div>
                        <p className="text-[9px] text-gray-400 mt-3">
                            Cookies
                        </p>
                        <p className="text-[11px] font-semibold text-gray-700 mt-1">
                            Multi Grain Combo Cookies
                        </p>
                        <p className="text-[9px] text-gray-400 mt-0.5">
                            10kg
                        </p>
                        <div className="flex items-center space-x-1 mt-1 text-yellow-400 text-[10px]">
                            <i className="fas fa-star">
                            </i>
                            <i className="fas fa-star">
                            </i>
                            <i className="fas fa-star-half-alt">
                            </i>
                            <i className="far fa-star">
                            </i>
                            <i className="far fa-star">
                            </i>
                        </div>
                        <p className="text-[11px] font-bold text-gray-900 mt-1">
                            $30.00
                            <span className="line-through text-gray-400 font-normal">
                                $25.00
                            </span>
                        </p>
                    </div>
                    {/* Product 3 */}
                    <div className="bg-gray-50 p-4">
                        <div className="relative">
                            <img alt="Black sneaker with blue sole on white background" className="w-full h-auto" height={100} src="https://storage.googleapis.com/a1aa/image/73a4ca68-1dec-4b52-1c6e-232b9c2f85ac.jpg" width={260} />
                        </div>
                        <p className="text-[9px] text-gray-400 mt-3">
                            Foods
                        </p>
                        <p className="text-[11px] font-semibold text-gray-700 mt-1">
                            Fresh Mango Juice Pack
                        </p>
                        <div className="flex items-center space-x-1 mt-1 text-yellow-400 text-[10px]">
                            <i className="fas fa-star">
                            </i>
                            <i className="fas fa-star">
                            </i>
                            <i className="fas fa-star-half-alt">
                            </i>
                            <i className="far fa-star">
                            </i>
                            <i className="far fa-star">
                            </i>
                        </div>
                        <p className="text-[11px] font-bold text-gray-900 mt-1">
                            $65.00
                            <span className="line-through text-gray-400 font-normal">
                                $46.00
                            </span>
                        </p>
                    </div>
                    {/* Product 4 */}
                    <div className="bg-gray-50 p-4">
                        <div className="relative">
                            <img alt="White sneaker with red swoosh on white background" className="w-full h-auto" height={100} src="https://storage.googleapis.com/a1aa/image/ca5edc10-90d8-4906-ecdc-e10b7d0e92fa.jpg" width={260} />
                            <span className="absolute top-2 right-2 bg-red-500 text-white text-[9px] font-semibold px-2 py-0.5 rounded">
                                SALE
                            </span>
                        </div>
                        <p className="text-[9px] text-gray-400 mt-3">
                            Dried Fruits
                        </p>
                        <p className="text-[11px] font-semibold text-gray-700 mt-1">
                            Dates Value Fresh Pouch
                        </p>
                        <div className="flex items-center space-x-1 mt-1 text-yellow-400 text-[10px]">
                            <i className="fas fa-star">
                            </i>
                            <i className="fas fa-star">
                            </i>
                            <i className="fas fa-star-half-alt">
                            </i>
                            <i className="far fa-star">
                            </i>
                            <i className="far fa-star">
                            </i>
                        </div>
                        <p className="text-[11px] font-bold text-gray-900 mt-1">
                            $85.00
                            <span className="line-through text-gray-400 font-normal">
                                $78.00
                            </span>
                        </p>
                    </div>
                    {/* Product 5 */}
                    <div className="bg-gray-50 p-4">
                        <div className="relative">
                            <img alt="White sneaker with red swoosh on white background" className="w-full h-auto" height={100} src="https://storage.googleapis.com/a1aa/image/ca5edc10-90d8-4906-ecdc-e10b7d0e92fa.jpg" width={260} />
                            <span className="absolute top-2 right-2 bg-green-500 text-white text-[9px] font-semibold px-2 py-0.5 rounded">
                                NEW
                            </span>
                        </div>
                        <p className="text-[9px] text-gray-400 mt-3">
                            Foods
                        </p>
                        <p className="text-[11px] font-semibold text-gray-700 mt-1">
                            Stick Fiber Masala Magic
                        </p>
                        <p className="text-[9px] text-gray-400 mt-0.5">
                            2pack
                        </p>
                        <div className="flex items-center space-x-1 mt-1 text-yellow-400 text-[10px]">
                            <i className="fas fa-star">
                            </i>
                            <i className="fas fa-star">
                            </i>
                            <i className="fas fa-star-half-alt">
                            </i>
                            <i className="far fa-star">
                            </i>
                            <i className="far fa-star">
                            </i>
                        </div>
                        <p className="text-[11px] font-bold text-gray-900 mt-1">
                            $50.00
                            <span className="line-through text-gray-400 font-normal">
                                $45.00
                            </span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Checkout;