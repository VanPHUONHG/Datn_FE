
type Props = {}

const Header = (props: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center text-gray-400 text-sm px-4 py-2 select-none max-w-7xl mx-auto">
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <i className="fas fa-phone-alt text-base">
            </i>
            <span>
              +91 987 654 3210
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-phone-alt text-base">
            </i>
            <span>
              +91 987 654 3210
            </span>
          </div>
        </div>
        <div className="font-medium text-base">
          Your No.1 Online Hair Care Destination
        </div>
        <div className="flex space-x-8 text-sm text-gray-400 items-center">
          <span className="cursor-pointer hover:text-gray-600">
            Help?
          </span>
          <span className="cursor-pointer hover:text-gray-600">
            Track Order?
          </span>
          <div className="relative cursor-pointer hover:text-gray-600 select-none">
            English
            <i className="fas fa-chevron-down ml-1 text-xs">
            </i>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <img alt="Velora brand logo with black shoe icon and text Velora Beauty Point" className="w-14 h-14 object-contain" height="60" src="https://storage.googleapis.com/a1aa/image/1672a8dd-7ea0-4455-cb9e-bd7f28bf6572.jpg" width="60" />
          </div>

          <div className="flex-1 max-w-lg px-4">
            <form className="relative w-full">
              <input aria-label="Search Products" className="w-full border border-gray-300 rounded-md py-2 pl-4 pr-10 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600" placeholder="Search Products..." type="text" />
              <button aria-label="Search" className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600" type="submit">
                <i className="fas fa-search">
                </i>
              </button>
            </form>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-900">
              <i className="fas fa-user">
              </i>
              <div className="leading-none">
                <div className="font-semibold text-[10px]">
                  Account
                </div>
                <div className="text-[9px] font-light">
                  LOGIN
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-900">
              <i className="far fa-heart">
              </i>
              <div className="leading-none text-center">
                <div className="font-semibold text-[10px]">
                  Wishlist
                </div>
                <div className="text-[9px] font-light">
                  3-ITEMS
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-900">
              <i className="fas fa-shopping-cart">
              </i>
              <div className="leading-none text-center">
                <div className="font-semibold text-[10px]">
                  Cart
                </div>
                <div className="text-[9px] font-light">
                  3-ITEMS
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between py-4 border-t border-gray-200">
          <button className="flex items-center bg-green-600 text-white text-xs font-semibold rounded-md px-3 py-1 hover:bg-green-700" type="button">
            <i className="fas fa-th-large mr-2 text-[10px]">
            </i>
            All Categories
            <i className="fas fa-chevron-down ml-2 text-[10px]">
            </i>
          </button>
          <nav className="flex space-x-6 font-sans">
            <div className="relative group cursor-pointer">
              Home
              <i className="fas fa-chevron-down ml-1 text-[10px]">
              </i>
              <div className="absolute left-0 top-full mt-1 w-24 bg-white border border-gray-200 rounded-md shadow-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity text-xs">

              </div>
            </div>
            <div className="relative group cursor-pointer">
              Categories
              <i className="fas fa-chevron-down ml-1 text-[10px]">
              </i>
            </div>
            <div className="relative group cursor-pointer">
              Products
              <i className="fas fa-chevron-down ml-1 text-[10px]">
              </i>
            </div>
            <div className="relative group cursor-pointer">
              Blog
              <i className="fas fa-chevron-down ml-1 text-[10px]">
              </i>
            </div>
            <div className="relative group cursor-pointer">
              Pages
              <i className="fas fa-chevron-down ml-1 text-[10px]">
              </i>
            </div>
            <div className="cursor-pointer">
              Offers
            </div>
          </nav>
          <button className="flex items-center bg-green-600 text-white text-xs font-semibold rounded-md px-3 py-1 hover:bg-green-700" type="button">
            New York
            <i className="fas fa-chevron-down ml-2 text-[10px]">
            </i>
          </button>
        </div>
      </div>

    </div>
  );
}

export default Header