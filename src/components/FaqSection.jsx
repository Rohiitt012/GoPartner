import React, { useState } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  Search, 
  Sparkles, 
  ShieldCheck, 
  PhoneCall, 
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  ArrowRight,
  Filter
} from 'lucide-react';
import { FAQ_DATA } from '../data/faqData';

const FAQ_CATEGORIES = ["All FAQs", "Safety & Rules", "Booking & Services", "Earnings & Joining"];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [faqSearch, setFaqSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState("All FAQs");
  const [helpfulFeedback, setHelpfulFeedback] = useState({});

  // Filter FAQs
  const filteredFaqs = FAQ_DATA.filter(faq => {
    // Search query match
    const matchesSearch = 
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase());

    // Category match logic
    if (activeCategory === "Safety & Rules") {
      return matchesSearch && (faq.question.includes("safe") || faq.question.includes("dating") || faq.question.includes("rules") || faq.question.includes("wellness"));
    }
    if (activeCategory === "Booking & Services") {
      return matchesSearch && (faq.question.includes("find") || faq.question.includes("services") || faq.question.includes("cost") || faq.question.includes("GoPartner?"));
    }
    if (activeCategory === "Earnings & Joining") {
      return matchesSearch && (faq.question.includes("earn") || faq.question.includes("become") || faq.question.includes("cities"));
    }
    return matchesSearch;
  });

  const handleFeedback = (idx, type) => {
    setHelpfulFeedback(prev => ({ ...prev, [idx]: type }));
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-violet-800 text-xs font-bold mb-3 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-violet-600" /> Got Questions? We've Got Answers
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
            Everything you need to know about GoPartner companionship, safety, pricing, and partner earnings.
          </p>

          {/* Search Box */}
          <div className="relative mt-8 max-w-xl mx-auto">
            <Search className="w-4.5 h-4.5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search questions e.g. safety, earnings, dating, pricing..."
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-2xl pl-11 pr-4 py-3.5 text-xs sm:text-sm text-slate-900 font-semibold outline-none focus:border-violet-600 focus:ring-4 focus:ring-violet-500/10 shadow-sm transition-all placeholder:text-slate-400"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {FAQ_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-violet-700 text-white shadow-md shadow-violet-600/20'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Layout: Left Contact Card & Right Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Support Card (4 Cols) */}
          <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-600 to-fuchsia-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-black text-slate-900">Still Need Help?</h3>
                <span className="text-xs text-slate-500 font-medium">We're available 24/7</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Can't find the answer you're looking for? Reach out to our 24/7 dedicated support team on WhatsApp or phone call.
            </p>

            <div className="space-y-3 pt-2">
              <a 
                href="tel:+919810535398"
                className="w-full py-3 px-4 rounded-xl bg-violet-50 hover:bg-violet-100 border border-violet-200 text-violet-900 font-bold text-xs flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-violet-700" />
                  <span>Call +91 98105 35398</span>
                </div>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a 
                href="#safety"
                className="w-full py-3 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 font-bold text-xs flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Read Safety Policy</span>
                </div>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 font-medium flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Average support response time: <strong>Under 15 minutes</strong></span>
            </div>
          </div>

          {/* Right Accordion List (8 Cols) */}
          <div className="lg:col-span-8 space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div 
                    key={index}
                    className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen 
                        ? 'border-l-4 border-l-violet-600 border-slate-200 shadow-md' 
                        : 'border-slate-200/90 shadow-2xs hover:border-violet-300'
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer select-none"
                    >
                      <span className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                        {faq.question}
                      </span>

                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen ? 'bg-violet-700 text-white rotate-180' : 'bg-slate-100 text-slate-600'
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-slate-700 text-xs sm:text-sm leading-relaxed font-normal border-t border-slate-100 animate-in fade-in">
                        <p className="mb-4">{faq.answer}</p>
                        
                        {/* Was this helpful feedback bar */}
                        <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
                          <span>Was this answer helpful?</span>
                          
                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => handleFeedback(index, 'yes')}
                              className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold flex items-center gap-1 transition-colors ${
                                helpfulFeedback[index] === 'yes'
                                  ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                                  : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700'
                              }`}
                            >
                              <ThumbsUp className="w-3 h-3" /> Yes
                            </button>

                            <button 
                              onClick={() => handleFeedback(index, 'no')}
                              className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold flex items-center gap-1 transition-colors ${
                                helpfulFeedback[index] === 'no'
                                  ? 'bg-rose-50 text-rose-700 border-rose-300'
                                  : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700'
                              }`}
                            >
                              <ThumbsDown className="w-3 h-3" /> No
                            </button>
                          </div>
                        </div>

                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="bg-white p-8 text-center rounded-2xl border border-slate-200">
                <p className="text-slate-600 text-sm font-bold">No FAQs match your search or filter.</p>
                <button 
                  onClick={() => { setFaqSearch(''); setActiveCategory("All FAQs"); }}
                  className="mt-3 text-xs font-bold text-violet-700 underline"
                >
                  Reset FAQ Filter
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
