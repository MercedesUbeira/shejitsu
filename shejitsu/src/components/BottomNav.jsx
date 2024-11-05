// src/components/BottomNav.jsx
import './BottomNav.css'; 

import { FaHome, FaCalendar, FaBook, FaShoppingCart, FaUser } from 'react-icons/fa';

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <FaHome />
      <FaCalendar />
      <FaBook />
      <FaShoppingCart />
      <FaUser />
    </nav>
  );
}
