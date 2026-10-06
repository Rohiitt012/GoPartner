import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';

const REVIEWS = [
  {
    name: "Vikram Malhotra",
    city: "Delhi NCR",
    role: "IT Professional",
    rating: 5,
    text: "Moving to Gurgaon left me feeling isolated. Booking a GoPartner movie companion transformed my weekend. We watched the film, had coffee, and talked without any pressure. 10/10 experience!"
  },
  {
    name: "Meera Krishnan",
    city: "Bangalore",
    role: "Senior Associate",
    rating: 5,
    text: "My elderly mother needed someone to walk with her in Indiranagar park and accompany her to routine doctor appointments. Our GoPartner Priya was extraordinarily gentle and caring."
  },
  {
    name: "Rohan V.",
    city: "Mumbai",
    role: "Verified GoPartner",
    rating: 5,
    text: "I earn ₹75,000/month working part-time on weekends as a GoPartner. The platform handles background checks professionally and payouts hit my account on time every Monday."
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Real User Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Trusted by 50,000+ People Across India
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Read how GoPartner emotional wellness companionship is creating genuine, platonic human bonds.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="card-clean card-clean-hover p-6 rounded-3xl flex flex-col justify-between bg-white">
              <div>
                <Quote className="w-8 h-8 text-violet-400 mb-3" />
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6 font-normal">
                  "{review.text}"
                </p>
              </div>

              <div className="border-t border-slate-100 pt-4 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-900 block">{review.name}</span>
                  <span className="text-slate-500 text-[11px] font-medium">{review.role}</span>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-violet-50 text-violet-800 text-[10px] font-bold border border-violet-100">
                  {review.city}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
