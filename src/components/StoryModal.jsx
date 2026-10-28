import React, { useEffect } from 'react';
import { X, MapPin, Calendar, ArrowRight } from 'lucide-react';

export default function StoryModal({ story, onClose }) {
  useEffect(() => {
    if (!story) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [story, onClose]);

  if (!story) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-charcoal-dark/85 backdrop-blur-md animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-ivory overflow-y-auto border border-beige-border shadow-2xl flex flex-col">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-ivory/80 backdrop-blur-sm text-charcoal hover:text-champagne-dark border border-beige-border transition-colors"
          aria-label="Close story preview"
        >
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>

        {/* Story Hero Image */}
        <div className="w-full h-72 sm:h-96 relative overflow-hidden bg-beige-light">
          <img
            src={story.image}
            alt={story.imageAlt}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 sm:left-10 text-ivory">
            <span className="text-xs uppercase tracking-luxury text-champagne-light font-sans font-medium block mb-1">
              {story.location}
            </span>
            <h2 id="modal-title" className="font-serif text-3xl sm:text-4xl text-ivory font-normal">
              {story.title}
            </h2>
          </div>
        </div>

        {/* Story Editorial Body */}
        <div className="p-6 sm:p-10 md:p-12 space-y-6">
          <div className="flex flex-wrap items-center gap-6 pb-6 border-b border-beige-border text-xs uppercase tracking-wider text-charcoal-muted font-sans font-light">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-champagne" />
              <span>{story.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-champagne" />
              <span>{story.date}</span>
            </div>
          </div>

          <p className="font-serif text-xl sm:text-2xl text-charcoal leading-relaxed font-light italic">
            "{story.description}"
          </p>

          <p className="font-sans text-sm sm:text-base text-charcoal-muted leading-relaxed font-light">
            Documented across intimate moments, sacred rituals, and candid laughter. We focused on capturing the unchoreographed interactions between family, the gentle smiles before the varmala, and the warm evening celebration under the open sky.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-beige-border">
            <span className="text-xs text-charcoal-muted font-sans font-light">
              Interested in similar coverage for your wedding?
            </span>
            <a
              href="#inquiry"
              onClick={onClose}
              className="inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-luxury font-sans font-medium px-6 py-3 bg-charcoal text-ivory hover:bg-champagne hover:text-charcoal-dark transition-all text-center"
            >
              <span>Inquire for Your Date</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
