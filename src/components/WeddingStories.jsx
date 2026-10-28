import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FEATURED_STORIES } from '../data/siteContent';

export default function WeddingStories({ onSelectStory }) {
  return (
    <section id="stories" className="bg-ivory py-24 sm:py-32" aria-labelledby="stories-heading">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 pb-8 border-b border-beige-border">
          <div>
            <span className="text-[11px] uppercase tracking-luxury text-champagne-dark font-sans font-medium block mb-3">
              PORTFOLIO
            </span>
            <h2 id="stories-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-charcoal">
              Featured Wedding Stories
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col md:items-end">
            <p className="font-sans text-sm sm:text-base text-charcoal-muted max-w-sm tracking-wide font-light md:text-right">
              Every celebration has a story worth remembering.
            </p>
            <Link
              to="/stories"
              className="mt-2 inline-flex items-center space-x-1 text-xs uppercase tracking-luxury text-champagne-dark hover:text-charcoal font-medium font-sans transition-colors"
            >
              <span>Explore Archive</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Editorial Stories Rows (Alternating Layout) */}
        <div className="space-y-24 sm:space-y-36">
          {FEATURED_STORIES.map((story) => {
            const isReverse = story.reverse;

            return (
              <article
                key={story.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center ${
                  isReverse ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image Column */}
                <div
                  className={`relative overflow-hidden bg-beige-light group ${
                    isReverse
                      ? 'lg:col-span-7 lg:col-start-6'
                      : 'lg:col-span-7'
                  }`}
                >
                  <Link to={`/stories/${story.slug}`} className="block overflow-hidden cursor-pointer">
                    <div className={`overflow-hidden ${story.aspectRatio}`}>
                      <img
                        src={story.image}
                        alt={story.imageAlt}
                        className="w-full h-full object-cover object-center editorial-img duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </Link>
                  {/* Subtle editorial border line */}
                  <div className="absolute inset-0 border border-charcoal/5 pointer-events-none" />
                </div>

                {/* Text Content Column */}
                <div
                  className={`flex flex-col justify-center ${
                    isReverse
                      ? 'lg:col-span-5 lg:col-start-1 lg:pr-8'
                      : 'lg:col-span-5 lg:pl-8'
                  }`}
                >
                  {/* Location Eyebrow */}
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-[11px] uppercase tracking-luxury text-champagne-dark font-sans font-medium">
                      {story.location}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne/60" aria-hidden="true" />
                    <span className="text-xs text-charcoal-muted font-sans font-light">
                      {story.date}
                    </span>
                  </div>

                  {/* Serif Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal font-normal mb-4 leading-snug">
                    <Link to={`/stories/${story.slug}`} className="hover:text-champagne-dark transition-colors">
                      {story.title}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm sm:text-base text-charcoal-muted leading-relaxed font-light mb-6">
                    {story.description}
                  </p>

                  {/* Minimal Link */}
                  <div className="flex items-center space-x-6">
                    <Link
                      to={`/stories/${story.slug}`}
                      className="group inline-flex items-center space-x-2 text-xs uppercase tracking-luxury text-charcoal font-medium font-sans hover:text-champagne-dark transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-charcoal/30 hover:after:bg-champagne-dark after:transition-colors"
                      aria-label={`View full story: ${story.title}`}
                    >
                      <span>View Story</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>

                    {onSelectStory && (
                      <button
                        type="button"
                        onClick={() => onSelectStory(story)}
                        className="text-xs uppercase tracking-luxury text-charcoal-muted hover:text-charcoal font-sans font-light transition-colors"
                      >
                        Quick Look
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All Stories Footer Banner */}
        <div className="mt-24 pt-12 border-t border-beige-border text-center">
          <Link
            to="/stories"
            className="inline-flex items-center space-x-3 text-xs uppercase tracking-luxury font-sans font-medium px-8 py-4 bg-charcoal text-ivory hover:bg-champagne hover:text-charcoal-dark transition-all duration-300"
          >
            <span>View All Wedding Stories in Archive</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
