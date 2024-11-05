// src/components/FilterPanel.jsx
import { useState } from 'react';
import './FilterPanel.css';

export default function FilterPanel({ isOpen, onClose }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPositions, setSelectedPositions] = useState([]);
  const [selectedBelts, setSelectedBelts] = useState([]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((item) => item !== category) : [...prev, category]
    );
  };

  const togglePosition = (position) => {
    setSelectedPositions((prev) =>
      prev.includes(position) ? prev.filter((item) => item !== position) : [...prev, position]
    );
  };

  const toggleBelt = (belt) => {
    setSelectedBelts((prev) =>
      prev.includes(belt) ? prev.filter((item) => item !== belt) : [...prev, belt]
    );
  };

  return (
    <div className={`filter-panel ${isOpen ? 'open' : ''}`}>
      <div className="filter-header">
        <h2>Filter</h2>
        <button className="close-button" onClick={onClose}>✕</button>
      </div>

      <div className="filter-options">
        <div className="filter-category">
          <h3>Categories</h3>
          {["Chokes", "Armlocks", "Leg Locks", "Sweeps", "Takedowns", "Escapes"].map((category) => (
            <button
              key={category}
              className={selectedCategories.includes(category) ? 'selected' : ''}
              onClick={() => toggleCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="filter-position">
          <h3>Position Type</h3>
          {["Guard", "Mount", "Side Control", "Back Control"].map((position) => (
            <button
              key={position}
              className={selectedPositions.includes(position) ? 'selected' : ''}
              onClick={() => togglePosition(position)}
            >
              {position}
            </button>
          ))}
        </div>

        <div className="filter-belt">
          <h3>Belt Level</h3>
          {["White Belt", "Blue Belt", "Purple Belt", "Brown Belt", "Black Belt"].map((belt) => (
            <button
              key={belt}
              className={selectedBelts.includes(belt) ? 'selected' : ''}
              onClick={() => toggleBelt(belt)}
            >
              {belt}
            </button>
          ))}
        </div>
      </div>

      <button className="apply-filters" onClick={onClose}>Apply Filters</button>
    </div>
  );
}
