import Hero from "../../components/Hero";
import zoneshero from "../../assets/images/zoneshero.png";
import api from "../../helpers/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Zones() {
  const [zones, setZones] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getZones = async () => {
    try {
      const response = await api.get("/zone"); 
      setZones(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching zones:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getZones();
  }, []);

  return (
    <div className="w-full min-h-screen bg-white pb-20">
      <Hero
        bg={zoneshero}
        title={"Destinations Defined by Distinction"}
        desc={"From the quiet pulse of the shoreline to the vibrant energy of the metropolitan center, explore our guide to the neighborhoods that mirror your ambition and your aesthetic."}
        icons={true}
      />

      {loading && <h1 className="text-center text-[#8E1616] my-10 font-bold">Loading...</h1>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 py-12 max-w-7xl mx-auto">
        {!loading && zones.map((zone) => {
          return(
            <div key={zone.id} className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col p-5 group cursor-pointer">
              
              <div className="w-full h-52 rounded-2xl overflow-hidden mb-4 relative">
                <img 
                  src={zone.images && zone.images[0] ? zone.images[0] : zoneshero} 
                  alt={zone.name_en} 
                  onClick={() => navigate(`/zones/${zone.id}`)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              <h1 className="font-bold text-xl text-[#0A142F] mb-2">{zone.name_en}</h1>
              <p className="text-gray-500 text-xs mb-6 line-clamp-2 leading-relaxed">{zone.description_en}</p>
              
              <button 
                onClick={() => navigate(`/zones/${zone.id}`)}
                className="w-full mt-auto py-2.5 rounded-md border border-[#8E1616] text-[#8E1616] font-medium text-sm hover:bg-[#8E1616] hover:text-white transition-colors duration-300"
              >
                Explore Zone
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}