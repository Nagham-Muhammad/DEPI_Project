import React from 'react';
import LogoOption from '../assets/images/LogoOption.png';

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAFAFA] pt-16 pb-8 px-6 md:px-20 mt-auto font-lato">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 items-start">
        
        <div className="flex flex-col space-y-2 justify-center">
          <img 
            src={LogoOption} 
            alt="Grand Atlas Logo" 
            className="h-28 w-28 object-contain" 
          />
          <p className="text-[#0A142F] font-medium text-lg">+1 (7635) 547-12-97</p>
          <p className="text-[#0A142F] text-md">support@lift.agency</p>
        </div>

        <div>
          <h3 className="text-gray-900 font-bold text-base mb-4">Quick Links</h3>
          <ul className="space-y-3 text-[#0A142F] opacity-65 text-sm">
            <li className="cursor-pointer hover:text-[#8E1616] transition-colors">Home</li>
            <li className="cursor-pointer hover:text-[#8E1616] transition-colors">Inventories</li>
            <li className="cursor-pointer hover:text-[#8E1616] transition-colors">Zones</li>
            <li className="cursor-pointer hover:text-[#8E1616] transition-colors">Developers</li>
            <li className="cursor-pointer hover:text-[#8E1616] transition-colors">Contact Us</li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-900 font-bold text-base mb-4">About</h3>
          <ul className="space-y-3 text-[#0A142F] opacity-65 text-sm">
            <li className="cursor-pointer hover:text-[#8E1616] transition-colors">Grand Atlas</li>
            <li className="cursor-pointer hover:text-[#8E1616] transition-colors">Privacy Policy</li>
            <li className="cursor-pointer hover:text-[#8E1616] transition-colors">Legal</li>
            <li className="cursor-pointer hover:text-[#8E1616] transition-colors">Help</li>
            <li className="cursor-pointer hover:text-[#8E1616] transition-colors">Support</li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-900 font-bold text-base mb-4">Get In touch</h3>
          <div className="flex items-center border border-[#8E1616] rounded-md overflow-hidden max-w-sm mb-4">
            <input 
              type="email" 
              placeholder="Get product updates" 
              className="w-full px-4 py-2.5 text-sm text-[#0A142F] opacity-65 focus:outline-none bg-transparent"
            />
            <button className="bg-[#8E1616] hover:bg-[#701e1e] text-white px-4 py-3 flex items-center justify-center transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          <div className="flex space-x-3">
            <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-[#8E1616] hover:bg-gray-50 cursor-pointer transition-colors text-xs font-bold">
              in
            </div>
            <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-[#8E1616] hover:bg-gray-50 cursor-pointer transition-colors text-xs font-bold">
              f
            </div>
            <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-[#8E1616] hover:bg-gray-50 cursor-pointer transition-colors text-xs font-bold">
              t
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t-2 border-[#0A142F]/6 text-center text-[#0A142F] text-md">
        © 2020 Lift Media. All rights reserved
      </div>
    </footer>
  );
}