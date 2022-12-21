import React from 'react';
import './style.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function App() {
  return (

    <Carousel>
      <div className='container col-6'>
        <img src={process.env.PUBLIC_URL + '/assets/images/coquitologo1.jpg'} className='coquito'/>
        <p className="service">Classic Lashes</p>
      </div>
      <div className='container col-6'>
      <img src={process.env.PUBLIC_URL + '/assets/images/coquitologo1.jpg'} className='coquito'/>
        <p className="service">Classic Lashes</p>
      </div>
      <div className='container col-6'>
      <img src={process.env.PUBLIC_URL + '/assets/images/coquitologo1.jpg'} className='coquito'/>
        <p className="service">Classic Lashes</p>
      </div>
    </Carousel>
  );
};
