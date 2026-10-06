import React from 'react';
import { X, Smartphone, QrCode, Download, Apple, CheckCircle2 } from 'lucide-react';

export default function AppDownloadModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-md glass-card rounded-3xl border border-purple-500/30 p-6 shadow-2xl text-center overflow-hidden">
        
        {/* Close */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-fuchsia-600 p-0.5 mx-auto mb-4 shadow-lg shadow-purple-600/30">
          <img src="/gopartner_logo.jpg" alt="GoPartner" className="w-full h-full object-cover rounded-[14px]" />
        </div>

        <h3 className="text-2xl font-extrabold text-white mb-1">
          Download GoPartner App
        </h3>
        <p className="text-xs text-slate-300 mb-6">
          Scan QR code or download directly on your phone to book verified partners on the go.
        </p>

        {/* QR Code Container */}
        <div className="bg-white p-4 rounded-2xl w-48 h-48 mx-auto mb-6 shadow-inner flex flex-col items-center justify-center border-2 border-purple-300">
          {/* SVG QR Code Simulation */}
          <svg className="w-36 h-36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="white"/>
            <rect x="10" y="10" width="30" height="30" fill="#7e22ce"/>
            <rect x="15" y="15" width="20" height="20" fill="white"/>
            <rect x="20" y="20" width="10" height="10" fill="#7e22ce"/>
            
            <rect x="60" y="10" width="30" height="30" fill="#7e22ce"/>
            <rect x="65" y="15" width="20" height="20" fill="white"/>
            <rect x="70" y="20" width="10" height="10" fill="#7e22ce"/>

            <rect x="10" y="60" width="30" height="30" fill="#7e22ce"/>
            <rect x="15" y="65" width="20" height="20" fill="white"/>
            <rect x="20" y="70" width="10" height="10" fill="#7e22ce"/>

            <path d="M50 10 H55 V25 H50 Z" fill="#7e22ce"/>
            <path d="M50 35 H65 V40 H50 Z" fill="#7e22ce"/>
            <path d="M10 50 H30 V55 H10 Z" fill="#7e22ce"/>
            <path d="M50 50 H90 V60 H50 Z" fill="#7e22ce"/>
            <path d="M60 70 H90 V90 H60 Z" fill="#7e22ce"/>
            <rect x="70" y="75" width="10" height="10" fill="white"/>
          </svg>
          <span className="text-[10px] text-slate-800 font-bold mt-1">Scan with phone camera</span>
        </div>

        {/* Buttons */}
        <div className="space-y-2 text-xs">
          <button 
            onClick={() => alert('Downloading GoPartner Android APK...')}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold flex items-center justify-center gap-2 shadow-lg"
          >
            <Download className="w-4 h-4" />
            Download Android App (Google Play)
          </button>
          
          <button 
            onClick={() => alert('iOS App coming soon on Apple App Store!')}
            className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-medium flex items-center justify-center gap-2 hover:bg-slate-800"
          >
            <Apple className="w-4 h-4 text-slate-400" />
            App Store (iOS) — Coming Soon
          </button>
        </div>

      </div>
    </div>
  );
}
