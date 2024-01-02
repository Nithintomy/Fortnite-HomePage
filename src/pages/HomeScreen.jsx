import React from 'react';
import Hero from '../components/Hero/Hero';
import CardsDescription from '../components/Cards/CardsDescription';
import Contribution from '../components/Contribution/Contribution';
import Footer from '../components/Footer/Footer';

function HomeScreen() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <Hero />
      <CardsDescription />
      <Contribution />
      <Footer />
    </div>
  );
}

export default HomeScreen;
