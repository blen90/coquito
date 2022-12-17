import React from 'react';
// Here we are importing a CSS file as a dependency
import '../pages/style.css';

function Header() {
  return (

    <header className="header text-center">
      {/* <h1 className="display-3">Coquito Lashes</h1> */}
      <img src={process.env.PUBLIC_URL + '/assets/images/coquitologo1.jpg'} alt="coquitolashes1" className="coquitolashes1"></img>
    </header>
  );
}

export default Header;
