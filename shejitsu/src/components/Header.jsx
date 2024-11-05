// src/components/Header.jsx
import logo from '../assets/logo.png'; // Adjust the path if needed
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Shejitsu Logo" className="logo" />
       </header>
  );
}
