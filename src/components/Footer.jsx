import React from 'react';
import { 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  Shield,
  Users,
  Lock,
  Heart,
  Briefcase,
  ArrowUp
} from 'lucide-react';

export default function Footer({ onOpenAppModal, onOpenApplyModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1120] text-slate-300 text-xs relative overflow-hidden border-t border-slate-800/90 pt-12 pb-8">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. TOP MAIN FOOTER SECTION (5 COLUMNS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">
          
          {/* COL 1 & 2: BRAND INFO & TRUST PILLS & SOCIAL (Lg: 4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Logo Header */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-purple-600 via-fuchsia-600 to-pink-500 p-0.5 shadow-lg shadow-purple-600/20">
                <img src="/gopartner_logo.jpg" alt="GoPartner" className="w-full h-full object-cover rounded-[10px]" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white leading-none">
                  Go<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400">Partner</span>
                </span>
                <span className="text-[9px] text-purple-300 font-extrabold tracking-widest uppercase mt-0.5">
                  EMOTIONAL WELLNESS
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-400 leading-relaxed text-xs font-normal">
              India's most trusted platform for emotional wellness partners, providing safe, consent-first, and professional companionship services across 20+ major cities.
            </p>

            {/* Trust Badges Grid (4 Pills) */}
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-800 p-2 rounded-xl text-slate-300">
                <Shield className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Verified Partners</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-800 p-2 rounded-xl text-slate-300">
                <Users className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>100% Private</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-800 p-2 rounded-xl text-slate-300">
                <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Safe &amp; Secure</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-800 p-2 rounded-xl text-slate-300">
                <Heart className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                <span>Trusted Platform</span>
              </div>
            </div>

            {/* Social Media Icon Circles Row */}
            <div className="flex items-center gap-2 pt-1">
              {/* Instagram */}
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-purple-600 hover:border-purple-600 transition-all" title="Instagram">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-purple-600 hover:border-purple-600 transition-all" title="Facebook">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>

              {/* X / Twitter */}
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-purple-600 hover:border-purple-600 transition-all" title="X (Twitter)">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-purple-600 hover:border-purple-600 transition-all" title="YouTube">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-purple-600 hover:border-purple-600 transition-all" title="LinkedIn">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/>
                </svg>
              </a>

              {/* Telegram */}
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-purple-600 hover:border-purple-600 transition-all" title="Telegram">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-2.07 9.77c-.15.71-.58.88-1.18.55l-3.22-2.37-1.55 1.49c-.17.17-.32.32-.65.32l.23-3.27 5.95-5.37c.26-.23-.06-.36-.4-.13l-7.36 4.63-3.17-.99c-.69-.22-.7-.69.14-1.02l12.4-4.78c.57-.21 1.07.13.88.86z"/>
                </svg>
              </a>
            </div>

          </div>

          {/* COL 2: COMPANY (Lg: 2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-wider">COMPANY</h4>
              <div className="w-6 h-0.5 bg-fuchsia-500 mt-1 rounded-full" />
            </div>

            <ul className="space-y-2.5 font-medium text-slate-400">
              <li>
                <a href="#find-partner" className="hover:text-white flex items-center justify-between group transition-colors">
                  <span>Find a GoPartner</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-purple-400" />
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white flex items-center justify-between group transition-colors">
                  <span>Services &amp; Rates</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-purple-400" />
                </a>
              </li>
              <li>
                <a href="#become-partner" className="text-fuchsia-400 font-extrabold hover:text-fuchsia-300 flex items-center justify-between group transition-colors">
                  <span>Earn ₹2,000/hr</span>
                  <ChevronRight className="w-3.5 h-3.5 text-fuchsia-400" />
                </a>
              </li>
              <li>
                <a href="#safety" className="hover:text-white flex items-center justify-between group transition-colors">
                  <span>Safety Rules</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-purple-400" />
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white flex items-center justify-between group transition-colors">
                  <span>FAQs</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-purple-400" />
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white flex items-center justify-between group transition-colors">
                  <span>About Us</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-purple-400" />
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white flex items-center justify-between group transition-colors">
                  <span>Contact Us</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-purple-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* COL 3: SERVICES (Lg: 2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-wider">SERVICES</h4>
              <div className="w-6 h-0.5 bg-fuchsia-500 mt-1 rounded-full" />
            </div>

            <ul className="space-y-2.5 font-medium text-slate-400">
              <li>
                <a href="#services" className="hover:text-white flex items-center justify-between group transition-colors">
                  <span>In-Person Meeting (₹1.5k/hr)</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-purple-400" />
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white flex items-center justify-between group transition-colors">
                  <span>Movie Companion (₹2k/hr)</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-purple-400" />
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white flex items-center justify-between group transition-colors">
                  <span>Shopping Buddy (₹1.2k/hr)</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-purple-400" />
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white flex items-center justify-between group transition-colors">
                  <span>Elder Care Support (₹1k/hr)</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-purple-400" />
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white flex items-center justify-between group transition-colors">
                  <span>Travel Partner (₹2.5k/hr)</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-purple-400" />
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white flex items-center justify-between group transition-colors">
                  <span>All Services</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-purple-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* COL 4: TOP CITIES (Lg: 2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-wider">TOP CITIES</h4>
              <div className="w-6 h-0.5 bg-blue-500 mt-1 rounded-full" />
            </div>

            <ul className="space-y-2.5 font-medium text-slate-400">
              <li>
                <a href="#cities" className="hover:text-white flex items-center justify-between group transition-colors">
                  <span>Delhi NCR (Delhi, Noida, Gurgaon)</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-purple-400" />
                </a>
              </li>
              <li>
                <a href="#cities" className="hover:text-white flex items-center justify-between group transition-colors">
                  <span>Mumbai &amp; Pune</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-purple-400" />
                </a>
              </li>
              <li>
                <a href="#cities" className="hover:text-white flex items-center justify-between group transition-colors">
                  <span>Bangalore &amp; Hyderabad</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-purple-400" />
                </a>
              </li>
              <li>
                <a href="#cities" className="hover:text-white flex items-center justify-between group transition-colors">
                  <span>Kolkata &amp; Chennai</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-purple-400" />
                </a>
              </li>
              <li>
                <a href="#cities" className="hover:text-white flex items-center justify-between group transition-colors">
                  <span>Jaipur, Lucknow &amp; Indore</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-purple-400" />
                </a>
              </li>
              <li>
                <a href="#cities" className="hover:text-white flex items-center justify-between group transition-colors">
                  <span>All Cities</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-purple-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* COL 5: 24/7 SUPPORT & GET THE APP (Lg: 2 Cols) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* 24/7 Support Sub-block */}
            <div className="space-y-2">
              <h4 className="text-xs font-black text-white uppercase tracking-wider">24/7 SUPPORT</h4>
              <p className="text-[11px] text-slate-400">We're here to help, anytime.</p>
              
              <div className="space-y-2 pt-1 font-semibold text-[11px]">
                <div className="flex items-center gap-2 text-white">
                  <div className="w-6 h-6 rounded-full bg-purple-900/60 border border-purple-500/40 flex items-center justify-center text-purple-300">
                    <Phone className="w-3 h-3" />
                  </div>
                  <span>+91 98105 35398</span>
                </div>

                <div className="flex items-center gap-2 text-slate-300">
                  <div className="w-6 h-6 rounded-full bg-purple-900/60 border border-purple-500/40 flex items-center justify-center text-purple-300">
                    <Mail className="w-3 h-3" />
                  </div>
                  <span className="truncate">support@gopartner.in</span>
                </div>

                <div className="flex items-center gap-2 text-slate-300">
                  <div className="w-6 h-6 rounded-full bg-purple-900/60 border border-purple-500/40 flex items-center justify-center text-purple-300">
                    <MapPin className="w-3 h-3" />
                  </div>
                  <span>New Delhi, India</span>
                </div>
              </div>
            </div>

            {/* Get The App Sub-block */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <h4 className="text-xs font-black text-white uppercase tracking-wider">GET THE APP</h4>
              <p className="text-[11px] text-slate-400">Same trusted experience on mobile.</p>
              
              <div className="flex flex-col gap-2 pt-1">
                {/* Google Play Button */}
                <button 
                  onClick={onOpenAppModal}
                  className="bg-black hover:bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 flex items-center gap-2 text-left cursor-pointer transition-all"
                >
                  <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L18.81,13.97C19.68,13.47 19.68,12.53 18.81,12.03L16.81,10.88L14.81,12.88L16.81,15.12M4.92,1.38L14.28,10.74L12.28,12.74L4.92,1.38Z" />
                  </svg>
                  <div>
                    <span className="text-[9px] text-slate-400 block uppercase font-bold leading-tight">GET IT ON</span>
                    <span className="text-xs font-black text-white leading-none">Google Play</span>
                  </div>
                </button>

                {/* App Store Button */}
                <button 
                  onClick={onOpenAppModal}
                  className="bg-black hover:bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 flex items-center gap-2 text-left cursor-pointer transition-all"
                >
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.09,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  <div>
                    <span className="text-[9px] text-slate-400 block uppercase font-bold leading-tight">Download on the</span>
                    <span className="text-xs font-black text-white leading-none">App Store</span>
                  </div>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* 2. MIDDLE TRUST BAR (4 HORIZONTAL FEATURE BLOCKS) */}
        <div className="border-t border-b border-slate-800/90 py-5 my-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            
            {/* Block 1 */}
            <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-2xl border border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-purple-900/50 border border-purple-500/40 text-purple-300 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <span className="font-extrabold text-white block text-xs">Aadhaar &amp; Background Verified</span>
                <span className="text-[11px] text-slate-400">Only verified, trusted partners</span>
              </div>
            </div>

            {/* Block 2 */}
            <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-2xl border border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-blue-900/50 border border-blue-500/40 text-blue-300 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <span className="font-extrabold text-white block text-xs">Strictly Professional</span>
                <span className="text-[11px] text-slate-400">Consent-first, safe &amp; secure</span>
              </div>
            </div>

            {/* Block 3 */}
            <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-2xl border border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-emerald-900/50 border border-emerald-500/40 text-emerald-300 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <span className="font-extrabold text-white block text-xs">100% Privacy</span>
                <span className="text-[11px] text-slate-400">Your data is never shared</span>
              </div>
            </div>

            {/* Block 4 */}
            <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-2xl border border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-amber-900/50 border border-amber-500/40 text-amber-300 flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <span className="font-extrabold text-white block text-xs">Real People, Real Support</span>
                <span className="text-[11px] text-slate-400">Across 20+ cities in India</span>
              </div>
            </div>

          </div>
        </div>

        {/* 3. BOTTOM BAR (COPYRIGHT, LEGAL LINKS & SCROLL TO TOP) */}
        <div className="flex flex-col lg:flex-row items-center justify-between text-[11px] text-slate-400 gap-4 pt-2">
          
          {/* Copyright & Group */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-center md:text-left">
            <span>© 2026 GoPartner Emotional Wellness Pvt. Ltd. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="flex items-center gap-1 font-semibold text-slate-300">
              <Briefcase className="w-3.5 h-3.5 text-purple-400" /> A SET INDIA BUSINESS GROUP Company
            </span>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-slate-400 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-slate-700">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="text-slate-700">|</span>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            <span className="text-slate-700">|</span>
            <a href="#" className="hover:text-white transition-colors">Code of Conduct</a>
            <span className="text-slate-700">|</span>
            <a href="#" className="hover:text-white transition-colors">Safety Pledge</a>
          </div>

          {/* Scroll To Top Circular Button */}
          <button 
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer shrink-0"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

      </div>
    </footer>
  );
}
