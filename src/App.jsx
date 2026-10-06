import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import PartnersSection from './components/PartnersSection';
import BecomePartnerSection from './components/BecomePartnerSection';
import SafetySection from './components/SafetySection';
import CitiesGrid from './components/CitiesGrid';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import PartnerApplicationModal from './components/PartnerApplicationModal';
import AppDownloadModal from './components/AppDownloadModal';
import { PARTNERS_DATA } from './data/partnersData';

export default function App() {
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [selectedService, setSelectedService] = useState('All Services');
  const [genderFilter, setGenderFilter] = useState('All');

  // Modals state
  const [activeBookingPartner, setActiveBookingPartner] = useState(null);
  const [activeBookingService, setActiveBookingService] = useState(null);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [showAppModal, setShowAppModal] = useState(false);

  const handleBookPartner = (partner) => {
    setActiveBookingPartner(partner);
    setActiveBookingService(null);
  };

  const handleSelectService = (service) => {
    setActiveBookingService(service);
    setActiveBookingPartner(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-fuchsia-500 selection:text-white">
      
      {/* Header */}
      <Header 
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        onOpenApplyModal={() => setShowApplyModal(true)}
        onOpenAppModal={() => setShowAppModal(true)}
      />

      {/* Hero Section */}
      <Hero 
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        genderFilter={genderFilter}
        setGenderFilter={setGenderFilter}
        onOpenApplyModal={() => setShowApplyModal(true)}
      />

      {/* Services & Rates */}
      <ServicesGrid 
        onSelectService={handleSelectService}
      />

      {/* Partners List */}
      <PartnersSection 
        partners={PARTNERS_DATA}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        genderFilter={genderFilter}
        setGenderFilter={setGenderFilter}
        onBookPartner={handleBookPartner}
      />

      {/* Become a GoPartner Earnings Section */}
      <BecomePartnerSection 
        onOpenApplyModal={() => setShowApplyModal(true)}
      />

      {/* Safety & Guidelines */}
      <SafetySection />

      {/* Cities Grid */}
      <CitiesGrid 
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />

      {/* User Reviews */}
      <Testimonials />

      {/* FAQs */}
      <FaqSection />

      {/* Footer */}
      <Footer 
        onOpenAppModal={() => setShowAppModal(true)}
        onOpenApplyModal={() => setShowApplyModal(true)}
      />


      {/* Modals */}
      {(activeBookingPartner || activeBookingService) && (
        <BookingModal 
          partner={activeBookingPartner}
          service={activeBookingService}
          onClose={() => {
            setActiveBookingPartner(null);
            setActiveBookingService(null);
          }}
        />
      )}

      {showApplyModal && (
        <PartnerApplicationModal 
          onClose={() => setShowApplyModal(false)}
        />
      )}

      {showAppModal && (
        <AppDownloadModal 
          onClose={() => setShowAppModal(false)}
        />
      )}

    </div>
  );
}
