import React, { memo } from 'react'

const Menu = () => {
    return (
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-7xl mx-auto" style={{ minHeight: '140px' }}>
            {[
                { name: 'Giày Nike', items: 320, discount: 30, image: '684e5337-0890-4770-df21-2ae010731fa3.jpg' },
                { name: 'Giày Nam', items: 65, image: '0a672e0e-c694-4396-7ec8-a68514db101c.jpg' },
                { name: 'Giày Nữ', items: 545, discount: 15, image: '0a4574bf-04f8-4087-6870-c45596ad4abf.jpg' },
                { name: 'Giày Boot', items: 48, discount: 10, image: '991e2dbd-f7e3-4231-85bc-81ae0f7f3ac3.jpg' },
                { name: 'Dép Cao', items: 98, image: '927539e2-30b7-4f9e-e56a-09bbca86f2aa.jpg' },
                { name: 'Giày Trẻ Em', items: 234, image: 'c9f4fa67-505d-4dde-4537-ba346afdb26b.jpg' }
            ].map((category, index) => (
                <div
                    key={index}
                    className="group flex flex-col items-center bg-white border-2 border-transparent hover:border-teal-500 rounded-xl p-4 w-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-xl hover:ring-2 hover:ring-teal-500"
                >
                    <div className="relative">
                        <img
                            alt={`${category.name} icon`}
                            className="mx-auto h-12 w-12 object-contain"
                            src={`https://storage.googleapis.com/a1aa/image/${category.image}`}
                        />
                        {category.discount && (
                            <span className="absolute top-0 right-0 bg-[#3a8a7d] text-white text-[10px] font-semibold rounded px-1 shadow-md">
                                {category.discount}%
                            </span>
                        )}
                    </div>
                    <p className="text-xs text-center text-[#3a4756] mt-2 font-semibold group-hover:text-teal-600 transition-colors duration-300">
                        {category.name}
                    </p>
                    <p className="text-[9px] text-center text-gray-400 mt-1 group-hover:text-gray-600 transition-colors duration-300">
                        {category.items} items
                    </p>
                </div>
            ))}
        </div>
    )
}

export default memo(Menu)
