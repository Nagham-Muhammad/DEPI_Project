import Hero from "../../components/Hero";
import conhero from "../../assets/images/conhero.png";
import fbc from "../../assets/icons/fbc.svg";
import xc from "../../assets/icons/xc.svg";
import instagramc from "../../assets/icons/instagramc.svg";
import tiktokc from "../../assets/icons/tiktokc.svg";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { useState } from "react";


export default function ContactUs() {
  const user = useContext(UserContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  return (
    <div className="w-full min-h-screen bg-white pb-28">
      <Hero
        bg={conhero}
        title={"Connected Globally. Available Locally."}
        desc={"With experts positioned in the world's most influential markets, we are never more than a conversation away. Reach out to our team to experience a new standard of real estate advisory."}
        icons={true}
      />

      <div className="w-full px-6 md:px-20 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#1D1616] font-playfair mb-4">
                Contact Information
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                Our team is available for private consultations and off-market inquiries. We operate with absolute discretion to ensure your real estate objectives are met with precision.
              </p>
            </div>

            <div className="space-y-4 text-sm pt-2">
              <div className="flex items-center gap-3 text-gray-700">
                <span className="text-[#8E1616]">📍</span>
                <span className="text-[#8E1616] font-medium">Minusio, Lake Maggiore, Switzerland — ref. LOC1771</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <span className="text-[#8E1616]">✉️</span>
                <span className="text-[#8E1616] font-medium">Grand.Atlas.Support@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <span className="text-[#8E1616]">📱</span>
                <span className="text-[#8E1616] font-medium">01247859622</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <span className="text-[#8E1616]">📞</span>
                <span className="text-[#8E1616] font-medium">035987124</span>
              </div>
            </div>

            <div className="pt-2">
            <p className="text-xl font-playfair text-[#847D7D] mb-3 font-medium">Follow us on social media</p>
            <div className='flex flex-row gap-2'>
            <img className='w-10 h-10 border-[3px] border-[#8E1616] rounded-full p-2' src={fbc} alt="facbook" />
            <img className='w-10 h-10 border-[3px] border-[#8E1616] rounded-full p-2' src={xc} alt="x" />
            <img className='w-10 h-10 border-[3px] border-[#8E1616] rounded-full p-2' src={instagramc} alt="instagram" />
            <img className='w-10 h-10 border-[3px] border-[#8E1616] rounded-full p-2' src={tiktokc} alt="tiktok" />
            </div>
            </div>

            <div className="pt-2">
              <h3 className="text-xl font-playfair text-[#847D7D] mb-4">Working Hours</h3>
              <div className="space-y-2.5 text-sm text-[#847D7D]">
                <div className="flex justify-between max-w-xs">
                  <span className="text-[#8E1616] font-medium">Saturday :</span>
                  <span>9:00AM - 5:00PM</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span className="text-[#8E1616] font-medium">Sunday :</span>
                  <span>9:00AM - 5:00PM</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span className="text-[#8E1616] font-medium">Monday :</span>
                  <span>9:00AM - 5:00PM</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span className="text-[#8E1616] font-medium">Tuesday :</span>
                  <span>9:00AM - 5:00PM</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span className="text-[#8E1616] font-medium">Wednesday :</span>
                  <span>9:00AM - 5:00PM</span>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-7 bg-white p-10 rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] border border-gray-200">
            <h2 className="text-2xl font-bold text-[#1D1616] mb-8 font-playfair">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-playfair font-medium text-[#000000] mb-2">Name</label>
                <input 
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3.5 font-playfair bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#8E1616] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-playfair font-medium text-[#000000] mb-2">Email</label>
                <input 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3.5 font-playfair bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#8E1616] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-playfair font-medium text-[#000000] mb-2">Phone</label>
                <input 
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3.5 font-playfair bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#8E1616] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-playfair font-medium text-[#000000] mb-2">Message</label>
                <textarea 
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3.5 font-playfair bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#8E1616] transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-linear-to-r font-playfair from-[#8E1616] to-[#C34B4B] hover:bg-[#6A1B1B] text-white font-medium rounded-xl transition-colors shadow-md text-sm mt-4"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      
      </div>
        {/* <div >
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.age}</p>
        <p>{user.role}</p>
        </div> */}

    </div>
  );
}