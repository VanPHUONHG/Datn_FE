import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
      <div className="bg-white text-gray-700 text-[14px] leading-none select-none">
        <div className="flex justify-between items-center px-6 sm:px-8 md:px-12 py-2 border-b border-gray-300">
          <div className="flex space-x-8">
            <div className="flex items-center space-x-2">
              <i className="fas fa-phone-alt text-[14px]"></i>
              <span>+91 987 654 3210</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-phone-alt text-[14px]"></i>
              <span>+91 987 654 3210</span>
            </div>
          </div>
          <div className="text-[14px] text-center text-gray-500 select-text">
            "Your No.1 Online Hair Care Destination"
          </div>
          <div className="flex gap-x-3 text-[14px]">
            <button className="hover:text-gray-800 focus:outline-none">
              Help?
            </button>
            <button className="hover:text-gray-800 focus:outline-none">
              Track Order?
            </button>
            <div className="relative group cursor-pointer">
              <button className="flex items-center gap-x-2 hover:text-gray-800 focus:outline-none">
                <span>English</span>
                <i className="fas fa-chevron-down text-[10px]"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-6 sm:px-8 md:px-12 py-6 border-b border-gray-300">
          <div>
<img src="/assets/images/logo-Hair.png" alt="Logo Hair" className='h-18 rounded-md ml-13'/>
          </div>
          <div className="flex-1 max-w-lg mx-8">
            <form className="relative w-full">
              <input
                className="w-full border border-gray-300 rounded-md py-3 px-4 text-[14px] text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Search Products..."
                type="text"
              />
              <button
                aria-label="Search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                type="submit"
              >
                <i className="fas fa-search text-[16px]"></i>
              </button>
            </form>
          </div>
          <div className="flex items-center space-x-10 text-[14px] text-gray-700">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-900">
              <i className="far fa-user text-[18px]"></i>
              <div className="leading-none">
                <div>Account</div>
                <div className="font-semibold text-[12px]">LOGIN</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-900">
              <i className="far fa-heart text-[18px]"></i>
              <div className="leading-none">
                <div>Wishlist</div>
                <div className="font-semibold text-[12px]">3-ITEMS</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-900">
              <i className="fas fa-shopping-bag text-[18px]"></i>
              <div className="leading-none">
                <div>Cart</div>
                <div className="font-semibold text-[12px]">3-ITEMS</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-6 sm:px-8 md:px-12 py-4 border-b border-gray-300 text-[14px] text-gray-700 select-none">
          <button
            aria-label="All Categories"
            className="flex items-center space-x-3 bg-green-600 text-white rounded-md px-4 py-2 font-medium hover:bg-green-700 focus:outline-none"
          >
            <i className="fas fa-th-large text-[16px]"></i>
            <span>All Categories</span>
            <i className="fas fa-chevron-down text-[12px]"></i>
          </button>
        <nav className="flex gap-x-8 justify-between font-medium px-4">
  <button className="flex items-center space-x-2 hover:text-green-600 focus:outline-none">
    <span>Home</span>
    <i className="fas fa-chevron-down text-[12px]"></i>
  </button>
  <button className="flex items-center space-x-2 hover:text-green-600 focus:outline-none">
    <span>Categories</span>
    <i className="fas fa-chevron-down text-[12px]"></i>
  </button>
  <button className="flex items-center space-x-2 hover:text-green-600 focus:outline-none">
    <span>Products</span>
    <i className="fas fa-chevron-down text-[12px]"></i>
  </button>
  <button className="flex items-center space-x-2 hover:text-green-600 focus:outline-none">
    <span>Blog</span>
    <i className="fas fa-chevron-down text-[12px]"></i>
  </button>
  <button className="flex items-center space-x-2 hover:text-green-600 focus:outline-none">
    <span>Pages</span>
    <i className="fas fa-chevron-down text-[12px]"></i>
  </button>
  <button className="hover:text-green-600 font-medium focus:outline-none">
    Offers
  </button>
</nav>

          <button
            aria-label="New York location"
            className="flex items-center space-x-3 bg-green-600 text-white rounded-md px-4 py-2 font-medium hover:bg-green-700 focus:outline-none"
          >
            <i className="fas fa-map-marker-alt text-[16px]"></i>
            <span>New York</span>
            <i className="fas fa-chevron-down text-[12px]"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header