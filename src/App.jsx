import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import StoriesPage from './pages/StoriesPage';
import StoryDetailPage from './pages/StoryDetailPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-ivory text-charcoal font-sans flex flex-col selection:bg-champagne/30 selection:text-charcoal-dark">
        {/* Automatic scroll to top on route change */}
        <ScrollToTop />

        {/* Global Editorial Navbar */}
        <Navbar />

        {/* Multi-page Routing */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/stories/:id" element={<StoryDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/kind-words" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback route */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Global Cinematic Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
