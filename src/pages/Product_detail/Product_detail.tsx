import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import type { Product } from "types/product";
import { getAllProducts } from "services/product/product.service";
import type { IProductVariant } from "types/productVariant";
import { getAllVariantsByProductId } from "services/productVariant/productVariant.service";
import { toast } from "react-toastify";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [data, setData] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [variants, setVariants] = useState<IProductVariant[]>([]);
  const navigate = useNavigate()
const [selectedVariant, setSelectedVariant] = useState<IProductVariant | null>(null);

  useEffect(() => {
    const fetchVariants = async () => {
      if (!id) return;
      try {
        const data = await getAllVariantsByProductId(id);
        setVariants(data);
      } catch (error) {
        console.error("Lỗi khi lấy biến thể:", error);
      }
    };

    fetchVariants();
  }, [id]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:8888/api/products/${id}`);
        setProduct(res.data);
        setCurrentImage(res.data.images[0]);
        setQuantity(1);
      } catch (error) {
        console.error("Lỗi khi lấy chi tiết sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllProducts();
        setData(result.slice(0, 4));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center py-10">Đang tải dữ liệu...</p>;
  if (!product) return <p className="text-center py-10">Không tìm thấy sản phẩm</p>;

  const handleIncrease = () => {
    if (quantity < product.stock_quantity) setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

 const handleAddToCart = () => {
   if (!selectedVariant) {
    toast.error("Vui lòng chọn size trước khi thêm vào giỏ hàng!", {
    icon: <FaExclamationCircle  color="white" />,
    });
    return;
  }
   // Kiểm tra token (đã đăng nhập chưa)
  const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

  if (!token || !user) {
    toast.error("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!", {
      icon: <FaExclamationCircle color="white" />,
    });
      setTimeout(() => {
      navigate("/login");
    }, 5000);

    return;
  }

  // TODO: xử lý thêm vào giỏ hàng thực sự
  toast.success("Sản phẩm đã được thêm vào giỏ hàng!", {
  icon: <FaCheckCircle color="green" />,
  });
};


  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section */}
    <div className="relative p-4 rounded-2xl overflow-hidden animate-border">
  {/* Lớp gradient chạy viền */}
  <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-white to-gray-400 animate-gradient bg-[length:300%_300%] z-0"></div>

  {/* Nội dung với nền trắng */}
  <div className="relative bg-white rounded-2xl p-5 z-10">
    {/* Ảnh chính */}
    <div className="w-full h-[400px] flex items-center justify-center bg-white rounded-lg mb-4 shadow-inner">
      <img
        src={currentImage}
        alt={product.name}
        className="max-h-full  object-contain"
      />
    </div>

    {/* Ảnh con */}
    {product.images.length > 1 && (
      <div className="flex gap-4 justify-center">
        {product.images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(img)}
            className={`w-20 h-20 p-1 rounded-md border flex items-center justify-center transition ${
              currentImage === img
                ? "ring-2 ring-green-600"
                : "border-gray-300 hover:border-green-400"
            }`}
          >
            <img src={img} alt={`Ảnh ${idx + 1}`} className="object-contain w-full h-full" />
          </button>
        ))}
      </div>
    )}
  </div>
</div>


        {/* Details Section */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">{product.name}</h1>

            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="text-3xl font-bold text-green-600">
                {product.discount_price.toLocaleString()}₫
              </span>
              <span className="text-base text-gray-400 line-through">
                {product.price.toLocaleString()}₫
              </span>
              <span className="text-sm text-red-600 font-medium">
                -{Math.round(((product.price - product.discount_price) / product.price) * 100)}%
              </span>
            </div>

            <div className="text-sm mb-2 text-gray-700">
              Tình trạng: <span className={product.stock_quantity > 0 ? "text-green-600" : "text-red-600"}>{product.stock_quantity > 0 ? "Còn hàng" : "Hết hàng"}</span>
            </div>
   {selectedVariant && (
  <div className="mt-4 text-sm text-gray-700">
    <p>
      <strong>Số lượng còn:</strong> {selectedVariant.stock_quantity}
    </p>
    <p>
      <strong>Mã SKU:</strong> {selectedVariant.sku}
    </p>
  </div>
)}
            {/* Size Selection */}
            {variants.length > 0 && (
              <div className="flex items-center gap-2 mb-4 mt-6">
                <span className="text-sm text-gray-700">Kích cỡ:</span>
                <div className="flex gap-2 flex-wrap">
              {variants.map((variant) => (
  <button
    key={variant._id}
    onClick={() => setSelectedVariant(variant)}
    className={`px-3 py-1 text-sm border rounded ${
      selectedVariant?._id === variant._id
        ? "bg-green-600 text-white border-green-600"
        : "bg-white text-gray-700 border-gray-300 hover:border-green-500"
    }`}
  >
    {variant.size}
  </button>
))}


                </div>
             

              </div>
            )}

            <p className="text-sm text-gray-500 mb-4 leading-relaxed">{product.description}</p>

            <ul className="text-sm text-gray-600 mb-6 list-disc list-inside">
              <li><strong>Xuất xứ:</strong> {product.origin}</li>
              <li><strong>Mã sản phẩm:</strong> {product._id}</li>
            </ul>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-3">
              <button onClick={handleDecrease} className="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400">-</button>
              <span className="px-4 py-1 border rounded text-sm">{quantity}</span>
              <button onClick={handleIncrease} className="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400">+</button>
<button
  onClick={handleAddToCart}
  className="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-700 text-sm"
>
  Thêm vào giỏ
</button>
              <button className="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-700 text-sm">Mua ngay</button>

            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Có thể bạn cũng thích</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {data?.map((item) => (
            <Link to={`/product/${item._id}`} key={item._id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition hover:scale-105">
              <img
                src={item.images?.[0]}
                alt={item.name}
                className="w-full h-40 object-contain mb-3"
              />
              <h3 className="font-semibold text-base text-gray-800 mb-1">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.origin}</p>
              <div className="flex gap-2 items-center mt-2">
                <span className="text-red-600 font-bold">{item.discount_price.toLocaleString()}₫</span>
                <span className="text-sm text-gray-400 line-through">{item.price.toLocaleString()}₫</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;