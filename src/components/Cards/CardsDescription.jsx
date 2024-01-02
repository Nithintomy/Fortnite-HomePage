
import React from 'react';
import Cards from './Cards';
import Fortnite_2 from '../../assets/Fortnite_20180630171046.png';
import NaturePlay from '../../assets/5daa24d7cc4a0a62650c6b28.png';
import maxresdefault1 from '../../assets/maxresdefault1.png';

function CardsDescription() {
  return (
    <>
      <div className='container mx-auto max-w-5xl px-4 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          <Cards cardImage={Fortnite_2} description={'Explore large, destructible environments where no two games are ever the same.'} />
          <Cards cardImage={NaturePlay} description={'Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale'} />
          <Cards cardImage={maxresdefault1} description={'Discover even more ways to play across thousands of creator-made game genres'} />
        </div>
      </div>
    </>
  );
}

export default CardsDescription;
