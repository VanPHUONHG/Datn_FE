import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
   <nav aria-label="Breadcrumb" className="text-xs text-gray-500 mb-6">
    <ol className="flex space-x-1 list-none">
     <li>
          <Link to="/" className="text-blue-600 hover:underline">

      Home
      </Link>
     </li>
     <li>
      /
     </li>
     <li className="font-semibold text-gray-900">
      Cart
     </li>
    </ol>
   </nav>
   <h1 className="text-xs text-gray-500 mb-6">
    Cart
   </h1>
   <div className="flex flex-col lg:flex-row gap-8">
    <aside className="w-full lg:w-1/4 bg-gray-50 border border-gray-200 rounded-md p-4 text-xs text-gray-600">
     <h2 className="font-semibold text-gray-900 mb-3">
      Summary
     </h2>
     <div className="mb-4">
      <h3 className="font-semibold text-gray-900 mb-1">
       Estimate Shipping
      </h3>
      <p className="text-[10px] text-gray-400 mb-3">
       Enter your destination to get a shipping estimate
      </p>
      <label className="block mb-1" >
       Country
      </label>
      <select className="w-full border border-gray-300 rounded-sm text-xs text-gray-600 p-1 mb-3" id="country" name="country">
       <option>
        Country
       </option>
      </select>
      <label className="block mb-1" >
       State/Province
      </label>
      <select className="w-full border border-gray-300 rounded-sm text-xs text-gray-600 p-1" id="state" name="state">
       <option>
        State/Province
       </option>
      </select>
     </div>
     <div className="text-[11px] text-gray-900">
      <div className="flex justify-between mb-1">
       <span>
        Sub-Total
       </span>
       <span>
        $182.00
       </span>
      </div>
      <div className="flex justify-between mb-1">
       <span>
        Delivery Charges
       </span>
       <span>
        $32.41
       </span>
      </div>
      <div className="flex justify-between mb-1">
       <span>
        Coupon Discount
       </span>
       <button className="text-green-600 font-semibold text-xs hover:underline">
        Apply Discount
       </button>
      </div>
      <div className="flex justify-between font-semibold mt-2">
       <span>
        Total Amount
       </span>
       <span>
        $214.40
       </span>
      </div>
     </div>
    </aside>
    <section className="flex-1">
     <table className="w-full text-xs text-gray-600 border-collapse border border-gray-200 mb-4">
      <thead>
       <tr className="border-b border-gray-200">
        <th className="py-2 pl-2 text-left">
         Product
        </th>
        <th className="py-2 text-left">
         Price
        </th>
        <th className="py-2 text-center">
         Quantity
        </th>
        <th className="py-2 text-left">
         Total
        </th>
        <th className="py-2 pr-2 text-center">
         Action
        </th>
       </tr>
      </thead>
      <tbody>
       <tr className="border-b border-gray-200">
        <td className="py-2 pl-2 flex items-center space-x-2">
         <img alt="Women's sneaker HAZU Fuse black and white side view" className="w-10 h-7 object-contain" height="30" src="https://storage.googleapis.com/a1aa/image/c58f6c14-b2b9-4414-047c-6c531c740b87.jpg" width="40"/>
         <span className="text-[11px] text-gray-900">
          Women's sneaker HAZU Fuse
         </span>
        </td>
        <td className="py-2">
         $20
        </td>
        <td className="py-2 text-center">
         <button className="px-1 text-gray-400 select-none">
          -
         </button>
         <span className="px-2">
          1
         </span>
         <button className="px-1 text-gray-400 select-none">
          +
         </button>
        </td>
        <td className="py-2">
         $20
        </td>
        <td className="py-2 pr-2 text-center cursor-pointer text-gray-400 hover:text-gray-700">
         <i className="fas fa-trash-alt">
         </i>
        </td>
       </tr>
       <tr className="border-b border-gray-200">
        <td className="py-2 pl-2 flex items-center space-x-2">
         <img alt="Kopa dorsi training red and black sports shoe side view" className="w-10 h-7 object-contain" height="30" src="https://storage.googleapis.com/a1aa/image/ba280ff9-ab00-4aa3-d871-7ab62705cf59.jpg" width="40"/>
         <span className="text-[11px] text-gray-900">
          Kopa dorsi training
         </span>
        </td>
        <td className="py-2">
         $80
        </td>
        <td className="py-2 text-center">
         <button className="px-1 text-gray-400 select-none">
          -
         </button>
         <span className="px-2">
          1
         </span>
         <button className="px-1 text-gray-400 select-none">
          +
         </button>
        </td>
        <td className="py-2">
         $80
        </td>
        <td className="py-2 pr-2 text-center cursor-pointer text-gray-400 hover:text-gray-700">
         <i className="fas fa-trash-alt">
         </i>
        </td>
       </tr>
       <tr>
        <td className="py-2 pl-2 flex items-center space-x-2">
         <img alt="Kopa dorsi black and white sneaker side view" className="w-10 h-7 object-contain" height="30" src="https://storage.googleapis.com/a1aa/image/a6f8772f-aae4-4495-9d3c-5cfa6d62d378.jpg" width="40"/>
         <span className="text-[11px] text-gray-900">
          Kopa dorsi
         </span>
        </td>
        <td className="py-2">
         $82
        </td>
        <td className="py-2 text-center">
         <button className="px-1 text-gray-400 select-none">
          -
         </button>
         <span className="px-2">
          1
         </span>
         <button className="px-1 text-gray-400 select-none">
          +
         </button>
        </td>
        <td className="py-2">
         $82
        </td>
        <td className="py-2 pr-2 text-center cursor-pointer text-gray-400 hover:text-gray-700">
         <i className="fas fa-trash-alt">
         </i>
        </td>
       </tr>
      </tbody>
     </table>
     <div className="flex justify-between text-xs text-gray-600">
      <a className="hover:underline" href="#">
       Continue Shopping
      </a>
      <button className="bg-green-600 text-white text-[11px] px-3 py-1 rounded">
       Check Out
      </button>
     </div>
    </section>
   </div>
   <section aria-label="Product cards" className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
    <div className="relative border border-gray-200 rounded-md p-2">
     <span className="absolute top-2 left-2 bg-red-600 text-white text-[9px] font-semibold px-1 rounded">
      SALE
     </span>
     <img alt="Black Nike shoes side view on white background" className="w-full h-28 object-contain mb-2" height="120" src="https://storage.googleapis.com/a1aa/image/5c507416-549d-4f94-2155-871ed264a97c.jpg" width="200"/>
     <p className="text-[10px] text-gray-600 mb-0.5">
      Black Nike
     </p>
     <p className="text-[11px] font-semibold text-gray-900 mb-0.5">
      Mixed Hubs Barnes Pack
     </p>
     <p className="text-[11px] font-semibold text-gray-900">
      $59.00
      <span className="line-through text-gray-400 text-[9px] font-normal">
       $71.00
      </span>
     </p>
    </div>
    <div className="relative border border-gray-200 rounded-md p-2">
     <span className="absolute top-2 left-2 bg-red-600 text-white text-[9px] font-semibold px-1 rounded">
      SALE
     </span>
     <img alt="Black Nike shoes side view on white background" className="w-full h-28 object-contain mb-2" height="120" src="https://storage.googleapis.com/a1aa/image/5c507416-549d-4f94-2155-871ed264a97c.jpg" width="200"/>
     <p className="text-[10px] text-gray-600 mb-0.5">
      Cookie
     </p>
     <p className="text-[11px] font-semibold text-gray-900 mb-0.5">
      Multi Grain Combo Cookies
     </p>
     <p className="text-[11px] font-semibold text-gray-900">
      $50.00
      <span className="line-through text-gray-400 text-[9px] font-normal">
       $55.00
      </span>
     </p>
    </div>
    <div className="border border-gray-200 rounded-md p-2">
     <img alt="White Nike shoes side view on white background" className="w-full h-28 object-contain mb-2" height="120" src="https://storage.googleapis.com/a1aa/image/49afb353-fe70-45fb-8c60-31798edd8e99.jpg" width="200"/>
     <p className="text-[10px] text-gray-600 mb-0.5">
      Tools
     </p>
     <p className="text-[11px] font-semibold text-gray-900 mb-0.5">
      Fresh Mango Juice Pack
     </p>
     <p className="text-[11px] font-semibold text-gray-900">
      $55.00
      <span className="line-through text-gray-400 text-[9px] font-normal">
       $64.00
      </span>
     </p>
    </div>
    <div className="relative border border-gray-200 rounded-md p-2">
     <span className="absolute top-2 left-2 bg-red-600 text-white text-[9px] font-semibold px-1 rounded">
      SALE
     </span>
     <img alt="Black Nike shoes side view on white background" className="w-full h-28 object-contain mb-2" height="120" src="https://storage.googleapis.com/a1aa/image/5c507416-549d-4f94-2155-871ed264a97c.jpg" width="200"/>
     <p className="text-[10px] text-gray-600 mb-0.5">
      Black Nike
     </p>
     <p className="text-[11px] font-semibold text-gray-900 mb-0.5">
      Cotton Velva Fresh Pouch
     </p>
     <p className="text-[11px] font-semibold text-gray-900">
      $55.00
      <span className="line-through text-gray-400 text-[9px] font-normal">
       $71.00
      </span>
     </p>
    </div>
    <div className="relative border border-gray-200 rounded-md p-2">
     <span className="absolute top-2 left-2 bg-green-600 text-white text-[9px] font-semibold px-1 rounded">
      NEW
     </span>
     <img alt="Black and gold Nike shoes side view on white background" className="w-full h-28 object-contain mb-2" height="120" src="https://storage.googleapis.com/a1aa/image/fc62de72-ec06-44ae-ec0d-c3cf4f2ea505.jpg" width="200"/>
     <p className="text-[10px] text-gray-600 mb-0.5">
      Tools
     </p>
     <p className="text-[11px] font-semibold text-gray-900 mb-0.5">
      Stick Filter Mosquito Magnet
     </p>
     <p className="text-[11px] font-semibold text-gray-900">
      $50.00
      <span className="line-through text-gray-400 text-[9px] font-normal">
       $61.00
      </span>
     </p>
    </div>
   </section>
  </div>

    </div>
  )
}

export default Cart
