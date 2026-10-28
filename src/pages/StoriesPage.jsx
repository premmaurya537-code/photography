import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Sparkles } from 'lucide-react';
import { ALL_STORIES } from '../data/siteContent';

const CATEGORIES = ['All Stories', 'Heritage & Royal', 'Intimate & Garden', 'Modern & Editorial'];

export default function StoriesPage() {
  const [activeCategory, setActiveCategory] = useState('All Stories');

  const filteredStories = activeCategory === 'All Stories'
    ? ALL_STORIES
    : ALL_STORIES.filter(s => s.category === activeCategory);

  return (
    <div className="pt-32 pb-24 sm:pb-32 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-3 mb-4">
            <span className="w-8 h-[1px] bg-champagne" aria-hidden="true" />
            <span className="text-[11px] uppercase tracking-luxury text-champagne-dark font-sans font-medium">
              PORTFOLIO MONOGRAPHS
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal font-normal mb-6 leading-tight">
            Wedding Stories
          </h1>
          <p className="font-sans text-base sm:text-lg text-charcoal-muted font-light leading-relaxed">
            Every celebration has a cadence and soul of its own. Here is a curated archive of heirloom moments, sacred rituals, and candid affection documented across India and worldwide.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-3 pb-8 mb-16 border-b border-beige-border" role="tablist">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs uppercase tracking-luxury font-sans px-5 py-2.5 transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-charcoal text-ivory font-medium'
                  : 'bg-ivory text-charcoal/70 border border-beige-border hover:border-charcoal hover:text-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
          {filteredStories.map((story) => (
            <article
              key={story.id}
              className="flex flex-col group bg-white/40 border border-beige-border/60 p-5 sm:p-6 hover:shadow-md transition-all duration-300"
            >
              {/* Image Container */}
              <Link to={`/stories/${story.slug}`} className="block overflow-hidden aspect-[4/3] bg-beige-light mb-6 relative">
                <img
                  src={story.image}
                  alt={story.imageAlt}
                  className="w-full h-full object-cover object-center editorial-img duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-charcoal-cinematic/85 backdrop-blur-sm text-ivory text-[10px] uppercase tracking-luxury px-3 py-1 font-sans font-medium">
                  {story.category}
                </div>
              </Link>

              {/* Meta */}
              <div className="flex items-center space-x-2 text-xs text-champagne-dark uppercase tracking-luxury font-sans font-medium mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>{story.location}</span>
                <span className="text-charcoal-light">·</span>
                <span className="text-charcoal-muted font-light">{story.date}</span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-2xl text-charcoal font-normal mb-3 group-hover:text-champagne-dark transition-colors">
                <Link to={`/stories/${story.slug}`}>
                  {story.title}
                </Link>
              </h2>

              {/* Description */}
              <p className="font-sans text-sm text-charcoal-muted font-light leading-relaxed mb-6 flex-grow">
                {story.description}
              </p>

              {/* Footer Link */}
              <div className="pt-4 border-t border-beige-border/60">
                <Link
                  to={`/stories/${story.slug}`}
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-luxury text-charcoal font-medium hover:text-champagne-dark transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-charcoal/20 hover:after:bg-champagne-dark"
                >
                  <span>Explore Story</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Booking Banner */}
        <div className="mt-24 sm:mt-32 p-10 sm:p-14 bg-charcoal-cinematic text-ivory border border-charcoal flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center space-x-2 text-champagne-light text-xs uppercase tracking-luxury font-sans mb-3">
              <Sparkles className="w-4 h-4 text-champagne" />
              <span>Commission Inquiries</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-ivory mb-2">
              Planning your wedding celebration?
            </h2>
            <p className="font-sans text-sm text-ivory/70 max-w-xl font-light">
              We accept a limited number of commissions each season to ensure personal attention and timeless artistry.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center text-xs uppercase tracking-luxury font-sans font-medium px-8 py-4 bg-ivory text-charcoal hover:bg-champagne hover:text-charcoal-dark transition-all duration-300 whitespace-nowrap"
          >
            Check Your Date
          </Link>
        </div>
      </div>
    </div>
  );
}
