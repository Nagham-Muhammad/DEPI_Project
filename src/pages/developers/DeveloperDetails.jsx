import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../helpers/api";
import Title from "../../components/Title";

export default function DeveloperDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [developer, setDeveloper] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDeveloperDetails = async () => {
      try {
        const response = await api.get(`/developer/${id}`);
        setDeveloper(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching developer details:", error);
        setLoading(false);
      }
    };
    getDeveloperDetails();
  }, [id]);

  if (loading) {
    return <h1 className="text-center text-[#8E1616] mt-20 text-2xl font-bold">Loading...</h1>;
  }

  if (!developer) {
    return <h1 className="text-center text-gray-600 mt-20 text-2xl">Developer not found</h1>;
  }

  const projectsList = developer.projects || developer.units || [];

  return (
    <div className="w-full min-h-screen bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        <button 
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#8E1616] transition-colors"
        >
          <span>←</span> Back to Developers
        </button>

        <div className="text-center mb-10">
          <Title title={developer.name_en || "Developer Projects"} />
          {developer.description_en && (
            <p className="text-gray-500 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">
              {developer.description_en}
            </p>
          )}
        </div>
        
        {developer.images && developer.images[0] && (
          <div className="w-full h-80 sm:h-100 md:h-120 rounded-3xl overflow-hidden mb-16 shadow-md">
            <img 
              src={developer.images[0]} 
              alt={developer.name_en} 
              className="w-full h-full object-cover" 
            />
          </div>
        )}

        {projectsList.length === 0 ? (
          <div className="text-center py-16 text-gray-400 text-base font-medium">
            No projects found for this developer.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsList.map((project, index) => (
              <div 
                key={project.id || project._id || index} 
                className="flex flex-col bg-white p-5 rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0px_8px_25px_rgba(0,0,0,0.1)] border border-gray-100 group transition-all duration-300"
              >
                {/* عرض صور الـ API الحقيقية للمشروع فقط */}
                {project.images && project.images[0] && (
                  <div className="relative w-full h-55 rounded-2xl overflow-hidden mb-4">
                    <img 
                      src={project.images[0]} 
                      alt={project.title_en || project.name_en} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between text-xs text-gray-500 mb-3 px-1 border-b border-gray-100 pb-3">
                  {project.unitsCount !== undefined && (
                    <div className="flex items-center gap-1">
                      <span>🏢</span>
                      <span>{project.unitsCount} Units</span>
                    </div>
                  )}
                  {project.gymsCount !== undefined && (
                    <div className="flex items-center gap-1">
                      <span>🏋️</span>
                      <span>{project.gymsCount} Gyms</span>
                    </div>
                  )}
                  {project.area !== undefined && (
                    <div className="flex items-center gap-1">
                      <span>📐</span>
                      <span>{project.area}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between mb-2 px-1">
                  <h3 className="font-bold text-base text-[#1D1616] truncate max-w-[60%]">
                    {project.title_en || project.name_en}
                  </h3>
                  <span className="font-bold text-[#8E1616] text-sm">
                    {project.price ? (typeof project.price === 'number' ? `${project.price.toLocaleString()} EGP` : project.price) : ''}
                  </span>
                </div>

                {project.description_en && (
                  <p className="text-xs text-gray-400 mb-5 px-1 line-clamp-2 leading-relaxed">
                    {project.description_en}
                  </p>
                )}

                <button 
                  onClick={() => {
                    navigate(`/projects/${project.id || project._id}`, { state: { itemData: project } });
                  }}
                  className="w-full py-2.5 rounded-md flex items-center justify-center border border-[#8E1616] text-[#8E1616] font-medium text-sm hover:bg-[#8E1616] hover:text-white transition-colors duration-300 mt-auto"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}