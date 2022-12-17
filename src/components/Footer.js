import React from 'react';
import '../pages/style.css';


export default function Footer() {
    return (
        <div className="footer-container text-center">
                <a href="https://www.github.com/blen90" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/assets/icons/github.jpg'} alt="github" className="github-logo"></img></a>
                <a href="https://www.linkedin.com/in/blenda-orellana" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/assets/icons/linkedin.jpg'} alt="linkedin" className="linkedin-logo"></img></a>
        </div>

    );
}