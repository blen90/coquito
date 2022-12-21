import React, { useState } from 'react';
import NavTabs from '../components/NavTabs';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';
import Policies from './Policies';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');


  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Apps') {
      return <Services />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Policies') {
      return <Policies />;
    }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      </div>
 
  );
}
