// src/components/SearchBar.jsx
import { FaSearch, FaFilter } from 'react-icons/fa';
import './SearchBar.css';

export default function SearchBar({ onFocus, onFilterClick }) {
  return (
    <div className="search-bar" onClick={onFocus}>
      <FaSearch className="search-icon" />
      <input type="text" placeholder="Search what you are looking for" />
      <FaFilter className="filter-icon" onClick={(e) => {
        e.stopPropagation(); // Prevents triggering the search focus event
        onFilterClick(); // Opens the filter modal
      }} />
    </div>
  );
}
