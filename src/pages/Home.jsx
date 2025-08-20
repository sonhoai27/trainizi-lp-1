import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import MediaTestimonials from '../components/MediaTestimonials';
import Media from '../components/Media';
import NewsletterSignup from '../components/NewsletterSignup';

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <MediaTestimonials />
      <Media />
      <NewsletterSignup />
    </main>
  );
};

export default Home;