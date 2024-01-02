// Cards.jsx
import React from 'react';

function Cards({cardImage,description}) {
  return (
    <>
      <div className='relative'>
            <img src={cardImage} alt="Card Images Not Support in Your Browser" 
            className='w-full h-auto max-w-full'/>

            <p className='font-roboto text-base md:text-lg font-light leading-6 text-center mt-10"'>
                {description}
                
            </p>
        </div>
    </>
  );
}

export default Cards;
