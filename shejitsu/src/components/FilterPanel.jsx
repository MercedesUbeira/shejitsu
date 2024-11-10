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
    onClose();
  };

  return (
    <div className={`filter-panel ${isOpen ? 'open' : ''}`}>
      <div className="filter-header">
        <h2>Filter</h2>
        <button className="close-button" onClick={onClose}>✕</button>
      </div>

      <div className="filter-options">
        <FilterSection
          title="Belt Level"
          options={["White Belt", "Blue Belt", "Purple Belt", "Brown Belt", "Black Belt"]}
          selectedOptions={selectedBelts}
          toggleOption={(belt) => toggleSelection(selectedBelts, setSelectedBelts, belt)}
        />
        <FilterSection
          title="Predominant Position"
          options={["Guard", "Mount", "Side Control", "Back Control"]}
          selectedOptions={selectedPositions}
          toggleOption={(position) => toggleSelection(selectedPositions, setSelectedPositions, position)}
        />
        <FilterSection
          title="Fighting Style"
          options={["Gi", "No-Gi", "Both"]}
          selectedOptions={selectedStyles}
          toggleOption={(style) => toggleSelection(selectedStyles, setSelectedStyles, style)}
        />
        <FilterSection
          title="Rating"
          options={[5, 4, 3, 2, 1]}
          selectedOptions={selectedRatings}
          toggleOption={(rating) => toggleSelection(selectedRatings, setSelectedRatings, rating)}
          isRating={true}
        />
      </div>

      <button className="apply-filters" onClick={applyFilters}>Apply Filters</button>
    </div>
  );
}

function FilterSection({ title, options, selectedOptions, toggleOption, isRating }) {
  return (
    <div className={`filter-${title.toLowerCase().replace(" ", "-")}`}>
      <h3>{title}</h3>
      {options.map(option => (
        <button
          key={option}
          className={selectedOptions.includes(option) ? 'selected' : ''}
          onClick={() => toggleOption(option)}
        >
          {isRating ? `⭐ ${option}` : option}
        </button>
      ))}
    </div>
  );
}
