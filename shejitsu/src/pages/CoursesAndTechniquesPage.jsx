//Developed by Daniel and Mechii
import { useState, useEffect } from 'react';
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";
import SearchBar from '../components/SearchBar';
import TabSwitcher from '../components/TabSwitcher';
import ItemList from '../components/ItemList';
import FilterPanel from '../components/FilterPanel';

export default function CoursesAndTechniquesPage() {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("courses");
  const [rawData, setRawData] = useState([]); // Stores unfiltered data fetched from Firebase
  const [data, setData] = useState([]); // Stores data to display after applying search and filter
  const [searchTerm, setSearchTerm] = useState(''); // Stores the current search term
  const [filters, setFilters] = useState({}); // Stores active filters

  // The content is dynamicHandle tab switching
  const handleTabSwitch = (tab) => {
    setSelectedTab(tab);
    setFilters({});
    setSearchTerm('');  // Clear search when switching tabs
    setRawData([]); // Reset raw data on tab switch to avoid conflicts
  };

  // Fetch data from Firebase when the selected tab changes
  useEffect(() => {
    const dataPath = selectedTab; // Path depends on whether "courses" or "techniques" is selected
    const dataRef = ref(db, dataPath);

    onValue(dataRef, (snapshot) => {
        const firebaseData = snapshot.val();
        if (firebaseData) {
            const dataList = Object.keys(firebaseData).map((key) => ({
                id: key,
                ...firebaseData[key]
            }));
            setRawData(dataList); // Store the fetched data as rawData
            setData(dataList); // Initially display all data
        } else {
            console.warn(`No data found for ${dataPath} in Firebase`);
            setRawData([]);
            setData([]);
        }
    });
  }, [selectedTab]);

  // Apply search and filter criteria to rawData
  useEffect(() => {
    let filteredData = [...rawData]; // Start with a copy of rawData

    // Apply search term if present
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      filteredData = filteredData.filter(item =>
        (item.title && item.title.toLowerCase().includes(lowerCaseSearchTerm)) ||
        (item.description && item.description.toLowerCase().includes(lowerCaseSearchTerm)) ||
        (item.longDescription && item.longDescription.toLowerCase().includes(lowerCaseSearchTerm)) ||
        (item.level && item.level.toLowerCase().includes(lowerCaseSearchTerm)) ||
        (item.position && item.position.toLowerCase().includes(lowerCaseSearchTerm)) ||
        (item.style && item.style.toLowerCase().includes(lowerCaseSearchTerm))
      );
    }

    // Apply additional filters if they are set
    if (filters.belts && filters.belts.length > 0) {
      filteredData = filteredData.filter(item => 
        filters.belts.map(b => b.toLowerCase()).includes((item.level || '').toLowerCase())
      );
    }
    if (filters.positions && filters.positions.length > 0) {
      filteredData = filteredData.filter(item => 
        filters.positions.map(p => p.toLowerCase()).includes((item.position || '').toLowerCase())
      );
    }
    if (filters.styles && filters.styles.length > 0) {
      filteredData = filteredData.filter(item => 
        filters.styles.includes(item.style)
      );
    }
    if (filters.ratings && filters.ratings.length > 0) {
      filteredData = filteredData.filter(item => 
        filters.ratings.includes(Math.floor(item.rating))
      );
    }

    setData(filteredData); // Update the displayed data
  }, [searchTerm, filters, rawData]); // Run whenever searchTerm, filters, or rawData changes

  // Update search term and trigger filtering
  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <div className="courses-techniques-page">
      <SearchBar
        onFocus={() => {}}
        onFilterClick={() => setFilterOpen(true)}
        onSearch={handleSearch}
      />
      <TabSwitcher selectedTab={selectedTab} onSelectTab={handleTabSwitch} />
      <ItemList items={data} type={selectedTab} />
      <FilterPanel
        isOpen={isFilterOpen}
        onClose={() => setFilterOpen(false)}
        onApplyFilters={setFilters} 
      />
    </div>
  );
}
