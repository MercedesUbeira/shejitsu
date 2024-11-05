// src/components/TechniqueCard.jsx
import { FaEye, FaHeart } from 'react-icons/fa';
import './TechniqueCard.css';


export default function TechniqueCard({ technique }) {
  return (
    <div className="technique-card">
      <img src={technique.image} alt={technique.title} className="technique-image" />
      <div className="technique-info">
        <h3>{technique.title}</h3>
        <span className="level-tag">{technique.level}</span>
        <p>{technique.description}</p>
        <div className="tags">
          {technique.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
      </div>
      <span>{technique.viewers} <FaEye /></span>
      <FaHeart />
    </div>
  );
}
