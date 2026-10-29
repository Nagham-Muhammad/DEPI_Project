import React from 'react';

export default function Title({title}) {
  return (
    <div className='flex flex-col justify-center items-center gap-1 mt-20'>
      <h2 className='text-[32px] font-semibold font-playfair'>{title}</h2>
      <div className='bg-[#C34B4B] w-41 h-1.25 rounded-xs'></div>
    </div>
  );
}
