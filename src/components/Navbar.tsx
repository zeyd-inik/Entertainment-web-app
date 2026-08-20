import './Navbar.css';
import { PiSquaresFourFill } from 'react-icons/pi';
import { TbMovie } from 'react-icons/tb';
import { TbDeviceTvOld } from 'react-icons/tb';
import { FaBookmark } from 'react-icons/fa';
import { NavLink } from 'react-router';

export default function Navbar() {
  return (
    <nav className="Navbar">
      <NavLink
        to="/"
        end
      >
        {({ isActive }) => {
          return (
            <PiSquaresFourFill className={isActive ? 'icon active' : 'icon'} />
          );
        }}
      </NavLink>
      <NavLink to="movies">
        {({ isActive }) => {
          return <TbMovie className={isActive ? 'icon active' : 'icon'} />;
        }}
      </NavLink>
      <NavLink to="series">
        {({ isActive }) => {
          return (
            <TbDeviceTvOld className={isActive ? 'icon active' : 'icon'} />
          );
        }}
      </NavLink>
      <NavLink to="bookmarks">
        {({ isActive }) => {
          return (
            <FaBookmark
              className={isActive ? 'icon bookmark active' : 'icon bookmark'}
            />
          );
        }}
      </NavLink>
    </nav>
  );
}
