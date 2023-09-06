import React from 'react';

import { NavLinks, NavLists , ListWarp} from './styles';
interface NavLink {
    label: string;
    path: string;
  }
  
  const navLinks: NavLink[] = [
    { label: 'PROJECTS', path: '/' },
    { label: 'SERVICES', path: '/about' },
    { label: 'STUDIO', path: '/services' },
    { label: 'BLOG', path: '/contact' },
    { label: 'CART', path: '/contact' },

  ];
  
const NavList: React.FC = () => {
  return (
<nav>
      <ListWarp  sx={{display:"flex"}}  >
        {navLinks.map((link) => (
          <NavLists key={link.label}  disablePadding>
            <NavLinks href={link.path}>
             {link.label}
            </NavLinks>
          </NavLists>
        ))}
            <NavLists  disablePadding >
            <NavLinks href="#" sx={{background: "#CEBD63", color:"#202124B2"}}>
            GET IN TOUCH
            </NavLinks>
          </NavLists>
      </ListWarp>
    </nav>
  );
};

export default NavList;
