import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavigationStyled } from './NavigationStyled';

const Navigation = ({ routes }) => {
  return (
    <NavigationStyled>
      <ul className="navigationList">
        {routes.map(({ path, exact, name }) => (
          <li key={path} className="navigationItem">
            <NavLink
              className="navigationLink"
              activeClassName="navigationLinkActive"
              to={path}
              exact={exact}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
