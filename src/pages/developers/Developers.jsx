import Hero from "../../components/Hero";
import devhero from "../../assets/images/devhero.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../helpers/api";

export default function Developers() {
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getDevelopers = async () => {
    try {
      const response = await api.get("/developer"); 
      setDevelopers(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching developers:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDevelopers();
  }, []);

  return (
    <div className="w-full min-h-screen bg-white pb-20">
      <Hero
        bg={devhero}
        title={"Defining the Future Skyline."}
        desc={"Great developments require more than just capital; they require a narrative. We provide the elite marketing and specialized brokerage services needed to position your landmark projects in front of the world’s most discerning buyers."}
        icons={true}
      />

      {loading && (
        <div className="text-center py-20">
          <h1 className="text-xl font-bold text-[#8E1616]">Loading developers...</h1>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {!loading && developers.map((developer) => (
            <div 
              key={developer.id} 
              className="flex flex-col bg-white p-5 rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0px_8px_25px_rgba(0,0,0,0.1)] border border-gray-100 group cursor-pointer transition-all duration-300"
            >
              <div 
                onClick={() => navigate(`/developers/${developer.id}`)}
                className="relative w-full h-55 rounded-2xl overflow-hidden mb-4"
              >
                <img 
                  src={developer.images && developer.images[0] ? developer.images[0] : devhero} 
                  alt={developer.name_en} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex items-center gap-3 mb-4 px-1">
                <div>
                  <h3 className="font-bold text-base text-[#1D1616]">
                    {developer.name_en}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-gray-400 mb-5 px-1 line-clamp-2 leading-relaxed">
                {developer.description_en}
              </p>

              <button 
                onClick={() => navigate(`/developers/${developer.id}`)}
                className="w-full py-2.5 rounded-md flex items-center justify-center border border-[#8E1616] text-[#8E1616] font-medium text-sm hover:bg-[#8E1616] hover:text-white transition-colors duration-300 mt-auto"
              >
                View Projects
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}