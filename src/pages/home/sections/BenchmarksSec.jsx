import React from 'react';
import num1 from '../../../assets/icons/num1.svg';
import num2 from '../../../assets/icons/num2.svg';
import num3 from '../../../assets/icons/num3.svg';
import num4 from '../../../assets/icons/num4.svg';
import Title from '../../../components/Title';

export default function BenchmarksSec() {
  return (
    <div className="w-full px-6 md:px-12 py-8">
      <div>
        <Title title={"Benchmarks of Success"} />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-10 md:mt-14">
        
        <div className="w-full max-w-xs h-36 bg-white border border-[#CEC7C7] rounded-xl p-6 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:shadow-[0px_8px_16px_rgba(0,0,0,0.15)] transition-all flex flex-col items-center justify-center text-center gap-1.5">
          <img className='h-10 w-10 object-contain' src={num1} alt='num1'/>
          <h2 className="font-lato font-bold text-xl md:text-[24px] text-[#0A142F]">48</h2>
          <p className="font-lato text-[#554E4E] font-medium text-sm md:text-[16px]">Properties Managed</p>
        </div>

        <div className="w-full max-w-xs h-36 bg-white border border-[#CEC7C7] rounded-xl p-6 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:shadow-[0px_8px_16px_rgba(0,0,0,0.15)] transition-all flex flex-col items-center justify-center text-center gap-1.5">
          <img className='h-10 w-10 object-contain' src={num2} alt='num2'/>
          <h2 className="font-lato font-bold text-xl md:text-[24px] text-[#0A142F]">90M</h2>
          <p className="font-lato text-[#554E4E] font-medium text-sm md:text-[16px]">Total Managed Investments</p>
        </div>

        <div className="w-full max-w-xs h-36 bg-white border border-[#CEC7C7] rounded-xl p-6 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:shadow-[0px_8px_16px_rgba(0,0,0,0.15)] transition-all flex flex-col items-center justify-center text-center gap-1.5">
          <img className='h-10 w-10 object-contain' src={num3} alt='num3'/>
          <h2 className="font-lato font-bold text-xl md:text-[24px] text-[#0A142F]">500</h2>
          <p className="font-lato text-[#554E4E] font-medium text-sm md:text-[16px]">Happy Clients</p>
        </div>

        <div className="w-full max-w-xs h-36 bg-white border border-[#CEC7C7] rounded-xl p-6 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:shadow-[0px_8px_16px_rgba(0,0,0,0.15)] transition-all flex flex-col items-center justify-center text-center gap-1.5">
          <img className='h-10 w-10 object-contain' src={num4} alt='num4'/>
          <h2 className="font-lato font-bold text-xl md:text-[24px] text-[#0A142F]">99%</h2>
          <p className="font-lato text-[#554E4E] font-medium text-sm md:text-[16px]">Client Satisfaction</p>
        </div>

      </div>
    </div>
  );
}