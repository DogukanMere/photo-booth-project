import React from 'react';

const GlambotAdvantageItem = ({ icon, header, text }) => {
  return (
    <div className='flex flex-col justify-start gap-y-2'>
      <div className='flex flex-col sm:flex-row flex-nowrap items-start gap-x-3'>
        {icon}
        <p className='font-semibold text-[0.9rem] sm:text-[1rem] border-b-2 border-primaryLight'>{header}</p>
      </div>
      <span className='leading-6'>{text}</span>
    </div>
  );
};

export default GlambotAdvantageItem;
