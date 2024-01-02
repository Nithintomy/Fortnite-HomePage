
import React from 'react';
import Fortnite from '../../assets/fortnite-pictures.png';
import HeroButton from './HeroButton';

function Hero() {
    return (
        <div className='container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 opacity-80'>
            <div className='max-w-full mx-auto mb-8'>
                <h1 className='text-2xl sm:text-4xl md:text-4xl font-roboto font-light leading-8 sm:leading-10 md:leading-12 text-center'>
                    Epic Games: An American video game and software developer and publisher based in Cary, North Carolina.
                </h1>
            </div>

            <div className='relative items-center'>
                <img
                    src={Fortnite}
                    alt='fortnite assemble'
                    className='w-1415 h-500 max-w-full object-cover mx-auto'
                />
            </div>

            <div className='max-w-6xl mx-auto mt-8 opacity-80'>
                <p className='font-poppins text-sm md:text-xl text-pretty font-normal leading-6 md:leading-7 text-center'>
                    Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator-made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.
                </p>
            </div>

            <HeroButton />
        </div>
    );
}

export default Hero;
