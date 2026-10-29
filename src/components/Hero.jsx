import React from 'react';
import fb from '../assets/icons/fb.svg';
import instagram from '../assets/icons/instagram.svg';
import x from '../assets/icons/x.svg';
import tiktok from '../assets/icons/tiktok.svg';

export default function Hero({bg, title, desc, btn, btncontent, icons}) {
  return (
    <div className='relative h-screen bg-cover bg-center flex items-center justify-center text-[#EEEEEE] px-6 md:px-12' style={{backgroundImage: `url(${bg})`}}>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col justify-center items-center text-center space-y-5">
        
        <h1 className="font-playfair font-bold w-full max-w-2xl text-3xl md:text-5xl text-white leading-tight">
         {title}
        </h1>

        <p className="font-lato text-[#CEC7C7] text-base md:text-lg font-bold w-full max-w-3xl mb-12">
          {desc}
        </p>
        
        {btn &&
          <button className="font-lato bg-linear-to-r from-[#8E1616] to-[#C34B4B] w-55 h-11 hover:opacity-95 text-white px-7 py-2.5 rounded-md text-md font-semibold shadow-md transition-all">
            {btncontent}
          </button>
        }

      </div>

      {icons &&
        <div className='absolute bottom-6 left-6 md:bottom-10 md:left-9 px-2 flex flex-col gap-4 md:gap-8 z-20'>
          <img className='w-10 h-10 md:w-12 md:h-12 border-[3px] border-white rounded-full p-2 object-contain bg-black/20 backdrop-blur-xs cursor-pointer hover:scale-110 transition-transform' src={fb} alt="facbook" />
          <img className='w-10 h-10 md:w-12 md:h-12 border-[3px] border-white rounded-full p-2 object-contain bg-black/20 backdrop-blur-xs cursor-pointer hover:scale-110 transition-transform' src={x} alt="x" />
          <img className='w-10 h-10 md:w-12 md:h-12 border-[3px] border-white rounded-full p-2 object-contain bg-black/20 backdrop-blur-xs cursor-pointer hover:scale-110 transition-transform' src={instagram} alt="instagram" />
          <img className='w-10 h-10 md:w-12 md:h-12 border-[3px] border-white rounded-full p-2 object-contain bg-black/20 backdrop-blur-xs cursor-pointer hover:scale-110 transition-transform' src={tiktok} alt="tiktok" />
        </div>
      }

    </div>
  );
}