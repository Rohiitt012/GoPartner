import React, { useState } from 'react';
import { 
  Sparkles, 
  DollarSign, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  TrendingUp,
  Award
} from 'lucide-react';

export default function BecomePartnerSection({ onOpenApplyModal }) {
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(1500);

  const grossWeekly = hoursPerWeek * hourlyRate;
  const partnerWeeklyPayout = Math.round(grossWeekly * 0.80);
  const partnerMonthlyPayout = partnerWeeklyPayout * 4;

  return (
    <section id="become-partner" className="py-20 md:py-28 relative overflow-hidden bg-slate-900 text-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Become a Verified GoPartner
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Earn ₹50,000 to ₹1,50,000 / Month
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Provide friendly, platonic emotional support in your city. Work flexible hours, set your rates, and keep 80% of your earnings.
          </p>
        </div>

        {/* Two Column Layout: Calculator & Key Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Interactive Earnings Calculator (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-white text-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xl">
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-violet-700" />
                <h3 className="text-xl font-black text-slate-900">Interactive Income Calculator</h3>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                80% Partner Retention
              </span>
            </div>

            {/* Hours per Week Slider */}
            <div className="mb-6">
              <div className="flex justify-between items-center text-sm font-bold mb-2">
                <span className="text-slate-700">Availability per week:</span>
                <span className="text-violet-700 text-base font-black">{hoursPerWeek} Hours / week</span>
              </div>
              <input 
                type="range"
                min={5}
                max={40}
                step={1}
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full accent-violet-700 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-semibold mt-1.5">
                <span>5 hrs (Part-time)</span>
                <span>20 hrs (Recommended)</span>
                <span>40 hrs (Full-time)</span>
              </div>
            </div>

            {/* Hourly Rate Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center text-sm font-bold mb-2">
                <span className="text-slate-700">Your Hourly Billing Rate:</span>
                <span className="text-violet-700 text-base font-black">₹{hourlyRate.toLocaleString()} / hour</span>
              </div>
              <input 
                type="range"
                min={1000}
                max={2500}
                step={100}
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full accent-violet-700 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-semibold mt-1.5">
                <span>₹1,000 (Elder Care)</span>
                <span>₹1,500 (Meetup/Shopping)</span>
                <span>₹2,500 (Travel Partner)</span>
              </div>
            </div>

            {/* Projected Earnings Result Card */}
            <div className="bg-gradient-to-r from-violet-900 via-purple-900 to-indigo-900 p-6 rounded-2xl text-white text-center shadow-lg">
              <div className="text-xs text-purple-200 font-bold uppercase tracking-wider mb-1">
                Estimated Monthly Take-Home Payout
              </div>
              <div className="text-4xl sm:text-5xl font-black text-amber-300 my-2">
                ₹{partnerMonthlyPayout.toLocaleString()} <span className="text-xs text-purple-200 font-normal">/ month</span>
              </div>
              <p className="text-xs text-purple-100 font-medium">
                Weekly take-home: <strong className="text-white">₹{partnerWeeklyPayout.toLocaleString()}</strong> (Direct bank payout every Monday).
              </p>

              <div className="mt-4 pt-4 border-t border-purple-800/60 flex items-center justify-between text-[11px] text-purple-200 font-medium">
                <span>Annual Membership: <strong className="text-white">₹1,000 Only</strong></span>
                <span>Payout Method: <strong className="text-emerald-400">Weekly UPI Transfer</strong></span>
              </div>
            </div>

            {/* Apply CTA */}
            <button
              onClick={onOpenApplyModal}
              className="w-full mt-6 py-4 rounded-xl btn-primary font-black text-sm flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-amber-300" />
              Apply Now to Become a GoPartner
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

          {/* Perks & Process (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-violet-500/20 text-violet-300 flex items-center justify-center shrink-0 border border-violet-500/30">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">100% Flexible Schedule</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Choose your working hours — weekends, evenings, or full-time. Accept bookings according to your convenience.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0 border border-purple-500/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Strict Safety Protocols</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Strict platonic guidelines enforced. Mandatory Aadhaar verification for all clients and companions.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-500/30">
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Keep 80% Earnings</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Direct payouts into your bank account or UPI with full transparency and zero hidden commissions.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 flex items-center gap-3">
              <Award className="w-8 h-8 text-amber-400 shrink-0" />
              <div>
                <span className="font-bold text-white block">Annual Membership: ₹1,000</span>
                <span>Covers background verification, profile setup, and unlimited booking requests for 1 full year.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
