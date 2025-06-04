import type { Product } from 'interface/product';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCategories, getProductsByCategory } from 'services/category/category.service';
import type { ICategory } from 'types/category';

const ProductInCategory = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAnimation, setShowAnimation] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    if (!categoryId) return;

    setLoading(true);
    setProducts([]);
    setShowAnimation(false);

    getProductsByCategory(categoryId)
      .then((data) => {
        setProducts(data);
        if (data.length > 0) {
          setTimeout(() => setShowAnimation(true), 100);
        }
      })
      .catch((error) => {
        console.error('Lỗi tải sản phẩm:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);



useEffect(() => {
  const fetchCategoryName = async () => {
    try {
      const categories = await getCategories();
      const matchedCategory = categories.find(
        (cat: ICategory) => cat._id === categoryId
      );
      if (matchedCategory) {
        setCategoryName(matchedCategory.name);
      }
    } catch (error) {
      console.error("Lỗi lấy danh mục:", error);
    } finally {
      setLoading(false);
    }
  };

  if (categoryId) {
    fetchCategoryName();
  }
}, [categoryId]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
  <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Sản phẩm theo danh mục {categoryName && <span className="text-blue-600">"{categoryName}"</span>}
      </h2>
      {loading ? (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow p-4 animate-pulse h-[300px] flex flex-col justify-between"
            >
              <div className="bg-gray-200 h-40 w-full rounded mb-4" />
              <div className="bg-gray-200 h-4 w-3/4 rounded mb-2" />
              <div className="bg-gray-200 h-4 w-1/2 rounded" />
            </div>
          ))}
        </div>
      ) : products.length === 0 ? (
        <p className="text-center text-red-500 text-lg font-medium">Không có sản phẩm nào.</p>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={product._id}
              className={`transition-all duration-700 transform ${
                showAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link
                to={`/product/${product._id}`}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:scale-[1.03] p-4 flex flex-col items-center text-center"
              >
                <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-lg bg-gray-50 mb-4">
                  <img
                    src={product.images?.[0]}
                    alt={product.name}
                    loading="lazy"
                    className="object-contain h-full transition duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 truncate w-full">{product.name}</h3>
                <div className="text-sm text-gray-500">{product.origin}</div>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <div className="text-red-600 font-bold text-lg">
                    {product.discount_price.toLocaleString()}₫
                  </div>
                  <div className="text-gray-400 line-through text-sm">
                    {product.price.toLocaleString()}₫
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductInCategory;
