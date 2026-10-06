import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  User,
  Phone
} from 'lucide-react';

export default function BookingModal({ partner, service, onClose }) {
  const [sessionDate, setSessionDate] = useState(
    new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );
  const [durationHours, setDurationHours] = useState(2);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState(
    service ? service.title : (partner ? partner.services[0] : 'In-Person Meeting')
  );
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [venueAddress, setVenueAddress] = useState('');
  const [agreePlatonic, setAgreePlatonic] = useState(true);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const hourlyRate = partner ? partner.hourlyRate : (service ? service.price : 1500);
  const totalAmount = hourlyRate * durationHours;

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    if (!customerPhone || !customerName) {
      alert('Please fill in your name and phone number.');
      return;
    }
    setBookingConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-slate-200 p-6 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {bookingConfirmed ? (
          /* Confirmation View */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">Session Request Confirmed!</h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-sm mx-auto mb-6">
              Thank you, <span className="text-violet-700 font-bold">{customerName}</span>. Your booking request for <span className="text-violet-700 font-bold">{selectedServiceTitle}</span> has been assigned!
            </p>

            {/* Details Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left text-xs space-y-2 mb-6">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-medium">Companion:</span>
                <span className="font-bold text-slate-900">{partner ? partner.name : 'Verified GoPartner'}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-medium">Date &amp; Duration:</span>
                <span className="font-bold text-violet-700">{sessionDate} ({durationHours} hours)</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-medium">Phone:</span>
                <span className="font-bold text-slate-900">+91 {customerPhone}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-slate-500 font-medium">Total Booking Amount:</span>
                <span className="font-black text-violet-700 text-sm">₹{totalAmount.toLocaleString()}</span>
              </div>
            </div>

            <div className="p-3 bg-violet-50 border border-violet-200 rounded-xl text-[11px] text-violet-800 mb-6 flex items-center gap-2 text-left font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Our team will message you on WhatsApp within 15 minutes to verify safety guidelines and venue details.</span>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl btn-primary font-bold text-xs shadow-md"
            >
              Done &amp; Close Window
            </button>
          </div>
        ) : (
          /* Form View */
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-violet-100 border border-violet-200 text-violet-800 text-[10px] font-bold uppercase tracking-wider">
                Safe &amp; Platonic Session
              </span>
            </div>

            <h3 className="text-2xl font-black text-slate-900">
              {partner ? `Book Session with ${partner.name}` : `Book ${service ? service.title : 'Companion'}`}
            </h3>

            <p className="text-slate-500 text-xs mb-6 font-medium">
              Hourly Rate: <span className="text-violet-700 font-bold">₹{hourlyRate.toLocaleString()}/hr</span> • Choose preferred date &amp; duration.
            </p>

            <form onSubmit={handleSubmitBooking} className="space-y-4 text-xs font-semibold">
              
              {/* Service Selection */}
              <div>
                <label className="block text-slate-700 mb-1">Service Type</label>
                <select 
                  value={selectedServiceTitle}
                  onChange={(e) => setSelectedServiceTitle(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl p-2.5 outline-none focus:border-violet-600"
                >
                  {partner ? (
                    partner.services.map((s, idx) => (
                      <option key={idx} value={s}>{s}</option>
                    ))
                  ) : (
                    <option value={selectedServiceTitle}>{selectedServiceTitle}</option>
                  )}
                </select>
              </div>

              {/* Date & Duration Row */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-violet-600" /> Preferred Date
                  </label>
                  <input 
                    type="date"
                    value={sessionDate}
                    onChange={(e) => setSessionDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl p-2.5 outline-none focus:border-violet-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-slate-700 mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-violet-600" /> Duration (Hours)
                  </label>
                  <select 
                    value={durationHours}
                    onChange={(e) => setDurationHours(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl p-2.5 outline-none focus:border-violet-600"
                  >
                    <option value={1}>1 Hour (₹{hourlyRate})</option>
                    <option value={2}>2 Hours (₹{hourlyRate * 2})</option>
                    <option value={3}>3 Hours (₹{hourlyRate * 3})</option>
                    <option value={4}>4 Hours (₹{hourlyRate * 4})</option>
                    <option value={6}>Full Day (6 Hours)</option>
                  </select>
                </div>
              </div>

              {/* Customer Name & Phone */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 mb-1 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-violet-600" /> Your Full Name
                  </label>
                  <input 
                    type="text"
                    placeholder="Enter your name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl p-2.5 outline-none focus:border-violet-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-slate-700 mb-1 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-violet-600" /> Phone / WhatsApp
                  </label>
                  <input 
                    type="tel"
                    placeholder="10 digit number"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl p-2.5 outline-none focus:border-violet-600"
                    required
                  />
                </div>
              </div>

              {/* Venue Address */}
              <div>
                <label className="block text-slate-700 mb-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-violet-600" /> Session Location / Cafe / City
                </label>
                <input 
                  type="text"
                  placeholder="e.g. Starbucks Cafe, Connaught Place, Delhi"
                  value={venueAddress}
                  onChange={(e) => setVenueAddress(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl p-2.5 outline-none focus:border-violet-600"
                  required
                />
              </div>

              {/* Pricing Summary */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 flex items-center justify-between">
                <div>
                  <span className="text-slate-500 text-[11px] block font-medium">Total Price</span>
                  <span className="text-slate-700 font-bold">{durationHours} hrs × ₹{hourlyRate}/hr</span>
                </div>
                <div className="text-right">
                  <span className="text-xl font-black text-violet-700">
                    ₹{totalAmount.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Platonic Policy Agreement */}
              <label className="flex items-start gap-2 cursor-pointer pt-1">
                <input 
                  type="checkbox"
                  checked={agreePlatonic}
                  onChange={(e) => setAgreePlatonic(e.target.checked)}
                  className="mt-0.5 rounded border-slate-300 text-violet-600 focus:ring-violet-500"
                  required
                />
                <span className="text-[11px] text-slate-600 leading-snug font-normal">
                  I agree that GoPartner is strictly 100% platonic emotional wellness companion platform. Romantic or inappropriate behavior is strictly prohibited.
                </span>
              </label>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl btn-primary font-bold text-sm flex items-center justify-center gap-2 mt-2"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                Confirm Booking (₹{totalAmount.toLocaleString()})
              </button>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
