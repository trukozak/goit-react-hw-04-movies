import { lazy } from 'react';
import NotFoundPage from '../pages/NotFoundPage';

export const mainRoutes = [
  {
    name: 'home',
    path: '/',
    exact: true,
    component: lazy(() =>
      import('../pages/HomePage' /* webpackChunkName: "HomePage" */),
    ),
  },
  {
    name: 'movies',
    path: '/movies',
    exact: true,
    component: lazy(() =>
      import('../pages/MoviesPage' /* webpackChunkName: "MoviesPage" */),
    ),
  },
  {
    name: 'movieDetails',
    path: '/movies/:id',
    exact: false,
    component: lazy(() =>
      import(
        '../pages/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
      ),
    ),
  },
  {
    name: 'NotFoundPage',
    component: NotFoundPage,
  },
];
