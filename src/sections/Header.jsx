import React from 'react';
import NavItem from '../components/NavItem';

const Header = () => {
  return (
    <div className='w-screen bg-paper h-[90px] px-10 flex flex-none items-center sticky top-0 left-0 z-40'>
      <div className='flex flex-nowrap justify-between w-full'>
        {/* Logo */}
        <h1 className='text-fcPrimary uppercase'>
          <img src='/interactive_logo_black_type.png' alt='logo' className='h-[4rem]' />
        </h1>
        {/* Menu Items */}
        <div className='flex flex-nowrap gap-x-16'>
          <NavItem itemName={'Home'} link={'/'} />
          <NavItem itemName={'About'} link={'/'} />
          <NavItem itemName={'Contact'} link={'/'} />
        </div>
      </div>
    </div>
  );
};

export default Header;
