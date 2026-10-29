import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../helpers/api";
import unitshero from "../../assets/images/unitshero.png";

export default function UnitDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [unit, setUnit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState("");

  const getUnitDetails = async () => {
    try {
      const response = await api.get(`/unit/${id}`);
      setUnit(response.data);
      if (response.data.images && response.data.images.length > 0) {
        setActiveImage(response.data.images[0]);
      } else {
        setActiveImage(unitshero);
      }
    } catch (error) {
      console.log("Error fetching unit details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUnitDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <p className="text-2xl font-bold text-[#8E1616]">Loading unit details...</p>
      </div>
    );
  }

  const unitData = unit || {
    name_en: "Splendid historic Art Nouveau villa",
    price: 50000000,
    description_en: "Nestled in a residential area of Minusio, this magnificent historic villa is for sale, fully renovated and ready to move in. The spacious living areas, flooded with natural light thanks to perfect sun exposure, create a unique and welcoming atmosphere. A well-maintained, low-maintenance garden provides the ideal setting for enjoying outdoor gatherings.",
    images: [unitshero, unitshero, unitshero, unitshero, unitshero],
    bedrooms: 3,
    bathrooms: 3,
    area: 589,
    livingArea: 300,
    livingRooms: 2,
    wc: 1,
    parking: "3, covered",
    location: "Minusio, Lake Maggiore, Switzerland",
    ref: "LOC1771"
  };

  const imagesList = unitData.images && unitData.images.length > 0 ? unitData.images : [unitshero, unitshero, unitshero, unitshero];

  return (
    <div className="w-full min-h-screen bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        <button 
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#8E1616] transition-colors"
        >
          <span>←</span> Back to Units
        </button>

        <div className="w-full h-80 sm:h-100 md:h-125 rounded-2xl overflow-hidden mb-4 shadow-md">
          <img 
            src={activeImage || imagesList[0]} 
            alt="Main Unit" 
            className="w-full h-full object-cover transition-all duration-300"
          />
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-10">
          {imagesList.map((img, index) => (
            <div 
              key={index} 
              onClick={() => setActiveImage(img)}
              className={`h-20 sm:h-24 rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${activeImage === img ? 'border-[#8E1616] scale-105 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
            >
              <img src={img} alt={`Thumb ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 pb-6 mb-8 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D1616] font-playfair mb-2">
              {unitData.name_en || unitData.title_en}
            </h1>
            <p className="text-sm text-gray-500 flex flex-wrap items-center gap-2">
              <span>📍</span> {unitData.location || "Minusio, Lake Maggiore, Switzerland"} &nbsp;|&nbsp; <span className="text-gray-400">ref. {unitData.ref || "LOC1771"}</span>
            </p>
          </div>
          <div className="text-left md:text-right">
            <span className="text-2xl sm:text-3xl font-bold text-gray-700">
              {unitData.price ? `${Number(unitData.price).toLocaleString()} EGP` : '50,000,000 EGP'}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 bg-gray-50 p-6 sm:p-8 rounded-3xl border border-gray-100">
            <h3 className="text-xl font-bold text-[#1D1616] mb-6 font-playfair">At a glance</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex justify-between border-b border-gray-200 pb-3">
                <span className="text-gray-500">Plot size ca.:</span>
                <span className="font-semibold text-gray-800">{unitData.area || 589} m²</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-3">
                <span className="text-gray-500">Living area ca.:</span>
                <span className="font-semibold text-gray-800">{unitData.livingArea || 300} m²</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-3">
                <span className="text-gray-500">Bedrooms:</span>
                <span className="font-semibold text-gray-800">{unitData.bedrooms || 3}</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-3">
                <span className="text-gray-500">Bathrooms:</span>
                <span className="font-semibold text-gray-800">{unitData.bathrooms || 3}</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-3">
                <span className="text-gray-500">Living rooms:</span>
                <span className="font-semibold text-gray-800">{unitData.livingRooms || 2}</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-3">
                <span className="text-gray-500">WC:</span>
                <span className="font-semibold text-gray-800">{unitData.wc || 1}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-500">External parking:</span>
                <span className="font-semibold text-gray-800">{unitData.parking || "3, covered"}</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#1D1616] mb-6 font-playfair">Overview</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-8">
                {unitData.description_en}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <a 
                href="https://whatsapp.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm text-sm"
              >
                <span>💬</span> Contact via WhatsApp
              </a>
              <a 
                href="tel:+201000000000"
                className="w-full py-3.5 bg-white border border-gray-300 hover:border-gray-400 text-gray-800 font-medium rounded-xl flex items-center justify-center gap-2 transition-colors text-sm shadow-xs"
              >
                <span>📞</span> Call
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}