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

          <div className="bg-white border border-gray-100 rounded-md shadow-sm">
            <div className="relative bg-gray-100 p-6 flex justify-center items-center">
              <img alt="White sneaker shoe side view on light gray background" className="max-w-full h-auto" height="160" src="https://storage.googleapis.com/a1aa/image/2e2796c8-7a24-4fb6-fc30-f26230b681cc.jpg" width="240" />
              <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-semibold rounded px-2 py-0.5">
                SALE
              </div>
            </div>
            <div className="px-4 pt-3 pb-4">
              <p className="text-xs text-gray-400 font-normal">
                Dried Fruits
              </p>
              <h2 className="text-sm font-semibold text-gray-800 mt-1 leading-tight">
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

          <div className="bg-white border border-gray-100 rounded-md shadow-sm">
            <div className="relative bg-gray-100 p-6 flex justify-center items-center">
              <img alt="Pink running shoe side view on light gray background" className="max-w-full h-auto" height="160" src="https://storage.googleapis.com/a1aa/image/196a7e2c-a880-45c5-1724-5b22d84289b0.jpg" width="240" />
              <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-semibold rounded px-2 py-0.5">
                SALE
              </div>
            </div>
            <div className="px-4 pt-3 pb-4">
              <p className="text-xs text-gray-400 font-normal">
                Cookies
              </p>
              <h2 className="text-sm font-semibold text-gray-800 mt-1 leading-tight">
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

          <div className="bg-white border border-gray-100 rounded-md shadow-sm">
            <div className="relative bg-gray-100 p-6 flex justify-center items-center">
              <img alt="Black sneaker shoe side view on light gray background" className="max-w-full h-auto" height="160" src="https://storage.googleapis.com/a1aa/image/a38bc2e3-e7f2-4932-26e8-546a9ba9fd00.jpg" width="240" />
            </div>
            <div className="px-4 pt-3 pb-4">
              <p className="text-xs text-gray-400 font-normal">
                Foods
              </p>
              <h2 className="text-sm font-semibold text-gray-800 mt-1 leading-tight">
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

          <div className="bg-white border border-gray-100 rounded-md shadow-sm">
            <div className="relative bg-gray-100 p-6 flex justify-center items-center">
              <img alt="Blue sneaker shoe side view on light gray background" className="max-w-full h-auto" height="160" src="https://storage.googleapis.com/a1aa/image/9662529c-c415-435d-901a-1c37d74396be.jpg" width="240" />
              <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-semibold rounded px-2 py-0.5">
                SALE
              </div>
            </div>
            <div className="px-4 pt-3 pb-4">
              <p className="text-xs text-gray-400 font-normal">
                Dried Fruits
              </p>
              <h2 className="text-sm font-semibold text-gray-800 mt-1 leading-tight">
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

          <div className="bg-white border border-gray-100 rounded-md shadow-sm">
            <div className="relative bg-gray-100 p-6 flex justify-center items-center">
              <img alt="White sneaker shoe with pink and yellow sole side view on light gray background" className="max-w-full h-auto" height="160" src="https://storage.googleapis.com/a1aa/image/e476c429-850b-4ca0-1ee8-7fa1df29e79f.jpg" width="240" />
              <div className="absolute top-2 right-2 bg-green-500 text-white text-[10px] font-semibold rounded px-2 py-0.5">
                NEW
              </div>
            </div>
            <div className="px-4 pt-3 pb-4">
              <p className="text-xs text-gray-400 font-normal">
                Foods
              </p>
              <h2 className="text-sm font-semibold text-gray-800 mt-1 leading-tight">
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