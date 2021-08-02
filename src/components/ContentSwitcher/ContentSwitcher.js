import React from 'react';
import { Route, Switch } from 'react-router-dom';
const ContentSwitcher = ({ routes }) => {
  return (
    <Switch>
      {routes.map(({ name, path, component, exact }) => (
        <Route key={name} path={path} component={component} exact={exact} />
      ))}
    </Switch>
  );
};

export default ContentSwitcher;
