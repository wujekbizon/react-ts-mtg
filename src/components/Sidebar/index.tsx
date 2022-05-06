import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHatWizard,
  faBookDead,
  faMeteor,
} from '@fortawesome/free-solid-svg-icons';
import './index.scss';

interface NavTypes {
  onClick: () => void;
  exact: boolean;
  activeclassname: string;
  to: string;
}

const Sidebar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = (): void => {
    setNavbarOpen(false);
  };

  return (
    <div className="nav-bar">
      <nav>
        <NavLink onClick={() => closeMenu()} to="/">
          <FontAwesomeIcon icon={faMeteor} color="#4d4d4e" />
        </NavLink>
        <NavLink
          onClick={() => closeMenu()}
          className="search-link"
          to="/builddeck"
        >
          <FontAwesomeIcon icon={faHatWizard} color="#4d4d4e" />
        </NavLink>
        <NavLink
          onClick={() => closeMenu()}
          className="deck-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faBookDead} color="#4d4d4e" />
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
