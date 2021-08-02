import React, { Suspense } from 'react';
import { mainRoutes } from '../../routes/mainRoutes';
import ContentSwitcher from '../ContentSwitcher/ContentSwitcher';
import { AppLoader } from '../Loader/Loader';
import { MainStyled } from './MainStyled';

const Main = () => {
  return (
    <MainStyled>
      <Suspense fallback={AppLoader()}>
        <ContentSwitcher routes={mainRoutes} />
      </Suspense>
    </MainStyled>
  );
};

export default Main;
