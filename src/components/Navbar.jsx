import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { CONFIG, NAV_LINKS } from '../data/siteContent';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu whenever location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory/95 backdrop-blur-md py-4 border-b border-beige-border/50 shadow-sm'
          : 'bg-ivory/90 backdrop-blur-sm py-5 md:py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link
          to="/"
          className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
          aria-label="NOOR Wedding Stories Home"
        >
          <span className="font-serif text-2xl md:text-3xl tracking-[0.25em] text-charcoal font-normal transition-colors group-hover:text-champagne-dark">
            {CONFIG.brandName}
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-charcoal-muted font-sans font-light -mt-1 hidden sm:block">
            {CONFIG.brandSubtitle}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                `text-xs uppercase tracking-luxury transition-colors duration-200 font-sans font-medium relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:transition-all after:duration-300 ${
                  isActive
                    ? 'text-charcoal font-semibold after:w-full after:bg-champagne-dark'
                    : 'text-charcoal/80 hover:text-champagne-dark after:w-0 after:bg-champagne hover:after:w-full'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="inline-flex items-center text-xs uppercase tracking-editorial font-sans font-medium px-5 py-2.5 border border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-ivory transition-all duration-300 rounded-none focus-visible:ring-2 focus-visible:ring-champagne"
          >
            Check Availability
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-charcoal hover:text-champagne-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-full bg-ivory/98 backdrop-blur-lg border-b border-beige-border shadow-lg transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-[460px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="px-8 flex flex-col space-y-4">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `text-sm uppercase tracking-luxury transition-colors py-2 border-b border-beige-border/40 font-sans ${
                  isActive ? 'text-champagne-dark font-semibold' : 'text-charcoal hover:text-champagne-dark'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-2">
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="w-full inline-flex items-center justify-center text-xs uppercase tracking-luxury font-sans font-medium px-5 py-3 border border-charcoal bg-charcoal text-ivory hover:bg-transparent hover:text-charcoal transition-all duration-300"
            >
              Check Availability
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
