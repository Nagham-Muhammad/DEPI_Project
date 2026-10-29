import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoOption from '../assets/images/LogoOption.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm px-6 md:px-8 py-4 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center">
        <div className="w-28 h-16 flex items-center justify-center font-bold">
          <img 
            src={LogoOption}
            alt="Logo" 
            className="h-29 w-29 object-contain" 
          />
        </div>
      </div>

      <ul className="hidden md:flex items-center space-x-10 lg:space-x-18 font-semibold text-lg">
        <NavLink to="/" className={({ isActive }) => `relative pb-1 transition-colors font-lato ${isActive ? 'text-[#8E1616]' : 'text-gray-500 hover:text-[#8E1616]'}`}>
          {({ isActive }) => (
            <>
              Home
              {isActive && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8E1616]"></span>}
            </>
          )}
        </NavLink>

        <NavLink to="/units" className={({ isActive }) => `relative pb-1 transition-colors font-lato ${isActive ? 'text-[#8E1616]' : 'text-gray-500 hover:text-[#8E1616]'}`}>
          {({ isActive }) => (
            <>
              Units
              {isActive && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8E1616]"></span>}
            </>
          )}
        </NavLink>

        <NavLink to="/zones" className={({ isActive }) => `relative pb-1 transition-colors font-lato ${isActive ? 'text-[#8E1616]' : 'text-gray-500 hover:text-[#8E1616]'}`}>
          {({ isActive }) => (
            <>
              Zones
              {isActive && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8E1616]"></span>}
            </>
          )}
        </NavLink>

        <NavLink to="/developers" className={({ isActive }) => `relative pb-1 transition-colors font-lato ${isActive ? 'text-[#8E1616]' : 'text-gray-500 hover:text-[#8E1616]'}`}>
          {({ isActive }) => (
            <>
              Developers
              {isActive && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8E1616]"></span>}
            </>
          )}
        </NavLink>

        <NavLink to="/contactUs" className={({ isActive }) => `relative pb-1 transition-colors font-lato ${isActive ? 'text-[#8E1616]' : 'text-gray-500 hover:text-[#8E1616]'}`}>
          {({ isActive }) => (
            <>
              Contact Us
              {isActive && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8E1616]"></span>}
            </>
          )}
        </NavLink>
      </ul>

      <div className="hidden md:block">
        <button className="font-lato bg-linear-to-r from-[#8E1616] to-[#C34B4B] hover:opacity-95 text-white px-7 py-1.5 rounded-md text-md shadow transition-all">
          Register
        </button>
      </div>

      <div className="md:hidden flex items-center">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md py-6 px-8 flex flex-col space-y-4 md:hidden border-t border-gray-100">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => `font-lato font-semibold text-lg ${isActive ? 'text-[#8E1616]' : 'text-gray-500'}`}>
            Home
          </NavLink>
          <NavLink to="/units" onClick={() => setIsOpen(false)} className={({ isActive }) => `font-lato font-semibold text-lg ${isActive ? 'text-[#8E1616]' : 'text-gray-500'}`}>
            Units
          </NavLink>
          <NavLink to="/zones" onClick={() => setIsOpen(false)} className={({ isActive }) => `font-lato font-semibold text-lg ${isActive ? 'text-[#8E1616]' : 'text-gray-500'}`}>
            Zones
          </NavLink>
          <NavLink to="/developers" onClick={() => setIsOpen(false)} className={({ isActive }) => `font-lato font-semibold text-lg ${isActive ? 'text-[#8E1616]' : 'text-gray-500'}`}>
            Developers
          </NavLink>
          <NavLink to="/contactUs" onClick={() => setIsOpen(false)} className={({ isActive }) => `font-lato font-semibold text-lg ${isActive ? 'text-[#8E1616]' : 'text-gray-500'}`}>
            Contact Us
          </NavLink>
          <div className="pt-2">
            <button className="w-full font-lato bg-linear-to-r from-[#8E1616] to-[#C34B4B] text-white py-2 rounded-md text-md shadow">
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}