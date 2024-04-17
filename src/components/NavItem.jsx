import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ itemName, link }) => {
  return (
    <div>
      <Link to={link} className={`text-fcPrimary text-[0.9rem]`}>
        {itemName}
      </Link>
    </div>
  );
};

export default NavItem;
