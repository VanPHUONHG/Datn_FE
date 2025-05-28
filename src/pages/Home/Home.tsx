import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getAllProducts } from 'services/product/product.service';
import type { Product } from 'types/product';
import Banner from './component/Banner';
import OutstandingProducts from './component/OutstandingProducts';
import Menu from './component/Menu';
import NewArrivals from './component/NewArrivals';
import ServicesRow from './component/ServicesRow';

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
    <>
      <Banner />
      <Menu/>
      <OutstandingProducts />
      <NewArrivals />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.map((product) => (
            <div key={product.product_id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-gray-600 mt-1">{product.price}₫</p>
            </div>
          ))}
        </div>

      </div>
      <ServicesRow />
    </>

  );
}

export default Home;
