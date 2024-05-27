import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Weddings = () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Weddings | Aura Photobooth</title>
        <link rel='Aura photobooth' href='https://auraphotobooth.ca/wedding' />
      </Helmet>
      <div className='w-screen bg-paper text-[0.9rem]'>
        {/* FIRST TOP DIV  | Corporate & Image */}
        <div className='max-w-[1420px] mx-auto bg-paper flex flex-col items-center gap-y-10'>
          <div className='flex justify-center w-screen min-h-[80vh] sm:min-h-[40vh] max-h-[60vh] relative'>
            <p className='absolute h-full w-full bg-blackTransLight'></p>
            <img src='/wedding_header.png' alt='wedding image' className='w-full object-cover ' />
            <div className='absolute text-paper w-full bottom-[9%] sm:bottom-[12%] left-[1%] sm:left-[10%] sm:pr-[10%] flex flex-col sm:flex-row px-5 gap-x-2 gap-y-6'>
              <div className='w-full'>
                <h1 className='text-[2rem] tracking-wide sm:text-[2.5rem] md:text-[4rem] font-semibold'>Weeding / Parties</h1>
                <p className='w-full text-[1rem] sm:text-[2rem] mt-2'>Infusing Aura into Timeless Memories.</p>
              </div>
              <div className='w-full sm:w-[40%] flex items-center justify-start sm:justify-center'>
                <Link to={'/contact'} className='w-full sm:w-fit sm:px-12 text-center bg-secondaryLight text-nowrap brightness-[1.2] border-4 rounded-2xl tracking-wide leading-7 border-secondaryLight py-3 text-primaryLight rounded-4xl text-[0.9rem] sm:text-[1.1rem] hover:bg-blackTrans hover:text-paper transition-all duration-300 uppercase font-bold'>
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-screen bg-secondaryLight text-[0.9rem]'>
        {/* SECOND DIV  | Details */}
        <div className='max-w-[1420px] mx-auto bg-none flex flex-col sm:flex-row items-center py-20 gap-y-10'>
          <div className='w-full sm:w-1/2 order-2 sm:order-1'>
            <div className='w-full flex flex-col items-start gap-y-4 px-5 text-fcPrimary leading-8 text-[1rem] tracking-wide sm:pl-10 pl-3'>
              <h2 className='mb-2 text-[1.3rem] sm:text-[2rem] font-bold text-primaryLight text-center w-full leading-[2rem] sm:leading-[3rem] sm:text-start uppercase'>Unleash the Magic: Elevate Your Wedding with Our 360 Booth Experience!</h2>
              <div className='flex justify-center flex-col items-start px-5 sm:px-0 gap-y-3'>
                <p>So, why settle for ordinary when you can have extraordinary? Elevate your wedding experience with our 360 booth and let the joy of your special day shine like never before. Get ready to spin, smile, and create memories that will last a lifetime!"</p>
                <Link to={'/contact'} className='group mt-10 text-primaryLight font-semibold text-nowrap hover:brightness-150 transition-all duration-300 relative overflow-hidden'>
                  contact us {`>`}
                  <span className='w-full bg-none border-b-primaryLight border-b-[2px] absolute left-[-120px] group-hover:left-0 bottom-0 transition-all duration-300'></span>
                </Link>
              </div>
            </div>
          </div>
          <div className='flex order-1 sm:order-2 flex-col gap-y-5 items-center justify-center col-span-1 overflow-hidden rounded-[2.4rem] lg:rounded-[3.8rem] max-w-[25rem] mx-auto'>
            <video
              autoPlay={true}
              className='z-10 h-full object-cover w-[15rem] lg:w-[25rem]'
              loop
              muted
              playsInline
              onClick={(e) => {
                e.preventDefault();
              }}>
              <source src='/wedding_mobile.mp4' type='video/mp4' />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weddings;
