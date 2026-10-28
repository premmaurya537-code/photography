import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteContent';

export default function TestimonialsPage() {
  return (
    <div className="pt-32 pb-24 sm:pb-32 bg-ivory min-h-screen">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="inline-flex items-center space-x-3 mb-4">
            <span className="w-8 h-[1px] bg-champagne" aria-hidden="true" />
            <span className="text-[11px] uppercase tracking-luxury text-champagne-dark font-sans font-medium">
              PRAISE & REFLECTIONS
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal font-normal mb-6 leading-tight">
            Kind Words
          </h1>
          <p className="font-sans text-base sm:text-lg text-charcoal-muted font-light leading-relaxed">
            The greatest honor of our craft is the enduring trust our couples and their families place in our documentary eye. Here are reflections from celebrations we have documented across India.
          </p>
        </div>

        {/* Testimonials Editorial Grid */}
        <div className="space-y-16 sm:space-y-20 pb-24 border-b border-beige-border">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={item.id}
              className="bg-white/60 border border-beige-border p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row justify-between gap-8 sm:gap-12 relative"
            >
              <div className="max-w-2xl">
                <span className="font-serif text-6xl text-champagne leading-none block mb-4 select-none">
                  “
                </span>
                <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-charcoal font-light italic leading-relaxed mb-6">
                  {item.quote}
                </p>
                <div className="pt-4 border-t border-beige-border/60">
                  <span className="font-sans text-xs uppercase tracking-luxury text-charcoal font-semibold block">
                    {item.couple}
                  </span>
                  <span className="font-sans text-xs text-charcoal-muted font-light tracking-wide mt-1 block">
                    {item.celebration} · {item.location}
                  </span>
                </div>
              </div>

              {/* Number indicator */}
              <div className="self-end md:self-start text-right">
                <span className="font-serif text-4xl sm:text-5xl text-champagne-light/50">
                  0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Demonstration Archive Notice */}
        <div className="py-12 text-center border-b border-beige-border">
          <p className="text-xs text-charcoal-light font-sans tracking-luxury uppercase font-light">
            Demonstration archive · Representative reflections for portfolio presentation
          </p>
        </div>

        {/* Next Step / Inquiry Banner */}
        <div className="mt-20 p-10 sm:p-14 bg-charcoal-cinematic text-ivory text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-4">
            Begin your story with NOOR.
          </h2>
          <p className="font-sans text-sm sm:text-base text-ivory/70 max-w-lg mx-auto font-light mb-8">
            We would love to hear about your plans, destinations, and what matters most to you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-luxury font-sans font-medium px-8 py-4 bg-ivory text-charcoal hover:bg-champagne hover:text-charcoal transition-all"
            >
              <span>Tell Us Your Story</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/stories"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-luxury font-sans font-medium px-8 py-4 border border-ivory/40 text-ivory hover:bg-ivory/10 transition-all"
            >
              <span>Explore Stories Archive</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
