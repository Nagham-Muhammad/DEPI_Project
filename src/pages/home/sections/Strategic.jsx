import React from 'react';
import Title from '../../../components/Title';
import image6 from '../../../assets/images/image6.png';

export default function Strategic() {
 return (
 <div className="w-full py-16 bg-white ">
      <div className="mb-12">
      <Title title={"Strategic Locations"} />
      </div>

     <div>
        <div className="w-full h-112.5 md:h-137.5 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
           <img 
            src={image6} 
            alt="Strategic Locations Map" 
              className="w-full h-full object-cover"
           />
       </div>
     </div>
   </div>
  );
}
