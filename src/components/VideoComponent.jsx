import React from 'react';

const VideoComponent = () => {
  return (
    <div className='w-full h-full relative'>
      <div className='h-screen w-screen'>
        <video src='/interactive_video.mp4' autoPlay={true} className='w-full h-full object-contain z-10' loop></video>
      </div>
      <div className='z-20 text-paper absolute bottom-[17%] left-[10%] text-[3rem] select-none'>
        <h2>360 Photo Booth</h2>
        <p className='text-[1.5rem] max-w-[30rem]'>Elevate your event to unforgettable heights with our immersive 360° video booth, ensuring every guest leaves with cherished memories that last a lifetime.</p>
      </div>
      <div className='z-20 absolute bottom-[10%] right-[10%] text-[3rem] select-none'>
        <button className='bg-blackTrans px-10 py-5 text-paper rounded-2xl text-[1.3rem] hover:bg-paper hover:text-grey700 transition-all duration-300 uppercase font-bold'>Book Now</button>
      </div>
      <div className='z-20 absolute bottom-0 left-[10%] text-[3rem] select-none'>
        <button className='bg-paper px-10 py-5 text-grey600 rounded-t-2xl text-[1.3rem] font-bold'>What Do We Do?</button>
      </div>
    </div>
  );
};

export default VideoComponent;
