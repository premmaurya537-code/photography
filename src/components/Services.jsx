import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/siteContent';

export default function Services() {
  return (
    <section id="services" className="bg-ivory py-24 sm:py-32" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-6 border-b border-beige-border">
          <div>
            <span className="text-[11px] uppercase tracking-luxury text-champagne-dark font-sans font-medium block mb-3">
              OFFERINGS
            </span>
            <h2
              id="services-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-charcoal"
            >
              The Photography Experience
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col md:items-end">
            <p className="font-sans text-sm sm:text-base text-charcoal-muted tracking-wide font-light md:text-right">
              Thoughtful coverage for every kind of celebration.
            </p>
            <Link
              to="/services"
              className="mt-2 inline-flex items-center space-x-1 text-xs uppercase tracking-luxury text-champagne-dark hover:text-charcoal font-medium font-sans transition-colors"
            >
              <span>View Full Investment & Inclusions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 3-Column Editorial Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="flex flex-col group"
            >
              {/* Service Photograph */}
              <div className="aspect-[4/5] overflow-hidden bg-beige-light mb-6 relative">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  onError={(e) => {
                    if (service.fallbackImage) {
                      e.target.src = service.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover object-center editorial-img duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 border border-charcoal/5 pointer-events-none" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl text-charcoal font-normal mb-3 group-hover:text-champagne-dark transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm text-charcoal-muted font-light leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {/* Minimal Link */}
              <div>
                <Link
                  to="/services"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-luxury text-charcoal font-medium font-sans hover:text-champagne-dark transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-charcoal/20 hover:after:bg-champagne-dark after:transition-colors"
                >
                  <span>{service.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
