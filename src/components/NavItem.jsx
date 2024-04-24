import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ itemName, link, textColor, textSize }) => {
  return (
    <div>
      <Link to={link} className={`${textColor} ${textSize} font-[400] hover:brightness-[2.5] transition-all duration-150`}>
        {itemName}
      </Link>
    </div>
  );
};

export default NavItem;
