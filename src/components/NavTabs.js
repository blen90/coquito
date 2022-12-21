import React from 'react';
import '../pages/style.css';


function NavTabs({ currentPage, handlePageChange }) {
  return (

    <ul className="nav nav-tabs justify-content-end" >
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Apps"
          onClick={() => handlePageChange('Apps')}
          className={currentPage === 'Apps' ? 'nav-link active' : 'nav-link'}>
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#policies"
          onClick={() => handlePageChange('Policies')}
          className={currentPage === 'Policies' ? 'nav-link active' : 'nav-link'}>
          Policies
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
          Contact
        </a>
      </li>
    </ul>

  );
}

export default NavTabs;
