function Checkout() {
    return (
        <div>
            <div className="max-w-6xl mx-auto space-y-6">
                <div className="flex flex-col lg:flex-row bg-[#f8f9ff] rounded-md p-6">
                    {/* Left side: Payment summary */}
                    <div className="lg:w-1/2 space-y-4">
                        <div>
                            <h2 className="text-sm font-normal text-gray-700 mb-3">
                                Phiếu thanh toán
                            </h2>
                            <div className="text-xs text-gray-600 space-y-1">
                                <div className="flex justify-between">
                                    <span>
                                        Tổng phụ
                                    </span>
                                    <span>
                                        $182.00
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>
                                        Phí giao hàng
                                    </span>
                                    <span>
                                        $32.40
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>
                                        Phiếu giảm giá
                                    </span>
                                    <span className="text-[#3cb371] italic cursor-pointer">
                                        Apply Discount
                                    </span>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-between font-semibold text-gray-900 text-sm">
                                <span>
                                    Tổng số tiền
                                </span>
                                <span>
                                    $194.40
                                </span>
                            </div>
                        </div>
                        {/* Products list */}
                        <div className="space-y-4 mt-4">
                            {/* Product 1 */}
                            <div className="flex items-center space-x-3">
                                <img alt="Black and white women's wallet hand purse shoes side view" className="w-12 h-12 object-contain" height={48} src="https://storage.googleapis.com/a1aa/image/e320ab34-cd94-4b7d-c3bd-fefefe9ba3c2.jpg" width={48} />
                                <div className="text-xs text-gray-700">
                                    <div>
                                        Women's Wallet hand Purse
                                    </div>
                                    <div>
                                        <span className="line-through text-gray-400">
                                            $50.00
                                        </span>
                                        <span className="ml-1 font-semibold text-gray-900">
                                            $70.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* Product 2 */}
                            <div className="flex items-center space-x-3">
                                <img alt="Blue rose gold earring jewelry side view" className="w-12 h-12 object-contain" height={48} src="https://storage.googleapis.com/a1aa/image/884c1ae5-7481-42dd-b08b-4642a084911b.jpg" width={48} />
                                <div className="text-xs text-gray-700">
                                    <div>
                                        Rose Gold Earring
                                    </div>
                                    <div>
                                        <span className="line-through text-gray-400">
                                            $90.00
                                        </span>
                                        <span className="ml-1 font-semibold text-gray-900">
                                            $80.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* Product 3 */}
                            <div className="flex items-center space-x-3">
                                <img alt="Blue sneakers shoes side view" className="w-12 h-12 object-contain" height={48} src="https://storage.googleapis.com/a1aa/image/fd1dd58c-14db-4dfb-f8ba-9d5f1509b92b.jpg" width={48} />
                                <div className="text-xs text-gray-700">
                                    <div>
                                        <span className="text-yellow-500">
                                            ★★★★★
                                        </span>
                                    </div>
                                    <div>
                                        <span className="line-through text-gray-400">
                                            $10.00
                                        </span>
                                        <span className="ml-1 font-semibold text-gray-900">
                                            $12.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right side: Personal info placeholder */}
                    <div className="lg:w-1/2 flex justify-center items-center mt-6 lg:mt-0">
                        <img alt="Placeholder block representing personal information form with lines and a box" className="rounded-lg" height={160} src="https://storage.googleapis.com/a1aa/image/ff53359c-bb89-41f9-deef-b4e06310bc02.jpg" width={320} />
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