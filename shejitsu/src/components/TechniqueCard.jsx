//Created by Mechii
import { FaHeart } from 'react-icons/fa';
import './TechniqueCard.css';

export default function TechniqueCard({ data }) {
  // This converts the data into an array. We do this to avoid issues when maping throug it
  const tags = Array.isArray(data.tags) ? data.tags : [];

  return (
    <div className="technique-card">
      <img src={data.image} alt={data.title} className="technique-image" />
      <div className="technique-info">
        <h3>{data.title}</h3>
        <span className="level-tag">{data.level}</span>
        <p>{data.description}</p>
        <div className="technique-meta">
          <span>{data.viewers} viewers</span>
          <span>{data.time}</span>
        </div>
        <div className="tags">
          {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
      </div>
      <FaHeart />
    </div>
  );
}
