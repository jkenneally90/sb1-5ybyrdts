import React from 'react';
import Hero from '../components/Hero';
import Benefits from '../components/sections/Benefits';
import TrustedApps from '../components/sections/TrustedApps';
import Process from '../components/sections/Process';
import FeaturedApps from '../components/sections/FeaturedApps';
import PopularCategories from '../components/sections/PopularCategories';
import Testimonials from '../components/sections/Testimonials';
import Newsletter from '../components/Newsletter';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <TrustedApps />
      <FeaturedApps />
      <PopularCategories />
      <Process />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default HomePage;