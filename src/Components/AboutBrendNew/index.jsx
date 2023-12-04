import React from 'react';
import './style.css'
import Button from '../Button';

function AboutbrendNew() {
  return (
    <div>
      <div className="aboutBrendNew">
        <div className="aboutBrendNewLeft">
          <h5>BRAND NEW APP TO BLOW YOUR MIND</h5>
          <h2>WE’VE MADE A LIFE <br /> THAT WILL CHANGE YOU</h2>
          <h6>We are here to listen from you deliver exellence</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
          <Button title={<span>Get Started Now</span>}></Button>
        </div>
        <div className="aboutBrendNewRight">
          <img
            src="https://preview.colorlib.com/theme/woodrox/img/about-1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default AboutbrendNew;
