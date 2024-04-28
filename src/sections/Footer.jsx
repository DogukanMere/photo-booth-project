import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTiktok, FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {
  const commonStyle = { link: `text-paper hover:text-secondaryLight duration-150 transition-all` };
  return (
    <div className='w-screen flex flex-col justify-center bg-primaryLight relative border-t-4 border-paper'>
      {/* Grid Container */}
      <div className='grid grid-cols-1 lg:grid-cols-2 max-w-[1420px] mx-auto items-center justify-center px-10 gap-x-4 gap-y-10 my-10 text-nowrap border-b-[2px] border-grey300 pt-4 pb-12'>
        {/* Left Grid Logo */}
        <div className='w-full flex flex-col items-center lg:max-w-[10rem]'>
          <div className='flex flex-nowrap items-start justify-center gap-x-3'>
            {/* Logo */}
            <Link to={`/`} className='flex-1 flex hover:brightness-150 transition-all duration-500'>
              <h1 className='text-fcPrimary flex items-center flex-nowrap gap-x-3'>
                <img src='/logo_light.png' alt='logo' className='max-w-[4.5rem]' />
              </h1>
            </Link>
          </div>
        </div>

        {/* Right Grid Links */}
        <div className='w-full grid grid-cols-2 grid-rows-2 gap-x-[3rem] sm:gap-x-[4rem] md:gap-x-[8rem]'>
          {/* Left Flex 2 | Products | Events */}
          <div className='grid grid-rows-2 gap-y-10 row-span-2 col-span-1'>
            <div className='flex flex-nowrap flex-col items-start text-[0.9rem] text-paper gap-y-3'>
              <h4 className='font-bold text-[0.9rem] row-span-1'>Products</h4>
              <Link to={`/`} className={`${commonStyle.link}`}>
                360 Booth
              </Link>
              <Link to={`/glambot`} className={`${commonStyle.link}`}>
                Glambot
              </Link>
            </div>
            <div className='flex flex-nowrap flex-col items-start text-[0.9rem] text-paper gap-y-3 row-span-1'>
              <h4 className='font-bold'>Events</h4>
              <Link to={`/corporate`} className={`${commonStyle.link}`}>
                Corporate
              </Link>
              <Link to={`/wedding`} className={`${commonStyle.link}`}>
                Weddings
              </Link>
            </div>
          </div>
          {/* Right Flex 1 | Quick Links | Social Media*/}
          <div className='grid grid-rows-2 items-start gap-y-10 row-span-2 col-span-1'>
            <div className='flex flex-nowrap flex-col items-start text-[0.9rem] text-paper gap-y-3'>
              <h4 className='font-bold text-[0.9rem] row-span-1'>Quick Links</h4>
              <Link to={`/contact`} className={`${commonStyle.link}`}>
                Contact
              </Link>
            </div>
            <div className='flex flex-nowrap flex-col items-start text-[0.9rem] text-paper gap-y-3 row-span-1'>
              <h4 className='font-bold text-[0.9rem]'>Get in touch</h4>
              {/* SOCIAL LINKS */}
              <div className='flex flex-nowrap gap-x-4 items-center justify-start'>
                <Link to={`https://www.google.com`}>
                  <FaFacebookSquare className={`text-[1.65rem] ${commonStyle.link}`} />
                </Link>
                <Link to={`https://www.instagram.com/auraphotobooth.ca/`}>
                  <AiFillInstagram className={`text-[2rem] ${commonStyle.link}`} />
                </Link>
                <Link to={`https://www.google.com`}>
                  <FaTiktok className={`text-[1.3rem] ${commonStyle.link}`} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CopyRight */}
      <span className='w-full text-center text-paper text-[0.8rem] pb-4 mb-5 pt-1'>&copy; Copyright 2024 Aura Photobooth | All Rights Reserved </span>
    </div>
  );
};

export default Footer;
