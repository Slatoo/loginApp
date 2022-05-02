import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';

export default Routes = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          return <Route path={route.path} element={route.element} />;
        })}
      </Routes>
    </Router>
  );
};
