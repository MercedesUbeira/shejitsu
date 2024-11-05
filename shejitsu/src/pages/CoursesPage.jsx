// src/pages/CoursesPage.jsx
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import TabSwitcher from '../components/TabSwitcher';
import CoursesList from '../components/CoursesList'; // Import CoursesList instead of CourseCard
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

      {/* Use CoursesList here to load all courses */}
      <CoursesList />

      {/* Filter Panel with Slide-up effect */}
      <FilterPanel isOpen={isFilterOpen} onClose={() => setFilterOpen(false)} />
    </div>
  );
}
