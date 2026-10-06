import React from 'react';
import { ShieldCheck, Heart, Lock, AlertTriangle, PhoneCall, CheckCircle2 } from 'lucide-react';

export default function SafetySection() {
  return (
    <section id="safety" className="py-16 md:py-24 bg-white relative border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Safety &amp; Platonic Guidelines
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            100% Platonic, Safe &amp; Consent-First
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            GoPartner is built on uncompromised safety, respect, and professional boundaries. Here is our safety pledge.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="card-clean card-clean-hover p-6 rounded-3xl text-center">
            <div className="w-14 h-14 rounded-2xl bg-violet-100 text-violet-700 flex items-center justify-center mx-auto mb-4">
              <Heart className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Strictly Platonic</h3>
            <p className="text-slate-600 text-xs leading-relaxed font-normal">
              No romantic expectations. Sessions center purely on active listening, warmth, companionship, and stress relief.
            </p>
          </div>

          <div className="card-clean card-clean-hover p-6 rounded-3xl text-center">
            <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Verified Identities</h3>
            <p className="text-slate-600 text-xs leading-relaxed font-normal">
              Every GoPartner undergoes mandatory Aadhaar/PAN background verification, phone authentication, and reference checks.
            </p>
          </div>

          <div className="card-clean card-clean-hover p-6 rounded-3xl text-center">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Zero Tolerance</h3>
            <p className="text-slate-600 text-xs leading-relaxed font-normal">
              Any form of inappropriate advance or breach of consent leads to immediate permanent ban &amp; legal reporting.
            </p>
          </div>

          <div className="card-clean card-clean-hover p-6 rounded-3xl text-center">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
              <PhoneCall className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">24/7 Emergency Helpline</h3>
            <p className="text-slate-600 text-xs leading-relaxed font-normal">
              Live location sharing during sessions and instant 24/7 emergency support line available for both partners and clients.
            </p>
          </div>

        </div>

        {/* Safety Disclaimer Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs shadow-lg">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
            <div className="text-slate-300">
              <span className="font-bold text-white text-sm block">GoPartner Safety Assurance Policy</span>
              <span>All sessions take place in safe public venues (cafes, malls, parks, screen theaters) agreed upon by both parties.</span>
            </div>
          </div>
          <a href="#faqs" className="px-5 py-2.5 rounded-xl bg-violet-700 hover:bg-violet-800 text-white font-bold shrink-0">
            Read Safety Rules FAQ
          </a>
        </div>

      </div>
    </section>
  );
}
