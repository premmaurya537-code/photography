import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';
import { CONFIG, CELEBRATION_TYPES } from '../data/siteContent';

export default function InquiryForm({ showHeader = true }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    weddingDate: '',
    weddingLocation: '',
    celebrationType: CELEBRATION_TYPES[0],
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number.';
    }
    if (!formData.weddingLocation.trim()) {
      newErrors.weddingLocation = 'Please share your wedding city or venue.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please share a brief note about your celebration.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate client-side processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 600);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      weddingDate: '',
      weddingLocation: '',
      celebrationType: CELEBRATION_TYPES[0],
      message: '',
    });
    setErrors({});
  };

  const content = (
    <div className="bg-white/80 backdrop-blur-sm border border-beige-border p-8 sm:p-12 shadow-sm">
      {submittedData ? (
        /* Honest Demo Confirmation Mode */
        <div className="text-center py-8">
          <div className="w-12 h-12 bg-champagne/15 text-champagne-dark rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-7 h-7 stroke-[1.5]" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-normal mb-3">
            Inquiry Received (Demo Mode)
          </h3>
          <p className="font-sans text-sm text-charcoal-muted max-w-lg mx-auto leading-relaxed mb-6 font-light">
            Thank you, <strong className="text-charcoal font-medium">{submittedData.fullName}</strong>. Your inquiry details for the celebration in{' '}
            <strong className="text-charcoal font-medium">{submittedData.weddingLocation}</strong> have been captured in this demonstration environment.
          </p>
          
          <div className="bg-ivory p-6 border border-beige-border max-w-md mx-auto text-left mb-8 space-y-2 text-xs font-sans">
            <div><span className="text-charcoal-muted uppercase tracking-wider">Email:</span> {submittedData.email}</div>
            <div><span className="text-charcoal-muted uppercase tracking-wider">Phone:</span> {submittedData.phone}</div>
            {submittedData.weddingDate && (
              <div><span className="text-charcoal-muted uppercase tracking-wider">Date:</span> {submittedData.weddingDate}</div>
            )}
            <div><span className="text-charcoal-muted uppercase tracking-wider">Type:</span> {submittedData.celebrationType}</div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleReset}
              className="text-xs uppercase tracking-luxury font-sans font-medium px-6 py-3 border border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-ivory transition-all"
            >
              Send Another Inquiry
            </button>
            <a
              href={CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-luxury font-sans font-medium px-6 py-3 bg-[#25D366] text-white hover:bg-[#20ba59] transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2 font-sans">
                Full Name <span className="text-champagne-dark" aria-hidden="true">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Aanya Sharma & Kabir Mehra"
                aria-required="true"
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                className={`w-full bg-ivory/60 border ${
                  errors.fullName ? 'border-red-400 focus:border-red-500' : 'border-beige-border focus:border-champagne-dark'
                } px-4 py-3 text-sm text-charcoal focus:bg-white focus:outline-none transition-colors font-sans`}
              />
              {errors.fullName && (
                <p id="fullName-error" className="mt-1.5 text-xs text-red-600 font-sans flex items-center space-x-1">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2 font-sans">
                Email Address <span className="text-champagne-dark" aria-hidden="true">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="aanya@example.com"
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`w-full bg-ivory/60 border ${
                  errors.email ? 'border-red-400 focus:border-red-500' : 'border-beige-border focus:border-champagne-dark'
                } px-4 py-3 text-sm text-charcoal focus:bg-white focus:outline-none transition-colors font-sans`}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-red-600 font-sans flex items-center space-x-1">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2 font-sans">
                Phone Number <span className="text-champagne-dark" aria-hidden="true">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 00000"
                aria-required="true"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                className={`w-full bg-ivory/60 border ${
                  errors.phone ? 'border-red-400 focus:border-red-500' : 'border-beige-border focus:border-champagne-dark'
                } px-4 py-3 text-sm text-charcoal focus:bg-white focus:outline-none transition-colors font-sans`}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1.5 text-xs text-red-600 font-sans flex items-center space-x-1">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>

            {/* Wedding Date */}
            <div>
              <label htmlFor="weddingDate" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2 font-sans">
                Approximate Date / Month
              </label>
              <input
                type="date"
                id="weddingDate"
                name="weddingDate"
                value={formData.weddingDate}
                onChange={handleChange}
                className="w-full bg-ivory/60 border border-beige-border focus:border-champagne-dark px-4 py-2.5 text-sm text-charcoal focus:bg-white focus:outline-none transition-colors font-sans"
              />
            </div>

            {/* Wedding Location */}
            <div>
              <label htmlFor="weddingLocation" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2 font-sans">
                Wedding Location / City <span className="text-champagne-dark" aria-hidden="true">*</span>
              </label>
              <input
                type="text"
                id="weddingLocation"
                name="weddingLocation"
                value={formData.weddingLocation}
                onChange={handleChange}
                placeholder="e.g. Udaipur, Jaipur, or Goa"
                aria-required="true"
                aria-invalid={!!errors.weddingLocation}
                aria-describedby={errors.weddingLocation ? 'weddingLocation-error' : undefined}
                className={`w-full bg-ivory/60 border ${
                  errors.weddingLocation ? 'border-red-400 focus:border-red-500' : 'border-beige-border focus:border-champagne-dark'
                } px-4 py-3 text-sm text-charcoal focus:bg-white focus:outline-none transition-colors font-sans`}
              />
              {errors.weddingLocation && (
                <p id="weddingLocation-error" className="mt-1.5 text-xs text-red-600 font-sans flex items-center space-x-1">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{errors.weddingLocation}</span>
                </p>
              )}
            </div>

            {/* Type of Celebration */}
            <div>
              <label htmlFor="celebrationType" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2 font-sans">
                Type of Celebration
              </label>
              <select
                id="celebrationType"
                name="celebrationType"
                value={formData.celebrationType}
                onChange={handleChange}
                className="w-full bg-ivory/60 border border-beige-border focus:border-champagne-dark px-4 py-3 text-sm text-charcoal focus:bg-white focus:outline-none transition-colors font-sans"
              >
                {CELEBRATION_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2 font-sans">
              Tell Us About Your Vision <span className="text-champagne-dark" aria-hidden="true">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Share a few words about your celebrations, ceremonies, and what kind of photography speaks most to you..."
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={`w-full bg-ivory/60 border ${
                errors.message ? 'border-red-400 focus:border-red-500' : 'border-beige-border focus:border-champagne-dark'
              } px-4 py-3 text-sm text-charcoal focus:bg-white focus:outline-none transition-colors font-sans resize-y`}
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-red-600 font-sans flex items-center space-x-1">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Action Buttons Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 text-xs uppercase tracking-luxury font-sans font-medium px-8 py-3.5 bg-charcoal text-ivory hover:bg-champagne hover:text-charcoal-dark transition-all duration-300 disabled:opacity-50"
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Inquiry'}</span>
              <Send className="w-3.5 h-3.5" />
            </button>

            {/* Direct WhatsApp Option */}
            <div className="flex items-center space-x-2 text-xs text-charcoal-muted font-sans font-light">
              <span>Or reach us directly via</span>
              <a
                href={CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-charcoal font-medium hover:text-[#25D366] transition-colors underline underline-offset-4"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </form>
      )}
    </div>
  );

  if (!showHeader) {
    return content;
  }

  return (
    <section id="inquiry" className="bg-ivory py-24 sm:py-32" aria-labelledby="inquiry-heading">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-luxury text-champagne-dark font-sans font-medium block mb-3">
            RESERVATIONS & INQUIRIES
          </span>
          <h2
            id="inquiry-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-charcoal mb-4"
          >
            Tell us your story.
          </h2>
          <p className="font-sans text-sm sm:text-base text-charcoal-muted tracking-wide font-light">
            Share a little about your celebration, and let's start planning something meaningful.
          </p>
        </div>

        {content}
      </div>
    </section>
  );
}
