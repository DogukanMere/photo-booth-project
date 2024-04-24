import React from 'react';

const Intro = () => {
  return (
    <div className='w-screen min-h-[35rem] flex flex-col justify-center py-[6rem] pb-[7rem] bg-paper relative'>
      {/* Grid Container */}
      <div className='grid grid-cols-1 lg:grid-cols-2 max-w-[1420px] mx-auto items-center justify-center px-10 gap-x-4 gap-y-4 my-4 mb-14'>
        <div className='z-20 absolute top-[-70px] mx-auto flex justify-start text-[3rem] select-none w-[1420px]'>
          <h3 className='bg-paper px-10 py-5 text-primaryLight rounded-t-2xl text-[1.3rem] font-semibold tracking-tight'>What We Do</h3>
        </div>
        {/* Left */}
        <div className='order-2 lg:order-1 w-full h-full flex items-center justify-center flex-col'>
          <h3 className='text-[2rem] font-bold text-primaryLight text-start mb-5'>Capture the Aura of Your Event with 360 Booth Where Every Moment Shines!</h3>
          <p className='text-fcPrimary leading-8 text-[1rem] tracking-wide text-balance'>
            Experience the magic of immersive video with <b>Aura Photobooth</b>, designed to elevate <b>weddings, corporate events, homecomings, private gatherings, and more</b>. Our premier package showcases state-of-the-art proprietary technology, ensuring exceptional 360-degree videos, seamlessly integrated with social media platforms for instant sharing. Backed by the dedicated service of our skilled attendant, every detail is captured with precision.
          </p>
        </div>
        {/* Right */}
        <div className='order-1 lg:order-2 w-full h-full flex items-center justify-center'>
          <div className='max-w-[42rem]'>
            <img src='/intro_img.png' alt='photo' className='w-full' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
