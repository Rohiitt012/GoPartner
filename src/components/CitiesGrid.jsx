import React from 'react';
import { MapPin, Building2, Sparkles, Navigation } from 'lucide-react';

const REGIONAL_CITIES = {
  "North India": {
    iconColor: "text-purple-600 bg-purple-100",
    cities: ["Delhi NCR", "Noida", "Gurgaon / Gurugram", "Jaipur", "Chandigarh", "Lucknow", "Dehradun", "Indore"]
  },
  "West India": {
    iconColor: "text-fuchsia-600 bg-fuchsia-100",
    cities: ["Mumbai", "Pune", "Ahmedabad", "Surat", "Nashik"]
  },
  "South India": {
    iconColor: "text-indigo-600 bg-indigo-100",
    cities: ["Bangalore", "Hyderabad", "Chennai", "Kochi", "Coimbatore"]
  },
  "East India": {
    iconColor: "text-pink-600 bg-pink-100",
    cities: ["Kolkata"]
  }
};

export default function CitiesGrid({ selectedCity, setSelectedCity }) {
  return (
    <section id="cities" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-violet-800 text-xs font-bold mb-3 shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-violet-600" /> Pan-India Operations
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Active GoPartner Companions in 20+ Cities
          </h2>
          
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
            Book verified emotional wellness companions anywhere in India. Select your city below to filter local companions.
          </p>
        </div>

        {/* Regional Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(REGIONAL_CITIES).map(([region, data]) => (
            <div 
              key={region} 
              className="bg-white border border-slate-200/90 shadow-md shadow-slate-200/50 hover:shadow-xl hover:border-violet-300 transition-all duration-300 rounded-3xl p-6 flex flex-col justify-between"
            >
              <div>
                {/* Region Header */}
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${data.iconColor} flex items-center justify-center shrink-0`}>
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-black text-slate-900">{region}</h3>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                        {data.cities.length} Active {data.cities.length === 1 ? 'City' : 'Cities'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* City Buttons List */}
                <div className="flex flex-col gap-2">
                  {data.cities.map((city) => {
                    const isSelected = selectedCity === city || (selectedCity === 'Delhi NCR' && (city === 'Delhi NCR' || city === 'Noida' || city === 'Gurgaon / Gurugram'));

                    return (
                      <button
                        key={city}
                        onClick={() => {
                          const cleanCity = city.includes('Delhi') ? 'Delhi NCR' : (city.includes('Gurgaon') ? 'Delhi NCR' : city);
                          setSelectedCity(cleanCity);
                          document.getElementById('partners-grid')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`px-3.5 py-2.5 rounded-xl text-xs font-bold text-left flex items-center justify-between transition-all cursor-pointer ${
                          isSelected 
                            ? 'bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white font-black shadow-sm'
                            : 'bg-slate-50 text-slate-700 hover:bg-violet-50 hover:text-violet-900 border border-slate-100'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <Navigation className={`w-3 h-3 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                          {city}
                        </span>
                        <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-violet-500 opacity-60'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Info Tag */}
              <div className="mt-6 pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-semibold flex items-center justify-between">
                <span>Instant Booking</span>
                <span className="text-emerald-600 font-bold">100% Verified</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
