import React from 'react';

const Intro = () => {
  return (
    <div className='w-screen min-h-[30rem] py-10 bg-paper relative'>
      {/* Flex Container */}
      <div className='flex max-w-[1420px] mx-auto items-center justify-center h-full px-5 mb-[4rem]'>
        {/* Left */}
        <div className='w-full h-full flex items-center justify-center px-10 flex-col'>
          <h3 className='text-[2rem] font-bold text-fcPrimary text-start mb-5'>Elevate Events with 360 Photo Booth Magic!</h3>
          <p className='text-fcPrimary leading-8 text-[1rem] tracking-wide'>
            Experience the magic of immersive video and photography with <b>Interactive Photobooth</b>, designed to elevate <b>weddings, corporate events, homecomings, private gatherings, and more</b>. Our premier package showcases state-of-the-art proprietary technology, ensuring exceptional 360-degree videos, seamlessly integrated with social media platforms for instant sharing. Backed by the dedicated service of our skilled attendant, every detail is captured with precision.
          </p>
        </div>
        {/* Right */}
        <div className='w-full h-full flex items-center justify-start'>
          <div>
            <img src='/photo1.png' alt='photo' className='max-w-[30rem]' />
          </div>
        </div>
      </div>
      <div className='z-20 absolute bottom-0 left-[10%] text-[3rem] select-none'>
        <button className='bg-secondaryLight px-10 py-5 text-grey600 rounded-t-2xl text-[1.3rem] font-bold'>Events</button>
      </div>
    </div>
  );
};

export default Intro;
