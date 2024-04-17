import React from 'react';

const EventItem = (props) => {
  const { header, text, iconReact } = props;
  return (
    <div className='grid-span-1 bg-paper h-full rounded-2xl px-5 pt-10 pb-[60px] flex flex-col justify-start items-center'>
      <div className='w-[10rem] mt-5 h-[10rem] bg-secondaryLight rounded-full overflow-hidden flex justify-center items-center'>{iconReact}</div>
      <h3 className='mt-5 text-fcPrimary font-bold uppercase tracking-wider text-[1.2rem]'>{header}</h3>
      <p className='px-7 md:px-10 tracking-wide leading-7 mt-4 text-[0.9rem]'>{text}</p>
    </div>
  );
};

export default EventItem;
