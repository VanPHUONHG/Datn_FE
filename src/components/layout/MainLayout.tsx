import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main className='mt-10'>
        <Outlet />
      </main>

      <Footer />

    </div>
  );
};

export default MainLayout;
