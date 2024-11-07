import { useState, useEffect } from 'react';
import { ref, onValue, query, orderByChild, equalTo } from "firebase/database";
import { db } from "../firebase"; // Firebase configuration
import SearchBar from '../components/SearchBar';
import TabSwitcher from '../components/TabSwitcher';
import ItemList from '../components/ItemList';
import FilterPanel from '../components/FilterPanel';

export default function CoursesAndTechniquesPage() {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("courses");
  const [data, setData] = useState([]); // Data for either courses or techniques
  const [filters, setFilters] = useState({}); // Stores active filters

  // Handle tab switching
  const handleTabSwitch = (tab) => {
    setSelectedTab(tab);
    setFilters({}); // Clear filters when switching tabs
  };

  // Function to fetch and filter data from Firebase
  const fetchData = (filters) => {
    const dataPath = selectedTab; // "courses" or "techniques" based on selected tab
    const dataRef = ref(db, dataPath);

    onValue(dataRef, (snapshot) => {
        const firebaseData = snapshot.val();
        if (firebaseData) {
            let dataList = Object.keys(firebaseData).map((key) => ({
                id: key,
                ...firebaseData[key]
            }));

            console.log("Initial Data List from Firebase:", dataList);

            // Apply filters to dataList if any filters are set
            if (filters.belts && filters.belts.length > 0) {
                dataList = dataList.filter(item => 
                    filters.belts.map(b => b.toLowerCase()).includes((item.level || '').toLowerCase())
                );
            }
            if (filters.positions && filters.positions.length > 0) {
                dataList = dataList.filter(item => 
                    filters.positions.map(p => p.toLowerCase()).includes((item.position || '').toLowerCase())
                );
            }
            if (filters.styles && filters.styles.length > 0) {
                dataList = dataList.filter(item => 
                    filters.styles.includes(item.style)
                );
            }
            if (filters.ratings && filters.ratings.length > 0) {
                dataList = dataList.filter(item => 
                    filters.ratings.includes(Math.floor(item.rating))
                );
            }

            console.log("Filtered Data After Applying Filters:", dataList);
            setData(dataList);
        } else {
            console.warn(`No data found for ${dataPath} in Firebase`);
            setData([]); // Set to empty array if no data
        }
    });
};



  // Fetch data whenever the selectedTab or filters change
  useEffect(() => {
    fetchData(filters);
  }, [selectedTab, filters]);

  // Function to handle filters applied from FilterPanel
  const handleApplyFilters = (appliedFilters) => {
    setFilters(appliedFilters); // Update filters and trigger re-fetch
  };

  return (
    <div className="courses-techniques-page">
      <SearchBar
        onFocus={() => {}}
        onFilterClick={() => setFilterOpen(true)}
      />
      <TabSwitcher selectedTab={selectedTab} onSelectTab={handleTabSwitch} />

      {/* Render the filtered data in ItemList */}
      <ItemList items={data} type={selectedTab} />

      {/* Pass handleApplyFilters to FilterPanel */}
      <FilterPanel
        isOpen={isFilterOpen}
        onClose={() => setFilterOpen(false)}
        onApplyFilters={handleApplyFilters}
      />
    </div>
  );
}
