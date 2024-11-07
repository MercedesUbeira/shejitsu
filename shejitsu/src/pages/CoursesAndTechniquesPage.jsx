// src/pages/CoursesAndTechniquesPage.jsx
import { useState, useEffect } from 'react';
import { ref, onValue } from "firebase/database";
import { db } from "../firebase"; // Firebase configuration
import SearchBar from '../components/SearchBar';
import TabSwitcher from '../components/TabSwitcher';
import ItemList from '../components/ItemList';
import FilterPanel from '../components/FilterPanel';

export default function CoursesAndTechniquesPage() {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("courses");
  const [data, setData] = useState([]); // Data for either courses or techniques

  // Function to handle tab switching
  const handleTabSwitch = (tab) => {
    setSelectedTab(tab);
  };

  // Fetch data from Firebase when the tab changes
  useEffect(() => {
    const dataPath = selectedTab; // "courses" or "techniques" based on selected tab
    const dataRef = ref(db, dataPath);

    onValue(dataRef, (snapshot) => {
      const firebaseData = snapshot.val();
      if (firebaseData) {
        const dataList = Object.keys(firebaseData).map((key) => ({
          id: key,
          ...firebaseData[key]
        }));
        setData(dataList);
      } else {
        console.warn(`No data found for ${dataPath} in Firebase`);
        setData([]); // Set to empty array if no data
      }
    });
  }, [selectedTab]);

  return (
    <div className="courses-techniques-page">
      <SearchBar
        onFocus={() => {}}
        onFilterClick={() => setFilterOpen(true)}
      />
      <TabSwitcher selectedTab={selectedTab} onSelectTab={handleTabSwitch} />

      {/* Render the unified ItemList component with data and selected tab type */}
      <ItemList items={data} type={selectedTab} />

      <FilterPanel isOpen={isFilterOpen} onClose={() => setFilterOpen(false)} />
    </div>
  );
}
