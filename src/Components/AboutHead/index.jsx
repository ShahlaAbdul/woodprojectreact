import React from 'react';
import './style.css'

function AboutHead({ headtitle }) {
  return (
    <div className="aboutContainer">
      <div className="aboutPage">
        <h1>{headtitle}</h1>
        <div className="pagestext">
          <a href="/">Home </a>
          <a href="/About"> About us</a>
        </div>
      </div>
    </div>
  );
}

export default AboutHead;
