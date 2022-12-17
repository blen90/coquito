import React from 'react';
import '../pages/style.css';

export default function Card(props) {

    return (
        <div className="container text-center justify-content-center col-6-md col-3-sm">
            <div className="card-body">
                <h2 className="card-title">{props.name}</h2>
                <div className="card-image">{props.image}</div>
                <div className="card-text">{props.description}</div>
                <br></br>
                <div className="card-repo">{props.repository}</div>
                <div className="card-deployed">{props.deployed}</div>
                <div className="skill-container">{props.technologies}</div>
            </div>
        </div>
    );
}
