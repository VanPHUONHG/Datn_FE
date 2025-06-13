// src/pages/AllProducts.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from 'interface/product';
import { getAll } from 'services/allProduct/allproduct.service';

function AllProducts() {
  const [data, setData] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<[number, number] | null>(null);

  // ✅ State mở/đóng các section lọc
  const [showPriceFilter, setShowPriceFilter] = useState<boolean>(false);
  const [showSizeFilter, setShowSizeFilter] = useState<boolean>(false);

  const handleSizeChange = (size: string) => {
    setSelectedSize(size === selectedSize ? null : size);
  };

  const handlePriceChange = (min: number, max: number) => {
    setSelectedPriceRange(
      selectedPriceRange?.[0] === min && selectedPriceRange?.[1] === max
        ? null
        : [min, max]
    );
  };

  const buildQueryString = () => {
    const params = new URLSearchParams();
    if (selectedSize) params.append('size', selectedSize);
    if (selectedPriceRange) {
      params.append('minPrice', selectedPriceRange[0].toString());
      params.append('maxPrice', selectedPriceRange[1].toString());
    }
    return params.toString();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = buildQueryString();
        const result = await getAll(query);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedSize, selectedPriceRange]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex gap-6">
      {/* Sidebar bộ lọc */}
      <div className="w-64 space-y-4">
        {/* Lọc giá */}
        <div>
          <h3
            className="font-semibold mb-2 cursor-pointer flex justify-between items-center"
            onClick={() => setShowPriceFilter(!showPriceFilter)}
          >
            Lọc Giá
            <span>{showPriceFilter ? '▲' : '▼'}</span>
          </h3>
          {showPriceFilter && (
            <div className="space-y-1">
              {[
                { label: 'Dưới 500,000₫', min: 0, max: 500000 },
                { label: '500,000₫ - 1,000,000₫', min: 500000, max: 1000000 },
                { label: '1,000,000₫ - 3,000,000₫', min: 1000000, max: 3000000 },
                { label: 'Trên 3,000,000₫', min: 3000000, max: 1000000000 },
              ].map((range, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={
                      selectedPriceRange?.[0] === range.min &&
                      selectedPriceRange?.[1] === range.max
                    }
                    onChange={() => handlePriceChange(range.min, range.max)}
                  />
                  {range.label}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Kích thước */}
        <div>
          <h3
            className="font-semibold mb-2 cursor-pointer flex justify-between items-center"
            onClick={() => setShowSizeFilter(!showSizeFilter)}
          >
            Kích thước
            <span>{showSizeFilter ? '▲' : '▼'}</span>
          </h3>
          {showSizeFilter && (
            <div className="space-y-1">
              {['37','38', '39', '40','41','42'].map((size) => (
                <label key={size} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedSize === size}
                    onChange={() => handleSizeChange(size)}
                  />
                  {size}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.map((product) => (
            <Link
              to={`/product/${product._id}`}
              key={product._id}
              className="border border-gray-200 rounded-md p-3 flex flex-col items-center text-center shadow hover:shadow-lg transition hover:scale-105"
            >
              <img
                src={product.images?.[0]}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <div className="text-sm text-gray-500">{product.origin}</div>
              <div className="flex gap-2 items-center mt-1">
                <div className="text-red-600 font-bold">
                  {product.discount_price.toLocaleString()}₫
                </div>
                <div className="text-gray-400 line-through text-sm">
                  {product.price.toLocaleString()}₫
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
