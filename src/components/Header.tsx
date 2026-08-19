import './Header.css';
import Navbar from './Navbar';
import avatar from '../assets/image-avatar.png';
import logo from '../assets/logo.svg';

export default function Header() {
  return (
    <header className="Header">
      <div className="logo">
        <img
          src={logo}
          alt="logo"
        />
      </div>
      <Navbar />
      <div className="avatar">
        <img
          src={avatar}
          alt=""
        />
      </div>
    </header>
  );
}
