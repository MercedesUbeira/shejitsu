// Created by Mechii
import "./TabSwitcher.css";

export default function TabSwitcher({ selectedTab, onSelectTab }) {
  return (
    <div className="tab-switcher">
      <button
        className={selectedTab === "courses" ? "active" : ""}
        onClick={() => onSelectTab("courses")}
      >
        Courses
      </button>
      <button
        className={selectedTab === "techniques" ? "active" : ""}
        onClick={() => onSelectTab("techniques")}
      >
        Techniques
      </button>
    </div>
  );
}
