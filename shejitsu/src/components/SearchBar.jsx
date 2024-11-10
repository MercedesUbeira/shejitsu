// Created by Daniel and Mechi
import { useState } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';
import './SearchBar.css';

export default function SearchBar({ onFocus, onFilterClick, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Pass the input value to the parent component for filtering
  };

  return (
    <div className="search-bar" onClick={onFocus}>
      <FaSearch className="icon search-icon" />
      <input
        type="text"
        placeholder="Search what you are looking for"
        value={searchTerm}
        onChange={handleInputChange}
        className="search-input"
      />
      <FaFilter
        className="icon filter-icon"
        onClick={(e) => {
          e.stopPropagation();
          onFilterClick();
        }}
      />
    </div>
  );
}
