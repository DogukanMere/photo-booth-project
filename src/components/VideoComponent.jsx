import React from 'react';
import { Link } from 'react-router-dom';

const VideoComponent = () => {
  return (
    <div className='h-[calc(100vh-100px)] md:h-[calc(100vh-120px)] w-screen relative'>
      <div className='h-full w-full relative'>
        {/* <video
          autoPlay={true}
          className='z-10 w-full h-full object-cover select-none'
          loop
          muted
          playsInline
          onClick={(e) => {
            e.preventDefault();
          }}>
          <source src='/interactive_video.mp4' type='video/mp4' />
        </video> */}
        <img src='/homeHero.jpg' alt='photo booth hero image' className='z-10 w-full h-full object-cover select-none' />
        <div className='z-20 text-paper absolute scale-[0.85] sm:scale-[0.9] md:scale-[1] bottom-[17%] text-[3rem] select-none flex w-full flex-col lg:flex-row lg:justify-around lg:items-center'>
          <div className='flex flex-col lg:flex-row items-center justify-start lg:justify-around w-full gap-y-8'>
            <div className='w-full min-w-[250px] lg:w-[40rem] px-0 lg:px-10'>
              <h2 className='text-[2.5rem] lg:text-[3.7rem]'>360 Booth</h2>
              <p className='text-[1.3rem] sm:text-[1.8rem] lg:text-[1.5rem]'>Elevate your event to unforgettable heights with our immersive 360° video booth, ensuring every guest leaves with cherished memories that last a lifetime.</p>
            </div>
            <div className='px-0 lg:px-10 lg:scale-[1] w-full lg:w-fit'>
              <Link
                to={'/contact'}
                className='w-full text-nowrap bg-secondaryLight brightness-[1.2] border-4 rounded-2xl tracking-wide leading-7 border-secondaryLight px-16 py-4 text-primaryLight rounded-4xl text-[1.3rem] hover:bg-blackTrans hover:text-paper transition-all duration-500 uppercase font-bold'>
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
