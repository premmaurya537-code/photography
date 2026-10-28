import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ABOUT_CONTENT } from '../data/siteContent';

export default function About() {
  return (
    <section id="about" className="bg-ivory py-24 sm:py-32 border-b border-beige-border" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photographer Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-beige-light">
              <img
                src={ABOUT_CONTENT.image}
                alt={ABOUT_CONTENT.imageAlt}
                className="w-full h-full object-cover object-center editorial-img duration-700"
                loading="lazy"
              />
            </div>
            {/* Fine framing line */}
            <div className="absolute inset-0 border border-charcoal/5 pointer-events-none" />
          </div>

          {/* Editorial Text Column */}
          <div className="lg:col-span-7 lg:pl-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-3 mb-4">
              <span className="w-6 h-[1px] bg-champagne" aria-hidden="true" />
              <span className="text-[11px] uppercase tracking-luxury text-champagne-dark font-sans font-medium">
                {ABOUT_CONTENT.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h2
              id="about-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal leading-[1.18] mb-6 tracking-tight"
            >
              {ABOUT_CONTENT.headline}
            </h2>

            {/* Supporting Copy */}
            <div className="space-y-4 mb-10 text-charcoal-muted font-sans text-sm sm:text-base leading-relaxed font-light">
              {ABOUT_CONTENT.paragraphs.slice(0, 2).map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Stats / Highlights Row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 py-6 border-y border-beige-border mb-8">
              {ABOUT_CONTENT.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal font-normal">
                    {stat.value}
                  </span>
                  <span className="text-[11px] sm:text-xs text-charcoal-muted uppercase tracking-wider font-sans font-light mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Minimal Link */}
            <div>
              <Link
                to="/about"
                className="group inline-flex items-center space-x-2 text-xs uppercase tracking-luxury text-charcoal font-medium font-sans hover:text-champagne-dark transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-charcoal/30 hover:after:bg-champagne-dark after:transition-colors"
              >
                <span>Read Our Full Story & Philosophy</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
