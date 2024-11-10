//Created by Mechii
import './BottomNav.css'; 

import { FaHome, FaCalendar, FaBook, FaShoppingCart, FaUser } from 'react-icons/fa';

//I added the icons from react as a temporary placeholder, but I will add the images from our Hi-Fi later on so it's more 
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

