import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavItem = (props) => {
  const location = useLocation();
  const { itemName, link, textColor, textSize } = props;
  return (
    <div>
      <Link to={link} className={`${location?.pathname === props?.navTag ? 'text-secondaryMain hover:brightness-[1.3] ' : `${textColor} hover:brightness-[2.5] `} ${textSize} font-[400] transition-all duration-150`}>
        {itemName}
      </Link>
    </div>
  );
};

export default NavItem;
