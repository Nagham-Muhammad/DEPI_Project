import React from 'react';
import Title from '../../../components/Title';
import aboutHome from '../../../assets/images/aboutHome.png';

export default function AboutHome() {
  return (
    <div className='px-6 py-12 '>
      <div>
        <Title title={"About Grand Atlas"} />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-evenly gap-15 lg:gap-15 mt-14 md:mt-14">
        
        <div className=" ">
          <img 
            src={aboutHome} className='h-auto w-150' alt="About Grand Atlas" 
          />
        </div>

        <div className="w-full lg:w-1/2">
          <p className="font-lato text-[#554E4E] text-base md:text-[24px] leading-relaxed mt-4 mb-10 md:mb-17">
            We began with a singular, uncompromising vision: to bridge the gap between world-class architecture and the individuals who define our global culture. We recognized that for the discerning client, a home is rarely just a physical structure; it is a curated environment, a private gallery, and the ultimate expression of a life well-lived. Our journey started not in the pursuit of transactions, but in the pursuit of excellence. We set out to dismantle the traditional, high-volume real estate model in favor of a bespoke, 'private office' approach—one where quality always supersedes quantity, and where every client is treated as the sole focus of our firm, 
            We don't just find you a home; we secure your peace of mind through a veil of absolute professional confidentiality.
          </p>
          
          <button className="font-lato bg-linear-to-r from-[#8E1616] to-[#C34B4B] w-55 h-11 hover:opacity-95 text-white px-7 py-2.5 rounded-md text-md font-semibold shadow-md transition-all">
            Know More →
          </button>
        </div>

      </div>
    </div>
  );
}
