import React, { useState } from 'react';
import { Search, Sparkles, MapPin, Users, Filter, X } from 'lucide-react';
import PartnerCard from './PartnerCard';

export default function PartnersSection({ 
  partners, 
  selectedCity, 
  setSelectedCity, 
  selectedService, 
  setSelectedService, 
  genderFilter, 
  setGenderFilter, 
  onBookPartner 
}) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter partners
  const filteredPartners = partners.filter(partner => {
    if (selectedCity !== 'All Cities' && partner.city !== selectedCity) return false;
    if (selectedService !== 'All Services' && !partner.services.includes(selectedService)) return false;
    if (genderFilter !== 'All' && partner.gender !== genderFilter) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = partner.name.toLowerCase().includes(q);
      const matchCity = partner.city.toLowerCase().includes(q);
      const matchServices = partner.services.some(s => s.toLowerCase().includes(q));
      return matchName || matchCity || matchServices;
    }
    return true;
  });

  return (
    <section id="partners-grid" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-violet-800 text-xs font-bold mb-3 shadow-2xs">
              <Users className="w-3.5 h-3.5 text-violet-600" /> Verified Emotional Wellness Companions
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Available GoPartners in {selectedCity}
            </h2>
            <p className="mt-2 text-slate-600 text-sm font-semibold">
              Strictly platonic • Background checked • Average Rating 4.8+ ★
            </p>
          </div>

          {/* Search Filter Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search companion name, city, service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-xs text-slate-900 font-semibold outline-none focus:border-violet-600 focus:ring-2 focus:ring-violet-500/20 shadow-xs transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Active Filters Bar */}
        {(selectedCity !== 'All Cities' || selectedService !== 'All Services' || genderFilter !== 'All' || searchQuery) && (
          <div className="mb-8 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs text-slate-800 font-bold">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-slate-500 font-medium">Active Filters:</span>
              {selectedCity !== 'All Cities' && (
                <span className="bg-violet-50 text-violet-800 px-3 py-1 rounded-lg border border-violet-200">
                  City: {selectedCity}
                </span>
              )}
              {selectedService !== 'All Services' && (
                <span className="bg-violet-50 text-violet-800 px-3 py-1 rounded-lg border border-violet-200">
                  Service: {selectedService}
                </span>
              )}
              {genderFilter !== 'All' && (
                <span className="bg-violet-50 text-violet-800 px-3 py-1 rounded-lg border border-violet-200">
                  Gender: {genderFilter}
                </span>
              )}
              {searchQuery && (
                <span className="bg-violet-50 text-violet-800 px-3 py-1 rounded-lg border border-violet-200">
                  Query: "{searchQuery}"
                </span>
              )}
            </div>

            <button 
              onClick={() => {
                setSelectedCity('All Cities');
                setSelectedService('All Services');
                setGenderFilter('All');
                setSearchQuery('');
              }}
              className="text-violet-700 hover:text-violet-900 font-bold underline cursor-pointer"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Partners Cards Grid */}
        {filteredPartners.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPartners.map((partner) => (
              <PartnerCard key={partner.id} partner={partner} onBook={onBookPartner} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 text-center rounded-3xl border border-slate-200 shadow-sm my-8">
            <div className="w-16 h-16 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center mx-auto mb-4 border border-violet-100">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No GoPartners Match Your Filters</h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto mb-6 font-medium">
              Try switching city to "All Cities" or selecting "All Services" to see all verified companions.
            </p>
            <button 
              onClick={() => {
                setSelectedCity('All Cities');
                setSelectedService('All Services');
                setGenderFilter('All');
                setSearchQuery('');
              }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold text-xs shadow-md"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
