import { Link } from 'react-router-dom';
import homeIcon from '../public/HomeIcon.png';
import historyIcon from '../public/historyIcon.png';
import cartIcon from '../public/CartIcon.png';

import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={homeIcon} alt="ícono home" />
      </Link>
      <Link to="/history">
        <img src={historyIcon} alt="Ícono historial" />
      </Link>
      <Link to="/cart">
        <img src={cartIcon} alt="cartIcon" />
      </Link>
    </nav>
  );
}
