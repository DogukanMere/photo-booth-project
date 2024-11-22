import React from 'react';
import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';
import { Tb360View } from 'react-icons/tb';
import { PiNumberCircleOneBold, PiNumberCircleTwoBold, PiNumberCircleThreeBold } from 'react-icons/pi';
import { Helmet } from 'react-helmet';

const Glambot = () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Glambot | Aura Photobooth</title>
        <link rel='aura photobooth' href='https://auraphotobooth.ca/glambot' />
      </Helmet>
      <div className='w-screen bg-paper text-[0.9rem]'>
        {/* FIRST TOP DIV  | Image & What is glambot */}
        <div className='max-w-[1420px] mx-auto bg-paper flex flex-col items-center pb-10 gap-y-10'>
          <div className='flex justify-center w-screen min-h-[50vh] max-h-[70vh] relative'>
            <p className='absolute h-full w-full bg-blackTransLight'></p>
            <img src='/glambot_header.png' alt='glambot image' className='w-full object-cover ' />
            <h1 className='absolute text-paper text-[3rem] tracking-wide sm:text-[4rem] md:text-[6rem] font-semibold bottom-[5%] left-[10%]'>GlamBot</h1>
          </div>
          <div className='w-full px-2 flex flex-col sm:flex-row gap-y-9 gap-x-5 items-center justify-center py-10 pt-7'>
            <div className='w-full sm:w-1/3 flex justify-center items-center'>
              <img src='/glambot.png' alt='glambot image' className='max-w-[10rem] sm:max-w-[20rem]' />
            </div>
            <div className='w-full sm:w-2/3 max-w-[35rem] flex flex-col items-start gap-y-4 px-5 text-fcPrimary leading-8 text-[1rem] tracking-wide'>
              <h2 className='mb-2 text-[2rem] font-bold text-primaryLight sm:text-nowrap text-center w-full sm:text-start uppercase'>What is glambot?</h2>
              <div className='flex justify-center flex-col items-center px-5 sm:px-0 gap-y-3'>
                <p>Glam bot is a high-speed camera mounted on a robotic arm which is regularly used to capture red carpet glamor shots at the Grammys and Golden Globes.</p>
                <p>Equipped with smart software, it is possible to film moving images and then edit them in Hollywood style.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-screen bg-secondaryLight text-[0.9rem]'>
        {/* SECOND DIV  | Details */}
        <div className='max-w-[1420px] mx-auto bg-none flex flex-col sm:flex-row items-center py-20 gap-y-10'>
          <div className='w-full sm:w-1/2 order-2 sm:order-1'>
            <div className='w-full flex flex-col items-start gap-y-4 px-5 text-fcPrimary leading-8 text-[1rem] tracking-wide sm:pl-10 pl-3'>
              <h2 className='mb-2 text-[1.3rem] sm:text-[2rem] font-bold text-primaryLight text-center w-full leading-[2rem] sm:leading-[3rem] sm:text-start uppercase'>Lights, Camera, Glamour! Step onto the Red Carpet with Glambot</h2>
              <div className='flex justify-center flex-col items-start px-5 sm:px-0 gap-y-3'>
                <p className='text-center w-full sm:text-start uppercase tracking-[0.3rem]'>for everybody</p>
                <p>
                  But Glambot is more than just a camera. It's an experience. Watch as your guests light up with excitement as they step onto the red carpet, ready to unleash their inner superstar. With Glambot, everyone gets their moment to shine, creating unforgettable memories that will be
                  cherished for years to come.
                </p>
                <Link to={'/contact'} className='group mt-10 text-primaryLight font-semibold text-nowrap hover:brightness-150 transition-all duration-300 relative overflow-hidden'>
                  contact us {`>`}
                  <span className='w-full bg-none border-b-primaryLight border-b-[2px] absolute left-[-120px] group-hover:left-0 bottom-0 transition-all duration-300'></span>
                </Link>
              </div>
            </div>
          </div>
          <div className='flex order-1 sm:order-2 flex-col gap-y-5 items-center justify-center col-span-1 overflow-hidden rounded-[2.4rem] lg:rounded-[3.8rem] max-w-[25rem] mx-auto'>
            <video
              autoPlay={true}
              className='z-10 h-full object-cover w-[15rem] lg:w-[25rem]'
              loop
              muted
              playsInline
              onClick={(e) => {
                e.preventDefault();
              }}>
              <source src='/GlambotMobile.mp4' type='video/mp4' />
            </video>
          </div>
        </div>
      </div>
      <div className='w-screen bg-primaryLight text-[0.9rem] relative'>
        {/* THIRD DIV  | CAPTURE */}
        <div className='max-w-[1420px] min-h-[30rem] mx-auto px-5 text-paper bg-primaryLight flex flex-col items-center justify-center text-[2.2rem] sm:text-[3rem] font-semibold text-center tracking-wide py-[10rem]'>
          <img src='/spot_light1.png' alt='spot light' className='absolute top-0 left-0 max-h-[30rem] select-none' />
          <img src='/spot_light2.png' alt='spot light' className='absolute top-0 right-0 max-h-[30rem] select-none' />
          <p className='absolute h-full w-full z-10'></p>
          <p className='mt-20'>Let Glambot Capture Your Aura</p>
          <p>Because Everyone Deserves Their Star</p>
          <p className='border-b-[2px] border-b-paper'>Moment!</p>
        </div>
      </div>
      <div className='w-screen bg-paper text-[0.9rem]'>
        {/*  FOURTH DIV | STEPS */}
        <div className='max-w-[1420px] mx-auto bg-paper flex-col items-center justify-center pb-10 gap-y-10'>
          <h2 className='mb-2 text-[2rem] sm:text-[2rem] font-bold text-primaryLight text-center w-full leading-[2rem] sm:leading-[3rem] sm:text-start uppercase pt-10 flex justify-center items-center'>Steps</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 justify-center gap-x-4 gap-y-4 py-10 px-4'>
            <FeatureCard
              cls={'bg-secondaryLight col-span-1 w-full'}
              icon={<PiNumberCircleOneBold className='text-[6rem] text-primaryLight self-center' />}
              text={`Step onto the red carpet and let your inner star shine! Strike your most fabulous pose and get ready to dazzle.`}
              header={`1. Prepare your movement Pose`}
            />
            <FeatureCard
              cls={'bg-secondaryLight col-span-1 w-full'}
              icon={<PiNumberCircleTwoBold className='text-[6rem] text-primaryLight self-center' />}
              text={`We'll give you a countdown as our slow-motion camera begins to capture video clip in all its glamourous glory.`}
              header={`2. Lights, Camera, Action!`}
            />
            <FeatureCard cls={'bg-secondaryLight col-span-1 w-full'} icon={<PiNumberCircleThreeBold className='text-[6rem] text-primaryLight self-center' />} text={`Capture Every Angle with Our Digital 360 Rotating Camera!`} header={`1.Prepare your movement Pose`} />
          </div>
        </div>
      </div>
      <div className='w-screen bg-paper text-[0.9rem]'>
        {/* BOTTOM DIV | BOOK NOW */}
        <div className='max-w-[1420px] mx-auto bg-paper flex flex-col items-center gap-y-10'>
          <div className='flex justify-center w-screen relative min-h-[15rem]'>
            <p className='absolute h-full w-full bg-blackTransMain'></p>
            <img src='/glambot_contact.png' alt='glambot image' className='w-full object-cover' />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center flex-col'>
              <h1 className='text-paper text-[2.5rem] tracking-wide sm:text-[2rem] md:text-[4rem] font-semibold text-nowrap'>Let's do this!</h1>
              <div className='mt-4'>
                <Link
                  to={'/contact'}
                  className='w-full bg-secondaryLight brightness-[1.2] border-4 rounded-2xl tracking-wide leading-7 border-secondaryLight px-16 py-3 text-primaryLight rounded-4xl text-[0.9rem] sm:text-[1.1rem] hover:bg-blackTrans hover:text-paper transition-all duration-300 uppercase font-bold'>
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Glambot;
