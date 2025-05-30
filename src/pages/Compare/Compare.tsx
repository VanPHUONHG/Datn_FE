import React from "react";

const Compare = () => {
  return ( 
    <div className="overflow-x-auto w-full max-w-7xl mx-auto">
       <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-2 mb-10 ">
        <span className="text-gray-500 font-semibold text-sm ml-12">Compare</span>
      <div className="flex items-center gap-2 text-gray-500 mr-2.5">
        <a href="#" className="text-sm hover:text-green-500">Home</a>
        <span className="text-gray-400 text-sm">›</span>
        <span className="text-green-500 font-medium text-sm">Compare</span>
      </div>
      </div>
      <div className="px-4">
      <table className="w-full border border-gray-200 text-left text-xs sm:text-sm px-4">
        <tbody>
          {/* Product Image Row */}
          <tr>
            <td className="border border-gray-200 p-3 font-semibold text-gray-700">Product Image</td>
            <td className="border border-gray-200 p-3 relative">
              <img
                src="https://storage.googleapis.com/a1aa/image/fd3fafa1-7838-4b14-1780-912f18f5a36b.jpg"
                alt="Product 1"
                className="mx-auto"
                width={100}
                height={80}
              />
              <p className="absolute top-1 right-2 text-gray-400 hover:text-gray-600 text-base">X</p>
            </td>
            <td className="border border-gray-200 p-3 relative">
              <img
                src="https://storage.googleapis.com/a1aa/image/1ab6025d-fc49-403f-1d29-cce59cb2c1dc.jpg"
                alt="Product 2"
                className="mx-auto"
                width={100}
                height={80}
              />
              <p className="absolute top-1 right-2 text-gray-400 hover:text-gray-600 text-base">X</p>
            </td>
            <td className="border border-gray-200 p-3 relative">
              <img
                src="https://storage.googleapis.com/a1aa/image/105125dc-5e72-4054-fe06-226dc83f8625.jpg"
                alt="Product 3"
                className="mx-auto"
                width={100}
                height={80}
              />
              <p className="absolute top-1 right-2 text-gray-400 hover:text-gray-600 text-base">X</p>
            </td>
          </tr>

          {/* Name Row */}
          <tr>
            <td className="border border-gray-200 p-3 font-semibold text-gray-700">Name</td>
        <td className="border border-gray-200 p-3 text-gray-500 ">Long lasting perfume</td>
            <td className="border border-gray-200 p-3 text-gray-500">Men's stylish printed shirt</td>
            <td className="border border-gray-200 p-3 text-gray-500">Blue berry</td>
          </tr>

          {/* Category Row */}
          <tr>
              <td className="border border-gray-200 p-3 font-semibold text-gray-700">Category</td>
              <td className="border border-gray-200 p-3 text-gray-500">perfume</td>
              <td className="border border-gray-200 p-3 text-gray-500">men's wear</td>
              <td className="border border-gray-200 p-3 text-gray-500">Fresh Fruits</td>
          </tr>

         {/* Ratings Row */}
<tr>
  <td className="border border-gray-200 p-3 font-semibold text-gray-700">Ratings</td>

  <td className="border border-gray-200 p-3">
    <div className="flex items-center space-x-1">
      <div className="text-orange-500 flex">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star-half-alt" />
      </div>
      <span className="text-gray-400 whitespace-nowrap">(20.1k reviews)</span>
    </div>
  </td>

  <td className="border border-gray-200 p-3">
    <div className="flex items-center space-x-1">
      <div className="text-orange-500 flex">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star-half-alt" />
      </div>
      <span className="text-gray-400 whitespace-nowrap">(8k reviews)</span>
    </div>
  </td>

  <td className="border border-gray-200 p-3">
    <div className="flex items-center space-x-1">
      <div className="text-orange-500 flex">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
      </div>
      <span className="text-gray-400 whitespace-nowrap">(4k reviews)</span>
    </div>
  </td>
</tr>


          {/* Availability */}
          <tr>
            <td className="border border-gray-200 p-3 font-semibold text-gray-700">Availability</td>
            <td className="border border-gray-200 p-3 text-red-400">Out Of Stock</td>
            <td className="border border-gray-200 p-3 text-green-500">Available</td>
            <td className="border border-gray-200 p-3 text-red-400">Out Of Stock</td>
          </tr>

          {/* Location */}
          <tr>
            <td className="border border-gray-200 p-3 font-semibold text-gray-700">Location</td>
            <td className="border border-gray-200 p-3 text-gray-500">in Store, Online</td>
            <td className="border border-gray-200 p-3 text-gray-500">Online</td>
            <td className="border border-gray-200 p-3 text-gray-500">Online</td>
          </tr>

          {/* Brand */}
          <tr>
            <td className="border border-gray-200 p-3 font-semibold text-gray-700">Brand</td>
            <td className="border border-gray-200 p-3 text-gray-500">Bhisma Organics</td>
            <td className="border border-gray-200 p-3 text-gray-500">Bhisma Organics</td>
            <td className="border border-gray-200 p-3 text-gray-500">Bhisma Organics</td>
          </tr>

          {/* SKU */}
          <tr>
            <td className="border border-gray-200 p-3 font-semibold text-gray-700">SKU</td>
            <td className="border border-gray-200 p-3 text-gray-500">556515</td>
            <td className="border border-gray-200 p-3 text-gray-500">24423</td>
            <td className="border border-gray-200 p-3 text-gray-500">25458</td>
          </tr>

          {/* Quantity */}
          <tr>
            <td className="border border-gray-200 p-3 font-semibold text-gray-700">Quantity</td>
            <td className="border border-gray-200 p-3 text-gray-500">1 Pack</td>
            <td className="border border-gray-200 p-3 text-gray-500">1 Pack</td>
            <td className="border border-gray-200 p-3 text-gray-500">1 Pack</td>
          </tr>

          {/* Weight */}
          <tr>
            <td className="border border-gray-200 p-3 font-semibold text-gray-700">Weight</td>
            <td className="border border-gray-200 p-3 text-gray-500">5 pcs</td>
            <td className="border border-gray-200 p-3 text-gray-500">1 pcs</td>
            <td className="border border-gray-200 p-3 text-gray-500">500 g</td>
          </tr>

          {/* Description */}
          <tr>
            <td className="border border-gray-200 p-3 font-semibold text-gray-700 align-top">Description</td>
            <td className="border border-gray-200 p-3 max-w-[160px] text-gray-500">
              Recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </td>
            <td className="border border-gray-200 p-3 max-w-[160px] text-gray-500">
              Recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </td>
            <td className="border border-gray-200 p-3 max-w-[160px] text-gray-500">
              Recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Compare;
