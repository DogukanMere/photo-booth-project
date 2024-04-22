import React from 'react';
import NavItem from '../components/NavItem';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='w-screen bg-paper h-[120px] px-10 flex flex-none items-center sticky top-0 left-0 z-40'>
      <div className='flex flex-nowrap justify-between items-center w-full'>
        <div className='flex flex-nowrap gap-x-16 flex-1 justify-start text-nowrap'>
          <NavItem itemName={'Corporate'} link={'/'} />
          <NavItem itemName={'Weddings'} link={'/'} />
        </div>
        {/* Logo */}
        <Link to={`/`} className='flex-1 flex justify-center'>
          <h1 className='text-fcPrimary'>
            <img src='/logo_light.png' alt='logo' className='max-w-[6.5rem]' />
            {/* <p id='logo' className='font-bold text-[1.1rem]'>
            Photobooth
          </p> */}
          </h1>
        </Link>
        {/* Menu Items */}
        <div className='flex flex-nowrap gap-x-16 flex-1 justify-end text-nowrap'>
          <NavItem itemName={'360 Booth'} link={'/'} />
          <NavItem itemName={'Glambot'} link={'/'} />
          <NavItem itemName={'About'} link={'/'} />
          <NavItem itemName={'Contact'} link={'/contact'} />
        </div>
      </div>
    </div>
  );
};

export default Header;
