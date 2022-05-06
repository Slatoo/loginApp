import ContactPage from '../../pages/contacts';
import Home from '../../pages/home';
import Home2 from '../../pages/home2';
import Login from '../../pages/login';

export const routes = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/home2',
    element: <Home2 />,
  },
];
