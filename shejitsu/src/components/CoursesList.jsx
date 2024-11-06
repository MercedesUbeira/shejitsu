import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database"; 
import { db } from "../firebase"; 
import CourseCard from "./CourseCard";

export default function CoursesList() {
  const [courses, setCourses] = useState([]); // State to store courses data
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const coursesRef = ref(db, "courses"); // Reference to the "courses" node in Realtime Database

    // Retrieve data once from the Realtime Database
    onValue(coursesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const coursesList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        console.log("Fetched courses data:", coursesList); // Debugging log testiiiiiiiiiiiiing
        setCourses(coursesList);
      } else {
        console.log("No data available");
        setCourses([]);
      }
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading courses...</p>; // Display loading message

  return (
    <div className="courses-list">
      <h1>Courses</h1>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} /> // Render CourseCard for each course
      ))}
    </div>
  );
}
