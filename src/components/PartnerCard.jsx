import React from 'react';
import { 
  Star, 
  MapPin, 
  CheckCircle2, 
  Calendar,
  ShieldCheck,
  Languages,
  Clock,
  Sparkles
} from 'lucide-react';

export default function PartnerCard({ partner, onBook }) {
  return (
    <div className="bg-white border border-slate-200/90 shadow-md shadow-slate-200/50 hover:shadow-xl hover:border-violet-400 transition-all duration-300 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group">
      
      {/* Top Subtle Gradient Accent Bar */}
      <div className="h-1.5 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 -mx-6 -mt-6 mb-5 rounded-t-3xl" />

      <div>
        {/* Top Header: Online Status & Badge */}
        <div className="flex items-center justify-between mb-4 text-xs">
          <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            {partner.onlineStatus}
          </span>
          <span className="px-3 py-1 rounded-lg bg-violet-50 text-violet-800 font-bold text-[11px] border border-violet-200/80">
            {partner.badge}
          </span>
        </div>

        {/* Companion Profile Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="relative shrink-0">
            <img 
              src={partner.image} 
              alt={partner.name}
              className="w-20 h-20 rounded-2xl object-cover border-2 border-slate-100 shadow-md group-hover:scale-105 transition-transform duration-300"
            />
            {partner.verified && (
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-md" title="Aadhaar & Background Verified">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 fill-white" />
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-black text-slate-900 truncate group-hover:text-violet-700 transition-colors">
                {partner.name}
              </h3>
              <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">{partner.age} yrs</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold mt-1">
              <MapPin className="w-3.5 h-3.5 text-violet-600 shrink-0" />
              <span className="truncate">{partner.city}</span>
              <span>•</span>
              <span className="text-slate-500">{partner.gender}</span>
            </div>

            {/* Star Rating Badge */}
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-lg text-amber-900 font-extrabold text-xs">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{partner.rating}</span>
              </div>
              <span className="text-[11px] text-slate-500 font-semibold">({partner.reviewsCount} reviews)</span>
            </div>
          </div>
        </div>

        {/* Hourly Rate Banner */}
        <div className="bg-gradient-to-r from-violet-50 via-purple-50 to-pink-50 border border-violet-200/80 rounded-2xl p-3.5 mb-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-violet-600" />
            <span className="text-xs text-slate-700 font-bold">Session Rate:</span>
          </div>
          <div>
            <span className="text-2xl font-black text-violet-700">
              ₹{partner.hourlyRate.toLocaleString()}
            </span>
            <span className="text-xs text-slate-500 font-bold">/hr</span>
          </div>
        </div>

        {/* Companion Bio */}
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4 font-medium italic bg-slate-50/80 p-2.5 rounded-xl border border-slate-100">
          "{partner.bio}"
        </p>

        {/* Services Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {partner.services.slice(0, 3).map((service, idx) => (
            <span 
              key={idx}
              className="text-[11px] font-bold bg-slate-100 text-slate-800 border border-slate-200 px-2.5 py-1 rounded-lg"
            >
              {service}
            </span>
          ))}
          {partner.services.length > 3 && (
            <span className="text-[11px] text-slate-500 font-bold self-center">+{partner.services.length - 3} more</span>
          )}
        </div>

        {/* Languages & Experience */}
        <div className="flex items-center justify-between text-[11px] text-slate-600 font-semibold border-t border-slate-100 pt-3 mb-4">
          <span className="flex items-center gap-1">
            <Languages className="w-3.5 h-3.5 text-violet-600" /> {partner.languages.join(', ')}
          </span>
          <span className="text-violet-700 font-bold bg-violet-50 px-2 py-0.5 rounded-md border border-violet-100">
            {partner.experienceYears} yrs exp
          </span>
        </div>
      </div>

      {/* Book Session CTA */}
      <button 
        onClick={() => onBook(partner)}
        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-black text-xs shadow-md shadow-violet-600/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
      >
        <Calendar className="w-4 h-4" />
        <span>Book Session with {partner.name.split(' ')[0]}</span>
      </button>

    </div>
  );
}
