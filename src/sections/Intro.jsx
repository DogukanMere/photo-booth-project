import React from 'react';

const Intro = () => {
  return (
    <div className='w-screen min-h-[35rem] flex flex-col justify-center py-7 pb-14 bg-paper relative'>
      {/* Flex Container */}
      <div className='grid grid-cols-1 lg:grid-cols-2 max-w-[1420px] mx-auto items-center justify-center px-10 gap-x-4 gap-y-4 my-4 mb-14'>
        <div className='z-20 absolute top-[-70px] mx-auto flex justify-start text-[3rem] select-none w-[1420px]'>
          <button className='bg-paper px-10 py-5 text-primaryLight rounded-t-2xl text-[1.3rem] font-semibold tracking-tight'>What Do We Do?</button>
        </div>
        {/* Left */}
        <div className='order-2 lg:order-1 w-full h-full flex items-center justify-center flex-col'>
          <h3 className='text-[2rem] font-bold text-primaryLight text-start mb-5'>Elevate Events with 360 Photo Booth Magic!</h3>
          <p className='text-fcPrimary leading-8 text-[1rem] tracking-wide'>
            Experience the magic of immersive video and photography with <b>Interactive Photobooth</b>, designed to elevate <b>weddings, corporate events, homecomings, private gatherings, and more</b>. Our premier package showcases state-of-the-art proprietary technology, ensuring exceptional 360-degree videos, seamlessly integrated with social media platforms for instant sharing. Backed by the dedicated service of our skilled attendant, every detail is captured with precision.
          </p>
        </div>
        {/* Right */}
        <div className='order-1 lg:order-2 w-full h-full flex items-center justify-center'>
          <div>
            <img src='/photoIntro.png' alt='photo' className='max-w-[30rem]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
