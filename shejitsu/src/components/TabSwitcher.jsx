// src/components/TabSwitcher.jsx
import './TabSwitcher.css';

export default function TabSwitcher({ selectedTab, onSelectTab }) {
    return (
      <div className="tab-switcher">
        <button onClick={() => onSelectTab('courses')} className={selectedTab === 'courses' ? 'active' : ''}>
          Courses
        </button>
        <button onClick={() => onSelectTab('techniques')} className={selectedTab === 'techniques' ? 'active' : ''}>
          Techniques
        </button>
      </div>
    );
  }
  