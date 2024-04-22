import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ itemName, link }) => {
  return (
    <div>
      <Link to={link} className={`text-primaryLight text-[0.9rem] font-[400] hover:brightness-[2.5] transition-all duration-150`}>
        {itemName}
      </Link>
    </div>
  );
};

export default NavItem;
