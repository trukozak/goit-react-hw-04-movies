import { lazy } from 'react';

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
    name: 'moviesPage',
    path: '/movies/:id',
    exact: false,
    component: lazy(() =>
      import(
        '../pages/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
      ),
    ),
  },
];
