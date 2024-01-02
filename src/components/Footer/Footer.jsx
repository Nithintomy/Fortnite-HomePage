import React from 'react';
import ContactDetails from './ContactDetails';
import ContactButtons from './ContactButtons';
import CopyWrite from './CopyWrite';

function Footer() {
  return (
    <>
      <div className='container mx-auto px-4 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40'>
      <div className='text-center mb-8'>
        <h2 className='font-roboto text-3xl sm:text-4xl md:text-5xl font-light leading-8 sm:leading-10 md:leading-12'>
          Interested in delving deeper into the project?
        </h2>
      </div>

      <ContactDetails />
      <ContactButtons />
   
    </div>
       <CopyWrite />
    </>
  
  );
}

export default Footer;
