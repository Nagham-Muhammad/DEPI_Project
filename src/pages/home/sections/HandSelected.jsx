import React from 'react';
import Title from '../../../components/Title';
import SliderPkg from "react-slick";
import image2 from '../../../assets/images/image2.png';
import image3 from '../../../assets/images/image3.png';
import image4 from '../../../assets/images/image4.png';
import image13 from '../../../assets/images/image13.png';

const Slider = SliderPkg.default || SliderPkg;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  {
    id: '01',
    title: ' Palm Hills Office No.3',
    image: image2,
  },
  {
    id: '02',
    title: ' Hacienda Duplex No.4',
    image: image3,
  },
  {
    id: '03',
    title: ' Sawary Family Villa',
    image: image4,
  },
  {
    id: '04',
    title: ' Marassi Luxury Chalet',
    image: image13,
  },
];

export default function HandSelected() {
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
      <div className="mb-12">
        <Title title={"Hand-Selected Masterpieces"} />
      </div>

      <div className="max-w-7xl mx-auto pb-12">
        <Slider {...settings}>
          {items.map((item) => (
            <div key={item.id} className="px-3">
              <div className="flex flex-col cursor-grab active:cursor-grabbing group">
                <div>
                  <img 
                    className="w-full h-64 md:h-74.5 rounded-2xl overflow-hidden shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:shadow-[0px_8px_16px_rgba(0,0,0,0.15)] object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                    src={item.image} 
                    alt={item.title} 
                  />
                </div>
                <h3 className="font-playfair font-bold text-lg text-[#000000] mt-4 mb-7">
                  {item.id}.{item.title}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx global>{`
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