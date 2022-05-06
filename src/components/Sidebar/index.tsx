import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './index.scss';
const Sidebar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return <div className="nav-bar"></div>;
};

export default Sidebar;
