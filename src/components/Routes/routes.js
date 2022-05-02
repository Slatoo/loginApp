import ContactPage from '../../pages/contacts';
import Home from '../../pages/home';
import Login from '../../pages/login';

export const routes = [
  {
    path: '/',
    element: Login,
  },
  {
    path: '/contact',
    element: ContactPage,
  },
  {
    path: '/home',
    element: Home,
  },
];
