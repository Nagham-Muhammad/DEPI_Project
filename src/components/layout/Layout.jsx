import React from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}