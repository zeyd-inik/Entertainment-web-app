import { createBrowserRouter } from 'react-router';
import App from '../App';
import AuthLayout from '../layouts/AuthLayout';
import BaseLayout from '../layouts/BaseLayout';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import MoviesPage from '../pages/MoviesPage';
import Bookmarks from '../pages/Bookmarks';
import Series from '../pages/Series';

export const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
    children: [
      {
        element: <AuthLayout />,
        children: [
          { index: true, element: <Login /> },
          {
            path: 'signUp',
            element: <SignUp />,
          },
        ],
      },
      {
        element: <BaseLayout />,
        children: [
          {
            element: <HomePage />,
            path: 'home',
          },
          {
            path: 'bookmarks',
            element: <Bookmarks />,
          },
          {
            path: 'movies',
            element: <MoviesPage />,
          },
          {
            path: 'series',
            element: <Series />,
          },
        ],
      },
    ],
  },
]);
