import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import api from "../../helpers/api";
import Title from "../../components/Title";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // استقبال الداتا باعتة جاهزة من الـ ZoneDetails أو DeveloperDetails
  const passedData = location.state?.itemData || null;

  const [projectData, setProjectData] = useState(passedData);
  const [loading, setLoading] = useState(!passedData);
  const [activeImage, setActiveImage] = useState(passedData?.images?.[0] || "");

  useEffect(() => {
    const fetchProjectDetails = async () => {
      if (!passedData) {
        try {
          const response = await api.get(`/projects/${id}`);
          setProjectData(response.data);
          if (response.data.images && response.data.images.length > 0) {
            setActiveImage(response.data.images[0]);
          }
        } catch (error) {
          console.log("Error fetching project details:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [id, passedData]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <p className="text-2xl font-bold text-[#8E1616]">Loading project details...</p>
      </div>
    );
  }

  if (!projectData) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white gap-4">
        <p className="text-2xl font-bold text-gray-700">Project not found.</p>
        <button 
          onClick={() => navigate(-1)}
          className="px-6 py-2.5 bg-[#8E1616] text-white rounded-xl text-sm font-medium"
        >
          Go Back
        </button>
      </div>
    );
  }

  const imagesList = projectData.images || [];

  return (
    <div className="w-full min-h-screen bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#8E1616] transition-colors"
        >
          <span>←</span> Back
        </button>
         <div className="text-center mb-10">
                  <Title title={projectData.name_en || projectData.title_en} />
                  {projectData.description_en && (
                    <p className="text-gray-500 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">{projectData.description_en}</p>
                  )}
                </div>


        {imagesList.length > 0 && (
          <div className="w-full h-80 sm:h-100 md:h-125 rounded-3xl overflow-hidden mb-4 shadow-md">
            <img 
              src={activeImage || imagesList[0]} 
              alt="Project Main" 
              className="w-full h-full object-cover transition-all duration-300"
            />
          </div>
        )}

        {imagesList.length > 1 && (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-10">
            {imagesList.map((img, index) => (
              <div 
                key={index} 
                onClick={() => setActiveImage(img)}
                className={`h-20 sm:h-24 rounded-2xl overflow-hidden cursor-pointer border-2 transition-all ${activeImage === img ? 'border-[#8E1616] scale-105 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
              >
                <img src={img} alt={`Thumb ${index}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 pb-6 mb-8 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D1616] mb-2 font-playfair">
              {projectData.name_en || projectData.title_en}
            </h1>
          </div>
          <div className="text-left md:text-right">
            <span className="text-2xl sm:text-3xl font-bold text-[#8E1616]">
              {projectData.price ? (typeof projectData.price === 'number' ? `${projectData.price.toLocaleString()} EGP` : projectData.price) : ''}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 bg-gray-50 p-6 sm:p-8 rounded-3xl border border-gray-100">
            <h3 className="text-xl font-bold text-[#1D1616] mb-6 font-playfair">At a glance</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              {projectData.area && (
                <li className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-500">Area:</span>
                  <span className="font-semibold text-gray-800">{projectData.area}</span>
                </li>
              )}
              {projectData.unitsCount !== undefined && (
                <li className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-500">Units:</span>
                  <span className="font-semibold text-gray-800">{projectData.unitsCount}</span>
                </li>
              )}
              {projectData.gymsCount !== undefined && (
                <li className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-500">Gyms:</span>
                  <span className="font-semibold text-gray-800">{projectData.gymsCount}</span>
                </li>
              )}
            </ul>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#1D1616] mb-6 font-playfair">Overview</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-8">
                {projectData.description_en}
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}