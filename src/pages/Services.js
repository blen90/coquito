import React from 'react';
import Card from '../components/Card';
import './style.css';

const data = [
  {
    name: 'Classic set',
    image: <img src={process.env.PUBLIC_URL + '/assets/images/coquitologo1.jpg'} alt="landing page" className="coquitolashes1"></img>,
    description: <p>Lashes</p>,
    id: 1,
  },

  {
    name: 'Classic set',
    image: <img src={process.env.PUBLIC_URL + '/assets/images/coquitologo1.jpg'} alt="landing page" className="coquitolashes1"></img>,
    description: <p>Lashes</p>,
    id: 2,
  },

  {
    name: 'Classic set',
    image: <img src={process.env.PUBLIC_URL + '/assets/images/coquitologo1.jpg'} alt="landing page" className="coquitolashes1"></img>,
    description: <p>Lashes</p>,
    id: 3,
  },

];

export default function Display() {
  return (
    <div className="projects">
      {data.map((projects) => (
        <Card name={projects.name} image={projects.image} description={projects.description} repository={projects.repository} deployed={projects.deployed} technologies={projects.technologies} key={projects.id} />
      ))}
    </div>
  );
}