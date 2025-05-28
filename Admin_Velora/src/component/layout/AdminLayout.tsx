import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from '../common/Header'
import AdminSidebar from '../common/Sidebar'

const AdminLayout = () => {
  return (
    <main className='bg-[#f6f9ff]'>
        <AdminHeader/>
        <div className='flex'>
        <AdminSidebar/>
        <div className='content w-4/5 p-6'>
            <div className='bg-white w-full p-5'>
            <Outlet/>
            </div>
        </div>
        </div>
    </main>
  )
}

export default AdminLayout