import React from 'react';
import { NavLink as RRNavLink, NavLinkProps } from 'react-router-dom';

export const Nav: React.FC = (props) => {
  return (
    <nav className="Nav">
      <ul>{props.children}</ul>
    </nav>
  );
};

export const NavLink: React.FC<NavLinkProps> = (props) => {
  return (
    <li>
      <RRNavLink {...props} className="Nav__link" />
    </li>
  );
};
