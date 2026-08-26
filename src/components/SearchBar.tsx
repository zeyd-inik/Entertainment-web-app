import './SearchBar.css';
import { IoSearch } from 'react-icons/io5';

type SearchBarProps = {
  placeholder: string;
};

export default function SearchBar({ placeholder }: SearchBarProps) {
  return (
    <div className="SearchBar">
      <label htmlFor="text_input">
        <IoSearch className="icon" />
      </label>

      <input
        className="text_input "
        id="text_input"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
