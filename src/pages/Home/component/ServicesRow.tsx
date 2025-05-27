import React, { memo } from 'react'

const ServicesRow = () => {
  return (
    <div >
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
  )
}

export default memo(ServicesRow)