// src/components/ItemList.jsx
import CourseCard from "./CourseCard";
import TechniqueCard from "./TechniqueCard";

export default function ItemList({ items, type }) {
  return (
    <div className="item-list">
      <h1>{type === "courses" ? "Courses" : "Techniques"}</h1>
      {items.map((item) => (
        type === "courses" ? (
          <CourseCard key={item.id} data={item} />
        ) : (
          <TechniqueCard key={item.id} data={item} />
        )
      ))}
    </div>
  );
}

