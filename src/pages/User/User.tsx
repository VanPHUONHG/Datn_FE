import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { getUserById } from 'services/user/user.service';
import type { IUser } from 'types/user';
import { Spin, message } from 'antd';

const User = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
          message.error("Không tìm thấy thông tin người dùng");
          return;
        }
        const parsedUser = JSON.parse(storedUser);
        const userId = parsedUser._id;
        const userData = await getUserById(userId);
        setUser(userData);
      } catch {
        message.error("Lỗi khi tải thông tin người dùng");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <Spin tip="Đang tải..." className="flex justify-center p-10" />;
  if (!user) return <div className="text-center text-red-500">Không tìm thấy người dùng</div>;

  return (
    <div className="bg-gray-50 font-sans text-sm text-gray-800 h-screen flex">
      <div className="max-w-[1250px] w-full mx-auto flex border border-gray-200 rounded shadow-sm overflow-hidden">

        {/* Sidebar */}
        <aside className="flex-shrink-0 w-60 bg-gray-100 border-r border-gray-200 p-5 flex flex-col overflow-y-auto">
          {/* Avatar & Name */}
           <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 text-xl">
                            <img src="https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-image-700-205124837.jpg" alt=""  className='rounded-full'/>
                        </div>
           <div className="flex flex-col">
                <Link to='/user/profile'>
                  <span className="font-semibold truncate max-w-[130px]">{user.full_name}</span>
                </Link>
              <button className="mt-0.5 text-xs text-gray-500 hover:text-gray-900 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M16.768 4.768a2 2 0 112.828 2.828L7.5 19.5H4v-3.5L16.768 4.768z" />
                </svg>
                Sửa Hồ Sơ
              </button>
            </div>
          </div>

          {/* User Menu */}

          {/* Sidebar menu */}
          <nav className="flex flex-col gap-4 text-gray-700">
            {/* <button className="flex items-center gap-3 text-orange-500 font-semibold hover:underline">...</button>
            <button className="flex items-center gap-3 text-blue-600 hover:underline">...</button> */}
            <button onClick={() => navigate('/user/order')} className="flex items-center gap-3 text-blue-600 hover:underline">Đơn Mua</button>
            <Link to={'/user/coupon'}>
              <button className="flex items-center gap-3 text-gray-700 hover:underline">Kho Voucher</button>
            </Link>
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
          <div className="flex-grow px-6 py-4">
            <Outlet context={user} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default User;
