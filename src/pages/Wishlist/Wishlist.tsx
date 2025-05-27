function Wishlist() {
    return (
        <div>
            <div className="max-w-7xl mx-auto border border-blue-300 p-6 mt-6 mb-6">
                <header className="text-center mb-6">
                    <h1 className="text-gray-700 text-lg font-normal">
                        Product
                        <span className="text-green-400 font-normal">
                            Wishlist
                        </span>
                    </h1>
                    <p className="text-xs text-gray-400 mt-1">
                        Your product wish is our first priority.
                    </p>
                </header>
                <section>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xs text-gray-500 font-semibold tracking-wide">
                            WISHLIST
                        </h2>
                        <button className="bg-green-400 text-white text-xs px-3 py-1 rounded-sm hover:bg-green-500 transition" type="button">
                            Shop Now
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-xs text-left border-collapse border border-transparent">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="py-2 pr-6 font-normal text-gray-500">
                                        ID
                                    </th>
                                    <th className="py-2 pr-6 font-normal text-gray-500">
                                        Image
                                    </th>
                                    <th className="py-2 pr-6 font-normal text-gray-500">
                                        Name
                                    </th>
                                    <th className="py-2 pr-6 font-normal text-gray-500">
                                        Date
                                    </th>
                                    <th className="py-2 pr-6 font-normal text-gray-500">
                                        Price
                                    </th>
                                    <th className="py-2 pr-6 font-normal text-gray-500">
                                        Status
                                    </th>
                                    <th className="py-2 font-normal text-gray-500">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-100">
                                    <td className="py-2 pr-6 font-normal text-gray-600">
                                        1
                                    </td>
                                    <td className="py-2 pr-6">
                                        <img alt="Small boat on water, product image" className="inline-block" height={20} src="https://storage.googleapis.com/a1aa/image/95fe7a82-035a-4cc4-5c6e-00472d275e9a.jpg" width={40} />
                                    </td>
                                    <td className="py-2 pr-6 font-normal text-gray-600">
                                        Sunsile
                                    </td>
                                    <td className="py-2 pr-6 font-normal text-gray-600">
                                        01/05/2025
                                    </td>
                                    <td className="py-2 pr-6 font-normal text-gray-600">
                                        $70
                                    </td>
                                    <td className="py-2 pr-6 text-green-400 font-normal">
                                        Còn hàng
                                    </td>
                                    <td className="py-2 flex space-x-2">
                                        <button aria-label="Edit product 1" className="bg-green-400 text-white p-1 rounded text-xs flex items-center justify-center">
                                            <i className="fas fa-edit">
                                            </i>
                                        </button>
                                        <button aria-label="Delete product 1" className="bg-gray-700 text-white p-1 rounded text-xs flex items-center justify-center">
                                            <i className="fas fa-times">
                                            </i>
                                        </button>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="py-2 pr-6 font-normal text-gray-600">
                                        2
                                    </td>
                                    <td className="py-2 pr-6">
                                        <img alt="Another small boat on water, product image" className="inline-block" height={20} src="https://storage.googleapis.com/a1aa/image/5472ab9f-f04e-4ee6-6054-b11e7345e6df.jpg" width={40} />
                                    </td>
                                    <td className="py-2 pr-6 font-normal text-gray-600">
                                        Dầu gội dưỡng ẩm
                                    </td>
                                    <td className="py-2 pr-6 font-normal text-gray-600">
                                        02/05/2025
                                    </td>
                                    <td className="py-2 pr-6 font-normal text-gray-600">
                                        $80
                                    </td>
                                    <td className="py-2 pr-6 text-red-400 font-normal">
                                        Hết hàng
                                    </td>
                                    <td className="py-2 flex space-x-2">
                                        <button aria-label="Edit product 2" className="bg-green-400 text-white p-1 rounded text-xs flex items-center justify-center">
                                            <i className="fas fa-edit">
                                            </i>
                                        </button>
                                        <button aria-label="Delete product 2" className="bg-gray-700 text-white p-1 rounded text-xs flex items-center justify-center">
                                            <i className="fas fa-times">
                                            </i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-2 pr-6 font-normal text-gray-600">
                                        3
                                    </td>
                                    <td className="py-2 pr-6">
                                        <img alt="Red shoes product image" className="inline-block" height={20} src="https://storage.googleapis.com/a1aa/image/c64cbe64-4c13-4f54-8566-8cf5a820b828.jpg" width={40} />
                                    </td>
                                    <td className="py-2 pr-6 font-normal text-gray-600">
                                        Dược liệu nguyên xuân
                                    </td>
                                    <td className="py-2 pr-6 font-normal text-gray-600">
                                        03/05/2025
                                    </td>
                                    <td className="py-2 pr-6 font-normal text-gray-600">
                                        $12
                                    </td>
                                    <td className="py-2 pr-6 text-green-400 font-normal">
                                        Còn hàng
                                    </td>
                                    <td className="py-2 flex space-x-2">
                                        <button aria-label="Edit product 3" className="bg-green-400 text-white p-1 rounded text-xs flex items-center justify-center">
                                            <i className="fas fa-edit">
                                            </i>
                                        </button>
                                        <button aria-label="Delete product 3" className="bg-gray-700 text-white p-1 rounded text-xs flex items-center justify-center">
                                            <i className="fas fa-times">
                                            </i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
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
export default Wishlist;