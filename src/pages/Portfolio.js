import React from 'react';
import Card from '../components/Card';
import './style.css';

const data = [
  {
    name: 'Project 1 - Cocktails-Cuisine-Craft-Beers',
    image: <img src={process.env.PUBLIC_URL + '/assets/images/landing_page.jpg'} alt="landing page" className="landing_page"></img>,
    description: <p>This is a web app that utilizes HTML, CSS and JavaScript. It allows the user to search for cocktail recipes to make at home by searching for a specific cocktail or spirit. It also allows the user to search for restaurants or breweries by Zipcode. </p>,

    repository: <a href="https://www.github.com/blen90/Cocktails-Cuisine-Craft-Beers.git" target="_blank" rel="noreferrer">Link to repository</a>,
    deployed: <a href="https://jacobbeckfeld.github.io/Cocktails-Cuisine-Craft-Beers/" target="_blank" rel="noreferrer">Link to deployed app</a>,
    technologies:
      <ul technologies-list-info-list>
        <br></br>
        <p>TECHNOLOGIES</p>
        <li className="skill"><a href="https://www.w3schools.com/html/default.asp" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={process.env.PUBLIC_URL + '/assets/icons/html.jpg'} alt="logo"></img></a></li>
        <li className="skill"><a href="https://www.w3schools.com/css/default.asp" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={process.env.PUBLIC_URL + '/assets/icons/css.jpg'} alt="logo"></img></a></li>
        <li className="skill"><a href="https://www.w3schools.com/js/default.asp" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={process.env.PUBLIC_URL + '/assets/icons/js.jpg'} alt="logo"></img></a></li>
      </ul>,
    id: 1,
  },

  {
    name: 'Project 2 - Event Organizer',
    image: <img src={process.env.PUBLIC_URL + '/assets/images/dashboard-project-2.jpg'} alt="landing page" className="dashboard"></img>,
    description: <p>This is a web application that utilizes MySQL, Handlebars, and several Node.js packages to deliver a live event search by Zipcode and save tool. The user can also visit the event's website as this app has a link to redirect them to it. The user can also use it to create and save their own events. Once the user has saved a searched event or a created event these will show up in their personal dashboard.</p>,
    repository: <a href="https://www.github.com/neilburt/group-project-2" target="_blank" rel="noreferrer">Link to repository</a>,
    deployed: <a href="https://gentle-reaches-60799.herokuapp.com/" target="_blank" rel="noreferrer">Link to deployed app</a>,
    technologies:
      <ul technologies-list-info-list>
        <br></br>
        <p>TECHNOLOGIES</p>
        <li className="skill"><a href="https://nodejs.org/en/docs/" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={process.env.PUBLIC_URL + '/assets/icons/node.jpg'} alt="logo"></img></a></li>
        <li className="skill"><a href="https://dev.mysql.com/doc/" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={process.env.PUBLIC_URL + '/assets/icons/mysql.jpg'} alt="logo"></img></a></li>
        <li className="skill"><a href="https://www.w3schools.com/css/default.asp" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={process.env.PUBLIC_URL + '/assets/icons/css.jpg'} alt="logo"></img></a></li>
        <li className="skill"><a href="https://www.w3schools.com/js/default.asp" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={process.env.PUBLIC_URL + '/assets/icons/js.jpg'} alt="logo"></img></a></li>
        <li className="skill"><a href="https://handlebarsjs.com/" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={process.env.PUBLIC_URL + '/assets/icons/handlebars.jpg'} alt="logo"></img></a></li>
        <li className="skill"><a href="https://www.postman.com/" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={process.env.PUBLIC_URL + '/assets/icons/postman.jpg'} alt="logo"></img></a></li>
      </ul>,
    id: 2,
  },

  {
    name: 'Project 3 - Bark Avenue',
    image: <img src={process.env.PUBLIC_URL + '/assets/images/barkAvenue.jpg'} alt="landing page" className="dashboard"></img>,
    description: <p>Bark Avenue is a luxury hotel for dogs that utilizes ReactJs, MongoDB and CSS. This app allows the user to sign up, or log in, set their pet's name, view the services that are offered, the user can then select a service to book a reservation, the user ca add their choices to the cart, update the cart and proceed to payment (right now it's a placeholder form) which shows a summary of the reservation details and the total for the reservation.</p>,
    repository: <a href="https://github.com/blen90/barkAvenue.jpg" target="_blank" rel="noreferrer">Link to repository</a>,
    deployed: <a href=" https://bark-avenue.herokuapp.com/" target="_blank" rel="noreferrer">Link to deployed app</a>,
    technologies:
      <ul technologies-list-info-list>
        <br></br>
        <p>TECHNOLOGIES</p>
        <li className="skill"><a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={process.env.PUBLIC_URL + '/assets/icons/react.jpg'} alt="logo"></img></a></li>
        <li className="skill"><a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={process.env.PUBLIC_URL + '/assets/icons/mongo.jpg'} alt="logo"></img></a></li>
        <li className="skill"><a href="https://www.w3schools.com/css/default.asp" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={process.env.PUBLIC_URL + '/assets/icons/css.jpg'} alt="logo"></img></a></li>
      </ul>,
    id: 3,
  },

  // {
  //   name: 'Password Generator',
  //   image: <img src={Password} alt="password-generator" className="password-generator"></img>,
  //   description: 'This app creates a random password with the choices the user picks',
  //   repository: <a href="https://www.github.com/blen90/hw3-code-generator.git" target="_blank" rel="noreferrer">Link to repository</a>,
  //   deployed: <a href="https://blen90.github.io/hw3-code-generator/" target="_blank" rel="noreferrer">Link to deployed app</a>,
  //   id: 4,
  // },
  // {
  //   name: 'Work Day Scheduler',
  //   image: <img src={Work} alt="work-scheduler" className="work-scheduler"></img>,
  //   description: 'This app allows the user to have a Work Day Scheduler and it saves tasks and changes color depending on what time it is',
  //   repository: <a href="https://github.com/blen90/hw5-workday-calendar.git" target="_blank" rel="noreferrer">Link to repository</a>,
  //   deployed: <a href="https://blen90.github.io/hw5-workday-calendar/" target="_blank" rel="noreferrer">Link to deployed app</a>,
  //   id: 5,
  // },
  // {
  //   name: 'Weather Dashboard',
  //   image: <img src={Weather} alt="weather-dashboard" className="weather-dashboard"></img>,
  //   description: 'This app allows the user to get the current weather in the city they want to checkout and gives the five day Forecast',
  //   repository: <a href="https://github.com/blen90/hw6-weather-dashboard.git" target="_blank" rel="noreferrer">Link to repository</a>,
  //   deployed: <a href="https://blen90.github.io/hw6-weather-dashboard/" target="_blank" rel="noreferrer">Link to deployed app</a>,
  //   id: 6,
  // },
  // {
  //   name: 'Note Taker',
  //   image: <img src={Notes} alt="note-taker" className="note-taker"></img>,
  //   description: 'This app allows the user to create notes, saved them and delete them.',
  //   repository: <a href="https://github.com/blen90/hw11-note-taker.git" target="_blank" rel="noreferrer">Link to repository</a>,
  //   deployed: <a href="https://atitlan-note-taker.herokuapp.com/" target="_blank" rel="noreferrer">Link to deployed app</a>,
  //   id: 7,
  // },
  // {
  //   name: 'Workout Tracker',
  //   image: <img src={Workout} alt="workout-tracker" className="workout-tracker"></img>,
  //   description: 'This app allows the user to create workout routines and keep track of them. It also keeps track of the past 7 days.',
  //   repository: <a href="https://github.com/blen90/hw18-workout-tracker.git" target="_blank" rel="noreferrer">Link to repository</a>,
  //   deployed: <a href="https://quiet-crag-39562.herokuapp.com/?id=610b4ad83d6a8d001502b06a" target="_blank" rel="noreferrer">Link to deployed app</a>,
  //   id: 8,
  // },
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