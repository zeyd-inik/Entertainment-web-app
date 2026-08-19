import { Outlet } from 'react-router';
import './BaseLayout.css';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';

export default function BaseLayout() {
  return (
    <div className="BaseLayout">
      <Header />
      <SearchBar />
      <Outlet />
    </div>
  );
}
