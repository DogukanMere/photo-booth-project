import React from 'react';
import { BsFillBuildingsFill } from 'react-icons/bs';
import { GiDiamondRing } from 'react-icons/gi';
import { LuHeartHandshake } from 'react-icons/lu';
import { FaBirthdayCake } from 'react-icons/fa';
import EventItem from '../components/EventItem';

const Events = () => {
  return (
    <div className='w-screen min-h-[30rem] py-10 bg-secondaryLight relative'>
      {/* Top Flex For cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-[1420px] mx-auto items-center justify-center px-10 gap-x-4 gap-y-4'>
        <div className='z-20 absolute top-[-70px] mx-auto flex justify-start text-[3rem] select-none w-[1420px]'>
          <h3 className='bg-secondaryLight px-10 py-5 text-primaryLight rounded-t-2xl text-[1.3rem] font-semibold tracking-tight'>Events</h3>
        </div>
        <EventItem header={'Corporate Events'} text={`Boost your corporate brand with our 360 photo booth service. Tailored for your identity, our tech sparks social buzz, setting you apart. Step into the future of brand visibility and leave a lasting impression.`} speech={`Let your event's Aura shines with your brand`} iconReact={<BsFillBuildingsFill className='text-paper text-[3.5rem] sm:text-[5.5rem]' />} />
        <EventItem header={'Weddings'} text={`Step into our 360 booth for a personalized journey through vivid memories. With themed backgrounds and props, create unforgettable moments that spark laughter and love.`} speech={`Embrace the Aura of Love`} iconReact={<GiDiamondRing className='text-paper text-[3.5rem] sm:text-[5.5rem]' />} />
        <EventItem header={'Charity Events'} text={`Transform Your Charity Event with 360 Photobooth Magic! Immerse Your Attendees in Every Angle of Giving, Creating Unforgettable Moments that Inspire and Delight.`} speech={`Aura of Giving, 360 Memories Lasting`} iconReact={<LuHeartHandshake className='text-paper text-[3.5rem] sm:text-[5.5rem]' />} />
        <EventItem header={'Birthday Parties'} text={`Add a wow factor to your celebration with our immersive 360 booth. Capture every angle of the fun, ensuring unforgettable memories that wow your guests. Personalize your experience with themed props and backdrops, creating cherished moments to treasure forever.`} speech={`Make your birthday unforgettable`} iconReact={<FaBirthdayCake className='text-paper text-[3.5rem] sm:text-[5.5rem]' />} />
      </div>
    </div>
  );
};

export default Events;
