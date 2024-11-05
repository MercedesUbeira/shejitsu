// src/components/CourseCard.jsx
import { FaStar, FaHeart } from 'react-icons/fa';
import './CourseCard.css';

export default function CourseCard({ course }) {
  console.log("Course data in CourseCard:", course); // Log data for each card

  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} className="course-image" />
      <div className="course-info">
        <h3>{course.title}</h3>
        <span className="level-tag">{course.level}</span>
        <p>{course.description}</p>
        <div className="progress-bar">
          <div style={{ width: `${course.progress}%` }}></div>
        </div>
      </div>
      <span>{course.rating} <FaStar /></span>
      <FaHeart />
    </div>
  );
}
