import React from 'react';

const FeatureCard = ({ icon, text }) => {
  return (
    <div className='grid-span-1 bg-paper w-[20rem] md:w-[30rem] mx-auto rounded-2xl px-5 py-5 flex flex-col justify-start items-center'>
      <div className=' h-full py-5 px-5 rounded-lg flex flex-col items-center'>
        {icon}
        <div className='flex-1 flex items-start flex-nowrap mt-3'>
          <p className='flex justify-center items-center w-[17rem] text-center text-balance text-primaryLight'>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
