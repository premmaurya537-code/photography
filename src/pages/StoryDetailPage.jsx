import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MapPin, Calendar, Users, Award, Camera } from 'lucide-react';
import { ALL_STORIES } from '../data/siteContent';

export default function StoryDetailPage() {
  const { id } = useParams();

  const storyIndex = ALL_STORIES.findIndex(
    (s) => s.slug === id || s.id === id
  );

  const story = ALL_STORIES[storyIndex];

  if (!story) {
    return (
      <div className="pt-40 pb-32 text-center bg-ivory min-h-screen">
        <div className="max-w-md mx-auto px-6">
          <h1 className="font-serif text-3xl text-charcoal mb-4">Story Not Found</h1>
          <p className="font-sans text-sm text-charcoal-muted mb-8 font-light">
            The wedding story you are looking for does not exist or has been archived.
          </p>
          <Link
            to="/stories"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-luxury px-6 py-3 bg-charcoal text-ivory hover:bg-champagne hover:text-charcoal transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Stories Archive</span>
          </Link>
        </div>
      </div>
    );
  }

  // Prev & Next stories
  const prevStory = storyIndex > 0 ? ALL_STORIES[storyIndex - 1] : ALL_STORIES[ALL_STORIES.length - 1];
  const nextStory = storyIndex < ALL_STORIES.length - 1 ? ALL_STORIES[storyIndex + 1] : ALL_STORIES[0];

  return (
    <article className="bg-ivory min-h-screen">
      {/* Story Hero Header */}
      <div className="relative min-h-[70vh] sm:min-h-[80vh] flex items-end overflow-hidden pt-28 pb-16 sm:pb-24">
        <div className="absolute inset-0 z-0">
          <img
            src={story.image}
            alt={story.imageAlt}
            className="w-full h-full object-cover object-center scale-105"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-cinematic via-charcoal-cinematic/50 to-charcoal-cinematic/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-ivory w-full">
          {/* Back link */}
          <Link
            to="/stories"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-luxury text-champagne-light hover:text-ivory transition-colors mb-6 font-sans"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Stories Archive</span>
          </Link>

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-luxury text-champagne-light mb-4 font-sans font-medium">
              <span className="flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{story.location}</span>
              </span>
              <span>·</span>
              <span className="flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{story.date}</span>
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.1] text-ivory mb-4">
              {story.title}
            </h1>

            {story.subtitle && (
              <p className="font-sans text-base sm:text-xl text-ivory/80 font-light leading-relaxed max-w-2xl">
                {story.subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Content & Details */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Narrative Column */}
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center space-x-3">
              <span className="w-8 h-[1px] bg-champagne" aria-hidden="true" />
              <span className="text-[11px] uppercase tracking-luxury text-champagne-dark font-sans font-medium">
                THE CELEBRATION MONOGRAPH
              </span>
            </div>

            <p className="font-serif text-2xl sm:text-3xl text-charcoal font-light leading-relaxed italic border-l-2 border-champagne pl-6 py-1">
              "{story.description}"
            </p>

            {story.storyText && story.storyText.map((paragraph, index) => (
              <p key={index} className="font-sans text-base sm:text-lg text-charcoal-muted leading-relaxed font-light">
                {paragraph}
              </p>
            ))}

            {/* Testimonial Quote */}
            {story.quote && (
              <div className="mt-12 p-8 sm:p-10 bg-ivory-light border border-beige-border">
                <span className="font-serif text-4xl text-champagne leading-none block mb-2">“</span>
                <p className="font-serif text-lg sm:text-xl text-charcoal italic leading-relaxed mb-4">
                  {story.quote.text}
                </p>
                <div className="text-xs uppercase tracking-luxury text-charcoal font-medium font-sans">
                  — {story.quote.author}
                </div>
              </div>
            )}
          </div>

          {/* Details Sidebar Column */}
          <div className="lg:col-span-4">
            <div className="bg-white/70 border border-beige-border p-6 sm:p-8 space-y-6 sticky top-28">
              <h3 className="font-serif text-xl text-charcoal font-normal pb-4 border-b border-beige-border">
                Celebration Details
              </h3>

              <div className="space-y-4 text-xs font-sans">
                {story.venue && (
                  <div>
                    <span className="text-charcoal-muted uppercase tracking-wider block mb-1">Venue</span>
                    <span className="text-charcoal font-medium">{story.venue}</span>
                  </div>
                )}

                <div>
                  <span className="text-charcoal-muted uppercase tracking-wider block mb-1">Location</span>
                  <span className="text-charcoal font-medium">{story.location}</span>
                </div>

                {story.guests && (
                  <div>
                    <span className="text-charcoal-muted uppercase tracking-wider block mb-1">Scale</span>
                    <span className="text-charcoal font-medium">{story.guests}</span>
                  </div>
                )}

                <div>
                  <span className="text-charcoal-muted uppercase tracking-wider block mb-1">Category</span>
                  <span className="text-charcoal font-medium">{story.category}</span>
                </div>

                {story.deliverables && (
                  <div>
                    <span className="text-charcoal-muted uppercase tracking-wider block mb-1">Heirloom Deliverables</span>
                    <span className="text-charcoal-muted font-light leading-relaxed">{story.deliverables}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-beige-border">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-luxury font-sans font-medium px-5 py-3.5 bg-charcoal text-ivory hover:bg-champagne hover:text-charcoal transition-all text-center"
                >
                  <span>Inquire for Similar Dates</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Story Gallery Section */}
        {story.gallery && story.gallery.length > 0 && (
          <div className="mt-24 pt-16 border-t border-beige-border">
            <div className="max-w-2xl mb-12">
              <span className="text-[11px] uppercase tracking-luxury text-champagne-dark font-sans font-medium block mb-2">
                CURATED PLATES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal">
                Visual Archive & Ceremony Highlights
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {story.gallery.map((item, idx) => (
                <figure key={idx} className="flex flex-col group">
                  <div className="aspect-[4/3] overflow-hidden bg-beige-light mb-3">
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="w-full h-full object-cover object-center editorial-img duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="text-xs text-charcoal-muted font-sans font-light leading-relaxed">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}

        {/* Next / Previous Story Navigation */}
        <div className="mt-24 pt-12 border-t border-beige-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            to={`/stories/${prevStory.slug}`}
            className="group flex items-center space-x-3 text-charcoal hover:text-champagne-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <div className="text-left">
              <span className="text-[10px] uppercase tracking-luxury text-charcoal-muted block">Previous Story</span>
              <span className="font-serif text-lg font-normal">{prevStory.title}</span>
            </div>
          </Link>

          <Link
            to={`/stories/${nextStory.slug}`}
            className="group flex items-center space-x-3 text-charcoal hover:text-champagne-dark transition-colors text-right"
          >
            <div>
              <span className="text-[10px] uppercase tracking-luxury text-charcoal-muted block">Next Story</span>
              <span className="font-serif text-lg font-normal">{nextStory.title}</span>
            </div>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
