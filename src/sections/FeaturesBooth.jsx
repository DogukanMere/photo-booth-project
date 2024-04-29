import React from 'react';
import FeatureCard from '../components/FeatureCard';
import { Tb360View } from 'react-icons/tb';
import { MdOutlineSlowMotionVideo, MdOfflineShare } from 'react-icons/md';

const FeaturesBooth = () => {
  return (
    <div className='w-screen min-h-[30rem] py-[8rem] pb-[10rem] bg-primaryLight relative'>
      <div className='grid grid-cols-1 lg:grid-cols-2 max-w-[1420px] mx-auto items-center justify-center px-2 sm:px-10 gap-x-6 gap-y-6'>
        <div className='z-20 absolute top-[-70px] mx-auto flex justify-start text-[3rem] select-none w-[1420px]'>
          <h3 className='bg-primaryLight px-10 py-5 text-paper rounded-t-2xl text-[1.3rem] font-semibold tracking-tight'>Features</h3>
        </div>
        {/* Feature Card */}
        <div className='flex flex-col gap-y-5 items-center justify-center col-span-1'>
          <FeatureCard cls={'bg-paper w-[20rem] md:w-[30rem]'} icon={<Tb360View className='text-[6rem] text-primaryLight self-center' />} text={`Capture Every Angle with Our Digital 360 Rotating Camera!`} />
          <FeatureCard cls={'bg-paper w-[20rem] md:w-[30rem]'} icon={<MdOutlineSlowMotionVideo className='text-[6rem] text-primaryLight self-center' />} text={`Engage with Mesmerizing Slow Motion and Custom Overlay-Designed Video Moments!`} />
          <FeatureCard cls={'bg-paper w-[20rem] md:w-[30rem]'} icon={<MdOfflineShare className='text-[6rem] text-primaryLight self-center' />} text={`Send Your Video Directly to Your Phone via Text/Email; Instantly Share on TikTok, Reels, and Beyond!`} />
        </div>
        {/* Iphone Video */}
        <div className='flex flex-col gap-y-5 items-center justify-center col-span-1 overflow-hidden rounded-[2.6rem] lg:rounded-[4rem] max-w-[25rem] mx-auto'>
          <video
            autoPlay={true}
            className='z-10 h-full object-cover w-[15rem] lg:w-[25rem]'
            loop
            muted
            playsInline
            onClick={(e) => {
              e.preventDefault();
            }}>
            <source src='/video_mobile.mp4' type='video/mp4' />
          </video>
        </div>
      </div>
    </div>
  );
};

export default FeaturesBooth;
