import React from 'react';

const VideoComponent = () => {
  return (
    <div className='h-[60rem] w-screen relative'>
      <div className='h-full w-full relative'>
        <video src='/interactive_video.mp4' autoPlay={true} className='z-10 w-full h-full object-cover' loop muted></video>
        <div className='z-20 text-paper absolute bottom-[17%] text-[3rem] select-none flex w-full flex-col lg:flex-row lg:justify-around lg:items-center'>
          <div className='flex flex-col lg:flex-row items-center justify-start lg:justify-around w-full gap-y-8'>
            <div className='w-full min-w-[250px] lg:w-[40rem] px-10'>
              <h2 className='text-[2.5rem] lg:text-[3.7rem] '>360 Photo Booth</h2>
              <p className='text-[1.3rem] sm:text-[1.8rem] lg:text-[1.5rem]'>Elevate your event to unforgettable heights with our immersive 360° video booth, ensuring every guest leaves with cherished memories that last a lifetime.</p>
            </div>
            <div className='px-10 w-full lg:w-fit'>
              <button className='w-full bg-paper border-4 rounded-full tracking-wide leading-7 border-paper px-20 py-4 text-primaryLight rounded-4xl text-[1.3rem] hover:bg-blackTrans hover:text-paper transition-all duration-300 uppercase font-bold'>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
