import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  // Hàm cập nhật user từ localStorage
  const updateUserFromStorage = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    // Lần đầu load lấy user
    updateUserFromStorage();

    // Lắng nghe event custom 'storageChanged'
    window.addEventListener('storageChanged', updateUserFromStorage);

    // Cleanup khi component unmount
    return () => {
      window.removeEventListener('storageChanged', updateUserFromStorage);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };
  return (
    <div className="bg-[#FFFFFF] font-sans text-gray-700 text-sm">
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
            <a href="#" className="hover:text-gray-700">Help?</a>
            <a href="#" className="hover:text-gray-700">Track Order?</a>
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
            src="image/logo.png"
            alt="Velora Logo"
            className="h-[70px] w-[70px] rounded-md ml-10"
          />
        </div>

        {/* Search Bar */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-[500px]">
            <input
              type="text"
              placeholder="Search Products..."
              className="w-full border border-gray-200 rounded-md py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400"
            />
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-[#212529]">
              <i className="fas fa-search text-sm"></i>
            </div>
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-4 text-center flex-shrink-0">
          {/* Login / Account */}
          <div className="flex items-center gap-2 hover:text-gray-900 cursor-pointer">
            <i className="far fa-user text-2xl"></i>
            <div className="text-left">
              {!user ? (
                <>
                  <Link to="/login" className="text-xs block hover:underline">
                    Đăng nhập
                  </Link>
                  <Link to="/register" className="text-xs font-medium block hover:underline">
                    Đăng ký
                  </Link>
                </>
              ) : (
                <>
                  <div className="text-xs font-medium">
                    Xin chào, {user.username}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-xs text-red-500 hover:underline block"
                  >
                    Đăng xuất
                  </button>
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
          <div className="flex items-center gap-2 hover:text-gray-900 cursor-pointer">
            <i className="fas fa-shopping-bag text-2xl text-gray-800"></i>
            <div>
              <div className="text-xs">3-ITEMS</div>
              <div className="text-xs font-medium">Cart</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-y border-gray-100">
        <div className="max-w-7xl mx-auto h-12 flex justify-between items-center px-4">
          {/* Left - All Categories */}
          <button className="flex items-center gap-2 bg-[#5caf90] hover:bg-green-500 text-white px-4 rounded text-sm">
            <i className="fas fa-th-large text-white"></i>
            <p className='text-white pt-2.5'>All Categories</p>
            <i className="fas fa-chevron-down text-[10px] text-white"></i>
          </button>

          {/* Center - Nav Links */}
          <nav className="flex gap-x-8 justify-between font-medium px-4">
            <Link to="/" className="hover:text-green-600">Home</Link>
            <Link to="/categories" className="hover:text-green-600">Categories</Link>
            <Link to="/products" className="hover:text-green-600">Products</Link>
            <Link to="/blog" className="hover:text-green-600">Blog</Link>
            <Link to="/pages" className="hover:text-green-600">Pages</Link>
            <Link to="/offers" className="hover:text-green-600">Offers</Link>
          </nav>

          {/* Right - Location */}
          <button className="flex items-center gap-2 bg-[#5caf90] hover:bg-green-500 text-white px-4 rounded text-sm">
            <i className="fas fa-map-marker-alt text-white"></i>
            <p className='text-white pt-2.5 pr-4'>New York</p>
            <i className="fas fa-chevron-down text-[10px] text-white"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
