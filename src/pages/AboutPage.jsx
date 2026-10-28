import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, Film, Sun, HeartHandshake, HelpCircle } from 'lucide-react';
import { ABOUT_CONTENT, FAQS } from '../data/siteContent';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 sm:pb-32 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Hero Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="inline-flex items-center space-x-3 mb-4">
            <span className="w-8 h-[1px] bg-champagne" aria-hidden="true" />
            <span className="text-[11px] uppercase tracking-luxury text-champagne-dark font-sans font-medium">
              ABOUT THE STUDIO
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal font-normal mb-6 leading-tight">
            We believe the smallest moments become the biggest memories.
          </h1>
          <p className="font-sans text-base sm:text-lg text-charcoal-muted font-light leading-relaxed">
            NOOR was founded with a single guiding intention: to document wedding celebrations with unhurried patience, quiet observation, and artistic reverence for the real human connections that anchor them.
          </p>
        </div>

        {/* Lead Photographer Feature Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pb-24 border-b border-beige-border">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] overflow-hidden bg-beige-light">
              <img
                src={ABOUT_CONTENT.image}
                alt={ABOUT_CONTENT.imageAlt}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 border border-charcoal/5 pointer-events-none" />
            <div className="mt-4 flex items-center justify-between text-xs text-charcoal-muted font-sans font-light">
              <span>Lead Photographer & Creative Director</span>
              <span className="text-champagne-dark font-medium uppercase tracking-wider">Heritage Rangefinder</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-luxury text-champagne-dark font-sans font-medium block">
              THE STORY BEHIND NOOR
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal leading-snug">
              "A wedding is not a photo session; it is a sacred, joyous milestone shared with those you cherish most."
            </h2>
            
            <p className="font-sans text-base text-charcoal-muted font-light leading-relaxed">
              {ABOUT_CONTENT.leadBio}
            </p>

            {ABOUT_CONTENT.paragraphs.map((p, idx) => (
              <p key={idx} className="font-sans text-base text-charcoal-muted font-light leading-relaxed">
                {p}
              </p>
            ))}

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-beige-border">
              {ABOUT_CONTENT.stats.map((s, i) => (
                <div key={i}>
                  <div className="font-serif text-3xl sm:text-4xl text-charcoal">{s.value}</div>
                  <div className="text-[11px] uppercase tracking-wider text-charcoal-muted font-light mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy Pillars */}
        <div className="py-24 border-b border-beige-border">
          <div className="max-w-2xl mb-16">
            <span className="text-[11px] uppercase tracking-luxury text-champagne-dark font-sans font-medium block mb-2">
              ARTISTIC PILLARS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal">
              How We Approach Your Celebration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ABOUT_CONTENT.philosophyPillars.map((pillar, idx) => (
              <div key={idx} className="bg-white/50 border border-beige-border p-8 flex flex-col justify-between">
                <div>
                  <div className="font-serif text-2xl text-champagne mb-4">0{idx + 1}</div>
                  <h3 className="font-serif text-xl text-charcoal mb-3">{pillar.title}</h3>
                  <p className="font-sans text-sm text-charcoal-muted font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gear and Craft Section */}
        <div className="py-24 border-b border-beige-border grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] uppercase tracking-luxury text-champagne-dark font-sans font-medium block">
              THE MEDIUM & CRAFT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal">
              Film, Light, and Archival Precision
            </h2>
            <p className="font-sans text-base text-charcoal-muted font-light leading-relaxed">
              We combine the incomparable color depth of modern digital sensors with the soulful grain of analog 35mm and medium-format film. This dual approach ensures your photographs look rich and dimensional on screens and breathtaking when printed on archival cotton papers.
            </p>
            <ul className="space-y-3 pt-2">
              {ABOUT_CONTENT.gearAndCraft.map((item, index) => (
                <li key={index} className="flex items-start space-x-3 text-sm text-charcoal font-sans font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne-dark mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[16/10] overflow-hidden bg-beige-light">
              <img
                src="/images/royal-celebration.jpg"
                alt="Photographic craft in action"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="py-24">
          <div className="max-w-2xl mb-16">
            <span className="text-[11px] uppercase tracking-luxury text-champagne-dark font-sans font-medium block mb-2">
              CLARITY & ASSURANCE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FAQS.map((faq, i) => (
              <div key={i} className="p-8 bg-white/50 border border-beige-border">
                <h3 className="font-serif text-xl text-charcoal mb-3">
                  {faq.question}
                </h3>
                <p className="font-sans text-sm text-charcoal-muted font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Inquiries Banner */}
        <div className="mt-12 p-10 sm:p-14 bg-charcoal-cinematic text-ivory text-center max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-4">
            Let's create something timeless together.
          </h2>
          <p className="font-sans text-sm sm:text-base text-ivory/70 max-w-xl mx-auto font-light mb-8">
            Tell us about your wedding visions, ceremonies, and destinations. We would be honored to document your story.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-luxury font-sans font-medium px-8 py-4 bg-ivory text-charcoal hover:bg-champagne hover:text-charcoal transition-all"
          >
            <span>Inquire for Availability</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
