const API_URL = import.meta.env.VITE_API_URL;

export const getAll = async (queryString = '') => {
  const res = await fetch(`${API_URL}/products?${queryString}`);

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data = await res.json();
  return data.products;
};
