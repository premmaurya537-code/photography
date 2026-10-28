import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, BookOpen, Clock, Heart, Sparkles } from 'lucide-react';
import { SERVICES, CONFIG } from '../data/siteContent';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Consultation & Chemistry',
    desc: 'An initial video or in-person conversation to align on aesthetic visions, schedule of ceremonies, and custom coverage requirements.'
  },
  {
    step: '02',
    title: 'Editorial Guidance & Planning',
    desc: 'Collaborative timeline review with your wedding planner, lighting recommendations, and pre-wedding styling mood boards.'
  },
  {
    step: '03',
    title: 'The Wedding Days',
    desc: 'Unobtrusive, calm, and watchful documentation across every sacred ritual, emotional glance, and spontaneous celebration.'
  },
  {
    step: '04',
    title: 'Curated 5-Day Preview',
    desc: 'A handpicked preview collection of 30-50 high-res frames delivered within 5 days so you can share memories right away.'
  },
  {
    step: '05',
    title: 'Heirloom Archive & Albums',
    desc: 'Full digital collection delivered in 6-8 weeks, followed by bespoke album design, fine-art paper selection, and hand-binding.'
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 sm:pb-32 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="inline-flex items-center space-x-3 mb-4">
            <span className="w-8 h-[1px] bg-champagne" aria-hidden="true" />
            <span className="text-[11px] uppercase tracking-luxury text-champagne-dark font-sans font-medium">
              EXPERIENCE & INVESTMENT
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal font-normal mb-6 leading-tight">
            The Photography Experience
          </h1>
          <p className="font-sans text-base sm:text-lg text-charcoal-muted font-light leading-relaxed">
            Every couple’s celebration is distinct. We offer considered collections crafted for multi-day Indian weddings, intimate celebrations, and destination gatherings across the globe.
          </p>
        </div>

        {/* Detailed Service Collections */}
        <div className="space-y-20 pb-24 border-b border-beige-border">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-white/60 border border-beige-border p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            >
              {/* Image side */}
              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[4/5] overflow-hidden bg-beige-light relative">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover object-center editorial-img duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-charcoal-cinematic/90 backdrop-blur-sm text-ivory text-[10px] uppercase tracking-luxury px-3 py-1 font-sans">
                    {service.badge}
                  </div>
                </div>
              </div>

              {/* Text / Inclusions side */}
              <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : ''} space-y-6`}>
                <span className="text-xs uppercase tracking-luxury text-champagne-dark font-sans font-medium block">
                  COLLECTION {index + 1}
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal">
                  {service.title}
                </h2>

                <p className="font-sans text-base text-charcoal-muted font-light leading-relaxed">
                  {service.description}
                </p>

                <div className="p-4 bg-ivory border border-beige-border inline-block text-xs uppercase tracking-wider text-charcoal-muted font-sans font-light">
                  <span className="font-medium text-charcoal">Investment:</span> {service.investment}
                </div>

                {/* Features List */}
                <div className="pt-4 border-t border-beige-border/60">
                  <h3 className="text-xs uppercase tracking-luxury text-charcoal font-medium font-sans mb-4">
                    What is Included:
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2.5 text-xs text-charcoal-muted font-sans font-light">
                        <Check className="w-3.5 h-3.5 text-champagne-dark mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 text-xs uppercase tracking-luxury font-sans font-medium px-6 py-3.5 bg-charcoal text-ivory hover:bg-champagne hover:text-charcoal transition-all"
                  >
                    <span>Request Custom Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="py-24 border-b border-beige-border">
          <div className="max-w-2xl mb-16">
            <span className="text-[11px] uppercase tracking-luxury text-champagne-dark font-sans font-medium block mb-2">
              THE JOURNEY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal">
              How We Work Together
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="border-t border-champagne/60 pt-6 space-y-3">
                <span className="font-serif text-3xl text-champagne-dark block">{step.step}</span>
                <h3 className="font-serif text-lg text-charcoal font-normal">{step.title}</h3>
                <p className="font-sans text-xs text-charcoal-muted font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Archival Album Section */}
        <div className="py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] uppercase tracking-luxury text-champagne-dark font-sans font-medium block">
              PHYSICAL HEIRLOOMS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal">
              Hand-Bound Fine Art Monograph Albums
            </h2>
            <p className="font-sans text-base text-charcoal-muted font-light leading-relaxed">
              We believe a wedding gallery truly comes to life when held in hands. Our albums are individually crafted by master bookbinders using archival museum-grade cotton rag paper, lay-flat binding, and custom debossed leather or raw silk covers designed to endure for generations.
            </p>
            <div className="flex items-center space-x-6 text-xs uppercase tracking-luxury text-charcoal font-medium font-sans pt-2">
              <span>Italian Leather</span>
              <span>·</span>
              <span>Raw Silk</span>
              <span>·</span>
              <span>Japanese Linen</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] overflow-hidden bg-beige-light">
              <img
                src="/images/garden-wedding.jpg"
                alt="Handcrafted wedding album presentation"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Investment Philosophy Callout */}
        <div className="mt-12 p-10 sm:p-14 bg-charcoal-cinematic text-ivory text-center max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-4">
            Invest in memories that outlast the flowers.
          </h2>
          <p className="font-sans text-sm sm:text-base text-ivory/70 max-w-xl mx-auto font-light mb-8">
            Tell us about your wedding dates and location, and we will prepare a tailored collection proposal within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-luxury font-sans font-medium px-8 py-4 bg-ivory text-charcoal hover:bg-champagne hover:text-charcoal transition-all"
            >
              <span>Check Availability & Dates</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-luxury font-sans font-medium px-8 py-4 border border-ivory/40 text-ivory hover:bg-ivory/10 transition-all"
            >
              <span>Chat via WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
