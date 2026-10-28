import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteContent';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-ivory-light py-24 sm:py-32 border-t border-b border-beige-border"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 sm:mb-20">
          <span className="text-[11px] uppercase tracking-luxury text-champagne-dark font-sans font-medium block mb-3">
            PRAISE & REFLECTIONS
          </span>
          <h2
            id="testimonials-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-charcoal"
          >
            Kind Words
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-8 h-[1px] bg-champagne" aria-hidden="true" />
          </div>
        </div>

        {/* Two-Column Editorial Testimonial Grid with Fine Central Divider */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 relative">
          {TESTIMONIALS.slice(0, 2).map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col justify-between ${
                index === 1 ? 'md:pl-12 lg:pl-16' : 'md:pr-12 lg:pr-16 md:border-r md:border-beige-border'
              }`}
            >
              {/* Quotation Mark / Accent */}
              <div>
                <span className="font-serif text-5xl text-champagne leading-none block mb-4 select-none">
                  “
                </span>
                <p className="font-serif text-lg sm:text-xl lg:text-2xl text-charcoal font-normal italic leading-relaxed mb-8">
                  {item.quote}
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-beige-border/60">
                <span className="font-sans text-xs uppercase tracking-luxury text-charcoal font-semibold block">
                  {item.couple}
                </span>
                <span className="font-sans text-xs text-charcoal-muted font-light tracking-wide mt-1 block">
                  {item.celebration} · {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Multi-Page Navigation link to Kind Words */}
        <div className="mt-16 pt-8 border-t border-beige-border text-center flex flex-col items-center">
          <Link
            to="/kind-words"
            className="group inline-flex items-center space-x-2 text-xs uppercase tracking-luxury text-charcoal font-medium font-sans hover:text-champagne-dark transition-colors py-1"
          >
            <span>Read More Reflections From Our Couples</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <p className="mt-4 text-[11px] text-charcoal-light font-sans tracking-wider uppercase font-light">
            Demonstration archive · Representative reflections for portfolio presentation
          </p>
        </div>
      </div>
    </section>
  );
}
