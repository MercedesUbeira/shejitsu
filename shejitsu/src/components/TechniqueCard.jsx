// src/components/TechniqueCard.jsx
import { FaHeart } from 'react-icons/fa';
import './TechniqueCard.css';

export default function TechniqueCard({ data }) {
  // Ensure tags is an array to avoid map errors
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
