// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DropdownMenu.css';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <button onClick={toggleDropdown} className="menu-icon">
        &#9776; {/* Ícone de menu (hamburger) */}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <ul>
            <li><Link to="/tool1">Tool 1</Link></li>
            <li><Link to="/tool2">Tool 2</Link></li>
            <li><Link to="/tool3">Tool 3</Link></li>
            <li><Link to="/tool4">Tool 4</Link></li>
            <li><Link to="/tool5">Tool 5</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;

