import { FaStar, FaHeart } from 'react-icons/fa';
import './CourseCard.css';

export default function CourseCard({ data }) {
    return (
        <div className="course-card">
            <img src={data.image} alt={data.title} className="course-image" />
            
            <span className="rating">
                {data.rating} <FaStar />
            </span>
            <FaHeart className="favorite-icon" />

            <div className="course-info">
                <h3>{data.title}</h3>
                <span className="level-tag">{data.level}</span>
                <p>{data.description}</p>
                
                <div className="progress-bar">
                    <div style={{ width: `${data.progress}%` }}></div>
                </div>
                <div className="course-count">{data.completedCourses}/{data.totalCourses} courses</div>
            </div>
        </div>
    );
}
