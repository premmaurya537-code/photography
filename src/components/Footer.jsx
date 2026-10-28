import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, MessageSquare } from 'lucide-react';
import { CONFIG, NAV_LINKS } from '../data/siteContent';

function InstagramIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-cinematic text-ivory/80 pt-20 pb-12 border-t border-charcoal" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link
                to="/"
                className="inline-block font-serif text-3xl tracking-[0.25em] text-ivory font-normal mb-4 hover:text-champagne transition-colors"
              >
                {CONFIG.brandName}
              </Link>
              <p className="font-sans text-xs uppercase tracking-luxury text-champagne-light mb-4">
                {CONFIG.brandSubtitle}
              </p>
              <p className="font-sans text-sm text-ivory/60 max-w-sm leading-relaxed font-light">
                Documentary and fine-art wedding photography across India and available worldwide. Capturing honest moments with timeless elegance.
              </p>
            </div>

            <div className="mt-8 text-xs text-ivory/40 font-sans tracking-wider uppercase font-light">
              {CONFIG.locationNotice}
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="md:col-span-3 lg:col-span-3">
            <span className="text-[11px] uppercase tracking-luxury text-champagne-light font-sans font-medium block mb-6">
              NAVIGATION
            </span>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-xs uppercase tracking-luxury text-ivory/70 hover:text-champagne transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Inquiries Column */}
          <div className="md:col-span-4 lg:col-span-4">
            <span className="text-[11px] uppercase tracking-luxury text-champagne-light font-sans font-medium block mb-6">
              INQUIRIES & CONNECT
            </span>
            <div className="space-y-4 text-xs font-sans">
              <div>
                <span className="text-ivory/40 uppercase tracking-wider block mb-1">Direct Inquiries:</span>
                <a
                  href={`mailto:${CONFIG.email}`}
                  className="inline-flex items-center space-x-2 text-ivory hover:text-champagne transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-champagne" />
                  <span>{CONFIG.email}</span>
                </a>
              </div>

              <div>
                <span className="text-ivory/40 uppercase tracking-wider block mb-1">WhatsApp Concierge:</span>
                <a
                  href={CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-ivory hover:text-[#25D366] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>{CONFIG.whatsappNumber}</span>
                </a>
              </div>

              <div>
                <span className="text-ivory/40 uppercase tracking-wider block mb-1">Journal & Visuals:</span>
                <a
                  href={CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-ivory hover:text-champagne transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-champagne" />
                  <span>{CONFIG.instagramHandle}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory/40 font-sans tracking-wide space-y-4 sm:space-y-0">
          <div>
            © {CONFIG.copyrightYear} {CONFIG.brandName} — {CONFIG.brandSubtitle}. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <span>Portfolio Demo Experience</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 text-ivory/60 hover:text-champagne transition-colors uppercase text-[11px] tracking-luxury"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
