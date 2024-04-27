import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='bg-secondaryLight min-h-[50vh] flex items-center justify-center px-3'>
      <div className='max-w-[1420px] mx-auto px-7 py-14 bg-paper rounded-lg flex justify-center items-center my-20'>
        <div className='flex flex-col max-w-[700px] items-center px-2 sm:px-10 text-grey600 gap-y-4'>
          <img src='/not-found.png' alt='' className='max-w-[15rem] bg-' />
          <h2 className='text-[2.7rem] sm:text-[5rem] text-primaryLight font-semibold'>Oops!</h2>
          <p className='text-[1.3rem] sm:text-[1.5rem] text-primaryLight uppercase text-center font-medium'>Page not found</p>
          <p className='text-[0.9rem] sm:text-[1rem] text-center mb-4'>We can't seem to find the page you're looking for. Try going back to the previous page.</p>
          <Link to={'/'} className='px-2 sm:px-8 py-1 bg-primaryLight text-paper rounded-md text-[0.9rem] text-nowrap'>
            Back to the home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
