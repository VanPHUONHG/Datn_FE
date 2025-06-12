import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import type { Product } from "types/product";
import { getAllProducts } from "services/product/product.service";
import type { IProductVariant } from "types/productVariant";
import { getAllVariantsByProductId } from "services/productVariant/productVariant.service";
import { toast } from "react-toastify";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { addToCart, type CartPayload } from "services/cart/cart.service";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [variants, setVariants] = useState<IProductVariant[]>([]);
  const [selectedVariant, setSelectedVariant] = useState<IProductVariant | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [currentImage, setCurrentImage] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
const [variantImages, setVariantImages] = useState<string[]>([]);
const [previewVariant, setPreviewVariant] = useState<IProductVariant | null>(null);
const displayedVariant = selectedVariant || previewVariant;

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        setLoading(true);
        // ✅ Reset các state liên quan đến sản phẩm cũ
      setSelectedVariant(null);
      setSelectedColor("");
      setVariantImages([]);
      setQuantity(1);
setPreviewVariant(null);
        const res = await axios.get(`http://localhost:8888/api/products/${id}`);
        setProduct(res.data);
        setCurrentImage(res.data.images?.[0] || "");
      } catch (error) {
        console.error("Lỗi khi lấy chi tiết sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchVariants = async () => {
      try {
        if (id) {
          const data = await getAllVariantsByProductId(id);
          setVariants(data);
        }
      } catch (error) {
        console.error("Lỗi khi lấy biến thể:", error);
      }
    };

    fetchProductDetail();
    fetchVariants();
  }, [id]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const result = await getAllProducts();
        setRelatedProducts(result.slice(0, 4));
      } catch (error) {
        console.error("Lỗi khi lấy danh sách sản phẩm:", error);
      }
    };

    fetchRelatedProducts();
  }, []);

  const handleIncrease = () => {
    if (quantity < (selectedVariant?.stock_quantity || product?.stock_quantity || 1)) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

const handleAddToCart = async () => {
  if (!selectedVariant) {
    toast.error("Vui lòng chọn size trước khi thêm vào giỏ hàng!", {
      icon: <FaExclamationCircle color="white" />,
    });
    return;
  }

  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  if (!token || !user) {
    toast.error("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!", {
      icon: <FaExclamationCircle color="white" />,
    });
    setTimeout(() => navigate("/login"), 3000);
    return;
  }

  try {
    const payload: CartPayload = {
      product_id: product!._id,
      variant_id: selectedVariant._id,
      quantity,
    };

    await addToCart(payload); 

    toast.success("Sản phẩm đã được thêm vào giỏ hàng!", {
      icon: <FaCheckCircle color="green" />,
    });
  } catch (error) {
    console.error("Lỗi khi thêm vào giỏ hàng:", error);
    toast.error("Có lỗi xảy ra khi thêm vào giỏ hàng!", {
      icon: <FaExclamationCircle color="white" />,
    });
  }
};

  if (loading) return <p className="text-center py-10">Đang tải dữ liệu...</p>;
  if (!product) return <p className="text-center py-10">Không tìm thấy sản phẩm</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="relative p-4 rounded-2xl overflow-hidden animate-border">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-white to-gray-400 animate-gradient bg-[length:300%_300%] z-0"></div>
          <div className="relative bg-white rounded-2xl p-5 z-10">
            <div className="w-full h-[400px] flex items-center justify-center bg-white rounded-lg mb-4 shadow-inner">
              <img src={currentImage} alt={product.name} className="max-h-full object-contain" />
            </div>
          {variantImages.length > 1 && (
  <div className="flex gap-4 justify-center mt-4">
    {variantImages.map((img, idx) => (

      <button
        key={idx}
        onClick={() => setCurrentImage(img)}
        className={`w-20 h-20 p-1 rounded-md border flex items-center justify-center transition ${
          currentImage === img ? "ring-2 ring-green-600" : "border-gray-300 hover:border-green-400"
        }`}
      >
        <img src={img} alt={`Ảnh ${idx + 1}`} className="object-contain w-full h-full" />
      </button>
    ))}
  </div>
)}

          </div>
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">{product.name}</h1>

           <div className="flex items-center gap-4 mb-4 flex-wrap">
 <span className="text-3xl font-bold text-green-600">
  {(displayedVariant?.discount_price ?? displayedVariant?.price ?? product.discount_price).toLocaleString()}₫
</span>

{(displayedVariant?.discount_price || product.discount_price) && (
  <span className="text-base text-gray-400 line-through">
    {(displayedVariant?.price ?? product.price).toLocaleString()}₫
  </span>
)}

{displayedVariant?.price && displayedVariant?.discount_price && (
  <span className="text-sm text-red-600 font-medium">
    -{Math.round(((displayedVariant.price - displayedVariant.discount_price) / displayedVariant.price) * 100)}%
  </span>
)}
</div>

            {/* <div className="text-sm text-gray-700 mb-2">
              Tình trạng: <span className={product.stock_quantity > 0 ? "text-green-600" : "text-red-600"}>{product.stock_quantity > 0 ? "Còn hàng" : "Hết hàng"}</span>
            </div> */}

            <div className="text-sm text-gray-700 mb-2">Thương hiệu: {product.brand}</div>

            {displayedVariant  && (
              <div className="mt-4 text-sm text-gray-700">
                <p><strong>Số lượng:</strong> {displayedVariant .stock_quantity}</p>
                <p><strong>Mã SKU:</strong> {displayedVariant .sku}</p>
                   <p><strong>Màu sắc:</strong> {displayedVariant .color}</p>
              </div>
            )}

    <div className="flex gap-2 flex-wrap mt-1">
{[...new Map(variants.map(v => [v.color, v])).values()]
  .filter(variant => !!variant.image) 
  .map((variant) => (
    <button
      key={variant._id || `${variant.color}-${variant.image}`}
      onClick={() => {
        const sameColorVariants = variants.filter(v => v.color === variant.color);
        const allImages = sameColorVariants.flatMap(v => v.images?.length ? v.images : [v.image]);
        const uniqueImages = Array.from(new Set(allImages.filter(img => !!img)));
        setVariantImages(uniqueImages);
        setSelectedColor(variant.color);
        setCurrentImage(uniqueImages[0]);

         setPreviewVariant(sameColorVariants[0]);

    setSelectedVariant(null);

      }}
      className={`border rounded p-1 ${
        selectedVariant?.color === variant.color
          ? "border-green-600"
          : "border-gray-300 hover:border-green-400"
      }`}
    >
      <img src={variant.image} alt={variant.color} className="w-10 h-10 object-cover rounded" />
    </button>
))}

</div>



            {/* Chọn size */}
            {selectedColor && (
              <div className="mb-4">
                <span className="text-sm text-gray-700">Kích cỡ:</span>
                <div className="flex gap-2 flex-wrap mt-1">
                  {variants.filter(v => v.color === selectedColor).sort((a, b) => Number(a.size) - Number(b.size)).map((variant) => (
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

            {/* Số lượng + Thêm giỏ */}
            <div className="flex items-center gap-3">
              <button onClick={handleDecrease} className="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400">-</button>
              <span className="px-4 py-1 border rounded text-sm">{quantity}</span>
              <button onClick={handleIncrease} className="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400">+</button>
              <button onClick={handleAddToCart} className="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-700 text-sm">Thêm vào giỏ</button>
              <button className="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-700 text-sm">Mua ngay</button>
            </div>
          </div>
        </div>
      </div>

      {/* Sản phẩm liên quan */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Có thể bạn cũng thích</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
            <Link to={`/product/${item._id}`} key={item._id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition hover:scale-105">
              <img src={item.images?.[0]} alt={item.name} className="w-full h-40 object-contain mb-3" />
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