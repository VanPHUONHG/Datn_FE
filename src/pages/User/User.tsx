import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const User = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-gray-50 font-sans text-sm text-gray-800 h-screen flex">
            <div className="max-w-[1250px] w-full mx-auto flex border border-gray-200 rounded shadow-sm overflow-hidden">

                {/* Sidebar */}
                <aside className="flex-shrink-0 w-60 bg-gray-100 border-r border-gray-200 p-5 flex flex-col overflow-y-auto">
                    {/* Avatar & Name */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A7.966 7.966 0 0112 15c2.21 0 4.21.9 5.656 2.344m-11.312 0A8 8 0 1112 3a8 8 0 01-6.879 14.804z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold truncate max-w-[130px]">nguynvnphng...</span>
                            <button className="mt-0.5 text-xs text-gray-500 hover:text-gray-900 flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M16.768 4.768a2 2 0 112.828 2.828L7.5 19.5H4v-3.5L16.768 4.768z" />
                                </svg>
                                Sửa Hồ Sơ
                            </button>
                        </div>
                    </div>

                    {/* Sidebar menu */}
                    <nav className="flex flex-col gap-4 text-gray-700">
                        <button className="flex items-center gap-3 text-orange-500 font-semibold hover:underline">...</button>
                        <button className="flex items-center gap-3 text-blue-600 hover:underline">...</button>
                        <button onClick={() => navigate('/user/order')} className="flex items-center gap-3 text-blue-600 hover:underline">Đơn Mua</button>
                        <button className="flex items-center gap-3 text-gray-700 hover:underline">Kho Voucher</button>
                        <button className="flex items-center gap-3 text-yellow-500 hover:underline">Shopee Xu</button>
                        <button className="flex items-center gap-2 text-gray-800 hover:underline">
                            <img src="https://cf.shopee.vn/file/10a1587f6b2853231a9278db30f08c83" alt="promo" className="w-6 h-6 rounded-full" />
                            25.6 Lương Về Sale To
                            <span className="ml-1 bg-red-600 text-white text-xs font-semibold px-1 rounded-sm">New</span>
                        </button>
                    </nav>
                </aside>

                {/* Main content */}
                <main className="flex-1 flex flex-col bg-white">
                    {/* Content từ các route con */}
                    <div className="flex-grow px-6 py-4">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default User;
