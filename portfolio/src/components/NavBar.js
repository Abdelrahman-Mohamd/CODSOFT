import React, { useState } from 'react';
import '../styles/NavBar.css';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(null);
// '2px solid rgb(160, 205, 160)'
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav>
      <ul>
        <li>
          <a
            href="#HOME"
            onClick={() => handleLinkClick('HOME')}
            style={{ color: activeLink === 'HOME' ? 'rgb(160, 205, 160)' : '' , borderBottom: activeLink === 'HOME' ? '3px solid rgb(160, 205, 160)' : ''}}
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="#ABOUT"
            onClick={() => handleLinkClick('ABOUT')}
            style={{ color: activeLink === 'ABOUT' ? 'rgb(160, 205, 160)' : '' , borderBottom: activeLink === 'ABOUT' ? '3px solid rgb(160, 205, 160)' : ''}}
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            href="#PROJECTS"
            onClick={() => handleLinkClick('PROJECTS')}
            style={{ color: activeLink === 'PROJECTS' ? 'rgb(160, 205, 160)' : '' , borderBottom: activeLink === 'PROJECTS' ? '3px solid rgb(160, 205, 160)' : ''}}
          >
            PROJECTS
          </a>
        </li>
        <li>
          <a
            href="#CONTACT"
            onClick={() => handleLinkClick('CONTACT')}
            style={{ color: activeLink === 'CONTACT' ? 'rgb(160, 205, 160)' : '' , borderBottom: activeLink === 'CONTACT' ? '3px solid rgb(160, 205, 160)' : ''}}
          >
            CONTACT ME
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;