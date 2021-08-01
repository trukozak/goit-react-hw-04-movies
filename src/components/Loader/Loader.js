import React from 'react';
import Loader from 'react-loader-spinner';

export const AppLoader = () => {
  return (
    <Loader
      type="Circles"
      color="#3f51b5"
      height={40}
      width={40}
      timeout={5000}
      className="loader"
    />
  );
};
