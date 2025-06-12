import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaExclamationCircle } from "react-icons/fa";
import type { ICart, ICartItem } from "types/cart";
import { getCart, removeFromCart, updateCartItem } from "services/cart/cart.service";
import type { Product } from "types/product";
import type { IProductVariant } from "types/productVariant";

const Cart = () => {
  const [cart, setCart] = useState<ICart | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const formatVND = (value: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  useEffect(() => {
    const fetchCart = async () => {
      try {
        setLoading(true);
        const response = await getCart();
        console.log("Cart data:", response);

        const cartData: ICart = {
          items: response.data.products,
          totalPrice: response.data.totalPrice,
        };

        setCart(cartData);
      } catch (err) {
        setError("Không thể tải giỏ hàng. Vui lòng thử lại sau.");
        toast.error("Lỗi khi tải giỏ hàng!", {
          icon: <FaExclamationCircle color="white" />,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const handleUpdateQuantity = async (item: ICartItem, newQuantity: number) => {
    if (newQuantity < 1) return;
    try {
      const payload = {
        product_id: typeof item.product === "string" ? item.product : item.product._id,
        variant_id: item.variant ? (typeof item.variant === "string" ? item.variant : item.variant._id) : undefined,
        quantity: newQuantity,
      };
      const updatedCart = await updateCartItem(payload);
      setCart(updatedCart);
    } catch (err) {
      toast.error("Lỗi khi cập nhật số lượng!", {
        icon: <FaExclamationCircle color="white" />,
      });
    }
  };

  const handleRemoveItem = async (item: ICartItem) => {
    try {
      const payload = {
        product_id: typeof item.product === "string" ? item.product : item.product._id,
        variant_id: item.variant ? (typeof item.variant === "string" ? item.variant : item.variant._id) : undefined,
      };
      const updatedCart = await removeFromCart(payload);
      setCart(updatedCart);
      toast.success("Đã xóa sản phẩm khỏi giỏ hàng!");
    } catch (err) {
      toast.error("Lỗi khi xóa sản phẩm!", {
        icon: <FaExclamationCircle color="white" />,
      });
    }
  };

  const calculateSummary = () => {
    const items = cart?.items;
    if (!items || !Array.isArray(items) || items.length === 0) {
      return { totalItems: 0, totalAmount: 0 };
    }

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = items.reduce((sum, item) => {
      const product = typeof item.product === "string" ? null : item.product;
      const variant = item.variant && typeof item.variant !== "string" ? item.variant : null;
      const price = variant?.discount_price || variant?.price || product?.discount_price || product?.price || 0;
      return sum + price * item.quantity;
    }, 0);

    return { totalItems, totalAmount };
  };

  const deliveryCharges = 32410; // giá trị 32.41 USD chuyển sang VND giả định
  const { totalItems, totalAmount } = calculateSummary();
  const totalWithDelivery = totalAmount + deliveryCharges;

  if (loading) return <p className="text-center py-10">Đang tải giỏ hàng...</p>;
  if (error) return <p className="text-center py-10 text-red-600">{error}</p>;
  if (!cart || !cart.items || cart.items.length === 0) {
    return <p className="text-center py-10">Giỏ hàng của bạn đang trống</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      <nav aria-label="Breadcrumb" className="text-xs text-gray-500 mb-6">
        <ol className="flex space-x-1 list-none">
          <li>
            <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          </li>
          <li>/</li>
          <li className="font-semibold text-gray-900">Cart</li>
        </ol>
      </nav>

      <h1 className="text-xs text-gray-500 mb-6">Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Summary */}
        <aside className="w-full lg:w-1/4 bg-white border border-gray-200 rounded-md p-5 shadow-sm text-sm text-gray-700">
          <h2 className="font-semibold text-lg text-gray-900 mb-4">Summary</h2>
          <div className="space-y-2 border-b pb-3">
            <div className="flex justify-between">
              <span>Items</span>
              <span>{totalItems}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span>{formatVND(deliveryCharges)}</span>
            </div>
          </div>
          <div className="flex justify-between font-semibold text-gray-900 pt-3">
            <span>Total</span>
            <span>{formatVND(totalWithDelivery)}</span>
          </div>
        </aside>

        {/* Cart Table */}
        <section className="flex-1">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-700 border border-gray-200 shadow-sm rounded-md overflow-hidden">
              <thead className="bg-gray-100">
                <tr className="text-left">
                  <th className="p-3">Product</th>
                  <th className="p-3">Price</th>
                  <th className="p-3 text-center">Quantity</th>
                  <th className="p-3">Total</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.items.map((item, index) => {
                  const product = typeof item.product === "string" ? null : item.product;
                  const variant = item.variant && typeof item.variant !== "string" ? item.variant : null;
                  const price = variant?.discount_price || variant?.price || product?.discount_price || product?.price || 0;
                  const image = variant?.image || (Array.isArray(product?.images) && product.images.length > 0 ? product.images[0] : "/no-image.png");
                  const name = product?.name || "Sản phẩm không xác định";
                  const size = variant?.size || "Chưa chọn size";
                  const color = variant?.color || "Chưa chọn màu";
                  const variantDetails = `(${size}, ${color})`;

                  return (
                    <tr key={`${product?._id || index}-${variant?._id || ""}`} className="border-b last:border-none">
                      <td className="p-3 flex items-center gap-3">
                        <img src={image} alt={name} className="w-16 h-16 object-cover rounded-md border" />
                        <div>
                          <p className="font-medium text-gray-900">{name}</p>
                          <p className="text-xs text-gray-500">{variantDetails}</p>
                        </div>
                      </td>
                      <td className="p-3">{formatVND(price)}</td>
                      <td className="p-3 text-center">
                        <div className="inline-flex items-center gap-2">
                          <button
                            onClick={() => handleUpdateQuantity(item, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="w-6 h-6 border rounded text-gray-500 hover:bg-gray-200 disabled:opacity-50"
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => handleUpdateQuantity(item, item.quantity + 1)}
                            className="w-6 h-6 border rounded text-gray-500 hover:bg-gray-200"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="p-3">{formatVND(price * item.quantity)}</td>
                      <td className="p-3 text-center">
                        <button
                          onClick={() => handleRemoveItem(item)}
                          className="text-red-500 hover:text-red-700 text-sm font-medium"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-4 text-sm">
            <Link to="/" className="text-blue-600 hover:underline">← Continue Shopping</Link>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Check Out</button>
          </div>
        </section>
      </div>

      {/* (Optional) Product Suggestion Section */}
      <section aria-label="Product cards" className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {/* Gợi ý sản phẩm ở đây nếu cần */}
      </section>
    </div>
  );
};

export default Cart;
