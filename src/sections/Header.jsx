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

  const hamburgerItemStyle = `text-[1.5rem] sm:text-[1.8rem] relative bottom-0 hover:bottom-[2px] tracking-wider transition-all duration-150`;
  return (
    <>
      <div className='w-screen bg-paper h-[100px] md:h-[120px] px-10 flex flex-none items-center fixed top-0 left-0 z-30 border-b-[2px] border-primaryLight'>
        <div className='flex flex-nowrap justify-between items-center w-full relative'>
          <div className='hidden md:flex flex-nowrap gap-x-10 lg:gap-x-16 flex-1 justify-start text-nowrap'>
            <NavItem itemName={'Corporate'} link={'/corporate'} textColor={`text-primaryLight`} textSize={`text-[0.9rem]`} navTag={`/corporate`} />
            <NavItem itemName={'Weddings'} link={'/wedding'} textColor={`text-primaryLight`} textSize={`text-[0.9rem]`} navTag={`/wedding`} />
          </div>
          {/* Logo */}
          <Link to={`/`} className='flex-1 flex justify-center'>
            <h1 className='text-fcPrimary'>
              <img src='/logo_light.png' alt='logo' className='max-w-[5rem] md:max-w-[6.5rem]' />
            </h1>
          </Link>

          {/* Menu Items */}
          <div className='hidden md:flex flex-nowrap gap-x-10 lg:gap-x-16 flex-1 justify-end text-nowrap'>
            <NavItem itemName={'360 Booth'} link={'/'} textColor={`text-primaryLight`} textSize={`text-[0.9rem]`} navTag={`/`} />
            <NavItem itemName={'Glambot'} link={'/glambot'} textColor={`text-primaryLight`} textSize={`text-[0.9rem]`} navTag={`/glambot`} />
            <NavItem itemName={'About'} link={'/about'} textColor={`text-primaryLight`} textSize={`text-[0.9rem]`} navTag={`/about`} />
            <NavItem itemName={'Contact'} link={'/contact'} textColor={`text-primaryLight`} textSize={`text-[0.9rem]`} navTag={`/contact`} />
          </div>
        </div>
      </div>

      {/* Hamburger Icon */}
      <div className='md:hidden fixed right-5 top-[25px] z-50 cursor-pointer'>
        <Hamburger toggled={isOpen} toggle={toggleMenu} color={`${!isOpen ? '#463f3a' : '#fff'}`} size={30} rounded label='Show menu' />
      </div>

      {/* Overlay */}
      {isOpen && <div className='md:hidden fixed inset-0 z-40 bg-blackTransDark' onClick={toggleMenu}></div>}

      {/* Menu */}
      {isOpen && (
        <div className='md:hidden fixed top-0 left-0 w-full h-fit z-40 overflow-y-auto text-paper' onClick={toggleMenu}>
          <div className='w-full max-w-[400px] p-8 mx-auto'>
            <div className=' h-screen  flex flex-col relative justify-center items-center text-nowrap gap-y-10 font-bold uppercase'>
              <NavItem itemName={'Corporate'} link={'/corporate'} textColor={`text-paper hover:text-primaryLight`} textSize={hamburgerItemStyle} navTag={`/corporate`} />
              <NavItem itemName={'Weddings'} link={'/wedding'} textColor={`text-paper hover:text-primaryLight`} textSize={hamburgerItemStyle} navTag={`/wedding`} />
              <NavItem itemName={'360 Booth'} link={'/'} textColor={`text-paper hover:text-primaryLight`} textSize={hamburgerItemStyle} navTag={`/`} />
              <NavItem itemName={'Glambot'} link={'/glambot'} textColor={`text-paper hover:text-primaryLight`} textSize={hamburgerItemStyle} navTag={`/glambot`} />
              <NavItem itemName={'About'} link={'/about'} textColor={`text-paper hover:text-primaryLight`} textSize={hamburgerItemStyle} navTag={`/about`} />
              <NavItem itemName={'Contact'} link={'/contact'} textColor={`text-paper hover:text-primaryLight`} textSize={hamburgerItemStyle} navTag={`/contact`} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
