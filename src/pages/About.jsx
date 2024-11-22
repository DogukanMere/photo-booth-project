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
      <div className='max-w-[1200px] mx-auto items-center justify-center px-4 py-10 bg-paper rounded-lg'>
        <h2 className='mb-10 text-[1.4rem] sm:text-[2rem] font-bold text-primaryLight text-center w-full leading-[2rem] sm:leading-[3rem] sm:text-start uppercase py-2 flex justify-center items-center text-nowrap'>About Us</h2>
        {/* 2 COL GRID */}
        <div className='grid grid-cols-1 sm:grid-cols-2 py-2 gap-x-5'>
          {/* Left Image */}
          <div className='col-span-1 flex justify-center items-center'>
            <img src='/auraAbout.jpg' alt='our image' className='max-w-[25rem] min-w-[6rem] rounded-[2rem]' />
          </div>
          {/* Right Text */}
          <div className='col-span-1 flex flex-col gap-y-3 px-2'>
            <h3 className='mt-5 text-primaryLight font-bold uppercase tracking-wider text-[1.2rem] self-center'>About Aura Photo Booth</h3>
            <p className='tracking-wide leading-8 text-primaryLight text-[0.9rem]'>
              Welcome to Aura Photo Booth, where every spin creates a memory that lasts a lifetime. Specializing in 360 photo booth experiences, we bring a touch of magic to weddings, birthday parties, corporate events, and celebrations of all kinds. Our state-of-the-art 360 Photo Booth and Glambot
              technology capture your most joyful moments in stunning detail, providing guests with fun, interactive, and share-worthy keepsakes. Whether it’s a sparkling wedding, a lively birthday bash, or a professional corporate gathering, we ensure your event stands out with a unique and
              captivating experience. At Aura Photo Booth, we’re passionate about delivering not just photos, but unforgettable experiences. From set-up to delivery, our dedicated team ensures every detail is picture-perfect, letting you and your guests focus on enjoying the moment. Let us turn your
              special occasions into extraordinary memories. Experience the magic with Aura Photo Booth—where every moment shines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
