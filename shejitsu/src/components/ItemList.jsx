import './ItemList.css';
import CourseCard from "./CourseCard";
import TechniqueCard from "./TechniqueCard";

export default function ItemList({ items, type }) {
  return (
    <div className="item-list">
      <h1>{type === "courses" ? "Courses" : "Techniques"}</h1>
      {items.map((item) =>
        type === "courses" ? (
          <CourseCard key={item.id} data={item} />
        ) : (
          <TechniqueCard key={item.id} data={item} />
        )
      )}
    </div>
  );
}

// A comment for us in the future.
//The ItemList component shows a list of items that can either be "Courses" or "Techniques," depending on what you pass in as the type prop. 
//It loops through the items array and, if the type is "courses," it uses a CourseCard component to display each item; otherwise, it uses a TechniqueCard component. 
//This way, the component can switch between showing courses or techniques based on what’s needed.