import React, { useEffect, useRef, useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getCategories } from "services/category/category.service";
import { getAllProducts } from "services/product/product.service";
import type { ICategory } from "types/category";

const Header = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const accountRef = useRef<HTMLDivElement>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  //Xử lý click để nhấn ở icon user
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setShowDropdown(false);
      }

      if (accountRef.current && !accountRef.current.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        accountRef.current &&
        !accountRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClickCart = () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (!token || !user) {
      toast.error("Vui lòng đăng nhập để xem sản phẩm giỏ hàng!", {
        icon: <FaExclamationCircle color="white" />,
      });
      setTimeout(() => {
        navigate("/login");
      }, 0);

      return;
    }
    navigate("/cart");
  };

  useEffect(() => {
    setLoading(true);
    getCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Lấy user lần đầu
    updateUserFromStorage();

    // Lắng nghe sự kiện custom
    window.addEventListener("storageChanged", updateUserFromStorage);

    return () => {
      window.removeEventListener("storageChanged", updateUserFromStorage);
    };
  }, []);

  const updateUserFromStorage = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowDropdown(false);
    }
  };

  const handleCategoryClick = () => {
    setShowDropdown(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Gọi API mỗi khi searchTerm thay đổi (debounce nhẹ nếu muốn)
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const fetchProducts = async () => {
        try {
          const data = await getAllProducts(searchTerm);
          setProducts(data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };

      fetchProducts();
    }, 300); // debounce 300ms

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  return (
    <div className="bg-gradient-to-r from-green-50 via-white to-green-50 border-b border-gray-100 text-xs text-gray-600">
      {/* Top Bar */}
      <div className="bg-[#f8f8fb] border-b border-gray-100 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-8 px-4">
          <div className="flex gap-4 items-center">
            <span className="flex items-center gap-1">
              <i className="fas fa-phone-alt text-xs"></i> +91 987 654 3210
            </span>
            <span className="flex items-center gap-1">
              <i className="fab fa-whatsapp text-xs"></i> +91 987 654 3210
            </span>
          </div>
          <div className="text-center hidden md:block">
            World's Fastest Online Shopping Destination
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-700">
              Help?
            </a>
            <a href="#" className="hover:text-gray-700">
              Track Order?
            </a>
            <div className="relative flex items-center gap-1 cursor-pointer hover:text-gray-700">
              English
              <i className="fas fa-chevron-down text-[10px]"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto h-auto py-4 px-4 flex flex-wrap justify-between items-center gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/image/logo.png"
            alt="Velora Logo"
            className="h-[70px] w-[70px] rounded-md ml-10"
          />
        </div>

        {/* Search Bar */}
        <div className="flex-1 flex justify-center ml-30">
          <div className="relative w-[500px] z-50">
            <input
              type="text"
              placeholder="Search Products..."
              className="w-full border border-gray-200 rounded-md py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-[#212529]">
              <i className="fas fa-search text-sm"></i>
            </div>

            {/* Dropdown sản phẩm gợi ý */}
            {searchTerm && products.length > 0 && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md max-h-[300px] overflow-y-auto z-50">
                {products.map((product: any) => (
                  <Link
                    to={`/product/${product._id}`}
                    key={product._id}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-green-100 text-sm text-gray-800"
                    onClick={() => setSearchTerm("")}
                  >
                    <img
                      src={product.images?.[0] || "/default-product.jpg"}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded border"
                    />
                    <div>
                      <div className="font-medium">{product.name}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Không tìm thấy */}
            {searchTerm && products.length === 0 && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md text-sm text-gray-500 px-4 py-2">
                Không tìm thấy sản phẩm.
              </div>
            )}
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-4 text-center flex-shrink-0">
          {/* Login / Account */}
          <div className="flex items-center gap-2 hover:text-gray-900 cursor-pointer">
            <div
              className="relative"
              ref={accountRef}
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <div className="text-2xl text-gray-700 cursor-pointer">
                <i className="far fa-user text-2xl"></i>
              </div>

              <div
                className={`absolute top-full right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50 text-sm translate-x-[170px] transition-opacity duration-200 ${
                  open ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <button
                  onClick={() => {
                    navigate("/user/profile");
                    setOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-green-100 transition duration-200"
                >
                  Tài khoản của tôi
                </button>
                <button
                  onClick={() => {
                    navigate("/user/order");
                    setOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-green-100 transition duration-200"
                >
                  Đơn mua
                </button>
                <button
                  onClick={() => {
                    navigate("/user/change-password");
                    setOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-green-100 transition duration-200"
                >
                  Đổi mật khẩu
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-red-100 transition duration-200"
                >
                  Đăng xuất
                </button>
              </div>
            </div>

            <div className="text-left">
              {!user ? (
                <>
                  <Link to="/login" className="text-xs block hover:underline">
                    Đăng nhập
                  </Link>
                  <Link
                    to="/register"
                    className="text-xs font-medium block hover:underline"
                  >
                    Đăng ký
                  </Link>
                </>
              ) : (
                <>
                  <div
                    className="text-xs font-medium cursor-pointer hover:underline"
                    onClick={() => navigate("/user/profile")}
                  >
                    Xin chào, {user.username}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Wishlist */}
          <div className="flex items-center gap-2 hover:text-gray-900 cursor-pointer">
            <i className="far fa-heart text-2xl"></i>
            <div>
              <div className="text-xs">3-ITEMS</div>
              <div className="text-xs font-medium">Wishlist</div>
            </div>
          </div>

          {/* Cart */}
          <Link to="/cart" className="text-xs block hover:underline">
            <div
              className="flex items-center gap-2 hover:text-gray-900 cursor-pointer"
              onClick={handleClickCart}
            >
              <i className="fas fa-shopping-bag text-2xl text-gray-800"></i>

              <div>
                <div className="text-xs">3-ITEMS</div>
                <div className="text-xs font-medium">Cart</div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-y border-gray-100">
        <div className="max-w-7xl mx-auto h-12 flex justify-between items-center px-4">
          {/* Left - All Categories */}
          <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2 bg-[#5caf90] hover:bg-green-500 text-white px-4 rounded text-sm"
            >
              <i className="fas fa-th-large text-white"></i>
              <p className="text-white pt-2.5">All Categories</p>
              <i className="fas fa-chevron-down text-[10px] text-white"></i>
            </button>

            {/* Dropdown menu */}
            {showDropdown && (
              <div className="absolute mt-2 w-48 bg-white rounded shadow-lg z-10">
                {loading ? (
                  <p className="p-2 text-center text-gray-500">Loading...</p>
                ) : (
                  <ul>
                    {categories.length === 0 ? (
                      <li className="p-2 text-gray-500">No categories found</li>
                    ) : (
                      categories
                        .filter((cat) => cat.name !== "Danh mục mặc định")
                        .map((cat) => (
                          <Link
                            key={cat._id}
                            to={`/categories/${cat._id}`}
                            className="block px-4 py-2 hover:bg-green-100 text-gray-700"
                            onClick={handleCategoryClick}
                          >
                            {cat.name}
                          </Link>
                        ))
                    )}
                  </ul>
                )}
              </div>
            )}
          </div>

          {/* Center - Navigation Links */}
         <nav className="flex gap-x-8 justify-between font-medium px-4">
            <Link to="/" className="hover:text-green-600">Trang chủ</Link>
            <Link to="/products" className="hover:text-green-600">Sản phẩm</Link>
            <Link to="/blog" className="hover:text-green-600">Tin tức</Link>
            <Link to="/sanpham_banchay" className="hover:text-green-600">Bán chạy nhất</Link>
            <Link to="/lien_he" className="hover:text-green-600">Liên hệ</Link>
          </nav>

          {/* Right - Location */}
          <button className="flex items-center gap-2 bg-[#5caf90] hover:bg-green-500 text-white px-4 rounded text-sm">
            <i className="fas fa-map-marker-alt text-white"></i>
            <p className="text-white pt-2.5 pr-4">New York</p>
            <i className="fas fa-chevron-down text-[10px] text-white"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
