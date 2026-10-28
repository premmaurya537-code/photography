import React, { useState } from 'react';
import Hero from '../components/Hero';
import WeddingStories from '../components/WeddingStories';
import CinematicBreak from '../components/CinematicBreak';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import InquiryForm from '../components/InquiryForm';
import StoryModal from '../components/StoryModal';

export default function HomePage() {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <>
      {/* SECTION B — CINEMATIC HERO */}
      <Hero />

      {/* SECTION C — FEATURED WEDDING STORIES */}
      <WeddingStories onSelectStory={(story) => setSelectedStory(story)} />

      {/* SECTION D — FULL-WIDTH CINEMATIC BREAK */}
      <CinematicBreak />

      {/* SECTION E — ABOUT THE PHOTOGRAPHER */}
      <About />

      {/* SECTION F — SERVICES */}
      <Services />

      {/* SECTION G — TESTIMONIALS */}
      <Testimonials />

      {/* SECTION H — INQUIRY SECTION */}
      <InquiryForm />

      {/* Interactive Quick Look Story Modal */}
      {selectedStory && (
        <StoryModal
          story={selectedStory}
          onClose={() => setSelectedStory(null)}
        />
      )}
    </>
  );
}
