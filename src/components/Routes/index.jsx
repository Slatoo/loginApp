import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';

export const AppRoute = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route index={index} path={route.path} element={route.element} />
          );
        })}
      </Routes>
    </Router>
  );
};
