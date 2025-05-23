import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getAllProducts } from 'services/product/product.service';
import type { Product } from 'types/product';

function Home() {
  const [data, setData] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllProducts();
        setData(result);
        console.log("Fetched result:", result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // log xem data cập nhật chưa
  useEffect(() => {
  }, [data]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row md:space-x-6 bg-gradient-to-r from-white to-[#f3f5f4] rounded-lg overflow-hidden" style={{ height: '400px' }}>
          <div className="flex flex-col justify-center flex-1 px-8 md:px-12">
            <p className="text-sm text-[#3a8a7d] font-semibold mb-2">
              Starting at
              <span className="font-bold"> $ 29.99</span>
            </p>
            <h2 className="text-4xl font-extrabold text-[#3a4756] leading-tight max-w-xs">
              Explore fresh &amp;
              <br />
              stylish kicks
            </h2>
            <button className="mt-6 bg-[#3a4756] text-white text-sm font-semibold px-6 py-3 rounded-sm w-max hover:bg-[#2c3744] transition-colors">
              Shop Now »
            </button>
          </div>

          <div className="relative flex-1 flex items-center justify-center bg-black text-white" style={{ minWidth: '400px' }}>
            <img
              alt="Smartwatch with red frame and black strap showing time 16:00"
              className="absolute left-10 top-16 w-32 h-32 object-contain z-20"
              src="https://storage.googleapis.com/a1aa/image/fbc09574-871c-4a7b-6608-70db7fc65f3b.jpg"
            />
            <img
              alt="Blue sneaker shoe side view with white sole"
              className="absolute left-24 top-20 w-72 h-36 object-contain z-30"
              src="https://storage.googleapis.com/a1aa/image/37777c1d-ab14-4145-ae3b-654617e6348d.jpg"
            />
            <img
              alt="Transparent circle behind sneaker"
              className="absolute left-44 top-24 w-28 h-28 rounded-full bg-white/30 z-10"
              src="https://storage.googleapis.com/a1aa/image/27c9d2a1-67fb-4a6d-d03c-f64aded367ed.jpg"
            />
            <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-b from-purple-500 to-blue-400 flex flex-col justify-center items-center text-white font-extrabold text-5xl leading-none tracking-tight" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>
              <span>BLACK</span>
              <span>FRIDAY</span>
              <span className="text-sm font-normal mt-2 tracking-widest bg-pink-600 px-3 py-2 rounded-sm">
                SAVE UP TO 50%
              </span>
            </div>
            <div className="absolute bottom-6 left-8 flex space-x-2 z-40">
              {[1, 0.5, 0.5, 0.5].map((opacity, index) => (
                <span
                  key={index}
                  className={`w-4 h-4 rounded-full bg-pink-600`}
                  style={{ opacity }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-7xl mx-auto" style={{ minHeight: '140px' }}>
          {[
            { name: 'Giày Nike', items: 320, discount: 30, image: '684e5337-0890-4770-df21-2ae010731fa3.jpg' },
            { name: 'Giày Nam', items: 65, image: '0a672e0e-c694-4396-7ec8-a68514db101c.jpg' },
            { name: 'Giày Nữ', items: 545, discount: 15, image: '0a4574bf-04f8-4087-6870-c45596ad4abf.jpg' },
            { name: 'Giày Boot', items: 48, discount: 10, image: '991e2dbd-f7e3-4231-85bc-81ae0f7f3ac3.jpg' },
            { name: 'Dép Cao', items: 98, image: '927539e2-30b7-4f9e-e56a-09bbca86f2aa.jpg' },
            { name: 'Giày Trẻ Em', items: 234, image: 'c9f4fa67-505d-4dde-4537-ba346afdb26b.jpg' }
          ].map((category, index) => (
            <div key={index} className={`flex flex-col items-center bg-white border-4 border-gradient-${index + 1} rounded-lg p-4 w-full`}>
              <div className="relative">
                <img
                  alt={`${category.name} icon`}
                  className="mx-auto h-12 w-12 object-contain"
                  src={`https://storage.googleapis.com/a1aa/image/${category.image}`}
                />
                {category.discount && (
                  <span className="absolute top-0 right-0 bg-[#3a8a7d] text-white text-[10px] font-semibold rounded px-1">
                    {category.discount}%
                  </span>
                )}
              </div>
              <p className="text-xs text-center text-[#3a4756] mt-2 font-semibold">
                {category.name}
              </p>
              <p className="text-[9px] text-center text-gray-400 mt-1">
                {category.items} items
              </p>
            </div>
          ))}
        </div>
      </div>

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


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* <!-- Banner --> */}
        <div className="relative w-full max-w-full mx-auto mb-8 bg-black h-[300px]">
          <img
            alt="Black and red sneaker on dark background with text SNEAKER new definition"
            className="w-full h-full object-contain"
            src="https://storage.googleapis.com/a1aa/image/da8e4f01-2d30-4620-0e06-aa87625d9188.jpg"
          />
          <button className="absolute bottom-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded">
            Shop now
          </button>
        </div>

        {/* <!-- Heading and subtitle --> */}
        <div className="mb-4">
          <h2 className="text-sm font-semibold text-gray-800">
            New Arrivals
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Shop online for new arrivals and get free shipping!
          </p>
        </div>
        {/* <!-- Categories --> */}
        <div className="flex justify-end space-x-4 text-xs font-semibold text-gray-400 mb-6">
          <button className="text-gray-900 uppercase tracking-wider">
            ALL
          </button>
          <button className="uppercase tracking-wider">
            SNACK &amp; SPICES
          </button>
          <button className="uppercase tracking-wider">
            FRUITS
          </button>
          <button className="uppercase tracking-wider">
            VEGETABLES
          </button>
        </div>



        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <div className="bg-gray-50 p-3 rounded">
            <div className="relative">
              <img alt="White and gray sneaker side view on light background" className="w-full h-auto" height="150" src="https://storage.googleapis.com/a1aa/image/1edc4faa-bcf2-41bd-29b7-fc9ec6968035.jpg" width="250" />
              <span className="absolute top-2 right-2 bg-red-500 text-white text-[9px] font-semibold px-1 rounded">
                SALE
              </span>
            </div>
            <div className="mt-2 text-xs text-gray-400 font-semibold">
              Dried Fruits
            </div>
            <div className="text-xs font-semibold text-gray-900">
              Mixed Nuts Berries Pack
            </div>
            <div className="text-xs font-bold text-gray-900 mt-1">
              $86.00
              <span className="line-through text-gray-400 font-normal">
                $95.00
              </span>
            </div>
          </div>

          <div className="bg-gray-50 p-3 rounded">
            <div className="relative">
              <img alt="Light gray sneaker side view on light background" className="w-full h-auto" height="150" src="https://storage.googleapis.com/a1aa/image/63252fc7-ebda-4f10-6530-e3fcb42b83d3.jpg" width="250" />
              <span className="absolute top-2 right-2 bg-red-500 text-white text-[9px] font-semibold px-1 rounded">
                SALE
              </span>
            </div>
            <div className="mt-2 text-xs text-gray-400 font-semibold">
              Cookies
            </div>
            <div className="text-xs font-semibold text-gray-900">
              Multi Grain Combo Cookies
            </div>
            <div className="text-xs font-bold text-gray-900 mt-1">
              $30.00
              <span className="line-through text-gray-400 font-normal">
                $35.00
              </span>
            </div>
          </div>

          <div className="bg-gray-50 p-3 rounded">
            <div>
              <img alt="White sneaker with black stripes side view on light background" className="w-full h-auto" height="150" src="https://storage.googleapis.com/a1aa/image/f9af54e6-75ba-4873-2e77-21fdf7fedcb9.jpg" width="250" />
            </div>
            <div className="mt-2 text-xs text-gray-400 font-semibold">
              Foods
            </div>
            <div className="text-xs font-semibold text-gray-900">
              Fresh Mango Juice Pack
            </div>
            <div className="text-xs font-bold text-gray-900 mt-1">
              $65.00
              <span className="line-through text-gray-400 font-normal">
                $85.00
              </span>
            </div>
          </div>

          <div className="bg-gray-50 p-3 rounded">
            <div className="relative">
              <img alt="White sneaker with black and orange stripes side view on light background" className="w-full h-auto" height="150" src="https://storage.googleapis.com/a1aa/image/2ba2d370-a964-4f40-6b2f-66ef51e24e88.jpg" width="250" />
              <span className="absolute top-2 right-2 bg-red-500 text-white text-[9px] font-semibold px-1 rounded">
                SALE
              </span>
            </div>
            <div className="mt-2 text-xs text-gray-400 font-semibold">
              Dried Fruits
            </div>
            <div className="text-xs font-semibold text-gray-900">
              Deluxe Value Fresh Pouch
            </div>
            <div className="text-xs font-bold text-gray-900 mt-1">
              $35.00
              <span className="line-through text-gray-400 font-normal">
                $78.50
              </span>
            </div>
          </div>

          <div className="bg-gray-50 p-3 rounded">
            <div className="relative">
              <img alt="Red and green sneaker side view on light background" className="w-full h-auto" height="150" src="https://storage.googleapis.com/a1aa/image/3b9a1aab-bf86-4f75-4eec-0be5205826eb.jpg" width="250" />
              <span className="absolute top-2 right-2 bg-green-500 text-white text-[9px] font-semibold px-1 rounded">
                NEW
              </span>
            </div>
            <div className="mt-2 text-xs text-gray-400 font-semibold">
              Foods
            </div>
            <div className="text-xs font-semibold text-gray-900">
              Stick Fiber Mosaic Magic
            </div>
            <div className="text-xs font-bold text-gray-900 mt-1">
              $50.00
              <span className="line-through text-gray-400 font-normal">
                $48.00
              </span>
            </div>
          </div>

          <div className="bg-gray-50 p-3 rounded">
            <div className="relative">
              <img alt="White sneaker with pink and yellow sole side view on light background" className="w-full h-auto" height="150" src="https://storage.googleapis.com/a1aa/image/62fecb9e-ab23-4721-a2ee-4a61f5eac087.jpg" width="250" />
              <span className="absolute top-2 right-2 bg-green-500 text-white text-[9px] font-semibold px-1 rounded">
                NEW
              </span>
            </div>
            <div className="mt-2 text-xs text-gray-400 font-semibold">
              Fresh Fruit
            </div>
            <div className="text-xs font-semibold text-gray-900">
              Natural Hub Cherry Korondo
            </div>
            <div className="text-xs font-bold text-gray-900 mt-1">
              $65.00
              <span className="line-through text-gray-400 font-normal">
                $48.00
              </span>
            </div>
          </div>

          <div className="bg-gray-50 p-3 rounded">
            <div>
              <img alt="Black sneaker with gray and yellow sole side view on light background" className="w-full h-auto" height="150" src="https://storage.googleapis.com/a1aa/image/9e39d6f0-815a-47d0-d1ef-d2cc619f6f3c.jpg" width="250" />
            </div>
            <div className="mt-2 text-xs text-gray-400 font-semibold">
              Nuts
            </div>
            <div className="text-xs font-semibold text-gray-900">
              Fresh Mango Juice Pack
            </div>
            <div className="text-xs font-bold text-gray-900 mt-1">
              $21.00
              <span className="line-through text-gray-400 font-normal">
                $28.00
              </span>
            </div>
          </div>

          <div className="bg-gray-50 p-3 rounded">
            <div>
              <img alt="White sneaker with blue stripes side view on light background" className="w-full h-auto" height="150" src="https://storage.googleapis.com/a1aa/image/50dba461-be6f-4eeb-2b56-cd88cdc74922.jpg" width="250" />
              <span className="absolute top-2 right-2 bg-green-500 text-white text-[9px] font-semibold px-1 rounded">
                NEW
              </span>
            </div>
            <div className="mt-2 text-xs text-gray-400 font-semibold">
              Nuts
            </div>
            <div className="text-xs font-semibold text-gray-900">
              Natural Hub Cherry Korondo
            </div>
            <div className="text-xs font-bold text-gray-900 mt-1">
              $65.00
              <span className="line-through text-gray-400 font-normal">
                $45.00
              </span>
            </div>
          </div>

          <div className="bg-gray-50 p-3 rounded">
            <div>
              <img alt="White sneaker with gray stripes side view on light background" className="w-full h-auto" height="150" src="https://storage.googleapis.com/a1aa/image/4cf4c537-fcc0-44e0-d259-c1f8f7b93436.jpg" width="250" />
            </div>
            <div className="mt-2 text-xs text-gray-400 font-semibold">
              Fresh Fruit
            </div>
            <div className="text-xs font-semibold text-gray-900">
              Fresh Mango Juice Pack
            </div>
            <div className="text-xs font-bold text-gray-900 mt-1">
              $21.00
              <span className="line-through text-gray-400 font-normal">
                $30.00
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* <!-- Promo Images Row --> */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          <div className="relative flex-1 rounded-md overflow-hidden">
            <img alt="Side view of a Nike running shoe with orange and black details hanging by laces against a dark blue background" className="w-full h-auto object-cover rounded-md" height="300" src="https://storage.googleapis.com/a1aa/image/019fcfc9-1cec-4918-cc1e-5ad182de1403.jpg" width="600" />
            <div aria-hidden="true" className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
              <p
                className="text-white font-extrabold text-lg md:text-xl tracking-widest"
                style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
              >
                NIKE - JUST DO IT
              </p>

              <p className="text-white text-[8px] mt-1 font-normal">
                SINCE 1972
              </p>
              <img alt="Just Do It Nike logo in white" className="absolute bottom-3 right-3 w-[50px] h-[20px] object-contain" height="20" src="https://storage.googleapis.com/a1aa/image/3a6aa576-586b-4f8d-ed15-4cf6205c695f.jpg" width="50" />
            </div>
          </div>
          <div className="relative flex-1 rounded-md overflow-hidden">
            <img alt="Nike running shoe glowing orange on the swoosh with stadium spotlights in the background" className="w-full h-auto object-cover rounded-md" height="300" src="https://storage.googleapis.com/a1aa/image/5e544e30-7827-4039-9d57-7fbab3122142.jpg" width="600" />
            <div aria-hidden="true" className="absolute inset-0 flex flex-col justify-center items-start px-6 pointer-events-none">
              <h2 className="text-white font-extrabold text-5xl md:text-6xl leading-none" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>
                NIKE
              </h2>
              <p className="text-white text-xs tracking-widest mt-[-6px] mb-1">
                N I T R O C H A R G E
              </p>
              <p className="text-white text-xs font-semibold leading-4">
                IT PROCHARGE
                <br />
                BATTLE
              </p>
              <p className="text-white text-xs mt-1">
                $ 299.99
              </p>
              <button aria-label="Shop Now" className="mt-2 bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Services Row --> */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div aria-label="Free Shipping service" className="border border-gray-100 rounded-md p-6 flex flex-col items-center text-center">
            <i className="fas fa-truck text-green-600 text-2xl mb-3">
            </i>
            <h3 className="font-semibold text-gray-700 text-sm mb-1">
              Free Shipping
            </h3>
            <p className="text-gray-400 text-xs leading-tight">
              Free shipping on all US order or order above $200
            </p>
          </div>
          <div aria-label="24x7 Support service" className="border border-gray-100 rounded-md p-6 flex flex-col items-center text-center">
            <i className="fas fa-seedling text-green-600 text-2xl mb-3">
            </i>
            <h3 className="font-semibold text-gray-700 text-sm mb-1">
              24X7 Support
            </h3>
            <p className="text-gray-400 text-xs leading-tight">
              Contact us 24 hours a day, 7 days a week
            </p>
          </div>
          <div aria-label="30 Days Return service" className="border border-gray-100 rounded-md p-6 flex flex-col items-center text-center">
            <i className="fas fa-percent text-green-600 text-2xl mb-3">
            </i>
            <h3 className="font-semibold text-gray-700 text-sm mb-1">
              30 Days Return
            </h3>
            <p className="text-gray-400 text-xs leading-tight">
              Simply return it within 30 days for an exchange
            </p>
          </div>
          <div aria-label="Payment Secure service" className="border border-gray-100 rounded-md p-6 flex flex-col items-center text-center">
            <i className="fas fa-dollar-sign text-green-600 text-2xl mb-3">
            </i>
            <h3 className="font-semibold text-gray-700 text-sm mb-1">
              Payment Secure
            </h3>
            <p className="text-gray-400 text-xs leading-tight">
              Contact us 24 hours a day, 7 days a week
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
