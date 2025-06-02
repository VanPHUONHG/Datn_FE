import React, { memo } from 'react'

const ServicesRow = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[
          {
            label: "Free Shipping",
            icon: "fas fa-truck",
            desc: "Free shipping on all US order or order above $200",
            aria: "Free Shipping service",
          },
          {
            label: "24X7 Support",
            icon: "fas fa-seedling",
            desc: "Contact us 24 hours a day, 7 days a week",
            aria: "24x7 Support service",
          },
          {
            label: "30 Days Return",
            icon: "fas fa-percent",
            desc: "Simply return it within 30 days for an exchange",
            aria: "30 Days Return service",
          },
          {
            label: "Payment Secure",
            icon: "fas fa-dollar-sign",
            desc: "Contact us 24 hours a day, 7 days a week",
            aria: "Payment Secure service",
          },
        ].map((item, index) => (
          <div
            key={index}
            aria-label={item.aria}
            className="border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center shadow-sm transition duration-300 ease-in-out hover:shadow-md hover:border-green-600"
          >
            <i className={`${item.icon} text-green-600 text-2xl mb-3`}></i>
            <h3 className="font-semibold text-gray-700 text-sm mb-1">
              {item.label}
            </h3>
            <p className="text-gray-400 text-xs leading-tight">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(ServicesRow);
