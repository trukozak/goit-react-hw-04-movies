import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { mainRoutes } from '../../routes/mainRoutes';
import { AppLoader } from '../Loader/Loader';
import { MainStyled } from './MainStyled';

const Main = () => {
  return (
    <MainStyled>
      <Suspense fallback={AppLoader()}>
        <Switch>
          {mainRoutes.map(({ name, path, component, exact }) => (
            <Route key={name} path={path} component={component} exact={exact} />
          ))}
        </Switch>
      </Suspense>
    </MainStyled>
  );
};

export default Main;
