import React from 'react';

const Intro = () => {
  return (
    <div className='w-screen h-[70vh] bg-paper relative'>
      <div className='z-20 absolute bottom-0 left-[10%] text-[3rem] select-none'>
        <button className='bg-secondaryLight px-10 py-5 text-grey600 rounded-t-2xl text-[1.3rem] font-bold'>What Do We Do?</button>
      </div>
      {/* Flex Container */}
      <div className='flex max-w-[1420px] mx-auto items-center justify-around h-full px-5'>
        {/* Left */}
        <div className='w-full h-full flex items-end justify-center px-5 flex-col'>
          <h3 className='text-fcPrimary leading-8 max-w-[27rem] text-[1rem] tracking-wide self-end'>Unlock the Power of Immersive Media for Your Events</h3>
          <p className='text-fcPrimary max-w-[27rem] leading-8 text-[1rem] tracking-wide'>
            Experience the magic of immersive video and photography with [Your Company Name], designed to elevate weddings, corporate events, homecomings, private gatherings, and more. Our premier package showcases state-of-the-art proprietary technology, ensuring exceptional 360-degree videos, seamlessly integrated with social media platforms for instant sharing. Backed by the dedicated service of our skilled attendant, every detail is captured with precision
          </p>
        </div>
        {/* Right */}
        <div className='w-full h-full flex items-center justify-start'>
          <div>
            <img src='/photo1.png' alt='photo' className='max-w-[30rem]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
