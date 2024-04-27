import React from 'react';

const FeatureCard = ({ cls, icon, text, header }) => {
  return (
    <div className={`grid-span-1 ${cls} mx-auto rounded-2xl px-5 py-5 flex flex-col justify-start items-center`}>
      <div className=' h-full py-5 px-5 rounded-lg flex flex-col items-center'>
        {icon}
        <div className='flex-1 flex flex-col items-start flex-nowrap mt-3 text-center text-primaryLight'>
          {header ? <h4 className='w-[17rem] flex justify-center items-center text-balance font-semibold mb-2 uppercase'>{header}</h4> : <></>}
          <p className='w-[17rem] flex justify-center items-center text-balance'>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
