import React from 'react';
import { 
  ShieldCheck, 
  Search, 
  MapPin, 
  Sparkles, 
  Star, 
  Users, 
  CheckCircle2, 
  Filter
} from 'lucide-react';
import { CITIES_LIST } from '../data/partnersData';
import { SERVICES_DATA } from '../data/servicesData';

export default function Hero({ 
  selectedCity, 
  setSelectedCity, 
  selectedService, 
  setSelectedService, 
  genderFilter, 
  setGenderFilter,
  onOpenApplyModal 
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-violet-50/80 via-white to-slate-50 pt-10 pb-16 md:pt-16 md:pb-24 border-b border-slate-200/60">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100/80 border border-violet-200 text-violet-800 text-xs font-bold mb-6 shadow-xs">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>India's #1 Emotional Wellness &amp; Platonic Companionship Platform</span>
          <span className="bg-violet-700 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
            100% Verified
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.15]">
          Safe, Consent-First <br />
          <span className="text-brand-gradient">
            Professional Companionship
          </span> Near You
        </h1>

        {/* Subheadline */}
        <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
          Connect with verified GoPartners for cafe outings, movie sessions, shopping sprees, senior care, and active emotional support in Delhi, Mumbai, Bangalore &amp; 20+ cities.
        </p>

        {/* Clean Filter / Search Box */}
        <div id="find-partner" className="mt-10 max-w-4xl mx-auto bg-white p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/80">
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* City Dropdown */}
            <div className="flex flex-col text-left">
              <label className="text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-violet-600" /> Select City
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="bg-slate-50 border border-slate-200 text-slate-900 font-semibold rounded-xl p-3 text-xs sm:text-sm focus:border-violet-600 outline-none transition-all cursor-pointer hover:border-slate-300"
              >
                {CITIES_LIST.map(city => (
                  <option key={city} value={city} className="bg-white text-slate-900">
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Service Dropdown */}
            <div className="flex flex-col text-left">
              <label className="text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Filter className="w-4 h-4 text-violet-600" /> Service Type
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="bg-slate-50 border border-slate-200 text-slate-900 font-semibold rounded-xl p-3 text-xs sm:text-sm focus:border-violet-600 outline-none transition-all cursor-pointer hover:border-slate-300"
              >
                <option value="All Services">All Services</option>
                {SERVICES_DATA.map(s => (
                  <option key={s.id} value={s.title} className="bg-white text-slate-900">
                    {s.title} (₹{s.price}/hr)
                  </option>
                ))}
              </select>
            </div>

            {/* Gender Filter */}
            <div className="flex flex-col text-left">
              <label className="text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-violet-600" /> Companion Gender
              </label>
              <select
                value={genderFilter}
                onChange={(e) => setGenderFilter(e.target.value)}
                className="bg-slate-50 border border-slate-200 text-slate-900 font-semibold rounded-xl p-3 text-xs sm:text-sm focus:border-violet-600 outline-none transition-all cursor-pointer hover:border-slate-300"
              >
                <option value="All">All Genders</option>
                <option value="Female">Female Companions</option>
                <option value="Male">Male Companions</option>
              </select>
            </div>

          </div>

          {/* Quick Filter Info & Action Button */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-semibold text-slate-700">100% Strictly Platonic • Aadhaar Verified Profiles</span>
            </div>
            <a 
              href="#partners-grid" 
              className="w-full sm:w-auto px-6 py-3 rounded-xl btn-primary font-bold text-xs flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              View Available Companions
            </a>
          </div>

        </div>

        {/* Live Trust Metrics Grid */}
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs text-center">
            <div className="text-2xl sm:text-3xl font-black text-violet-700">
              50,000+
            </div>
            <div className="text-xs text-slate-600 font-semibold mt-1">Sessions Completed</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs text-center">
            <div className="text-2xl sm:text-3xl font-black text-amber-500 flex items-center justify-center gap-1">
              4.9 <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </div>
            <div className="text-xs text-slate-600 font-semibold mt-1">Average Star Rating</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs text-center">
            <div className="text-2xl sm:text-3xl font-black text-purple-700">
              20+ Cities
            </div>
            <div className="text-xs text-slate-600 font-semibold mt-1">Pan-India Availability</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs text-center">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600 flex items-center justify-center gap-1">
              100% <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="text-xs text-slate-600 font-semibold mt-1">Background Verified</div>
          </div>

        </div>

      </div>
    </section>
  );
}
