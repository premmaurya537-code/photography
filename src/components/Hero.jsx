import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { HERO_CONTENT } from '../data/siteContent';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end justify-start overflow-hidden pt-24 pb-16 md:pb-24 lg:pb-28"
      aria-label="Hero Introduction"
    >
      {/* Background Image Container with Cinematic Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_CONTENT.image}
          alt={HERO_CONTENT.imageAlt}
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
          fetchPriority="high"
          loading="eager"
        />
        {/* Editorial Multi-Stop Gradient Overlays for Maximum Text Legibility & Subject Visibility */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-charcoal-cinematic/95 via-charcoal-cinematic/55 to-charcoal-cinematic/30"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-charcoal-cinematic/80 via-charcoal-cinematic/40 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Hero Content Block */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-ivory">
        <div className="max-w-3xl">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center space-x-3 mb-4 sm:mb-6">
            <span className="w-8 h-[1px] bg-champagne" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs uppercase tracking-luxury text-champagne-light font-sans font-medium">
              {HERO_CONTENT.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-normal leading-[1.08] tracking-tight mb-4 sm:mb-6 text-ivory">
            Your story, <br />
            <span className="italic font-light text-champagne-light">beautifully remembered.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl font-sans text-ivory/85 font-light tracking-wide max-w-xl mb-8 sm:mb-10 leading-relaxed">
            {HERO_CONTENT.supporting}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-5">
            <Link
              to={HERO_CONTENT.primaryHref}
              className="inline-flex items-center justify-center text-xs uppercase tracking-luxury font-sans font-medium px-8 py-3.5 bg-ivory text-charcoal hover:bg-champagne hover:text-charcoal-dark transition-all duration-300 text-center"
            >
              {HERO_CONTENT.primaryCta}
            </Link>

            <Link
              to={HERO_CONTENT.secondaryHref}
              className="inline-flex items-center justify-center text-xs uppercase tracking-luxury font-sans font-medium px-8 py-3.5 border border-ivory/60 text-ivory hover:bg-ivory/10 hover:border-ivory transition-all duration-300 text-center"
            >
              {HERO_CONTENT.secondaryCta}
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-6 right-6 sm:right-12 hidden lg:flex flex-col items-center space-y-2 text-ivory/50 hover:text-champagne transition-colors">
        <a href="#stories" aria-label="Scroll to Featured Stories" className="flex items-center space-x-2">
          <span className="text-[10px] uppercase tracking-luxury">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce stroke-[1.5]" />
        </a>
      </div>
    </section>
  );
}
