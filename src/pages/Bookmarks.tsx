import MediaGrid from '../components/MediaGrid';
import './Bookmarks.css';

export default function Bookmarks() {
  return (
    <div className="Bookmarks">
      {' '}
      <MediaGrid />
      <MediaGrid />
    </div>
  );
}
/* 
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
        element: <BaseLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
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
 */
