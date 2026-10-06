import React, { useState } from 'react';
import { X, Sparkles, User, Phone, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CITIES_LIST } from '../data/partnersData';

export default function PartnerApplicationModal({ onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Delhi NCR');
  const [gender, setGender] = useState('Female');
  const [bio, setBio] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please fill out your name and phone number.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg glass-card rounded-3xl border border-purple-500/30 p-6 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-2">Application Received!</h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-sm mx-auto mb-6">
              Welcome aboard, <span className="text-purple-300 font-bold">{name}</span>! Our verification manager will contact you on WhatsApp (+91 {phone}) within 2 hours to complete your Aadhaar check.
            </p>

            <div className="p-3 bg-purple-950/40 border border-purple-500/30 rounded-xl text-[11px] text-purple-300 mb-6 text-left space-y-1">
              <div className="font-bold text-white flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Next Steps:
              </div>
              <p>1. Submit government ID verification on WhatsApp.</p>
              <p>2. Complete brief 10-min phone interview.</p>
              <p>3. Pay ₹1,000 annual membership fee and get listed instantly!</p>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold text-xs shadow-lg"
            >
              Done &amp; Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Earn Up to ₹2,000 / Hour
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-white">
              Apply to Become a GoPartner
            </h3>
            <p className="text-slate-400 text-xs mb-6">
              Join India's #1 emotional wellness platform. Keep 80% earnings &amp; work flexible hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Your Full Name</label>
                <input 
                  type="text"
                  placeholder="Enter full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 text-slate-200 rounded-xl p-2.5 outline-none focus:border-purple-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Phone Number</label>
                  <input 
                    type="tel"
                    placeholder="10 digit WhatsApp number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 text-slate-200 rounded-xl p-2.5 outline-none focus:border-purple-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Gender</label>
                  <select 
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 text-slate-200 rounded-xl p-2.5 outline-none focus:border-purple-500"
                  >
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Your City</label>
                <select 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 text-slate-200 rounded-xl p-2.5 outline-none focus:border-purple-500"
                >
                  {CITIES_LIST.filter(c => c !== 'All Cities').map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Short Intro / Bio</label>
                <textarea
                  rows={2}
                  placeholder="Share a bit about your hobbies, listening style, or skills..."
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 text-slate-200 rounded-xl p-2.5 outline-none focus:border-purple-500"
                />
              </div>

              <div className="p-3 bg-purple-950/40 border border-purple-500/30 rounded-xl text-[11px] text-purple-200">
                Annual membership is ₹1,000 (payable after verification). You retain 80% of all session payments.
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-fuchsia-600 to-pink-600 text-white font-extrabold text-xs shadow-xl shadow-fuchsia-600/30 flex items-center justify-center gap-2 mt-2"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                Submit Application
              </button>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
