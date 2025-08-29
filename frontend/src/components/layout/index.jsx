import React from 'react';
import { Outlet } from 'react-router';
import { Header } from './header';
import { Footer } from './footer';

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
