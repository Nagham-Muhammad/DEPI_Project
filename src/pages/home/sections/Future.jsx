import React from 'react';
import Title from '../../../components/Title';
import SliderPkg from "react-slick";
import image7 from '../../../assets/images/image7.png';
import image10 from '../../../assets/images/image10.png';
import image11 from '../../../assets/images/image11.png';
import image8 from '../../../assets/images/image8.png';

const Slider = SliderPkg.default || SliderPkg;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  {
    id: '01',
    title: 'Palm Hills New Cairo',
    location: 'New Cairo',
    image: image7,
    logo: image10,
    logoTitle: 'PALM HILLS',
    logoSub: 'DEVELOPMENTS',
  },
  {
    id: '02',
    title: 'Hayah City Residence',
    location: 'New Cairo',
    image: image8,
    logo: image11,
    logoTitle: 'Hayah City',
    logoSub: 'Hayah Development',
  },
  {
    id: '03',
    title: 'Palm Hills New Cairo',
    location: 'New Cairo',
    image: image7,
    logo: image10,
    logoTitle: 'PALM HILLS',
    logoSub: 'DEVELOPMENTS',
  },
  {
    id: '04',
    title: 'Hayah City Residence',
    location: 'New Cairo',
    image: image8,
    logo: image11,
    logoTitle: 'Hayah City',
    logoSub: 'Hayah Development',
  },
];

export default function Future() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="w-full py-16 px-6 md:px-12 bg-white">
      <div className="mb-6">
        <Title title={"Future Landmarks"} />
      </div>

      <div className="max-w-7xl mx-auto pb-30">
        <Slider {...settings} className="pb-3">
          {items.map((item, index) => (
            <div key={index} className="px-3">
              <div className="flex flex-col bg-white p-4 rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:shadow-[0px_8px_16px_rgba(0,0,0,0.15)] group cursor-pointer">
                
                <div className="relative w-full h-55 rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                  />
                  <span className="absolute top-3 right-3 bg-[#8E1616] text-white text-xs font-medium px-3 py-1 rounded-md shadow-md">
                    {item.location}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-4 px-1">
                  <div className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center p-1">
                    <img src={item.logo} alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1D1616]">{item.logoTitle}</h4>
                    <p className="text-xs text-[#847D7D]">{item.logoSub}</p>
                  </div>
                </div>

                <button className="w-full h-7.5 rounded-md text-center justify-center border border-[#8E1616] text-[#8E1616] font-medium text-sm hover:bg-[#8E1616] hover:text-white hover:border-[#8E1616] transition-colors duration-300">
                  View Details
                </button>

              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx global>{`
        .slick-slide {
          padding: 0 10px !important;
        }
        .slick-list {
          margin: 0 -10px !important;
          padding-top: 10px !important;
          padding-bottom: 10px !important;
        }
        .slick-dots {
          bottom: -35px !important;
        }
        .slick-dots li {
          margin: 0 3px !important;
        }
        .slick-dots li button:before {
          font-size: 10px;
          color: #d1d5db;
          opacity: 1;
        }
        .slick-dots li.slick-active button:before {
          content: '' !important;
        }
        .slick-dots li.slick-active button {
          width: 24px;
          height: 8px;
          background-color: #8E1616;
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
}