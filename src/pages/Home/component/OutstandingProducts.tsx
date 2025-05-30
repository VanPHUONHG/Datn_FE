import React, { memo } from 'react'

const OutstandingProducts = () => {
  return (
    <>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h1 className="text-gray-800 text-lg font-semibold">
              Day Of The
              <span className="text-green-500 font-normal">
                Deal
              </span>
            </h1>
            <p className="text-gray-400 text-xs mt-1">
              Don't wait. The time will never be just right.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 text-right text-xs text-gray-500 font-semibold tracking-wide">
            <span>25</span>
            <span className="mx-1">Days</span>
            <span>23</span>
            <span className="mx-1">:</span>
            <span>59</span>
            <span className="mx-1">:</span>
            <span>54</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">

          <div className="bg-white border border-gray-100 rounded-md shadow-sm transition duration-300 hover:border-green-500 hover:shadow-md">
            <div className="relative bg-gray-100 p-6 flex justify-center items-center">
              <img alt="White sneaker shoe side view on light gray background"  className="max-w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105" src="image/day1.png" width="240" />
              <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-semibold rounded px-2 py-0.5">
                SALE
              </div>
            </div>
            <div className="px-4 pt-3 pb-4">
              <p className="text-xs text-gray-400 font-normal">
                Dried Fruits
              </p>
              <h2 className="text-sm font-semibold text-gray-800 mt-1 leading-tight transition-colors duration-300 ease-in-out hover:text-green-500 hover:underline">
                Mixed Nuts Berries Pack
              </h2>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-xs"></i>
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-1">(4.5)</span>
              </div>
              <div className="mt-2 text-xs">
                <span className="font-bold text-gray-900">
                  $56.00
                </span>
                <span className="line-through text-gray-400 ml-2">
                  $45.00
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-md shadow-sm transition duration-300 hover:border-green-500 hover:shadow-md">
            <div className="relative bg-gray-100 p-6 flex justify-center items-center">
              <img alt="Pink running shoe side view on light gray background"  className="max-w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105" src="image/day2.png" width="240" />
              <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-semibold rounded px-2 py-0.5">
                SALE
              </div>
            </div>
            <div className="px-4 pt-3 pb-4">
              <p className="text-xs text-gray-400 font-normal">
                Cookies
              </p>
              <h2 className="text-sm font-semibold text-gray-800 mt-1 leading-tight transition-colors duration-300 ease-in-out hover:text-green-500 hover:underline">
                Multi Grain Combo Cookies
              </h2>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-xs"></i>
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-1">(4.8)</span>
              </div>
              <div className="mt-2 text-xs text-gray-400">
                10kg
              </div>
              <div className="mt-1 text-xs">
                <span className="font-bold text-gray-900">
                  $30.00
                </span>
                <span className="line-through text-gray-400 ml-2">
                  $25.00
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-md shadow-sm transition duration-300 hover:border-green-500 hover:shadow-md">
            <div className="relative bg-gray-100 p-6 flex justify-center items-center">
              <img alt="Black sneaker shoe side view on light gray background"  className="max-w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105" src="image/day3.png" width="240" />
            </div>
            <div className="px-4 pt-3 pb-4">
              <p className="text-xs text-gray-400 font-normal">
                Foods
              </p>
              <h2 className="text-sm font-semibold text-gray-800 mt-1 leading-tight transition-colors duration-300 ease-in-out hover:text-green-500 hover:underline">
                Fresh Mango Juice Pack
              </h2>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-xs"></i>
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-1">(4.2)</span>
              </div>
              <div className="mt-2 text-xs">
                <span className="font-bold text-gray-900">
                  $65.00
                </span>
                <span className="line-through text-gray-400 ml-2">
                  $46.00
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-md shadow-sm transition duration-300 hover:border-green-500 hover:shadow-md">
            <div className="relative bg-gray-100 p-6 flex justify-center items-center">
              <img alt="Blue sneaker shoe side view on light gray background"  className="max-w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105" src="image/day4.png" width="240" />
              <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-semibold rounded px-2 py-0.5">
                SALE
              </div>
            </div>
            <div className="px-4 pt-3 pb-4">
              <p className="text-xs text-gray-400 font-normal">
                Dried Fruits
              </p>
              <h2 className="text-sm font-semibold text-gray-800 mt-1 leading-tight transition-colors duration-300 ease-in-out hover:text-green-500 hover:underline">
                Dates Value Fresh Pouch
              </h2>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-xs"></i>
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-1">(4.7)</span>
              </div>
              <div className="mt-2 text-xs">
                <span className="font-bold text-gray-900">
                  $85.00
                </span>
                <span className="line-through text-gray-400 ml-2">
                  $78.00
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-md shadow-sm transition duration-300 hover:border-green-500 hover:shadow-md">
            <div className="relative bg-gray-100 p-6 flex justify-center items-center">
              <img alt="White sneaker shoe with pink and yellow sole side view on light gray background"  className="max-w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105" src="image/day5.png" width="240" />
              <div className="absolute top-2 right-2 bg-green-500 text-white text-[10px] font-semibold rounded px-2 py-0.5">
                NEW
              </div>
            </div>
            <div className="px-4 pt-3 pb-4">
              <p className="text-xs text-gray-400 font-normal">
                Foods
              </p>
              <h2 className="text-sm font-semibold text-gray-800 mt-1 leading-tight transition-colors duration-300 ease-in-out hover:text-green-500 hover:underline">
                Stick Fiber Masala Magic
              </h2>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-xs"></i>
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-1">(4.7)</span>
              </div>
              <div className="flex items-center mt-2">
                <div className="mt-1 text-xs">
                  <span className="font-bold text-gray-900">
                    $50.00
                  </span>
                  <span className="line-through text-gray-400 ml-2">
                    $45.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default memo(OutstandingProducts)