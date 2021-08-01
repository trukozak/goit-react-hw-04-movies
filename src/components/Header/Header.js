import React from 'react';
import { navRoutes } from '../../routes/navRoutes';
import Navigation from '../Navigation/Navigation';
import { HeaderStyled } from './HeaderStyled';

const Header = () => {
  return (
    <HeaderStyled>
      <Navigation routes={navRoutes} />
    </HeaderStyled>
  );
};

export default Header;
