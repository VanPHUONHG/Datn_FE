// src/pages/AllProducts.tsx
import React, { useEffect, useState } from 'react';
import { getAllProducts } from 'services/product/product.service';
import { Link } from 'react-router-dom';
import type { Product } from 'interface/product';

function AllProducts() {
  const [data, setData] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllProducts();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      <h1 className="text-2xl font-bold mb-4">Tất cả sản phẩm</h1>
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
  );
}

export default AllProducts;
