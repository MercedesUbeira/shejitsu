import { useState } from 'react';
import './FilterPanel.css';

export default function FilterPanel({ isOpen, onClose, onApplyFilters }) {
  const [selectedBelts, setSelectedBelts] = useState([]);
  const [selectedPositions, setSelectedPositions] = useState([]);
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const toggleSelection = (selection, setSelection, value) => {
    setSelection(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const applyFilters = () => {
    onApplyFilters({
      belts: selectedBelts,
      positions: selectedPositions,
      styles: selectedStyles,
      ratings: selectedRatings,
    });
    onClose(); // Close the filter panel
  };

  return (
    <div className={`filter-panel ${isOpen ? 'open' : ''}`}>
      <div className="filter-header">
        <h2>Filter</h2>
        <button className="close-button" onClick={onClose}>✕</button>
      </div>

      <div className="filter-options">
        {/* Belt Level Filter */}
        <div className="filter-belt">
          <h3>Belt Level</h3>
          {["White Belt", "Blue Belt", "Purple Belt", "Brown Belt", "Black Belt"].map(belt => (
            <button
              key={belt}
              className={selectedBelts.includes(belt) ? 'selected' : ''}
              onClick={() => toggleSelection(selectedBelts, setSelectedBelts, belt)}
            >
              {belt}
            </button>
          ))}
        </div>

        {/* Predominant Position Filter */}
        <div className="filter-position">
          <h3>Predominant Position</h3>
          {["Guard", "Mount", "Side Control", "Back Control"].map(position => (
            <button
              key={position}
              className={selectedPositions.includes(position) ? 'selected' : ''}
              onClick={() => toggleSelection(selectedPositions, setSelectedPositions, position)}
            >
              {position}
            </button>
          ))}
        </div>

        {/* Fighting Style Filter */}
        <div className="filter-style">
          <h3>Fighting Style</h3>
          {["Gi", "No-Gi", "Both"].map(style => (
            <button
              key={style}
              className={selectedStyles.includes(style) ? 'selected' : ''}
              onClick={() => toggleSelection(selectedStyles, setSelectedStyles, style)}
            >
              {style}
            </button>
          ))}
        </div>

        {/* Rating Filter */}
        <div className="filter-rating">
          <h3>Rating</h3>
          {[5, 4, 3, 2, 1].map(rating => (
            <button
              key={rating}
              className={selectedRatings.includes(rating) ? 'selected' : ''}
              onClick={() => toggleSelection(selectedRatings, setSelectedRatings, rating)}
            >
              ⭐ {rating}
            </button>
          ))}
        </div>
      </div>

      <button className="apply-filters" onClick={applyFilters}>Apply Filters</button>
    </div>
  );
}
