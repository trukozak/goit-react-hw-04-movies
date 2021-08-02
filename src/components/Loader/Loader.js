import React from 'react';
import Loader from 'react-loader-spinner';

export const AppLoader = () => {
  return (
    <Loader
      type="Circles"
      color="#636571"
      height={40}
      width={40}
      timeout={5000}
      className="loader"
    />
  );
};
