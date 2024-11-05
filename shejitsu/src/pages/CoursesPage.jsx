// src/pages/CoursesPage.jsx
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import TabSwitcher from '../components/TabSwitcher';
import CourseCard from '../components/CourseCard';
import FilterPanel from '../components/FilterPanel';

export default function CoursesPage() {
  const [isFilterOpen, setFilterOpen] = useState(false);

  return (
    <div className="courses-page">
      <SearchBar
        onFocus={() => {/* optional focus behavior */}}
        onFilterClick={() => setFilterOpen(true)} // Open filter panel
      />
      <TabSwitcher selectedTab="courses" onSelectTab={() => {}} />
      <div className="cards-container">
        <CourseCard course={{
          image: "/path-to-image.jpg",
          title: "Closed Guard Essentials",
          level: "White Belt",
          description: "Learn key closed guard techniques.",
          progress: 50,
          rating: 4.8
        }} />
      </div>

      {/* Filter Panel with Slide-up effect */}
      <FilterPanel isOpen={isFilterOpen} onClose={() => setFilterOpen(false)} />
    </div>
  );
}
