import React from 'react';
import { BsFillBuildingsFill } from 'react-icons/bs';
import { GiDiamondRing } from 'react-icons/gi';
import EventItem from '../components/EventItem';

const Events = () => {
  return (
    <div className='w-screen min-h-[30rem] py-10 bg-secondaryLight relative'>
      {/* Top Flex For cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-[1420px] mx-auto items-center justify-center px-10 gap-x-4 gap-y-4'>
        <div className='z-20 absolute top-[-70px] mx-auto flex justify-start text-[3rem] select-none w-[1420px]'>
          <button className='bg-secondaryLight px-10 py-5 text-primaryLight rounded-t-2xl text-[1.3rem] font-semibold tracking-tight'>Events</button>
        </div>
        <EventItem
          header={'Corporate'}
          text={`Elevate your corporate brand presence with our specialized 360 photo booth service. We excel in aligning closely with corporations to ensure a tailored experience that resonates with their brand identity. Our state-of-the-art technology captivates attendees, driving social media engagement for maximum corporate visibility. Experience innovation and set your brand apart with our immersive showcase. Step into the future of corporate brand visibility and make a lasting impact with our
            360 photo booth service.`}
          iconReact={<BsFillBuildingsFill size={90} className='text-paper' />}
        />
        <EventItem
          header={'Wedding'}
          text={`Step into our 360 booth and embark on your special journey where memories come to life in stunning 360-degree detail. With endless possibilities for personalization, from themed backgrounds to quirky props, each session is a unique expression of your love story. It's not just a photo booth; it's an immersive experience that sparks laughter, fosters connection, and creates unforgettable moments for you and your guests.`}
          iconReact={<GiDiamondRing size={80} className='text-paper' />}
        />
        <EventItem
          header={'Corporate'}
          text={`Elevate your corporate brand presence with our specialized 360 photo booth service. We excel in aligning closely with corporations to ensure a tailored experience that resonates with their brand identity. Our state-of-the-art technology captivates attendees, driving social media engagement for maximum corporate visibility. Experience innovation and set your brand apart with our immersive showcase. Step into the future of corporate brand visibility and make a lasting impact with our
            360 photo booth service.`}
          iconReact={<BsFillBuildingsFill size={90} className='text-paper' />}
        />
        <EventItem
          header={'Wedding'}
          text={`Step into our 360 booth and embark on your special journey where memories come to life in stunning 360-degree detail. With endless possibilities for personalization, from themed backgrounds to quirky props, each session is a unique expression of your love story. It's not just a photo booth; it's an immersive experience that sparks laughter, fosters connection, and creates unforgettable moments for you and your guests.`}
          iconReact={<GiDiamondRing size={80} className='text-paper' />}
        />
      </div>
    </div>
  );
};

export default Events;
