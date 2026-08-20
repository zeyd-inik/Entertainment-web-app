import './SearchBar.css';
import { IoSearch } from 'react-icons/io5';

export default function SearchBar() {
  return (
    <div className="SearchBar">
      <label htmlFor="text_input">
        <IoSearch className="icon" />
      </label>

      <input
        className="text_input "
        id="text_input"
        type="text"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
}
