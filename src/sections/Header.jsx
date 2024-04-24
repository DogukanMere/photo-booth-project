import React, { useState } from 'react';
import NavItem from '../components/NavItem';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
    // Prevent scrolling on body when menu is open
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };
  return (
    <>
      <div className='w-screen bg-paper h-[100px] md:h-[120px] px-10 flex flex-none items-center sticky top-0 left-0 z-30 border-b-[2px] border-primaryLight'>
        <div className='flex flex-nowrap justify-between items-center w-full relative'>
          <div className='hidden md:flex flex-nowrap gap-x-10 lg:gap-x-16 flex-1 justify-start text-nowrap'>
            <NavItem itemName={'Corporate'} link={'/'} textColor={`text-primaryLight`} textSize={`text-[0.9rem]`} />
            <NavItem itemName={'Weddings'} link={'/'} textColor={`text-primaryLight`} textSize={`text-[0.9rem]`} />
          </div>
          {/* Logo */}
          <Link to={`/`} className='flex-1 flex justify-center'>
            <h1 className='text-fcPrimary'>
              <img src='/logo_light.png' alt='logo' className='max-w-[5rem] md:max-w-[6.5rem]' />
              {/* <p id='logo' className='font-bold text-[1.1rem]'>
            Photobooth
          </p> */}
            </h1>
          </Link>

          {/* Menu Items */}
          <div className='hidden md:flex flex-nowrap gap-x-10 lg:gap-x-16 flex-1 justify-end text-nowrap'>
            <NavItem itemName={'360 Booth'} link={'/'} textColor={`text-primaryLight`} textSize={`text-[0.9rem]`} />
            <NavItem itemName={'Glambot'} link={'/'} textColor={`text-primaryLight`} textSize={`text-[0.9rem]`} />
            <NavItem itemName={'About'} link={'/'} textColor={`text-primaryLight`} textSize={`text-[0.9rem]`} />
            <NavItem itemName={'Contact'} link={'/contact'} textColor={`text-primaryLight`} textSize={`text-[0.9rem]`} />
          </div>
        </div>
      </div>
      {/* Hamburger Icon */}
      <div className='md:hidden right-5 top-[25px] z-50 fixed'>
        <Hamburger toggled={isOpen} toggle={toggleMenu} color={`${!isOpen ? '#463f3a' : '#fff'}`} size={30} rounded label='Show menu' />
      </div>
      {isOpen && <div className='md:hidden fixed inset-0 z-40 bg-blackTransDark overflow-y-auto'></div>}
      {isOpen && (
        <div className='md:hidden relative justify-center items-center w-screen h-screen z-50 text-paper'>
          <div className='h-full w-1/2 mx-auto flex items-center justify-center'>
            <div className='w-full border-l-[3px] border-paper pl-10 flex flex-col flex-nowrap text-nowrap gap-y-10 relative top-[-4rem] left-[-1rem] font-bold uppercase'>
              <NavItem itemName={'Corporate'} link={'/'} textColor={`text-paper hover:text-primaryLight`} textSize={`text-[1.5rem] sm:text-[2.5rem] relative left-0 hover:left-3 tracking-wider transition-all duration-150 `} />
              <NavItem itemName={'Weddings'} link={'/'} textColor={`text-paper hover:text-primaryLight`} textSize={`text-[1.5rem] sm:text-[2.5rem] relative left-0 hover:left-3 tracking-wider transition-all duration-150`} />
              <NavItem itemName={'360 Booth'} link={'/'} textColor={`text-paper hover:text-primaryLight`} textSize={`text-[1.5rem] sm:text-[2.5rem] relative left-0 hover:left-3 tracking-wider transition-all duration-150`} />
              <NavItem itemName={'Glambot'} link={'/'} textColor={`text-paper hover:text-primaryLight`} textSize={`text-[1.5rem] sm:text-[2.5rem] relative left-0 hover:left-3 tracking-wider transition-all duration-150`} />
              <NavItem itemName={'About'} link={'/'} textColor={`text-paper hover:text-primaryLight`} textSize={`text-[1.5rem] sm:text-[2.5rem] relative left-0 hover:left-3 tracking-wider transition-all duration-150`} />
              <NavItem itemName={'Contact'} link={'/contact'} textColor={`text-paper hover:text-primaryLight`} textSize={`text-[1.5rem] sm:text-[2.5rem] relative left-0 hover:left-3 tracking-wider transition-all duration-150`} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
