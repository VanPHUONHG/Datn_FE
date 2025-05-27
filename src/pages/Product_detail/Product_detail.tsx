import type { Category } from "interface/category";
import type { Product } from "interface/product";
import { useEffect, useState } from "react";

function Detail() {

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [categories, setCategories] = useState<Category[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        // Lấy category
        fetch("http://localhost:8888/api/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((err) => console.error(err));

        // Lấy products
        fetch("http://localhost:8888/api/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error(err));
    }, []);
    return (
        <div>
            <div className="max-w-[1200px] mx-auto p-4">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Left Sidebar */}
                    <aside className="flex-shrink-0 w-full md:w-[220px] space-y-6">
                        {/* Category */}
                        <div>
                            <button
                                aria-expanded="true"
                                className="w-full flex justify-between items-center text-[12px] font-semibold text-[#4b4b4b] mb-2"
                            >
                                Category
                                <i className="fas fa-chevron-down text-[10px]"></i>
                            </button>

                            <ul className="space-y-1 text-[11px] text-[#7a7a7a]">
                                {categories.map((cat, index) => (
                                    <li key={cat._id || index} className="flex items-center gap-2">
                                        <input
                                            className="w-3 h-3"
                                            id={`cat${index + 1}`}
                                            name="category"
                                            type="radio"
                                            value={cat._id} // hoặc cat.name tùy id bạn có
                                        />
                                        <label className="cursor-pointer" htmlFor={`cat${index + 1}`}>
                                            {cat.name}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        {/* chưa đổ dữ liệu vào */}

                        {/* Volume */}
                        <div>
                            <button aria-expanded="true" className="w-full flex justify-between items-center text-[12px] font-semibold text-[#4b4b4b] mb-2">
                                Volume
                                <i className="fas fa-chevron-down text-[10px]">
                                </i>
                            </button>
                            <ul className="space-y-1 text-[11px] text-[#7a7a7a]">
                                <li className="flex items-center gap-2">
                                    <input className="w-3 h-3" id="vol100" name="volume" type="radio" />
                                    <label className="cursor-pointer" htmlFor="vol100">
                                        100ml
                                    </label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input className="w-3 h-3" id="vol150" name="volume" type="radio" />
                                    <label className="cursor-pointer" htmlFor="vol150">
                                        150ml
                                    </label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input className="w-3 h-3" id="vol170" name="volume" type="radio" />
                                    <label className="cursor-pointer" htmlFor="vol170">
                                        170ml
                                    </label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input className="w-3 h-3" id="vol200" name="volume" type="radio" />
                                    <label className="cursor-pointer" htmlFor="vol200">
                                        200ml
                                    </label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input className="w-3 h-3" id="vol225" name="volume" type="radio" />
                                    <label className="cursor-pointer" htmlFor="vol225">
                                        225ml
                                    </label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input className="w-3 h-3" id="vol300" name="volume" type="radio" />
                                    <label className="cursor-pointer" htmlFor="vol300">
                                        300ml
                                    </label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input className="w-3 h-3" id="vol500" name="volume" type="radio" />
                                    <label className="cursor-pointer" htmlFor="vol500">
                                        500ml
                                    </label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input className="w-3 h-3" id="vol1l" name="volume" type="radio" />
                                    <label className="cursor-pointer" htmlFor="vol1l">
                                        1l
                                    </label>
                                </li>
                            </ul>
                        </div>
                        {/* Color */}

                        {/* chưa đổ dữ liệu vào */}
                        <div>
                            <button aria-expanded="true" className="w-full flex justify-between items-center text-[12px] font-semibold text-[#4b4b4b] mb-2">
                                Color
                                <i className="fas fa-chevron-down text-[10px]">
                                </i>
                            </button>
                            <div className="flex flex-wrap gap-1">
                                <span className="w-4 h-4 rounded-full bg-[#f9c0c0] cursor-pointer">
                                </span>
                                <span className="w-4 h-4 rounded-full bg-[#f9d0c0] cursor-pointer">
                                </span>
                                <span className="w-4 h-4 rounded-full bg-[#f9e0c0] cursor-pointer">
                                </span>
                                <span className="w-4 h-4 rounded-full bg-[#f9f0c0] cursor-pointer">
                                </span>
                                <span className="w-4 h-4 rounded-full bg-[#d0f9c0] cursor-pointer">
                                </span>
                                <span className="w-4 h-4 rounded-full bg-[#c0f9c0] cursor-pointer">
                                </span>
                                <span className="w-4 h-4 rounded-full bg-[#c0f9d0] cursor-pointer">
                                </span>
                                <span className="w-4 h-4 rounded-full bg-[#c0f9e0] cursor-pointer">
                                </span>
                                <span className="w-4 h-4 rounded-full bg-[#c0f9f9] cursor-pointer">
                                </span>
                                <span className="w-4 h-4 rounded-full bg-[#c0d0f9] cursor-pointer">
                                </span>
                                <span className="w-4 h-4 rounded-full bg-[#c0c0f9] cursor-pointer">
                                </span>
                                <span className="w-4 h-4 rounded-full bg-[#d0c0f9] cursor-pointer">
                                </span>
                                <span className="w-4 h-4 rounded-full bg-[#e0c0f9] cursor-pointer">
                                </span>
                                <span className="w-4 h-4 rounded-full bg-[#f0c0f9] cursor-pointer">
                                </span>
                            </div>
                        </div>
                        {/* Price */}
                        <div>
                            <button aria-expanded="true" className="w-full flex justify-between items-center text-[12px] font-semibold text-[#4b4b4b] mb-2">
                                Price
                                <i className="fas fa-chevron-down text-[10px]">
                                </i>
                            </button>
                            <div className="flex items-center gap-2 text-[11px] text-[#7a7a7a]">
                                <input className="w-14 h-6 border border-[#d1d5db] rounded-sm px-1 text-[11px] text-[#4b4b4b] focus:outline-none" max={250} min={0} placeholder="From" type="number" />
                                <span className="text-[11px]">
                                    -
                                </span>
                                <input className="w-14 h-6 border border-[#d1d5db] rounded-sm px-1 text-[11px] text-[#4b4b4b] focus:outline-none" max={250} min={0} placeholder="To" type="number" />
                            </div>
                        </div>
                        {/* Tags */}
                        <div>
                            <button aria-expanded="true" className="w-full flex justify-between items-center text-[12px] font-semibold text-[#4b4b4b] mb-2">
                                Tags
                                <i className="fas fa-chevron-down text-[10px]">
                                </i>
                            </button>
                            <div className="flex flex-wrap gap-1">
                                <span className="text-[10px] bg-[#3a9d7f] text-white rounded px-2 py-[2px] cursor-pointer">
                                    fruits
                                </span>
                                <span className="text-[10px] bg-[#3a9d7f] text-white rounded px-2 py-[2px] cursor-pointer">
                                    cookies
                                </span>
                                <span className="text-[10px] bg-[#3a9d7f] text-white rounded px-2 py-[2px] cursor-pointer">
                                    foods
                                </span>
                                <span className="text-[10px] bg-[#3a9d7f] text-white rounded px-2 py-[2px] cursor-pointer">
                                    tuber
                                </span>
                                <span className="text-[10px] bg-[#3a9d7f] text-white rounded px-2 py-[2px] cursor-pointer">
                                    vegetables
                                </span>
                                <span className="text-[10px] bg-[#3a9d7f] text-white rounded px-2 py-[2px] cursor-pointer">
                                    snacks
                                </span>
                                <span className="text-[10px] bg-[#3a9d7f] text-white rounded px-2 py-[2px] cursor-pointer">
                                    clothes
                                </span>
                                <span className="text-[10px] bg-[#3a9d7f] text-white rounded px-2 py-[2px] cursor-pointer">
                                    jewellery
                                </span>
                            </div>
                        </div>
                    </aside>
                    {/* Main Content */}
                    <main className="flex-1 flex flex-col gap-4">
                        {/* Product Images and Thumbnails */}
                        <section className="flex flex-col md:flex-row gap-4">
                            <div className="flex flex-col gap-2 w-full md:w-[400px]">
                                <div className="border border-[#e5e7eb] rounded-md p-6 bg-white flex justify-center items-center">
                                    <img
                                        alt={selectedProduct?.name}
                                        className="max-w-full max-h-[150px] object-contain"
                                        height={150}
                                        src={selectedProduct?.image_url}
                                    />

                                    {/* <img alt="White sneaker with blue swoosh side view on white background" className="max-w-full max-h-[150px] object-contain" height={150} src="https://storage.googleapis.com/a1aa/image/fd3e9e6d-0993-442a-85cb-8925b27065f9.jpg" width={400} /> */}
                                </div>
                                <div className="flex gap-2 border border-[#e5e7eb] rounded-md p-2 bg-white overflow-x-auto scrollbar-hide">
                                    {products.map((product) => (
                                        <img
                                            key={product._id}
                                            alt={product.name}
                                            className={`w-[70px] h-[70px] object-contain cursor-pointer border ${selectedProduct?._id === product._id ? 'border-[#3a9d7f]' : 'border-transparent'} hover:border-[#3a9d7f]`}
                                            height={70}
                                            width={70}
                                            src={product.image_url}
                                            onClick={() => setSelectedProduct(product)}
                                        />
                                    ))}

                                </div>
                            </div>
                            {/* Product Info */}
                            <div className="flex-1 flex flex-col gap-3">

                                <h2 className="text-[14px] font-normal leading-tight">
                                    {selectedProduct?.name || "Chọn sản phẩm để xem chi tiết"}
                                </h2>

                                <div className="flex items-center gap-2 text-[11px] text-[#f59e0b]">
                                    <i className="fas fa-star">
                                    </i>
                                    <i className="fas fa-star">
                                    </i>
                                    <i className="fas fa-star">
                                    </i>
                                    <i className="fas fa-star">
                                    </i>
                                    <i className="fas fa-star-half-alt">
                                    </i>
                                    <span className="text-[#7a7a7a] text-[10px] font-normal">
                                        592 Ratings
                                    </span>
                                </div>
                                <div className="flex items-center gap-6 text-[14px] font-semibold text-[#111827]">
                                    <span>{selectedProduct ? `$${selectedProduct.price}` : ''}</span>
                                </div>

                                <p className="text-[11px] text-[#7a7a7a] font-normal leading-snug max-w-[480px]">
                                    {selectedProduct?.description}
                                </p>

                                {/* <div className="flex items-center gap-6 text-[10px] text-[#7a7a7a] font-normal">
                                    <span>
                                        M.R.P. : $2,989.00
                                    </span>
                                </div>
                                <p className="text-[11px] text-[#7a7a7a] font-normal leading-snug max-w-[480px]">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s.
                                </p>
                                <ul className="list-disc list-inside text-[11px] text-[#7a7a7a] font-normal max-w-[480px] space-y-0.5">
                                    <li>
                                        Closure : Hook &amp; Loop
                                    </li>
                                    <li>
                                        Sole : Polyvinyl Chloride
                                    </li>
                                    <li>
                                        Width : Medium
                                    </li>
                                    <li>
                                        Outer Material : A-Grade Standard Quality
                                    </li>
                                </ul> */}
                                {/* Volume Options */}
                                <div className="flex items-center gap-2 text-[10px] font-semibold">
                                    <span className="bg-[#d1fae5] text-[#22c55e] rounded px-2 py-[2px] cursor-pointer">
                                        150ml
                                    </span>
                                    <span className="cursor-pointer">
                                        200ml
                                    </span>
                                    <span className="cursor-pointer">
                                        220ml
                                    </span>
                                    <span className="cursor-pointer">
                                        300ml
                                    </span>
                                </div>
                                {/* Quantity and Add to Cart */}
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center border border-[#d1d5db] rounded text-[12px]">
                                        <button aria-label="Decrease quantity" className="px-3 py-1 text-[#4b4b4b] hover:bg-[#e5e7eb] transition">
                                            -
                                        </button>
                                        <input className="w-10 text-center border-x border-[#d1d5db] focus:outline-none" readOnly type="text" defaultValue={1} />
                                        <button aria-label="Increase quantity" className="px-3 py-1 text-[#4b4b4b] hover:bg-[#e5e7eb] transition">
                                            +
                                        </button>
                                    </div>
                                    <button className="bg-[#334e4e] text-white text-[11px] font-semibold px-4 py-2 rounded hover:bg-[#2a3d3d] transition">
                                        ADD TO CART
                                    </button>
                                    <button aria-label="Add to wishlist" className="text-[#4b4b4b] text-[14px] hover:text-[#334e4e] transition">
                                        <i className="far fa-heart">
                                        </i>
                                    </button>
                                    <button aria-label="Add to compare" className="text-[#4b4b4b] text-[14px] hover:text-[#334e4e] transition">
                                        <i className="fas fa-random">
                                        </i>
                                    </button>
                                </div>
                            </div>
                        </section>
                        {/* Related Products */}
                        <section className="flex flex-col md:flex-row gap-4 flex-wrap">
                            {products.slice(0, 2).map((product) => (
                                <div
                                    key={product._id}
                                    className="flex items-center gap-3 bg-white border border-[#e5e7eb] rounded-md p-3 w-full md:w-1/3"
                                >
                                    <img
                                        alt={product.name}
                                        className="w-[70px] h-[50px] object-contain"
                                        height={50}
                                        src={product.image_url}
                                        width={70}


                                    />

                                    {/* {!product.is_available && (
                                    <span className="absolute top-2 right-2 bg-gray-600 text-white text-[9px] font-semibold px-2 py-0.5 rounded">
                                        Hết hàng
                                    </span>
                                )} */}
                                    <div className="flex flex-col text-[11px] text-[#4b4b4b]">
                                        <span>{product.name}</span>
                                        <div className="flex items-center gap-1 text-[#f59e0b]">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                        </div>
                                        <span className="text-[#22c55e] font-semibold">${product.price}$</span>
                                    </div>
                                </div>
                            ))}
                        </section>

                        {/* Tabs */}
                        <section className="flex flex-wrap gap-2 border-b border-[#e5e7eb] pb-2 text-[11px] text-[#4b4b4b] font-normal">
                            <button aria-selected="true" className="bg-[#3a9d7f] text-white rounded px-3 py-1">
                                Detail
                            </button>
                            <button className="border border-[#d1d5db] rounded px-3 py-1">
                                Specifications
                            </button>
                            <button className="border border-[#d1d5db] rounded px-3 py-1">
                                Vendor
                            </button>
                            <button className="border border-[#d1d5db] rounded px-3 py-1">
                                Reviews
                            </button>
                        </section>
                        {/* Product Description */}
                        {selectedProduct && (
                            <section className="border border-[#3a9d7f] rounded p-4 text-[11px] text-[#4b4b4b] font-normal leading-snug max-w-full">
                                <p className="font-semibold mb-1">Mô Tả Sản Phẩm</p>
                                <p>{selectedProduct.description}</p>
                            </section>
                        )}

                    </main>
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
                    {products.map((product) => (
                        <div key={product._id} className="bg-gray-50 p-4">
                            <div className="relative">
                                <img
                                    alt={product.name}
                                    className="w-full h-auto"
                                    src={product.image_url}
                                    width={260}
                                    height={100}
                                />
                                {!product.is_available && (
                                    <span className="absolute top-2 right-2 bg-gray-600 text-white text-[9px] font-semibold px-2 py-0.5 rounded">
                                        Hết hàng
                                    </span>
                                )}
                            </div>

                            <p className="text-[11px] font-semibold text-gray-700 mt-2">{product.name}</p>

                            {/* kiểm tra hàng còn trong kho kg */}
                            {/* <p className="text-[9px] text-gray-400 mt-1">Kho: {product.stock_quantity}</p> */}

                            <p className="text-[11px] font-bold text-gray-900 mt-1">
                                {product.price.toLocaleString()}₫
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>



    )
}
export default Detail;