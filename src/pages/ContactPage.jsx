import React from 'react';
import { Mail, MessageSquare, MapPin, Calendar, Clock, Sparkles } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';
import { CONFIG, FAQS } from '../data/siteContent';

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 sm:pb-32 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-3 mb-4">
            <span className="w-8 h-[1px] bg-champagne" aria-hidden="true" />
            <span className="text-[11px] uppercase tracking-luxury text-champagne-dark font-sans font-medium">
              RESERVATIONS & COMMISSIONS
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal font-normal mb-6 leading-tight">
            Tell us your story.
          </h1>
          <p className="font-sans text-base sm:text-lg text-charcoal-muted font-light leading-relaxed">
            Share a little about your celebration, your vision, and what matters most to you. We take on a limited number of commissions each year to ensure personal intention for every couple.
          </p>
        </div>

        {/* Season Calendar Availability Badge */}
        <div className="mb-16 p-6 sm:p-8 bg-white/70 border border-beige-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <div>
              <div className="text-xs uppercase tracking-luxury text-charcoal font-medium font-sans">
                2026 / 2027 Wedding Season
              </div>
              <div className="text-xs text-charcoal-muted font-sans font-light mt-0.5">
                Calendar is actively accepting commissions for autumn, winter, and spring celebrations.
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-xs text-charcoal-muted font-sans font-light">
            <div className="flex items-center space-x-1.5">
              <Clock className="w-4 h-4 text-champagne-dark" />
              <span>Response within 24–48 hours</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <MapPin className="w-4 h-4 text-champagne-dark" />
              <span>Based in India · Traveling Worldwide</span>
            </div>
          </div>
        </div>

        {/* Form and Direct Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Form (8 Columns) */}
          <div className="lg:col-span-8">
            <InquiryForm showHeader={false} />
          </div>

          {/* Direct Concierge & Studio Info (4 Columns) */}
          <div className="lg:col-span-4 space-y-8">
            {/* WhatsApp Concierge Card */}
            <div className="p-8 bg-white/70 border border-beige-border space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal font-normal">
                Direct WhatsApp Concierge
              </h3>
              <p className="font-sans text-xs text-charcoal-muted font-light leading-relaxed">
                Prefer an immediate conversation? Reach out directly via our WhatsApp concierge for quick availability queries.
              </p>
              <div className="pt-2">
                <a
                  href={CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-luxury font-sans font-medium px-5 py-3.5 bg-[#25D366] text-white hover:bg-[#20ba59] transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{CONFIG.whatsappNumber}</span>
                </a>
              </div>
            </div>

            {/* Email & Studio Info */}
            <div className="p-8 bg-white/70 border border-beige-border space-y-4 text-xs font-sans">
              <h3 className="font-serif text-xl text-charcoal font-normal pb-3 border-b border-beige-border">
                Studio Communications
              </h3>

              <div>
                <span className="text-charcoal-muted uppercase tracking-wider block mb-1">Direct Inquiries:</span>
                <a
                  href={`mailto:${CONFIG.email}`}
                  className="text-charcoal font-medium hover:text-champagne-dark transition-colors"
                >
                  {CONFIG.email}
                </a>
              </div>

              <div>
                <span className="text-charcoal-muted uppercase tracking-wider block mb-1">Editorial Instagram:</span>
                <a
                  href={CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal font-medium hover:text-champagne-dark transition-colors"
                >
                  {CONFIG.instagramHandle}
                </a>
              </div>

              <div>
                <span className="text-charcoal-muted uppercase tracking-wider block mb-1">Travel & Logistics:</span>
                <p className="text-charcoal-muted font-light leading-relaxed">
                  Headquartered in India. We regularly travel to Jaipur, Udaipur, Jodhpur, Goa, Kerala, Delhi, Mumbai, Kolkata, and international locations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Booking FAQs */}
        <div className="mt-24 pt-16 border-t border-beige-border">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] uppercase tracking-luxury text-champagne-dark font-sans font-medium block mb-2">
              BOOKING PROTOCOL
            </span>
            <h2 className="font-serif text-3xl text-charcoal font-normal">
              Common Questions Before Reserving
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FAQS.slice(0, 2).map((faq, i) => (
              <div key={i} className="p-6 bg-white/40 border border-beige-border">
                <h3 className="font-serif text-lg text-charcoal mb-2 font-normal">
                  {faq.question}
                </h3>
                <p className="font-sans text-xs text-charcoal-muted font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
