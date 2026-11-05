import Hero from "../../components/Hero";
import unitshero from "../../assets/images/unitshero.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../helpers/api";

export default function Units() {
  const [units, setUnits] = useState([]);
  const [filteredUnits, setFilteredUnits] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBedrooms, setSelectedBedrooms] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const navigate = useNavigate();

  const getUnits = async () => {
    try {
      const response = await api.get("/unit");
      setUnits(response.data);
      setFilteredUnits(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching units:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUnits();
  }, []);

  const handleSearch = () => {
    let result = units;

    if (searchQuery.trim() !== "") {
      result = result.filter(unit => 
        (unit.name_en && unit.name_en.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (unit.title_en && unit.title_en.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (selectedBedrooms !== "") {
      result = result.filter(unit => Number(unit.bedrooms) === Number(selectedBedrooms));
    }

    if (selectedPrice !== "") {
      if (selectedPrice === "low") {
        result = result.filter(unit => unit.price <= 5000000);
      } else if (selectedPrice === "high") {
        result = result.filter(unit => unit.price > 5000000);
      }
    }

    setFilteredUnits(result);
  };

  return (
    <div className="w-full min-h-screen bg-white pb-20">
      <Hero
        bg={unitshero}
        title={"Where Visionary Design Meets Daily Life"}
        desc={"Experience a collection of residences designed as personal sanctuaries. Each unit balances expansive city views with artisanal textures and quiet, light-filled interiors to create the ultimate retreat from the world"}
        icons={true}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 my-12">
        <div className="bg-white rounded-2xl shadow-[0px_10px_30px_rgba(0,0,0,0.08)] border border-[#8E1616] p-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center mb-6">
            
            <div className="flex items-center px-4 py-2.5 border border-[#8E1616] rounded-xl bg-white">
              <input 
                type="text" 
                placeholder="Search Property..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-sm outline-none text-[#BEBEBE] placeholder-gray-400 bg-transparent"
              />
              <svg className="w-5 h-5 text-[#BEBEBE] shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>

            <div className="relative">
              <select 
                value={selectedBedrooms}
                onChange={(e) => setSelectedBedrooms(e.target.value)}
                className="w-full px-4 py-2.5 border border-[#8E1616] rounded-xl text-sm text-[#BEBEBE] outline-none bg-white cursor-pointer"
              >
                <option value="">All Bedrooms</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
              </select>
            </div>

            <div className="relative">
              <select 
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="w-full px-4 py-2.5 border border-[#8E1616] rounded-xl text-sm text-[#BEBEBE] outline-none bg-white cursor-pointer"
              >
                <option value="">All Prices</option>
                <option value="low">Under 5M EGP</option>
                <option value="high">Above 5M EGP</option>
              </select>
            </div>

            <div>
              <button 
                onClick={handleSearch}
                className="w-full bg-[#8E1616] hover:bg-[#6A1B1B] text-white font-medium py-2.5 rounded-xl transition-colors duration-300 shadow-md text-sm"
              >
                Search
              </button>
            </div>

          </div>

        </div>
      </div>

      {loading && (
        <div className="text-center py-20">
          <h1 className="text-xl font-bold text-[#8E1616]">Loading units...</h1>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {!loading && filteredUnits.length === 0 ? (
          <div className="text-center py-16 text-gray-400 text-base font-medium">
            No units found matching your criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {!loading && filteredUnits.map((unit) => (
              <div 
                key={unit.id} 
                className="flex flex-col bg-white p-5 rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0px_8px_25px_rgba(0,0,0,0.1)] border border-gray-100 group transition-all duration-300"
              >
                <div className="relative w-full h-55 rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={unit.images && unit.images[0] ? unit.images[0] : unitshero} 
                    alt={unit.name_en || unit.title_en} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-medium px-3 py-1 rounded-md shadow-md">
                    Available
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-3 px-1 border-b border-gray-100 pb-3">
                  <div className="flex items-center gap-1">
                    <span>🛏️</span>
                    <span>{unit.bedrooms || 2} Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>🛁</span>
                    <span>{unit.bathrooms || 2} Bathrooms</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>📐</span>
                    <span>{unit.area || 120}m</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-2 px-1">
                  <h3 className="font-bold text-base text-[#1D1616] truncate max-w-[60%]">
                    {unit.name_en || unit.title_en}
                  </h3>
                  <span className="font-bold text-[#8E1616] text-sm">
                    {unit.price ? `${Number(unit.price).toLocaleString()} EGP` : '50,000 EGP'}
                  </span>
                </div>

                <p className="text-xs text-gray-400 mb-5 px-1 line-clamp-2 leading-relaxed">
                  {unit.description_en}
                </p>

                <button 
                  onClick={() => navigate(`/units/${unit.id}`)}
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