import React from 'react'

const Order_History = () => {
  return (
    <div>

 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <header className="flex justify-between items-center py-4 text-xs text-gray-400">
      <div>Order History</div>
      <nav className="flex space-x-1">
        <a href="#" className="hover:underline">Home</a>
        <span>/</span>
        <a href="#" className="hover:underline text-gray-600 font-medium">My Orders</a>
      </nav>
    </header>

    <main className="text-center mt-6 mb-12">
      <h1 className="text-gray-600 font-semibold text-lg">
        Product <span className="text-green-600">Order History</span>
      </h1>
      <p className="text-xs text-gray-400 mt-1">Your product Order is our first priority</p>
    </main>

    <section className="mb-12">
      <div className="flex justify-between items-center mb-3 text-xs font-semibold text-gray-500 uppercase">
        <div>PENDING ORDERS</div>
        <button
          type="button"
          className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded hover:bg-green-700"
        >
          Shop Now
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left border border-gray-200">
          <thead className="bg-white border-b border-gray-200">
            <tr>
              <th className="py-2 px-3 border-r border-gray-200 font-normal">Orders ID</th>
              <th className="py-2 px-3 border-r border-gray-200 font-normal">Shipping</th>
              <th className="py-2 px-3 border-r border-gray-200 font-normal">Quantity</th>
              <th className="py-2 px-3 border-r border-gray-200 font-normal">Date</th>
              <th className="py-2 px-3 border-r border-gray-200 font-normal">Price</th>
              <th className="py-2 px-3 border-r border-gray-200 font-normal">Status</th>
              <th className="py-2 px-3 font-normal">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-200">
              <td className="py-2 px-3 border-r border-gray-200">47384</td>
              <td className="py-2 px-3 border-r border-gray-200">free</td>
              <td className="py-2 px-3 border-r border-gray-200">3</td>
              <td className="py-2 px-3 border-r border-gray-200">23/01/2025</td>
              <td className="py-2 px-3 border-r border-gray-200">$106.8</td>
              <td className="py-2 px-3 border-r border-gray-200 text-green-500">Pending</td>
              <td className="py-2 px-3 flex space-x-2">
                <button
                  type="button"
                  className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded hover:bg-green-700"
                >
                  View
                </button>
                <button
                  type="button"
                  className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded hover:bg-red-700"
                >
                  Cancel
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <div className="mb-3 text-xs font-semibold text-gray-500 uppercase">COMPLETE ORDERS</div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left border border-gray-200">
          <thead className="bg-white border-b border-gray-200">
            <tr>
              <th className="py-2 px-3 border-r border-gray-200 font-normal">Orders ID</th>
              <th className="py-2 px-3 border-r border-gray-200 font-normal">Shipping</th>
              <th className="py-2 px-3 border-r border-gray-200 font-normal">Quantity</th>
              <th className="py-2 px-3 border-r border-gray-200 font-normal">Date</th>
              <th className="py-2 px-3 border-r border-gray-200 font-normal">Price</th>
              <th className="py-2 px-3 border-r border-gray-200 font-normal">Status</th>
              <th className="py-2 px-3 font-normal">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-200">
              <td className="py-2 px-3 border-r border-gray-200">63510</td>
              <td className="py-2 px-3 border-r border-gray-200">free</td>
              <td className="py-2 px-3 border-r border-gray-200">3</td>
              <td className="py-2 px-3 border-r border-gray-200">23/01/2025</td>
              <td className="py-2 px-3 border-r border-gray-200">$194.4</td>
              <td className="py-2 px-3 border-r border-gray-200 text-red-300">Completed</td>
              <td className="py-2 px-3">
                <button
                  type="button"
                  className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded hover:bg-green-700"
                >
                  View
                </button>
              </td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="py-2 px-3 border-r border-gray-200">31024</td>
              <td className="py-2 px-3 border-r border-gray-200">free</td>
              <td className="py-2 px-3 border-r border-gray-200">2</td>
              <td className="py-2 px-3 border-r border-gray-200">23/01/2025</td>
              <td className="py-2 px-3 border-r border-gray-200">$181.2</td>
              <td className="py-2 px-3 border-r border-gray-200 text-red-300">Completed</td>
              <td className="py-2 px-3">
                <button
                  type="button"
                  className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded hover:bg-green-700"
                >
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>


    </div>
  )
}

export default Order_History