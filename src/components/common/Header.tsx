import React from 'react'

const Header = () => {
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
          <div className="text-center hidden md:block">World's Fastest Online Shopping Destination</div>
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
            src="/assets/images/Logo.png"
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
          <div className="flex items-center gap-2 hover:text-gray-900 cursor-pointer">
            <i className="far fa-user text-2xl"></i>
            <div>
              <div className="text-xs">LOGIN</div>
              <div className="text-xs font-medium">Account</div>
            </div>
          </div>
          <div className="flex items-center gap-2 hover:text-gray-900 cursor-pointer">
            <i className="far fa-heart text-2xl"></i>
            <div>
              <div className="text-xs">3-ITEMS</div>
              <div className="text-xs font-medium">Wishlist</div>
            </div>
          </div>
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

          {/* Center - Nav links */}
          <ul className="hidden md:flex gap-6 text-gray-600 text-sm">
            {['Home', 'Categories', 'Products', 'Blog', 'Pages'].map((item) => (
              <li key={item} className="flex items-center text-base gap-1 hover:text-green-500 cursor-pointer">
                {item}
              </li>
            ))}
            <li className="flex items-center gap-1 hover:text-green-500 cursor-pointer">
              <i className="fas fa-sync-alt text-sm"></i>
              Offers
            </li>
          </ul>

          {/* Right - Location */}
          <button className="flex items-center gap-2 bg-[#5caf90] hover:bg-green-500 text-white px-4 rounded text-sm">
            <i className="fas fa-map-marker-alt text-white"></i>
            <p className='text-white pt-2.5 pr-4'>New York</p>
            <i className="fas fa-chevron-down text-[10px] text-white"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
