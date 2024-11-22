import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='w-screen min-h-[35rem] flex flex-col justify-center py-9 px-5 bg-secondaryLight relative flex-1'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>About | Aura Photobooth</title>
        <link rel='aura photobooth' href='https://auraphotobooth.ca/about' />
      </Helmet>
      <div className='max-w-[900px] mx-auto items-center justify-center px-4 py-10 bg-paper rounded-lg'>
        <h2 className='mb-10 text-[1.4rem] sm:text-[2rem] font-bold text-primaryLight text-center w-full leading-[2rem] sm:leading-[3rem] sm:text-start uppercase py-2 flex justify-center items-center text-nowrap'>About Us</h2>
        {/* 2 COL GRID */}
        <div className='grid grid-cols-1 sm:grid-cols-2 py-2 gap-x-5'>
          {/* Left Image */}
          <div className='col-span-1 flex justify-center items-center'>
            <img src='/glambot_1.png' alt='our image' className='max-w-[25rem] min-w-[6rem]' />
          </div>
          {/* Right Text */}
          <div className='col-span-1 flex flex-col gap-y-3 px-2'>
            <h3 className='mt-5 text-primaryLight font-bold uppercase tracking-wider text-[1.2rem] self-center'>About us header</h3>
            <p className='tracking-wide leading-8 text-primaryLight text-[0.9rem]'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque velit ab minus minima perferendis, iusto laudantium, ex voluptas cupiditate praesentium cum commodi similique fuga consequatur reprehenderit, quasi explicabo. At, debitis!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
