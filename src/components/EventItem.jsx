import React from 'react';
import { Link } from 'react-router-dom';

const EventItem = (props) => {
  const { header, text, speech, iconReact, imgElement, learn } = props;
  return (
    <div className='grid-span-1 bg-paper h-full rounded-2xl px-5 pt-10 pb-[60px] flex flex-col justify-start items-center'>
      {iconReact && <div className='mt-5 min-w-[6rem] h-[6rem] sm:min-w-[10rem] sm:h-[10rem] bg-secondaryLight rounded-full overflow-hidden flex justify-center items-center'>{iconReact}</div>}
      {imgElement && imgElement}

      <div className='flex flex-col gap-y-5 text-pretty'>
        <h3 className='mt-5 text-primaryLight font-bold uppercase tracking-wider text-[1.2rem] self-center'>{header}</h3>
        <p className='px-7 md:px-10 tracking-wide text-[1rem] text-fcPrimary leading-9 self-start'>
          {text}{' '}
          {!learn ? (
            <Link to={'/contact'} className='underline text-primaryLight font-semibold text-nowrap hover:brightness-150 transition-all duration-300'>
              contact now
            </Link>
          ) : (
            learn
          )}
        </p>
        {speech && <i className='text-grey600 px-7 md:px-10 leading-9 self-end justify-self-end '> - {speech}</i>}
      </div>
    </div>
  );
};

export default EventItem;
