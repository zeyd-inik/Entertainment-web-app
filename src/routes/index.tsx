import { createBrowserRouter } from 'react-router';
import App from '../App';
import AuthLayout from '../layouts/AuthLayout';
import BaseLayout from '../layouts/BaseLayout';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

export const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
    children: [
      {
        element: <BaseLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
        ],
      },
      {
        path: 'auth',
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            element: <Login />,
          },
          {
            path: 'signUp',
            element: <SignUp />,
          },
        ],
      },
    ],
  },
]);
