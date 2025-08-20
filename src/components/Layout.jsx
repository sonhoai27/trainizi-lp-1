import React from 'react';
import { Outlet } from 'react-router-dom';
import CallToBanner from './CallToBanner';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-izi-50 font-sans text-gray-900">
      <CallToBanner />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;