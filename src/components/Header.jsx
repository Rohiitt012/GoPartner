import React, { useState } from 'react';
import { 
  Heart,
  ShieldCheck, 
  Users,
  Sparkles,
  Headphones,
  Globe,
  ChevronDown,
  Search,
  LayoutGrid,
  TrendingUp,
  Shield,
  MapPin,
  HelpCircle,
  Smartphone,
  UserPlus,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import { CITIES_LIST } from '../data/partnersData';

export default function Header({ 
  selectedCity, 
  setSelectedCity, 
  onOpenApplyModal, 
  onOpenAppModal 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('find-partner');
  const [language, setLanguage] = useState('English');

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-50/80 backdrop-blur-md">
      
      {/* 1. TOP BAR (Deep Purple Gradient Banner) */}
      <div className="bg-gradient-to-r from-[#1e1035] via-[#2d124d] to-[#4c126b] text-white text-[11px] font-medium py-2 px-4 border-b border-purple-900/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left Items */}
          <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-1.5 shrink-0 font-semibold text-purple-200">
              <Heart className="w-3.5 h-3.5 text-fuchsia-400 fill-fuchsia-400/20" />
              <span>India's First Platform for Emotional Wellness Partners</span>
            </div>

            <span className="text-purple-400/50 hidden sm:inline">|</span>

            <div className="hidden sm:flex items-center gap-1.5 shrink-0 text-purple-200">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-300" />
              <span>Safe &amp; Verified</span>
            </div>

            <div className="hidden md:flex items-center gap-1.5 shrink-0 text-purple-200">
              <Users className="w-3.5 h-3.5 text-purple-300" />
              <span>Trusted Partners</span>
            </div>

            <div className="hidden lg:flex items-center gap-1.5 shrink-0 text-amber-300 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Earn Upto ₹2k/hr</span>
            </div>
          </div>

          {/* Right Items */}
          <div className="flex items-center gap-3 shrink-0 text-xs">
            <div className="flex items-center gap-1.5 text-purple-200 font-semibold cursor-pointer hover:text-white">
              <Headphones className="w-3.5 h-3.5 text-purple-300" />
              <span className="hidden sm:inline">24×7 Support</span>
            </div>

            <span className="text-purple-400/50">|</span>

            {/* Language Selector */}
            <div className="relative flex items-center gap-1 text-purple-200 font-semibold cursor-pointer hover:text-white">
              <Globe className="w-3.5 h-3.5 text-purple-300" />
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent text-purple-200 font-semibold text-[11px] outline-none cursor-pointer pr-1"
              >
                <option value="English" className="bg-[#1e1035] text-white">English</option>
                <option value="Hindi" className="bg-[#1e1035] text-white">Hindi (हिंदी)</option>
              </select>
            </div>
          </div>

        </div>
      </div>

      {/* 2. MAIN FLOATING NAVBAR (White Curved Pill Bar) */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2.5">
        <div className="bg-white rounded-2xl lg:rounded-full px-4 sm:px-6 py-2.5 shadow-lg shadow-purple-950/5 border border-slate-200/90 flex items-center justify-between gap-2">
          
          {/* Logo Section */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-fuchsia-600 to-pink-500 p-0.5 shadow-md shadow-purple-600/20 group-hover:scale-105 transition-transform duration-200">
              <img 
                src="/gopartner_logo.jpg" 
                alt="GoPartner Logo" 
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-none">
                Go<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500">Partner</span>
              </span>
              <span className="text-[8px] sm:text-[9px] text-slate-500 font-extrabold tracking-widest uppercase mt-0.5">
                Emotional Wellness
              </span>
            </div>
          </a>

          <div className="hidden lg:block h-6 w-px bg-slate-200 mx-1" />

          {/* Navigation Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-bold text-slate-700">
            
            {/* Find Partner */}
            <a 
              href="#find-partner"
              onClick={() => setActiveTab('find-partner')}
              className={`relative px-3 py-2 rounded-xl flex items-center gap-1.5 transition-all ${
                activeTab === 'find-partner'
                  ? 'bg-purple-50 text-purple-700 font-extrabold'
                  : 'hover:bg-slate-100 hover:text-purple-700'
              }`}
            >
              <Search className="w-4 h-4 text-purple-600" />
              <span>Find Partner</span>
              {activeTab === 'find-partner' && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-purple-600 rounded-full" />
              )}
            </a>

            {/* Services & Rates */}
            <a 
              href="#services"
              onClick={() => setActiveTab('services')}
              className={`relative px-3 py-2 rounded-xl flex items-center gap-1.5 transition-all ${
                activeTab === 'services'
                  ? 'bg-purple-50 text-purple-700 font-extrabold'
                  : 'hover:bg-slate-100 hover:text-purple-700'
              }`}
            >
              <LayoutGrid className="w-4 h-4 text-slate-500" />
              <span>Services &amp; Rates</span>
            </a>

            {/* Earn ₹2k/hr */}
            <a 
              href="#become-partner"
              onClick={() => setActiveTab('become-partner')}
              className={`relative px-3 py-2 rounded-xl flex items-center gap-1.5 transition-all ${
                activeTab === 'become-partner'
                  ? 'bg-purple-50 text-purple-700 font-extrabold'
                  : 'hover:bg-slate-100 hover:text-purple-700'
              }`}
            >
              <TrendingUp className="w-4 h-4 text-amber-500" />
              <span>Earn <strong className="text-purple-700 font-black">₹2k/hr</strong></span>
            </a>

            {/* Safety Rules */}
            <a 
              href="#safety"
              onClick={() => setActiveTab('safety')}
              className={`relative px-3 py-2 rounded-xl flex items-center gap-1.5 transition-all ${
                activeTab === 'safety'
                  ? 'bg-purple-50 text-purple-700 font-extrabold'
                  : 'hover:bg-slate-100 hover:text-purple-700'
              }`}
            >
              <Shield className="w-4 h-4 text-slate-500" />
              <span>Safety Rules</span>
            </a>

            {/* Cities */}
            <a 
              href="#cities"
              onClick={() => setActiveTab('cities')}
              className={`relative px-3 py-2 rounded-xl flex items-center gap-1.5 transition-all ${
                activeTab === 'cities'
                  ? 'bg-purple-50 text-purple-700 font-extrabold'
                  : 'hover:bg-slate-100 hover:text-purple-700'
              }`}
            >
              <MapPin className="w-4 h-4 text-slate-500" />
              <span>Cities</span>
            </a>

            {/* FAQs */}
            <a 
              href="#faqs"
              onClick={() => setActiveTab('faqs')}
              className={`relative px-3 py-2 rounded-xl flex items-center gap-1.5 transition-all ${
                activeTab === 'faqs'
                  ? 'bg-purple-50 text-purple-700 font-extrabold'
                  : 'hover:bg-slate-100 hover:text-purple-700'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-slate-500" />
              <span>FAQs</span>
            </a>

          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            
            {/* City Selector Pill */}
            <div className="relative flex items-center bg-slate-100 hover:bg-slate-200/80 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-purple-600 mr-1.5 shrink-0" />
              <select 
                value={selectedCity} 
                onChange={(e) => setSelectedCity(e.target.value)}
                className="bg-transparent text-slate-900 font-black outline-none cursor-pointer pr-1"
              >
                {CITIES_LIST.map((city) => (
                  <option key={city} value={city} className="bg-white text-slate-900 font-semibold">
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Get App Button */}
            <button 
              onClick={onOpenAppModal}
              className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Smartphone className="w-4 h-4 text-purple-600" />
              <span>Get App</span>
            </button>

            {/* Become a GoPartner CTA Button */}
            <button 
              onClick={onOpenApplyModal}
              className="px-4 py-2.5 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-black text-xs shadow-md shadow-purple-600/30 flex items-center gap-2 transition-transform hover:scale-102 cursor-pointer"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Become a GoPartner</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* 3. MOBILE DRAWER MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-6 space-y-4 animate-in slide-in-from-top-4 shadow-xl">
          <div className="flex items-center gap-2 bg-slate-100 p-3 rounded-xl border border-slate-200">
            <MapPin className="w-4 h-4 text-purple-600" />
            <span className="text-xs text-slate-500 font-medium">City Location:</span>
            <select 
              value={selectedCity} 
              onChange={(e) => {
                setSelectedCity(e.target.value);
                setMobileMenuOpen(false);
              }}
              className="bg-transparent text-slate-900 text-xs font-bold outline-none w-full"
            >
              {CITIES_LIST.map((city) => (
                <option key={city} value={city} className="bg-white text-slate-900">
                  {city}
                </option>
              ))}
            </select>
          </div>

          <nav className="flex flex-col gap-2 font-bold text-slate-700 text-xs">
            <a 
              href="#find-partner" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl bg-purple-50 text-purple-700 flex items-center gap-2"
            >
              <Search className="w-4 h-4 text-purple-600" />
              Find Partner
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-slate-100 flex items-center gap-2"
            >
              <LayoutGrid className="w-4 h-4 text-slate-500" />
              Services &amp; Rates
            </a>
            <a 
              href="#become-partner" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-slate-100 text-purple-700 flex items-center gap-2"
            >
              <TrendingUp className="w-4 h-4 text-amber-500" />
              Earn ₹2k/hr
            </a>
            <a 
              href="#safety" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-slate-100 flex items-center gap-2"
            >
              <Shield className="w-4 h-4 text-slate-500" />
              Safety Rules
            </a>
            <a 
              href="#cities" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-slate-100 flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-slate-500" />
              Cities
            </a>
            <a 
              href="#faqs" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-slate-100 flex items-center gap-2"
            >
              <HelpCircle className="w-4 h-4 text-slate-500" />
              FAQs
            </a>
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <button 
              onClick={() => {
                onOpenApplyModal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 text-white font-black text-xs shadow-md flex items-center justify-center gap-2"
            >
              <UserPlus className="w-4 h-4" />
              Become a GoPartner
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button 
              onClick={() => {
                onOpenAppModal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs flex items-center justify-center gap-2"
            >
              <Smartphone className="w-4 h-4 text-purple-600" />
              Get Mobile App
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
