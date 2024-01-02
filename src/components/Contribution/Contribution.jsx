// Contribution.jsx
import React from 'react';
import Revenue from './Revenue';

function Contribution() {
  return (
    <div className='container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24'>
      <div className='mb-8'>
        <h1 className='font-roboto text-3xl sm:text-4xl md:text-5xl font-light leading-8 sm:leading-10 md:leading-12 text-center'>
          Our Contributions
        </h1>
      </div>
      <div className='max-w-7xl mx-auto mb-14'>
        <p className='font-poppins text-pretty font-normal leading-6 text-center line-clamp-3'>
          Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community.
          Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <Revenue content={"5M"} description={"Daily User Engagements"} />
        <Revenue content={"$500K"} description={"Revenue Surge for anPlatform"} />
        <Revenue content={"10X"} description={"ROAS on all our marketing campaigns"} />
      </div>
    </div>
  );
}

export default Contribution;
