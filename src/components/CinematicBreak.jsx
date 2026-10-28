import React from 'react';
import { CINEMATIC_BREAK } from '../data/siteContent';

export default function CinematicBreak() {
  return (
    <section
      className="relative w-full min-h-[520px] md:min-h-[620px] flex items-center justify-center overflow-hidden py-28 sm:py-36 md:py-44"
      aria-label="Editorial Interlude"
    >
      {/* Background Full-Bleed Photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src={CINEMATIC_BREAK.image}
          alt={CINEMATIC_BREAK.imageAlt}
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          loading="lazy"
        />
        {/* Dark Cinematic Vignette & Gradient */}
        <div
          className="absolute inset-0 bg-charcoal-cinematic/85 backdrop-brightness-75"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-charcoal-cinematic via-charcoal-cinematic/60 to-charcoal-cinematic"
          aria-hidden="true"
        />
      </div>

      {/* Centered Editorial Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center text-ivory">
        {/* Eyebrow */}
        <div className="inline-flex items-center justify-center space-x-3 mb-6">
          <span className="w-6 h-[1px] bg-champagne" aria-hidden="true" />
          <span className="text-[11px] uppercase tracking-luxury text-champagne-light font-sans font-medium">
            {CINEMATIC_BREAK.eyebrow}
          </span>
          <span className="w-6 h-[1px] bg-champagne" aria-hidden="true" />
        </div>

        {/* Serif Quote Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.15] tracking-tight mb-6 text-ivory">
          {CINEMATIC_BREAK.quote}
        </h2>

        {/* Supporting Line */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-ivory/80 font-light tracking-wide max-w-xl mx-auto leading-relaxed">
          {CINEMATIC_BREAK.supporting}
        </p>

        {/* Minimal Champagne Accent Dash */}
        <div className="mt-8 flex justify-center">
          <div className="w-12 h-[1px] bg-champagne/70" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
