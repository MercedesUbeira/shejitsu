// src/components/CoursesList.jsx
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Import Firestore instance from firebase.js
import CourseCard from "./CourseCard";


export default function CoursesList() {
  const [courses, setCourses] = useState([]); // State to store courses data
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Function to fetch data from Firestore
    const fetchCourses = async () => {
      try {
        const coursesCollection = collection(db, "courses"); // Reference to the courses collection
        const coursesSnapshot = await getDocs(coursesCollection); // Fetch all documents in the collection
        const coursesList = coursesSnapshot.docs.map(doc => ({
          id: doc.id, // Document ID
          ...doc.data() // Document data
        }));
        setCourses(coursesList); // Update state with fetched data
        setLoading(false); // Set loading to false once data is loaded
      } catch (error) {
        console.error("Error fetching courses:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchCourses(); // Call the function
  }, []); // Empty dependency array to fetch data only once on mount

  if (loading) return <p>Loading courses...</p>; // Display loading message

  return (
    <div className="courses-list">
      <h1>Courses</h1>
      {courses.map(course => (
        <CourseCard key={course.id} course={course} /> // Render CourseCard for each course
      ))}
    </div>
  );
}
