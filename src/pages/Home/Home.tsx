import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiUrl = import.meta.env.VITE_API_URL;  // Lấy URL từ .env

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/data-endpoint`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>Home</div>
  );
}

export default Home;
