import React from 'react';
import { 
  Users, 
  Film, 
  ShoppingBag, 
  HeartHandshake, 
  Coffee, 
  PartyPopper, 
  Stethoscope, 
  Home, 
  Compass, 
  MessageCircleHeart,
  ArrowRight,
  Sparkles,
  Check
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

const ICON_MAP = {
  Users: Users,
  Film: Film,
  ShoppingBag: ShoppingBag,
  HeartHandshake: HeartHandshake,
  Coffee: Coffee,
  PartyPopper: PartyPopper,
  Stethoscope: Stethoscope,
  Home: Home,
  Compass: Compass,
  MessageCircleHeart: MessageCircleHeart
};

export default function ServicesGrid({ onSelectService }) {
  return (
    <section id="services" className="py-16 md:py-24 bg-white relative border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-violet-800 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Transparent Service Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Companionship Services &amp; Hourly Rates
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            All services are strictly platonic, background-checked, and billed transparently per hour without any hidden charges.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => {
            const IconComponent = ICON_MAP[service.icon] || Users;

            return (
              <div 
                key={service.id}
                className="card-clean card-clean-hover p-6 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  {/* Top Category & Price */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-violet-50 text-violet-700 border border-violet-200/60">
                      {service.category}
                    </span>
                    <div className="text-right">
                      <span className="text-xl font-black text-slate-900">₹{service.price.toLocaleString()}</span>
                      <span className="text-xs text-slate-500 font-semibold">/{service.unit}</span>
                    </div>
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-violet-100 text-violet-700 flex items-center justify-center shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-violet-700 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                    {service.description}
                  </p>

                  {/* Popular For */}
                  <div className="space-y-1.5 mb-6">
                    {service.popularFor.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Book Button */}
                <button
                  onClick={() => onSelectService(service)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-violet-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Book {service.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
